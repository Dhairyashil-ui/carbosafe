import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('demo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'industry',
    offsetTarget: '1000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {}
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-dialog-box liquid-glass-strong" onClick={(e) => e.stopPropagation()}>
        
        {/* Google-Style Modal Header */}
        <div className="modal-header-google">
          <div className="modal-title-wrap">
            <div className="modal-header-icon-badge bg-success-subtle text-success">
              <i className="bi bi-tree-fill"></i>
            </div>
            <div>
              <h4 className="modal-title-main">CarboSafe Platform Access</h4>
              <p className="modal-subtitle-text">Connect with our ClimateTech engineering & carbon markets team</p>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={handleClose}
            title="Close dialog"
            aria-label="Close dialog"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="modal-body-google">
            <div className="text-center py-4">
              <div className="modal-success-icon-wrap mb-3 text-success">
                <i className="bi bi-check-circle-fill display-4"></i>
              </div>
              <h4 className="fs-5 fw-bold text-main mb-1">Access Request Received!</h4>
              <p className="text-secondary fs-7 mb-4 px-2">
                Thank you, <strong>{formData.name}</strong>. Our climate verification and enterprise carbon coordinator will reach out to <strong>{formData.email}</strong> shortly with your personalized sandbox credentials and satellite telemetry dossier.
              </p>
              <button
                type="button"
                className="btn btn-google-primary btn-carbosafe-green mx-auto"
                onClick={handleClose}
              >
                <i className="bi bi-check2 me-1"></i>
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form-layout">
            <div className="modal-body-google">
              
              {/* Role Selection Tabs */}
              <div className="modal-role-tabs d-flex gap-2 mb-3">
                <button
                  type="button"
                  className={`btn btn-sm ${activeTab === 'demo' ? 'btn-success text-white' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab('demo')}
                >
                  <i className="bi bi-display me-1"></i> Book Platform Demo
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${activeTab === 'offset' ? 'btn-success text-white' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab('offset')}
                >
                  <i className="bi bi-building me-1"></i> Corporate Offsets
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${activeTab === 'farmer' ? 'btn-success text-white' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab('farmer')}
                >
                  <i className="bi bi-person-heart me-1"></i> Farmer Registration
                </button>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fs-8 fw-semibold text-secondary">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control form-control-sm"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-8 fw-semibold text-secondary">Work / Contact Email *</label>
                  <input
                    type="email"
                    required
                    className="form-control form-control-sm"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fs-8 fw-semibold text-secondary">Company / Organization / Farm Cooperative</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="e.g. CloudTech Data Systems"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fs-8 fw-semibold text-secondary">Est. Annual CO₂e Offset Goal</label>
                  <select
                    className="form-select form-select-sm"
                    value={formData.offsetTarget}
                    onChange={(e) => setFormData({ ...formData, offsetTarget: e.target.value })}
                  >
                    <option value="100">100 - 500 Tonnes CO₂e</option>
                    <option value="1000">500 - 2,500 Tonnes CO₂e</option>
                    <option value="5000">2,500 - 10,000 Tonnes CO₂e</option>
                    <option value="10000">10,000+ Tonnes CO₂e (Enterprise)</option>
                    <option value="farmer">I am a Farmer / Landowner</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fs-8 fw-semibold text-secondary">Additional Notes / Inquiry</label>
                  <textarea
                    rows="3"
                    className="form-control form-control-sm"
                    placeholder="Tell us about your IT energy profile, agroforestry project, or verification timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div className="mt-3 p-2 bg-light rounded text-muted fs-9 d-flex align-items-center gap-2">
                <i className="bi bi-shield-lock-fill text-success"></i>
                <span>Your details are protected under strict climate registry confidentiality guidelines.</span>
              </div>

            </div>

            <div className="modal-footer-google border-top p-3 d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-sm btn-google-outline"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-sm btn-google-primary btn-carbosafe-green"
              >
                {loading ? (
                  <span><i className="bi bi-arrow-repeat spin me-1"></i> Submitting...</span>
                ) : (
                  <span><i className="bi bi-send me-1"></i> Submit Request</span>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
