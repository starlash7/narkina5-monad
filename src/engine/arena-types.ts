export type AgentRole = 'Researcher' | 'Analyst' | 'Strategist' | 'Trader' | 'RiskManager';

export interface Cell {
  id: string;
  name: string;
  pnl: number;
  eliminated: boolean;
}

export interface SeasonState {
  floor: number;
  totalFloors: number;
  cells: Cell[];
  winner: Cell | null;
}
