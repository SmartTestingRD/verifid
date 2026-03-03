import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  const canvasRef = useRef(null);

  // Setup animated particles for the Products background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 60; // Slightly more for the larger area

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'; // Fainter lines
      ctx.lineWidth = 1;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const products = [
    {
      id: 'fid',
      title: t('products.fid.title'),
      subtitle: t('products.fid.subtitle'),
      desc: t('products.fid.desc'),
      accentColor: '#3b82f6', // Blue for Finance
      VisualComponent: FinancialIdVisual
    },
    {
      id: 'rupf',
      title: t('products.rupf.title'),
      subtitle: t('products.rupf.subtitle'),
      desc: t('products.rupf.desc'),
      accentColor: '#10b981', // Green for Insurance/Security
      VisualComponent: RupfVisual
    }
  ];

  return (
    <section id="productos" className="section bg-products relative overflow-hidden">
      <canvas ref={canvasRef} className="products-particles" />
      <div className="container relative z-10">

        <div className="section-header text-center mb-16 animate-on-scroll fade-up">
          <div className="inline-badge mb-4">
            {t('products.badge')}
          </div>
          <h2 className="section-title text-white">
            {t('products.title')}
          </h2>
          <p className="section-subtitle text-gray">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-row animate-on-scroll fade-up delay-${(index + 1) * 200}`}
              style={{ '--product-accent': product.accentColor }}
            >
              <div className="product-visual-col">
                <div className="visual-ambient-glow"></div>
                <product.VisualComponent />
              </div>

              <div className="product-content-col">
                <h3 className="product-title glowing-text">{product.title}</h3>
                <h4 className="product-subtitle">{product.subtitle}</h4>
                <p className="product-desc">{product.desc}</p>

                <div className="product-action">
                  <Link to={product.id === 'fid' ? "/product/financial-id" : "/product/rupf"} className="btn-solid" style={{ backgroundColor: product.accentColor, textDecoration: 'none' }}>
                    Conocer más
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-products {
          background-color: #0c111c; /* Deep dark navy */
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 6rem 0;
        }

        .mb-16 { margin-bottom: 4rem; }
        .mb-4 { margin-bottom: 1rem; }
        .text-white { color: #ffffff !important; }
        .text-gray { color: rgba(255,255,255,0.7) !important; }

        .inline-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Products List Layout */
        .products-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1; /* Behind the content, above the background */
        }

        .products-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .products-list {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        .product-row {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .product-row:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* Enforce vertical layout for cards */
        .product-content-col {
          flex: 1;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }

        .product-visual-col {
          height: 250px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
        }

        .visual-ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          height: 80%;
          transform: translate(-50%, -50%);
          background: var(--product-accent);
          opacity: 0.15;
          filter: blur(80px);
          border-radius: 50%;
          z-index: 0;
          transition: opacity 0.4s ease;
        }

        .product-row:hover .visual-ambient-glow {
          opacity: 0.25;
        }

        .product-title {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-family: var(--font-display);
        }

        .glowing-text {
          text-shadow: 0 0 30px rgba(255,255,255,0.2);
        }

        .product-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--product-accent);
          margin-bottom: 1.5rem;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .product-desc {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .product-action {
          margin-top: auto;
        }

        .btn-solid {
          border: none;
          color: #ffffff;
          font-weight: 700;
          font-family: var(--font-sans);
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-solid:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -10px var(--product-accent);
        }

        .btn-solid svg {
          transition: transform 0.3s ease;
        }

        .btn-solid:hover svg {
          transform: translateX(4px);
        }

        /* ----------------------------------
           Shared Visual Setup
           ---------------------------------- */
        .visual-container {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        /* ----------------------------------
           Financial ID Visual (Floating Card)
           ---------------------------------- */
        .fid-card {
          width: 320px;
          height: 200px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transform: rotateY(-15deg) rotateX(10deg);
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .product-row:hover .fid-card {
           transform: rotateY(0deg) rotateX(0deg) scale(1.05);
        }

        .fid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 0.5rem;
        }
        
        .fid-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.1em;
        }

        .fid-chip {
          width: 30px;
          height: 20px;
          background: linear-gradient(135deg, #FFD700, #DAA520);
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }
        .fid-chip::after {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
          animation: sweep 3s infinite;
        }

        .fid-body {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .fid-photo {
          width: 60px;
          height: 75px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.3);
        }

        .fid-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .fid-line {
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }
        .fid-line.w-full { width: 100%; }
        .fid-line.w-3-4 { width: 75%; }
        .fid-line.w-1-2 { width: 50%; }

        .fid-approved {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          border: 2px solid #10b981;
          color: #10b981;
          font-weight: 900;
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          transform: rotate(-15deg);
          border-radius: 4px;
          letter-spacing: 0.1em;
        }

        /* ----------------------------------
           RUPF Visual (Smart Contract Dark Theme)
           ---------------------------------- */
        .rupf-doc {
          width: 220px;
          height: 260px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02);
          padding: 1.5rem;
          position: relative;
          transform: translateY(10px) rotateY(10deg);
          transition: transform 0.5s ease;
        }

        .product-row:hover .rupf-doc {
          transform: translateY(-10px) rotateY(0deg) scale(1.05);
        }

        .rupf-doc::before {
          content: "";
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--product-accent), #059669);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(16, 185, 129, 0.4);
        }

        .rupf-header-lines {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        
        .r-line {
          height: 4px;
          background: rgba(255,255,255,0.15);
          border-radius: 2px;
        }

        .rupf-shield {
          width: 60px;
          height: 70px;
          margin: 0 auto;
          position: relative;
        }
        .rupf-shield svg {
          width: 100%;
          height: 100%;
          color: var(--product-accent);
          drop-shadow: 0 10px 10px rgba(16, 185, 129, 0.3);
        }
        .rupf-lock {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          width: 20px;
          height: 20px;
        }

        .rupf-footer-lines {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .r-box {
          height: 25px;
          border: 1px dashed rgba(255,255,255,0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .r-box::after {
          content: "✓";
          color: var(--product-accent);
          font-weight: bold;
        }

        /* Animations */
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-up { transform: translateY(30px); }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0);
        }

        @media (max-width: 900px) {
          .product-row, .product-row:nth-child(even) {
            flex-direction: column;
          }
          .product-visual-col {
            border-left: none;
            border-right: none;
            border-top: 1px solid rgba(255,255,255,0.05);
            min-height: 300px;
          }
          .product-content-col {
            padding: 3rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

// ----------------------------------
// Visual Sub-components
// ----------------------------------

const FinancialIdVisual = () => (
  <div className="visual-container">
    <div className="fid-card">
      <div className="fid-header">
        <span className="fid-title">VERIFID CITIZEN</span>
        <div className="fid-chip"></div>
      </div>
      <div className="fid-body">
        <div className="fid-photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="fid-details">
          <div className="fid-line w-3-4"></div>
          <div className="fid-line w-1-2"></div>
          <div className="fid-line w-full" style={{ marginTop: 'auto' }}></div>
          <div className="fid-line w-full"></div>
        </div>
      </div>
      <div className="fid-approved">VERIFIED</div>
    </div>
  </div>
);

const RupfVisual = () => (
  <div className="visual-container">
    <div className="rupf-doc">
      <div className="rupf-header-lines">
        <div className="r-line" style={{ width: '40%', height: '8px', background: 'rgba(255,255,255,0.3)' }}></div>
        <div className="r-line" style={{ width: '80%' }}></div>
        <div className="r-line" style={{ width: '60%' }}></div>
      </div>

      <div className="rupf-shield">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <svg className="rupf-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <div className="rupf-footer-lines">
        <div className="r-box"></div>
        <div className="r-box"></div>
      </div>
      <div className="r-line" style={{ width: '100%', marginTop: '1.2rem' }}></div>
      <div className="r-line" style={{ width: '70%', marginTop: '0.4rem' }}></div>
    </div>
  </div>
);

export default Products;
