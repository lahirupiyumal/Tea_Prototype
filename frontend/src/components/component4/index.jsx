import { NavLink, Route, Routes } from "react-router-dom";
import { Bell, ChartNoAxesCombined, CircleDollarSign, Database, FileCheck2, Globe2, Leaf, LayoutDashboard, Search, ShieldCheck, Sparkles } from "lucide-react";

import Dashboard from "./Dashboard";
import TeaBatches from "./TeaBatches";
import PriceForecast from "./PriceForecast";
import MarketIntelligence from "./MarketIntelligence";
import ExportRecommendation from "./ExportRecommendation";
import AIRecommendation from "./AIRecommendation";
import AIAdvisor from "./AI_Advisor";
import BlockchainVerification from "./BlockchainVerification";
import DigitalTeaPassport from "./DigitalTeaPassport";
import Footer from "../layout/Footer";

import "./component4.css";

function Component4() {
  return (
    <div className="component4-shell">
      <div className="component4-layout">
        <aside className="component4-sidebar">
          <BrandMark />
          <p className="nav-kicker">EXPORT INTELLIGENCE</p>
          <nav aria-label="Tea Smart AI navigation">
            <NavItem to="/component4" end icon={<LayoutDashboard size={16} />} label="Overview" />
            <NavItem to="/component4/batches" icon={<Database size={16} />} label="Tea batches" />
            <NavItem to="/component4/price-forecast" icon={<ChartNoAxesCombined size={16} />} label="Price forecast" />
            <NavItem to="/component4/market" icon={<Globe2 size={16} />} label="Market intelligence" />
            <NavItem to="/component4/export" icon={<CircleDollarSign size={16} />} label="Export planning" />
            <NavItem to="/component4/ai-recommendation" icon={<Sparkles size={16} />} label="AI recommendations" />
            <NavItem to="/component4/ai-advisor" icon={<Leaf size={16} />} label="AI advisor" />
            <NavItem to="/component4/blockchain" icon={<ShieldCheck size={16} />} label="Blockchain" />
            <NavItem to="/component4/passport" icon={<FileCheck2 size={16} />} label="Tea passport" />
          </nav>
          <div className="sidebar-note"><Sparkles size={15} /><span>Powered by smart tea intelligence</span></div>
        </aside>
        <main className="component4-main">
          <header className="dashboard-topbar"><div className="dashboard-search"><Search size={17} /><span>Search your tea intelligence</span><kbd>⌘ K</kbd></div><div className="dashboard-user"><Bell size={18} /><i></i><span className="user-avatar">TC</span><div><strong>TeaCore</strong><small>Export desk · Online</small></div></div></header>
          <div className="component4-content"><div className="component4-page">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="batches" element={<TeaBatches />} />
              <Route path="price-forecast" element={<PriceForecast />} />
              <Route path="market" element={<MarketIntelligence />} />
              <Route path="export" element={<ExportRecommendation />} />
              <Route path="ai-recommendation" element={<AIRecommendation />} />
              <Route path="ai-advisor" element={<AIAdvisor />} />
              <Route path="blockchain" element={<BlockchainVerification />} />
              <Route path="passport" element={<DigitalTeaPassport />} />
            </Routes>
          </div></div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function BrandMark() {
  return <div className="component4-brand">
    <div className="tea-logo"><img src="/teawise-logo.png" alt="TeaCore logo" /></div>
    <div className="component4-brand-copy"><h2>Tea<span>Core</span></h2><p>Intelligence rooted in tea</p></div>
  </div>;
}

function NavItem({ to, icon, label, end }) {
  return <NavLink to={to} end={end}>{icon}<span>{label}</span></NavLink>;
}

export default Component4;
