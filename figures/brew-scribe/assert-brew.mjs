#!/usr/bin/env node
import { readFileSync } from 'fs';

const brew = JSON.parse(readFileSync(new URL('./brew.json', import.meta.url)));
const density = Math.pow(brew.nodes * brew.velocity * brew.streak * brew.decision, 0.25);
const ok = Math.abs(density - brew.expectedDensity) < 0.01 && brew.figure === 'brew-scribe';
console.log(ok ? `ok brew-scribe density=${density.toFixed(3)}` : 'fail');
process.exit(ok ? 0 : 1);
