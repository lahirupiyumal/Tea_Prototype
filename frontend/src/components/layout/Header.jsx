import { useState } from 'react'

const primaryLinks = [
  ['Home', '/home'],
  ['Plantation Health', '/plantation-health'],
  ['Disease AI', '/disease-intelligence'],
  ['Quality & Origin', '/quality-intelligence'],
  ['Harvest Quality', '/harvest-quality'],
  ['Export Intelligence', '/component4'],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7eee8] bg-white/95 shadow-[0_4px_18px_rgba(23,61,46,.06)] backdrop-blur">
      <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8" aria-label="Main navigation">
        <a className="group flex shrink-0 items-center gap-2.5 text-[19px] font-bold tracking-[.2em] text-[#173d2e]" href="/home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#b9dca4] bg-[#f5faef] shadow-sm"><img className="h-8 w-8 object-contain" src="/teawise-logo.png" alt="TeaCore logo" /></span>
          Tea<span className="text-lime-700">Core</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-[#e7eee8] bg-[#fbfdf9] p-1 xl:flex">
          {primaryLinks.map(([label, href]) => <a key={href} className="rounded-full px-3 py-2 text-[12px] font-semibold text-[#315444] transition hover:bg-[#edf7e9]" href={href}>{label}</a>)}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a className="hidden rounded-full px-3 py-2.5 text-[13px] font-semibold text-[#315444] transition hover:bg-[#f1f7ef] sm:block" href="/login">Sign in</a>
          <a className="hidden rounded-full bg-[#82c54d] px-4 py-2.5 text-[13px] font-bold text-[#173d2e] shadow-[0_8px_18px_rgba(86,143,50,.18)] transition hover:-translate-y-0.5 md:block" href="/harvest-intelligent">Harvest Intelligence</a>
          <a className="rounded-full bg-[#173d2e] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_18px_rgba(23,61,46,.16)] transition hover:-translate-y-0.5 hover:bg-[#245641]" href="/dashboard">Open dashboard</a>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-[#dce9df] text-xl text-[#173d2e] xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
        </div>
      </nav>
      {menuOpen && <div className="border-t border-[#e7eee8] bg-[#f8fbf7] px-5 py-4 xl:hidden"><div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">{primaryLinks.map(([label, href]) => <a key={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-[#315444] hover:bg-[#edf7e9]" href={href}>{label}</a>)}<a onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-[#315444] hover:bg-[#edf7e9]" href="/density-planning">Density Planning</a></div></div>}
    </header>
  )
}

export default Header
