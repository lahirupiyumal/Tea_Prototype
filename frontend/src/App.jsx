import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Component2 from "./components/component2";
import HarvestReadinessDetection from "./components/component2/HarvestReadinessDetection";
import Component4 from "./components/component4";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/component2" element={<Component2 />} />

        <Route
          path="/plantation-health"
          element={<Component2 />}
        />

        <Route
          path="/harvest-readiness"
          element={<HarvestReadinessDetection />}
        />

        <Route
          path="/component4/*"
          element={<Component4 />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;