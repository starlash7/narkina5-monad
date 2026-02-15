import type { ReactNode } from 'react';

export function StatsCard({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div style={{ border: '1px solid #222', borderRadius: 8, padding: 12 }}>
      <div style={{ color: '#999', fontSize: 12 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 600 }}>{value}</div>
    </div>
  );
}
