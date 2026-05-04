import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Background images for the hero slider
const HERO_BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1773227060446-93239a553f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'https://images.unsplash.com/photo-1765896387398-1e1ae8d2eb85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'https://images.unsplash.com/photo-1772791002745-e9d5a1ff81bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change background images every 5 seconds
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
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-12 overflow-hidden">
      {/* Background Image Slider - More Visible */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${HERO_BACKGROUND_IMAGES[currentImageIndex]})`,
              }}
            />
            {/* Warm overlay preserving image visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/65 via-stone-900/55 to-stone-900/65" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle warm decorative elements */}
      <div className="absolute inset-0 z-[1] opacity-25">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-pulse"
             style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent break-words"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-emerald-300 font-semibold break-words"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed break-words"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToContact}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-lg shadow-emerald-800/40 hover:shadow-emerald-800/60 flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
                aria-label="Request free consultation"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/75 text-white rounded-lg font-semibold hover:bg-white hover:text-[#1C3228] transition-all duration-300 text-sm md:text-base w-full sm:w-auto"
                aria-label="Learn more about our services"
              >
                {t('hero.cta.secondary')}
              </button>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              className="mt-8 md:mt-12 inline-block bg-white/95 backdrop-blur-sm px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-full shadow-lg"
            >
              <p className="text-[#050B1A] font-bold text-xs md:text-sm lg:text-base">
                {t('hero.badge')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};