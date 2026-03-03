import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Initial size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle Config
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 60;
    const connectionDistance = 120;
    const particleSpeed = 0.4;
    // Dark deep blue environment, particle dots are low opacity brand primary
    const dotColor = 'rgba(15, 73, 189, 0.4)';
    const lineColor = 'rgba(15, 73, 189, 0.15)';

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Init particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            // Fade out line the further away they are
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(15, 73, 189, ${opacity * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="footer-v2">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="footer-canvas" />

      {/* Decorative top border glow */}
      <div className="footer-glow-border"></div>

      <div className="container relative z-10">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo">
              <span className="logo-verif">verif</span>
              <span className="logo-id">ID</span>
            </a>
          </div>

          <div className="footer-contact-modern">
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <div className="contact-text">
                <strong>{t('footer.platform') === 'Plataforma' ? 'Dirección' : 'Address'}</strong>
                <a href="#">{t('footer.address')}, {t('footer.city')}</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <div className="contact-text">
                <strong>{t('footer.platform') === 'Plataforma' ? 'Teléfono' : 'Phone'}</strong>
                <a href="tel:+13464381111">+1 346 438 1111</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <div className="contact-text">
                <strong>Email</strong>
                <a href="mailto:info@verifid.online">info@verifid.online</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} verifID. {t('footer.rights')}.</p>
          <p className="footer-note" style={{ maxWidth: '400px', textAlign: 'right' }}>{t('footer.role')}</p>
        </div>
      </div>

      <style>{`
        /* 
          V13 STRICT DARK FOOTER OVERHAUL 
          Forces #0C111C background and highly legible contrasting text
        */
        .footer-v2 {
          background-color: #0c111c;
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 6rem 0 2rem;
        }

        .footer-glow-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(15, 73, 189, 0.4), transparent);
          box-shadow: 0 0 15px rgba(15, 73, 189, 0.5);
        }

        .footer-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .footer-top {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .footer-brand {
          display: flex;
          justify-content: center;
        }

        .footer-brand .logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 2.5rem;
          display: flex;
          align-items: center;
          letter-spacing: -0.02em;
        }

        .footer-brand .logo-verif { color: #ffffff; }
        .footer-brand .logo-id { color: #38bdf8; }

        .footer-contact-modern {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-contact-modern {
            flex-direction: row;
            text-align: left;
            gap: 3rem;
          }
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .contact-item {
            flex-direction: row;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        .contact-icon {
          font-size: 1.5rem;
          opacity: 0.9;
        }

        @media (min-width: 768px) {
          .contact-icon {
            margin-top: 2px;
          }
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .contact-text strong {
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-text a {
          color: #94a3b8;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .contact-text a:hover {
          color: #38bdf8;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #64748b;
          font-size: 0.9rem;
          text-align: center;
        }

        .footer-note {
          opacity: 0.7;
          font-size: 0.8rem;
        }
        
        @media (min-width: 768px) {
            .footer-bottom {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
            }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
