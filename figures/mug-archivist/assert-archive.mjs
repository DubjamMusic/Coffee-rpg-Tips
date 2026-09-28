#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const card = JSON.parse(readFileSync(join(here, 'archive.json'), 'utf8'));

if (card.figureId !== 'mug-archivist') throw new Error('bad figureId');
if (card.waveId !== '2026-09-28-m-relay') throw new Error('bad waveId');
if (card.mergePolicy !== 'pr-only') throw new Error('merge policy must be pr-only');
const banned = card.bannedTokens || [];
if (banned.some((t) => card.figureId.includes(t))) throw new Error('banned in id');
if ((card.offRosterThisWave || []).includes(card.figureId)) throw new Error('self off-roster');
const classes = new Set((card.liveTips || []).map((t) => t.class));
for (const need of ['brew', 'encounter', 'prestige-loop']) {
  if (!classes.has(need)) throw new Error('missing class ' + need);
}
if (card.liveTips.length < 3) throw new Error('need 3+ live tips');
if (card.archivedCitations.length < 3) throw new Error('need 3+ archived citations');
if (!card.frozen.includes('affirmAgent.ts')) throw new Error('affirm not frozen');
const liveIds = new Set(card.liveTips.map((t) => t.id));
for (const cite of card.archivedCitations) {
  if (liveIds.has(cite.id)) throw new Error('archived id reused as live ' + cite.id);
}
console.log(`ok mug-archivist live=${card.liveTips.length} archived=${card.archivedCitations.length}`);
