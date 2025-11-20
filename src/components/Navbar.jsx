import { Menu, Cpu, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide text-white">SiliconForge</p>
                <p className="text-[10px] uppercase tracking-wider text-blue-300/70">Manufacturing Cloud</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-blue-100/80 md:flex">
              <a href="#solutions" className="transition hover:text-white">Solutions</a>
              <a href="#platform" className="transition hover:text-white">Platform</a>
              <a href="#partners" className="transition hover:text-white">Partners</a>
              <a href="#resources" className="transition hover:text-white">Resources</a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-blue-100 transition hover:bg-white/10">
                <Search className="h-4 w-4 text-blue-300 transition group-hover:text-white" />
                <span>Search</span>
              </button>
              <a href="#demo" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110">
                Request demo
              </a>
            </div>

            <button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-blue-100 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
