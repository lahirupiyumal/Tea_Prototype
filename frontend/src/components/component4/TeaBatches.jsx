import {
  Search,
  Package,
  Droplets,
  CheckCircle,
} from "lucide-react";

export default function TeaBatches() {

  return (
    <div>

      <div className="page-title">
        <div>
          <span>TEA DATA</span>

          <h1>Tea Batch Analysis</h1>

          <p>
            Analyze tea quality and export readiness.
          </p>
        </div>
      </div>


      {/* SEARCH */}

      <div className="search-box">

        <Search size={18} />

        <input
          placeholder="Enter Tea Batch ID..."
        />

        <button className="primary-btn">
          Analyze Batch
        </button>

      </div>


      {/* BATCH */}

      <div className="batch-grid">

        <div className="card">

          <div className="card-header">

            <div>
              <span className="card-label">
                BATCH ID
              </span>

              <h2>
                TB-2026-00125
              </h2>

              <p>
                📍 Nuwara Eliya, Sri Lanka
              </p>
            </div>

            <span className="status success">
              ✓ EXPORT READY
            </span>

          </div>


          <div className="details-grid">

            <Detail
              title="Tea Grade"
              value="BOPF"
            />

            <Detail
              title="Quantity"
              value="2,500 kg"
            />

            <Detail
              title="Quality Score"
              value="92%"
            />

            <Detail
              title="Moisture"
              value="7.8%"
            />

            <Detail
              title="Defect Level"
              value="Low"
            />

            <Detail
              title="Market"
              value="UAE"
            />

          </div>

        </div>


        <div className="card quality-card">

          <span className="card-label">
            AI QUALITY SCORE
          </span>

          <div className="quality-circle">
            <strong>92</strong>
            <span>/100</span>
          </div>

          <p>
            Premium export potential detected.
          </p>

        </div>

      </div>


      {/* INDICATORS */}

      <div className="indicator-grid">

        <Indicator
          icon={<Package />}
          title="Tea Grade"
          value="BOPF"
        />

        <Indicator
          icon={<Droplets />}
          title="Moisture"
          value="7.8%"
        />

        <Indicator
          icon={<CheckCircle />}
          title="Export Readiness"
          value="READY"
        />

      </div>

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


function Indicator({ icon, title, value }) {
  return (
    <div className="indicator-card">

      <div className="indicator-icon">
        {icon}
      </div>

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}