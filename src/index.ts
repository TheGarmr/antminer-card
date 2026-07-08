import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { EDITOR_NAME, EntityKey, MAIN_NAME } from './const';
import { AntminerCardConfig } from './interfaces';
import { localize } from './localize/localize';

import { version } from '../package.json';
import { globalData } from './helpers/globals';
import './layouts/default';

export const CARD_VERSION = version;

console.groupCollapsed(
    `%c⛏️ Antminer Card%c   ready!  🚀 (v${CARD_VERSION})`,
    'background: linear-gradient(to right, #ffc107, #42a5f5); color: black; font-weight: bold; padding: 2px 8px; border-radius: 6px;',
    'background: none; color: #AAA; font-style: italic;'
);
console.groupEnd();

@customElement(MAIN_NAME)
export class AntminerCard extends LitElement {
    @property() public hass!: HomeAssistant;
    @property() private _config?: AntminerCardConfig;

    public setConfig(config: AntminerCardConfig): void {
        this._config = AntminerCard.getStubConfig();
        this._config = { ...this._config, ...config };
        globalData.cardConfig = this._config;
    }

    static getStubConfig() {
        return {
            language: 'auto',
            title: '',
            prefix: 'miner',
            minerName: '',
            model: '',
            webUrl: '',
            powerSwitch: '',
            decimals: 2,
            tempWarn: 85,
            tempCrit: 95,
            boardCount: 0,
            fanCount: 0,
            titleAction: 'device',
            showTitle: true,
            showButtons: true,
            showMain: true,
            showFans: true,
            showBoards: true,
            showCardVersion: false,
            customEntities: [],
            customEntity1: '',
            customEntity1Name: '',
            customEntity1Icon: '',
            customEntity2: '',
            customEntity2Name: '',
            customEntity2Icon: '',
            customEntity3: '',
            customEntity3Name: '',
            customEntity3Icon: '',
            entities: Object.keys(EntityKey).reduce((acc, key) => {
                acc[key as EntityKey] = '';
                return acc;
            }, {} as Record<EntityKey, string>),
        } as unknown as AntminerCardConfig;
    }

    public static async getConfigElement() {
        await import('./editor');
        return document.createElement(EDITOR_NAME) as LovelaceCardEditor;
    }

    public getCardSize(): number {
        return 4;
    }

    // Full section width by default in HA sections view
    public getGridOptions() {
        return {
            columns: 12,
            min_columns: 6,
        };
    }

    render() {
        globalData.hass = this.hass;
        if (!this.hass || !this._config) return html``;

        return html`
            <antminer-default-layout .hass=${this.hass} .config=${this._config}></antminer-default-layout>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards = (window as any).customCards || [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards.push({
    type: MAIN_NAME,
    name: 'Antminer Card',
    preview: true,
    description: localize('common.description'),
    configurable: true,
});
