import React, { useState, useEffect } from 'react';
import { projectsCatalog } from '../data/carbosafeData';

export default function MarketplaceModules({ onOpenModal }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const currentIndex = selectedProject ? projectsCatalog.findIndex(p => p.id === selectedProject.id) : -1;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedProject(projectsCatalog[currentIndex - 1]);
    } else {
      setSelectedProject(projectsCatalog[projectsCatalog.length - 1]);
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex < projectsCatalog.length - 1) {
      setSelectedProject(projectsCatalog[currentIndex + 1]);
    } else {
      setSelectedProject(projectsCatalog[0]);
    }
  };

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to cycle
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    if (window.__lenis) window.__lenis.stop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    };
  }, [selectedProject, currentIndex]);

  return (
    <section id="marketplace" className="google-modules-section section-padding">
      <div className="container">

        {/* Clean Header */}
        <div className="google-modules-header text-center">
          <div className="section-pill-badge mb-2">
            <i className="bi bi-shop text-success me-2"></i>
            <span>Verified Nature-Based Sinks</span>
          </div>
          <h2 className="section-title-google">
            Carbon Credit <span className="text-gradient-gemini">Marketplace</span>
          </h2>
          <p className="section-subtitle-google mx-auto" style={{ maxWidth: '720px' }}>
            Explore satellite-verified agroforestry, blue carbon, and soil restoration projects across India. Click any project card to review empirical evidence and methodology audit reports.
          </p>
        </div>

        {/* Grid of Projects in 4-column layout */}
        <div className="google-modules-grid">
          {projectsCatalog.map((project) => (
            <div
              key={project.id}
              className="google-module-tile"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              title={`View ${project.shortTitle} details`}
            >
              {/* Top Row: Squircle Icon + Index Indicator */}
              <div className="google-tile-top-row">
                <div className="google-tile-icon-circle" aria-hidden="true">
                  <i className={`bx ${project.icon}`}></i>
                </div>
                <div className="google-tile-index" aria-hidden="true">
                  <span className="tile-idx-num">{String(project.id).padStart(2, '0')}</span>
                  <i className="bi bi-arrow-up-right tile-idx-arrow"></i>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="google-tile-content">
                <div className="tile-category-badge mb-1">{project.category}</div>
                <h3 className="google-tile-title">{project.shortTitle}</h3>
                <div className="google-tile-subtitle">{project.location}</div>
                
                <div className="tile-meta-footer mt-3 pt-2 border-top d-flex align-items-center justify-content-between">
                  <span className="tile-credits-text text-gradient-emerald fw-bold">
                    {project.availableCredits.toLocaleString()} tCO₂e
                  </span>
                  <span className="tile-price-pill">{project.pricePerCredit}/t</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div 
          className="google-module-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          data-lenis-prevent="true"
        >
          <div 
            className="google-module-modal-card"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            {/* Modal Header */}
            <div className="google-modal-header">
              <div className="d-flex align-items-center gap-3">
                <div className="google-modal-icon-badge">
                  <i className={`bx ${selectedProject.icon}`}></i>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="google-modal-idx-pill">
                      Project {String(selectedProject.id).padStart(2, '0')} of {projectsCatalog.length}
                    </span>
                    <span className="google-modal-cat-badge">
                      {selectedProject.category}
                    </span>
                    <span className="google-modal-cat-badge bg-success text-white">
                      {selectedProject.status}
                    </span>
                  </div>
                  <h3 id="modal-project-title" className="google-modal-title">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Navigation Arrows & Close */}
              <div className="google-modal-header-actions">
                <button
                  type="button"
                  className="google-modal-nav-arrow"
                  onClick={handlePrev}
                  title="Previous Project (←)"
                  aria-label="Previous Project"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="google-modal-nav-arrow"
                  onClick={handleNext}
                  title="Next Project (→)"
                  aria-label="Next Project"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
                <button
                  type="button"
                  className="google-modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  title="Close (Esc)"
                  aria-label="Close dialog"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="google-modal-body">
              <p className="google-modal-desc">
                {selectedProject.description}
              </p>

              {/* Project Meta Strip */}
              <div className="google-modal-meta-strip">
                <div className="meta-tag-item">
                  <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                  <span>{selectedProject.location}</span>
                </div>
                <div className="meta-tag-item">
                  <i className="bi bi-person-heart text-success me-1"></i>
                  <span>{selectedProject.farmerName}</span>
                </div>
                <div className="meta-tag-item">
                  <i className="bi bi-aspect-ratio-fill text-primary me-1"></i>
                  <span>{selectedProject.hectares}</span>
                </div>
                <div className="meta-tag-item">
                  <i className="bi bi-wallet-fill text-warning me-1"></i>
                  <span>{selectedProject.farmerShare} to Farmer</span>
                </div>
              </div>

              {/* Metrics & Satellite Proof Box */}
              <div className="modal-metric-card-grid row g-3 my-3">
                <div className="col-md-4">
                  <div className="modal-stat-box p-3 rounded-3 liquid-glass-subtle text-center">
                    <span className="fs-8 text-muted d-block">Available Credits</span>
                    <strong className="fs-5 text-gradient-emerald">{selectedProject.availableCredits.toLocaleString()} Tonnes</strong>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="modal-stat-box p-3 rounded-3 liquid-glass-subtle text-center">
                    <span className="fs-8 text-muted d-block">Price Per Credit</span>
                    <strong className="fs-5 text-primary">{selectedProject.pricePerCredit}</strong>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="modal-stat-box p-3 rounded-3 liquid-glass-subtle text-center">
                    <span className="fs-8 text-muted d-block">AI Satellite Score</span>
                    <strong className="fs-5 text-success">{selectedProject.satelliteScore}% Match</strong>
                  </div>
                </div>
              </div>

              {/* Core Features & Verification Evidence */}
              <div className="google-modal-features-box">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4 className="google-features-heading m-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Verification Evidence & Methodology Highlights
                  </h4>
                  <span className="features-count-pill">
                    {selectedProject.features.length} Proof Points
                  </span>
                </div>
                <div className="google-features-grid">
                  {selectedProject.features.map((feat, fIdx) => (
                    <div key={fIdx} className="google-feature-item">
                      <i className="bi bi-check-circle-fill google-check-icon"></i>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accounting Standard & Methodology Footnote */}
              <div className="modal-methodology-note mt-3 p-3 rounded-3 bg-light d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fs-8 d-block">Standard & Registry Methodology:</span>
                  <strong className="text-dark fs-7">{selectedProject.methodology}</strong>
                </div>
                <span className="badge bg-secondary">Tamper-Proof Audit Trail</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="google-modal-footer">
              <div className="google-modal-footer-nav">
                <button
                  type="button"
                  className="btn btn-sm btn-google-nav-btn"
                  onClick={handlePrev}
                  title="Previous Project"
                >
                  <i className="bi bi-arrow-left me-1"></i> Prev
                </button>
                <span className="footer-nav-counter">
                  {String(selectedProject.id).padStart(2, '0')} / {projectsCatalog.length}
                </span>
                <button
                  type="button"
                  className="btn btn-sm btn-google-nav-btn"
                  onClick={handleNext}
                  title="Next Project"
                >
                  Next <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-google-outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-google-primary btn-carbosafe-green"
                  onClick={() => {
                    setSelectedProject(null);
                    if (onOpenModal) onOpenModal();
                  }}
                >
                  <i className="bi bi-cart-check me-2"></i>
                  Purchase & Retire Credits
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
