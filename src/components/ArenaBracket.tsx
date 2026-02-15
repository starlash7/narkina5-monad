export function ArenaBracket({ flow }: { flow: string }) {
  return (
    <pre style={{ border: '1px solid #222', borderRadius: 8, padding: 12, overflowX: 'auto' }}>
      {flow}
    </pre>
  );
}
