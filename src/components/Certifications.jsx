import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications = () => {
    const { theme } = useLanguage();

    const certs = [
        { name: "ISO 27001", desc: "Seguridad de la Información", icon: "🔒" },
        { name: "SOC 2 Type II", desc: "Controles Corporativos", icon: "📑" },
        { name: "GDPR Compliant", desc: "Privacidad de Datos", icon: "🇪🇺" },
        { name: "FATF Recommendations", desc: "Estándares AML Globales", icon: "⚖️" }
    ];

    return (
        <section className="section bg-primary relative">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h2 className="section-title">
                        Certificaciones y <span className="text-gold-gradient">Reconocimientos</span>
                    </h2>
                    <p className="section-subtitle">
                        Respaldados por los más altos estándares globales operativos y regulatorios.
                    </p>
                </div>

                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-card glass-panel text-center">
                            <div className="cert-icon">{cert.icon}</div>
                            <h4>{cert.name}</h4>
                            <p>{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .mb-12 {
          margin-bottom: 4rem;
        }

        .text-gold-gradient {
          background: var(--gold-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .certs-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .certs-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .cert-card {
          padding: 2.5rem 1.5rem;
          transition: transform var(--transition-normal);
          border-top: 4px solid transparent;
        }

        .cert-card:hover {
          transform: translateY(-5px);
          border-top-color: var(--brand-gold);
        }

        .cert-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .cert-card h4 {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .cert-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default Certifications;
