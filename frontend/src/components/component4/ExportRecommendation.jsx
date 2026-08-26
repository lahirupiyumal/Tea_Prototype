import {
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const markets = [
  ["🇦🇪", "UAE", 92],
  ["🇬🇧", "United Kingdom", 87],
  ["🇷🇺", "Russia", 81],
  ["🇮🇶", "Iraq", 76],
  ["🇨🇳", "China", 71],
];

export default function ExportRecommendation() {

  return (
    <div>

      <div className="page-title">

        <div>

          <span>AI OPTIMIZATION</span>

          <h1>
            Export Market Recommendation
          </h1>

          <p>
            AI recommends the best country
            for your tea export.
          </p>

        </div>

      </div>


      <div className="export-grid">

        <div className="card">

          <div className="card-header">

            <div>

              <h3>Market Ranking</h3>

              <p>
                AI suitability score
              </p>

            </div>

          </div>


          {markets.map(
            ([flag, country, score], index) => (

              <div
                className="ranking-row"
                key={country}
              >

                <span>
                  #{index + 1}
                </span>

                <strong>
                  {flag} {country}
                </strong>

                <div className="progress">
                  <div
                    style={{
                      width: `${score}%`,
                    }}
                  />
                </div>

                <b>{score}%</b>

              </div>

            )
          )}

        </div>


        <div className="card recommendation-card">

          <span className="card-label">
            RECOMMENDED MARKET
          </span>

          <h2>🇦🇪 UAE</h2>

          <div className="recommend-score">
            92%
          </div>

          <span>
            Suitability Score
          </span>


          <div className="recommend-reasons">

            <p>
              <CheckCircle2 size={16} />
              High predicted demand
            </p>

            <p>
              <CheckCircle2 size={16} />
              Strong price potential
            </p>

            <p>
              <CheckCircle2 size={16} />
              Low market risk
            </p>

            <p>
              <CheckCircle2 size={16} />
              Suitable buyer preference
            </p>

          </div>


          <button className="primary-btn">

            View AI Explanation

            <ArrowUpRight size={15} />

          </button>

        </div>

      </div>

    </div>
  );
}