import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { ShieldCheck, CheckCircle2, RefreshCw } from "lucide-react";

const BATCH_ID = "TB-2026-00125";

export default function DigitalTeaPassport() {
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(true);
  const [qrVersion, setQrVersion] = useState(1);

  useEffect(() => {
    let active = true;
    setIsGenerating(true);
    const verificationUrl = `${window.location.origin}/component4/passport?batch=${BATCH_ID}&verified=true`;
    QRCode.toDataURL(verificationUrl, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 260,
      color: { dark: "#123f2d", light: "#ffffff" },
    }).then((dataUrl) => {
      if (active) {
        setQrDataUrl(dataUrl);
        setIsGenerating(false);
      }
    });
    return () => { active = false; };
  }, [qrVersion]);

  const generateQr = () => setQrVersion((version) => version + 1);

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

        <button className="primary-btn" onClick={generateQr} type="button">
          <RefreshCw size={14} className={isGenerating ? "spin" : ""} />
          {isGenerating ? "Generating..." : "Generate QR"}
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
            <div className="qr-frame">
              <div className="qr-code">
                {qrDataUrl ? <img src={qrDataUrl} alt={`Scannable verification QR for ${BATCH_ID}`} /> : <span>Preparing QR...</span>}
              </div>
              <div className="qr-caption"><strong>SCAN TO VERIFY</strong><span>Batch identity · Origin · Quality</span></div>
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