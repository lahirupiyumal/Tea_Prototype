import { Routes, Route } from "react-router-dom";

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
      <div className="component4-content">
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
      </div>
      <Footer />
    </div>
  );
}

export default Component4;