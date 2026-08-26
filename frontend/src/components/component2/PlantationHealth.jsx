import { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function PlantationHealth() {
  const [analysed, setAnalysed] = useState(false)
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-emerald-950">
      <Header />
      {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-8 md:px-8">
        <div><p className="text-xs font-bold tracking-[.2em] text-lime-700">STEP 02 / PLANTATION INTELLIGENCE</p><h1 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">Plantation health assessment</h1></div>
      </div> */}
      <br />  
      <section className="ph-workspace">
        <div className="ph-panel ph-inputs"><PanelTitle step="STEP 01" title="Tell us about your field" label="INPUTS" /><label className="upload"><input type="file" accept="image/*" /><span className="upload-icon">⌁</span><strong>Upload plantation image</strong><small>PNG, JPG or WEBP · Max 10MB</small></label><div className="ph-fields"><Field label="Temperature" value="21" unit="°C" /><Field label="Rainfall" value="150" unit="mm" /><Field label="Humidity" value="82" unit="%" /><Field label="Wind speed" value="8" unit="km/h" /><label>Solar radiation<div><select defaultValue="Moderate"><option>Low</option><option>Moderate</option><option>High</option></select></div></label></div><button className="ph-analyse" onClick={() => setAnalysed(true)}>{analysed ? 'Analysis complete ✓' : 'Run AI assessment  →'}</button></div>
        <div className="ph-panel ph-results"><PanelTitle step="STEP 02" title="AI health assessment" label="OUTPUTS" /><div className="score"><div className="score-ring"><strong>{analysed ? '91' : '—'}</strong><small>/ 100</small></div><div><small>PLANTATION HEALTH SCORE</small><h3>{analysed ? 'Healthy & stable' : 'Awaiting analysis'}</h3><p>{analysed ? 'Your field is showing strong growth conditions.' : 'Add your field data and run the assessment.'}</p></div></div><div className="stress-list"><Stress label="Heat stress" value={analysed ? 'Low' : '—'} /><Stress label="Water stress" value={analysed ? 'Medium' : '—'} /><Stress label="Rainfall stress" value={analysed ? 'Low' : '—'} /><Stress label="Early warning" value={analysed ? 'No immediate risk' : '—'} /></div></div>
      </section>
      <section className="ph-recommend"><div><p className="ph-kicker">ACTIONABLE GUIDANCE</p><h2>What should you do next?</h2><p>Practical, zone-specific recommendations generated from your plantation conditions.</p></div><div className="recommend-card"><Recommendation icon="💧" title="Monitor soil moisture">Schedule irrigation if no rainfall occurs within the next 2–3 days.</Recommendation><Recommendation icon="☘" title="Maintain green coverage">Keep shade cover and mulch in affected blocks to protect soil moisture.</Recommendation><Recommendation icon="☁" title="Watch rainfall patterns">Improve drainage during periods of excess rainfall to reduce disease risk.</Recommendation></div></section>
      <Footer />
    </main>
  )
}

function PanelTitle({ step, title, label }) { return <div className="ph-panel-title"><div><small>{step}</small><h2>{title}</h2></div><span>{label}</span></div> }
function Field({ label, value, unit }) { return <label>{label}<div><input defaultValue={value} type="number" /><b>{unit}</b></div></label> }
function Stress({ label, value }) { return <div><span>◉</span><label>{label}</label><b className="low">{value}</b></div> }
function Recommendation({ icon, title, children }) { return <div><span className="rec-icon">{icon}</span><div><strong>{title}</strong><p>{children}</p></div></div> }

export default PlantationHealth
