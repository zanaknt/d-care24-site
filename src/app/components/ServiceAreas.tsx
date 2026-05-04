import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import svgPaths from '../../imports/svg-s1hgxcjt1a';

export const ServiceAreas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close card when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActiveRegion(null);
      }
    };

    if (activeRegion) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeRegion]);

  const regions = [
    {
      id: 'upper-austria',
      name: t('areas.upperAustria'),
      cities: ['Linz', 'Wels', 'Steyr', 'Traun', 'Vöcklabruck', 'Leonding', 'Ansfelden'],
      color: 'cyan',
      featured: true,
      position: { top: '42%', left: '35%' },
    },
    {
      id: 'vienna',
      name: t('areas.vienna'),
      cities: ['Vienna', 'All districts'],
      color: 'blue',
      featured: false,
      position: { top: '46%', left: '62%' },
    },
    {
      id: 'lower-austria',
      name: t('areas.lowerAustria'),
      cities: ['St. Pölten', 'Wiener Neustadt', 'Klosterneuburg', 'Baden'],
      color: 'purple',
      featured: false,
      position: { top: '50%', left: '52%' },
    },
    {
      id: 'rest-austria',
      name: t('areas.restAustria'),
      cities: ['Salzburg', 'Innsbruck', 'Graz', 'Klagenfurt', 'Bregenz'],
      color: 'emerald',
      featured: false,
      position: { top: '58%', left: '28%' },
    },
  ];

  const handleRegionClick = (regionId: string) => {
    setActiveRegion(activeRegion === regionId ? null : regionId);
  };

  const handleRegionHover = (regionId: string | null) => {
    // Only set hover on desktop (lg and up) when no card is actively open
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && !activeRegion) {
      setActiveRegion(regionId);
    }
  };

  return (
    <section
      id="service-areas"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-[#FAFAF8] to-[#EDF2EE] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Österreichweit verfügbar</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#183028] px-4 break-words">
            {t('areas.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-stone-600 max-w-3xl mx-auto px-4 leading-relaxed break-words">
            {t('areas.subtitle')}
          </p>
        </motion.div>

        {/* Desktop: Interactive Austria Map */}
        <div className="max-w-6xl mx-auto">
          <div className="hidden lg:block relative h-[600px] mb-12">
            {/* Austria Map SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 909.5 466.6"
                className="w-full h-full"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(46, 122, 86, 0.18))',
                  maxWidth: '800px',
                  maxHeight: '500px'
                }}
              >
                <g id="austria-map">
                  {/* AT4 - Upper Austria (Oberösterreich) - HIGHLIGHTED */}
                  <path
                    d={svgPaths.p1f630e00}
                    fill="rgba(46, 122, 86, 0.22)"
                    stroke="rgba(21, 128, 61, 1)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{
                      animationDuration: '3s',
                      filter: 'drop-shadow(0 0 10px rgba(21, 128, 61, 0.45))'
                    }}
                  />

                  {/* Other Austrian states - white silhouette */}
                  <path d={svgPaths.p1b3dde00} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.p22e65b00} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.p23582f00} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.paca2580} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.p12baff00} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.p36cbee80} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.p2fd98c00} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                  <path d={svgPaths.p3a41bb80} fill="rgba(100, 160, 130, 0.12)" stroke="rgba(80, 130, 100, 0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
                </g>
              </svg>
            </div>

            {/* Info card - only shown when activeRegion is set */}
            <AnimatePresence>
              {activeRegion && (
                <motion.div
                  ref={cardRef}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <div
                    className={`w-[380px] bg-white rounded-3xl p-7 shadow-xl border-2 ${
                      regions.find(r => r.id === activeRegion)?.featured
                        ? 'border-emerald-400/60'
                        : 'border-stone-200'
                    }`}
                    style={{
                      boxShadow: regions.find(r => r.id === activeRegion)?.featured
                        ? '0 8px 40px rgba(21, 128, 61, 0.18)'
                        : '0 8px 40px rgba(0, 0, 0, 0.10)'
                    }}
                  >
                    {(() => {
                      const region = regions.find(r => r.id === activeRegion);
                      if (!region) return null;

                      return (
                        <>
                          {/* Header */}
                          <div className="flex items-start justify-between mb-5">
                            <h4 className={`text-xl font-bold ${
                              region.featured ? 'text-emerald-700' : 'text-[#183028]'
                            }`}>
                              {region.name}
                            </h4>
                            <div className="flex items-center gap-2">
                              {region.featured && (
                                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200 font-medium">
                                  Schwerpunkt
                                </span>
                              )}
                              <button
                                onClick={() => setActiveRegion(null)}
                                className="lg:hidden w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Close"
                              >
                                <X className="w-4 h-4 text-gray-300" />
                              </button>
                            </div>
                          </div>

                          {/* Cities */}
                          <div className="flex flex-wrap gap-2">
                            {region.cities.map((city, idx) => (
                              <span
                                key={idx}
                                className="text-sm bg-stone-50 text-stone-700 px-3.5 py-2 rounded-xl border border-stone-200 hover:border-emerald-400/50 hover:bg-emerald-50/50 transition-all"
                              >
                                {city}
                              </span>
                            ))}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile & Tablet: Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 md:gap-6 mb-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`bg-white rounded-2xl p-5 md:p-6 border ${
                  region.featured ? 'border-emerald-400/60 shadow-md shadow-emerald-600/10' : 'border-stone-200'
                } hover:border-emerald-400/60 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-emerald-600/10`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      region.featured ? 'bg-cyan-400 animate-pulse ring-4 ring-cyan-400/20' : `bg-${region.color}-400`
                    } mt-1.5 flex-shrink-0`}
                  />
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg text-[#183028] break-words">
                      {region.name}
                    </h3>
                    {region.featured && (
                      <span className="inline-block mt-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                        Schwerpunkt
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-6">
                  {region.cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-stone-600 bg-stone-50 px-2 py-1 rounded-md border border-stone-200 break-words"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-sm md:text-base lg:text-lg text-stone-500 max-w-3xl mx-auto px-4 leading-relaxed break-words">
            <strong className="text-[#183028]">{t('areas.specialization')}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};