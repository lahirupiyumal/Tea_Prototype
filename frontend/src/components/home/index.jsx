import '../../App.css'

function Home() {
  return (
    <main className="home">
      <nav className="nav"><a className="logo" href="#home"><b>✦</b> TEA<span>WISE</span></a><div className="links"><a href="#ecosystem">Ecosystem</a><a href="#impact">Our impact</a><a href="#about">About</a></div><button className="nav-cta">Get started ↗</button></nav>
      <section className="hero" id="home"><div className="hero-content"><p className="label">✳ THE FUTURE OF CEYLON TEA</p><h1>Growing a <i>smarter</i><br />future for Sri Lankan tea.</h1><p className="intro">AI-powered intelligence for every leaf, every land, and every livelihood. Helping our tea industry grow with clarity, care, and confidence.</p><div className="actions"><button className="primary">Explore the ecosystem ↗</button><a href="#ecosystem">See how it works ↓</a></div><div className="stats"><div><b>360°</b><small>End-to-end visibility</small></div><div><b>AI</b><small>Powered intelligence</small></div><div><b>100%</b><small>Made for Ceylon tea</small></div></div></div><div className="visual"><div className="sun"/><div className="mountain back"/><div className="mountain front"/><div className="sprig">❧</div><div className="insight"><small>FIELD INTELLIGENCE <strong>● LIVE</strong></small><h3>Nuwara Eliya Estate ↗</h3><div className="bars"><i/><i/><i/><i/><i/><i/><i/></div><footer><span>Harvest health</span><b>94.8% <em>+8.2%</em></b></footer></div><div className="alert"><b>◒</b><span><strong>Optimal harvest window</strong><small>Next 3–5 days</small></span></div></div></section>
      <section className="ecosystem" id="ecosystem"><p className="label">ONE ECOSYSTEM. EVERY POSSIBILITY.</p><h2>From soil to shelf,<br /><i>intelligence at every step.</i></h2><div className="cards"><article><b>⌁</b><h3>Know your fields</h3><p>Real-time crop health and weather insights for better decisions on every plot.</p><a href="#ecosystem">Explore field insights →</a></article><article><b>◉</b><h3>Grow with purpose</h3><p>Connect growers, factories, and buyers through one transparent ecosystem.</p><a href="#ecosystem">Discover the network →</a></article><article><b>⌘</b><h3>Trade with confidence</h3><p>Traceable quality data that helps Ceylon tea reach the world with full value.</p><a href="#ecosystem">See the difference →</a></article></div></section>
      <footer id="about"><span className="logo"><b>✦</b> TEA<span>WISE</span></span><span>Intelligence rooted in tradition.</span><span>© 2026 TeaWise</span></footer>
    </main>
  )
}

export default Home
