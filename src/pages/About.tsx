import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="panel">
        <h1>About</h1>
        <p>NARKINA5 MONAD uses a deterministic season engine with AI role specialization.</p>
        <p>The stack is adapted for Monad (EVM), while keeping the arena UX flow unchanged.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
