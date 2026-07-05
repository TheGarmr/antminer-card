import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { AntminerCardConfig } from '../interfaces';
import { localize } from '../localize/localize';
import { globalData } from '../helpers/globals';
import {
    getDevice,
    getState,
    getUnit,
    getWebUrl,
    navigate,
    navigateTitle,
    resolveEntity,
    resolveEntityId,
} from '../helpers/utils';
import { MAX_BOARDS, MAX_FANS } from '../const';
import { version } from '../../package.json';

@customElement('antminer-default-layout')
export class AntminerDefaultLayout extends LitElement {
    @property() public hass!: HomeAssistant;
    @property() public config!: AntminerCardConfig;

    VERSION = version;

    static styles = css`
        :host {
            /* VNish-like palette: yellow / white / black / blue */
            --amc-yellow: #ffc107;
            --amc-blue: #42a5f5;
            --amc-red: #ef5350;
            --amc-text: var(--primary-text-color, #ffffff);
        }

        .grid {
            display: grid;
            gap: 4px;
            margin: 4px;
            align-content: center;
            min-width: 250px;
        }

        .grid-1 {
            grid-template-columns: 1fr;
        }

        .grid-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .grid > * {
            min-width: 0;
        }

        .center {
            text-align: center !important;
            align-content: center !important;
        }

        .clickable {
            cursor: pointer;
        }

        .section-padding {
            padding-top: 0.45rem;
            padding-bottom: 0.25rem;
        }

        .stats-padding {
            padding: 0.75rem 0.75rem 0.5rem 0.75rem;
            overflow: hidden;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 4px;
            margin-right: 4px;
            min-width: 0;
        }

        .data-row .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
            flex: 1 1 auto;
        }

        .label {
            font-size: clamp(0.68rem, round(20cqi + 0.2rem, 0.1rem), 1rem) !important;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .stats-border {
            border-width: var(--ha-card-border-width, 1px);
            border-style: solid;
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        }

        .button-border {
            border-width: var(--ha-card-border-width, 1px);
            border-style: solid;
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        }

        .button-padding {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .status-on {
            color: var(--amc-yellow);
        }

        .status-off {
            color: var(--amc-red);
        }

        .status-unknown {
            color: #808080;
        }

        .big-value {
            font-size: 1.7rem;
            font-weight: bold;
            color: var(--amc-yellow);
        }

        .big-unit {
            font-size: 1rem;
            font-weight: bold;
            color: var(--amc-yellow);
        }

        .temp-ok {
            color: var(--amc-text);
        }

        .temp-warn {
            color: var(--amc-yellow);
        }

        .temp-crit {
            color: var(--amc-red);
        }

        .accent-blue {
            color: var(--amc-blue);
        }

        .button-border:hover {
            border-color: var(--amc-yellow);
        }

        .webui {
            color: var(--amc-blue);
        }

        .model-line {
            font-size: 0.85rem;
            color: var(--secondary-text-color, #808080);
        }

        .pill {
            display: inline-block;
            padding: 0.2rem 0.2rem;
            background-color: var(--amc-yellow);
            color: #111111;
            border-radius: 999px;
            font-weight: 500;
            font-family: sans-serif;
            font-size: clamp(0.8rem, round(10cqi + 0.2rem, 0.2rem), 0.9rem);
            min-width: 1.8rem;
            text-align: center;
        }

        .board-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 8px;
            padding: 0.35rem 0.75rem;
            min-width: 0;
        }

        .fan-icon {
            --mdc-icon-size: 16px;
            vertical-align: text-bottom;
        }

        .webui-icon {
            --mdc-icon-size: 16px;
            vertical-align: text-bottom;
        }

        .offline-note {
            padding: 0.5rem 0.75rem 0.75rem 0.75rem;
            text-align: center;
            font-size: 0.85rem;
            color: var(--secondary-text-color, #808080);
        }

        .section-title {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--secondary-text-color, #808080);
            padding: 0.35rem 0.75rem 0 0.75rem;
        }

        .cardVersion {
            text-align: right;
            margin-right: 5px;
        }

        .version {
            font-style: italic;
            font-size: 0.8rem;
        }
    `;

    private _navigate(event, entityKey: string, type: 'sensor' | 'switch' | 'number' = 'sensor') {
        navigate(event, this.config, entityKey, type, this.hass);
    }

    private _navigateTitle(event) {
        navigateTitle(event, this.hass, this.config);
    }

    private getState(entityKey: string, precision: number = 2, defaultValue = '', type: 'sensor' | 'switch' | 'number' = 'sensor'): string {
        return getState(this.hass, this.config, entityKey, precision, defaultValue, type);
    }

    private getUnit(entityKey: string): string {
        return getUnit(this.hass, this.config, entityKey);
    }

    private detectCount(family: 'board' | 'fan'): number {
        const configured = family === 'board' ? this.config.boardCount : this.config.fanCount;
        if (configured && configured > 0) return configured;

        const max = family === 'board' ? MAX_BOARDS : MAX_FANS;
        let count = 0;
        for (let i = 0; i < max; i++) {
            const key = family === 'board'
                ? `board_${i}_board_temperature`
                : `fan_${i}_fan_speed`;
            if (resolveEntity(this.hass, this.config, key)) count = i + 1;
        }
        return count;
    }

    private _openWebUi(event) {
        event?.stopPropagation();
        const url = getWebUrl(this.hass, this.config);
        if (url) window.open(url, '_blank');
    }

    private _tempClass(value: number): string {
        if (isNaN(value)) return '';
        const warn = this.config.tempWarn ?? 85;
        const crit = this.config.tempCrit ?? 95;
        return value >= crit ? 'temp-crit' : value >= warn ? 'temp-warn' : 'temp-ok';
    }

    // --- External power switch (breaker in front of the miner) ---

    private _powerEntityId(): string | null {
        const raw = this.config.powerSwitch?.toString()?.trim();
        if (!raw) return null;
        return raw.includes('.') ? raw : `switch.${raw}`;
    }

    private _powerState(): string | null {
        const id = this._powerEntityId();
        if (!id) return null;
        return this.hass?.states[id]?.state ?? null;
    }

    private _togglePower(event) {
        event?.stopPropagation();
        const id = this._powerEntityId();
        if (!id) return;
        this.hass.callService('homeassistant', 'toggle', { entity_id: id });
    }

    private _renderPowerButton(): TemplateResult {
        const id = this._powerEntityId();
        if (!id) return html``;
        const state = this._powerState();
        const colorClass = state === 'on' ? 'status-on' : state === 'off' ? 'status-off' : 'status-unknown';
        return html`
            <div class="button-border button-padding center clickable" title="${id}" @click=${(e) => this._togglePower(e)}>
                <ha-icon class="webui-icon" icon="mdi:power"></ha-icon>
                <span class="${colorClass}">${localize('buttons.power')}</span>
            </div>
        `;
    }

    private _toggleMining(event) {
        event?.stopPropagation();
        const state = this.getState('active', 0, '', 'switch');
        if (state !== 'on' && state !== 'off') {
            navigate(event, this.config, 'active', 'switch', this.hass);
            return;
        }
        const entityId = resolveEntityId(this.hass, this.config, 'active', 'switch');
        this.hass.callService('switch', state === 'on' ? 'turn_off' : 'turn_on', { entity_id: entityId });
    }

    private _renderPauseButton(): TemplateResult {
        const state = this.getState('active', 0, '', 'switch');
        const isOn = state === 'on';
        const known = isOn || state === 'off';
        const icon = isOn ? 'mdi:pause' : 'mdi:play';
        const text = known
            ? localize(isOn ? 'buttons.pause' : 'buttons.resume')
            : localize('buttons.mining') + ': --';
        const colorClass = isOn ? 'status-on' : known ? 'status-off' : 'status-unknown';
        return html`
            <div class="button-border button-padding center clickable" @click=${(e) => this._toggleMining(e)}>
                <ha-icon class="webui-icon" icon="${icon}"></ha-icon>
                <span class="${colorClass}">${text}</span>
            </div>
        `;
    }

    private _renderWebUiButton(): TemplateResult {
        const url = getWebUrl(this.hass, this.config);
        if (!url) return html``;
        return html`
            <div class="button-border button-padding center clickable webui" @click=${(e) => this._openWebUi(e)}>
                <ha-icon class="webui-icon" icon="mdi:open-in-new"></ha-icon>
                ${localize('buttons.webui')}
            </div>
        `;
    }

    // Immersion cooling: sensor.<prefix>_cooling_mode == "immersion" — no fans to show
    private _isImmersion(): boolean {
        return this.getState('cooling_mode', 0, '').toLowerCase() === 'immersion';
    }

    private _renderFans(): TemplateResult {
        if (this._isImmersion()) return html``;
        const count = this.detectCount('fan');
        if (!count) return html``;

        const rows: TemplateResult[] = [];
        for (let i = 0; i < count; i++) {
            const key = `fan_${i}_fan_speed`;
            const speed = this.getState(key, 0, '-');
            const unit = this.getUnit(key) || 'RPM';
            rows.push(html`
                <div class="data-row">
                    <span class="name" title="${localize('stats.fan')} ${i}"><ha-icon class="fan-icon" icon="mdi:fan"></ha-icon> ${localize('stats.fan')} ${i}:</span>
                    <span class="label clickable" @click=${(e) => this._navigate(e, key)}>${speed} ${unit}</span>
                </div>
            `);
        }
        return html`${rows}`;
    }

    private _renderBoards(): TemplateResult {
        const count = this.detectCount('board');
        if (!count) return html``;

        const boardHashUnit = this.getUnit('board_0_board_hashrate');
        const rows: TemplateResult[] = [];
        for (let i = 0; i < count; i++) {
            const tempKey = `board_${i}_board_temperature`;
            const chipKey = `board_${i}_chip_temperature`;
            const hashKey = `board_${i}_board_hashrate`;

            const temp = parseFloat(this.getState(tempKey, 0, 'NaN'));
            const chip = parseFloat(this.getState(chipKey, 0, 'NaN'));
            const hashrate = this.getState(hashKey, this.config.decimals ?? 2, '-');

            rows.push(html`
                <div class="board-row stats-border">
                    <span class="pill">${i.toString().padStart(2, '0')}</span>
                    <span class="label clickable ${this._tempClass(temp)}" @click=${(e) => this._navigate(e, tempKey)}>
                        ${localize('stats.boardTemp')} ${isNaN(temp) ? '-' : temp + ' °C'}
                    </span>
                    <span class="label clickable ${this._tempClass(chip)}" @click=${(e) => this._navigate(e, chipKey)}>
                        ${localize('stats.chip')} ${isNaN(chip) ? '-' : chip + ' °C'}
                    </span>
                    <span class="label clickable accent-blue" @click=${(e) => this._navigate(e, hashKey)}>
                        ${hashrate} ${boardHashUnit}
                    </span>
                </div>
            `);
        }
        return html`
            <div class="section-title">${localize('html_texts.boards')}</div>
            <div class="grid grid-1">${rows}</div>
        `;
    }

    private _renderOffline(name: string, model: string): TemplateResult {
        const showTitle = this.config.showTitle !== false;
        return html`
        <ha-card>
            ${showTitle ? html`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${(e) => this._navigateTitle(e)}>
                    <b>${name}</b> <span class="status-off">● ${localize('status.offline')}</span><br/>
                    <span class="model-line">${model}</span>
                </div>
            </div>
            ` : html``}
            <div class="offline-note">${localize('html_texts.offlineNote')}</div>
            <div class="grid grid-1">
                <div class="button-border button-padding center clickable" @click=${(e) => this._togglePower(e)}>
                    <ha-icon class="webui-icon" icon="mdi:power"></ha-icon>
                    <span class="status-off">${localize('buttons.powerOn')}</span>
                </div>
            </div>
        </ha-card>
        `;
    }

    protected render() {
        globalData.hass = this.hass;
        if (!this.hass || !this.config) return html``;

        const device = getDevice(this.hass, this.config);
        const model = this.config.model
            || [device?.manufacturer, device?.model].filter(Boolean).join(' ')
            || '';
        const name = this.config.minerName
            || device?.name_by_user
            || device?.name
            || this.config.prefix
            || '';
        const fw = device?.sw_version;

        // Collapsed view when the external breaker is off
        if (this._powerState() === 'off') {
            return this._renderOffline(name, model);
        }

        const miningState = this.getState('active', 0, '', 'switch');
        const isMining = miningState === 'on';
        const known = miningState === 'on' || miningState === 'off';
        const statusClass = isMining ? 'status-on' : known ? 'status-off' : 'status-unknown';
        const statusText = known
            ? localize(isMining ? 'status.mining' : 'status.stopped')
            : localize('status.unknown');

        const decimals = this.config.decimals ?? 2;
        const hashrate = this.getState('hashrate', decimals, '-');
        const hashUnit = this.getUnit('hashrate') || 'TH/s';
        const idealHashrate = this.getState('ideal_hashrate', decimals);
        const idealUnit = this.getUnit('ideal_hashrate');

        const temp = parseFloat(this.getState('temperature', 0, 'NaN'));
        const tempUnit = this.getUnit('temperature') || '°C';
        const tempClass = this._tempClass(temp);

        const power = this.getState('miner_consumption', 0);
        const powerLimit = this.getState('power_limit', 0);
        const efficiency = this.getState('efficiency', 1);
        const efficiencyUnit = this.getUnit('efficiency') || 'J/TH';
        const preset = this.getState('active_preset_name', 0);

        const showTitle = this.config.showTitle !== false;
        const showButtons = this.config.showButtons !== false;
        const showMain = this.config.showMain !== false;
        const showFans = this.config.showFans !== false;
        const showBoards = this.config.showBoards !== false;
        const showCardVersion = this.config.showCardVersion === true;

        const buttonCount = 1
            + (getWebUrl(this.hass, this.config) ? 1 : 0)
            + (this._powerEntityId() ? 1 : 0);

        const defaultTitle = html`
            <b>${name}</b> <span class="${statusClass}">● ${statusText}</span><br/>
            <span class="model-line">
                ${model}${fw ? html` | ${localize('html_texts.firmware')}: ${fw}` : ''}
            </span>
        `;

        const title = (this.config.title && this.config.title.trim() !== '')
            ? html`<b>${this.config.title}</b> <span class="${statusClass}">● ${statusText}</span><br/>
                <span class="model-line">${model}</span>`
            : defaultTitle;

        return html`
        <ha-card>
            ${showTitle ? html`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${(e) => this._navigateTitle(e)}>
                    ${title}
                </div>
            </div>
            ` : html``}

            ${showButtons ? html`
            <div class="grid grid-${buttonCount}">
                ${this._renderPauseButton()}
                ${this._renderPowerButton()}
                ${this._renderWebUiButton()}
            </div>
            ` : html``}

            ${showMain ? html`
            <div class="grid grid-2 section-padding">
                <div class="stats-padding stats-border">
                    <div class="clickable center" @click=${(e) => this._navigate(e, 'hashrate')}>
                        <span class="big-value">${hashrate}</span> <span class="big-unit">${hashUnit}</span>
                    </div>
                    ${idealHashrate !== '' ? html`
                    <div class="data-row"><span class="name" title="${localize('stats.idealHashrate')}">${localize('stats.idealHashrate')}</span>
                        <span class="label clickable" @click=${(e) => this._navigate(e, 'ideal_hashrate')}>${idealHashrate} ${idealUnit}</span>
                    </div>` : ''}
                    ${efficiency !== '' && parseFloat(efficiency) > 0 ? html`
                    <div class="data-row"><span class="name" title="${localize('stats.efficiency')}">${localize('stats.efficiency')}</span>
                        <span class="label clickable" @click=${(e) => this._navigate(e, 'efficiency')}>${efficiency} ${efficiencyUnit}</span>
                    </div>` : ''}
                    ${preset !== '' && preset !== 'unknown' ? html`
                    <div class="data-row"><span class="name" title="${localize('stats.preset')}">${localize('stats.preset')}</span>
                        <span class="label clickable" @click=${(e) => this._navigate(e, 'active_preset_name')}>${preset}</span>
                    </div>` : ''}
                </div>

                <div class="stats-padding stats-border">
                    <div class="clickable center" @click=${(e) => this._navigate(e, 'temperature')}>
                        <span class="big-value ${tempClass}">${isNaN(temp) ? '-' : temp}</span>
                        <span class="big-unit ${tempClass}">${tempUnit}</span>
                    </div>
                    ${power !== '' && parseFloat(power) > 0 ? html`
                    <div class="data-row"><span class="name" title="${localize('stats.power')}">${localize('stats.power')}</span>
                        <span class="label clickable" @click=${(e) => this._navigate(e, 'miner_consumption')}>${power} W</span>
                    </div>` : ''}
                    ${powerLimit !== '' && parseFloat(powerLimit) > 0 ? html`
                    <div class="data-row"><span class="name" title="${localize('stats.powerLimit')}">${localize('stats.powerLimit')}</span>
                        <span class="label clickable" @click=${(e) => this._navigate(e, 'power_limit')}>${powerLimit} W</span>
                    </div>` : ''}
                    ${this._isImmersion() ? html`
                    <div class="data-row"><span class="name" title="${localize('stats.cooling')}">${localize('stats.cooling')}</span>
                        <span class="label clickable accent-blue" @click=${(e) => this._navigate(e, 'cooling_mode')}>${localize('html_texts.immersion')}</span>
                    </div>` : ''}
                    ${showFans ? this._renderFans() : ''}
                </div>
            </div>
            ` : html``}

            ${showBoards ? this._renderBoards() : html``}

            ${showCardVersion ? html`
            <div class="cardVersion">
                <span class="version">v.${this.VERSION}</span>
            </div>
            ` : html``}
        </ha-card>
        `;
    }
}
