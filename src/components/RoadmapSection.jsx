import React from 'react';
import { roadmapPhases, risksAndChallenges, successMetrics } from '../data/carbosafeData';

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="roadmap-section section-padding section-bg-subtle">
      <div className="container">

        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-compass-fill text-primary me-2"></i>
            <span>Vision & Execution</span>
          </div>
          <h2 className="section-title-google">
            Development <span className="text-gradient-gemini">Roadmap & Challenges</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '720px' }}>
            Our phased engineering progression, proactive risk mitigations, and verifiable key performance indicators.
          </p>
        </div>

        {/* 6 Phases Timeline */}
        <div className="roadmap-timeline-wrap liquid-glass p-4 p-lg-5 rounded-4 mb-5">
          <div className="text-center mb-4">
            <span className="text-gradient-emerald fw-bold text-uppercase fs-8">Sequential Milestones</span>
            <h3 className="fs-4 fw-bold mt-1">6-Phase Engineering Progression</h3>
          </div>

          <div className="row g-3">
            {roadmapPhases.map((phase, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="roadmap-phase-card p-3 rounded-4 bg-white border border-light shadow-sm h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="phase-pill-badge">{phase.phase}</span>
                      <span className={`badge ${phase.status.includes('Current') ? 'bg-success' : phase.status.includes('Next') ? 'bg-primary' : 'bg-secondary'} fs-9`}>
                        {phase.status}
                      </span>
                    </div>
                    <h5 className="fs-6 fw-bold mb-2">{phase.title}</h5>
                    <p className="text-muted fs-8 m-0">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Risks & Challenges Grid */}
        <div className="risks-challenges-wrap mb-5">
          <div className="text-center mb-4">
            <span className="text-gradient-emerald fw-bold text-uppercase fs-8">Integrity Safeguards</span>
            <h3 className="fs-4 fw-bold mt-1">Risks & Challenges We Must Solve</h3>
            <p className="text-muted fs-7">Proactively addressing climate accounting and decentralized market vulnerabilities</p>
          </div>

          <div className="row g-4">
            {risksAndChallenges.map((risk, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="risk-card liquid-glass-subtle p-4 rounded-4 h-100">
                  <div className="risk-icon-box text-warning mb-3">
                    <i className={`bi ${risk.icon} fs-4`}></i>
                  </div>
                  <h4 className="fs-6 fw-bold mb-2">{risk.title}</h4>
                  <p className="text-muted fs-8 m-0">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Success Looks Like Table */}
        <div className="success-metrics-card liquid-glass p-4 p-lg-5 rounded-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <span className="text-gradient-emerald fw-bold text-uppercase fs-8">Verification Benchmarks</span>
              <h3 className="fs-4 fw-bold m-0">What Success Looks Like</h3>
            </div>
            <span className="badge bg-success px-3 py-2">Beyond App User Vanity Metrics</span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle custom-synergy-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '32%' }}>Core Impact Metric</th>
                  <th scope="col" style={{ width: '68%' }}>Target Benchmark & Objective</th>
                </tr>
              </thead>
              <tbody>
                {successMetrics.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong className="text-dark d-flex align-items-center gap-2">
                        <i className="bi bi-graph-up-arrow text-success"></i>
                        {row.metric}
                      </strong>
                    </td>
                    <td className="text-muted">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
