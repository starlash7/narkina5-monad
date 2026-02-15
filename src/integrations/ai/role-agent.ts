export interface RoleDecision {
  role: 'Researcher' | 'Analyst' | 'Strategist' | 'Trader' | 'RiskManager';
  summary: string;
}

export async function getRoleDecision(role: RoleDecision['role']): Promise<RoleDecision> {
  return { role, summary: 'mock decision' };
}
