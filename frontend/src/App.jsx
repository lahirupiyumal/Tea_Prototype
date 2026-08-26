import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Component1 from './components/component1'
import Component2 from './components/component2'
import HarvestIntelligent from './components/component2/HarvestIntelligent'
import HarvestReadinessDetection from './components/component2/HarvestReadinessDetection'
import YieldPrediction from './components/component2/YieldPrediction'
import HarvestQuality from './components/component2/HarvestQuality'
import DensityPlanning from './components/component2/DensityPlanning'
import Dashboard from './components/dashboard'
import Component4 from './components/component4'

function App() {
<<<<<<< HEAD
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
=======
  return <BrowserRouter><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/component2" element={<Component2 />} />
    <Route path="/plantation-health" element={<Component2 />} />
    <Route path="/harvest-intelligent" element={<HarvestIntelligent />} />
    <Route path="/harvest-readiness" element={<HarvestReadinessDetection />} />
    <Route path="/yield-prediction" element={<YieldPrediction />} />
    <Route path="/harvest-quality" element={<HarvestQuality />} />
    <Route path="/density-planning" element={<DensityPlanning />} />
    <Route path="/component4/*" element={<Component4 />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></BrowserRouter>
>>>>>>> 4ae3b886bdc79fa59711f27a61d3229718a9ea08
}

export default App;