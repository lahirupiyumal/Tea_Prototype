import Home from './components/home'
import Component2 from './components/component2'
import Component3 from './components/component3'
import HarvestReadinessDetection from './components/component2/HarvestReadinessDetection'

function App() {
  if (window.location.pathname === '/component3' || window.location.pathname === '/tea-intelligence' || window.location.pathname === '/quality-intelligence') {
    return <Component3 />
  }

  if (window.location.pathname === '/component2' || window.location.pathname === '/plantation-health') {
    return <Component2 />
  }

  if (window.location.pathname === '/harvest-readiness') {
    return <HarvestReadinessDetection />
  }

  return <Home />
}

export default App
