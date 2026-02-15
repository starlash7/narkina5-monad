import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const action = req.query.action as string;
    const chain = ((req.query.chain as string) || process.env.DEXSCREENER_CHAIN_ID || 'monad').toLowerCase();

    try {
        if (action === 'trending') {
            // Fetch trending tokens from DexScreener for requested chain
            const response = await fetch(
                'https://api.dexscreener.com/token-boosts/top/v1',
                { headers: { Accept: 'application/json' } },
            );
            if (!response.ok) {
                return res.status(response.status).json({ error: 'DexScreener trending failed' });
            }
            const data = await response.json();

            // Filter chain (supports variants like "monad" / "monad-testnet"), take top 20
            const chainTokens = (data as Array<Record<string, unknown>>)
                .filter((t) => String(t.chainId || '').toLowerCase().includes(chain))
                .slice(0, 20);

            return res.status(200).json(chainTokens);

        } else if (action === 'token') {
            // Fetch single token details from DexScreener
            const mint = req.query.mint as string;
            if (!mint) {
                return res.status(400).json({ error: 'Missing mint parameter' });
            }

            const response = await fetch(
                `https://api.dexscreener.com/tokens/v1/${chain}/${mint}`,
                { headers: { Accept: 'application/json' } },
            );
            if (!response.ok) {
                return res.status(response.status).json({ error: 'DexScreener token fetch failed' });
            }
            const data = await response.json();
            return res.status(200).json(data);

        } else if (action === 'prices') {
            // Batch fetch prices for multiple tokens
            const mints = (req.query.mints as string || '').split(',').filter(Boolean);
            if (mints.length === 0) {
                return res.status(400).json({ error: 'Missing mints parameter' });
            }

            // DexScreener supports multi-token lookup
            const response = await fetch(
                `https://api.dexscreener.com/tokens/v1/${chain}/${mints.join(',')}`,
                { headers: { Accept: 'application/json' } },
            );
            if (!response.ok) {
                return res.status(response.status).json({ error: 'DexScreener prices failed' });
            }
            const data = await response.json();
            return res.status(200).json(data);

        } else {
            return res.status(400).json({
                error: 'Invalid action. Use ?action=trending, ?action=token&mint=xxx, or ?action=prices&mints=x,y',
            });
        }
    } catch (err) {
        console.error('Market proxy error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
