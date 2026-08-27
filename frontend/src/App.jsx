import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Component1 from './components/component1'
import Component2 from './components/component2'
import Component3 from './components/component3'
import HarvestIntelligent from './components/component2/HarvestIntelligent'
import HarvestReadinessDetection from './components/component2/HarvestReadinessDetection'
import YieldPrediction from './components/component2/YieldPrediction'
import HarvestQuality from './components/component2/HarvestQuality'
import DensityPlanning from './components/component2/DensityPlanning'
import Dashboard from './components/dashboard'
import Component4 from './components/component4'
import Login from './components/auth/Login'
import Header from './components/layout/Header'

function AppLayout({ children, showHeader = true }) {
  return <>
    {showHeader && <Header />}
    {children}
  </>
}

function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/home" element={<AppLayout><Home /></AppLayout>} />
    <Route path="/login" element={<Login />} />
    <Route path="/component1/*" element={<AppLayout><Component1 /></AppLayout>} />
    <Route path="/disease-intelligence/*" element={<AppLayout><Component1 /></AppLayout>} />
    <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
    <Route path="/component2" element={<AppLayout><Component2 /></AppLayout>} />
    <Route path="/plantation-health" element={<AppLayout><Component2 /></AppLayout>} />
    <Route path="/harvest-intelligent" element={<AppLayout><HarvestIntelligent /></AppLayout>} />
    <Route path="/harvest-readiness" element={<AppLayout><HarvestReadinessDetection /></AppLayout>} />
    <Route path="/yield-prediction" element={<AppLayout><YieldPrediction /></AppLayout>} />
    <Route path="/harvest-quality" element={<AppLayout><HarvestQuality /></AppLayout>} />
    <Route path="/density-planning" element={<AppLayout><DensityPlanning /></AppLayout>} />
    <Route path="/tea-quality/*" element={<AppLayout><Component3 /></AppLayout>} />
    <Route path="/quality-intelligence/*" element={<AppLayout><Component3 /></AppLayout>} />
    <Route path="/origin-intelligence/*" element={<AppLayout><Component3 /></AppLayout>} />
    <Route path="/tea-provenance/*" element={<AppLayout><Component3 /></AppLayout>} />
    <Route path="/component4/*" element={<AppLayout><Component4 /></AppLayout>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></BrowserRouter>
}

export default App;
