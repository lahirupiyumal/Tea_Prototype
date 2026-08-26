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
import Login from './components/auth/Login'

function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Home />} />
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
}

export default App;
