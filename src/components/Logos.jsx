function Logos() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-blue-200/70">
          Trusted by advanced manufacturers
        </p>
        <div className="grid grid-cols-2 gap-6 text-blue-200/70 sm:grid-cols-3 md:grid-cols-6">
          <div className="flex items-center justify-center rounded-lg bg-white/5 py-3 text-sm font-semibold">ZenSilicon</div>
          <div className="flex items-center justify-center rounded-lg bg-white/5 py-3 text-sm font-semibold">CoreWorks</div>
          <div className="flex items-center justify-center rounded-lg bg-white/5 py-3 text-sm font-semibold">NanoFab</div>
          <div className="flex items-center justify-center rounded-lg bg-white/5 py-3 text-sm font-semibold">DieForge</div>
          <div className="flex items-center justify-center rounded-lg bg-white/5 py-3 text-sm font-semibold">Waferlytics</div>
          <div className="flex items-center justify-center rounded-lg bg-white/5 py-3 text-sm font-semibold">SubstrateX</div>
        </div>
      </div>
    </section>
  );
}

export default Logos;
