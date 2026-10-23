import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenModal, scrolled: externalScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const intelligenceEl = document.querySelector('.hero-line-intelligence') || document.querySelector('.hero-left-mid-block');
      const whiteSectionEl = document.querySelector('.stats-strip-white') || document.getElementById('counts');

      if (intelligenceEl && whiteSectionEl) {
        const intelRect = intelligenceEl.getBoundingClientRect();
        const whiteRect = whiteSectionEl.getBoundingClientRect();
        setInternalScrolled((prev) => {
          if (prev) {
            return (whiteRect.top <= intelRect.bottom + 45) || (intelRect.bottom <= 85);
          } else {
            return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
          }
        });
      } else {
        setInternalScrolled(window.scrollY >= (window.innerHeight * 0.5 + 30));
      }

      const sections = [
        'hero', 
        'counts', 
        'problems', 
        'solution', 
        'stakeholders', 
        'marketplace', 
        'tech', 
        'it-carbon', 
        'revenue', 
        'roadmap'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -74, duration: 1.15 });
      } else {
        const topOffset = 74;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* CarboSafe Brand Logo */}
        <div className="logo">
          <a 
            href="#hero" 
            className="carbosafe-brand-link d-flex align-items-center gap-2"
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          >
            <div className="brand-leaf-icon" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" fill="url(#brandGrad)" />
                <path d="M16 6C11 10 9 16 11 22C13 18 17 15 22 14C23 19 20 24 15 26C21 26 26 21 26 15C26 9 21 6 16 6Z" fill="#ffffff" />
                <path d="M12 21C14 17 18 15 23 14" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="brandGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981" />
                    <stop offset="0.6" stopColor="#059669" />
                    <stop offset="1" stopColor="#047857" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="brand-text-lockup">
              <span className="brand-name-main">Carbo<span className="brand-name-accent">Safe</span></span>
              <span className="brand-badge-mini">AI & Blockchain</span>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <nav id="navbar" className={`navbar ${mobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <a 
                href="#hero" 
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#problems" 
                className={activeSection === 'problems' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('problems'); }}
              >
                Problems
              </a>
            </li>
            <li>
              <a 
                href="#solution" 
                className={activeSection === 'solution' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('solution'); }}
              >
                Solution
              </a>
            </li>
            <li>
              <a 
                href="#stakeholders" 
                className={activeSection === 'stakeholders' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('stakeholders'); }}
              >
                Who Uses It
              </a>
            </li>
            <li>
              <a 
                href="#marketplace" 
                className={activeSection === 'marketplace' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('marketplace'); }}
              >
                <span>Projects</span>
                <i className="bi bi-chevron-down nav-chevron"></i>
              </a>
            </li>
            <li>
              <a 
                href="#tech" 
                className={activeSection === 'tech' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('tech'); }}
              >
                Tech & AI
              </a>
            </li>
            <li>
              <a 
                href="#it-carbon" 
                className={activeSection === 'it-carbon' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('it-carbon'); }}
              >
                IT Industry
              </a>
            </li>
            <li>
              <a 
                href="#revenue" 
                className={activeSection === 'revenue' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('revenue'); }}
              >
                Revenue
              </a>
            </li>
            <li>
              <a 
                href="#roadmap" 
                className={activeSection === 'roadmap' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('roadmap'); }}
              >
                Roadmap
              </a>
            </li>
          </ul>

          <i 
            className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ></i>
        </nav>

        {/* Right Actions */}
        <div className="google-nav-actions d-flex align-items-center gap-3">
          <div className="google-nav-icons d-none d-lg-flex align-items-center gap-2">
            <a 
              href="mailto:contact@carbosafe.org" 
              className="google-icon-link" 
              title="Email Us"
            >
              <i className="bi bi-envelope"></i>
            </a>
            <a 
              href="#it-carbon" 
              onClick={(e) => { e.preventDefault(); scrollTo('it-carbon'); }}
              className="google-icon-link" 
              title="IT Carbon Calculator"
            >
              <i className="bi bi-calculator"></i>
            </a>
          </div>

          <button 
            type="button"
            className="btn-google-pill btn-carbosafe-green"
            onClick={onOpenModal}
          >
            <span>Book Demo</span>
          </button>
        </div>

      </div>
    </header>
  );
}
