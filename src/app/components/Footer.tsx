import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t('footer.impressum'), href: '/impressum' },
    { label: t('footer.privacy'), href: '/privacy-policy' },
    { label: t('footer.terms'), href: '/terms' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1628] border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            {/* Logo */}
            <img
              src="/logo-white.svg"
              alt="D-Care24+"
              className="h-10 object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed break-words">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white mb-4 text-base md:text-lg">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-words"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-words text-left"
                >
                  {t('footer.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-white mb-4 text-base md:text-lg">{t('footer.contact')}</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="break-words">
                Email:{' '}
                <a href="mailto:office@d-care24.at" className="text-cyan-400 hover:underline">
                  office@d-care24.at
                </a>
              </p>
              <p className="break-words">
                Phone:{' '}
                <a href="tel:+436704047322" className="text-cyan-400 hover:underline">
                  0670 4047322
                </a>
              </p>
              <p className="break-words">{t('contact.available')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-1 text-gray-400 text-center">
              <span>© 2025 D-Care24+ |</span>
              <span>{t('footer.poweredBy')}</span>
              <a
                href="https://www.digized.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                digized.io
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{t('footer.inAustria')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};