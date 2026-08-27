import { Bot } from "lucide-react";

const factors = [
  ["Export Demand", 35],
  ["Historical Price", 27],
  ["Tea Quality", 20],
  ["Tea Grade", 12],
  ["Exchange Rate", 6],
];

export default function AIRecommendation() {

  return (
    <div>

      <div className="page-title">

        <div>

          <span>AI DECISION SUPPORT</span>

          <h1>AI Recommendation</h1>

          <p>
            Explainable AI for tea selling decisions.
          </p>

        </div>

      </div>


      <div className="decision-banner">

        <span>RECOMMENDED ACTION</span>

        <h1>WAIT 14 DAYS</h1>


        <div className="decision-grid">

          <div>
            <span>Current Price</span>
            <strong>Rs. 1,800/kg</strong>
          </div>

          <div>
            <span>Expected Price</span>
            <strong>Rs. 1,950/kg</strong>
          </div>

          <div>
            <span>Expected Profit</span>
            <strong>+12%</strong>
          </div>

          <div>
            <span>Confidence</span>
            <strong>89%</strong>
          </div>

        </div>

      </div>


      <div className="card">

        <div className="card-header">

          <div>

            <h3>
              Explainable AI
            </h3>

            <p>
              Why did AI recommend waiting?
            </p>

          </div>

          <Bot color="#176b45" />

        </div>


        {factors.map(([name, value]) => (

          <div
            className="explanation"
            key={name}
          >

            <div>

              <span>{name}</span>

              <strong>{value}%</strong>

            </div>

            <div className="progress">

              <div
                style={{
                  width: `${value * 2.5}%`,
                }}
              />

            </div>

          </div>

        ))}


        <div className="ai-message">

          <Bot size={22} />

          <div>

            <strong>AI Explanation</strong>

            <p>
              Increasing export demand and strong
              tea quality contributed most to the
              predicted price increase. Therefore,
              the AI recommends waiting before
              selling this batch.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}