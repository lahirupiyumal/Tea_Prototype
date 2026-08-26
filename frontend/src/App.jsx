import Home from './components/home'
import Component1 from './components/component1'
import Component2 from './components/component2'
import HarvestReadinessDetection from './components/component2/HarvestReadinessDetection'

function App() {
  if (window.location.pathname === '/component1' || window.location.pathname === '/disease-intelligence') {
    return <Component1 />
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
