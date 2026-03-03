import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState('idle');
    const [selectedCountry, setSelectedCountry] = useState('');
    const canvasRef = useRef(null);

    // Particle Animation Logic
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

        const animatedElements = document.querySelectorAll('.contact-section .animate-on-scroll');
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
        const particleCount = isMobile ? 35 : 75;
        const connectionDistance = 140;
        const particleSpeed = 0.4;

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
                        ctx.strokeStyle = `rgba(15, 73, 189, ${opacity * 0.3})`;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Handle custom country
        if (data.country === 'other' && data.customCountry) {
            data.country = data.customCountry;
        }
        delete data.customCountry;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit form');
            }

            setStatus('success');
            e.target.reset(); // Clear the form
            setSelectedCountry(''); // Reset country
        } catch (error) {
            console.error('Error submitting form:', error);
            // Revert state on error, maybe add an error state here later
            alert('There was an error submitting your request: ' + error.message);
            setStatus('idle');
        }
    };

    return (
        <section className="contact-section">
            <canvas ref={canvasRef} className="contact-canvas" />

            <div className="container contact-container relative z-10">
                <div className="contact-header animate-on-scroll fade-up">
                    <h1 className="contact-title">Let's Secure Your Ecosystem</h1>
                    <p className="contact-subtitle">
                        Tell us about your compliance needs, and our experts will guide you through the process.
                    </p>
                </div>

                <div className="contact-form-wrapper animate-on-scroll fade-up delay-100">
                    {status === 'success' ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. A VerifID specialist will contact you shortly.</p>
                            <button className="btn btn-outline" onClick={() => setStatus('idle')} style={{ color: '#0c111c', backgroundColor: '#fff', borderColor: '#fff' }}>Send Another Message</button>
                        </div>
                    ) : (
                        <form className="white-card-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group-light">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="form-group-light">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group-light">
                                    <label htmlFor="email">Work Email</label>
                                    <input type="email" id="email" name="workEmail" required pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid work email address" />
                                </div>
                                <div className="form-group-light">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phoneNumber" required pattern="^[0-9+ ]+$" title="Please enter only numbers (and optional '+' sign)" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9+\s]/g, ''); }} />
                                </div>
                            </div>

                            <div className="form-group-light">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="companyName" required />
                            </div>

                            <div className="form-group-light">
                                <label htmlFor="country">Country</label>
                                <select id="country" name="country" required value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                                    <option value="" disabled hidden>Select your country</option>
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="eu">European Union</option>
                                    <option value="latam">Latin America</option>
                                    <option value="other">Other (Please specify)</option>
                                </select>
                            </div>

                            {selectedCountry === 'other' && (
                                <div className="form-group-light" style={{ marginTop: '-0.5rem' }}>
                                    <label htmlFor="customCountry" className="sr-only" style={{ display: 'none' }}>Specify Country</label>
                                    <input type="text" id="customCountry" name="customCountry" placeholder="Enter your country name..." required />
                                </div>
                            )}

                            <div className="form-group-light">
                                <label htmlFor="message">How can we help you?</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 10rem 0 6rem;
                    background-color: #0c111c;
                    min-height: 100vh;
                    position: relative;
                    overflow: hidden;
                }

                .contact-canvas {
                    position: absolute;
                    top: 0; 
                    left: 0; 
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                }

                .contact-container {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .contact-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .dark-mode-badge {
                    background: rgba(15, 73, 189, 0.2);
                    color: #38bdf8;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                }

                .contact-title {
                    font-size: 2.5rem;
                    color: #ffffff;
                    margin: 1.5rem 0 1rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }

                .contact-subtitle {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .white-card-form {
                    background: #ffffff;
                    border: 1px solid var(--border-color);
                    border-radius: 1rem;
                    padding: 2.5rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
                    position: relative;
                    z-index: 20;
                }

                .form-row {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                @media (min-width: 768px) {
                    .form-row {
                        flex-direction: row;
                    }
                    .form-row > .form-group-light {
                        flex: 1;
                    }
                }

                .form-group-light {
                    margin-bottom: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .form-group-light label {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #475569;
                    margin-bottom: 0.5rem;
                }

                .form-group-light input,
                .form-group-light select,
                .form-group-light textarea {
                    padding: 0.8rem 1rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 0.5rem;
                    background: #f8fafc;
                    color: #0f172a;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                
                .form-group-light input::placeholder,
                .form-group-light textarea::placeholder {
                    color: #94a3b8;
                }

                .form-group-light input:focus,
                .form-group-light select:focus,
                .form-group-light textarea:focus {
                    outline: none;
                    border-color: #38bdf8;
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
                }

                .submit-btn {
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.1rem;
                    margin-top: 1rem;
                    background: var(--brand-primary);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-weight: 600;
                }
                
                .submit-btn:hover {
                    box-shadow: 0 0 15px rgba(15, 73, 189, 0.6);
                    transform: translateY(-2px);
                }

                .submit-btn.loading {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .success-message {
                    text-align: center;
                    padding: 4rem 2rem;
                    background: rgba(16, 22, 34, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    border-radius: 1rem;
                    color: white;
                }
                
                .success-message h3 {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
                
                .success-message p {
                    color: #94a3b8;
                    margin-bottom: 2rem;
                }

                .success-icon {
                    width: 60px;
                    height: 60px;
                    background: rgba(16, 185, 129, 0.2);
                    color: #10b981;
                    border: 2px solid #10b981;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    margin: 0 auto 1.5rem;
                }
            `}</style>
        </section>
    );
};

export default ContactForm;
