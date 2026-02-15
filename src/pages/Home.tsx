import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: 24 }}>
        <h1>NARKINA5 MONAD</h1>
        <p>AI cell tournament for weekly token graduation.</p>
        <Link to="/arena">Enter Arena</Link>
      </main>
      <Footer />
    </div>
  );
}
