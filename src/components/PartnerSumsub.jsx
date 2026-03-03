import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PartnerSumsub = () => {
    const { t } = useLanguage();

    // Custom Checkmark SVG for the tech cards
    const GlowingCheck = () => (
        <div className="check-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    return (
        <section className="sumsub-section relative overflow-hidden">
            <div className="container relative z-10">
                <div className="sumsub-grid">

                    {/* Left Column: Content */}
                    <div className="sumsub-content animate-on-scroll fade-up delay-100">
                        <div className="inline-badge mb-6">
                            {t('partnership.badge')}
                        </div>
                        <h2 className="section-title text-white mb-6">
                            {t('partnership.title')}
                        </h2>

                        <p className="text-xl text-gray mb-4 font-medium">
                            {t('partnership.desc_1')}
                        </p>

                        <p className="text-gray mb-8">
                            {t('partnership.desc_2')}
                        </p>

                        <div className="features-grid">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="feature-card">
                                    <GlowingCheck />
                                    <span className="feature-text">{t(`partnership.check_${num}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual 3D Logo */}
                    <div className="sumsub-visual animate-on-scroll fade-up delay-300">
                        <div className="logo-ambient-glow"></div>

                        <div className="css-sumsub-logo">
                            {/* Top Hat Layer (Cyan) */}
                            <div className="s-layer layer-cyan">
                                <div className="s-block s-top-1"></div>
                                <div className="s-block s-top-2"></div>
                                <div className="s-block s-top-3"></div>
                            </div>

                            {/* Middle Face Layer (Navy) */}
                            <div className="s-layer layer-navy">
                                <div className="s-block s-eye-left"></div>
                                <div className="s-block s-bridge"></div>
                                <div className="s-block s-eye-right"></div>
                                <div className="s-block s-cheek-l"></div>
                                <div className="s-block s-cheek-r"></div>
                            </div>

                            {/* Bottom Layer (Navy) */}
                            <div className="s-layer layer-navy-bottom">
                                <div className="s-block s-foot-l"></div>
                                <div className="s-block s-foot-r"></div>
                                <div className="s-block s-pixel-l"></div>
                                <div className="s-block s-pixel-r"></div>
                            </div>

                            {/* Side Ears Layer (Navy) */}
                            <div className="s-layer layer-ears">
                                <div className="s-block s-ear-l"></div>
                                <div className="s-block s-ear-l2"></div>
                                <div className="s-block s-ear-r"></div>
                                <div className="s-block s-ear-r2"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        .sumsub-section {
          background-color: #0c111c; /* Deep dark navy to match Products */
          padding: 8rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05); /* Same as other dark sections */
        }

        .sumsub-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .sumsub-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 6rem;
          }
        }

        .text-xl { font-size: 1.25rem; line-height: 1.6; }
        .text-white { color: #ffffff !important; }
        .text-gray { color: rgba(255,255,255,0.7) !important; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }

        .inline-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Tech Cards Grid */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .check-icon-wrapper {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
        }

        .feature-text {
          font-size: 0.95rem;
          color: #e2e8f0;
          line-height: 1.4;
          font-weight: 500;
        }

        /* ----------------------------------
           Animated Sumsub CSS Logo 
           ---------------------------------- */
        .sumsub-visual {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
        }

        .logo-ambient-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300px;
            height: 300px;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(29,211,176,0.15) 0%, rgba(13,44,115,0.2) 40%, transparent 70%);
            filter: blur(40px);
            z-index: 0;
        }

        .css-sumsub-logo {
            position: relative;
            width: 280px;
            height: 220px;
            z-index: 2;
            transform: scale(0.9) perspective(1000px);
            transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .sumsub-section:hover .css-sumsub-logo {
            transform: scale(1.0) perspective(1000px) rotateY(10deg);
        }

        .s-layer {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .s-block {
            position: absolute;
            border-radius: 4px; /* Slight rounding for a modern blocky look */
            box-shadow: inset 0 0 1px rgba(255,255,255,0.2);
            transition: all 0.5s ease;
        }

        /* Interactive block separation on hover */
        .sumsub-section:hover .s-block {
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transform: translateZ(20px);
        }

        /* Colors */
        .layer-cyan .s-block { background-color: #1DD3B0; } /* Sumsub Cyan */
        .layer-navy .s-block, .layer-navy-bottom .s-block, .layer-ears .s-block { background-color: #0D2C73; } /* Sumsub Navy */

        /* Dimension Units (Approx 20px grid base) */
        
        /* Cyan Hat */
        .s-top-1 { width: 40px; height: 20px; top: 0; left: 120px; }
        .s-top-2 { width: 80px; height: 20px; top: 20px; left: 100px; }
        .s-top-3 { width: 120px; height: 20px; top: 40px; left: 80px; }

        /* Navy Glasses/Face */
        .s-eye-left {  width: 50px; height: 35px; top: 80px; left: 55px; }
        .s-bridge {    width: 60px; height: 50px; top: 80px; left: 110px; }
        .s-eye-right { width: 50px; height: 35px; top: 80px; left: 175px; }
        .s-cheek-l {   width: 25px; height: 25px; top: 115px; left: 80px; }
        .s-cheek-r {   width: 25px; height: 25px; top: 115px; left: 175px; }

        /* Navy Bottom/Legs */
        .s-foot-l { width: 35px; height: 40px; top: 130px; left: 100px; }
        .s-foot-r { width: 35px; height: 40px; top: 130px; left: 145px; }
        
        .s-pixel-l { width: 25px; height: 25px; top: 155px; left: 70px; }
        .s-pixel-r { width: 25px; height: 25px; top: 155px; left: 185px; }

        /* Navy Ears */
        .s-ear-l { width: 30px; height: 25px; top: 55px; left: 20px; }
        .s-ear-l2 { width: 15px; height: 20px; top: 80px; left: 20px; }
        .s-ear-r { width: 30px; height: 25px; top: 55px; left: 230px; }
        .s-ear-r2 { width: 15px; height: 20px; top: 80px; left: 245px; }


        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-up { transform: translateY(30px); }
        .delay-100 { transition-delay: 100ms; }
        .delay-300 { transition-delay: 300ms; }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>
        </section>
    );
};

export default PartnerSumsub;
