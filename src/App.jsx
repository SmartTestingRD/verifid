import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import PlatformIntro from './components/PlatformIntro';
import MiddleCTA from './components/MiddleCTA';
import Products from './components/Products';
import SolutionsCarousel from './components/SolutionsCarousel';
import PartnerSumsub from './components/PartnerSumsub';
import Services from './components/Services';
import SloganBanner from './components/SloganBanner';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProductRUPF from './pages/ProductRUPF';
import ProductFinancialID from './pages/ProductFinancialID';
import SolutionPage from './pages/SolutionPage';
import Company from './pages/Company';
import './App.css';

// Main Home Page Component
const Home = () => (
  <div className="home-container">
    <Hero />
    <Partners />
    <PlatformIntro />
    <MiddleCTA />
    <Products />
    <SolutionsCarousel />
    <PartnerSumsub />
    <Services />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/rupf" element={<ProductRUPF />} />
                <Route path="/product/financial-id" element={<ProductFinancialID />} />
                <Route path="/solution/:slug" element={<SolutionPage />} />
                <Route path="/company" element={<Company />} />
              </Routes>
            </main>
            <SloganBanner />
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
