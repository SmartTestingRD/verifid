import React from 'react';

const CTA = () => {
  return (
    <section className="section relative" style={{ overflow: 'hidden' }}>
      <div className="cta-glow"></div>

      <div className="container">

        <div className="legal-framework glass-panel mb-12">
          <div className="grid md:grid-cols-2 align-center gaps">
            <div className="legal-content">
              <div className="section-label">Marco Legal Claro</div>
              <h2>Separación de Roles</h2>
              <p className="legal-desc">
                Un modelo <strong>Constitucional, Soberano y Escalable</strong> diseñado para el ecosistema financiero actual.
              </p>

              <ul className="roles-list">
                <li>
                  <span className="role-title">verifID</span>
                  <span className="role-action">Verifica, monitorea, alerta</span>
                </li>
                <li>
                  <span className="role-title">Bancos</span>
                  <span className="role-action">Deciden, operan, reportan</span>
                </li>
                <li>
                  <span className="role-title">Estado</span>
                  <span className="role-action">Regula, supervisa y sanciona</span>
                </li>
              </ul>
            </div>

            <div className="hub-content">
              <div className="hub-badge text-gradient">HUB FINANCIERO GLOBAL</div>
              <h3>Una Ventaja Competitiva</h3>
              <p>verifID se posiciona como un hub financiero moderno y confiable a nivel internacional.</p>
              <ul className="hub-list">
                <li>✓ Apertura de cuentas más rápida que otros países</li>
                <li>✓ Menor riesgo sistémico</li>
                <li>✓ Mayor atractivo para inversión externa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-banner text-center glass-panel">
          <h2 className="cta-title">
            <span className="text-gradient">verifID</span> – Financial ID
          </h2>
          <p className="cta-slogan">
            Un Sistema. Un Estándar. Una Identidad Financiera.
          </p>
          <div className="cta-actions">
            <a href="#contacto" className="btn btn-primary">Contáctanos Hoy</a>
            <a href="#solucion" className="btn btn-secondary">Conoce Más</a>
          </div>
        </div>
      </div>

      <style>{`
        .mb-12 { margin-bottom: 5rem; }
        .align-center { align-items: center; }
        .gaps { gap: 4rem; }

        .cta-glow {
          position: absolute;
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 70vw;
          height: 50vh;
          background: radial-gradient(ellipse, rgba(0, 102, 255, 0.15) 0%, transparent 60%);
          pointer-events: none;
          z-index: -1;
        }

        .legal-framework {
          padding: 3rem;
          border-color: rgba(0, 229, 255, 0.2);
        }

        @media (min-width: 1024px) {
          .legal-framework {
            padding: 4rem;
          }
        }

        .legal-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .legal-desc {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .roles-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .roles-list li {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          border-left: 3px solid var(--brand-primary);
        }

        @media (min-width: 640px) {
          .roles-list li {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .role-title {
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .role-action {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .hub-content {
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(18, 28, 51, 0.6), rgba(10, 17, 34, 0.8));
          border-radius: 16px;
          border: 1px solid var(--glass-border);
        }

        .hub-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .hub-content h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 1rem;
        }

        .hub-content p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .hub-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hub-list li {
          color: #fff;
          font-size: 0.95rem;
        }

        .cta-banner {
          padding: 5rem 2rem;
          background: linear-gradient(to bottom, rgba(18, 28, 51, 0.7), rgba(0, 102, 255, 0.05));
          border: 1px solid rgba(0, 102, 255, 0.2);
        }

        .cta-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .cta-slogan {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-family: var(--font-display);
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};

export default CTA;
