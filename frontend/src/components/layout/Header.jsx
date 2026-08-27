function Header() {
  return (
    <nav className="flex h-20 w-full items-center justify-between gap-6 px-3 md:px-6 lg:px-8" aria-label="Main navigation">
      <a className="flex shrink-0 items-center gap-3 text-[20px] font-bold tracking-[.18em] text-[#173d2e]" href="/home">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-[#dbe8dc] bg-white p-2 shadow-sm">
          <img src="/teawise-logo.png" alt="TeaWise logo" className="h-full w-full object-contain" />
        </span>
        TEA<span className="text-lime-700">WISE</span>
      </a>
      <div className="hidden items-center gap-8 text-sm font-semibold text-emerald-950 lg:flex">
        <a href="/home">Platform</a>
        <a href="/component2">Plantation Health</a>
        {/* <a href="/harvest-readiness">Harvest Readiness</a> */}
        {/* <a href="/yield-prediction">Yield Prediction</a> */}
        <a href="/harvest-quality">Harvest Quality</a>
        <a href="/density-planning">Density Planning</a>
        {/* <a href="/#about">About us</a> */}
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <a className="rounded-full bg-lime-300 px-4 py-3 text-xs font-bold text-emerald-950 shadow-lg hover:-translate-y-0.5" href="/harvest-intelligent">
          Harvest Intelligence
        </a>
        <a className="rounded-full bg-emerald-950 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-950/15 hover:-translate-y-0.5" href="/dashboard">
          Open dashboard
        </a>
      </div>
    </nav>
  )
}

export default Header
