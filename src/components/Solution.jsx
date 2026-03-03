import React from 'react';

const Solution = () => {
  return (
    <section id="solucion" className="section relative">
      <div className="solution-glow"></div>
      <div className="container">

        <div className="solution-header">
          <div className="section-label">La Solución de Infraestructura</div>
          <h2 className="section-title">
            Infraestructura Abierta de <br />
            <span className="text-gradient">Confianza Regulatoria</span>
          </h2>
          <p className="section-subtitle">
            VerifID certifica que una persona o empresa está habilitada por el regulador para operar en el ecosistema, ya sea en sectores de seguros, finanzas o gubernamentales.
          </p>
        </div>

        <div className="solution-cards grid md:grid-cols-3">
          <div className="glass-panel solution-card animate-fade-in delay-100">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Identidad Sectorial</h3>
            <p>Verificación robusta y automatizada de documentos y biometría para cada sector regulado.</p>
          </div>

          <div className="glass-panel solution-card animate-fade-in delay-200">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Supervisión Regulatoria</h3>
            <p>Evaluación estricta y trazabilidad compartida entre las entidades reguladoras y las instituciones.</p>
          </div>

          <div className="glass-panel solution-card animate-fade-in delay-300">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.45801 12C3.73228 7.94288 7.52257 5 12.0002 5C16.4778 5 20.2681 7.94291 21.5424 12C20.2681 16.0571 16.4778 19 12.0002 19C7.52256 19 3.73226 16.0571 2.45801 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Monitoreo Continuo</h3>
            <p>Vigilancia permanente de registros y estatus tras el onboarding ante riesgo de cumplimiento.</p>
          </div>
        </div>

        <div className="definition-box glass-panel animate-fade-in delay-400">
          <div className="definition-content">
            <h3>¿Qué son los productos VerifID?</h3>
            <p className="official-def">
              "Soluciones especializadas como `RUPF` (Seguros) y `Financial ID` (Banca), que operan sobre una misma plataforma de confianza para habilitar las supervisiones del estado sobre industrias."
            </p>
            <div className="not-is-list">
              <div className="not-is-item">
                <div className="not-is-icon">—</div> No comprometen tus datos
              </div>
              <div className="not-is-item">
                <div className="not-is-icon">—</div> No son medios de pago
              </div>
              <div className="not-is-item">
                <div className="not-is-icon">—</div> No ralentizan la operación
              </div>
            </div>
            <div className="definition-footer">
              <strong>Una plataforma de digitalización y supervisión.</strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .relative { position: relative; }
        
        .solution-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vh;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        .solution-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-label {
          color: var(--brand-secondary);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .solution-cards {
          margin-bottom: 5rem;
        }

        .solution-card {
          padding: 2.5rem 2rem;
          text-align: left;
        }

        .card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 229, 255, 0.1));
          color: var(--brand-secondary);
          margin-bottom: 1.5rem;
          border: 1px solid rgba(0, 229, 255, 0.2);
        }

        .solution-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .solution-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .definition-box {
          padding: 3rem;
          background: linear-gradient(135deg, rgba(18, 28, 51, 0.8), rgba(10, 17, 34, 0.9));
          border-left: 4px solid var(--brand-primary);
        }

        .definition-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .definition-content h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .official-def {
          font-size: 1.25rem;
          color: var(--brand-secondary);
          font-style: italic;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .not-is-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .not-is-list {
            flex-direction: row;
            justify-content: center;
            gap: 2.5rem;
          }
        }

        .not-is-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .not-is-icon {
          color: var(--error);
          font-weight: bold;
        }

        .definition-footer {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          font-size: 1.125rem;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Solution;
