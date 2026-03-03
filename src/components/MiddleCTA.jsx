import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const MiddleCTA = () => {
    const { t } = useLanguage();
    const canvasRef = useRef(null);

    // Setup animated particles for the banner
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Resize canvas to match container
        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle System
        const particles = [];
        const particleCount = 40; // Adjust for density

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update particles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls
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

    return (
        <section className="middle-cta-section relative">
            <div className="bg-overlap"></div>

            <div className="container relative z-10">
                <div
                    className="cta-banner animate-on-scroll fade-up"
                    style={{ background: 'linear-gradient(to bottom, rgb(16, 73, 189), rgb(2, 23, 67))' }}
                >
                    <canvas ref={canvasRef} className="cta-particles" />

                    <div className="cta-content">
                        <div className="cta-text">
                            <h2 className="cta-title">Begin your journey with VerifID today</h2>
                        </div>
                        <div className="cta-action">
                            <Link to="/contact" className="cta-button" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                                Get started
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cta-arrow">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .middle-cta-section {
                    position: relative;
                    /* Negative margins to pull the sections together and make the banner overlap */
                    margin-top: -3rem;
                    margin-bottom: -3rem;
                    z-index: 20;
                    padding: 0;
                }

                .bg-overlap {
                    display: none;
                }

                .cta-banner {
                    max-width: 900px;
                    margin: 0 auto;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                    /* Background is handled inline for specificity */
                    position: relative;
                }

                .cta-particles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }

                .cta-content {
                    position: relative;
                    z-index: 10;
                    padding: 2rem 3rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1.5rem;
                }

                @media (min-width: 768px) {
                    .cta-content {
                        flex-direction: row;
                        justify-content: space-between;
                        text-align: left;
                        padding: 2rem 4rem;
                    }
                }

                .cta-title {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin: 0;
                    font-family: var(--font-display);
                    letter-spacing: -0.02em;
                    text-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }

                @media (min-width: 768px) {
                    .cta-title {
                        font-size: 2rem;
                    }
                }

                .cta-button {
                    background: white;
                    color: rgb(16, 73, 189);
                    border: none;
                    border-radius: 6px;
                    padding: 0.8rem 1.8rem;
                    font-size: 1rem;
                    font-weight: 700;
                    font-family: var(--font-sans);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
                }

                .cta-button:hover {
                    background: #f0f0f0;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
                }

                .cta-arrow {
                    transition: transform 0.3s ease;
                }

                .cta-button:hover .cta-arrow {
                    transform: translateX(4px);
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
            `}</style>
        </section>
    );
};

export default MiddleCTA;
