import React from 'react';

const Governance = () => {
    return (
        <section id="beneficios" className="section bg-secondary relative">
            <div className="container">
                <div className="section-label" style={{ textAlign: 'center' }}>Gobernanza de Datos</div>
                <h2 className="section-title">
                    Soberanía y <span className="text-gradient">Confianza</span>
                </h2>

                <div className="governance-badge glass-panel text-center">
                    <p className="gov-main-text">
                        Los datos pertenecen al <strong>Estado Panameño</strong>. Custodiados por la Superintendencia de Bancos.
                    </p>
                    <div className="gov-pills">
                        <span className="gov-pill">✓ Sin comercialización de datos</span>
                        <span className="gov-pill">✓ Sin venta de información</span>
                        <span className="gov-pill">✓ Auditoría completa</span>
                    </div>
                </div>

                <h3 className="section-title" style={{ marginTop: '5rem', fontSize: '2.5rem' }}>Ecosistema de Beneficios</h3>

                <div className="benefits-grid">
                    {/* State Benefits */}
                    <div className="glass-panel benefit-card">
                        <div className="benefit-header bg-brand">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3>Para el Estado</h3>
                        <ul>
                            <li>Mayor control y trazabilidad</li>
                            <li>Cumplimiento AML/CFT fortalecido</li>
                            <li>Inclusión financiera ordenada</li>
                            <li>Reputación internacional</li>
                        </ul>
                    </div>

                    {/* Bank Benefits */}
                    <div className="glass-panel benefit-card">
                        <div className="benefit-header bg-secondary-color">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3>Para los Bancos</h3>
                        <ul>
                            <li>Onboarding rápido y sin fricción</li>
                            <li>Menores costos de cumplimiento</li>
                            <li>Alertas regulatorias en tiempo real</li>
                            <li>Modelo de dependencia defendible</li>
                        </ul>
                    </div>

                    {/* User Benefits */}
                    <div className="glass-panel benefit-card">
                        <div className="benefit-header bg-success">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3>Para los Usuarios</h3>
                        <ul>
                            <li>Una verificación anual única</li>
                            <li>Acceso bancario más rápido</li>
                            <li>Portabilidad entre instituciones</li>
                            <li>Transparencia total de datos</li>
                        </ul>
                    </div>
                </div>

            </div>

            <style>{`
        .governance-badge {
          padding: 2.5rem;
          margin: 0 auto 3rem;
          max-width: 900px;
          border-color: rgba(0, 102, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.1);
        }

        .gov-main-text {
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .gov-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .gov-pill {
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border-radius: 30px;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .benefits-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .benefit-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .benefit-header {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          color: white;
        }

        .bg-brand { background: var(--brand-gradient); box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3); }
        .bg-secondary-color { background: linear-gradient(135deg, #0cebeb, #20e3b2); box-shadow: 0 4px 15px rgba(32, 227, 178, 0.3); color: #000; }
        .bg-success { background: linear-gradient(135deg, #10b981, #059669); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); }

        .benefit-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .benefit-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefit-card ul li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .benefit-card ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--text-tertiary);
        }
      `}</style>
        </section>
    );
};

export default Governance;
