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
            <NavItem to="." end icon={<LayoutDashboard size={16} />} label="Overview" />
            <NavItem to="batches" icon={<Database size={16} />} label="Tea batches" />
            <NavItem to="price-forecast" icon={<ChartNoAxesCombined size={16} />} label="Price forecast" />
            <NavItem to="market" icon={<Globe2 size={16} />} label="Market intelligence" />
            <NavItem to="export" icon={<CircleDollarSign size={16} />} label="Export planning" />
            <NavItem to="ai-recommendation" icon={<Sparkles size={16} />} label="AI recommendations" />
            <NavItem to="ai-advisor" icon={<Leaf size={16} />} label="AI advisor" />
            <NavItem to="blockchain" icon={<ShieldCheck size={16} />} label="Blockchain" />
            <NavItem to="passport" icon={<FileCheck2 size={16} />} label="Tea passport" />
          </nav>
          <div className="sidebar-note"><Sparkles size={15} /><span>Powered by smart tea intelligence</span></div>
        </aside>
        <main className="component4-main">
          <header className="component4-topbar">
            <div className="topbar-search"><Search size={16} /><input aria-label="Search Tea Smart AI" placeholder="Search your tea intelligence" /><kbd>⌘ K</kbd></div>
            <div className="topbar-actions"><button className="icon-btn" aria-label="Notifications"><Bell size={17} /></button><span className="topbar-divider" /><div className="topbar-user"><div className="avatar">TC</div><div><strong>TeaCore</strong><span>Export desk · Online</span></div></div></div>
          </header>
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
  return <a className="component4-brand" href="/home"><div className="tea-logo"><img src="/teawise-logo.png" alt="TeaCore logo" /></div><div><h2>Tea<b>Core</b></h2><span>Intelligence rooted in tea</span></div></a>;
}

function NavItem({ to, icon, label, end }) {
  const destination = to === "." ? "/component4" : `/component4/${to}`;
  return <NavLink to={destination} end={end}>{icon}<span>{label}</span></NavLink>;
}

export default Component4;