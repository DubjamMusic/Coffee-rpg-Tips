import fs from 'fs';
const tip = JSON.parse(fs.readFileSync('./tip.json','utf8'));
const banned = ['planner','executor','monitor','data_agent'];
const text = JSON.stringify(tip).toLowerCase();
const hasBanned = banned.some(b => text.includes(b));
const density = (tip.nodes * tip.velocity) / 10;
const pass = tip.figure === 'brew-alchemist' && Math.abs(density - tip.expectedDensity) < 0.1 && !hasBanned && tip.prOnly;
console.log(JSON.stringify({ pass, density: density.toFixed(1), banned: hasBanned }));
if (!pass) process.exit(1);
