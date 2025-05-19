import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BottomNav from '@/components/layout/BottomNav';
import LandingPage from '@/pages/LandingPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CollaboratePage from '@/pages/CollaboratePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactPage from '@/pages/ContactPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import LicensesPage from '@/pages/LicensesPage';
import PrivacyCenterPage from '@/pages/PrivacyCenterPage';
import CookiesPage from '@/pages/CookiesPage';
import CookiePreferencesPage from '@/pages/CookiePreferencesPage';
import InvestorsPage from '@/pages/InvestorsPage'; 
import DeveloperPortalPage from '@/pages/DeveloperPortalPage';
import DashboardPage from '@/pages/DashboardPage'; 
import CookieConsentPopup from '@/components/layout/CookieConsentPopup';
import { AnimatePresence } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <div className="flex flex-col min-h-screen bg-wakupay-light dark:bg-wakupay-dark text-wakupay-dark dark:text-wakupay-light">
      {!isDashboardPage && <Navbar />}
      <main className={`flex-grow ${isDashboardPage ? '' : 'pb-16 md:pb-0'}`}>
        {children}
      </main>
      {!isDashboardPage && <Footer />}
      {isDashboardPage && <BottomNav />}
    </div>
  );
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/colabora" element={<CollaboratePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/terminos-y-condiciones" element={<TermsPage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/licencias" element={<LicensesPage />} />
        <Route path="/centro-de-privacidad" element={<PrivacyCenterPage />} />
        <Route path="/politica-de-cookies" element={<CookiesPage />} />
        <Route path="/preferencias-de-cookies" element={<CookiePreferencesPage />} />
        <Route path="/inversionistas" element={<InvestorsPage />} />
        <Route path="/portal-desarrolladores" element={<DeveloperPortalPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wakupay_cookie_consent');
    if (!consent) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('wakupay_cookie_consent', 'accepted');
    setShowCookiePopup(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('wakupay_cookie_consent', 'declined');
    setShowCookiePopup(false);
  };
	
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <AnimatedRoutes />
      </LayoutWrapper>
      <Toaster />
      {showCookiePopup && (
        <CookieConsentPopup 
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies} 
        />
      )}
    </Router>
	);
}

export default App;