import React, { useState } from 'react';
import { solutionSteps } from '../data/carbosafeData';

export default function SolutionWorkflows({ onOpenModal }) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStep = solutionSteps[activeStepIdx] || solutionSteps[0];

  return (
    <section id="solution" className="workflows-cinematic-section section-padding">
      <div className="container">

        {/* Clean Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-gear-wide-connected text-primary me-2"></i>
            <span>End-to-End Pipeline</span>
          </div>
          <h2 className="section-title-google">
            Our Solution: <span className="text-gradient-gemini">How CarboSafe Works</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '740px' }}>
            CarboSafe seamlessly orchestrates rural farmers, remote satellite sensing, carbon accounting engines, and industrial buyers into an auditable 5-step lifecycle.
          </p>
        </div>

        <div className="row g-4 align-items-stretch mt-3">
          
          {/* Left Column: 5 Interactive Flow Tabs */}
          <div className="col-lg-4 col-md-5">
            <div className="workflow-tabs-stack" role="tablist" aria-label="Solution Steps">
              {solutionSteps.map((step, idx) => {
                const isActive = activeStepIdx === idx;
                return (
                  <div
                    key={step.step}
                    className={`workflow-tab-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStepIdx(idx)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStepIdx(idx);
                      }
                    }}
                    title={`View Step ${step.step}: ${step.title}`}
                  >
                    <div className="workflow-tab-active-bar" aria-hidden="true"></div>

                    <div className="workflow-tab-icon-box" aria-hidden="true">
                      <i className={`bx ${step.icon}`}></i>
                    </div>

                    <div className="workflow-tab-text">
                      <div className="workflow-tab-title">{step.title}</div>
                      <div className="workflow-tab-sub">{step.subtitle}</div>
                    </div>

                    <div className="workflow-tab-end" aria-hidden="true">
                      <span className="workflow-tab-index">{step.step}</span>
                      <i className="bi bi-chevron-right workflow-tab-arrow"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Flow Visual Stage */}
          <div className="col-lg-8 col-md-7">
            <div className="workflow-stage-card liquid-glass p-4 p-lg-5 h-100 d-flex flex-column justify-content-between">
              
              <div>
                {/* Step Top Bar */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <span className="step-large-badge" style={{ backgroundColor: `${activeStep.accent}15`, color: activeStep.accent }}>
                      Step {activeStep.step}
                    </span>
                    <span className="step-tag-pill">{activeStep.badge}</span>
                  </div>
                  <span className="step-stage-counter">
                    Stage {activeStepIdx + 1} of {solutionSteps.length}
                  </span>
                </div>

                <h3 className="workflow-stage-heading mb-3">
                  {activeStep.title}
                </h3>

                <p className="workflow-stage-desc mb-4">
                  {activeStep.desc}
                </p>

                {/* Interactive Visual Blueprint Mockup for this Step */}
                <div className="step-diagram-canvas liquid-glass-subtle p-4 rounded-4 mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="diagram-dot-live"></span>
                      <span className="diagram-header-label">System Workflow Blueprint: {activeStep.subtitle}</span>
                    </div>
                    <span className="diagram-status-chip">Autonomous Verification Node</span>
                  </div>

                  <div className="diagram-flow-chain d-flex align-items-center justify-content-between flex-wrap gap-2 py-2">
                    <div className="diagram-node">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      <span>Field Geofence</span>
                    </div>
                    <i className="bi bi-arrow-right text-muted"></i>
                    <div className="diagram-node">
                      <i className="bi bi-satellite text-primary"></i>
                      <span>Sentinel-2 Multiband</span>
                    </div>
                    <i className="bi bi-arrow-right text-muted"></i>
                    <div className="diagram-node">
                      <i className="bi bi-cpu text-purple"></i>
                      <span>AI Canopy Engine</span>
                    </div>
                    <i className="bi bi-arrow-right text-muted"></i>
                    <div className="diagram-node">
                      <i className="bi bi-wallet2 text-warning"></i>
                      <span>Smart Payout</span>
                    </div>
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="workflow-features-list">
                  <h4 className="workflow-features-title mb-3">
                    <i className="bi bi-shield-check text-success me-2"></i>
                    Key Capabilities at this Stage
                  </h4>
                  <div className="row g-2">
                    {activeStep.features.map((feat, fIdx) => (
                      <div key={fIdx} className="col-12">
                        <div className="workflow-feature-chip d-flex align-items-center gap-2">
                          <i className="bi bi-check-circle-fill text-success"></i>
                          <span>{feat}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navigation & CTA */}
              <div className="workflow-stage-bottom mt-5 pt-3 border-top d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-google-outline"
                    disabled={activeStepIdx === 0}
                    onClick={() => setActiveStepIdx(prev => Math.max(0, prev - 1))}
                  >
                    <i className="bi bi-arrow-left me-1"></i> Prev Step
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-google-outline"
                    disabled={activeStepIdx === solutionSteps.length - 1}
                    onClick={() => setActiveStepIdx(prev => Math.min(solutionSteps.length - 1, prev + 1))}
                  >
                    Next Step <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>

                <button
                  type="button"
                  className="btn btn-google-primary btn-carbosafe-green"
                  onClick={onOpenModal}
                >
                  <i className="bi bi-play-circle me-2"></i>
                  Request Live Platform Walkthrough
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
