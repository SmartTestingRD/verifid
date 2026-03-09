import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logoColor from '../assets/logo-color.png';
import logoSemiColor from '../assets/logo-semi-color.png';
import logoBw from '../assets/logo-bw.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProdSol = location.pathname.startsWith('/product') || location.pathname.startsWith('/solution');
  const isCompany = location.pathname === '/company';

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageFlags = {
    'en': '🇺🇸',
    'es': '🇪🇸',
    'fr': '🇫🇷',
    'pt': '🇧🇷',
    'el': '🇬🇷',
    'tr': '🇹🇷'
  };

  const handleMenuClick = () => {
    // Force the hover-based dropdown to disappear immediately
    const dropdown = document.querySelector('.mega-menu');
    if (dropdown) {
      dropdown.style.display = 'none';
      setTimeout(() => {
        dropdown.style.display = '';
      }, 150);
    }
  };

  const RUPFIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="prod-icon">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="var(--brand-primary)" fillOpacity="0.1" stroke="var(--brand-primary)" strokeWidth="2" />
      <path d="M8 12L11 15L16 9" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const FIDIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="prod-icon">
      <path d="M3 10H21V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10Z" fill="var(--brand-secondary)" fillOpacity="0.1" stroke="var(--brand-secondary)" strokeWidth="2" />
      <path d="M3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10M3 10H21" stroke="var(--brand-secondary)" strokeWidth="2" />
      <rect x="7" y="14" width="4" height="2" rx="1" fill="var(--brand-secondary)" />
    </svg>
  );

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'at-top'}`}>
      <div className="container navbar-container">

        <Link to="/" className="logo">
          <img src={scrolled ? logoColor : logoSemiColor} alt="verifID Logo" className="logo-img" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <Link to="/" className={`nav-item ${isHome ? 'active' : ''}`}>{t('nav.home')}</Link>

            {/* Combined Products & Solutions Mega Menu */}
            <div className={`nav-item nav-dropdown has-mega-menu ${isProdSol ? 'active' : ''}`}>
              <span>{t('nav.prod_and_sol')}</span>
              <div className="mega-menu glass-panel" onClick={handleMenuClick}>
                <div className="mega-menu-grid unified">

                  {/* Column 1: Products */}
                  <div className="mega-column products-col">
                    <h3>Productos</h3>
                    <div className="product-item">
                      <RUPFIcon />
                      <div className="prod-info">
                        <Link to="/product/rupf" className="prod-link">RUPF</Link>
                        <span className="prod-desc">Bonds & Insurance</span>
                      </div>
                    </div>
                    <div className="product-item">
                      <FIDIcon />
                      <div className="prod-info">
                        <Link to="/product/financial-id" className="prod-link">Financial ID</Link>
                        <span className="prod-desc">Regulator-Verified ID</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Compliance */}
                  <div className="mega-column">
                    <h3>{t('nav.sol.compliance')}</h3>
                    <Link to="/solution/kyc-compliance">{t('nav.sol.compliance.kyc')}</Link>
                    <Link to="/solution/aml-transaction-monitoring">{t('nav.sol.compliance.aml_monitoring')}</Link>
                    <Link to="/solution/business-verification">{t('nav.sol.compliance.kyb')}</Link>
                    <Link to="/solution/aml-compliance">{t('nav.sol.compliance.aml')}</Link>
                    <Link to="/solution/age-verification">{t('nav.sol.compliance.age')}</Link>
                    <Link to="/solution/travel-rule">{t('nav.sol.compliance.travel')}</Link>
                    <Link to="/solution/protocols">{t('nav.sol.compliance.protocols')}</Link>
                  </div>

                  {/* Column 3: Fraud */}
                  <div className="mega-column">
                    <h3>{t('nav.sol.fraud')}</h3>
                    <Link to="/solution/fraud-prevention">{t('nav.sol.fraud.prevention')}</Link>
                    <Link to="/solution/digital-footprint-checker">{t('nav.sol.fraud.digital')}</Link>
                    <Link to="/solution/money-muling">{t('nav.sol.fraud.muling')}</Link>
                    <Link to="/solution/payment-fraud">{t('nav.sol.fraud.payment')}</Link>
                    <Link to="/solution/account-takeover">{t('nav.sol.fraud.account')}</Link>
                    <Link to="/solution/multi-accounting">{t('nav.sol.fraud.multiple')}</Link>
                    <Link to="/solution/kyc-automation">{t('nav.sol.fraud.user')}</Link>
                  </div>

                  {/* Column 4: Industries (Informativo) */}
                  <div className="mega-column">
                    <h3>{t('nav.sol.industries')}</h3>
                    <span className="info-link">{t('nav.sol.ind.financial')}</span>
                    <span className="info-link">{t('nav.sol.ind.payment')}</span>
                    <span className="info-link">{t('nav.sol.ind.trading')}</span>
                    <span className="info-link">{t('nav.sol.ind.crypto')}</span>
                    <span className="info-link">{t('nav.sol.ind.igaming')}</span>
                    <span className="info-link">{t('nav.sol.ind.mobility')}</span>
                    <span className="info-link">{t('nav.sol.ind.marketplaces')}</span>
                    <span className="info-link">{t('nav.sol.ind.neobanks')}</span>
                  </div>

                </div>
              </div>
            </div>

            <Link to="/company" className={`nav-item ${isCompany ? 'active' : ''}`}>{t('nav.company')}</Link>
          </nav>

          <div className="nav-actions">
            {/* Language Selector with Flags */}
            <div className="lang-selector">
              <button className="lang-btn">
                <span>{languageFlags[language]}</span>
                <span>{language.toUpperCase()}</span>
              </button>
              <div className="lang-dropdown glass-panel">
                <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>🇺🇸 English</button>
                <button onClick={() => setLanguage('es')} className={language === 'es' ? 'active' : ''}>🇪🇸 Español</button>
                <button onClick={() => setLanguage('fr')} className={language === 'fr' ? 'active' : ''}>🇫🇷 Français</button>
                <button onClick={() => setLanguage('pt')} className={language === 'pt' ? 'active' : ''}>🇧🇷 Português</button>
                <button onClick={() => setLanguage('el')} className={language === 'el' ? 'active' : ''}>🇬🇷 Ελληνικά</button>
                <button onClick={() => setLanguage('tr')} className={language === 'tr' ? 'active' : ''}>🇹🇷 Türkçe</button>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary btn-sm">{t('nav.get_started')}</Link>
          </div>
        </div> {/* End nav-menu-wrapper */}
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all var(--transition-normal);
          padding: 1.5rem 0;
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        
        /* SCROLLED (Over light background) overrides */
        .navbar.scrolled .logo-verif {
          color: var(--text-primary);
        }
        .navbar.scrolled .nav-links > .nav-item {
          color: var(--text-secondary);
        }
        .navbar.scrolled .nav-links > .nav-item:hover {
          color: var(--text-primary);
        }
        .navbar.scrolled .lang-btn {
          color: var(--text-primary);
        }
        .navbar.scrolled .lang-btn:hover {
          background: rgba(0, 0, 0, 0.05);
        }
        .navbar.scrolled .nav-dropdown > span::after {
          color: var(--text-secondary);
        }

        /* AT-TOP (Over dark hero) overrides */
        .navbar.at-top .logo-verif {
          color: #ffffff;
        }
        .navbar.at-top .nav-links > .nav-item {
          color: rgba(255, 255, 255, 0.85);
        }
        .navbar.at-top .nav-links > .nav-item:hover {
          color: #ffffff;
        }
        .navbar.at-top .lang-btn {
          color: rgba(255, 255, 255, 0.85);
        }
        .navbar.at-top .lang-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }
        .navbar.at-top .nav-dropdown > span::after {
          color: rgba(255, 255, 255, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo-img {
          height: 44px;
          width: auto;
        }

        .nav-links {
          display: none;
          gap: 2rem;
          align-items: center;
          height: 100%;
        }

        @media (min-width: 1024px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-links > .nav-item {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          position: relative;
          padding: 1rem 0;
          transition: color var(--transition-fast);
        }

        .nav-links > .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-links > .nav-item.active {
          color: var(--brand-primary);
          font-weight: 600;
        }

        .nav-links > .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0.25rem;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--brand-primary);
          border-radius: 2px;
        }

        /* Standard Dropdown */
        .nav-dropdown {
          position: relative;
        }

        .nav-dropdown > span::after {
          content: '▾';
          margin-left: 0.25rem;
          font-size: 0.8rem;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          opacity: 0;
          visibility: hidden;
          min-width: 200px;
          padding: 0.5rem 0;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          background: var(--bg-surface);
          transition: all var(--transition-normal);
        }

        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .mega-menu a, .mega-menu .prod-link, .mega-menu .info-link {
          cursor: pointer;
        }
        
        .dropdown-item {
          padding: 0.75rem 1.5rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .dropdown-item:hover {
          background: rgba(0,0,0,0.03);
          color: var(--brand-primary);
          padding-left: 1.75rem;
        }
        body.dark .dropdown-item:hover {
          background: rgba(255,255,255,0.05);
        }

        /* Mega Menu */
        .nav-links > .nav-item.has-mega-menu {
          position: static;
        }

        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          background: #ffffff;
          border-radius: 0 0 24px 24px;
          padding: 3rem 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transform: translateY(10px);
          transition: all var(--transition-normal);
          border-top: 1px solid var(--border-color);
        }
        
        body.dark .mega-menu {
          background: #0f172a; /* Solid dark blue for contrast */
          border-top: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .navbar.at-top .mega-menu {
          background: #0f172a; /* Force dark when at top (over hero) */
          border-top: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .has-mega-menu:hover .mega-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .mega-menu-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 3rem;
          padding: 0 2rem;
        }

        .mega-menu-grid.unified {
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
        }

        .mega-column h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        body.dark .mega-column h3,
        .navbar.at-top .mega-column h3 {
          color: #ffffff;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .mega-column a,
        .mega-column .info-link {
          display: block;
          padding: 0.5rem 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
          transition: color var(--transition-fast);
        }
        
        body.dark .mega-column a,
        .navbar.at-top .mega-column a,
        body.dark .mega-column .info-link,
        .navbar.at-top .mega-column .info-link {
          color: rgba(255,255,255,0.6);
        }

        .mega-column a:hover {
          color: var(--brand-primary);
        }
        
        .mega-column .info-link {
          cursor: default;
        }

        /* Product Icons inside Mega Menu */
        .products-col {
          border-right: 1px solid var(--border-color);
          padding-right: 2rem;
        }

        .product-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          cursor: pointer;
        }

        .product-item:hover .prod-icon {
          transform: scale(1.1);
        }

        .prod-icon {
          transition: transform var(--transition-fast);
          flex-shrink: 0;
        }

        .prod-info {
          display: flex;
          flex-direction: column;
        }

        .prod-link {
          font-weight: 600;
          color: var(--text-primary) !important;
          padding: 0 !important;
          margin-bottom: 0.2rem;
        }
        
        body.dark .prod-link,
        .navbar.at-top .prod-link {
          color: #ffffff !important;
        }

        .prod-desc {
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }
        
        body.dark .prod-desc,
        .navbar.at-top .prod-desc {
          color: rgba(255,255,255,0.5);
        }

        /* Nav Actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .btn-sm {
          padding: 0.5rem 1.25rem;
          font-size: 0.9rem;
        }

        /* Language Selector */
        .lang-selector {
          position: relative;
        }

        .lang-btn {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all var(--transition-fast);
        }

        .lang-btn:hover {
          color: var(--text-primary);
          background: rgba(0,0,0,0.03);
        }
        body.dark .lang-btn:hover { background: rgba(255,255,255,0.05); }

        .lang-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: var(--bg-surface);
          border-radius: 12px;
          padding: 0.5rem;
          min-width: 170px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .lang-selector:hover .lang-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .lang-dropdown button {
          background: transparent;
          border: none;
          text-align: left;
          padding: 0.5rem 1rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 6px;
          transition: all var(--transition-fast);
        }

        .lang-dropdown button:hover {
          background: rgba(0,0,0,0.03);
          color: var(--text-primary);
        }
        body.dark .lang-dropdown button:hover { background: rgba(255,255,255,0.05); }

        .lang-dropdown button.active {
          color: var(--brand-primary);
          font-weight: 600;
          background: rgba(15, 73, 189, 0.05);
        }

        /* --- MOBILE RESPONSIVE STYLES --- */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1001; /* Above the wrapper */
        }
        .mobile-menu-btn .bar {
          width: 100%;
          height: 3px;
          background-color: var(--text-primary);
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .navbar.at-top .mobile-menu-btn .bar {
          background-color: #ffffff;
        }
        
        .mobile-menu-btn.open .bar:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .mobile-menu-btn.open .bar:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.open .bar:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        .mobile-menu-btn.open .bar {
          background-color: #ffffff !important;
        }

        @media (max-width: 1023px) {
          .mobile-menu-btn {
            display: flex;
          }

          .nav-menu-wrapper {
            position: fixed;
            top: 0;
            right: 0;
            width: 80%;
            height: 100vh;
            background: #0f172a; /* Force dark background as requested */
            box-shadow: -10px 0 50px rgba(0,0,0,0.8);
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
            display: flex;
            flex-direction: column;
            padding: 80px 2rem 2rem; /* Make room for close btn */
            overflow-y: auto;
            z-index: 1000;
          }

          .nav-menu-wrapper.open {
            transform: translateX(0);
          }
          
          /* Enforce white text over the forced dark background */
          .nav-menu-wrapper.open .nav-links > .nav-item { color: rgba(255, 255, 255, 0.85); }
          .nav-menu-wrapper.open .nav-links > .nav-item:hover { color: #ffffff; }
          .nav-menu-wrapper.open .lang-btn { color: rgba(255, 255, 255, 0.85); }
          .nav-menu-wrapper.open .lang-btn:hover { color: #ffffff; background: rgba(255, 255, 255, 0.1); }
          .nav-menu-wrapper.open .mega-column h3 { color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .nav-menu-wrapper.open .mega-column a,
          .nav-menu-wrapper.open .mega-column .info-link { color: rgba(255,255,255,0.6); }
          .nav-menu-wrapper.open .mega-column a:hover { color: var(--brand-primary); }
          .nav-menu-wrapper.open .prod-link { color: #ffffff !important; }
          .nav-menu-wrapper.open .prod-desc { color: rgba(255,255,255,0.5); }
          .nav-menu-wrapper.open .nav-dropdown > span::after { color: rgba(255, 255, 255, 0.5); }

          .nav-links {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            width: 100%;
          }

          .nav-actions {
            margin-top: 2rem;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            border-top: 1px solid var(--border-color);
            padding-top: 2rem;
            gap: 1rem;
          }

          .mega-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            background: transparent !important;
            transform: none;
            padding: 1rem 0;
            display: none;
            border: none !important;
          }
          .has-mega-menu.active .mega-menu,
          .has-mega-menu:hover .mega-menu {
            display: block;
          }

          .mega-menu-grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 0 1rem;
          }
        }

        @media (min-width: 1024px) {
          .nav-menu-wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;
            gap: 2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
