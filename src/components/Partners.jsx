import React from 'react';

// Extract badges into reusable components for cleaner code
const IBetaBadge1 = () => (
  <div className="comp-badge ibeta-badge">
    <div className="ibeta-left">
      <span className="ibeta-logo">iBeta</span>
      <div className="ibeta-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <span className="ibeta-text-small">TESTED</span>
    </div>
    <div className="ibeta-right">
      <div className="ibeta-level">LEVEL 1</div>
      <div className="ibeta-iso">ISO 30107-3</div>
      <div className="ibeta-micro">Presentation Attack Detection</div>
      <div className="ibeta-compliant">COMPLIANT</div>
    </div>
  </div>
);

const IBetaBadge2 = () => (
  <div className="comp-badge ibeta-badge">
    <div className="ibeta-left">
      <span className="ibeta-logo">iBeta</span>
      <div className="ibeta-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <span className="ibeta-text-small">TESTED</span>
    </div>
    <div className="ibeta-right">
      <div className="ibeta-level">LEVEL 2</div>
      <div className="ibeta-iso">ISO 30107-3</div>
      <div className="ibeta-micro">Presentation Attack Detection</div>
      <div className="ibeta-compliant">COMPLIANT</div>
    </div>
  </div>
);

const SocBadge = () => (
  <div className="comp-badge soc-badge">
    <div className="soc-circle">
      <div className="soc-top">AICPA</div>
      <div className="soc-mid">SOC</div>
    </div>
  </div>
);

const PciBadge = () => (
  <div className="comp-badge pci-badge">
    <div className="pci-shape">
      <span className="pci-text">PCI</span>
      <svg className="pci-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
    </div>
    <div className="pci-right">
      <span className="pci-dss">DSS</span>
      <span className="pci-comp">COMPLIANT</span>
    </div>
  </div>
);

const GdprBadge = () => (
  <div className="comp-badge gdpr-badge">
    <div className="gdpr-stars">
      <div className="gdpr-circle-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <div className="star" style={{ top: 0, left: '50%' }}>★</div>
      <div className="star" style={{ top: '15%', left: '85%' }}>★</div>
      <div className="star" style={{ top: '50%', left: '100%' }}>★</div>
      <div className="star" style={{ bottom: '15%', left: '85%' }}>★</div>
      <div className="star" style={{ bottom: 0, left: '50%' }}>★</div>
      <div className="star" style={{ bottom: '15%', left: '15%' }}>★</div>
      <div className="star" style={{ top: '50%', left: 0 }}>★</div>
      <div className="star" style={{ top: '15%', left: '15%' }}>★</div>
    </div>
    <div className="gdpr-text">
      <div className="gdpr-title">GDPR</div>
      <div className="gdpr-sub">READY</div>
    </div>
  </div>
);

const EidvtBadge = () => (
  <div className="comp-badge eidvt-badge">
    <div className="eidvt-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 8v8M12 18h.01" strokeWidth="2" />
      </svg>
      <div className="eidvt-label">e-IDVT</div>
      <div className="eidvt-sub">Certification</div>
    </div>
  </div>
);

const IsoBadge = ({ number }) => (
  <div className="comp-badge iso-badge">
    <div className="iso-black-box">
      <div className="iso-text">ISO</div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="iso-globe">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </div>
    <div className="iso-number">{number}</div>
  </div>
);

const DpBadge = () => (
  <div className="comp-badge dp-badge">
    <div className="dp-col">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24"><path d="M12 2L2 22h20L12 2z" /></svg>
      <div className="dp-title">Data &</div>
      <div className="dp-title">Privacy</div>
    </div>
    <div className="dp-col ukas-box">
      <div className="ukas-crown">♔</div>
      <div className="ukas-text">UKAS</div>
    </div>
  </div>
);


const Partners = () => {
  const allBadges = [
    <IBetaBadge1 key="ib1" />,
    <IBetaBadge2 key="ib2" />,
    <SocBadge key="soc" />,
    <PciBadge key="pci" />,
    <GdprBadge key="gdpr" />,
    <EidvtBadge key="eidvt" />,
    <IsoBadge key="iso1" number="27001" />,
    <DpBadge key="dp" />,
    <IsoBadge key="iso2" number="27017" />,
    <IsoBadge key="iso3" number="27018" />
  ];

  return (
    <section className="security-compliance-section">
      <div className="container-fluid text-center">
        <div className="marquee-container">
          <div className="marquee">
            {/* Double the array for seamless infinite scroll */}
            {[...allBadges, ...allBadges].map((BadgeItem, idx) => (
              <div key={idx} className="marquee-item">
                {BadgeItem}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .security-compliance-section {
          background-color: #0c111c; /* Dark navy matching the hero theme */
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
        }

        /* Marquee layout */
        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0.5rem 0;
        }
        
        .marquee {
          display: flex;
          align-items: center;
          gap: 4rem;
          animation: m-scroll 35s linear infinite;
          width: max-content;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        /* Fade effect on edges */
        .marquee-container::before,
        .marquee-container::after {
          position: absolute;
          top: 0;
          width: 15%;
          height: 100%;
          content: "";
          z-index: 2;
          pointer-events: none;
        }
        
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #0c111c, transparent);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #0c111c, transparent);
        }

        @keyframes m-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 2rem)); /* Offset for the gap */ }
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Generic Badge adjustments for Dark mode */
        .comp-badge {
          display: flex;
          align-items: center;
          color: #ffffff; /* All text becomes white */
          font-family: var(--font-sans);
          filter: opacity(0.7); /* Slightly dimmed */
          transition: all 0.3s ease;
          cursor: default;
        }

        .comp-badge:hover {
          filter: opacity(1);
          transform: scale(1.05);
        }

        /* iBeta Badges */
        .ibeta-badge {
          border: 1px solid #ffffff;
          border-radius: 4px;
          overflow: hidden;
          height: 54px;
        }
        .ibeta-left {
          background: #ffffff;
          color: #0c111c; /* Invert colors */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.2rem 0.6rem;
          height: 100%;
        }
        .ibeta-logo { font-weight: 800; font-size: 0.85rem; letter-spacing: -0.05em; }
        .ibeta-check svg { width: 14px; height: 14px; }
        .ibeta-text-small { font-size: 0.4rem; font-weight: 700; margin-top: 2px; }
        .ibeta-right {
          padding: 0.3rem 0.6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.1;
          height: 100%;
        }
        .ibeta-level { font-size: 0.5rem; font-weight: 600; color: rgba(255,255,255,0.7); }
        .ibeta-iso { font-size: 0.85rem; font-weight: 800; }
        .ibeta-micro { font-size: 0.4rem; color: rgba(255,255,255,0.5); margin-top: 2px; }
        .ibeta-compliant { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.05em; margin-top: 2px; }

        /* AICPA SOC */
        .soc-badge {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .soc-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #ffffff;
          color: #0c111c;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffffff;
          box-shadow: inset 0 0 0 2px #0c111c;
        }
        .soc-top { font-size: 0.6rem; font-weight: 700; }
        .soc-mid { font-size: 1rem; font-weight: 900; line-height: 1; margin-top: -2px; }

        /* PCI DSS */
        .pci-badge {
          display: flex;
          align-items: flex-end;
          gap: 0.3rem;
        }
        .pci-shape {
          background: #ffffff;
          color: #0c111c;
          padding: 0.4rem 0.8rem 0.4rem 0.4rem;
          clip-path: polygon(0 0, 100% 10%, 90% 100%, 0% 100%);
          display: flex;
          align-items: center;
          gap: 0.2rem;
          position: relative;
        }
        .pci-text { font-size: 1.2rem; font-weight: 900; font-style: italic; letter-spacing: -0.05em; }
        .pci-check { position: absolute; right: -8px; bottom: 4px; width: 14px; height: 14px; color: #ffffff; background: #0c111c; border-radius: 50%; padding: 2px; border: 1px solid #ffffff; }
        .pci-right { display: flex; flex-direction: column; line-height: 1; margin-bottom: 0.2rem; }
        .pci-dss { font-size: 0.8rem; font-weight: 900; }
        .pci-comp { font-size: 0.4rem; font-weight: 700; margin-top: 2px; }

        /* GDPR READY */
        .gdpr-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .gdpr-stars {
          position: relative;
          width: 44px;
          height: 44px;
        }
        .gdpr-circle-check {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 1.5px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gdpr-circle-check svg { width: 14px; height: 14px; }
        .star {
          position: absolute;
          font-size: 0.45rem;
          transform: translate(-50%, -50%);
        }
        .gdpr-text { display: flex; flex-direction: column; line-height: 1; }
        .gdpr-title { font-size: 1.2rem; font-weight: 900; }
        .gdpr-sub { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em; }

        /* e-IDVT */
        .eidvt-badge {
          display: flex;
          align-items: center;
        }
        .eidvt-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }
        .eidvt-icon svg { width: 32px; height: 32px; margin-bottom: 2px; }
        .eidvt-label { font-size: 0.7rem; font-weight: 800; }
        .eidvt-sub { font-size: 0.4rem; color: rgba(255,255,255,0.6); }

        /* ISO Badges */
        .iso-badge {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .iso-black-box {
          background: #ffffff;
          color: #0c111c;
          padding: 0.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 50px;
        }
        .iso-text { font-size: 0.75rem; font-weight: 900; line-height: 1; }
        .iso-globe { width: 22px; height: 22px; margin-top: 2px; }
        .iso-number {
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: -0.05em;
          margin-left: 0.2rem;
        }

        /* Data & Privacy UKAS */
        .dp-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .dp-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.1;
        }
        .dp-title { font-size: 0.65rem; font-weight: 700; }
        
        .ukas-box {
          background: #ffffff;
          color: #0c111c;
          padding: 0.3rem 0.5rem;
          align-items: center;
          border: 1px solid #ffffff;
        }
        .ukas-crown { font-size: 1.2rem; line-height: 1; margin-bottom: 2px; }
        .ukas-text { font-size: 0.5rem; font-weight: 800; letter-spacing: 0.05em; }

        @media (max-width: 768px) {
          .security-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
