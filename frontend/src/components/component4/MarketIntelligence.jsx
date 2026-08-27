import {
  Globe2,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

const markets = [
  ["🇦🇪 UAE", "High", "Very High", "Low", 92],
  ["🇬🇧 United Kingdom", "High", "High", "Low", 87],
  ["🇷🇺 Russia", "Medium", "High", "Medium", 81],
  ["🇮🇶 Iraq", "High", "Medium", "Medium", 76],
  ["🇨🇳 China", "Medium", "Medium", "Medium", 71],
];

export default function MarketIntelligence() {

  return (
    <div>

      <div className="page-title">

        <div>

          <span>GLOBAL MARKET</span>

          <h1>Market Intelligence</h1>

          <p>
            Global tea demand and market opportunities.
          </p>

        </div>

      </div>


      <div className="market-summary">

        <Summary
          icon={<Globe2 />}
          title="Global Demand"
          value="HIGH"
        />

        <Summary
          icon={<TrendingUp />}
          title="Market Trend"
          value="+6.8%"
        />

        <Summary
          title="Average Price"
          value="Rs. 1,800/kg"
        />

        <Summary
          icon={<ShieldAlert />}
          title="Market Risk"
          value="LOW"
        />

      </div>


      <div className="card">

        <div className="card-header">

          <div>

            <h3>
              Global Export Market Comparison
            </h3>

            <p>
              AI market intelligence
            </p>

          </div>

        </div>


        <div className="market-table">

          <div className="table-header">

            <span>Country</span>
            <span>Demand</span>
            <span>Price</span>
            <span>Risk</span>
            <span>Score</span>

          </div>


          {markets.map((market) => (

            <div
              className="table-row"
              key={market[0]}
            >

              <strong>{market[0]}</strong>

              <span>{market[1]}</span>

              <span>{market[2]}</span>

              <span>{market[3]}</span>

              <b>{market[4]}%</b>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}


function Summary({ icon, title, value }) {

  return (
    <div className="market-summary-card">

      {icon}

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}