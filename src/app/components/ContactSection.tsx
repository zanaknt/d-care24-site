import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, Check, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = t('validation.nameRequired');
    if (!formData.phone.trim()) newErrors.phone = t('validation.phoneRequired');
    else if (!/^\+?[\d\s\-()]+$/.test(formData.phone))
      newErrors.phone = t('validation.phoneInvalid');
    if (!formData.email.trim()) newErrors.email = t('validation.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t('validation.emailInvalid');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-[#0A1628] to-[#050B1A]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent px-4">
            {t('contact.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl shadow-cyan-500/20">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-500">
                  <Check className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-xl md:text-2xl text-emerald-400 mb-2">
                  {t('contact.success')}
                </h3>
                <p className="text-gray-300">{t('contact.successMessage')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-white text-sm md:text-base">
                    {t('contact.name')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm md:text-base ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder={t('contact.name')}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs md:text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-white text-sm md:text-base">
                    {t('contact.phone')} *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm md:text-base ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="+43 123 456789"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs md:text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white text-sm md:text-base">
                    {t('contact.email')} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm md:text-base ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs md:text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white text-sm md:text-base">
                    {t('contact.message')}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all resize-none text-sm md:text-base"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 text-sm md:text-base font-semibold"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </motion.button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center space-y-2 text-sm md:text-base text-gray-300 px-4">
            <p>
              <strong className="text-white">{t('contact.emailLabel')}</strong>{' '}
              <a
                href="mailto:office@d-care24.at"
                className="text-cyan-400 hover:underline break-words"
              >
                office@d-care24.at
              </a>
            </p>
            <p>
              <strong className="text-white">{t('contact.phoneLabel')}</strong>{' '}
              <a href="tel:+436704047322" className="text-cyan-400 hover:underline">
                0670 4047322
              </a>{' '}
              / +43 670 404 73 22
            </p>
            <p className="text-xs md:text-sm text-gray-400">{t('contact.available')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
