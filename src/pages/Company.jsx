import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Company = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="company-page">

            {/* HERO SECTION */}
            <section className="company-hero glow-bg">
                <div className="container relative z-10">
                    <div className="company-hero-content animate-on-scroll fade-up">
                        <div className="product-badge pulse-badge">{t('company.hero.badge')}</div>
                        <h1 className="product-title">
                            {t('company.hero.title')}
                        </h1>
                        <p className="product-desc">{t('company.hero.desc')}</p>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="company-mission">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card glass-card dark-glass animate-on-scroll fade-up">
                            <div className="card-icon">🎯</div>
                            <h2>{t('company.mission.title')}</h2>
                            <p>{t('company.mission.desc')}</p>
                        </div>
                        <div className="mission-card glass-card dark-glass animate-on-scroll fade-up" style={{ transitionDelay: '150ms' }}>
                            <div className="card-icon">👁️</div>
                            <h2>{t('company.vision.title')}</h2>
                            <p>{t('company.vision.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="company-values">
                <div className="container">
                    <div className="section-header center animate-on-scroll fade-up">
                        <h2>{t('company.values.title')}</h2>
                        <p>{t('company.values.subtitle')}</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card animate-on-scroll fade-up">
                            <div className="value-icon">🔒</div>
                            <h3>{t('company.values.val1.title')}</h3>
                            <p>{t('company.values.val1.desc')}</p>
                        </div>
                        <div className="value-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
                            <div className="value-icon">⚡</div>
                            <h3>{t('company.values.val2.title')}</h3>
                            <p>{t('company.values.val2.desc')}</p>
                        </div>
                        <div className="value-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
                            <div className="value-icon">🌍</div>
                            <h3>{t('company.values.val3.title')}</h3>
                            <p>{t('company.values.val3.desc')}</p>
                        </div>
                        <div className="value-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
                            <div className="value-icon">🤝</div>
                            <h3>{t('company.values.val4.title')}</h3>
                            <p>{t('company.values.val4.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL PRESENCE */}
            <section className="company-presence glow-bg">
                <div className="container">
                    <div className="presence-layout">
                        <div className="presence-content animate-on-scroll fade-up">
                            <h2>{t('company.presence.title')}</h2>
                            <p>{t('company.presence.desc')}</p>
                            <div className="stats-row">
                                <div className="p-stat">
                                    <span className="p-num">220+</span>
                                    <span className="p-label">{t('company.presence.stat1')}</span>
                                </div>
                                <div className="p-stat">
                                    <span className="p-num">14K+</span>
                                    <span className="p-label">{t('company.presence.stat2')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="presence-visual animate-on-scroll fade-up">
                            <div className="earth-sphere"></div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .company-page {
                    background-color: #0c111c;
                    min-height: 100vh;
                    padding-top: 80px; 
                    color: #e2e8f0;
                    overflow: hidden;
                }

                .glow-bg {
                    background-image: radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
                                      radial-gradient(circle at 0% 100%, rgba(15, 73, 189, 0.2) 0%, transparent 50%);
                }
                
                .company-hero {
                    position: relative;
                    padding: 8rem 0;
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                    text-align: center;
                }

                .company-hero-content {
                    max-width: 800px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .product-badge { display: inline-block; padding: 0.4rem 1rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 2rem; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2rem; }
                .pulse-badge { animation: pulse-glow 2s infinite; }
                @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(56,189,248,0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(56,189,248,0); }
                    100% { box-shadow: 0 0 0 0 rgba(56,189,248,0); }
                }

                .product-title { font-size: 4rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem; line-height: 1.1; letter-spacing: -0.03em; }
                .product-desc { font-size: 1.2rem; color: #cbd5e1; line-height: 1.6; }

                /* Mission Grid */
                .company-mission { padding: 0 0 6rem; position: relative; z-index: 10; margin-top: -4rem; }
                .mission-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
                @media (min-width: 768px) { .mission-grid { grid-template-columns: 1fr 1fr; } }
                
                .mission-card { padding: 3rem; border-radius: 1.5rem; transition: transform 0.3s; border-top: 2px solid #38bdf8; }
                .mission-card:hover { transform: translateY(-5px); }
                .card-icon { font-size: 3rem; margin-bottom: 1.5rem; }
                .mission-card h2 { font-size: 2rem; color: #fff; margin-bottom: 1rem; }
                .mission-card p { color: #94a3b8; font-size: 1.1rem; line-height: 1.7; }

                /* Values Grid */
                .company-values { padding: 6rem 0; background: rgba(0,0,0,0.3); }
                .section-header { text-align: center; margin-bottom: 4rem; max-width: 600px; margin-left: auto; margin-right: auto; }
                .section-header h2 { font-size: 2.5rem; color: #fff; margin-bottom: 1rem; }
                .section-header p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; }

                .values-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
                @media (min-width: 768px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .values-grid { grid-template-columns: repeat(4, 1fr); } }

                .value-card { padding: 2rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 1rem; text-align: center; }
                .value-card:hover { border-color: rgba(56, 189, 248, 0.3); background: rgba(56, 189, 248, 0.05); }
                .value-icon { font-size: 2.5rem; margin-bottom: 1rem; }
                .value-card h3 { color: #fff; margin-bottom: 0.5rem; font-size: 1.2rem; }
                .value-card p { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; }

                /* Presence */
                .company-presence { padding: 6rem 0; overflow: hidden; }
                .presence-layout { display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
                @media (min-width: 992px) { .presence-layout { grid-template-columns: 1fr 1fr; } }
                
                .presence-content h2 { font-size: 2.5rem; color: #fff; margin-bottom: 1.5rem; }
                .presence-content p { color: #94a3b8; font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; }
                
                .stats-row { display: flex; gap: 3rem; }
                .p-stat { display: flex; flex-direction: column; }
                .p-num { font-size: 3rem; font-weight: 800; color: #38bdf8; line-height: 1; font-family: var(--font-display); margin-bottom: 0.5rem; }
                .p-label { color: #94a3b8; font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }

                .presence-visual { display: flex; justify-content: center; }
                .earth-sphere {
                    width: 100%; max-width: 300px; 
                    aspect-ratio: 1 / 1; height: auto;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.4), rgba(15, 73, 189, 0.8), #0c111c);
                    box-shadow: 0 0 40px rgba(56, 189, 248, 0.2), inset -20px -20px 40px rgba(0,0,0,0.5);
                    position: relative;
                    overflow: hidden;
                }
                .earth-sphere::before {
                    content: ''; position: absolute; top: 0; left: 0; width: 200%; height: 100%;
                    background-image: 
                        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 2px, transparent 2px),
                        radial-gradient(circle at 20% 80%, rgba(56,189,248,0.3) 3px, transparent 3px),
                        radial-gradient(circle at 80% 20%, rgba(56,189,248,0.2) 2px, transparent 2px);
                    background-size: 40px 40px, 60px 60px, 30px 30px;
                    animation: rotate-earth 20s linear infinite;
                }
                @keyframes rotate-earth { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

                .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
                .dark-glass { border: 1px solid rgba(255,255,255,0.08); background: rgba(16, 22, 34, 0.5); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5); }

                .animate-on-scroll { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
                .fade-up { transform: translateY(30px); }
                .animate-on-scroll.visible { opacity: 1; transform: translate(0); }
            `}</style>
        </div>
    );
};

export default Company;
