import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Now", price: 1800 },
  { day: "7 Days", price: 1875 },
  { day: "14 Days", price: 1950 },
  { day: "21 Days", price: 1920 },
  { day: "30 Days", price: 1980 },
];

export default function PriceForecast() {

  return (
    <div>

      <div className="page-title">

        <div>

          <span>AI FORECAST</span>

          <h1>Tea Auction Price Forecast</h1>

          <p>
            AI prediction of future tea auction prices.
          </p>

        </div>

      </div>


      <div className="stats-grid">

        <Stat
          title="Current Price"
          value="Rs. 1,800"
          sub="/ kg"
        />

        <Stat
          title="7 Day Forecast"
          value="Rs. 1,875"
          sub="+4.2%"
        />

        <Stat
          title="14 Day Forecast"
          value="Rs. 1,950"
          sub="+8.3%"
        />

        <Stat
          title="Confidence"
          value="89%"
          sub="High confidence"
        />

      </div>


      <div className="card">

        <div className="card-header">

          <div>

            <h3>
              Historical vs Forecast Price
            </h3>

            <p>
              Temporal forecasting model
            </p>

          </div>

          <span className="status success">
            MODEL ACTIVE
          </span>

        </div>


        <div className="large-chart">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={data}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="price"
                stroke="#176b45"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      <div className="card">

        <h3>Forecast Factors</h3>

        <div className="factor-grid">

          <Factor
            name="Export Demand"
            value="35%"
          />

          <Factor
            name="Historical Price"
            value="27%"
          />

          <Factor
            name="Tea Quality"
            value="20%"
          />

          <Factor
            name="Tea Grade"
            value="12%"
          />

          <Factor
            name="Exchange Rate"
            value="6%"
          />

        </div>

      </div>

    </div>
  );
}


function Stat({ title, value, sub }) {

  return (
    <div className="stat-card">

      <span>{title}</span>

      <h2>{value}</h2>

      <small>{sub}</small>

    </div>
  );
}


function Factor({ name, value }) {

  return (
    <div className="factor">

      <span>{name}</span>

      <strong>{value}</strong>

    </div>
  );
}