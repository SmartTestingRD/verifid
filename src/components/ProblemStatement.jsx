import React from 'react';

const ProblemStatement = () => {
  return (
    <section id="problema" className="section bg-secondary">
      <div className="container">
        <div className="problem-grid">
          <div className="problem-text">
            <div className="section-label">El Problema Histórico</div>
            <h2 className="section-title text-left">
              Cumplimiento Fragmentado = <span className="text-gradient">Fricción Operativa</span>
            </h2>
            <p className="section-subtitle text-left">
              La infraestructura de cumplimiento actual en industrias reguladas es ineficiente y dispersa.
            </p>

            <ul className="problem-list">
              <li>
                <div className="bullet-icon error-bg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span>Cada institución realiza su propio KYC</span>
              </li>
              <li>
                <div className="bullet-icon error-bg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V8M18 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Duplicación de documentos constante</span>
              </li>
              <li>
                <div className="bullet-icon error-bg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span>Procesos de onboarding sumamente largos</span>
              </li>
              <li>
                <div className="bullet-icon error-bg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 9L12 15L8 11L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Interpretaciones regulatorias distintas</span>
              </li>
            </ul>
          </div>

          <div className="problem-results glass-panel">
            <h3>El Resultado Negativo</h3>
            <div className="results-list">
              <div className="result-item">
                <div className="result-icon">❌</div>
                <div>
                  <h4>Fricción Operativa</h4>
                  <p>Para usuarios finales e instituciones.</p>
                </div>
              </div>
              <div className="result-item">
                <div className="result-icon">❌</div>
                <div>
                  <h4>Costos Elevados</h4>
                  <p>Alto riesgo de multas y reprocesos.</p>
                </div>
              </div>
              <div className="result-item">
                <div className="result-icon">❌</div>
                <div>
                  <h4>Menor Competitividad</h4>
                  <p>Apertura de productos puede tomar meses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        
        .problem-grid {
          display: grid;
          gap: 4rem;
          align-items: center;
        }
        
        @media (min-width: 1024px) {
          .problem-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 6rem;
          }
        }
        
        .section-label {
          color: var(--warning);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .text-left {
          text-align: left;
          margin-left: 0;
        }
        
        .problem-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .problem-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.125rem;
          color: var(--text-secondary);
        }
        
        .bullet-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          flex-shrink: 0;
        }
        
        .error-bg {
          background: rgba(239, 68, 68, 0.1);
          color: var(--error);
        }
        
        .problem-results {
          padding: 2.5rem;
          border-color: rgba(239, 68, 68, 0.2);
        }
        
        .problem-results h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #fff;
        }
        
        .results-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        
        .result-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        
        .result-icon {
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }
        
        .result-item h4 {
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
          color: #fff;
        }
        
        .result-item p {
          color: var(--text-tertiary);
          font-size: 0.95rem;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default ProblemStatement;
