import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HERO_BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1773227060446-93239a553f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  'https://images.unsplash.com/photo-1765896387398-1e1ae8d2eb85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  'https://images.unsplash.com/photo-1772791002745-e9d5a1ff81bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F8F4EE] via-[#FAFAF8] to-[#EDF2EE] pt-20 md:pt-24 pb-12 overflow-hidden"
    >
      {/* Soft decorative background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-8 lg:py-0">

          {/* Left: text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
              Österreich · Legal · 24-Stunden-Betreuung
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 md:mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#183028] break-words"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-lg md:text-xl lg:text-2xl mb-3 text-emerald-700 font-semibold break-words"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-stone-600 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed break-words"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContact}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-md shadow-emerald-700/25 hover:shadow-lg hover:shadow-emerald-700/35 flex items-center justify-center gap-2 text-sm md:text-base"
                aria-label="Kostenloses Erstgespräch anfragen"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-emerald-600 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 text-sm md:text-base"
                aria-label="Unsere Leistungen kennenlernen"
              >
                {t('hero.cta.secondary')}
              </button>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-8 pt-6 border-t border-stone-200/80"
            >
              <p className="text-[#183028] font-semibold text-sm md:text-base">
                {t('hero.badge')}
              </p>
            </motion.div>
          </div>

          {/* Right: photo slider */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/15 border-4 border-white"
                >
                  <img
                    src={HERO_BACKGROUND_IMAGES[currentImageIndex]}
                    alt="Professionelle 24h-Betreuung"
                    className="w-full h-[280px] sm:h-[360px] lg:h-[480px] object-cover"
                    loading="eager"
                  />
                  {/* Very subtle warm bottom gradient for caption area */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slider dots */}
              <div className="flex gap-2 justify-center mt-4">
                {HERO_BACKGROUND_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentImageIndex(i)}
                    aria-label={`Bild ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentImageIndex
                        ? 'bg-emerald-600 w-6'
                        : 'bg-stone-300 w-2 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
