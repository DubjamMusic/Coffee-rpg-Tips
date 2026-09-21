#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const card = JSON.parse(readFileSync(join(here, 'ledger.json'), 'utf8'));

if (card.figureId !== 'brew-chronicler') throw new Error('bad figureId');
const banned = card.bannedTokens || [];
if (banned.some((t) => card.figureId.includes(t))) throw new Error('banned in id');
const classes = new Set(card.tips.map((t) => t.class));
for (const need of ['brew', 'encounter', 'prestige-loop']) {
  if (!classes.has(need)) throw new Error('missing class ' + need);
}
if (card.tips.length < 3) throw new Error('need 3+ tips');
if (!card.frozen.includes('affirmAgent.ts')) throw new Error('affirm not frozen');
console.log(`ok brew-chronicler tips=${card.tips.length} classes=${classes.size}`);
