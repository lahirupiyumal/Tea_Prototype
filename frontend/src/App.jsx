import Home from './components/home'
import Component2 from './components/component2'
import HarvestReadinessDetection from './components/component2/HarvestReadinessDetection'
import YieldPrediction from './components/component2/YieldPrediction'
import HarvestQuality from './components/component2/HarvestQuality'
import DensityPlanning from './components/component2/DensityPlanning'
import Dashboard from './components/dashboard'

function App() {
  if (window.location.pathname === '/dashboard') {
    return <Dashboard />
  }

  if (window.location.pathname === '/component2' || window.location.pathname === '/plantation-health') {
    return <Component2 />
  }

  if (window.location.pathname === '/harvest-readiness') {
    return <HarvestReadinessDetection />
  }

  if (window.location.pathname === '/yield-prediction') {
    return <YieldPrediction />
  }

  if (window.location.pathname === '/harvest-quality') {
    return <HarvestQuality />
  }

  if (window.location.pathname === '/density-planning') {
    return <DensityPlanning />
  }

  return <Home />
}

export default App
