# Antminer Card

A customizable Home Assistant Lovelace card for Antminer ASIC miners, designed for the [hass-miner](https://github.com/Schnitzel/hass-miner) integration. Visual style inspired by [jk-bms-card](https://github.com/Pho3niX90/jk-bms-card).

## Features

- Current hashrate with automatic unit (TH/s for SHA256, KSol/s for Equihash)
- Average temperature with configurable warning/critical thresholds
- Fan speeds (auto-detected, hidden when the miner has no fan sensors or uses immersion cooling — `sensor.<prefix>_cooling_mode` = `immersion`)
- Optional external power switch/breaker: power button on the card, collapsed OFFLINE view when the breaker is off
- Miner model, firmware and mining status in the header (from the HA device registry)
- Web UI button — opens the miner's web interface (`configuration_url` from the device, with manual override)
- Optional per-hashboard breakdown (board temp, chip temp, board hashrate)
- Visual configuration editor
- Localization: English, Русский, Українська

## Installation

### HACS (recommended)

1. HACS → three-dot menu → **Custom repositories**
2. Repository: `https://github.com/<your-username>/antminer-card`, type: **Dashboard**
3. Install "Antminer Card" and reload the browser. HACS registers the resource automatically.

### Manual

1. Copy `dist/antminer-card.js` to `config/www/` on your Home Assistant instance.
2. Add the resource: Settings → Dashboards → Resources → Add resource
   - URL: `/local/antminer-card.js`
   - Type: JavaScript module
3. Add the card to a dashboard: search for "Antminer Card".

## Configuration

Everything can be configured through the visual editor. YAML example:

```yaml
type: custom:antminer-card
prefix: z15            # entity prefix: sensor.z15_hashrate, switch.z15_active, ...
language: auto         # auto | en | ru | uk
powerSwitch: switch.miner_breaker  # optional: breaker in front of the miner
tempWarn: 85
tempCrit: 95
decimals: 2
boardCount: 0          # 0 = auto detect
fanCount: 0            # 0 = auto detect
showBoards: true
showFans: true
```

| Option | Default | Description |
|---|---|---|
| `prefix` | `miner` | Entity prefix. The card resolves `sensor.<prefix>_hashrate`, `sensor.<prefix>_temperature`, `sensor.<prefix>_fan_0_fan_speed`, `sensor.<prefix>_board_0_board_temperature`, `switch.<prefix>_active`, etc. |
| `language` | `auto` | `auto` follows HA language; `en`, `ru`, `uk` force a language |
| `title` | — | Custom title (otherwise miner name + model from the device registry) |
| `minerName` | — | Override the miner name |
| `model` | — | Override the model string |
| `webUrl` | — | Override the Web UI URL (otherwise taken from the device `configuration_url`) |
| `deviceId` | — | Override the HA device id (otherwise resolved from entities) |
| `decimals` | `2` | Hashrate decimals |
| `tempWarn` / `tempCrit` | `85` / `95` | Temperature thresholds (°C) for coloring |
| `boardCount` / `fanCount` | `0` | Number of boards/fans, `0` = auto detect |
| `titleAction` | `device` | `device` opens the device page, `more-info` opens the hashrate dialog |
| `showTitle`, `showButtons`, `showMain`, `showFans`, `showBoards`, `showCardVersion` | `true`/`false` | Show/hide zones |
| `entities` | — | Manual entity assignment (overrides prefix-based resolution per key) |

## Development

```bash
npm install
npm run build   # outputs dist/antminer-card.js + dist/preview.html
```
