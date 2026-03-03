import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const SolutionsCarousel = () => {
    const { t } = useLanguage();

    const solutions = [
        {
            id: 'kyc',
            title: t('nav.sol.compliance.kyc'),
            category: 'Compliance',
            icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
            id: 'aml',
            title: t('nav.sol.compliance.aml_monitoring'),
            category: 'Compliance',
            icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
            id: 'fraud',
            title: t('nav.sol.fraud.prevention'),
            category: 'Fraud',
            icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        },
        {
            id: 'digital',
            title: t('nav.sol.fraud.digital'),
            category: 'Identity',
            icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        },
        {
            id: 'kyb',
            title: t('nav.sol.compliance.kyb'),
            category: 'Compliance',
            icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        },
        {
            id: 'account',
            title: t('nav.sol.fraud.account'),
            category: 'Fraud',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        }
    ];

    return (
        <section className="solutions-carousel-section">
            <div className="container">
                <div className="section-header text-center mb-12 animate-on-scroll fade-up">
                    <div className="inline-badge mb-4">
                        {t('solutions.badge')}
                    </div>
                    <h2 className="section-title text-dark">
                        {t('solutions.title')}
                    </h2>
                    <p className="section-subtitle mx-auto">
                        {t('solutions.subtitle')}
                    </p>
                </div>
            </div>

            {/* Edge-to-Edge Carousel Wrapper */}
            <div className="carousel-wrapper animate-on-scroll fade-up delay-200">
                <div className="carousel-track">
                    {/* Double the array to create a seamless infinite CSS marquee */}
                    {[...solutions, ...solutions].map((sol, i) => (
                        <Link to={`/solution/${sol.id}`} key={`${sol.id}-${i}`} className="solution-card" style={{ backgroundColor: '#ffffff', color: '#0c111c', textDecoration: 'none' }}>
                            <div className="card-top">
                                <span className={`cat-label ${sol.category.toLowerCase()}`}>{sol.category}</span>
                            </div>
                            <div className="icon-wrap" style={{ color: '#0c111c' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={sol.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="sol-title" style={{ color: '#0c111c' }}>{sol.title}</h3>
                            <div className="sol-arrow-btn" aria-label="Learn more">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="arr-icon">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                .solutions-carousel-section {
                    background-color: #ffffff; /* Pure White Light bg guaranteed */
                    padding: 6rem 0;
                    overflow: hidden; /* Prevent horizontal scroll on body */
                }

                /* Override any dark styles to ensure legibility */
                .text-dark { color: #0c111c !important; }
                .section-subtitle { color: #475569 !important; }
                
                .mx-auto { margin-left: auto; margin-right: auto; }
                .mb-12 { margin-bottom: 3rem; }

                .inline-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.4rem 1rem;
                    background: rgba(15, 73, 189, 0.08); /* Brand primary light */
                    border: 1px solid rgba(15, 73, 189, 0.2);
                    border-radius: 20px;
                    color: #0f49bd;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                /* Edge-to-Edge Carousel */
                .carousel-wrapper {
                    width: 100%;
                    position: relative;
                    padding: 2rem 0;
                    overflow: hidden; /* Hide overflow for marquee */
                }

                .carousel-track {
                    display: flex;
                    gap: 1.5rem;
                    width: max-content;
                    padding-left: 1.5rem; /* Small initial gap */
                    /* Infinite CSS Scroll */
                    animation: scroll-carousel 25s linear infinite;
                }

                /* Pause the animation on hover so users can click/read */
                .carousel-track:hover {
                    animation-play-state: paused;
                }

                @keyframes scroll-carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 0.75rem)); }
                }

                .solution-card {
                    flex: 0 0 300px;
                    height: 280px;
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                }

                .solution-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    border-color: rgba(15, 73, 189, 0.2);
                }

                .card-top {
                    margin-bottom: auto;
                }

                .cat-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    padding: 0.3rem 0.8rem;
                    border-radius: 4px;
                }

                .cat-label.compliance { background: rgba(15, 73, 189, 0.1); color: #0f49bd; }
                .cat-label.fraud { background: rgba(211, 47, 47, 0.1); color: #ef4444; }
                .cat-label.identity { background: rgba(16, 185, 129, 0.1); color: #10b981; }

                .icon-wrap {
                    width: 48px;
                    height: 48px;
                    background: #f1f5f9;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    /* Fixed Dark Text Color */
                    color: #0c111c;
                    margin-top: 1.5rem;
                    margin-bottom: 1rem;
                    transition: all 0.3s ease;
                }

                .solution-card:hover .icon-wrap {
                    background: #0f49bd;
                    color: white;
                }

                .sol-title {
                    font-size: 1.25rem;
                    /* Fixed Dark Text Color */
                    color: #0c111c;
                    font-weight: 700;
                    line-height: 1.3;
                    margin-bottom: 1.5rem;
                }

                .sol-arrow-btn {
                    position: absolute;
                    bottom: 2rem;
                    right: 2rem;
                    background: none;
                    border: none;
                    color: #64748b;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #f1f5f9;
                    transition: all 0.3s ease;
                }

                .solution-card:hover .sol-arrow-btn {
                    background: #0f49bd;
                    color: white;
                    transform: translateX(4px);
                }

                .arr-icon { transition: transform 0.3s ease; }

                .animate-on-scroll {
                    opacity: 0;
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .fade-up { transform: translateY(30px); }
                .delay-200 { transition-delay: 200ms; }
                .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translate(0);
                }

                /* --- Aggressive Dark Mode Overrides for Light Section --- */
                body.dark .solutions-carousel-section .text-dark,
                body.dark .solutions-carousel-section .sol-title,
                body.dark .solutions-carousel-section .icon-wrap {
                    color: #0c111c !important;
                }
                
                body.dark .solutions-carousel-section .section-subtitle,
                body.dark .solutions-carousel-section .sol-arrow-btn {
                    color: #475569 !important;
                }
                
                body.dark .solutions-carousel-section .solution-card:hover .icon-wrap,
                body.dark .solutions-carousel-section .solution-card:hover .sol-arrow-btn {
                    color: #ffffff !important;
                }
                
                body.dark .solutions-carousel-section .solution-card {
                    background-color: #ffffff !important;
                    border-color: rgba(0,0,0,0.06) !important;
                }
            `}</style>
        </section>
    );
};

export default SolutionsCarousel;
