import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ChatbotSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="chatbot"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#0891b2]/10 text-[#0891b2] rounded-full">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <h2 className="mb-4">{t('chatbotTitle')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('chatbotDescription')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0891b2] to-[#0e7490] p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-1">D-Care24+ Assistant</h3>
                  <p className="text-white/80 text-sm">Ask me anything about our services</p>
                </div>
              </div>
            </div>

            <div className="relative" style={{ height: '700px' }}>
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/-QhniFAa0lbTeOvSdrJzf"
                width="100%"
                style={{
                  height: '700px',
                  border: 'none',
                }}
                title="D-Care24+ Chatbot Assistant"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
