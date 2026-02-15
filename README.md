# NARKINA5 MONAD

> Autonomous AI Cell Arena for token graduation on Monad
> `64 Cells · 512 Agents · 7-Floor Season · 1 Champion`

## TL;DR

NARKINA5 MONAD turns token selection into a competitive AI tournament.
Instead of launching first and filtering later, we run a full elimination season and only allow a champion cell to graduate.

## Problem

- Meme token launches optimize attention before quality.
- Retail users cannot evaluate signal quality quickly.
- Most launchpads lack an objective, replayable pre-launch filter.

## Solution

- 512 AI agents are grouped into 64 cells.
- Cells compete across a 7-floor season.
- Each floor applies deterministic elimination by portfolio PnL and risk gates.
- Only the final champion cell becomes launch-eligible.

## Why Monad

- EVM compatibility for fast shipping.
- High throughput/low latency suitable for simulation-linked execution.
- Clean path to onchain gate contracts and auditable graduation metadata.

## Core Mechanics

### 1. Season Engine

- Bracket: `64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1`
- One season = 7 floors (target cadence: daily floor, weekly champion)
- Deterministic elimination ensures replayability

### 2. AI Roles per Cell

- `Researcher`: narrative and social catalyst mining
- `Analyst`: Wyckoff + technical regime validation
- `Strategist`: allocation and scenario planning
- `Trader`: execution and edge-cost filtering
- `RiskManager`: toxicity veto and drawdown defense

### 3. Graduation Gate

Champion must pass all:

- PnL threshold
- Drawdown limit
- Consistency threshold
- Zero critical risk violations
- Season throughput cap (`max 1 graduation / season window`)

## Architecture

```text
User/Wallet
   |
React App (Home / Arena / About)
   |
Arena Engine (season state machine)
 |         |          |
AI      Market      Monad Adapter
 |         |          |
 -------- Gate + Metadata --------
              |
           Monad
```

## What Works Now

- [x] Season simulation UI
- [x] Cell elimination pipeline
- [x] Agent role/doctrine model
- [x] Graduation gate evaluation
- [ ] Full onchain graduation contract write
- [ ] Production oracle hardening

## Local Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Environment Variables

Create `.env`:

```bash
VITE_MONAD_RPC_URL=
VITE_WALLETCONNECT_PROJECT_ID=
VITE_ANTHROPIC_API_KEY=
VITE_MARKET_API_BASE=
```

## Demo Flow (Judge Script)

1. Open Home and enter Arena.
2. Initialize season and run floors until champion.
3. Open champion panel and inspect gate checks.
4. Show launch eligibility result and metadata payload.

## Token / Revenue Model (Draft)

- Protocol revenue:
  - graduation processing fee
  - premium analytics access
  - strategy API tier
- Token utility:
  - staking for arena access tiers
  - fee discounts
  - governance over gate parameters

## Security and Risk Notes

- Trade decisions include cost-aware filters (slippage + impact + congestion).
- Risk manager can veto toxic assets using quality/suspicion checks.
- Deterministic non-AI fallback path protects runtime continuity.

## Roadmap

- **v0 (Hackathon):** local season + gate + demo-ready UI
- **v1:** Monad testnet contracts for gate registry and champion metadata
- **v2:** verifiable simulation proofs and strategy marketplaces
