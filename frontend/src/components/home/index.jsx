import Header from '../layout/Header'
import Footer from '../layout/Footer'

const ecosystemFeatures = [
  {
    icon: '⌁',
    title: 'Know your fields',
    description: 'Real-time crop health and weather insights for better decisions on every plot.',
    link: 'Explore field insights',
  },
  {
    icon: '◉',
    title: 'Grow with purpose',
    description: 'Connect growers, factories, and buyers through one transparent ecosystem.',
    link: 'Discover the network',
  },
  {
    icon: '⌘',
    title: 'Trade with confidence',
    description: 'Traceable quality data that helps Ceylon tea reach the world with full value.',
    link: 'See the difference',
  },
]

const platformStats = [
  ['360°', 'End-to-end visibility'],
  ['AI', 'Powered intelligence'],
  ['100%', 'Made for Ceylon tea'],
]

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f2] via-[#f4f2e9] to-white font-sans text-emerald-950">
      <Header />

      <section className="mx-auto grid min-h-[620px] max-w-7xl items-center px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12" id="home">
        <div>
          <p className="text-xs font-bold tracking-[.2em] text-lime-700">✳ THE FUTURE OF CEYLON TEA</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[.98] tracking-tight md:text-7xl">
            Growing a <i className="text-lime-700">smarter</i>
            <br />
            future for Sri Lankan tea.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-slate-500">
            AI-powered intelligence for every leaf, every land, and every livelihood. Helping our tea industry grow with clarity, care, and confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a className="rounded-full bg-emerald-950 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800" href="#ecosystem">
              Explore the ecosystem ↗
            </a>
            <a className="rounded-full border border-emerald-950 px-6 py-4 font-bold text-emerald-950 transition hover:bg-emerald-950 hover:text-white" href="/component1">
              Open Disease Intelligence →
            </a>
            <a className="font-semibold text-emerald-950" href="#ecosystem">See how it works ↓</a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            {platformStats.map(([value, label]) => (
              <div className="border-l border-emerald-200 pl-3" key={label}>
                <b className="block text-2xl text-emerald-800">{value}</b>
                <small className="text-xs text-slate-500">{label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </section>

      <section className="bg-white px-5 py-24 text-center md:px-12" id="ecosystem">
        <p className="text-xs font-bold tracking-[.2em] text-lime-700">ONE ECOSYSTEM. EVERY POSSIBILITY.</p>
        <h2 className="mx-auto my-6 max-w-2xl text-4xl font-medium leading-tight md:text-5xl">
          From soil to shelf,
          <br />
          <i className="text-lime-700">intelligence at every step.</i>
        </h2>

        <div className="mx-auto grid max-w-6xl gap-5 text-left md:grid-cols-3">
          {ecosystemFeatures.map((feature) => (
            <article className="group rounded-2xl border border-emerald-100 bg-[#fbfcf8] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-xl" key={feature.title}>
              <b className="text-3xl text-lime-700">{feature.icon}</b>
              <h3 className="my-5 font-serif text-xl">{feature.title}</h3>
              <p className="mb-6 text-sm leading-6 text-slate-500">{feature.description}</p>
              <a className="text-xs font-bold text-lime-700" href="#ecosystem">{feature.link} →</a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
