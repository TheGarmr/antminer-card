import { HomeAssistant, LovelaceCardEditor, LovelaceConfig } from 'custom-card-helpers';
import { html, LitElement, TemplateResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EDITOR_NAME, EntityKey } from './const';
import { AsicMinerCardConfig } from './interfaces';
import { localize } from './localize/localize';
import { fireEvent } from './helpers/utils';

@customElement(EDITOR_NAME)
export class AsicMinerCardEditor extends LitElement implements LovelaceCardEditor {
    @property() public hass!: HomeAssistant;
    @property() private _config!: AsicMinerCardConfig;
    @property() lovelace?: LovelaceConfig;

    static get styles() {
        return css`
            .boolean-row {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 16px;
                gap: 6px;
            }
            .label {
                font-size: 14px;
                color: var(--primary-text-color);
                line-height: 1.3;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
            }
        `;
    }

    public setConfig(config: AsicMinerCardConfig): void {
        this._config = { ...config };
    }

    private renderBoolean(label: string, configKey: keyof AsicMinerCardConfig) {
        return html`
            <div class="boolean-row">
                <span class="label">${label}</span>
                <ha-switch
                    .checked=${this._config?.[configKey] !== false}
                    @change=${(ev: Event) => this._handleSwitchChange(configKey, ev)}
                ></ha-switch>
            </div>
        `;
    }

    private _handleSwitchChange(key: keyof AsicMinerCardConfig, ev: Event): void {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target = ev.target as any;
        const config = { ...this._config! };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config[key] = !!target.checked as any;
        this._config = config;
        fireEvent(this, 'config-changed', { config: this._config });
    }

    protected render(): TemplateResult | void {
        if (!this._config || !this.hass) {
            return html``;
        }

        const entityConfigs = Object.values(EntityKey).map((key) => ({
            name: key,
            selector: { entity: {} },
        }));

        return html`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .computeLabel=${this._computeLabelCallback.bind(this)}
                .schema=${[
                    {
                        type: 'grid',
                        title: localize('config.language'),
                        schema: [
                            {
                                type: 'grid',
                                schema: [
                                    {
                                        name: 'language',
                                        selector: {
                                            select: {
                                                options: [
                                                    { label: 'Auto (follow HA)', value: 'auto' },
                                                    { label: 'English', value: 'en' },
                                                    { label: 'Русский', value: 'ru' },
                                                    { label: 'Українська', value: 'uk' },
                                                ],
                                                mode: 'dropdown',
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'grid',
                        title: localize('config.title'),
                        schema: [
                            {
                                type: 'grid',
                                schema: [
                                    { name: 'title', selector: { text: {} } },
                                    {
                                        name: 'titleAction',
                                        selector: {
                                            select: {
                                                options: [
                                                    { label: 'Device page', value: 'device' },
                                                    { label: 'More info', value: 'more-info' },
                                                ],
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'grid',
                        title: localize('config.prefix'),
                        schema: [
                            {
                                type: 'grid',
                                column_min_width: '200px',
                                schema: [
                                    { name: 'prefix', selector: { text: {} } },
                                    { name: 'minerName', selector: { text: {} } },
                                    { name: 'model', selector: { text: {} } },
                                    { name: 'webUrl', selector: { text: {} } },
                                    { name: 'powerSwitch', selector: { entity: { domain: 'switch' } } },
                                    { name: 'deviceId', selector: { text: {} } },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'grid',
                        title: localize('config.boardCount'),
                        schema: [
                            {
                                type: 'grid',
                                schema: [
                                    { name: 'boardCount', selector: { number: { min: 0, max: 8, step: 1 } } },
                                    { name: 'fanCount', selector: { number: { min: 0, max: 8, step: 1 } } },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'grid',
                        schema: [
                            {
                                type: 'grid',
                                column_min_width: '200px',
                                schema: [
                                    { name: 'tempWarn', selector: { number: { min: 0, max: 150, step: 1, mode: 'box' } } },
                                    { name: 'tempCrit', selector: { number: { min: 0, max: 150, step: 1, mode: 'box' } } },
                                    { name: 'decimals', selector: { number: { min: 0, max: 3, step: 1 } } },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'expandable',
                        title: localize('config.manualAssignment'),
                        schema: [
                            {
                                name: 'entities',
                                type: 'grid',
                                schema: entityConfigs,
                            },
                        ],
                    },
                ]}
                @value-changed=${this._valueChanged.bind(this)}
            ></ha-form>

            <ha-expansion-panel outlined style="margin-top: 10px;">
                <div slot="header" style="padding: 8px 16px; font-weight: 500;">
                    ${localize('config.titleShowHide')}
                </div>
                <div style="padding: 16px;
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
                            gap: 16px;">
                    ${this.renderBoolean(localize('config.showTitle'), 'showTitle')}
                    ${this.renderBoolean(localize('config.showButtons'), 'showButtons')}
                    ${this.renderBoolean(localize('config.showMain'), 'showMain')}
                    ${this.renderBoolean(localize('config.showFans'), 'showFans')}
                    ${this.renderBoolean(localize('config.showBoards'), 'showBoards')}
                    <div class="boolean-row">
                        <span class="label">${localize('config.showCardVersion')}</span>
                        <ha-switch
                            .checked=${this._config?.showCardVersion === true}
                            @change=${(ev: Event) => this._handleSwitchChange('showCardVersion', ev)}
                        ></ha-switch>
                    </div>
                </div>
            </ha-expansion-panel>
        `;
    }

    private _computeLabelCallback = (data) => localize(`config.${data.name}`) ?? data.name;

    private _valueChanged(ev: CustomEvent): void {
        const config = { ...this._config };
        Object.assign(config, ev.detail.value);
        this._config = config;
        fireEvent(this, 'config-changed', { config: this._config });
    }
}
