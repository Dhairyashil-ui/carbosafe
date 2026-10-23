import React, { useState } from 'react';
import { revenueModelData, differentiators } from '../data/carbosafeData';

export default function RevenueModel({ onOpenModal }) {
  const [grossProceeds, setGrossProceeds] = useState(100000);
  const [farmerPercent, setFarmerPercent] = useState(80);

  const farmerAmount = Math.round((grossProceeds * farmerPercent) / 100);
  const platformAmount = grossProceeds - farmerAmount;

  return (
    <section id="revenue" className="revenue-section section-padding section-bg-subtle">
      <div className="container">

        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-wallet2 text-success me-2"></i>
            <span>Farmer-First Economics</span>
          </div>
          <h2 className="section-title-google">
            Proposed Revenue Model & <span className="text-gradient-gemini">Farmer Payouts</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '720px' }}>
            Sustainable platform economics designed to keep the vast majority of capital flowing directly to the rural communities safeguarding the environment.
          </p>
        </div>

        {/* Farmer-First Payout Simulator Card */}
        <div className="payout-simulator-card liquid-glass p-4 p-lg-5 rounded-4 mb-5">
          <div className="row g-4 align-items-center">
            
            <div className="col-lg-6">
              <span className="badge bg-success mb-2">Our Farmer-First Payout Standard</span>
              <h3 className="fs-3 fw-bold mb-3">70% to 90% Direct Value to Land Stewards</h3>
              <p className="text-muted fs-7 mb-4">
                Unlike legacy brokers who pocket up to 60-70% of credit value in opaque consulting markups, CarboSafe guarantees transparent, smart-contract-enforced revenue distributions.
              </p>

              {/* Interactive Proceeds Slider */}
              <div className="slider-group mb-4">
                <div className="d-flex justify-content-between mb-1 fs-7">
                  <span className="fw-medium">Net Distributable Project Proceeds:</span>
                  <strong className="text-dark">₹{grossProceeds.toLocaleString()}</strong>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={grossProceeds}
                  onChange={(e) => setGrossProceeds(Number(e.target.value))}
                />
              </div>

              {/* Interactive Farmer Share Slider */}
              <div className="slider-group mb-4">
                <div className="d-flex justify-content-between mb-1 fs-7">
                  <span className="fw-medium">Farmer Revenue Share Percentage:</span>
                  <strong className="text-success">{farmerPercent}% (Platform: {100 - farmerPercent}%)</strong>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="70"
                  max="90"
                  step="1"
                  value={farmerPercent}
                  onChange={(e) => setFarmerPercent(Number(e.target.value))}
                />
              </div>

              <div className="p-3 bg-light rounded-3 text-muted fs-8">
                <i className="bi bi-info-circle me-1 text-primary"></i>
                {revenueModelData.farmerFirstSplit.note}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="split-visualizer-box liquid-glass-strong p-4 rounded-4 text-center">
                <span className="fs-8 text-uppercase tracking-wide text-muted fw-bold d-block mb-3">
                  Illustrative Proceeds Distribution
                </span>

                <div className="split-progress-bar-wrap mb-4">
                  <div className="progress" style={{ height: '28px', borderRadius: '14px' }}>
                    <div 
                      className="progress-bar bg-success fw-bold" 
                      style={{ width: `${farmerPercent}%` }}
                    >
                      Farmer: {farmerPercent}%
                    </div>
                    <div 
                      className="progress-bar bg-secondary fw-bold" 
                      style={{ width: `${100 - farmerPercent}%` }}
                    >
                      Platform: {100 - farmerPercent}%
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded-3 border">
                      <span className="fs-8 text-muted d-block">Farmer / Partner Share</span>
                      <strong className="fs-4 text-success d-block my-1">
                        ₹{farmerAmount.toLocaleString()}
                      </strong>
                      <span className="badge bg-success-subtle text-success fs-9">{farmerPercent}% Share</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded-3 border">
                      <span className="fs-8 text-muted d-block">Platform & Operations</span>
                      <strong className="fs-4 text-secondary d-block my-1">
                        ₹{platformAmount.toLocaleString()}
                      </strong>
                      <span className="badge bg-secondary-subtle text-secondary fs-9">{100 - farmerPercent}% Share</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-google-primary btn-carbosafe-green w-100 mt-4"
                  onClick={onOpenModal}
                >
                  <span>Explore Partner Revenue Sharing</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Revenue Streams Grid */}
        <div className="revenue-streams-wrap mb-5">
          <div className="text-center mb-4">
            <h3 className="fs-4 fw-bold">Diversified Platform Revenue Streams</h3>
            <p className="text-muted fs-7">How CarboSafe sustains infrastructure without compromising farmer payouts</p>
          </div>

          <div className="row g-3">
            {revenueModelData.streams.map((stream, idx) => (
              <div key={idx} className="col-lg col-md-4 col-sm-6">
                <div className="stream-card p-3 rounded-4 liquid-glass-subtle h-100">
                  <div className="stream-num-badge mb-2">0{idx + 1}</div>
                  <h5 className="fs-7 fw-bold mb-2">{stream.stream}</h5>
                  <p className="text-muted fs-8 m-0">{stream.mechanism}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Key Differentiators */}
        <div className="differentiators-wrap">
          <div className="text-center mb-4">
            <span className="text-gradient-emerald fw-bold text-uppercase fs-8">Competitive Edge</span>
            <h3 className="fs-4 fw-bold mt-1">What Makes CarboSafe Different?</h3>
          </div>

          <div className="row g-4">
            {differentiators.map((diff) => (
              <div key={diff.id} className="col-lg-3 col-md-6">
                <div className="differentiator-card liquid-glass-subtle p-4 rounded-4 h-100">
                  <div 
                    className="diff-icon-squircle mb-3" 
                    style={{ backgroundColor: `${diff.color}15`, color: diff.color }}
                  >
                    <i className={`bi ${diff.icon} fs-4`}></i>
                  </div>
                  <h4 className="fs-6 fw-bold mb-2">{diff.title}</h4>
                  <p className="text-muted fs-8 m-0">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
