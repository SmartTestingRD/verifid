import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ProductRUPF = () => {
    // Animation observer logic
    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional number counter animation
                    const numberEl = entry.target.querySelector('.stat-number');
                    if (numberEl && numberEl.getAttribute('data-target')) {
                        animateValue(numberEl, 0, parseInt(numberEl.getAttribute('data-target')), 2000);
                        numberEl.removeAttribute('data-target'); // prevent re-triggering
                    }
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

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    return (
        <div className="product-page rupf-page">

            {/* Hero Section */}
            <section className="product-hero">
                <div className="product-hero-bg"></div>
                <div className="container relative z-10">
                    <div className="product-hero-layout animate-on-scroll fade-up">
                        <div className="product-hero-content">
                            <div className="product-badge">Platform Overview</div>
                            <h1 className="product-title">Registro Único de Pólizas y Finanzas <span className="highlight">(RUPF)</span></h1>
                            <h2 className="product-subtitle">Governance and transparency for policies & finance</h2>
                            <p className="product-desc">
                                RUPF consolidates insurers, banks, and brokers, applies normalization and reconciliations, and exposes regulator-grade evidence in real time.
                            </p>
                            <p className="product-desc-secondary">
                                The registry ingests heterogenous sources via APIs, batches, and events; standardizes them into a common taxonomy; deduplicates policyholders and policies; enforces prudential rules and cross-checks against official catalogs; and produces signed, audit-ready reports with retention controls.
                            </p>
                            <div className="hero-actions">
                                <a href="#how-it-works" className="btn btn-primary">How it works</a>
                                <Link to="/contact" className="btn btn-outline dark-outline">Request a demo</Link>
                            </div>
                        </div>

                        {/* Abstract Tech Representation (Hero Image Equivalent) */}
                        <div className="media-placeholder abstract-tech-bg hero-media">
                            <div className="tech-ring"></div>
                            <div className="tech-ring inner"></div>
                            <div className="tech-floating-data d1"></div>
                            <div className="tech-floating-data d2"></div>
                            <div className="tech-floating-data d3"></div>
                            <div className="tech-core-label">RUPF Engine Active</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="product-stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card animate-on-scroll fade-up delay-100">
                            <div className="stat-number" data-target="60">0%</div>
                            <div className="stat-label">Faster reconciliations</div>
                        </div>
                        <div className="stat-card animate-on-scroll fade-up delay-200">
                            <div className="stat-number" data-target="35">0%</div>
                            <div className="stat-label">Fewer reporting errors</div>
                        </div>
                        <div className="stat-card animate-on-scroll fade-up delay-300">
                            <div className="stat-number" data-target="25">0%</div>
                            <div className="stat-label">Lower fraud exposure</div>
                        </div>
                        <div className="stat-card animate-on-scroll fade-up delay-400">
                            <div className="stat-number" data-target="20">0%</div>
                            <div className="stat-label">Operational cost savings</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="product-steps-section">
                <div className="container">
                    <div className="section-header center animate-on-scroll fade-up">
                        <h2>How RUPF Works</h2>
                        <p>A streamlined, 4-step process for absolute control.</p>
                    </div>

                    <div className="steps-timeline">
                        {[
                            { step: "1", title: "Ingestion", desc: "APIs/batches/SFTP/events from insurers, banks, brokers; master catalogs and basic validations." },
                            { step: "2", title: "Normalization", desc: "Common taxonomy (policy/endorsement/claim/financial movement), entity deduplication & linkage." },
                            { step: "3", title: "Validation & Reconciliation", desc: "Prudential rules, registry cross-checks, premium/reserve/claims controls and alerts." },
                            { step: "4", title: "Evidence & Reporting", desc: "Signed logs, retention policies, regulator reports; APIs & dashboards for supervision." },
                        ].map((item, index) => (
                            <div className="step-row animate-on-scroll fade-up" key={index}>
                                <div className="step-number-container">
                                    <div className="step-circle">{item.step}</div>
                                    {index < 3 && <div className="step-line"></div>}
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

            {/* Capabilities Matrix */}
            <section className="product-capabilities">
                <div className="container">
                    <div className="section-header animate-on-scroll fade-up">
                        <h2>Key Capabilities</h2>
                    </div>
                    <div className="capabilities-grid">
                        {[
                            { title: "End-to-end Traceability", icon: "⚗️", desc: "Policy → endorsement → movement → claim, with full history and state tracking." },
                            { title: "Financial Reconciliation", icon: "⚖️", desc: "Collected vs. applied premiums, reserves, and payouts—with alerts & adjustment logs." },
                            { title: "Anomaly Detection", icon: "🎯", desc: "Patterns, link analysis, and outliers to prevent fraud and operational errors." },
                            { title: "Interoperability", icon: "🔌", desc: "REST/GraphQL, SSO (OIDC/SAML), connectors to cores, banks, and gov e-signature." },
                            { title: "Data Governance", icon: "🛡️", desc: "Quality, cataloging, lineage, role-based access, and retention policies." },
                            { title: "Availability & Residency", icon: "🌍", desc: "High availability, DR, and data residency per local regulation." }
                        ].map((cap, i) => (
                            <div className="capability-card glass-card dark-glass animate-on-scroll fade-up" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="cap-icon">{cap.icon}</div>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Section: Compliance & Use Cases */}
            <section className="product-split-section">
                <div className="container">
                    <div className="split-grid">
                        {/* Compliance block */}
                        <div className="split-col glass-card dark-glass animate-on-scroll fade-right">
                            <h2 className="split-title">Compliance & Governance</h2>
                            <div className="feature-list">
                                <div className="feature-item">
                                    <h4>✅ GDPR-Aligned</h4>
                                    <p>Data minimization, purpose limitation, consent workflows, and subject rights handling.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Security Controls</h4>
                                    <p>Encryption in transit/at rest, RBAC/segregation, HSM options, environment isolation.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Audit Evidence</h4>
                                    <p>Signed logs, retention policies, and export packs aligned with FATF/AML expectations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Use Cases block */}
                        <div className="split-col glass-card dark-glass accent-border animate-on-scroll fade-left">
                            <h2 className="split-title">Sector Use Cases</h2>
                            <div className="feature-list">
                                <div className="feature-item flex-row">
                                    <div className="use-case-icon">🏛️</div>
                                    <div>
                                        <h4>Superintendencies</h4>
                                        <p>Prudential supervision, solvency oversight, and sector reporting with verifiable evidence.</p>
                                    </div>
                                </div>
                                <div className="feature-item flex-row">
                                    <div className="use-case-icon">🏢</div>
                                    <div>
                                        <h4>Insurers / Reinsurers</h4>
                                        <p>Operational control and compliance across issuance, collections, reserves, and claims.</p>
                                    </div>
                                </div>
                                <div className="feature-item flex-row">
                                    <div className="use-case-icon">📊</div>
                                    <div>
                                        <h4>Finance & Statistics</h4>
                                        <p>Official series and sector analytics for public policy and fiscal planning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .product-page {
                    background-color: #0c111c; /* Forced dark background for navbar visibility */
                    min-height: 100vh;
                    overflow: hidden;
                    padding-top: 80px; /* offset for navbar */
                    color: #e2e8f0;
                }

                .product-hero {
                    position: relative;
                    padding: 6rem 0;
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                    background-color: #0c111c;
                }

                .product-hero-bg {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: radial-gradient(circle at right center, rgba(15, 73, 189, 0.15) 0%, transparent 60%),
                                radial-gradient(circle at left top, rgba(56, 189, 248, 0.1) 0%, transparent 50%);
                    z-index: 1;
                }

                .product-hero-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                @media (min-width: 1024px) {
                    .product-hero-layout {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .product-hero-content {
                    max-width: 600px;
                }

                .product-badge {
                    display: inline-block;
                    padding: 0.4rem 1rem;
                    background: rgba(56, 189, 248, 0.15);
                    color: #38bdf8;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                    border-radius: 2rem;
                    font-size: 0.85rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                }

                .product-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                }
                
                .product-title .highlight {
                    color: #38bdf8;
                }

                .product-subtitle {
                    font-size: 1.5rem;
                    color: #94a3b8;
                    font-weight: 400;
                    margin-bottom: 2rem;
                    line-height: 1.4;
                }

                .product-desc {
                    font-size: 1.15rem;
                    color: #cbd5e1;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }

                .product-desc-secondary {
                    font-size: 1rem;
                    color: #94a3b8;
                    line-height: 1.7;
                    margin-bottom: 3rem;
                }

                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .dark-outline {
                    border-color: rgba(255,255,255,0.2) !important;
                    color: #fff !important;
                }
                .dark-outline:hover {
                    background: rgba(255,255,255,0.1) !important;
                }

                .product-stats {
                    position: relative;
                    z-index: 10;
                    margin-top: -3rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }

                @media (min-width: 768px) {
                    .stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                .stat-card {
                    background: rgba(16, 22, 34, 0.85);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 1rem;
                    padding: 2rem;
                    text-align: center;
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
                    border-top: 2px solid #38bdf8;
                    transition: transform 0.3s;
                }

                .stat-card:hover {
                    transform: translateY(-5px);
                }

                .stat-number {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                    line-height: 1;
                    font-family: var(--font-display);
                }

                .stat-label {
                    color: #94a3b8;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .product-steps-section {
                    padding: 8rem 0;
                    position: relative;
                }

                .steps-timeline {
                    max-width: 800px;
                    margin: 4rem auto 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .step-row {
                    display: flex;
                    gap: 2rem;
                }

                .step-number-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .step-circle {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--brand-primary);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 800;
                    box-shadow: 0 0 20px rgba(15, 73, 189, 0.5);
                    z-index: 2;
                }

                .step-line {
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(180deg, var(--brand-primary), rgba(15, 73, 189, 0.1));
                    min-height: 50px;
                    flex-grow: 1;
                    margin-top: 10px;
                    margin-bottom: -32px;
                }

                .step-content {
                    flex-grow: 1;
                    padding: 2rem;
                    border-radius: 1rem;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .dark-glass {
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(16, 22, 34, 0.5);
                }

                .step-content h3 {
                    color: #ffffff;
                    font-size: 1.4rem;
                    margin-bottom: 1rem;
                }

                .hero-media {
                    border-radius: 1.5rem;
                    box-shadow: 0 30px 60px -15px rgba(0,0,0,0.6);
                    height: 400px;
                }

                .media-placeholder {
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .abstract-tech-bg {
                    background: #060b14;
                    background-image: radial-gradient(circle at 50% 50%, rgba(15, 73, 189, 0.1) 0%, transparent 60%);
                }

                /* Abstract tech animation CSS */
                .tech-ring {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    border: 1px solid rgba(56, 189, 248, 0.2);
                    border-top-color: #38bdf8;
                    animation: spin-ring 15s linear infinite;
                }

                .tech-ring.inner {
                    width: 200px;
                    height: 200px;
                    border-width: 2px;
                    border-top-color: rgba(15, 73, 189, 0.8);
                    border-bottom-color: rgba(15, 73, 189, 0.8);
                    border-left-color: transparent;
                    border-right-color: transparent;
                    animation: spin-ring-reverse 10s linear infinite;
                }

                @keyframes spin-ring { 100% { transform: rotate(360deg); } }
                @keyframes spin-ring-reverse { 100% { transform: rotate(-360deg); } }

                .tech-floating-data {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background: #38bdf8;
                    box-shadow: 0 0 15px #38bdf8;
                    border-radius: 50%;
                }
                
                .tech-floating-data.d1 { top: 30%; left: 30%; animation: float 4s ease-in-out infinite; }
                .tech-floating-data.d2 { top: 60%; left: 60%; animation: float 5s ease-in-out infinite alternate-reverse; }
                .tech-floating-data.d3 { top: 40%; left: 70%; animation: float 6s ease-in-out infinite alternate; }

                @keyframes float {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -20px); }
                    100% { transform: translate(0, 0); }
                }

                .tech-core-label {
                    position: absolute;
                    font-size: 0.9rem;
                    color: #38bdf8;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    background: rgba(0,0,0,0.5);
                    padding: 0.5rem 1rem;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                    border-radius: 2rem;
                    backdrop-filter: blur(5px);
                }

                .product-capabilities {
                    padding: 6rem 0;
                    background: rgba(0,0,0,0.2);
                }

                .capabilities-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    margin-top: 4rem;
                }

                @media (min-width: 768px) {
                    .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (min-width: 1024px) {
                    .capabilities-grid { grid-template-columns: repeat(3, 1fr); }
                }

                .capability-card {
                    padding: 2.5rem 2rem;
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                }

                .capability-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(56, 189, 248, 0.3);
                }

                .cap-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }

                .capability-card h3 {
                    font-size: 1.25rem;
                    color: #ffffff;
                    margin-bottom: 1rem;
                }

                .capability-card p {
                    color: #94a3b8;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .product-split-section {
                    padding: 8rem 0;
                }

                .split-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                @media (min-width: 1024px) {
                    .split-grid { grid-template-columns: repeat(2, 1fr); gap: 4rem; }
                }

                .split-col {
                    padding: 3rem;
                    border-radius: 1.5rem;
                }

                .accent-border {
                    border-top: 4px solid var(--brand-primary);
                }

                .split-title {
                    font-size: 2rem;
                    color: #ffffff;
                    margin-bottom: 2.5rem;
                }

                .feature-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .feature-item h4 {
                    color: #ffffff;
                    font-size: 1.15rem;
                    margin-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                }
                
                .feature-item p {
                    color: #94a3b8;
                    padding-left: 1.8rem;
                    line-height: 1.5;
                }

                .flex-row {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                }

                .flex-row p {
                    padding-left: 0;
                }

                .use-case-icon {
                    font-size: 2.5rem;
                    background: rgba(15, 73, 189, 0.2);
                    min-width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 1rem;
                    border: 1px solid rgba(15, 73, 189, 0.3);
                }

                /* Animation Classes */
                .animate-on-scroll {
                    opacity: 0;
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .fade-up { transform: translateY(30px); }
                .fade-right { transform: translateX(-30px); }
                .fade-left { transform: translateX(30px); }
                
                .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translate(0);
                }
                
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
                .delay-300 { transition-delay: 300ms; }
                .delay-400 { transition-delay: 400ms; }
            `}</style>
        </div>
    );
};

export default ProductRUPF;
