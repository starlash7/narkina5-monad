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
    <div className="page">
      <Header />
      <main className="content">
        <section className="panel">
          <h1>PnL Season Arena</h1>
          <p>Monad track · deterministic 7-floor elimination season</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Floor</div>
              <div className="stat-value">{season.floor} / {season.totalFloors}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Active Cells</div>
              <div className="stat-value">{activeCount}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Gate Status</div>
              <div className="stat-value">{season.winner ? (eligible ? 'PASS' : 'BLOCKED') : 'PENDING'}</div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => setSeason((prev) => runFloor(prev))}>
            Run Next Floor
          </button>
        </section>
        {season.winner && (
          <section className="panel">
            <h2>Champion: {season.winner.name}</h2>
            <p>PnL: {season.winner.pnl.toFixed(2)} MON</p>
            <p>Graduation Gate: {eligible ? 'PASS' : 'BLOCKED'}</p>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
