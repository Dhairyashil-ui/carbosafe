import React from 'react';
import { techLayers, techSynergyTable, techDistinctionNote } from '../data/carbosafeData';

export default function TechArchitecture() {
  return (
    <section id="tech" className="tech-architecture-section section-padding section-bg-subtle">
      <div className="container">

        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-cpu-fill text-purple me-2"></i>
            <span>Architecture & Technology Stack</span>
          </div>
          <h2 className="section-title-google">
            The Technology <span className="text-gradient-gemini">Behind CarboSafe</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '740px' }}>
            A modular 4-layer architecture combining remote sensing, AI computer vision, robust carbon accounting, and cryptographic blockchain integrity.
          </p>
        </div>

        {/* 4 Architectural Layers */}
        <div className="row g-4 mt-2">
          {techLayers.map((layer, idx) => (
            <div key={idx} className="col-lg-6 col-md-6">
              <div className="tech-layer-card liquid-glass-subtle h-100 p-4 rounded-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="layer-icon-squircle"
                      style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                    >
                      <i className={`bi ${layer.icon}`}></i>
                    </div>
                    <div>
                      <span className="layer-tag-label">{layer.layer}</span>
                      <h3 className="layer-card-title m-0">{layer.title}</h3>
                    </div>
                  </div>
                  <span className="layer-status-pill">{layer.status}</span>
                </div>

                <p className="layer-card-desc mb-3">
                  {layer.desc}
                </p>

                <div className="layer-current-status-box p-3 rounded-3 mt-auto">
                  <span className="fs-8 fw-semibold text-muted d-block mb-1">Implementation Status:</span>
                  <p className="m-0 fs-7 text-dark">{layer.currentStatus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why AI and Blockchain Together? Table & Comparison */}
        <div className="synergy-table-container mt-5 liquid-glass p-4 p-lg-5 rounded-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <span className="synergy-eyebrow text-gradient-emerald fw-semibold">Complementary Synergies</span>
              <h3 className="synergy-main-heading m-0">Why Do We Need AI and Blockchain Together?</h3>
            </div>
            <span className="badge bg-primary px-3 py-2">Symbiotic Verification Model</span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle custom-synergy-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '28%' }}>Technology</th>
                  <th scope="col" style={{ width: '48%' }}>Specific Environmental Purpose</th>
                  <th scope="col" style={{ width: '24%' }}>Architectural Role</th>
                </tr>
              </thead>
              <tbody>
                {techSynergyTable.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong className="text-dark d-flex align-items-center gap-2">
                        <i className="bi bi-check2-circle text-success"></i>
                        {row.tech}
                      </strong>
                    </td>
                    <td className="text-muted">{row.purpose}</td>
                    <td>
                      <span className="role-tag-chip">{row.role}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* An Important Distinction Callout Banner */}
          <div className="distinction-alert-box mt-4 p-4 rounded-3 border-start border-4 border-warning">
            <div className="d-flex align-items-start gap-3">
              <i className="bi bi-shield-shaded text-warning fs-3 mt-1"></i>
              <div>
                <h4 className="distinction-alert-title mb-1 text-warning">
                  {techDistinctionNote.headline}
                </h4>
                <p className="distinction-alert-body m-0 text-muted">
                  {techDistinctionNote.text}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
