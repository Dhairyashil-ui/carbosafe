import React, { useState, useRef, useEffect } from 'react';

const PARALLEL_METRICS = [
  { id: 'co2e', target: 125000, label: 'Tonnes CO₂e Sequestration Potential', suffix: '+' },
  { id: 'share', target: 80, label: 'Farmer Direct Revenue Target', suffix: '%' },
  { id: 'farmers', target: 1450, label: 'Registered Rural Land Stewards', suffix: '+' },
  { id: 'latency', target: 50, label: 'Smart Contract Settlement Latency', suffix: 'ms' }
];

function AnimatedMetricCard({ target, label, suffix = "+", isVisible, delayIndex = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    let animId;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, target]);

  return (
    <div 
      className={`google-stat-card ${isVisible ? 'card-revealed' : ''}`}
      style={{ '--reveal-delay': `${delayIndex * 0.08}s` }}
    >
      <div className="google-stat-card-sheen" aria-hidden="true"></div>
      <div className="google-stat-card-inner">
        <div className="google-stat-num-row">
          <span className="google-stat-number">{count.toLocaleString()}</span>
          <span className="google-stat-suffix text-gradient-emerald">{suffix}</span>
        </div>
        <div className="google-stat-label">{label}</div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 1. AI SATELLITE RADAR & BIOMASS VISUAL (Replaces Video 1)
// --------------------------------------------------------------------------
function AiRadarVisual() {
  return (
    <div className="custom-visual-card radar-visual-card">
      <div className="visual-top-bar">
        <div className="visual-badge">
          <span className="radar-live-blip"></span>
          <span>SENTINEL-2 MULTI-SPECTRAL TELEMETRY</span>
        </div>
        <span className="telemetry-coords">18.5204° N, 73.8567° E</span>
      </div>

      <div className="radar-screen-wrap">
        <svg className="radar-svg" viewBox="0 0 300 300">
          <defs>
            <radialGradient id="radarScanGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.45)" />
              <stop offset="65%" stopColor="rgba(16, 185, 129, 0.12)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
            </radialGradient>
          </defs>

          {/* Concentric Range Rings */}
          <circle cx="150" cy="150" r="130" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
          <circle cx="150" cy="150" r="95" stroke="rgba(16, 185, 129, 0.28)" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="60" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="150" cy="150" r="25" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1" fill="none" />

          {/* Crosshairs */}
          <line x1="150" y1="10" x2="150" y2="290" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
          <line x1="10" y1="150" x2="290" y2="150" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />

          {/* Simulated Agroforest Biomass Canopy Zones */}
          <polygon points="120,70 170,85 190,130 160,165 110,140" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" strokeWidth="1.5" />
          <polygon points="175,155 230,170 245,210 205,235 165,195" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1.2" />
          <polygon points="65,160 115,175 125,220 80,240 50,195" fill="rgba(52, 211, 153, 0.16)" stroke="#34d399" strokeWidth="1.2" />

          {/* Radar Sweep Ray */}
          <g className="radar-sweep-group">
            <path d="M150,150 L150,20 A130,130 0 0,1 242,58 Z" fill="url(#radarScanGrad)" />
            <line x1="150" y1="150" x2="242" y2="58" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Hotspots / Tree Plots */}
          <circle cx="145" cy="110" r="4.5" fill="#34d399" className="pulsing-radar-dot" />
          <circle cx="170" cy="135" r="3.5" fill="#10b981" />
          <circle cx="210" cy="190" r="4" fill="#06b6d4" className="pulsing-radar-dot" />
          <circle cx="85" cy="190" r="4" fill="#34d399" />
          <circle cx="150" cy="150" r="5" fill="#ffffff" />
        </svg>

        <div className="radar-overlay-data">
          <div className="overlay-pill">
            <span className="dot-green"></span>
            <strong>NDVI 0.84</strong> (Healthy Agroforest)
          </div>
          <div className="overlay-pill">
            <span>Canopy Confidence: <strong>99.2%</strong></span>
          </div>
        </div>
      </div>

      <div className="visual-bottom-strip">
        <div className="stat-mini">
          <span className="lbl">Temporal Frequency</span>
          <span className="val">Every 5 Days</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Optical Resolution</span>
          <span className="val">10m Ground Truth</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Status</span>
          <span className="val text-success">Verified Active</span>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 2. FARMER-FIRST ECONOMICS VISUAL (Replaces Video 2)
// --------------------------------------------------------------------------
function FarmerPayoutVisual() {
  return (
    <div className="custom-visual-card payout-visual-card">
      <div className="visual-top-bar">
        <div className="visual-badge">
          <i className="bi bi-wallet2 text-success me-1"></i>
          <span>TRANSPARENT REVENUE ROUTING</span>
        </div>
        <span className="telemetry-coords">NO MIDDLEMEN BROKERS</span>
      </div>

      <div className="payout-split-stage">
        {/* Large Highlight Ring */}
        <div className="split-circle-wrap">
          <svg className="split-donut-svg" viewBox="0 0 160 160">
            {/* Background Circle */}
            <circle cx="80" cy="80" r="62" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="18" fill="none" />
            {/* 80% Farmer Share */}
            <circle 
              cx="80" cy="80" r="62" 
              stroke="#10b981" 
              strokeWidth="18" 
              fill="none" 
              strokeDasharray="312 390" 
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* 10% Local Verifiers */}
            <circle 
              cx="80" cy="80" r="62" 
              stroke="#06b6d4" 
              strokeWidth="18" 
              fill="none" 
              strokeDasharray="39 390" 
              strokeDashoffset="-316"
              strokeLinecap="round"
            />
            {/* 10% Platform */}
            <circle 
              cx="80" cy="80" r="62" 
              stroke="#8b5cf6" 
              strokeWidth="18" 
              fill="none" 
              strokeDasharray="39 390" 
              strokeDashoffset="-356"
              strokeLinecap="round"
            />
          </svg>
          <div className="split-donut-center">
            <span className="donut-num text-gradient-emerald">80%</span>
            <span className="donut-lbl">To Farmers</span>
          </div>
        </div>

        {/* Breakdown Legend */}
        <div className="payout-breakdown-list">
          <div className="breakdown-row highlight-row">
            <span className="color-bar bg-emerald"></span>
            <div className="breakdown-info">
              <span className="title">Farmer Direct Payout</span>
              <span className="desc">Direct UPI / Bank distribution</span>
            </div>
            <span className="pct text-success">80%</span>
          </div>

          <div className="breakdown-row">
            <span className="color-bar bg-cyan"></span>
            <div className="breakdown-info">
              <span className="title">Independent MRV & Audits</span>
              <span className="desc">Drone & soil carbon testing</span>
            </div>
            <span className="pct text-info">10%</span>
          </div>

          <div className="breakdown-row">
            <span className="color-bar bg-purple"></span>
            <div className="breakdown-info">
              <span className="title">CarboSafe Platform Protocol</span>
              <span className="desc">Infrastructure & blockchain ledger</span>
            </div>
            <span className="pct text-purple">10%</span>
          </div>
        </div>
      </div>

      <div className="visual-bottom-strip">
        <div className="stat-mini">
          <span className="lbl">Intermediary Broker Cut</span>
          <span className="val text-success">0% (Eliminated)</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Settlement Rail</span>
          <span className="val">UPI / Instant Bank</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Payment Latency</span>
          <span className="val">&lt; 50ms</span>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 3. BLOCKCHAIN INTEGRITY & RETIREMENT VISUAL (Replaces Video 3)
// --------------------------------------------------------------------------
function BlockchainLedgerVisual() {
  return (
    <div className="custom-visual-card ledger-visual-card">
      <div className="visual-top-bar">
        <div className="visual-badge">
          <i className="bi bi-shield-check text-purple me-1"></i>
          <span>IMMUTABLE ON-CHAIN REGISTRY</span>
        </div>
        <span className="telemetry-coords">BLOCK #1,849,203</span>
      </div>

      <div className="ledger-block-stage">
        {/* Header Block Info */}
        <div className="ledger-block-box">
          <div className="block-meta-row">
            <span className="token-tag">CRB-2026-IND-0941</span>
            <span className="status-badge-green">Finalized & Immutable</span>
          </div>

          <div className="block-hash-line">
            <span className="lbl">Merkle Root:</span>
            <span className="hash-code">0x7f3a9c4e2b810d7a6e12f05c49b8123a</span>
          </div>
          
          <div className="block-hash-line">
            <span className="lbl">Retirement Proof:</span>
            <span className="hash-code text-cyan">tx://0xbf81e0...c487 (Permanent)</span>
          </div>
        </div>

        {/* 3 Verification Checkmarks */}
        <div className="ledger-checks-list">
          <div className="check-item-row">
            <i className="bi bi-check-circle-fill text-success"></i>
            <span>Zero Double-Counting Checked across Verra & Gold Standard Registries</span>
          </div>
          <div className="check-item-row">
            <i className="bi bi-check-circle-fill text-success"></i>
            <span>Atomic Smart Contract: Simultaneous payment & title transfer</span>
          </div>
          <div className="check-item-row">
            <i className="bi bi-check-circle-fill text-success"></i>
            <span>Cryptographic retirement certificate mapped to Corporate ESG Tax ID</span>
          </div>
        </div>
      </div>

      <div className="visual-bottom-strip">
        <div className="stat-mini">
          <span className="lbl">Audit Integrity</span>
          <span className="val text-success">100% Cryptographic</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Consensus</span>
          <span className="val">PoS Carbon Verified</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Double-Selling</span>
          <span className="val text-success">Guaranteed Zero</span>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 4. ENTERPRISE IT & DATA CENTRE VISUAL (Replaces Video 4)
// --------------------------------------------------------------------------
function EnterpriseCarbonVisual() {
  return (
    <div className="custom-visual-card enterprise-visual-card">
      <div className="visual-top-bar">
        <div className="visual-badge">
          <i className="bi bi-cpu-fill text-warning me-1"></i>
          <span>DATA CENTRE & IT DECARBONIZATION</span>
        </div>
        <span className="telemetry-coords">GHG PROTOCOL READY</span>
      </div>

      <div className="enterprise-stage">
        {/* PUE Efficiency Gauge and Scopes */}
        <div className="enterprise-metrics-grid">
          <div className="gauge-box">
            <div className="gauge-val text-gradient-emerald">1.14</div>
            <div className="gauge-lbl">PUE Target (Optimal)</div>
            <div className="gauge-sub">Power Usage Effectiveness</div>
          </div>

          <div className="scopes-breakdown">
            <div className="scope-row">
              <div className="scope-meta">
                <span>Scope 1 (Facility Direct)</span>
                <strong>92% Optimized</strong>
              </div>
              <div className="progress-track">
                <div className="progress-fill bg-emerald" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className="scope-row">
              <div className="scope-meta">
                <span>Scope 2 (Grid Electricity)</span>
                <strong>100% Green Matched</strong>
              </div>
              <div className="progress-track">
                <div className="progress-fill bg-cyan" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="scope-row">
              <div className="scope-meta">
                <span>Scope 3 (AI Cloud Offsets)</span>
                <strong>1,250 tCO₂e Retired</strong>
              </div>
              <div className="progress-track">
                <div className="progress-fill bg-amber" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="enterprise-badge-row">
          <span className="enterprise-chip">
            <i className="bi bi-building-check me-1"></i> Scope 1-3 GHG Compliant
          </span>
          <span className="enterprise-chip">
            <i className="bi bi-server me-1"></i> Server Cooling AI Optimized
          </span>
          <span className="enterprise-chip">
            <i className="bi bi-patch-check-fill text-success me-1"></i> ESG Audit Passed
          </span>
        </div>
      </div>

      <div className="visual-bottom-strip">
        <div className="stat-mini">
          <span className="lbl">Cloud Reporting</span>
          <span className="val">SAP / Workiva Ready</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Offset Credibility</span>
          <span className="val text-success">High Permanence</span>
        </div>
        <div className="stat-mini">
          <span className="lbl">Farmer Co-Benefits</span>
          <span className="val">Biodiversity & Water</span>
        </div>
      </div>
    </div>
  );
}

const SLIDES = [
  {
    id: 'ai-verification',
    number: '01',
    category: 'AI Remote Verification',
    highlight: 'Multi-Spectral Biomass Analytics',
    desc: 'High-resolution Sentinel-2 and drone computer vision models verify canopy density, NDVI time-series, and biomass volume with real-time anomaly detection.',
    metricNum: '99.2%',
    metricUnit: 'Verification Confidence',
    metricSub: 'Multi-spectral satellite & drone calibration',
    themeColor: '#10b981',
    glowClass: 'aura-green',
    visualComponent: <AiRadarVisual />,
    chips: ['Sentinel-2 Imagery', 'Drone Photogrammetry', 'Canopy Computer Vision', 'IoT Soil Probes'],
    highlights: [
      'Continuous temporal monitoring detects reversals, fires, or unauthorized logging',
      'Ground-truthed calibrated soil organic carbon (SOC) models prevent over-crediting',
      'Automated alert dispatch to independent verifiers upon any canopy anomaly'
    ]
  },
  {
    id: 'farmer-first',
    number: '02',
    category: 'Farmer-First Economics',
    highlight: '70–90% Direct Value to Farmers',
    desc: 'Eliminating predatory intermediary brokers to ensure rural stewards, agroforestry growers, and regenerative farmers receive the vast majority of carbon offset proceeds.',
    metricNum: '80%',
    metricUnit: 'Baseline Farmer Share',
    metricSub: 'Direct distribution via smart contract / UPI',
    themeColor: '#10b981',
    glowClass: 'aura-green',
    visualComponent: <FarmerPayoutVisual />,
    chips: ['No Middlemen', 'Transparent Splits', 'Direct Bank & UPI', 'Working Capital Support'],
    highlights: [
      'Empowering smallholders with verifiable income for restorative agriculture',
      'Full public transparency of platform fees, audit deductions, and net payouts',
      'Milestone-gated disbursements ensuring multi-year ecological permanence'
    ]
  },
  {
    id: 'blockchain-integrity',
    number: '03',
    category: 'Blockchain Integrity',
    highlight: 'Zero Double-Counting & Tamper-Evident Proof',
    desc: 'Each issued credit receives a cryptographically unique identifier recorded on a public, immutable ledger with permanent retirement proof for ESG compliance.',
    metricNum: '100%',
    metricUnit: 'Cryptographic Audit Trail',
    metricSub: 'Tamper-evident issuance & retirement records',
    themeColor: '#8b5cf6',
    glowClass: 'aura-purple',
    visualComponent: <BlockchainLedgerVisual />,
    chips: ['Unique Token IDs', 'Anti-Double-Issuance', 'Atomic Smart Contracts', 'Public Ledger'],
    highlights: [
      'Prevents double-selling across disparate international voluntary registries',
      'Atomic swap mechanics ensure buyer payment and credit transfer execute simultaneously',
      'Cryptographically signed retirement certificates mapped to corporate tax and ESG IDs'
    ]
  },
  {
    id: 'it-decarbonization',
    number: '04',
    category: 'Enterprise Decarbonization',
    highlight: 'Empowering IT, Cloud & Data Centres',
    desc: 'Helping technology enterprises measure energy footprints, optimize server cooling & computing first, and offset remaining emissions with high-integrity carbon credits.',
    metricNum: '1,000+',
    metricUnit: 'Tonnes CO₂e Offsets Mapped',
    metricSub: 'GHG Protocol Scope 1, 2 & 3 reporting ready',
    themeColor: '#f59e0b',
    glowClass: 'aura-amber',
    visualComponent: <EnterpriseCarbonVisual />,
    chips: ['Data Centre PUE', 'AI Workload Offsets', 'Scope 1-3 Compliance', 'Enterprise ESG'],
    highlights: [
      'Clear separation of internal emissions reduction vs external offset purchases',
      'API integration with corporate carbon accounting suites (SAP, Salesforce, Workiva)',
      'Verified co-benefits: biodiversity preservation, rural job creation, and water security'
    ]
  }
];

export default function Counts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="counts" className="stats-strip-white">
      <div className="container">
        
        {/* =========================================================
            CINEMATIC MINI-SCREEN CONSOLE (Zero wheel trapping / Zero lock)
            Left: Interactive Custom Visual (No Video)
            Right: Premium Liquid-Glass Info Panel
            ========================================================= */}
        <div className="mini-screen-container">
          
          {/* Floating Right Navigation Dots */}
          <div className="mini-screen-floating-dots" aria-label="Slide indicators">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`floating-dot-pill ${activeIndex === idx ? 'pill-active' : ''}`}
                title={s.category}
                aria-label={`Switch to tab ${idx + 1}: ${s.category}`}
              >
                <span className="dot-pill-num">{s.number}</span>
              </button>
            ))}
          </div>

          {/* Active Slide Display */}
          <div className="mini-screen-display-stage">
            {SLIDES.map((slide, idx) => (
              <div 
                key={slide.id} 
                className={`mini-screen-tab-panel ${activeIndex === idx ? 'tab-panel-active' : ''} ${slide.glowClass}`}
              >
                <div className="slide-content-grid">
                  
                  {/* Left Column: Interactive Custom Graphic Visual (No Video!) */}
                  <div className="slide-video-col">
                    <div className="slide-visual-wrapper liquid-glass-strong">
                      <div className="liquid-glass-beam"></div>
                      {slide.visualComponent}
                    </div>
                  </div>

                  {/* Right Column: Liquid-Glass Info Panel */}
                  <div className="slide-info-col">
                    <h2 className="slide-panel-top-title">
                      {slide.category}
                    </h2>

                    <div className="slide-info-panel liquid-glass">
                      <div className="liquid-glass-beam"></div>

                      <h3 className="slide-main-heading">
                        {slide.highlight}
                      </h3>

                      <p className="slide-main-desc">
                        {slide.desc}
                      </p>

                      <div className="slide-metric-callout">
                        <div className="metric-large" style={{ color: slide.themeColor }}>
                          {slide.metricNum}
                        </div>
                        <div className="metric-details">
                          <span className="metric-unit-text">{slide.metricUnit}</span>
                          <span className="metric-sub-text">{slide.metricSub}</span>
                        </div>
                      </div>

                      <div className="slide-highlights-list">
                        {slide.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="slide-highlight-item">
                            <i className="bi bi-check-circle-fill me-2" style={{ color: slide.themeColor }}></i>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="slide-chips-row mt-3">
                        {slide.chips.map((chip, cIdx) => (
                          <span key={cIdx} className="slide-chip-item">
                            {chip}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Golden / Emerald Trust Badges Ribbon */}
        <div className="trust-badges-ribbon carbosafe-trust-ribbon">
          <div className="trust-badge-item" title="AI Satellite Verification">
            <div className="trust-badge-pill">
              <i className="bi bi-satellite text-success"></i>
              <span>Sentinel-2 AI Verification</span>
            </div>
          </div>
          <div className="trust-badge-item" title="Farmer Direct Value">
            <div className="trust-badge-pill">
              <i className="bi bi-wallet-fill text-primary"></i>
              <span>70–90% Direct Farmer Payouts</span>
            </div>
          </div>
          <div className="trust-badge-item" title="Blockchain Provenance">
            <div className="trust-badge-pill">
              <i className="bi bi-shield-check text-warning"></i>
              <span>Tamper-Evident Blockchain Registry</span>
            </div>
          </div>
          <div className="trust-badge-item" title="Zero Double-Counting">
            <div className="trust-badge-pill">
              <i className="bi bi-fingerprint text-info"></i>
              <span>Zero Double-Counting Safeguard</span>
            </div>
          </div>
        </div>

        {/* Parallel Executive Showcase */}
        <div className="mini-screen-parallel-showcase">
          <p className="parallel-showcase-desc">
            <span className="desc-lead">CarboSafe</span> operates at the intersection of climate science, artificial intelligence, and decentralized markets to build the world’s most transparent carbon credit infrastructure. Our farmer-first revenue model empowers rural communities while giving industrial and IT buyers <span className="desc-highlight-value">unimpeachable, satellite-verified environmental offsets</span>.
          </p>

          <div className="quote-glass-stage-wrap">
            <div className="quote-callout-card quote-glass-card">
              <div className="liquid-glass-beam"></div>
              <div className="quote-callout-inner">
                <div className="quote-premium-glyph" aria-hidden="true">
                  <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
                    <path d="M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z" fill="url(#quoteGrad)" />
                    <defs>
                      <linearGradient id="quoteGrad" x1="0" y1="0" x2="38" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981" />
                        <stop offset="0.5" stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#1a73e8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <p className="quote-callout-text">
                  Make carbon credits more trustworthy, transparent, and fair to the people who help protect the environment.
                  <span className="quote-close-glyph" aria-hidden="true">
                    <svg width="26" height="20" viewBox="0 0 38 28" fill="none">
                      <g transform="rotate(180 19 14)">
                        <path d="M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z" fill="url(#quoteGrad)" />
                      </g>
                    </svg>
                  </span>
                </p>
                <div className="quote-author-tag">
                  — The CarboSafe Mission
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Framed Stats Strip Band */}
      <div className="stats-metric-strip-band">
        <div className="container">
          <div ref={statsRef} className="parallel-stats-strip-grid">
            {PARALLEL_METRICS.map((stat, idx) => (
              <AnimatedMetricCard
                key={stat.id}
                target={stat.target}
                label={stat.label}
                suffix={stat.suffix}
                isVisible={statsVisible}
                delayIndex={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
