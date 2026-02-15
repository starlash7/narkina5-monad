import { useMemo, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { createSeason, runFloor } from '../engine/arena-engine';
import { isLaunchEligible } from '../engine/graduation-gate';

export function Arena() {
  const [season, setSeason] = useState(() => createSeason());
  const activeCount = useMemo(() => season.cells.filter((c) => !c.eliminated).length, [season]);
  const eligible = useMemo(() => isLaunchEligible(season.winner), [season.winner]);

  return (
    <div>
      <Header />
      <main style={{ padding: 24 }}>
        <h1>PnL Season Arena</h1>
        <p>Floor {season.floor} / {season.totalFloors}</p>
        <p>Active Cells: {activeCount}</p>
        <button onClick={() => setSeason((prev) => runFloor(prev))}>Run Next Floor</button>
        {season.winner && (
          <div style={{ marginTop: 16 }}>
            <h2>Champion: {season.winner.name}</h2>
            <p>PnL: {season.winner.pnl.toFixed(2)} SOL</p>
            <p>Graduation Gate: {eligible ? 'PASS' : 'BLOCKED'}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
