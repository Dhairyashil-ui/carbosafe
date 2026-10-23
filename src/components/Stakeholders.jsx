import React, { useState } from 'react';
import { stakeholdersData } from '../data/carbosafeData';

export default function Stakeholders({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('farmers');

  const currentRole = stakeholdersData.find(s => s.id === activeTab) || stakeholdersData[0];

  return (
    <section id="stakeholders" className="stakeholders-section section-padding section-bg-subtle">
      <div className="container">

        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-people-fill text-success me-2"></i>
            <span>Three-Sided Ecosystem</span>
          </div>
          <h2 className="section-title-google">
            Who Will Use <span className="text-gradient-gemini">CarboSafe?</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '720px' }}>
            Built specifically for the distinct requirements of smallholder farmers, corporate off-takers, and environmental verifiers.
          </p>
        </div>

        {/* 3 Role Switcher Pills */}
        <div className="role-switcher-pills d-flex align-items-center justify-content-center gap-2 mb-4 flex-wrap">
          {stakeholdersData.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                type="button"
                className={`role-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(s.id)}
              >
                <i className={`bx ${s.icon} me-2`}></i>
                <span>{s.role}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Showcase Card */}
        <div className="stakeholder-active-card liquid-glass p-4 p-lg-5 rounded-4">
          <div className="row g-4 align-items-center">
            
            {/* Left Column: Role Details & Capabilities */}
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div 
                  className="role-avatar-squircle" 
                  style={{ backgroundColor: `${currentRole.accent}15`, color: currentRole.accent }}
                >
                  <i className={`bx ${currentRole.icon}`}></i>
                </div>
                <div>
                  <span className="role-eyebrow">{currentRole.subrole}</span>
                  <h3 className="role-main-title m-0">{currentRole.role}</h3>
                </div>
              </div>

              <p className="role-tagline-quote mb-4">
                "{currentRole.tagline}"
              </p>

              <div className="role-capabilities-stack mb-4">
                <h4 className="capabilities-heading mb-3">
                  <i className="bi bi-check2-all text-success me-2"></i>
                  Platform Capabilities & User Actions:
                </h4>
                <div className="capabilities-grid">
                  {currentRole.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="capability-item d-flex align-items-start gap-2 mb-2">
                      <i className="bi bi-patch-check-fill text-success mt-1"></i>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-google-primary btn-carbosafe-green"
                onClick={onOpenModal}
              >
                <span>Launch {currentRole.role} Portal Demo</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>

            {/* Right Column: Live Interactive Mock Dashboard */}
            <div className="col-lg-5">
              <div className="role-dashboard-mockup liquid-glass-strong p-4 rounded-4">
                <div className="mockup-header d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="mockup-traffic-dot red"></span>
                    <span className="mockup-traffic-dot yellow"></span>
                    <span className="mockup-traffic-dot green"></span>
                    <span className="mockup-title ms-2">{currentRole.role} Console</span>
                  </div>
                  <span className="mockup-badge-live">{currentRole.dashboardMock.badge}</span>
                </div>

                <div className="mockup-stat-box mb-3">
                  <div className="mockup-stat-value">{currentRole.dashboardMock.stat1}</div>
                  <div className="mockup-stat-label">{currentRole.dashboardMock.stat1Label}</div>
                </div>

                <div className="mockup-stat-box mb-3">
                  <div className="mockup-stat-value">{currentRole.dashboardMock.stat2}</div>
                  <div className="mockup-stat-label">{currentRole.dashboardMock.stat2Label}</div>
                </div>

                <div className="mockup-stat-box highlight-stat">
                  <div className="mockup-stat-value text-gradient-emerald">{currentRole.dashboardMock.stat3}</div>
                  <div className="mockup-stat-label">{currentRole.dashboardMock.stat3Label}</div>
                </div>

                <div className="mockup-activity-strip mt-3 pt-3 border-top">
                  <div className="d-flex align-items-center justify-content-between text-muted fs-8">
                    <span><i className="bi bi-clock-history me-1"></i> Real-time Telemetry Synced</span>
                    <span className="text-success">Live Status</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
