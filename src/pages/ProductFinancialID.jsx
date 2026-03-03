import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ProductFinancialID = () => {
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
        <div className="product-page fid-page">

            {/* Hero Section */}
            <section className="product-hero glow-bg">
                <div className="hero-grid-overlay"></div>
                <div className="container relative z-10">
                    <div className="fid-hero-layout animate-on-scroll fade-up">
                        <div className="fid-hero-content">
                            <div className="product-badge pulse-badge">Identity Protocol</div>
                            <h1 className="product-title">
                                Financial <span className="highlight">ID</span>
                            </h1>
                            <h2 className="product-subtitle">
                                {t('products.fid.subtitle')}
                            </h2>
                            <p className="product-desc">
                                {t('products.fid.desc')}
                            </p>
                            <p className="product-desc-secondary">
                                Financial ID is a revolutionary credentialing standard that allows individuals and businesses to securely prove their identity, financial standing, and regulatory compliance across multiple institutions—without repetitive KYC friction.
                            </p>
                            <div className="hero-actions">
                                <Link to="/contact" className="btn btn-primary glow-btn">Initiate Integration</Link>
                                <a href="#features" className="btn btn-outline dark-outline">Explore Capabilities</a>
                            </div>
                        </div>

                        {/* Interactive abstract visual */}
                        <div className="fid-hero-visual relative">
                            <div className="id-card-abstraction">
                                <div className="id-header">
                                    <div className="id-avatar"></div>
                                    <div className="id-title-lines">
                                        <div className="line l1"></div>
                                        <div className="line l2"></div>
                                    </div>
                                </div>
                                <div className="id-body-lines">
                                    <div className="line l3"></div>
                                    <div className="line l4"></div>
                                </div>
                                <div className="id-verified-stamp">VERIFIED</div>
                            </div>

                            {/* Orbital scans */}
                            <div className="scan-orbit o1"></div>
                            <div className="scan-orbit o2"></div>
                            <div className="scan-orbit o3"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="fid-features-section">
                <div className="container">
                    <div className="section-header center animate-on-scroll fade-up">
                        <h2>Identity Infrastructure</h2>
                        <p>A unified credential for seamless onboarding and risk management.</p>
                    </div>

                    <div className="fid-features-grid">
                        {[
                            { title: "Reusable KYC/KYB", desc: "Verify once, onboard anywhere. Users carry their verified regulatory status as a cryptographic token to instantly access partnered ecosystems." },
                            { title: "Biometric Consensus", desc: "Powered by advanced liveness detection and active face matching, preventing spoofing, synthetics, and deepfakes at the point of entry." },
                            { title: "Zero-Knowledge Proofs", desc: "Prove age, jurisdiction, or solvency without exposing the underlying PII. Complete privacy by design aligned with GDPR." },
                            { title: "Real-Time Revocation", desc: "If a user's risk profile changes or fraud is detected, their Financial ID is globally invalidated across the network instantly." }
                        ].map((feat, i) => (
                            <div className="fid-feature-card glass-card dark-glass animate-on-scroll fade-up" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="feature-glow-orb"></div>
                                <h3>{feat.title}</h3>
                                <p>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem Diagram */}
            <section className="fid-ecosystem-section">
                <div className="container">
                    <div className="ecosystem-container glass-card dark-glass animate-on-scroll fade-up">
                        <div className="ecosystem-layout">
                            <div className="eco-text">
                                <h2>The Financial Identity Network</h2>
                                <p>Financial ID bridges the gap between siloed fragmented databases. By utilizing verifiable credentials, institutions can slash their onboarding latency by 90% while maintaining absolute certainty of identity.</p>

                                <ul className="eco-list">
                                    <li>🏦 <strong>Banks & Credit Unions:</strong> Frictionless account opening.</li>
                                    <li>💱 <strong>Crypto & Exchanges:</strong> Instant KYC & Travel Rule compliance.</li>
                                    <li>🛒 <strong>Marketplaces:</strong> Trusted vendor and buyer verification.</li>
                                </ul>
                            </div>

                            <div className="eco-visual">
                                {/* Network graph abstraction */}
                                <div className="network-node central">ID</div>
                                <div className="network-node peripheral p1">Bank</div>
                                <div className="network-node peripheral p2">Gov</div>
                                <div className="network-node peripheral p3">Defi</div>
                                <div className="network-node peripheral p4">Store</div>

                                {/* Connection lines handled via CSS pseudo elements */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .fid-page {
                    background-color: #0c111c; /* Forced dark background */
                    min-height: 100vh;
                    overflow: hidden;
                    padding-top: 80px; 
                    color: #e2e8f0;
                }

                .glow-bg {
                    position: relative;
                    background-color: #0c111c;
                    background-image: radial-gradient(circle at 50% 100%, rgba(15, 73, 189, 0.2) 0%, transparent 70%);
                }

                .hero-grid-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-size: 50px 50px;
                    background-image: 
                      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
                    z-index: 1;
                    pointer-events: none;
                }

                .fid-hero-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                    padding: 6rem 0;
                    align-items: center;
                }

                @media (min-width: 1024px) {
                    .fid-hero-layout {
                        grid-template-columns: 1.2fr 0.8fr;
                    }
                }

                .fid-hero-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 400px;
                }

                /* ID Card Abstraction */
                .id-card-abstraction {
                    width: 300px;
                    height: 190px;
                    background: rgba(16, 22, 34, 0.8);
                    border: 1px solid rgba(56, 189, 248, 0.4);
                    border-radius: 1rem;
                    backdrop-filter: blur(10px);
                    padding: 1.5rem;
                    position: relative;
                    z-index: 10;
                    box-shadow: 0 0 40px rgba(15, 73, 189, 0.4);
                    transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);
                    animation: float-card 6s ease-in-out infinite alternate;
                }

                @keyframes float-card {
                    0% { transform: perspective(1000px) rotateY(-15deg) rotateX(10deg) translateY(0); }
                    100% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(-20px); }
                }

                .id-header {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .id-avatar {
                    width: 60px;
                    height: 60px;
                    border-radius: 0.5rem;
                    background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(15,73,189,0.5));
                    border: 1px solid rgba(56,189,248,0.5);
                }

                .id-title-lines {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    justify-content: center;
                    flex: 1;
                }

                .line {
                    height: 8px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                }
                .l1 { width: 80%; }
                .l2 { width: 50%; }

                .id-body-lines {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .l3 { width: 100%; height: 6px; }
                .l4 { width: 70%; height: 6px; }

                .id-verified-stamp {
                    position: absolute;
                    bottom: 1rem;
                    right: 1rem;
                    color: #10b981;
                    border: 2px solid #10b981;
                    padding: 0.2rem 0.5rem;
                    font-weight: 800;
                    border-radius: 0.5rem;
                    font-size: 0.8rem;
                    transform: rotate(-10deg);
                    box-shadow: 0 0 10px rgba(16,185,129,0.3);
                }

                /* Scan orbits */
                .scan-orbit {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px dashed rgba(56,189,248,0.3);
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                }
                
                .o1 { width: 350px; height: 350px; animation: spin 20s linear infinite; }
                .o2 { width: 450px; height: 450px; border-style: dotted; animation: spin-reverse 25s linear infinite; border-color: rgba(15,73,189,0.5); }
                .o3 { width: 600px; height: 600px; border: 1px solid rgba(255,255,255,0.05); }

                @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
                @keyframes spin-reverse { 100% { transform: translate(-50%, -50%) rotate(-360deg); } }

                .pulse-badge {
                    animation: pulse-glow 2s infinite;
                }
                @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(56,189,248,0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(56,189,248,0); }
                    100% { box-shadow: 0 0 0 0 rgba(56,189,248,0); }
                }
                
                .glow-btn {
                    box-shadow: 0 0 20px rgba(15,73,189,0.6);
                }
                .glow-btn:hover {
                    box-shadow: 0 0 30px rgba(56,189,248,0.8);
                }

                .fid-features-section {
                    padding: 6rem 0;
                }

                .fid-features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    margin-top: 4rem;
                }

                @media (min-width: 768px) {
                    .fid-features-grid { grid-template-columns: repeat(2, 1fr); }
                }

                .fid-feature-card {
                    padding: 2.5rem;
                    border-radius: 1.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                
                .fid-feature-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(56,189,248,0.4);
                }

                .feature-glow-orb {
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle, rgba(15,73,189,0.3) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .fid-feature-card h3 {
                    color: #fff;
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                    position: relative;
                    z-index: 2;
                }

                .fid-feature-card p {
                    color: #94a3b8;
                    line-height: 1.6;
                    position: relative;
                    z-index: 2;
                }

                .fid-ecosystem-section {
                    padding: 4rem 0 8rem;
                }

                .ecosystem-container {
                    padding: 4rem;
                    border-radius: 2rem;
                }

                .ecosystem-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                @media (min-width: 1024px) {
                    .ecosystem-layout { grid-template-columns: 1fr 1fr; }
                }

                .eco-text h2 {
                    color: #fff;
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                }

                .eco-text p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                .eco-list {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .eco-list li {
                    background: rgba(0,0,0,0.2);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border-left: 3px solid #38bdf8;
                }

                .eco-visual {
                    position: relative;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .network-node {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-weight: 700;
                    position: absolute;
                    box-shadow: 0 0 20px rgba(0,0,0,0.5);
                }

                .network-node.central {
                    width: 100px; height: 100px;
                    background: linear-gradient(135deg, #38bdf8, #0f49bd);
                    color: white;
                    font-size: 1.5rem;
                    z-index: 5;
                }

                .network-node.peripheral {
                    width: 70px; height: 70px;
                    background: #1e293b;
                    border: 2px solid rgba(56,189,248,0.5);
                    color: #94a3b8;
                    font-size: 0.9rem;
                    z-index: 4;
                }

                /* Positioning the peripheral nodes */
                .p1 { top: 10%; left: 20%; animation: pulse-node 3s infinite alternate; }
                .p2 { top: 15%; right: 20%; animation: pulse-node 4s infinite alternate; }
                .p3 { bottom: 15%; left: 25%; animation: pulse-node 5s infinite alternate; }
                .p4 { bottom: 20%; right: 25%; animation: pulse-node 3.5s infinite alternate; }

                @keyframes pulse-node {
                    0% { transform: scale(1); border-color: rgba(56,189,248,0.2); }
                    100% { transform: scale(1.1); border-color: rgba(56,189,248,0.8); }
                }

                /* Connection lines mapping to center */
                .eco-visual::before, .eco-visual::after, 
                .network-node.central::before, .network-node.central::after {
                    content: '';
                    position: absolute;
                    background: rgba(56,189,248,0.2);
                    z-index: 1;
                }

                /* Hacky pure CSS lines connecting to center (static approximations) */
                .eco-visual::before { width: 140px; height: 2px; top: 30%; left: 30%; transform: rotate(45deg); }
                .eco-visual::after { width: 140px; height: 2px; top: 30%; right: 30%; transform: rotate(-45deg); }
                .network-node.central::before { width: 140px; height: 2px; top: 120%; left: -50px; transform: rotate(-45deg); }
                .network-node.central::after { width: 140px; height: 2px; top: 100%; right: -50px; transform: rotate(30deg); }

                /* Common Page CSS elements (reused/shared concepts from RUPF) */
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
                .product-desc { font-size: 1.15rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 1.5rem; font-weight: 500; }
                .product-desc-secondary { font-size: 1rem; color: #94a3b8; line-height: 1.7; margin-bottom: 3rem; }
                .product-badge { display: inline-block; padding: 0.4rem 1rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 2rem; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2rem; }
                
                .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
                .dark-outline { border-color: rgba(255,255,255,0.2) !important; color: #fff !important; }
                .dark-outline:hover { background: rgba(255,255,255,0.1) !important; }
                
                .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
                .dark-glass { border: 1px solid rgba(255,255,255,0.08); background: rgba(16, 22, 34, 0.5); }

                .animate-on-scroll { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
                .fade-up { transform: translateY(30px); }
                .animate-on-scroll.visible { opacity: 1; transform: translate(0); }
            `}</style>
        </div>
    );
};

export default ProductFinancialID;
