import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-[#F5F0E8] to-[#FAFAF8]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-50 text-amber-700 rounded-full border border-amber-200 text-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Häufige Fragen</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#183028] px-4">
            {t('faq.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-stone-600 max-w-2xl mx-auto px-4">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-emerald-400/50 transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left gap-4 group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base md:text-lg text-[#183028] group-hover:text-emerald-700 transition-colors pr-4 break-words flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-stone-600 leading-relaxed border-t border-stone-200 pt-4 break-words">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
