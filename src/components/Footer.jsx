import React from 'react';
import { platformMeta } from '../data/carbosafeData';

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -74, duration: 1.15 });
      } else {
        const topOffset = 74;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer id="footer" className="carbosafe-footer bg-white border-top">
      <div className="container py-5">
        <div className="row g-4 justify-content-between">
          
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand-wrap mb-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="brand-leaf-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="#10b981" />
                    <path d="M16 6C11 10 9 16 11 22C13 18 17 15 22 14C23 19 20 24 15 26C21 26 26 21 26 15C26 9 21 6 16 6Z" fill="#ffffff" />
                    <path d="M12 21C14 17 18 15 23 14" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="fs-5 fw-bold text-dark">
                  Carbo<span className="text-success">Safe</span>
                </span>
              </div>
              <p className="fs-8 text-muted mb-3">
                {platformMeta.oneLinePitch}
              </p>
              <div className="mission-quote-box p-3 rounded-3 bg-light fs-8 text-dark border-start border-3 border-success">
                <strong>Our Mission:</strong> {platformMeta.mission}
              </div>
            </div>

            <div className="footer-tag-pills d-flex flex-wrap gap-1 mt-3">
              {platformMeta.badgePills.map((pill, idx) => (
                <span key={idx} className="badge bg-light text-muted border fs-9">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Platform Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="fs-7 fw-bold text-dark mb-3">Platform</h5>
            <ul className="list-unstyled footer-nav-list fs-8">
              <li className="mb-2">
                <a href="#problems" onClick={(e) => { e.preventDefault(); scrollTo('problems'); }}>
                  Problems We Solve
                </a>
              </li>
              <li className="mb-2">
                <a href="#solution" onClick={(e) => { e.preventDefault(); scrollTo('solution'); }}>
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#stakeholders" onClick={(e) => { e.preventDefault(); scrollTo('stakeholders'); }}>
                  Who Uses CarboSafe
                </a>
              </li>
              <li className="mb-2">
                <a href="#marketplace" onClick={(e) => { e.preventDefault(); scrollTo('marketplace'); }}>
                  Carbon Marketplace
                </a>
              </li>
              <li className="mb-2">
                <a href="#tech" onClick={(e) => { e.preventDefault(); scrollTo('tech'); }}>
                  Technology Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Decarbonization & Impact */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="fs-7 fw-bold text-dark mb-3">Impact & Models</h5>
            <ul className="list-unstyled footer-nav-list fs-8">
              <li className="mb-2">
                <a href="#it-carbon" onClick={(e) => { e.preventDefault(); scrollTo('it-carbon'); }}>
                  IT Industry Footprint
                </a>
              </li>
              <li className="mb-2">
                <a href="#revenue" onClick={(e) => { e.preventDefault(); scrollTo('revenue'); }}>
                  Farmer-First Payouts
                </a>
              </li>
              <li className="mb-2">
                <a href="#mvp-status" onClick={(e) => { e.preventDefault(); scrollTo('mvp-status'); }}>
                  Engineering Status
                </a>
              </li>
              <li className="mb-2">
                <a href="#roadmap" onClick={(e) => { e.preventDefault(); scrollTo('roadmap'); }}>
                  Development Roadmap
                </a>
              </li>
              <li className="mb-2">
                <a href="#college-pitch" onClick={(e) => { e.preventDefault(); scrollTo('college-pitch'); }}>
                  College Capstone Pitch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Demo */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fs-7 fw-bold text-dark mb-3">Join the Movement</h5>
            <p className="fs-8 text-muted mb-3">
              Ready to pilot verifiable carbon removal or monetize your sustainable agroforestry acreage?
            </p>
            <button
              type="button"
              className="btn btn-sm btn-google-primary btn-carbosafe-green w-100 mb-3"
              onClick={onOpenModal}
            >
              <i className="bi bi-calendar2-check me-2"></i>
              Schedule Live Demonstration
            </button>
            <div className="text-muted fs-9 d-flex align-items-center gap-2">
              <i className="bi bi-shield-check text-success"></i>
              <span>70–90% Direct Farmer Compensation Model</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-5 pt-4 border-top d-flex align-items-center justify-content-between flex-wrap gap-2 text-muted fs-8">
          <div>
            © {currentYear} CarboSafe Platform. All rights reserved. Built with AI & Blockchain for high-integrity ClimateTech.
          </div>
          <div className="d-flex align-items-center gap-3">
            <span>GHG Protocol Compliant</span>
            <span>•</span>
            <span>IPCC Guidelines</span>
            <span>•</span>
            <span>Verra / Gold Standard Mapped</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
