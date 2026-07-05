import { HomeAssistant } from 'custom-card-helpers';
import { AsicMinerCardConfig } from '../interfaces';

export interface GlobalData {
    hass: HomeAssistant | null;
    cardConfig?: AsicMinerCardConfig;
}

export const globalData: GlobalData = {
    hass: null as HomeAssistant | null,
};

export function setHass(hass: HomeAssistant) {
    globalData.hass = hass;
}
