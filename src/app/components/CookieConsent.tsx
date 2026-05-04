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
          <div className="bg-white border border-stone-200 rounded-2xl shadow-xl shadow-stone-200/60 overflow-hidden">
            {/* Header */}
            <div className="bg-emerald-50 px-4 py-3 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-emerald-600" />
                <h3 className="text-stone-800 font-semibold text-sm">Cookie-Hinweis</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-stone-400 hover:text-stone-700 transition-colors"
                aria-label="Close cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-4">
                Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und grundlegende Analysen zu ermöglichen.{' '}
                <button
                  onClick={scrollToPrivacy}
                  className="text-emerald-700 hover:underline inline"
                >
                  Mehr erfahren
                </button>
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold text-sm hover:from-emerald-700 hover:to-teal-800 transition-all shadow-md shadow-emerald-700/20"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={handleEssentialOnly}
                  className="w-full px-4 py-2.5 border-2 border-stone-300 text-stone-600 rounded-lg font-semibold text-sm hover:border-emerald-500/60 hover:text-stone-800 transition-all"
                >
                  Nur Notwendige
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};