import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Heart,
      title: t('services.care.title'),
      description: t('services.care.desc'),
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Shield,
      title: t('services.legal.title'),
      description: t('services.legal.desc'),
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Users,
      title: t('services.multilingual.title'),
      description: t('services.multilingual.desc'),
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Clock,
      title: t('services.support.title'),
      description: t('services.support.desc'),
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#050B1A] to-[#0A1628]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent px-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors break-words">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed break-words">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
