import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div>
      <Header />
      <main style={{ padding: 24 }}>
        <h1>About</h1>
        <p>NARKINA5 MONAD uses a deterministic season engine with AI role specialization.</p>
      </main>
      <Footer />
    </div>
  );
}
