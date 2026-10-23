import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counts from './components/Counts';
import ProblemsSection from './components/ProblemsSection';
import SolutionWorkflows from './components/SolutionWorkflows';
import Stakeholders from './components/Stakeholders';
import MarketplaceModules from './components/MarketplaceModules';
import TechArchitecture from './components/TechArchitecture';
import ITCarbonFocus from './components/ITCarbonFocus';
import RevenueModel from './components/RevenueModel';
import MvpStatus from './components/MvpStatus';
import RoadmapSection from './components/RoadmapSection';
import CollegePitch from './components/CollegePitch';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Initialize Lenis Buttery Smooth Momentum Scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    let animId;
    function raf(time) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    // 2. Adaptive Scroll Transition Handling
    const handleScroll = () => {
      const intelligenceEl = document.querySelector('.hero-line-intelligence') || document.querySelector('.hero-left-mid-block');
      const whiteSectionEl = document.querySelector('.stats-strip-white') || document.getElementById('counts');

      if (intelligenceEl && whiteSectionEl) {
        const intelRect = intelligenceEl.getBoundingClientRect();
        const whiteRect = whiteSectionEl.getBoundingClientRect();

        setScrolled((prev) => {
          if (prev) {
            return (whiteRect.top <= intelRect.bottom + 45) || (intelRect.bottom <= 85);
          } else {
            return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
          }
        });
      } else {
        const threshold = window.innerHeight * 0.5 + 30;
        setScrolled(window.scrollY >= threshold);
      }
    };

    lenis.on('scroll', handleScroll);
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      window.__lenis = null;
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) {
      if (isModalOpen) {
        window.__lenis.stop();
      } else {
        window.__lenis.start();
      }
    }
  }, [isModalOpen]);

  const handleExploreProjects = () => {
    const el = document.getElementById('marketplace');
    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -74, duration: 1.15 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="carbosafe-app-root">
      {/* 1. Header (Adaptive scroll) */}
      <Navbar 
        scrolled={scrolled} 
        onOpenModal={() => setIsModalOpen(true)} 
      />
      
      <main id="main">
        {/* Dark Hero Stage with 3D WebGL Particle Carbon Globe */}
        <Hero 
          scrolled={scrolled} 
          onOpenModal={() => setIsModalOpen(true)}
          onExploreProjects={handleExploreProjects}
        />

        {/* =========================================================
            CLEAN WHITE GOOGLE CANVAS (BELOW HERO BOUNDARY)
            ========================================================= */}
        
        {/* 1. Mini-Screen Console, Trust Badges, Mission Quote & Metric Strip */}
        <Counts />

        {/* 2. Four Problems We're Solving & Central Statement */}
        <ProblemsSection />

        {/* 3. Five-Step Solution Pipeline & Architectural Blueprint */}
        <SolutionWorkflows onOpenModal={() => setIsModalOpen(true)} />

        {/* 4. Who Will Use CarboSafe? (Farmers, Industries, Verifiers) */}
        <Stakeholders onOpenModal={() => setIsModalOpen(true)} />

        {/* 5. Carbon Credit Projects Catalog (Google-Style Modal Inspection) */}
        <MarketplaceModules onOpenModal={() => setIsModalOpen(true)} />

        {/* 6. Four Technology Layers & AI + Blockchain Synergy */}
        <TechArchitecture />

        {/* 7. IT Industry Specific Carbon Footprint & Decarbonization Guide */}
        <ITCarbonFocus onOpenModal={() => setIsModalOpen(true)} />

        {/* 8. Proposed Revenue Model & Farmer-First Payout Simulator */}
        <RevenueModel onOpenModal={() => setIsModalOpen(true)} />

        {/* 9. Current MVP Status & Critical Issues to Fix */}
        <MvpStatus />

        {/* 10. Development Roadmap, Risks & Success Metrics */}
        <RoadmapSection />

        {/* 11. Academic College Presentation Capstone Spotlight */}
        <CollegePitch onOpenModal={() => setIsModalOpen(true)} />
      </main>

      {/* Global Clean Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Interactive Platform Access & Demo Modal */}
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
