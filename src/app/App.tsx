import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Language Context
import { LanguageProvider } from './context/LanguageContext';

// SEO Meta Tags Component
import { SEOHead } from './components/SEOHead';

// Pages
import { HomePage } from './pages/HomePage';
import { ImpressumPage } from './pages/ImpressumPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Main Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieConsent } from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <SEOHead />
        <div className="min-h-screen bg-[#050B1A] text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
          <Footer />
          <ChatbotWidget />
          <ScrollToTop />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;