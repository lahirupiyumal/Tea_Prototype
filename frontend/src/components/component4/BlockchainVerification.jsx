import {
  ShieldCheck,
  CheckCircle2,
  QrCode,
} from "lucide-react";

export default function BlockchainVerification() {

  return (
    <div>

      <div className="page-title">

        <div>

          <span>TRACEABILITY</span>

          <h1>
            Blockchain Verification
          </h1>

          <p>
            Verify tea batch authenticity
            and traceability.
          </p>

        </div>

      </div>


      <div className="blockchain-grid">

        {/* VERIFICATION */}

        <div className="card">

          <div className="blockchain-status">

            <ShieldCheck size={40} />

            <div>

              <span>
                BLOCKCHAIN STATUS
              </span>

              <strong>
                VERIFIED
              </strong>

            </div>

          </div>


          <div className="details-grid">

            <Detail
              title="Batch ID"
              value="TB-2026-00125"
            />

            <Detail
              title="Tea Grade"
              value="BOPF"
            />

            <Detail
              title="Origin"
              value="Nuwara Eliya"
            />

            <Detail
              title="Quality"
              value="92%"
            />

            <Detail
              title="Moisture"
              value="7.8%"
            />

            <Detail
              title="Export Market"
              value="UAE"
            />

          </div>


          <div className="transaction">

            <span>
              Transaction ID
            </span>

            <code>
              0x8f7a9c...d31e
            </code>

          </div>


          <button className="primary-btn">

            <QrCode size={16} />

            Generate QR

          </button>

        </div>


        {/* TIMELINE */}

        <div className="card">

          <div className="card-header">

            <div>

              <h3>
                Blockchain Record Timeline
              </h3>

              <p>
                Tea batch traceability
              </p>

            </div>

          </div>


          <Timeline
            title="Tea Batch Created"
            date="19 Aug 2026"
          />

          <Timeline
            title="Quality Verified"
            date="20 Aug 2026"
          />

          <Timeline
            title="Export Recommendation"
            date="21 Aug 2026"
          />

          <Timeline
            title="Auction / Export"
            date="25 Aug 2026"
          />

        </div>

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


function Timeline({ title, date }) {

  return (
    <div className="timeline">

      <div className="timeline-icon">
        <CheckCircle2 size={15} />
      </div>

      <div>

        <strong>{title}</strong>

        <span>{date}</span>

      </div>

    </div>
  );
}