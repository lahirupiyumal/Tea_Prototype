function Header() {
  return <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8"><a className="text-lg font-bold tracking-[.18em] text-emerald-950" href="/"><b className="mr-2 inline-grid h-8 w-8 place-items-center rounded-full bg-lime-300">✦</b> TEA<span className="text-lime-700">WISE</span></a><div className="hidden gap-6 text-sm font-semibold text-emerald-950 md:flex"><a href="/">Platform</a><a href="/component2">Plantation Health</a><a href="/harvest-readiness">Harvest Readiness</a><a href="/#about">About us</a></div><div className="flex items-center gap-3"><button className="hidden text-xs font-bold text-emerald-950 sm:block">EN⌄</button><a className="rounded-full bg-emerald-950 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-950/15" href="/component2">Open dashboard <span className="ml-1 text-lime-300">↗</span></a></div></nav>
}

export default Header
