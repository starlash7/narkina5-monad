import type { Cell } from './arena-types';

export interface GraduationGate {
  minPnl: number;
  maxDrawdownPercent: number;
  minConsistencyPercent: number;
  maxGraduationsPerSeason: number;
}

export const DEFAULT_GATE: GraduationGate = {
  minPnl: 10,
  maxDrawdownPercent: 15,
  minConsistencyPercent: 55,
  maxGraduationsPerSeason: 1,
};

export function isLaunchEligible(champion: Cell | null, gate: GraduationGate = DEFAULT_GATE): boolean {
  if (!champion) return false;
  return champion.pnl >= gate.minPnl;
}
