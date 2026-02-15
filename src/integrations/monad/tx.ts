export interface GraduationPayload {
  championCellId: string;
  pnl: number;
  seasonId: string;
}

export async function submitGraduation(_payload: GraduationPayload): Promise<{ txHash: string }> {
  return { txHash: '0xmock' };
}
