import {
  QrCode,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function DigitalTeaPassport() {

  return (
    <div>

      <div className="page-title">

        <div>

          <span>DIGITAL TRACEABILITY</span>

          <h1>
            Digital Tea Passport
          </h1>

          <p>
            Verified digital identity for
            each tea batch.
          </p>

        </div>

        <button className="primary-btn">
          Generate QR
        </button>

      </div>


      <div className="passport-grid">

        {/* PASSPORT */}

        <div className="passport-card">

          <div className="passport-header">

            <div>

              <span>
                CEYLON TEA
              </span>

              <h2>
                Digital Tea Passport
              </h2>

            </div>

            <div className="passport-logo">
              🍃
            </div>

          </div>


          <div className="qr-container">

            <div className="qr-code">
              <QrCode size={140} />
            </div>

          </div>


          <div className="passport-details">

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


          <div className="passport-verified">

            <ShieldCheck size={18} />

            Blockchain Verified

          </div>

        </div>


        {/* BUYER VIEW */}

        <div className="card">

          <div className="card-header">

            <div>

              <h3>
                Buyer Verification
              </h3>

              <p>
                Information shown after
                scanning QR code.
              </p>

            </div>

          </div>


          <div className="buyer-success">

            <CheckCircle2 size={35} />

            <strong>
              VERIFIED TEA BATCH
            </strong>

            <span>
              TB-2026-00125
            </span>

          </div>


          <div className="buyer-details">

            <Detail
              title="Origin"
              value="Nuwara Eliya, Sri Lanka"
            />

            <Detail
              title="Grade"
              value="BOPF"
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
              title="Export Destination"
              value="UAE"
            />

          </div>

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