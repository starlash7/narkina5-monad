export interface MarketToken {
  symbol: string;
  price: number;
  volume24h: number;
}

export async function fetchTrending(): Promise<MarketToken[]> {
  return [];
}
