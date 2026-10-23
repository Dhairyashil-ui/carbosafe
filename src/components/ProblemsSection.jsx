import React from 'react';
import { problemsData, centralProblemStatement } from '../data/carbosafeData';

export default function ProblemsSection() {
  return (
    <section id="problems" className="carbosafe-problems-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
            <span>Market Failures & Inefficiencies</span>
          </div>
          <h2 className="section-title-google">
            The Problems <span className="text-gradient-gemini">We're Solving</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '720px' }}>
            Traditional carbon markets are broken by opacity, slow verification, and predatory intermediary margins. CarboSafe addresses the four fundamental crises hindering global decarbonization.
          </p>
        </div>

        {/* 4 Problems Grid */}
        <div className="row g-4 mt-2">
          {problemsData.map((prob) => (
            <div key={prob.id} className="col-lg-6 col-md-6">
              <div className="problem-feature-card liquid-glass-subtle">
                <div className="problem-card-top d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="problem-icon-squircle" 
                      style={{ backgroundColor: `${prob.color}18`, color: prob.color }}
                    >
                      <i className={`bi ${prob.icon}`}></i>
                    </div>
                    <div>
                      <span className="problem-alpha-pill">Problem {prob.id}</span>
                      <h3 className="problem-title-text">{prob.title}</h3>
                    </div>
                  </div>
                  <div className="problem-category-tag">
                    {prob.category}
                  </div>
                </div>

                <p className="problem-summary-desc">
                  {prob.summary}
                </p>

                <div className="problem-bullet-list mt-3">
                  {prob.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="problem-bullet-item d-flex align-items-start gap-2">
                      <i className="bi bi-arrow-right-circle text-danger mt-1"></i>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="problem-card-footer mt-4 pt-3 border-top d-flex align-items-center justify-content-between">
                  <span className="problem-stat-label">{prob.statLabel}</span>
                  <span className="problem-stat-badge" style={{ color: prob.color }}>
                    {prob.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Problem Statement Callout Banner */}
        <div className="central-problem-banner mt-5">
          <div className="central-problem-inner liquid-glass-strong">
            <div className="row align-items-center g-4">
              <div className="col-lg-2 col-md-3 text-center">
                <div className="central-problem-glyph">
                  <i className="bi bi-bullseye text-gradient-emerald"></i>
                </div>
              </div>
              <div className="col-lg-10 col-md-9">
                <span className="central-tag-pill mb-2 d-inline-block">
                  {centralProblemStatement.headline}
                </span>
                <p className="central-statement-text">
                  "{centralProblemStatement.statement}"
                </p>
                <div className="central-disclaimer-box mt-3">
                  <i className="bi bi-info-circle-fill me-2 text-warning"></i>
                  <span>{centralProblemStatement.disclaimer}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
