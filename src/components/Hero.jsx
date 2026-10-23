import React, { useState, useEffect } from 'react';
import CarbonGlobeCanvas from './CarbonGlobeCanvas';

export default function Hero({ onOpenModal, scrolled, onExploreProjects }) {
  // Character-by-character typewriter states
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [textRight, setTextRight] = useState('');

  // Independent active typing steps for parallel execution
  const [activeStepLeft, setActiveStepLeft] = useState(1);
  const [activeStepRight, setActiveStepRight] = useState(1);

  const [buttonVisible, setButtonVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);

  useEffect(() => {
    const fullText1 = "Measuring, Predicting";
    const fullText2 = "and Reducing";
    const fullText3 = "Carbon Footprints with AI";
    const fullRight = "CarboSafe";

    let timer;

    // Chronological animation sequence:
    // 1. "Measuring, Predicting"
    // 2. "and Reducing"
    // 3. "Carbon Footprints with AI"
    // 4. AFTER line 3 finishes -> Types "CarboSafe"
    // 5. Reveals Google All-in-One Box
    // 6. AFTER that -> Reveals Action Buttons

    // Step 1: Types "Measuring, Predicting"
    const startStep1 = () => {
      let idx = 0;
      setActiveStepLeft(1);
      const interval = setInterval(() => {
        idx++;
        setText1(fullText1.slice(0, idx));
        if (idx >= fullText1.length) {
          clearInterval(interval);
          setActiveStepLeft(2);
          timer = setTimeout(startStep2, 160);
        }
      }, 38);
    };

    // Step 2: Types "and Reducing"
    const startStep2 = () => {
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setText2(fullText2.slice(0, idx));
        if (idx >= fullText2.length) {
          clearInterval(interval);
          setActiveStepLeft(3);
          timer = setTimeout(startStep3, 140);
        }
      }, 44);
    };

    // Step 3: Types "Carbon Footprints with AI"
    const startStep3 = () => {
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setText3(fullText3.slice(0, idx));
        if (idx >= fullText3.length) {
          clearInterval(interval);
          setActiveStepLeft(4);
          timer = setTimeout(startRight, 180);
        }
      }, 36);
    };

    // Step 4: Types "CarboSafe"
    const startRight = () => {
      let idx = 0;
      setActiveStepRight(1);
      const interval = setInterval(() => {
        idx++;
        setTextRight(fullRight.slice(0, idx));
        if (idx >= fullRight.length) {
          clearInterval(interval);
          setActiveStepRight(2);
          timer = setTimeout(() => {
            setSubheadingVisible(true);
            timer = setTimeout(() => {
              setButtonVisible(true);
            }, 280);
          }, 180);
        }
      }, 55);
    };

    timer = setTimeout(startStep1, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className={`hero-stage ${scrolled ? 'scrolled' : ''}`}>
      
      {/* Background 3D WebGL Carbon Biosphere Globe */}
      <div className="hero-video-wrapper">
        <CarbonGlobeCanvas scrolled={scrolled} />
        
        {/* Animated White Cover Applied with Slow Motion & Delay on Scroll */}
        <div className={`hero-white-cover ${scrolled ? 'active' : ''}`}></div>

        {/* Shaded White Bottom Transition */}
        <div className={`hero-bottom-fade ${scrolled ? 'active' : ''}`}></div>
      </div>

      {/* Hero Editorial Stage Container: Holds Left and Right Parallel at Top */}
      <div className="hero-editorial-stage">

        {/* 1. LEFT CORNER BLOCK: "Measuring, Predicting and Reducing Carbon Footprints with AI" */}
        <div className="hero-left-mid-block">
          
          {/* Eyebrow Badge */}
          <div className="hero-eyebrow-pill mb-3">
            <span className="pulse-green-dot"></span>
            <span>ClimateTech • AI • Carbon Markets • Blockchain</span>
          </div>

          {/* Line 1: "Measuring, Predicting" */}
          <div className="hero-typography-line hero-line-intelligence">
            <span>{text1}</span>
            {activeStepLeft === 1 && <span className="type-caret" />}
          </div>

          {/* Line 2: "and Reducing" */}
          <div className="hero-typography-line hero-line-behind">
            <span>{text2}</span>
            {activeStepLeft === 2 && <span className="type-caret" />}
          </div>

          {/* Line 3: "Carbon Footprints with AI" */}
          <div className="hero-typography-line hero-line-modern">
            <span className="text-gradient-emerald">{text3}</span>
            {activeStepLeft === 3 && <span className="type-caret" />}
          </div>

          <div className="hero-mission-note mt-3">
            <p>
              <strong>Our Mission:</strong> Make carbon credits more trustworthy, transparent, and fair to the people who help protect the environment.
            </p>
          </div>

        </div>

        {/* 2. RIGHT CORNER BLOCK: Parallel "CarboSafe" Heading + Google Card + CTA Buttons */}
        <div className="hero-right-mid-block">
          
          {/* Heading: "CarboSafe" in matching luminous heading style */}
          <div className="hero-typography-line hero-line-triohms">
            <span className="brand-logo-text">{textRight}</span>
            {activeStepRight === 1 && <span className="type-caret" />}
          </div>

          {/* Subheading Box: Google Card Design */}
          <div className={`hero-subheading-wrap ${subheadingVisible ? 'visible' : ''}`}>
            <div className="hero-google-card">
              <div className="hero-card-text">
                <div className="hero-card-title">
                  AI-Powered, Blockchain-Ready Carbon Credit Marketplace
                </div>
                <div className="hero-card-subtitle">
                  Connecting farmers generating carbon reductions with industries seeking credible ways to offset their emissions — with 70–90% direct farmer payouts.
                </div>
                <div className="hero-card-tags d-flex flex-wrap gap-2 mt-2">
                  <span className="hero-mini-tag">Satellite Verification</span>
                  <span className="hero-mini-tag">Zero Double-Counting</span>
                  <span className="hero-mini-tag">IT Decarbonization</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons: Downside of CarboSafe card */}
          <div className={`hero-cta-btn-wrap ${buttonVisible ? 'visible' : ''}`}>
            <button 
              type="button" 
              className="hero-btn-pill hero-btn-premium"
              onClick={onOpenModal}
            >
              <span className="btn-shimmer-sweep"></span>
              <span className="btn-text">Book Platform Demo</span>
              <i className="bi bi-arrow-right btn-arrow"></i>
            </button>

            <button 
              type="button" 
              className="hero-btn-pill hero-btn-outline-glow ms-3"
              onClick={onExploreProjects}
            >
              <span className="btn-text">Explore Marketplace</span>
              <i className="bi bi-shop btn-arrow"></i>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
