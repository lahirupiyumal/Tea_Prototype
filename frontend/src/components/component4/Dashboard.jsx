import {
  TrendingUp,
  Globe2,
  ShieldCheck,
  Package,
  ArrowUpRight,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const priceData = [
  { day: "May 26", price: 3.62 },
  { day: "Jun 26", price: 3.55 },
  { day: "Jul 26", price: 3.76 },
  { day: "Aug 26", price: 3.89 },
  { day: "Sep 26", price: 4.12 },
  { day: "Oct 26", price: 4.18 },
  { day: "Nov 26", price: 4.42 },
  { day: "Dec 26", price: 4.72 },
];

const markets = [
  ["🇦🇪 UAE", 92],
  ["🇬🇧 United Kingdom", 87],
  ["🇷🇺 Russia", 81],
  ["🇮🇶 Iraq", 76],
  ["🇨🇳 China", 71],
];

export default function Dashboard() {
  return (
    <div>

      {/* PAGE HEADER */}

      <div className="page-title">
        <div>
          <span>EXPORT CONTROL CENTRE</span>
          <h1>Tea Export Intelligence</h1>
          <p>
            FOB spot rate, supply chain and strategic market indicators.
          </p>
        </div>

        <div className="online-status">
          <span></span>
          AI System Online · Q2 2026
        </div>
      </div>


      {/* STAT CARDS */}

      <div className="stats-grid">
        <StatCard title="Export Volume" value="12,840" unit="MT" change="+8.3% vs Q1 2026" positive />
        <StatCard title="Avg Price / KG" value="$4.72" change="-2.1% vs Q1 2026" />
        <StatCard title="Market Share" value="23.4%" change="+1.2% vs Q1 2026" positive />
        <StatCard title="Quality Index" value="91.2" unit="/100" change="+0.4 vs Q1 2026" positive />
      </div>


      {/* MAIN GRID */}

      <div className="dashboard-grid">

        {/* PRICE FORECAST */}

        <div className="card">

          <div className="card-header">

            <div>
              <h3>Tea Auction Price Forecast</h3>
              <p>
                AI predicted future auction prices
              </p>
            </div>

            <span className="confidence">
              89% Confidence
            </span>

          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={priceData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5ebe7"
                />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#176b45"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />

              </LineChart>

            </ResponsiveContainer>
          </div>

        </div>


        {/* AI DECISION */}

        <div className="card">

          <span className="card-label">
            AI DECISION
          </span>

          <h3>Recommended Action</h3>

          <div className="wait-action">
            <span>WAIT</span>
            <strong>14 DAYS</strong>
          </div>

          <div className="decision-row">
            <span>Expected Price</span>
            <strong>Rs. 1,950/kg</strong>
          </div>

          <div className="profit-box">
            <span>Expected Profit Gain</span>
            <strong>+12%</strong>
          </div>

          <div className="decision-row">
            <span>Confidence</span>
            <strong>89%</strong>
          </div>

          <button className="primary-btn">
            Why this recommendation?
          </button>

        </div>

      </div>


      {/* BOTTOM GRID */}

      <div className="dashboard-grid">

        {/* MARKET */}

        <div className="card">

          <div className="card-header">

            <div>
              <h3>Export Market Opportunities</h3>
              <p>
                AI market suitability ranking
              </p>
            </div>

            <Globe2 size={19} color="#176b45" />

          </div>


          {markets.map(([country, score]) => (

            <div
              className="market-progress"
              key={country}
            >

              <div className="market-name">

                <span>{country}</span>

                <strong>{score}%</strong>

              </div>

              <div className="progress">
                <div
                  style={{
                    width: `${score}%`,
                  }}
                />
              </div>

            </div>

          ))}

        </div>


        {/* CURRENT BATCH */}

        <div className="card">

          <div className="card-header">

            <div>
              <h3>Current Tea Batch</h3>
              <p>
                AI analyzed export batch
              </p>
            </div>

            <Package
              size={19}
              color="#176b45"
            />

          </div>


          <div className="batch-details">

            <Detail
              title="Batch ID"
              value="TB-2026-00125"
            />

            <Detail
              title="Grade"
              value="BOPF"
            />

            <Detail
              title="Quality"
              value="92%"
            />

            <Detail
              title="Moisture"
              value="7.8%"
            />

          </div>


          <div className="export-ready">
            ✓ Export Ready
          </div>

          <button className="secondary-btn">
            View Full Analysis
            <ArrowUpRight size={14} />
          </button>

        </div>

      </div>

    </div>
  );
}


function StatCard({ icon, title, value, unit, sub, change, positive }) {
  return (
    <div className="stat-card">

      {icon && <div className="stat-icon">{icon}</div>}

      <span>{title}</span>

      <h2>{value} <small>{unit}</small></h2>

      <small className={positive ? "stat-positive" : "stat-negative"}>
        {positive && (
          <b>{positive}</b>
        )}

        {change || sub}
      </small>

    </div>
  );
}


function Detail({ title, value }) {
  return (
    <div>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}