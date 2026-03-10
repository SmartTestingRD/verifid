import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-slider">

      {/* Biometric Particles layer behind everything */}
      <div className="particles-layer">
        {[...Array(24)].map((_, i) => {
          // Biometric & Security SVG Paths
          const securityIcons = [
            // Shield Check
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
            // Fingerprint
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10" /><path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7" /><path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" /><path d="M12 12v4" /><path d="M12 20h.01" /></g>,
            // Lock
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></g>,
            // Eye
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></g>,
            // Face Scan
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8V6a2 2 0 0 1 2-2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2-2v-2" /><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M12 16c0-1.5-1-2-2-2" /></g>,
            // Document Check
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" /></g>
          ];

          return (
            <div key={i} className="particle icon-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${20 + Math.random() * 25}s`,
              opacity: 0.1 + Math.random() * 0.2,
              transform: `scale(${0.6 + Math.random() * 0.8})`
            }}>
              <svg viewBox="0 0 24 24" width="32" height="32" className="bio-icon" style={{
                animationDelay: `${Math.random() * -20}s`
              }}>
                {securityIcons[i % securityIcons.length]}
              </svg>
            </div>
          );
        })}
      </div>

      {/* Dynamic Backgrounds per Slide (All dark now) */}
      <div className={`hero-bg bg-slide-0 ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="tech-grid-bg"></div>
        <div className="glow-orb orb-primary"></div>
      </div>
      <div className={`hero-bg bg-slide-1 ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="tech-grid-bg"></div>
        <div className="glow-orb orb-secondary"></div>
      </div>
      <div className={`hero-bg bg-slide-2 ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="tech-grid-bg"></div>
        <div className="glow-orb orb-tertiary"></div>
      </div>

      <div className="container hero-container">

        {/* SLIDE 0: Platform Hub (Reference) */}
        <div className={`hero-slide ${currentSlide === 0 ? 'active' : ''}`}>
          <div className="hero-grid">

            {/* Left Content */}
            <div className="hero-content">
              <div className="grid-status badge-pulse">
                <span className="dot"></span>
                {t('hero.grid_status')}
              </div>

              <h1 className="hero-title text-light">
                {t('hero.slide1.title1')} <br />
                <span className="text-blue-gradient">{t('hero.slide1.title2')}</span>
              </h1>

              <p className="hero-desc text-light-muted">
                {t('hero.slide1.desc')}
              </p>

              <div className="hero-actions" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <button className="btn btn-primary btn-tech">
                  {t('nav.get_started')} <span className="arrow">→</span>
                </button>
              </div>

              <div className="hero-metrics">
                <div className="metric">
                  <h4>99.99%</h4>
                  <span>{t('hero.metrics.uptime')}</span>
                </div>
                <div className="metric">
                  <h4>2.4ms</h4>
                  <span>{t('hero.metrics.latency')}</span>
                </div>
                <div className="metric">
                  <h4>300M+</h4>
                  <span>{t('hero.metrics.identities')}</span>
                </div>
              </div>
            </div>

            {/* Right Content: Tech Dashboard */}
            <div className="hero-graphic">
              <div className="tech-dashboard glass-panel">

                <div className="dash-header">
                  <div className="node-status">
                    <svg viewBox="0 0 24 24" width="20" height="20" className="wifi-icon" fill="none" stroke="#4ade80" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0114.08 0 M1.42 9a16 16 0 0121.16 0 M8.53 16.11a6 6 0 016.95 0 M12 20h.01"></path>
                    </svg>
                    <div>
                      <span className="label">{t('hero.node_status')}</span>
                      <span className="value text-green">{t('hero.operational')}</span>
                    </div>
                  </div>
                </div>

                <div className="dash-map">
                  {/* Detailed SVG Map with animated nodes */}
                  <svg viewBox="0 0 800 400" className="world-map">
                    {/* Simulated Continents Paths - Improved styling */}
                    <g fill="rgba(60, 130, 246, 0.15)" stroke="rgba(60, 130, 246, 0.4)" strokeWidth="1.5">
                      {/* North America */}
                      <path d="M80,50 Q120,40 180,60 T240,120 T180,180 T100,160 Z" />
                      {/* South America */}
                      <path d="M190,200 Q260,220 240,320 T180,360 T140,260 Z" />
                      {/* Europe */}
                      <path d="M380,60 Q440,40 500,80 T460,140 T400,100 Z" />
                      {/* Africa */}
                      <path d="M380,160 Q480,140 500,240 T420,320 T360,220 Z" />
                      {/* Asia */}
                      <path d="M520,60 Q650,40 740,120 T650,220 T520,160 Z" />
                      {/* Australia */}
                      <path d="M620,280 Q700,260 740,320 T680,380 T600,320 Z" />
                    </g>

                    {/* Connection Lines */}
                    <path d="M160,120 Q350,80 440,100" className="conn-line" />
                    <path d="M440,100 Q550,60 680,160" className="conn-line delay-1" />
                    <path d="M440,100 Q400,200 200,280" className="conn-line delay-2" />
                    <path d="M680,160 Q550,300 660,320" className="conn-line delay-3" />
                    <path d="M440,240 Q400,200 440,100" className="conn-line delay-4" />

                    {/* Nodes */}
                    <circle cx="160" cy="120" r="4" className="node" />
                    <circle cx="160" cy="120" r="16" className="node-pulse" />

                    <circle cx="440" cy="100" r="4" className="node" />
                    <circle cx="440" cy="100" r="16" className="node-pulse delay-1" />

                    <circle cx="680" cy="160" r="4" className="node" />
                    <circle cx="680" cy="160" r="16" className="node-pulse delay-2" />

                    <circle cx="200" cy="280" r="4" className="node" />
                    <circle cx="200" cy="280" r="16" className="node-pulse delay-3" />

                    <circle cx="440" cy="240" r="4" className="node" />
                    <circle cx="440" cy="240" r="16" className="node-pulse delay-4" />

                    <circle cx="660" cy="320" r="4" className="node" />
                    <circle cx="660" cy="320" r="16" className="node-pulse delay-1" />
                  </svg>
                </div>

                <div className="dash-footer">
                  <div className="tx-volume">
                    <span className="label">{t('hero.tx_volume')}</span>
                    <h3 className="value">84,921 tx/s</h3>
                  </div>
                  <div className="live-bars">
                    <div className="bar b1"></div>
                    <div className="bar b2"></div>
                    <div className="bar b3"></div>
                    <div className="bar b4"></div>
                    <div className="bar b5"></div>
                    <div className="bar b1"></div>
                    <div className="bar b3"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* SLIDE 1: Financial ID */}
        <div className={`hero-slide ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="hero-grid">
            <div className="hero-content">
              <div className="grid-status badge-pulse">
                <span className="dot dot-secondary"></span>
                Financial ID Product
              </div>

              <h1 className="hero-title text-light">
                {t('hero.slide2.title1')} <br />
                <span className="text-gold-gradient">{t('hero.slide2.title2')}</span>
              </h1>

              <p className="hero-desc text-light-muted">
                {t('hero.slide2.desc')}
              </p>

              <div className="hero-actions" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Link to="/contact" className="btn btn-primary stitch-btn-primary btn-tech" style={{ textDecoration: 'none' }}>
                  {t('hero.btn.learn_more')} <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-graphic">
              {/* Refactored 3D ID Card */}
              <div className="id-card-wrapper">
                <div className="abstract-bg abstract-gold"></div>
                <div className="id-card">
                  <div className="card-decoration"></div>
                  <div className="card-texture"></div>

                  <div className="card-inner" style={{ paddingTop: '2.5rem' }}>
                    <div className="card-header" style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                      <div className="card-brand" style={{ justifyContent: 'center' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-secondary)" strokeWidth="2" style={{ width: 24, height: 24 }}>
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5H5a2 2 0 0 0 0 4h14v-4"></path>
                        </svg>
                        <span>VerifID Nacional</span>
                      </div>
                      <div className="card-qr" style={{ width: 140, height: 140, margin: '1rem 0' }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuANXIvqyxmlEJICDhjSlcqFCzMagPx0kIeHriFvHA1QA5mKcjmson9LXl7tyCPPkZbQoFCrQuqEKt-GfQlhypM_NGYhvUk4mBr7678bbjBpdw-gECblcbRy8tI1x9PTB2Yc8ri9a6j2Vba_d-eZD0bT0baeRJMPCtaF2ItevJZhY0RhUwQlX5FDfNFHsY5TTyPG4UePEAMbtT2kn8PCQJDi0r9X95zd09yXyK68jnVq5Dpt5P4Skotx-5AQesKJ29fyVS7VEpfznkId" alt="QR" />
                      </div>
                    </div>

                    <div className="card-body" style={{ alignItems: 'center' }}>
                      <div className="card-user" style={{ flexDirection: 'column', textAlign: 'center' }}>
                        <div className="user-avatar" style={{ width: 80, height: 80 }}>
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6AuqLopMl8ZQXZ5cfB37MgCPPuy8o1OxniCcVqPHzvBaf4eujXPylf2ZjHkXpCulQDud_8tf0pXFQ1uqkjiHOl4xxTK3ry37DK-hl9uNiw67B73hfADHEGJnKMPSwfSa8B7_IhDTSWa48XXJVvlxhWKBy8-PCFD_ASzx6KNN7R5XLrDiI9bpEfY2EVL8OAMdZRCgptb4US50oRf6sk4EThgFxdv_zjendMjvDL780ROQzBeZtzD5nZTWiBoL4N9V5foS983R0y0Qj" alt="User" />
                        </div>
                        <div className="user-info" style={{ alignItems: 'center' }}>
                          <div className="info-line-long"></div>
                          <div className="info-line-short"></div>
                        </div>
                      </div>

                      <div className="card-footer" style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                        <div className="card-number" style={{ fontSize: '1rem' }}>xxxx-xxxx-xxxx-8842</div>
                        <div className="card-status status-verified" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* SLIDE 2: RUPF */}
        <div className={`hero-slide ${currentSlide === 2 ? 'active' : ''}`}>
          <div className="hero-grid">
            <div className="hero-content">
              <div className="grid-status badge-pulse">
                <span className="dot dot-tertiary"></span>
                RUPF Product
              </div>

              <h1 className="hero-title text-light">
                {t('hero.slide3.title1')} <br />
                <span className="text-rupf-gradient">{t('hero.slide3.title2')}</span>
              </h1>

              <p className="hero-desc text-light-muted">
                {t('hero.slide3.desc')}
              </p>

              <div className="hero-actions" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Link to="/contact" className="btn btn-primary stitch-btn-primary btn-tech" style={{ textDecoration: 'none' }}>
                  {t('hero.btn.learn_more')} <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-graphic">
              {/* Document/Registry Graphic */}
              <div className="doc-graphic-wrapper">
                <div className="glow-orb orb-rupf"></div>
                <div className="doc-stack">
                  <div className="doc doc-back"></div>
                  <div className="doc doc-middle"></div>
                  <div className="doc doc-front glass-panel">
                    <div className="doc-header">
                      <div className="seal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div className="doc-title">
                        <div className="line l-short"></div>
                        <div className="line l-long"></div>
                      </div>
                    </div>
                    <div className="doc-body">
                      <div className="line l-full"></div>
                      <div className="line l-full"></div>
                      <div className="line l-medium"></div>
                    </div>
                    <div className="doc-footer">
                      <div className="crypto-hash">0x8f2c...e4a1</div>
                      <div className="cert-badge">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Slide Navigation Controls */}
      <div className="carousel-controls">
        <button className={`control-dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}></button>
        <button className={`control-dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}></button>
        <button className={`control-dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}></button>
      </div>


      {/* Styles */}
      <style>{`
        .hero-slider {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
          background-color: #0a0e17; /* Base color */
        }

        /* Animated Particles */
        .particles-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          animation: floatParticle linear infinite;
        }

        .icon-particle {
          color: rgba(96, 165, 250, 0.8); /* Tech Blue */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bio-icon {
          animation: rotateIcon 20s linear infinite;
        }

        @keyframes floatParticle {
          0% { transform: translateY(120vh) translateX(-30px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-20vh) translateX(30px); opacity: 0; }
        }

        @keyframes rotateIcon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Dynamic Backgrounds */
        .hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 0;
          background: #0a0e17; /* All slides use dark tech theme */
        }
        .hero-bg.active {
          opacity: 1;
        }

        /* Slide 1 Grid Pattern */
        .tech-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveGrid 20s linear infinite;
        }

        @keyframes moveGrid {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        /* Universal Glow Orbs */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        .orb-primary {
          width: 50vw; height: 50vw;
          background: var(--brand-primary);
          top: -10%; right: -10%;
        }
        .orb-secondary {
          width: 40vw; height: 40vw;
          background: var(--brand-secondary);
          bottom: 10%; right: 10%;
        }
        .orb-tertiary {
          width: 40vw; height: 40vw;
          background: #4ade80;
          top: 20%; left: -10%;
          opacity: 0.15;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          display: none;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-slide.active {
          display: block;
          opacity: 1;
          transform: translateY(0);
          animation: slideEnter 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideEnter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 4rem;
          }
        }

        /* TEXT CONTENT STYLES - Forced Light because of Dark BG */
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-title.text-light {
          color: #ffffff;
        }
        .hero-desc.text-light-muted {
          color: rgba(255, 255, 255, 0.7);
        }

        .grid-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          background: rgba(15, 73, 189, 0.2);
          border: 1px solid rgba(15, 73, 189, 0.4);
          border-radius: 20px;
          color: rgba(255,255,255,0.8);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          width: fit-content;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80; /* online green */
          box-shadow: 0 0 10px #4ade80;
          animation: pulseDot 2s infinite;
        }
        .dot-secondary { background: var(--brand-secondary); box-shadow: 0 0 10px var(--brand-secondary); }
        .dot-tertiary { background: var(--brand-primary); box-shadow: 0 0 10px var(--brand-primary); }

        @keyframes pulseDot {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        @media (min-width: 1024px) {
          .hero-title { font-size: 3.5rem; }
        }

        .text-blue-gradient {
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .text-gold-gradient {
          background: linear-gradient(135deg, var(--brand-secondary), #ffebab);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .text-rupf-gradient {
          background: linear-gradient(135deg, var(--brand-primary), #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc {
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
          position: relative;
          z-index: 20;
        }

        .btn-tech {
          border-radius: 8px;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .btn-tech .arrow {
          transition: transform 0.2s;
        }
        .btn-tech:hover .arrow {
          transform: translateX(4px);
        }

        .hero-metrics {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .metric h4 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .metric span {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
          letter-spacing: 0.05em;
        }


        /* DASHBOARD GRAPHIC (Slide 1) */
        .hero-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .tech-dashboard {
          width: 100%;
          max-width: 500px;
          background: rgba(10, 14, 23, 0.7);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05);
          transform: rotateY(-5deg) rotateX(5deg);
          transition: transform 0.5s ease;
        }
        
        .tech-dashboard:hover {
          transform: rotateY(0deg) rotateX(0deg);
        }

        .dash-header { display: flex; justify-content: space-between; }
        
        .node-status {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255,255,255,0.05);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        
        .node-status .label {
          display: block;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
        }
        .node-status .value {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .text-green { color: #4ade80; }

        .dash-map {
          width: 100%;
          position: relative;
          opacity: 0.8;
        }
        
        .world-map { width: 100%; height: auto; }
        
        .conn-line {
          fill: none;
          stroke: #60a5fa;
          stroke-width: 2;
          stroke-dasharray: 10 5;
          animation: march 40s linear infinite;
          opacity: 0.6;
        }
        
        @keyframes march {
          to { stroke-dashoffset: -1000; }
        }

        .node { fill: #ffffff; }
        .node-pulse {
          fill: #60a5fa;
          opacity: 0.5;
          animation: nodePulsar 2s ease-out infinite;
          transform-origin: center;
        }

        @keyframes nodePulsar {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1s; }
        .delay-3 { animation-delay: 1.5s; }
        .delay-4 { animation-delay: 2s; }

        .dash-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .tx-volume .label {
          display: block;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.2rem;
        }
        .tx-volume .value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          font-family: monospace;
        }

        .live-bars {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 30px;
        }
        .bar {
          width: 6px;
          background: #3b82f6;
          border-radius: 2px 2px 0 0;
          animation: equalize 1s ease-in-out infinite alternate;
        }
        .b1 { height: 40%; animation-delay: 0.1s; }
        .b2 { height: 80%; animation-delay: 0.4s; }
        .b3 { height: 60%; animation-delay: 0.2s; }
        .b4 { height: 100%; animation-delay: 0.6s; }
        .b5 { height: 30%; animation-delay: 0.3s; }

        @keyframes equalize {
          0% { height: 20%; }
          100% { height: 100%; }
        }


        /* ID CARD (Slide 2 - Now a Phone) */
        .id-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 300px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .id-card {
           position: relative;
           width: 100%;
           aspect-ratio: 9 / 19;
           border-radius: 2.5rem;
           background: linear-gradient(135deg, #1a2333 0%, #0a0e17 100%);
           border: 6px solid #2a3143;
           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(211, 47, 47, 0.4);
           overflow: hidden;
           transform: rotateY(-15deg) rotateX(8deg);
           transition: transform 0.5s ease;
         }

         .id-card::before {
           content: '';
           position: absolute;
           top: 10px;
           left: 50%;
           transform: translateX(-50%);
           width: 80px;
           height: 22px;
           background: #2a3143;
           border-radius: 12px;
           z-index: 20;
         }

         .id-card:hover { transform: rotateY(0deg) rotateX(0deg) scale(1.02); }
         
         .card-decoration {
           position: absolute;
           top: -64px;
           right: -64px;
           width: 256px;
           height: 256px;
           background: rgba(211, 47, 47, 0.2);
           border-radius: 50%;
           filter: blur(40px);
         }

         .abstract-gold {
           position: absolute;
           inset: 0;
           background: radial-gradient(circle at center, rgba(211, 47, 47, 0.2) 0%, transparent 70%);
           filter: blur(40px);
           border-radius: 50%;
         }

         .card-inner {
           position: relative;
           z-index: 10;
           padding: 1.5rem;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           height: 100%;
         }

         .card-header { display: flex; justify-content: space-between; align-items: flex-start; }
         .card-brand {
           display: flex; align-items: center; gap: 0.5rem; color: white;
           font-weight: 700; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.1em;
         }
         
         .card-qr { width: 48px; height: 48px; background: white; border-radius: 8px; padding: 4px; }
         .card-qr img { width: 100%; height: 100%; object-fit: contain; }

         .card-body { display: flex; flex-direction: column; gap: 1rem; }
         .card-user { display: flex; align-items: center; gap: 1rem; }
         .user-avatar { width: 64px; height: 64px; border-radius: 50%; border: 2px solid var(--brand-secondary); overflow: hidden; background: #334155; }
         .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
         .user-info { display: flex; flex-direction: column; gap: 0.5rem; }
         .info-line-long { height: 8px; width: 96px; background: #475569; border-radius: 4px; }
         .info-line-short { height: 8px; width: 64px; background: #334155; border-radius: 4px; }

         .card-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 0.5rem; }
         .card-number { color: var(--brand-secondary); font-family: monospace; font-size: 0.85rem; letter-spacing: 0.1em; }
         .status-verified {
           display: inline-flex; align-items: center; gap: 0.25rem; color: #4ade80;
           font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
           background: rgba(74, 222, 128, 0.1); padding: 0.25rem 0.5rem; border-radius: 4px;
         }


        /* RUPF DOC GRAPHIC (Slide 3) */
        .doc-graphic-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          height: 450px;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .orb-rupf {
          width: 300px; height: 300px;
          max-width: 100vw;
          background: #60a5fa;
          opacity: 0.2;
        }

        .doc-stack {
          position: relative;
          width: 280px;
          max-width: 100%;
          height: 380px;
          transform: rotate(-5deg);
          transition: transform 0.5s ease;
        }

        .doc-stack:hover { transform: rotate(0deg) scale(1.05); }

        .doc {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          background: var(--bg-surface);
          box-shadow: var(--shadow-md);
        }

        .doc-back { transform: translate(20px, 20px) rotate(10deg); background: rgba(30, 41, 59, 0.4); border-color: rgba(255,255,255,0.05); }
        .doc-middle { transform: translate(10px, 10px) rotate(5deg); background: rgba(30, 41, 59, 0.7); border-color: rgba(255,255,255,0.05); }
        .doc-front {
          transform: translate(0, 0);
          z-index: 3;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background: rgba(30, 41, 59, 0.95);
          border-color: rgba(255,255,255,0.1);
        }

        .doc-header {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .seal {
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 2px dashed var(--brand-primary);
          display: flex; align-items: center; justify-content: center;
          background: rgba(15, 73, 189, 0.1);
        }

        .doc-title { display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .line { height: 8px; border-radius: 4px; background: rgba(255,255,255,0.1); }
        .l-short { width: 40%; }
        .l-long { width: 80%; }
        .l-full { width: 100%; }
        .l-medium { width: 60%; }

        .doc-body {
          display: flex; flex-direction: column; gap: 1rem;
          flex: 1;
        }

        .doc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .crypto-hash {
          font-family: monospace;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
        }

        .cert-badge {
          background: var(--brand-primary);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }


        /* NAVIGATION CONTROLS */
        .carousel-controls {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }

        .control-dot {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-dot:hover { background: rgba(255, 255, 255, 0.5); }

        .control-dot.active {
          background: var(--brand-primary);
          width: 60px;
        }

        /* Responsive Fixes for Small Mobile */
        @media (max-width: 400px) {
          .id-card-wrapper { transform: scale(0.85); transform-origin: center; }
          .doc-graphic-wrapper { transform: scale(0.85); transform-origin: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
