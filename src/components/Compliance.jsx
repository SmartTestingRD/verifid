import React from 'react';

const Compliance = () => {
    return (
        <section id="cumplimiento" className="section relative">
            <div className="container">
                <div className="section-label" style={{ textAlign: 'center' }}>Supervisión Continua</div>
                <h2 className="section-title">
                    Un Solo Lenguaje de <span className="text-gradient">Cumplimiento</span>
                </h2>
                <p className="section-subtitle">
                    Estándar regulatorio unificado sin arbitraje, sin interpretaciones divergentes y sin duplicación innecesaria.
                </p>

                <div className="unified-standard glass-panel mb-8">
                    <div className="grid md:grid-cols-4 text-center gaps-y">
                        <div className="standard-item">
                            <div className="std-icon">✅</div>
                            <h4>Mismo Estándar KYC</h4>
                        </div>
                        <div className="standard-item">
                            <div className="std-icon">✅</div>
                            <h4>Mismas Listas AML</h4>
                        </div>
                        <div className="standard-item">
                            <div className="std-icon">✅</div>
                            <h4>Mismas Reglas</h4>
                        </div>
                        <div className="standard-item">
                            <div className="std-icon">✅</div>
                            <h4>Mismos Estados</h4>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 mt-8 align-stretch">
                    <div className="glass-panel feature-split-card">
                        <div className="split-icon-wrapper">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--brand-secondary)" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="var(--brand-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3>Monitoreo Continuo</h3>
                        <p className="feature-desc">El cumplimiento no es un evento único. verifID realiza revisiones permanentes y re-chequeos inmediatos por eventos.</p>

                        <div className="event-tags">
                            <span className="event-tag">Nuevas Sanciones</span>
                            <span className="event-tag">Cambios PEP</span>
                            <span className="event-tag">Medios Adversos</span>
                            <span className="event-tag">Alertas Regulatorias</span>
                        </div>
                    </div>

                    <div className="glass-panel feature-split-card">
                        <div className="split-icon-wrapper">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--brand-primary)" strokeWidth="2" /><path d="M9 12L11 14L15 10" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 18V18.01" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3>Blockchain y Alertas</h3>
                        <p className="feature-desc">Conciencia regulatoria compartida mediante blockchain permisionada para notificaciones en tiempo real.</p>

                        <ul className="blockchain-list">
                            <li>
                                <span className="check">✓</span> Los bancos que registran a un usuario son notificados.
                            </li>
                            <li>
                                <span className="check">✓</span> Alertas instantáneas ante eventos de riesgo.
                            </li>
                            <li>
                                <span className="check">✓</span> Solo metadatos de cumplimiento, <strong>cero</strong> almacenamiento de transacciones.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <style>{`
        .mb-8 { margin-bottom: 2rem; }
        .mt-8 { margin-top: 2rem; }
        .align-stretch { align-items: stretch; }
        
        .unified-standard {
          padding: 2rem;
        }

        .gaps-y {
          gap: 1.5rem;
        }

        .standard-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .std-icon {
          font-size: 1.75rem;
          background: rgba(255, 255, 255, 0.05);
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .standard-item h4 {
          margin: 0;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .feature-split-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .split-icon-wrapper {
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
        }

        .feature-split-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .feature-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .event-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .event-tag {
          padding: 0.5rem 1rem;
          background: rgba(245, 158, 11, 0.1);
          color: var(--warning);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .blockchain-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .blockchain-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .blockchain-list .check {
          color: var(--brand-secondary);
          font-weight: bold;
        }
      `}</style>
        </section>
    );
};

export default Compliance;
