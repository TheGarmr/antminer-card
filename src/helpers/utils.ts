import { HomeAssistant, navigate as navigatePath } from 'custom-card-helpers';
import { AsicMinerCardConfig } from '../interfaces';

export type EntityDomain = 'sensor' | 'switch' | 'number' | 'binary_sensor';

const isFullEntityId = (value: string) => value.includes('.');

const prefixedEntityId = (config: AsicMinerCardConfig, suffix: string, type: EntityDomain) =>
    `${type}.${config?.prefix}_${suffix}`;

const candidateEntityIds = (
    config: AsicMinerCardConfig,
    entityKey: string,
    type: EntityDomain
): string[] => {
    const configuredValue = config?.entities?.[entityKey]?.toString()?.trim();
    const generated = prefixedEntityId(config, entityKey, type);

    const candidates = configuredValue && configuredValue.length > 1
        ? [
            isFullEntityId(configuredValue) ? configuredValue : prefixedEntityId(config, configuredValue, type),
            generated,
        ]
        : [generated];

    return [...new Set(candidates)];
};

export const resolveEntity = (
    hass: HomeAssistant,
    config: AsicMinerCardConfig,
    entityKey: string,
    type: EntityDomain = 'sensor'
) => {
    for (const entityId of candidateEntityIds(config, entityKey, type)) {
        const entity = hass?.states[entityId];
        if (entity) return { ...entity, entity_id: entityId };
    }
    return null;
};

export const resolveEntityId = (
    hass: HomeAssistant,
    config: AsicMinerCardConfig,
    entityKey: string,
    type: EntityDomain = 'sensor'
): string | undefined =>
    resolveEntity(hass, config, entityKey, type)?.entity_id ?? candidateEntityIds(config, entityKey, type)[0];

export const getState = (
    hass: HomeAssistant,
    config: AsicMinerCardConfig,
    entityKey: string,
    precision: number = 2,
    defaultValue = '',
    type: EntityDomain = 'sensor'
): string => {
    const entity = resolveEntity(hass, config, entityKey, type);
    if (!entity) return defaultValue;

    const state = entity.state;
    if (state === 'unknown' || state === 'unavailable') return defaultValue;

    const numeric = Number(state);
    if (!isNaN(numeric)) return numeric.toFixed(precision);

    return state ?? defaultValue;
};

export const getUnit = (
    hass: HomeAssistant,
    config: AsicMinerCardConfig,
    entityKey: string,
    type: EntityDomain = 'sensor'
): string => {
    const entity = resolveEntity(hass, config, entityKey, type);
    return entity?.attributes?.unit_of_measurement ?? '';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fireEvent(node: HTMLElement, type: string, detail: any, options?: any) {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event as any).detail = detail;
    node.dispatchEvent(event);
    return event;
}

export const navigate = (
    event,
    config: AsicMinerCardConfig,
    entityKey: string,
    type: EntityDomain = 'sensor',
    hass?: HomeAssistant
) => {
    if (!event) return;
    event.stopPropagation();

    const entity = hass ? resolveEntity(hass, config, entityKey, type) : null;
    const fullEntityId = entity?.entity_id ?? candidateEntityIds(config, entityKey, type)[0];
    const customEvent = new CustomEvent('hass-more-info', {
        detail: { entityId: fullEntityId },
        composed: true,
    });
    event.target.dispatchEvent(customEvent);
};

export const getDeviceId = (hass: HomeAssistant, config: AsicMinerCardConfig): string | undefined => {
    const configured = config?.deviceId?.trim() || config?.entities?.device_id?.toString()?.trim();
    if (configured) return configured;

    for (const key of ['hashrate', 'temperature', 'miner_consumption']) {
        const entity = resolveEntity(hass, config, key);
        if (!entity) continue;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const deviceId = (hass as any)?.entities?.[entity.entity_id]?.device_id;
        if (deviceId) return deviceId;
    }
    return undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDevice = (hass: HomeAssistant, config: AsicMinerCardConfig): any => {
    const deviceId = getDeviceId(hass, config);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return deviceId ? (hass as any)?.devices?.[deviceId] : undefined;
};

export const getWebUrl = (hass: HomeAssistant, config: AsicMinerCardConfig): string | undefined => {
    const configured = config?.webUrl?.trim();
    if (configured) return configured;
    return getDevice(hass, config)?.configuration_url ?? undefined;
};

export const navigateTitle = (event, hass: HomeAssistant, config: AsicMinerCardConfig) => {
    if (config?.titleAction !== 'device') {
        navigate(event, config, 'hashrate', 'sensor', hass);
        return;
    }

    event?.stopPropagation();

    const deviceId = getDeviceId(hass, config);
    if (deviceId) {
        navigatePath(event?.target, `/config/devices/device/${deviceId}`);
        return;
    }

    navigate(event, config, 'hashrate', 'sensor', hass);
};
