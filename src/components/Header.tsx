import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <span className="brand-mark">◎</span>
        <strong>NARKINA5 MONAD</strong>
      </div>
      <nav className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/arena">Arena</Link>
        <Link className="nav-link" to="/about">About</Link>
      </nav>
    </header>
  );
}
