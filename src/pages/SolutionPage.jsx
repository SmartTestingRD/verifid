import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { solutionsData } from '../data/solutionsData';
import VisualEngine from '../components/VisualEngine';

const SolutionPage = () => {
    const { slug } = useParams();
    const { t, language } = useLanguage();

    // Check if the route exists in our data dictionary under the selected language (fallback to EN)
    const activeData = solutionsData[language] || solutionsData['en'];
    const data = activeData ? activeData[slug] : null;

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Entrance observer logic
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
    }, [slug]); // Re-run effect when slug changes

    // If slug is invalid, you can redirect to home or a 404
    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="solution-page">

            {/* Dynamic Hero Section */}
            <section className="solution-hero glow-bg">
                <div className="container relative z-10">
                    <div className="solution-hero-layout animate-on-scroll fade-up">
                        <div className="solution-hero-content">
                            <div className="product-badge pulse-badge">Regulatory Solution</div>
                            <h1 className="product-title">
                                {data.title.split(' ').map((word, idx, arr) => {
                                    if (idx === arr.length - 1) {
                                        return <span key={idx} className="highlight"> {word}</span>;
                                    }
                                    return word + ' ';
                                })}
                            </h1>
                            <h2 className="product-subtitle">{data.subtitle}</h2>
                            <p className="product-desc">{data.heroDesc}</p>

                            <div className="hero-actions">
                                <Link to="/contact" className="btn btn-primary glow-btn">Request Integration</Link>
                            </div>
                        </div>

                        {data.visualType && (
                            <div className="solution-hero-visual">
                                <VisualEngine type={data.visualType} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {data.stats && (
                <section className="product-stats">
                    <div className="container">
                        <div className="stats-grid">
                            {data.stats.map((stat, idx) => (
                                <div className="stat-card animate-on-scroll fade-up" key={idx} style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <div className="stat-number">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {data.howItWorks && (
                <section id="how-it-works" className="product-steps-section">
                    <div className="container">
                        <div className="section-header center animate-on-scroll fade-up">
                            <h2>How It Works</h2>
                            <p>An automated workflow configured for maximum compliance and speed.</p>
                        </div>

                        <div className="steps-timeline">
                            {data.howItWorks.map((item, index) => (
                                <div className="step-row animate-on-scroll fade-up" key={index}>
                                    <div className="step-number-container">
                                        <div className="step-circle">{item.step}</div>
                                        {index < data.howItWorks.length - 1 && <div className="step-line"></div>}
                                    </div>
                                    <div className="step-content glass-card dark-glass">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Dynamic Features Grid */}
            <section className="solution-features">
                <div className="container">
                    <div className="section-header animate-on-scroll fade-up">
                        <h2>Key Capabilities</h2>
                        <p>Specialized enterprise tooling configured for your operational needs.</p>
                    </div>

                    <div className="capabilities-grid">
                        {data.features.map((feat, i) => (
                            <div className="capability-card glass-card dark-glass animate-on-scroll fade-up" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="cap-icon">{feat.icon}</div>
                                <h3>{feat.title}</h3>
                                <p>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .solution-page {
                    background-color: #0c111c;
                    min-height: 100vh;
                    overflow: visible; /* Prevent cutting off partner section */
                    padding-top: 80px; 
                    color: #e2e8f0;
                }

                .solution-hero {
                    position: relative;
                    padding: 4rem 0 6rem;
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                    background-color: #0c111c;
                }
                
                .glow-bg {
                    background-image: radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
                                      radial-gradient(circle at 0% 100%, rgba(15, 73, 189, 0.2) 0%, transparent 50%);
                }

                .solution-hero-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                @media (min-width: 1024px) {
                    .solution-hero-layout {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .solution-hero-content {
                    max-width: 600px;
                }

                .product-badge { display: inline-block; padding: 0.4rem 1rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 2rem; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2rem; }
                .pulse-badge { animation: pulse-glow 2s infinite; }
                
                @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(56,189,248,0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(56,189,248,0); }
                    100% { box-shadow: 0 0 0 0 rgba(56,189,248,0); }
                }

                .product-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                }
                .product-title .highlight { color: #38bdf8; }
                
                .product-subtitle { font-size: 1.5rem; color: #94a3b8; font-weight: 400; margin-bottom: 2rem; }
                .product-desc { font-size: 1.15rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 3rem; font-weight: 500; }

                /* Stats CSS */
                .product-stats { position: relative; z-index: 10; padding: 2rem 0 4rem; margin-top: -2rem; }
                .stats-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem; }
                @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
                .stat-card {
                    background: rgba(16, 22, 34, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 1rem; padding: 2rem; text-align: center; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
                    border-top: 2px solid #38bdf8; transition: transform 0.3s;
                }
                .stat-card:hover { transform: translateY(-5px); }
                .stat-number { font-size: 3rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem; line-height: 1; font-family: var(--font-display); }
                .stat-label { color: #94a3b8; font-size: 0.9rem; font-weight: 600; }

                /* Steps CSS */
                .product-steps-section { padding: 4rem 0 6rem; position: relative; }
                .steps-timeline { max-width: 800px; margin: 4rem auto 0; display: flex; flex-direction: column; gap: 2rem; }
                .step-row { display: flex; gap: 2rem; }
                .step-number-container { display: flex; flex-direction: column; align-items: center; }
                .step-circle {
                    width: 50px; height: 50px; border-radius: 50%; background: var(--brand-primary); color: white;
                    display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800;
                    box-shadow: 0 0 20px rgba(15, 73, 189, 0.5); z-index: 2;
                }
                .step-line { width: 2px; background: linear-gradient(180deg, var(--brand-primary), rgba(15, 73, 189, 0.1)); min-height: 50px; flex-grow: 1; margin-top: 10px; margin-bottom: -32px; }
                .step-content { flex-grow: 1; padding: 2rem; border-radius: 1rem; }
                .step-content h3 { color: #ffffff; font-size: 1.4rem; margin-bottom: 1rem; }
                
                .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
                .dark-glass { border: 1px solid rgba(255,255,255,0.08); background: rgba(16, 22, 34, 0.5); }
                
                .hero-actions { display: flex; gap: 1rem; justify-content: center; }
                .glow-btn { box-shadow: 0 0 20px rgba(15,73,189,0.6); }
                .glow-btn:hover { box-shadow: 0 0 30px rgba(56,189,248,0.8); }

                .solution-features {
                    padding: 6rem 0;
                    background: rgba(0,0,0,0.2);
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .section-header h2 { font-size: 2.5rem; color: #ffffff; margin-bottom: 1rem; }
                .section-header p { color: #94a3b8; font-size: 1.1rem; }

                .capabilities-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                @media (min-width: 768px) {
                    .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
                }

                .capability-card {
                    padding: 2.5rem 2rem;
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                }
                .capability-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(56, 189, 248, 0.3);
                    transform: translateY(-5px);
                }

                .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
                .dark-glass { border: 1px solid rgba(255,255,255,0.08); background: rgba(16, 22, 34, 0.5); }

                .cap-icon { font-size: 2.5rem; margin-bottom: 1.5rem; }
                .capability-card h3 { font-size: 1.25rem; color: #ffffff; margin-bottom: 1rem; }
                .capability-card p { color: #94a3b8; line-height: 1.6; font-size: 0.95rem; }

                .partner-injection {
                    padding-bottom: 4rem;
                }

                .animate-on-scroll { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
                .fade-up { transform: translateY(30px); }
                .animate-on-scroll.visible { opacity: 1; transform: translate(0); }
            `}</style>
        </div>
    );
};

export default SolutionPage;
