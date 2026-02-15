import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #222' }}>
      <strong>NARKINA5 MONAD</strong>
      <nav style={{ display: 'flex', gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/arena">Arena</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
