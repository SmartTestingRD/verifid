import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PlatformIntro = () => {
  const { t } = useLanguage();
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="platform-intro-section">
      <div className="container">
        <div className="intro-header text-center animate-on-scroll fade-up">
          <div className="inline-badge mb-4">{t('platform_intro.badge')}</div>
          <h2 className="intro-title">{t('platform_intro.title')}</h2>
          <p className="intro-desc">{t('platform_intro.desc')}</p>
        </div>

        <div className="ecosystem-graphic animate-on-scroll fade-in-sluggish">
          {/* Connection Lines Background */}
          <svg className="connections-svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path className="conn-path" d="M 200,150 Q 500,50 800,150" />
            <path className="conn-path" d="M 200,150 Q 500,250 800,150" />
            <path className="conn-line-animated" d="M 200,150 Q 500,50 800,150" />
            <path className="conn-line-animated reverse" d="M 200,150 Q 500,250 800,150" />
            <line className="conn-path" x1="200" y1="150" x2="800" y2="150" />
          </svg>

          {/* Pillars */}
          <div className="pillar regulators-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <h3 className="pillar-title">{t('platform_intro.regulators')}</h3>
            <p className="pillar-desc">{t('platform_intro.regulators_desc')}</p>
          </div>

          <div className="core-node">
            <div className="core-glow"></div>
            <div className="core-center">V</div>
          </div>

          <div className="pillar enterprises-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="2" width="18" height="20" rx="2" ry="2" />
                <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
              </svg>
            </div>
            <h3 className="pillar-title">{t('platform_intro.enterprises')}</h3>
            <p className="pillar-desc">{t('platform_intro.enterprises_desc')}</p>
          </div>

          <div className="pillar users-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="pillar-title">{t('platform_intro.users')}</h3>
            <p className="pillar-desc">{t('platform_intro.users_desc')}</p>
          </div>
        </div>
      </div>

      <style>{`
        .platform-intro-section {
          background-color: var(--bg-primary);
          padding: 6rem 0;
          border-bottom: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow in the background */
        .platform-intro-section::before {
          content: "";
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(15, 73, 189, 0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .intro-header {
          max-width: 800px;
          margin: 0 auto 5rem;
        }

        .inline-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 1rem;
          background: rgba(15, 73, 189, 0.1);
          border: 1px solid rgba(15, 73, 189, 0.3);
          border-radius: 20px;
          color: var(--brand-primary);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .intro-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.2;
          font-family: var(--font-display);
        }

        .intro-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Ecosystem Graphic */
        .ecosystem-graphic {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .conn-path {
          fill: none;
          stroke: var(--border-color);
          stroke-width: 2;
          stroke-dasharray: 4 4;
        }

        .conn-line-animated {
          fill: none;
          stroke: var(--brand-primary);
          stroke-width: 2;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawDash 4s linear infinite;
          opacity: 0.6;
        }

        .conn-line-animated.reverse {
          animation: drawDashReverse 4s linear infinite;
        }

        @keyframes drawDash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawDashReverse {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 1000; }
        }

        .pillar, .core-node {
          position: relative;
          z-index: 1;
        }

        .pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          width: 260px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pillar:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .pillar-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(15, 73, 189, 0.1);
          color: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .pillar-icon svg { width: 30px; height: 30px; }

        .pillar-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .core-node {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(15, 73, 189, 0.5);
          position: relative;
        }

        .core-center {
          font-size: 2rem;
          font-weight: 900;
          color: white;
        }

        .core-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid var(--brand-primary);
          opacity: 0.5;
          animation: pulseGlow 2s infinite ease-out;
        }

        @keyframes pulseGlow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        /* Scroll Animations */
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-up {
          transform: translateY(30px);
        }

        .fade-in-sluggish {
          transform: scale(0.95);
          transition-delay: 0.2s;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0) scale(1);
        }

        @media (max-width: 900px) {
          .ecosystem-graphic {
            flex-direction: column;
            gap: 4rem;
          }
          .connections-svg {
            display: none; /* Hide complex lines on mobile */
          }
          .pillar {
            width: 100%;
            max-width: 320px;
          }
          /* Draw simple vertical line behind for mobile */
          .ecosystem-graphic::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            background: var(--border-color);
            transform: translateX(-50%);
            z-index: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default PlatformIntro;
