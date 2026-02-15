import { defineConfig, type Plugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const env = loadEnv('development', process.cwd(), '');
const DEFAULT_CHAIN = env.DEXSCREENER_CHAIN_ID || 'monad';

async function callClaude(system: string, user: string, maxTokens = 512): Promise<string> {
  const apiKey = env.VITE_ANTHROPIC_API_KEY || '';
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: maxTokens,
      system,
      messages: [{ role: 'user', content: user }],
    }),
  });
  if (!resp.ok) throw new Error(`Anthropic API: ${resp.status}`);
  const data = await resp.json() as { content?: Array<{ text?: string }> };
  return data.content?.[0]?.text || '';
}

function marketApiProxy(): Plugin {
  return {
    name: 'market-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/market', async (req, res) => {
        if (req.method !== 'GET') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        const url = new URL(req.url || '/', `http://${req.headers.host}`);
        const action = url.searchParams.get('action');
        const chain = (url.searchParams.get('chain') || DEFAULT_CHAIN).toLowerCase();

        try {
          if (action === 'trending') {
            const resp = await fetch('https://api.dexscreener.com/token-boosts/top/v1', {
              headers: { Accept: 'application/json' },
            });
            const data = (await resp.json()) as Array<Record<string, unknown>>;
            const chainTokens = data.filter((t) => String(t.chainId || '').toLowerCase().includes(chain)).slice(0, 20);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(chainTokens));
          } else if (action === 'token') {
            const mint = url.searchParams.get('mint');
            if (!mint) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing mint' }));
              return;
            }
            const resp = await fetch(`https://api.dexscreener.com/tokens/v1/${chain}/${mint}`, {
              headers: { Accept: 'application/json' },
            });
            const data = await resp.json();
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(data));
          } else if (action === 'prices') {
            const mints = (url.searchParams.get('mints') || '').split(',').filter(Boolean);
            if (mints.length === 0) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing mints' }));
              return;
            }
            const resp = await fetch(`https://api.dexscreener.com/tokens/v1/${chain}/${mints.join(',')}`, {
              headers: { Accept: 'application/json' },
            });
            const data = await resp.json();
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(data));
          } else {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid action' }));
          }
        } catch {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      });
    },
  };
}

function pnlAgentApiProxy(): Plugin {
  return {
    name: 'pnl-agent-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/pnl-agent', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        for await (const chunk of req) body += chunk;
        const parsed = JSON.parse(body);

        try {
          const { role, agentName, round, tokens, portfolio, context } = parsed;

          const ROLE_PROMPTS: Record<string, string> = {
            Researcher: 'You are a token researcher in a Monad PnL Arena cell. Analyze Monad ecosystem tokens and nad.fun-related narratives. Respond with ONLY valid JSON.',
            Analyst: 'You are a market analyst in a Monad PnL Arena cell. Score token sentiment and regime quality. Respond with ONLY valid JSON.',
            Strategist: 'You are a portfolio strategist in a Monad PnL Arena cell. Determine allocations under concentration limits. Respond with ONLY valid JSON.',
            Trader: 'You are an execution trader in a Monad PnL Arena cell. Execute trades with risk-aware sizing. Respond with ONLY valid JSON.',
            RiskManager: 'You are a risk manager in a Monad PnL Arena cell. Review exposure and veto unsafe trades. Respond with ONLY valid JSON.',
          };

          const systemPrompt = `You are ${agentName}. ${ROLE_PROMPTS[role] || ROLE_PROMPTS.Trader}`;

          let userPrompt = '';
          if (role === 'Researcher') {
            const tokenList = tokens.map((t: { symbol: string; priceSOL: number; volume24h: number; priceChange24h: number }) =>
              `${t.symbol}: price=${t.priceSOL.toFixed(6)}, vol=$${t.volume24h.toFixed(0)}, change=${t.priceChange24h.toFixed(1)}%`
            ).join('\n');
            userPrompt = `Round ${round}. Analyze these Monad tokens and return top 3 opportunities:\n${tokenList}\n\nJSON: [{"mint":"...","symbol":"...","thesis":"...","confidence":1-10,"targetPriceSOL":0.001}]`;
          } else if (role === 'Trader') {
            userPrompt = `Round ${round}. Cash: ${portfolio.cashSOL.toFixed(2)} SOL. ${context || ''}\nJSON: [{"side":"buy"|"sell","mint":"...","symbol":"...","amountSOL":5.0,"reasoning":"..."}]`;
          } else {
            userPrompt = `Round ${round}. Portfolio: ${portfolio.cashSOL.toFixed(2)} SOL. ${context || ''}\nRespond with appropriate JSON for your role.`;
          }

          const result = await callClaude(systemPrompt, userPrompt, 512);
          try {
            const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const output = JSON.parse(cleaned);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ role, agentName, output, raw: result }));
          } catch {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ role, agentName, output: null, raw: result }));
          }
        } catch {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({ include: ['buffer', 'crypto', 'stream', 'util'] }),
    marketApiProxy(),
    pnlAgentApiProxy(),
  ],
  optimizeDeps: {
    include: ['buffer', 'viem'],
  },
});
