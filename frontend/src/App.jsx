import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Component1 from './components/component1'
import Component2 from './components/component2'
<<<<<<< HEAD
import Component3 from './components/component3'
=======
import HarvestIntelligent from './components/component2/HarvestIntelligent'
>>>>>>> 2e3a26f0b48cec89d62b26afadebc0ebab35a400
import HarvestReadinessDetection from './components/component2/HarvestReadinessDetection'
import YieldPrediction from './components/component2/YieldPrediction'
import HarvestQuality from './components/component2/HarvestQuality'
import DensityPlanning from './components/component2/DensityPlanning'
import Dashboard from './components/dashboard'
import Component4 from './components/component4'
import Login from './components/auth/Login'

function App() {
<<<<<<< HEAD
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
=======
  return <BrowserRouter><Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/component1/*" element={<Component1 />} />
    <Route path="/disease-intelligence/*" element={<Component1 />} />
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
>>>>>>> 2e3a26f0b48cec89d62b26afadebc0ebab35a400
}

export default App;
