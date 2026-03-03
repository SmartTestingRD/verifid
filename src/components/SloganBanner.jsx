import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SloganBanner = () => {
    const { t } = useLanguage();
    const canvasRef = useRef(null);

    // Particle Animation Logic for the Banner
    useEffect(() => {
        // Animation observer for fade-up elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.slogan-banner-section .animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 25 : 50;
        const connectionDistance = 120;
        const particleSpeed = 0.6; // Slightly faster for visual tech-feel

        const dotColor = 'rgba(255, 255, 255, 0.4)'; // White dots
        const lineColor = 'rgba(255, 255, 255, 0.15)'; // White lines

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

                        const opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
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
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="slogan-banner-section">
            <canvas ref={canvasRef} className="slogan-canvas" />
            <div className="container relative z-10">
                <div className="slogan-content animate-on-scroll fade-up">
                    <h2 className="slogan-text">
                        {t('slogan.text')}
                    </h2>
                    <div className="slogan-pulse-line"></div>
                </div>
            </div>

            <style>{`
                .slogan-banner-section {
                    background: #031538;
                    background: linear-gradient(135deg, #020f26 0%, #052157 100%);
                    padding: 5rem 0;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }

                .slogan-banner-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
                    pointer-events: none;
                    z-index: 1;
                }

                .slogan-canvas {
                    position: absolute;
                    top: 0; 
                    left: 0; 
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }

                .slogan-content {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .slogan-text {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 2rem;
                    line-height: 1.2;
                    letter-spacing: -0.02em;
                    max-width: 800px;
                    text-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }

                @media (min-width: 768px) {
                    .slogan-text {
                        font-size: 3.5rem;
                    }
                }

                .slogan-pulse-line {
                    height: 4px;
                    width: 80px;
                    background: #ffffff;
                    border-radius: 2px;
                    position: relative;
                    overflow: hidden;
                }

                .slogan-pulse-line::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                    animation: slogan-pulse 3s infinite linear;
                }

                @keyframes slogan-pulse {
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
            `}</style>
        </section>
    );
};

export default SloganBanner;
