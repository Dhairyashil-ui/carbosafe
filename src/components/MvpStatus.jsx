import React from 'react';
import { mvpStatusData } from '../data/carbosafeData';

export default function MvpStatus() {
  return (
    <section id="mvp-status" className="mvp-status-section section-padding">
      <div className="container">

        {/* Section Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-code-square text-primary me-2"></i>
            <span>Engineering Transparency</span>
          </div>
          <h2 className="section-title-google">
            What We Have Built <span className="text-gradient-gemini">So Far</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '720px' }}>
            {mvpStatusData.subhead}
          </p>
        </div>

        {/* MVP Status Cards */}
        <div className="row g-3 mt-2 mb-5">
          {mvpStatusData.components.map((comp, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="mvp-comp-card liquid-glass-subtle p-3 rounded-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="fs-6 fw-bold m-0">{comp.title}</h4>
                    <span className={`badge ${comp.badgeClass === 'badge-success' ? 'bg-success' : 'bg-warning text-dark'} fs-9`}>
                      {comp.status}
                    </span>
                  </div>
                  <p className="text-muted fs-8 m-0">{comp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Table & Issues To Fix Grid */}
        <div className="row g-4 align-items-stretch">
          
          {/* Left: Tech Stack Table */}
          <div className="col-lg-5">
            <div className="tech-stack-table-card liquid-glass p-4 rounded-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-stack text-success fs-5"></i>
                <h3 className="fs-5 fw-bold m-0">Current Technology Stack</h3>
              </div>
              <p className="text-muted fs-8 mb-3">
                Modern full-stack foundation deployed across Lovable, Vite, React, and Supabase.
              </p>

              <div className="table-responsive">
                <table className="table table-sm align-middle fs-8">
                  <tbody>
                    <tr><td><strong>Frontend</strong></td><td className="text-muted">React, TypeScript, Vite</td></tr>
                    <tr><td><strong>Styling</strong></td><td className="text-muted">Google Clean System + Tailwind CSS</td></tr>
                    <tr><td><strong>Authentication</strong></td><td className="text-muted">Supabase Auth (Farmer / Industry roles)</td></tr>
                    <tr><td><strong>Database</strong></td><td className="text-muted">Supabase PostgreSQL + RLS</td></tr>
                    <tr><td><strong>Security</strong></td><td className="text-muted">Row Level Security Policies</td></tr>
                    <tr><td><strong>AI Verification</strong></td><td className="text-muted"><span className="badge bg-secondary-subtle text-secondary">Planned Model</span></td></tr>
                    <tr><td><strong>Blockchain</strong></td><td className="text-muted"><span className="badge bg-secondary-subtle text-secondary">Planned Smart Contracts</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Critical Issues to Fix Checklist */}
          <div className="col-lg-7">
            <div className="issues-fix-card liquid-glass p-4 rounded-4 h-100">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-tools text-danger fs-5"></i>
                  <h3 className="fs-5 fw-bold m-0">Important Issues to Fix Before Production</h3>
                </div>
                <span className="badge bg-danger-subtle text-danger">Engineering Action Items</span>
              </div>
              <p className="text-muted fs-8 mb-3">
                These are the immediate engineering tasks being addressed to ensure rock-solid marketplace integrity:
              </p>

              <div className="issues-stack">
                {mvpStatusData.issuesToFix.map((issue) => (
                  <div key={issue.id} className="issue-item p-3 mb-2 rounded-3 bg-white border border-light shadow-sm">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <strong className="fs-7 text-dark d-flex align-items-center gap-2">
                        <span className="badge bg-secondary rounded-pill">{issue.id}</span>
                        {issue.title}
                      </strong>
                      <span className={`badge ${issue.severity === 'Critical' ? 'bg-danger' : issue.severity === 'High' ? 'bg-warning text-dark' : 'bg-info text-dark'} fs-9`}>
                        {issue.severity}
                      </span>
                    </div>
                    <p className="text-muted fs-8 m-0 ps-4">{issue.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
