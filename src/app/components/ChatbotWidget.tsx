import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Show preview bubble after 2 seconds on page load
    const timer = setTimeout(() => setShowPreview(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preview Bubble */}
      <AnimatePresence>
        {showPreview && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 md:right-8 z-50"
          >
            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-2xl rounded-br-none shadow-2xl shadow-cyan-500/50 max-w-[260px] sm:max-w-xs">
              <button
                onClick={() => setShowPreview(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="pr-4 text-sm md:text-base">{t('chatbot.greeting')}</p>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-blue-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip on Hover */}
      <AnimatePresence>
        {showTooltip && !isOpen && !showPreview && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 md:right-8 z-50 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl text-gray-800 text-sm whitespace-nowrap"
          >
            {t('chatbot.tooltip')}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPreview(false);
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 flex items-center justify-center transition-all"
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 sm:bottom-24 md:bottom-28 right-2 sm:right-4 md:right-8 z-40 w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] max-w-md"
          >
            <div className="bg-[#0A1628] border-2 border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-semibold">
                      {t('chatbot.title')}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm">{t('chatbot.subtitle')}</p>
                  </div>
                </div>
              </div>

              {/* Chatbot Iframe */}
              <div className="relative h-[400px] sm:h-[450px] md:h-[600px]">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/-QhniFAa0lbTeOvSdrJzf"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="D-Care24+ Chatbot Assistant"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};