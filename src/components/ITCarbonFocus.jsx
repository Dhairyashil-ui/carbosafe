import React, { useState } from 'react';
import { itIndustrySection } from '../data/carbosafeData';

export default function ITCarbonFocus({ onOpenModal }) {
  const [emissionsInput, setEmissionsInput] = useState(1000);
  const [offsetPercent, setOffsetPercent] = useState(10); // 10% offset default

  const offsetTonnes = Math.round((emissionsInput * offsetPercent) / 100);
  const estimatedCost = offsetTonnes * 1850; // ₹1,850 avg per credit
  const farmerShareAmount = Math.round(estimatedCost * 0.80);

  return (
    <section id="it-carbon" className="it-carbon-section section-padding">
      <div className="container">

        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-laptop text-primary me-2"></i>
            <span>College Presentation Focus</span>
          </div>
          <h2 className="section-title-google">
            How CarboSafe Helps the <span className="text-gradient-gemini">IT Industry Specifically</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '750px' }}>
            IT enterprises, hyperscale data centres, and frontier AI workloads are driving rapid electricity demand. Here is how CarboSafe powers a transparent, rigorous corporate decarbonization journey.
          </p>
        </div>

        {/* 4 IT Emissions Drivers */}
        <div className="row g-3 mt-3 mb-5">
          {itIndustrySection.emissionsSources.map((source, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="it-source-card liquid-glass-subtle p-3 rounded-4 h-100">
                <div className="source-icon-box mb-2 text-primary">
                  <i className={`bi ${source.icon} fs-4`}></i>
                </div>
                <h4 className="source-title-text fs-6 mb-2">{source.title}</h4>
                <p className="source-desc-text text-muted fs-8 m-0">{source.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step IT Decarbonization Journey */}
        <div className="it-journey-container liquid-glass p-4 p-lg-5 rounded-4 mb-5">
          <div className="text-center mb-4">
            <span className="text-gradient-emerald fw-bold text-uppercase fs-8 letter-spacing-1">
              Methodical 5-Step Process
            </span>
            <h3 className="fs-3 fw-bold mt-1">The IT Decarbonization Standard</h3>
          </div>

          <div className="row g-3">
            {itIndustrySection.fiveStepProcess.map((step) => (
              <div key={step.step} className="col-lg col-md-4 col-sm-6">
                <div className="journey-step-box p-3 rounded-3 text-center h-100 border">
                  <div className="step-circle-num mx-auto mb-2">
                    0{step.step}
                  </div>
                  <h5 className="fs-7 fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted fs-8 m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Worked Scenario & Positioning */}
        <div className="it-worked-scenario liquid-glass-strong p-4 p-lg-5 rounded-4">
          <div className="row g-4 align-items-center">
            
            {/* Left: Interactive Scenario Simulator */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-success">Interactive Scenario</span>
                <span className="text-muted fs-8">1,000 Tonnes Case Study</span>
              </div>
              <h3 className="fs-4 fw-bold mb-3">Example: IT Enterprise Offsetting Model</h3>

              <div className="simulator-controls mb-4">
                <div className="mb-3">
                  <div className="d-flex justify-content-between fs-7 mb-1">
                    <span>Reported Annual IT Emissions:</span>
                    <strong className="text-dark">{emissionsInput.toLocaleString()} tCO₂e</strong>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="200"
                    max="5000"
                    step="100"
                    value={emissionsInput}
                    onChange={(e) => setEmissionsInput(Number(e.target.value))}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between fs-7 mb-1">
                    <span>Target High-Integrity Offsets (Unavoidable Residuals):</span>
                    <strong className="text-success">{offsetPercent}% ({offsetTonnes.toLocaleString()} tCO₂e)</strong>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="5"
                    max="30"
                    step="5"
                    value={offsetPercent}
                    onChange={(e) => setOffsetPercent(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Simulation Output Cards */}
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <div className="p-3 bg-white rounded-3 border">
                    <span className="fs-8 text-muted d-block">Offsets Purchased</span>
                    <strong className="fs-5 text-success">{offsetTonnes.toLocaleString()} tCO₂e</strong>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-white rounded-3 border">
                    <span className="fs-8 text-muted d-block">Direct to Farmers (80%)</span>
                    <strong className="fs-5 text-primary">₹{farmerShareAmount.toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-google-primary btn-carbosafe-green w-100"
                onClick={onOpenModal}
              >
                <span>Calculate Your IT Company Footprint</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>

            {/* Right: Critical GHG Reporting Rule & Positioning Callout */}
            <div className="col-lg-6">
              <div className="scenario-clarification-card p-4 rounded-4 bg-white border border-2 border-primary-subtle shadow-sm">
                <div className="d-flex align-items-center gap-2 mb-3 text-primary">
                  <i className="bi bi-shield-check fs-4"></i>
                  <h4 className="fs-6 fw-bold m-0">Essential Greenhouse Gas Accounting Principle</h4>
                </div>

                <p className="scenario-clarification-text fs-7 text-dark mb-3">
                  {itIndustrySection.workedExample.clarification}
                </p>

                <div className="positioning-highlight-box p-3 rounded-3 bg-light border-start border-4 border-success">
                  <strong className="fs-8 text-uppercase text-success d-block mb-1">Our Core Positioning</strong>
                  <p className="fs-7 text-dark m-0 fw-medium">
                    "{itIndustrySection.workedExample.positioning}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
