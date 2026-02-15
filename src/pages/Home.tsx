import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="panel">
          <h1>NARKINA5 MONAD</h1>
          <p>Monad-native AI cell tournament for weekly token graduation.</p>
          <div className="row">
            <Link className="btn btn-primary" to="/arena">Enter Arena</Link>
            <Link className="btn btn-secondary" to="/about">How It Works</Link>
          </div>
        </section>
        <section className="panel">
          <h2>Season Structure</h2>
          <p>64 cells compete across 7 floors. Only one champion cell reaches the graduation gate.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
