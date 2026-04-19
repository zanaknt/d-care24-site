import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.pricing'), id: 'booking' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
    { code: 'cz', label: 'Čeština', flag: '🇨🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
    // Navigate with language query parameter
    navigate(`${location.pathname}?lang=${langCode}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050B1A]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Larger and more visible */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/logo_white.png"
              alt="D-Care24+"
              className="h-10 md:h-12 object-contain transition-all duration-300 group-hover:scale-105"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-base tracking-wide"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Dropdown - Elegant Design */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-medium text-sm">
                  {currentLanguage?.code.toUpperCase()}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    isLangDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-[#0A1628] border border-white/20 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-cyan-500/10 transition-colors ${
                          language === lang.code
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'text-gray-300'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium text-sm">{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-cyan-400 text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A1628] border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 text-base"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        language === lang.code
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/30'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdown */}
      {isLangDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLangDropdownOpen(false)}
        />
      )}
    </header>
  );
};