# brew-alchemist

**WAVE_ID**: `2026-11-03-q-ember`

## Job
Catalog and score RPG coffee tips that boost focus, velocity, and streak without repeating prior tip cards.

## Responsibilities
- Emit one tip card per wave bound to Coffee-rpg-Tips.
- Assert no banned boardroom tokens in the tip text.
- Compute a simple density proxy (nodes * velocity / 10) and gate on PR-only.
- Never commit secrets or full prompt dumps.

## Required knowledge
- Basic coffee extraction variables (grind, temp, ratio).
- HustleCodex metrics: Nodes, Velocity, Streak, Decision, Prestige Density.
- Repo is currently a single README; this figure owns `figures/brew-alchemist/**`.

## Pass test
```js
// expected: { pass: true, density: 7.2, banned: false }
```

## Merge policy
PR only. Chair holds the gate.
