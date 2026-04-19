import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Calculator, Euro } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PriceCalculator: React.FC = () => {
  const [careLevel, setCareLevel] = useState<'basic' | 'medium' | 'intensive'>('basic');
  const [nightShift, setNightShift] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const basePrices = { basic: 2200, medium: 2800, intensive: 3500 };
    setEstimatedCost(basePrices[careLevel] + (nightShift ? 600 : 0));
  }, [careLevel, nightShift]);

  const careLevels = [
    { value: 'basic', label: t('pricing.basic'), desc: t('pricing.basic.desc') },
    { value: 'medium', label: t('pricing.medium'), desc: t('pricing.medium.desc') },
    { value: 'intensive', label: t('pricing.intensive'), desc: t('pricing.intensive.desc') },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-[#050B1A] to-[#0A1628]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 text-sm">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent px-4">
            {t('pricing.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/20"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
            {/* Left: Inputs */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <label className="block mb-4 text-white text-base md:text-lg">
                  {t('pricing.careLevel')}
                </label>
                <div className="space-y-3">
                  {careLevels.map((level) => (
                    <motion.button
                      key={level.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCareLevel(level.value as any)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        careLevel === level.value
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 hover:border-cyan-500/50 bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm md:text-base break-words pr-2">
                          {level.label}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            careLevel === level.value ? 'border-cyan-500' : 'border-gray-500'
                          }`}
                        >
                          {careLevel === level.value && (
                            <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                          )}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 break-words">
                        {level.desc}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={nightShift}
                    onChange={(e) => setNightShift(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-14 h-8 rounded-full transition-colors ${
                      nightShift ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  />
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      nightShift ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </div>
                <span className="ml-3 text-white text-sm md:text-base break-words">
                  {t('pricing.nightShift')}
                </span>
              </label>
            </div>

            {/* Right: Results */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 md:p-8 border border-cyan-500/20">
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {t('pricing.estimated')}
              </p>
              <motion.div
                key={estimatedCost}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 mb-6"
              >
                <Euro className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
                <span className="text-4xl md:text-5xl text-cyan-400">
                  {estimatedCost.toLocaleString()}
                </span>
              </motion.div>
              <p className="text-xs md:text-sm text-gray-400 mb-6">{t('pricing.perMonth')}</p>
              <div className="w-full space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>{t('pricing.baseCare')}</span>
                  <span>
                    €
                    {careLevel === 'basic'
                      ? '2,200'
                      : careLevel === 'medium'
                        ? '2,800'
                        : '3,500'}
                  </span>
                </div>
                {nightShift && (
                  <div className="flex justify-between text-gray-300">
                    <span>{t('pricing.nightShiftLabel')}</span>
                    <span>€600</span>
                  </div>
                )}
                <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between text-white font-semibold">
                  <span>{t('pricing.total')}</span>
                  <span>€{estimatedCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-500/5 px-6 md:px-8 py-4 border-t border-cyan-500/10">
            <p className="text-xs md:text-sm text-gray-400 text-center break-words">
              {t('pricing.disclaimer')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
