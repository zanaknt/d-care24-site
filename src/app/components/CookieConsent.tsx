import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const scrollToPrivacy = () => {
    const element = document.getElementById('privacy-policy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 max-w-[calc(100vw-5rem)] sm:max-w-sm"
        >
          <div className="bg-gradient-to-br from-[#0A1628] to-[#050B1A] border-2 border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold text-sm">Cookie Notice</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                We use cookies to improve your browsing experience, provide basic analytics, and
                remember your preferences. By continuing to use this site, you agree to our use of
                cookies.{' '}
                <button
                  onClick={scrollToPrivacy}
                  className="text-cyan-400 hover:underline inline"
                >
                  Learn more
                </button>
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30"
                >
                  Accept All
                </button>
                <button
                  onClick={handleEssentialOnly}
                  className="w-full px-4 py-2.5 border-2 border-white/10 text-gray-300 rounded-lg font-semibold text-sm hover:border-cyan-500/50 hover:text-white transition-all"
                >
                  Only Essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};