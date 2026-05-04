import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, UserCheck, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
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

  const steps = [
    {
      icon: PhoneCall,
      number: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc'),
    },
    {
      icon: UserCheck,
      number: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc'),
    },
    {
      icon: Home,
      number: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc'),
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-[#FAFAF8] to-[#EDF2EE] relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#183028] px-4">
            {t('howItWorks.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connection line on desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-emerald-400/60 transition-all duration-300 h-full text-center group shadow-sm hover:shadow-lg hover:shadow-emerald-600/10">
                {/* Number badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-700/40 text-base font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl mb-3 text-[#183028] break-words">{step.title}</h3>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed break-words">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
