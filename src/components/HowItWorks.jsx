import React from 'react';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section bg-secondary">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>Proceso Eficiente</div>
        <h2 className="section-title">
          Una verificación. <span className="text-gradient">Confianza sistémica.</span>
        </h2>
        <p className="section-subtitle">
          El proceso simplifica el ingreso al sistema financiero para usuarios y agiliza el onboarding bancario.
        </p>

        <div className="timeline-container">
          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="glass-panel step-content">
              <h3>Registro en verifID</h3>
              <p>El usuario crea su perfil y proporciona la información requerida de manera única.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="glass-panel step-content">
              <h3>Verificación Completa</h3>
              <p>Procesamiento automatizado de KYC, biometría y screening AML/CFT local e internacional.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="glass-panel step-content">
              <h3>Emisión de Identidad</h3>
              <p>Se genera el Financial ID habilitado junto con un QR dinámico para el usuario.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">4</div>
            <div className="glass-panel step-content">
              <h3>Apertura Acelerada</h3>
              <p>El banco escanea el QR, recibe el estado de cumplimiento consolidado y elimina KYC duplicado.</p>
            </div>
          </div>
        </div>

        <div className="onboarding-split mt-8">
          <div className="glass-panel ob-card">
            <div className="ob-header">
              <div className="icon-wrapper">👤</div>
              <h3>Para el Usuario</h3>
            </div>
            <ul className="ob-list">
              <li>Verificación de identidad y biometría</li>
              <li>Screening AML/CFT</li>
              <li>Clasificación de riesgo</li>
              <li>Consentimiento de monitoreo</li>
            </ul>
            <div className="ob-footer success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Autorizado para bancarizarse</span>
            </div>
          </div>

          <div className="glass-panel ob-card">
            <div className="ob-header">
              <div className="icon-wrapper bg-brand">🏦</div>
              <h3>Para el Banco</h3>
            </div>
            <ul className="ob-list">
              <li>Estado (Activo / Revisión / Escalado)</li>
              <li>Banda de riesgo y última verificación</li>
              <li>Elimina fricción de onboarding</li>
              <li>Mantiene la decisión final de negocio</li>
            </ul>
            <div className="ob-footer success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Aperturas en minutos, no semanas</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          max-width: 800px;
          margin: 0 auto 5rem;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 24px;
          height: 100%;
          width: 2px;
          background: var(--brand-gradient);
          z-index: 0;
        }

        @media (min-width: 768px) {
          .timeline-container::before {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .timeline-step {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .timeline-step:nth-child(odd) {
            flex-direction: row-reverse;
          }
          .timeline-step:nth-child(odd) .step-content {
            text-align: right;
          }
          
          .step-content {
            width: calc(50% - 3rem);
          }
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--brand-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
          flex-shrink: 0;
          box-shadow: var(--shadow-glow);
          margin-left: -1px;
        }

        @media (min-width: 768px) {
          .step-number {
            margin: 0 auto;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .step-content {
          padding: 1.5rem;
          flex-grow: 1;
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--brand-secondary);
        }

        .step-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0;
        }

        .mt-8 {
          margin-top: 4rem;
        }

        .onboarding-split {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .onboarding-split {
            grid-template-columns: 1fr 1fr;
          }
        }

        .ob-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .ob-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .icon-wrapper.bg-brand {
          background: rgba(0, 102, 255, 0.2);
        }

        .ob-header h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .ob-list {
          list-style: none;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .ob-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        .ob-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--brand-primary);
          font-weight: bold;
        }

        .ob-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 8px;
          color: var(--success);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
