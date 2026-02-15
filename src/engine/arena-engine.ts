import type { Cell, SeasonState } from './arena-types';

const CELL_COUNT = 64;
const TOTAL_FLOORS = 7;

function seedCells(): Cell[] {
  return Array.from({ length: CELL_COUNT }, (_, i) => ({
    id: `cell-${i + 1}`,
    name: `Cell ${String(i + 1).padStart(2, '0')}`,
    pnl: 0,
    eliminated: false,
  }));
}

export function createSeason(): SeasonState {
  return {
    floor: 1,
    totalFloors: TOTAL_FLOORS,
    cells: seedCells(),
    winner: null,
  };
}

export function runFloor(state: SeasonState): SeasonState {
  const active = state.cells.filter((c) => !c.eliminated).map((cell) => ({
    ...cell,
    pnl: cell.pnl + (Math.random() * 6 - 2),
  }));

  const sorted = [...active].sort((a, b) => b.pnl - a.pnl);
  const survivors = Math.max(1, Math.floor(sorted.length / 2));
  const survivorIds = new Set(sorted.slice(0, survivors).map((c) => c.id));

  const nextCells = state.cells.map((cell) => {
    const updated = active.find((a) => a.id === cell.id) ?? cell;
    return { ...updated, eliminated: !survivorIds.has(updated.id) };
  });

  const nextFloor = Math.min(state.floor + 1, state.totalFloors);
  const remaining = nextCells.filter((c) => !c.eliminated);

  return {
    floor: nextFloor,
    totalFloors: state.totalFloors,
    cells: nextCells,
    winner: remaining.length === 1 || state.floor === state.totalFloors ? remaining[0] ?? null : null,
  };
}
