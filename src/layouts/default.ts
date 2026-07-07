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

type OfflineReason = 'breaker_off' | 'miner_unavailable';

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

        .data-row .icon-name {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            gap: 3px;
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

        .hashrate-line {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            min-width: 0;
        }

        .compute-chip {
            width: 20px;
            height: 20px;
            flex: 0 0 20px;
            color: var(--amc-blue);
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 1.7;
            animation: compute-chip-pulse 2.2s ease-in-out infinite;
        }

        .compute-chip-core {
            fill: rgba(66, 165, 245, 0.18);
        }

        .compute-chip-trace {
            animation: compute-trace-pulse 1.1s ease-in-out infinite;
        }

        .compute-chip-trace-alt {
            animation-delay: 0.35s;
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

        .button-disabled {
            cursor: not-allowed;
            opacity: 0.45;
        }

        .button-disabled:hover {
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
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
            gap: 8px 12px;
            padding: 0.35rem 0.75rem;
            min-width: 0;
        }

        .board-metric {
            display: inline-flex;
            align-items: center;
            gap: 3px;
        }

        .metric-svg {
            width: 16px;
            height: 16px;
            flex: 0 0 16px;
            color: var(--secondary-text-color, #808080);
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2;
        }

        .metric-svg-fill {
            fill: currentColor;
            stroke: none;
        }

        .metric-svg-voltage {
            color: var(--amc-yellow);
            fill: currentColor;
            stroke: none;
        }

        @keyframes fan-spin-clockwise {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes water-bubble {
            0%,
            100% {
                transform: translateY(0) scale(1);
            }
            35% {
                transform: translateY(-2px) scale(1.08);
            }
            70% {
                transform: translateY(1px) scale(0.96);
            }
        }

        @keyframes flow-right {
            0% {
                transform: translateX(-4px);
                opacity: 0;
                text-shadow: -7px 0 0 rgba(66, 165, 245, 0);
            }
            28% {
                opacity: 0.9;
            }
            68% {
                opacity: 1;
                text-shadow: -4px 0 0 rgba(66, 165, 245, 0.35);
            }
            100% {
                transform: translateX(7px);
                opacity: 0;
                text-shadow: -9px 0 0 rgba(66, 165, 245, 0);
            }
        }

        @keyframes flow-left {
            0% {
                transform: translateX(4px);
                opacity: 0;
                text-shadow: 7px 0 0 rgba(66, 165, 245, 0);
            }
            28% {
                opacity: 0.9;
            }
            68% {
                opacity: 1;
                text-shadow: 4px 0 0 rgba(66, 165, 245, 0.35);
            }
            100% {
                transform: translateX(-7px);
                opacity: 0;
                text-shadow: 9px 0 0 rgba(66, 165, 245, 0);
            }
        }

        @keyframes compute-chip-pulse {
            0%,
            100% {
                transform: scale(1);
                filter: drop-shadow(0 0 0 rgba(66, 165, 245, 0));
            }
            50% {
                transform: scale(1.06);
                filter: drop-shadow(0 0 4px rgba(66, 165, 245, 0.45));
            }
        }

        @keyframes compute-trace-pulse {
            0%,
            100% {
                opacity: 0.35;
            }
            50% {
                opacity: 1;
            }
        }

        .fan-icon {
            --mdc-icon-size: 16px;
            display: inline-flex;
            transform-origin: center;
            vertical-align: text-bottom;
            animation: fan-spin-clockwise 3.2s linear infinite;
        }

        .water-icon {
            --mdc-icon-size: 16px;
            display: inline-flex;
            transform-origin: center;
            vertical-align: text-bottom;
            color: var(--amc-blue);
            animation: water-bubble 2.8s ease-in-out infinite;
        }

        .water-value {
            display: inline-flex;
            justify-content: flex-end;
            align-items: baseline;
            flex-wrap: wrap;
            gap: 4px;
            white-space: normal;
            text-align: right;
        }

        .water-temp {
            display: inline-flex;
            align-items: baseline;
            gap: 2px;
        }

        .flow-arrow {
            display: inline-block;
            color: var(--amc-blue);
            font-weight: 700;
        }

        .flow-arrow-right {
            animation: flow-right 1.45s linear infinite;
        }

        .flow-arrow-left {
            animation: flow-left 1.45s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
            .compute-chip,
            .compute-chip-trace,
            .fan-icon,
            .water-icon,
            .flow-arrow-right,
            .flow-arrow-left {
                animation: none;
            }
        }

        .delta {
            color: var(--secondary-text-color, #808080);
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

    private _entityState(entityKey: string, type: 'sensor' | 'switch' | 'number' = 'sensor'): string | null {
        return resolveEntity(this.hass, this.config, entityKey, type)?.state ?? null;
    }

    private _isUnavailableState(state: string | null): boolean {
        return state === null || state === '' || state === 'unavailable' || state === 'unknown';
    }

    private _numericEntityState(entityKey: string, type: 'sensor' | 'switch' | 'number' = 'sensor'): number | null {
        const state = this._entityState(entityKey, type);
        if (this._isUnavailableState(state)) return null;
        const value = Number(state);
        return Number.isFinite(value) ? value : null;
    }

    private _minerEntitiesUnavailable(): boolean {
        const states = ['hashrate', 'temperature', 'miner_consumption']
            .map((key) => this._entityState(key))
            .filter((state): state is string => state !== null);

        return states.length > 0 && states.every((state) => this._isUnavailableState(state));
    }

    private _hasPositiveRuntimeTelemetry(): boolean {
        const directKeys = ['temperature', 'miner_consumption'];
        if (directKeys.some((key) => (this._numericEntityState(key) ?? 0) > 0)) return true;

        for (let i = 0; i < MAX_FANS; i++) {
            if ((this._numericEntityState(`fan_${i}_fan_speed`) ?? 0) > 0) return true;
        }

        for (let i = 0; i < MAX_BOARDS; i++) {
            const boardKeys = [
                `board_${i}_board_temperature`,
                `board_${i}_chip_temperature`,
                `board_${i}_board_hashrate`,
                `board_${i}_board_power`,
                `board_${i}_inlet_water_temperature`,
                `board_${i}_outlet_water_temperature`,
            ];
            if (boardKeys.some((key) => (this._numericEntityState(key) ?? 0) > 0)) return true;
        }

        return false;
    }

    private _minerTelemetryLost(): boolean {
        const activeState = this._entityState('active', 'switch');
        if (activeState === 'on') return false;

        const hashrateState = this._entityState('hashrate');
        const hashrate = this._numericEntityState('hashrate');
        const hasNoHashrate = this._isUnavailableState(hashrateState)
            || (hashrate !== null && hashrate <= 0);

        return hasNoHashrate && !this._hasPositiveRuntimeTelemetry();
    }

    private _offlineReason(): OfflineReason | null {
        if (this._powerState() === 'off') return 'breaker_off';
        if (this._minerEntitiesUnavailable() || this._minerTelemetryLost()) return 'miner_unavailable';
        return null;
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

    private _powerControlDisabled(): boolean {
        const id = this._powerEntityId();
        if (!id) return false;
        const state = this._powerState();
        return state !== 'on' && state !== 'off';
    }

    private _togglePower(event) {
        event?.stopPropagation();
        const id = this._powerEntityId();
        if (!id || this._powerControlDisabled()) return;
        this.hass.callService('homeassistant', 'toggle', { entity_id: id });
    }

    private _renderPowerButton(labelKey = 'buttons.power'): TemplateResult {
        const id = this._powerEntityId();
        if (!id) return html``;
        const state = this._powerState();
        const disabled = this._powerControlDisabled();
        const colorClass = state === 'on' ? 'status-on' : state === 'off' ? 'status-off' : 'status-unknown';
        return html`
            <div
                class="button-border button-padding center ${disabled ? 'button-disabled' : 'clickable'}"
                title="${disabled ? localize('html_texts.breakerUnavailableNote') : id}"
                aria-disabled="${disabled ? 'true' : 'false'}"
                @click=${(e) => this._togglePower(e)}
            >
                <ha-icon class="webui-icon" icon="mdi:power"></ha-icon>
                <span class="${colorClass}">${localize(labelKey)}</span>
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

    // Water cooling uses board inlet/outlet temperature sensors instead of fans.
    private _isImmersion(): boolean {
        const mode = this.getState('cooling_mode', 0, '').toLowerCase();
        return mode === 'immersion' || mode === 'immers';
    }

    private _renderFans(): TemplateResult {
        const count = this.detectCount('fan');
        if (!count) return html``;

        const rows: TemplateResult[] = [];
        for (let i = 0; i < count; i++) {
            const key = `fan_${i}_fan_speed`;
            const speed = this.getState(key, 0, '-');
            const unit = this.getUnit(key) || 'RPM';
            const fanNumber = i + 1;
            rows.push(html`
                <div class="data-row">
                    <span class="name icon-name" title="${localize('stats.fan')} ${fanNumber}">
                        <ha-icon class="fan-icon" icon="mdi:fan"></ha-icon>${fanNumber}
                    </span>
                    <span class="label clickable" @click=${(e) => this._navigate(e, key)}>${speed} ${unit}</span>
                </div>
            `);
        }
        return html`${rows}`;
    }

    private _waterBlockCount(): number {
        if (this.config.boardCount && this.config.boardCount > 0) return this.config.boardCount;

        let count = 0;
        for (let i = 0; i < MAX_BOARDS; i++) {
            const inletKey = `board_${i}_inlet_water_temperature`;
            const outletKey = `board_${i}_outlet_water_temperature`;
            if (resolveEntity(this.hass, this.config, inletKey) || resolveEntity(this.hass, this.config, outletKey)) {
                count = i + 1;
            }
        }
        return count;
    }

    private _renderWaterBlocks(): TemplateResult {
        const count = this._waterBlockCount();
        if (!count) return html``;

        const rows: TemplateResult[] = [];
        for (let i = 0; i < count; i++) {
            const blockNumber = i + 1;
            const inletKey = `board_${i}_inlet_water_temperature`;
            const outletKey = `board_${i}_outlet_water_temperature`;
            const deltaKey = `board_${i}_water_temperature_delta`;
            const inlet = this.getState(inletKey, 0, '-');
            const outlet = this.getState(outletKey, 0, '-');
            const delta = this.getState(deltaKey, 0, '');
            const unit = this.getUnit(inletKey) || this.getUnit(outletKey) || '°C';

            rows.push(html`
                <div class="data-row">
                    <span class="name icon-name" title="${localize('stats.block')} ${blockNumber}">
                        <ha-icon class="water-icon" icon="mdi:water"></ha-icon>
                        ${blockNumber}
                    </span>
                    <span class="label water-value">
                        <span class="water-temp clickable" title="${localize('stats.inlet')}" @click=${(e) => this._navigate(e, inletKey)}>
                            <span class="flow-arrow flow-arrow-right">→</span>${inlet}${unit}
                        </span>
                        <span>/</span>
                        <span class="water-temp clickable" title="${localize('stats.outlet')}" @click=${(e) => this._navigate(e, outletKey)}>
                            <span class="flow-arrow flow-arrow-left">←</span>${outlet}${unit}
                        </span>
                        ${delta !== '' ? html`
                            <span class="delta clickable" @click=${(e) => this._navigate(e, deltaKey)}>Δ${delta}${unit}</span>
                        ` : ''}
                    </span>
                </div>
            `);
        }
        return html`${rows}`;
    }

    private _renderCooling(): TemplateResult {
        return this._isImmersion() ? this._renderWaterBlocks() : this._renderFans();
    }

    private _renderComputeChip(): TemplateResult {
        return html`
            <svg class="compute-chip" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect class="compute-chip-core" x="7" y="7" width="10" height="10" rx="1.8"></rect>
                <path d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4"></path>
                <path d="M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4"></path>
                <path class="compute-chip-trace" d="M9.5 10.2h5M9.5 13.8h5"></path>
                <path class="compute-chip-trace compute-chip-trace-alt" d="M10.2 9.5v5M13.8 9.5v5"></path>
            </svg>
        `;
    }

    private _renderMetricIcon(type: 'board' | 'chip' | 'voltage'): TemplateResult {
        if (type === 'board') {
            return html`
                <svg class="metric-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"></path>
                    <path d="M12 8v8"></path>
                </svg>
            `;
        }

        if (type === 'chip') {
            return html`
                <svg class="metric-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="7" y="7" width="10" height="10" rx="1.5"></rect>
                    <path d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4"></path>
                    <path d="M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4"></path>
                </svg>
            `;
        }

        return html`
            <svg class="metric-svg metric-svg-voltage" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z"></path>
            </svg>
        `;
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
            const voltageKey = `board_${i}_board_voltage`;

            const temp = parseFloat(this.getState(tempKey, 0, 'NaN'));
            const chip = parseFloat(this.getState(chipKey, 0, 'NaN'));
            const hashrate = this.getState(hashKey, this.config.decimals ?? 2, '-');
            const voltage = this.getState(voltageKey, 2, '');
            const voltageUnit = this.getUnit(voltageKey) || 'V';

            rows.push(html`
                <div class="board-row stats-border">
                    <span class="pill">${i.toString().padStart(2, '0')}</span>
                    <span class="label board-metric clickable ${this._tempClass(temp)}" title="${localize('stats.boardTemp')}" @click=${(e) => this._navigate(e, tempKey)}>
                        ${this._renderMetricIcon('board')}${isNaN(temp) ? '-' : temp + ' °C'}
                    </span>
                    <span class="label board-metric clickable ${this._tempClass(chip)}" title="${localize('stats.chip')}" @click=${(e) => this._navigate(e, chipKey)}>
                        ${this._renderMetricIcon('chip')}${isNaN(chip) ? '-' : chip + ' °C'}
                    </span>
                    <span class="label clickable accent-blue" @click=${(e) => this._navigate(e, hashKey)}>
                        ${hashrate} ${boardHashUnit}
                    </span>
                    ${voltage !== '' ? html`
                    <span class="label board-metric clickable" title="${voltageUnit}" @click=${(e) => this._navigate(e, voltageKey)}>
                        ${this._renderMetricIcon('voltage')}${voltage} ${voltageUnit}
                    </span>` : ''}
                </div>
            `);
        }
        return html`
            <div class="section-title">${localize('html_texts.boards')}</div>
            <div class="grid grid-1">${rows}</div>
        `;
    }

    private _renderOffline(name: string, model: string, reason: OfflineReason): TemplateResult {
        const showTitle = this.config.showTitle !== false;
        const powerEntityId = this._powerEntityId();
        const statusText = localize(reason === 'breaker_off' ? 'status.powerOff' : 'status.offline');
        const noteText = localize(reason === 'breaker_off'
            ? 'html_texts.breakerOffNote'
            : 'html_texts.offlineNote');
        const powerLabel = reason === 'breaker_off' ? 'buttons.powerOn' : 'buttons.power';
        return html`
        <ha-card>
            ${showTitle ? html`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${(e) => this._navigateTitle(e)}>
                    <b>${name}</b> <span class="status-off">● ${statusText}</span><br/>
                    <span class="model-line">${model}</span>
                </div>
            </div>
            ` : html``}
            <div class="offline-note">${noteText}</div>
            ${powerEntityId ? html`
            <div class="grid grid-1">
                ${this._renderPowerButton(powerLabel)}
            </div>
            ` : html``}
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

        // Collapsed view when the breaker is off or all key telemetry is unavailable.
        const offlineReason = this._offlineReason();
        if (offlineReason) {
            return this._renderOffline(name, model, offlineReason);
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
                        <span class="hashrate-line">
                            ${this._renderComputeChip()}
                            <span class="big-value">${hashrate}</span>
                            <span class="big-unit">${hashUnit}</span>
                        </span>
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
                    ${showFans ? this._renderCooling() : ''}
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
