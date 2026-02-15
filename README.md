# NARKINA5 MONAD

Monad-native AI Cell elimination arena with nad.fun graduation flow.

`64 Cells · 512 Agents · 7 Floors · 1 Champion`

## What this is

NARKINA5 runs a full elimination season before launch.

Instead of launching first and hoping quality appears later, we force AI cells to survive a measurable tournament:

- market decisions under volatility
- hard risk constraints
- consistency requirements
- deterministic elimination rounds

Only the final champion cell can graduate.

## Why this is a Monad project

Monad is used as the execution and proof layer for graduation:

- champion graduation is written onchain via `CellRegistry`
- every graduation emits an auditable event
- each season can be replayed and verified against onchain outputs
- nad.fun is used as the launch destination for the champion identity

## Current architecture

```text
Wallet (EVM/Monad)
      |
      v
React App (Home / PnL Arena / Arena Live / About)
      |
      v
Arena Engine
 - 64->1 elimination state machine
 - role-weighted agent decisions
 - gate scoring (PnL / drawdown / consistency / risk)
      |
      +--> Market Adapter (trending + fallback simulation)
      |
      +--> Graduation Adapter
             |- Monad CellRegistry.write(recordChampion)
             |- local metadata persistence (season + tx hash)
             |- nad.fun launch handoff
```

## Onchain components

`contracts/src/CellRegistry.sol`

- `recordChampion(bytes32 seasonId, bytes32 cellId, int256 pnl)` writes a champion record
- emits `ChampionRecorded` event
- stores record history for season-level retrieval

This gives judges a real onchain artifact per graduation, not only UI state.

## Arena mechanics

### 1. Season structure

- Start: 64 cells (512 total agents)
- Floors: 7-step elimination bracket
- Finish: 1 survivor cell

### 2. Agent structure (per cell)

- Researcher
- Analyst
- Strategist
- Trader
- RiskManager

Each role contributes different decision weight during simulation.

### 3. Graduation gate

Champion must pass:

- minimum PnL threshold
- max drawdown limit
- consistency threshold
- zero critical risk violations
- season throughput cap

## Graduation flow

1. Run season to completion.
2. Champion cell appears in Arena Live.
3. Click `Launch on nad.fun`.
4. Wallet signs Monad tx to `CellRegistry`.
5. Tx confirmed; tx hash shown in UI.
6. nad.fun launch draft opens with champion identity.

## Environment

Create `.env` in repo root:

```bash
VITE_MONAD_CELL_REGISTRY_ADDRESS=0x...
VITE_MONAD_EXPLORER_TX_BASE_URL=https://testnet.monadexplorer.com/tx/
VITE_MONAD_RPC_URL=
VITE_MARKET_API_BASE=
VITE_ANTHROPIC_API_KEY=
```

## Local run

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 5176
```

## Judge demo script

1. Open Home.
2. Enter `PnL Arena` -> go to `Arena Live`.
3. Run a season until one survivor.
4. Show gate checks.
5. Execute graduation.
6. Show Monad tx link.
7. Open nad.fun launch handoff.

## Repo status

- UI flow ready
- season simulation ready
- Monad graduation registry write integrated
- nad.fun handoff integrated
- next step: production oracle hardening + multi-season analytics
