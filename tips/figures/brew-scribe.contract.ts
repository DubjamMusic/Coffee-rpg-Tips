/**
 * brew-scribe — RPG tip brew latch with density gate.
 * WAVE_ID: 2026-10-25-q-rift
 */

export const FIGURE_ID = "brew-scribe";
export const WAVE_ID = "2026-10-25-q-rift";

export function scribeTip(tip: string, density: number): { scribed: boolean; densityOk: boolean } {
  const densityOk = density >= 7.5 && density <= 9.0;
  return { scribed: tip.length > 0 && densityOk, densityOk };
}

export function selfCheck(): { pass: boolean; scribed: boolean; densityOk: boolean } {
  const ok = scribeTip("Brew the perfect coffee for +1 initiative", 8.2);
  const low = scribeTip("weak", 5.0);
  return {
    pass: ok.scribed && ok.densityOk && !low.scribed,
    scribed: ok.scribed,
    densityOk: ok.densityOk,
  };
}

// Expected: { pass: true, scribed: true, densityOk: true }
