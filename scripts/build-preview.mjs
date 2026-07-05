// Generates dist/preview.html — a standalone page with mocked HA elements
// and a fake `hass` object, with the built bundle inlined (works via file://).
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const bundle = readFileSync(join(root, 'dist', 'antminer-card.js'), 'utf8')
    // keep inline <script> parsing safe
    .replace(/<\/script>/g, '<\\/script>');

const template = readFileSync(join(root, 'scripts', 'preview.template.html'), 'utf8');

writeFileSync(
    join(root, 'dist', 'preview.html'),
    template.split('/*__BUNDLE__*/').join(bundle)
);

console.log('✓ dist/preview.html generated');
