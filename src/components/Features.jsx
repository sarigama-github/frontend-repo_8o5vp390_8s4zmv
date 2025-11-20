import { Cpu, BarChart3, ShieldCheck, Workflow } from 'lucide-react';

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-blue-100/80">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="solutions" className="relative z-10 mx-auto -mt-24 max-w-7xl px-6 pb-20">
      <div className="mx-auto max-w-3xl pb-12 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Built for silicon makers</h2>
        <p className="mt-3 text-blue-100/90">From design to die sort, streamline operations with a platform tailored for CPU manufacturing.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Feature icon={Cpu} title="Fab telemetry" description="Real-time equipment data, SPC, and alerting unified across tools and lines." />
        <Feature icon={BarChart3} title="Yield analytics" description="Identify excursions, correlate root causes, and forecast ramp performance with AI." />
        <Feature icon={Workflow} title="Supplier hub" description="Collaborate with OSATs and substrate partners via shared, secure workflows." />
        <Feature icon={ShieldCheck} title="Compliance" description="Traceability and audit trails to meet global standards and customer requirements." />
      </div>
    </section>
  );
}

export default Features;
