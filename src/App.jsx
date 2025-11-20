import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Logos from './components/Logos';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Logos />
      <Features />

      <footer className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-blue-200/80">© {new Date().getFullYear()} SiliconForge. All rights reserved.</p>
            <div className="flex items-center gap-4 text-blue-200/80">
              <a href="#privacy" className="hover:text-white">Privacy</a>
              <span className="opacity-30">•</span>
              <a href="#terms" className="hover:text-white">Terms</a>
              <span className="opacity-30">•</span>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
