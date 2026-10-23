import React from 'react';
import { platformMeta } from '../data/carbosafeData';

export default function CollegePitch({ onOpenModal }) {
  const { collegePitch } = platformMeta;

  return (
    <section id="college-pitch" className="college-pitch-section section-padding">
      <div className="container">
        
        <div className="college-pitch-banner liquid-glass-strong p-4 p-lg-5 rounded-4 border border-2 border-success-subtle position-relative overflow-hidden">
          <div className="liquid-glass-beam"></div>

          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="badge bg-success-subtle text-success px-3 py-2 fw-bold">
                  College Presentation Spotlight
                </span>
                <span className="badge bg-primary-subtle text-primary px-3 py-2">
                  Academic & Jury Executive Summary
                </span>
              </div>

              <h2 className="fs-3 fw-bold mb-3 text-dark">
                {collegePitch.title}
              </h2>

              <p className="fs-6 text-muted mb-4 leading-relaxed">
                {collegePitch.summary}
              </p>

              <div className="pitch-highlights-grid row g-3 mb-4">
                {collegePitch.highlights.map((item, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="pitch-point-card p-3 rounded-3 bg-white border d-flex align-items-start gap-2 shadow-sm">
                      <i className="bi bi-patch-check-fill text-success fs-5 mt-1"></i>
                      <span className="fs-8 text-dark fw-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center gap-3 flex-wrap">
                <button
                  type="button"
                  className="btn btn-google-primary btn-carbosafe-green"
                  onClick={onOpenModal}
                >
                  <i className="bi bi-display me-2"></i>
                  Request Full College Slide Deck & Demo
                </button>
                <a
                  href="#hero"
                  className="btn btn-google-outline"
                >
                  <i className="bi bi-arrow-up-circle me-2"></i>
                  Back to Top
                </a>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div className="academic-badge-emblem p-4 rounded-4 liquid-glass">
                <div className="emblem-glyph mb-3 text-gradient-emerald">
                  <i className="bi bi-mortarboard-fill display-3"></i>
                </div>
                <h4 className="fs-6 fw-bold mb-1">CarboSafe Capstone Pitch</h4>
                <p className="fs-8 text-muted m-0">
                  Built to demonstrate scalable climate technology, AI verification, and equitable decentralized finance.
                </p>
                <div className="mt-3 pt-3 border-top d-flex justify-content-center gap-2">
                  <span className="badge bg-light text-dark">AI Vision</span>
                  <span className="badge bg-light text-dark">Blockchain</span>
                  <span className="badge bg-light text-dark">ESG Offsets</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
