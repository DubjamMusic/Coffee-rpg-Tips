import { readFileSync } from 'node:fs';
const card = JSON.parse(readFileSync(new URL('./guide.json', import.meta.url), 'utf8'));
if (card.figureId !== 'brew-quest-guide') throw new Error('id mismatch');
if (Math.abs(card.expectedDensity - 8.167) > 0.001) throw new Error('density drift');
console.log('ok brew-quest-guide density=8.167');
