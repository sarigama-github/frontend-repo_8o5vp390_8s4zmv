import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Live manufacturing insights
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Next‑gen platforms for CPU manufacturers
          </h1>
          <p className="mt-5 text-lg text-blue-100/90 md:text-xl">
            Bring wafer-to-world visibility to your fabrication lines with intuitive dashboards, AI-driven yield analytics, and connected partner ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110">
              Get a live demo
            </a>
            <a href="#explore" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20">
              Explore the platform
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 text-center text-white/90">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur">
              <p className="text-3xl font-bold">12%+</p>
              <p className="text-xs text-blue-200/80">Yield uplift</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur">
              <p className="text-3xl font-bold"><span className="align-top text-lg">&lt;</span>24h</p>
              <p className="text-xs text-blue-200/80">Ramp-to-report</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur">
              <p className="text-3xl font-bold">99.95%</p>
              <p className="text-xs text-blue-200/80">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
    </section>
  );
}

export default Hero;
