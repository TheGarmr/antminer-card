import { LovelaceCardConfig } from 'custom-card-helpers';
import { EntityKey } from './const';

type ExtraEntityKey = 'device_id';

export interface AntminerCustomEntityConfig {
    entity?: string;
    icon?: string;
    name?: string;
}

export interface AntminerCardConfig extends LovelaceCardConfig {
    language?: string;
    title?: string;
    prefix: string; // The entity prefix (e.g. "z15" for sensor.z15_hashrate)
    minerName?: string;
    model?: string; // Manual model override
    deviceId?: string;
    webUrl?: string; // Manual web UI url override
    powerSwitch?: string; // External power switch/breaker in front of the miner
    decimals?: number;
    tempWarn?: number;
    tempCrit?: number;
    boardCount?: number; // 0 = auto detect
    fanCount?: number; // 0 = auto detect
    titleAction?: 'device' | 'more-info';
    showTitle?: boolean;
    showButtons?: boolean;
    showMain?: boolean;
    showFans?: boolean;
    showBoards?: boolean;
    showCardVersion?: boolean;
    customEntities?: AntminerCustomEntityConfig[];
    customEntity1?: string;
    customEntity1Name?: string;
    customEntity1Icon?: string;
    customEntity2?: string;
    customEntity2Name?: string;
    customEntity2Icon?: string;
    customEntity3?: string;
    customEntity3Name?: string;
    customEntity3Icon?: string;
    entities: Partial<Record<EntityKey | ExtraEntityKey | string, string>>;
}
