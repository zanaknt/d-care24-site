import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SEOHead: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Set HTML lang attribute based on current language
    document.documentElement.lang = language === 'de' ? 'de' : 'en';

    // Set title based on language
    const titles = {
      en: 'D-Care24+ – 24-Hour Home Care in Austria | Legal & Professional Support',
      de: 'D-Care24+ – 24-Stunden-Betreuung in Österreich | Legal & Professionell',
    };
    document.title = titles[language];

    // Create meta tags
    const metaTags = [
      {
        name: 'description',
        content:
          '24-Stunden Betreuung in Österreich und Oberösterreich. Professional 24-hour home care services for elderly and people in need. Legal, transparent, and compassionate care across Austria including Linz, Wels, Steyr.',
      },
      {
        name: 'keywords',
        content:
          '24 Stunden Betreuung Österreich, 24-Stunden Pflege Oberösterreich, Linz 24-Stunden Betreuung, elderly home care Austria, 24 hour home care Austria, live-in caregivers Austria, Seniorenbetreuung Linz, Pflegedienst Oberösterreich, home care Wels, Altenpflege Steyr, 24h Betreuung Vöcklabruck',
      },
      // Open Graph tags
      { property: 'og:title', content: 'D-Care24+ – Professional 24-Hour Home Care in Austria' },
      {
        property: 'og:description',
        content:
          '24-Stunden Betreuung in Österreich. Legal and compassionate elderly care services across Austria and Upper Austria.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.d-care24.at' },
      { property: 'og:image', content: 'https://www.d-care24.at/og-image.jpg' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'D-Care24+ – 24-Hour Home Care in Austria' },
      {
        name: 'twitter:description',
        content:
          '24-Stunden Betreuung in Österreich. Professional and legal elderly care services.',
      },
    ];

    // Apply meta tags
    metaTags.forEach((tag) => {
      const existingTag = document.querySelector(
        `meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`
      );
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add hreflang tags
    const hreflangs = [
      { lang: 'de', href: 'https://www.d-care24.at/de' },
      { lang: 'en', href: 'https://www.d-care24.at/en' },
      { lang: 'x-default', href: 'https://www.d-care24.at' },
    ];

    hreflangs.forEach((link) => {
      const hreflangLink = document.createElement('link');
      hreflangLink.rel = 'alternate';
      hreflangLink.hreflang = link.lang;
      hreflangLink.href = link.href;
      document.head.appendChild(hreflangLink);
    });

    // Add JSON-LD Structured Data
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        // LocalBusiness Schema
        {
          '@type': 'MedicalBusiness',
          '@id': 'https://www.d-care24.at/#organization',
          name: 'D-Care24+',
          url: 'https://www.d-care24.at',
          telephone: '+43 670 404 73 22',
          email: 'office@d-care24.at',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Linz',
            addressRegion: 'Oberösterreich',
            addressCountry: 'AT',
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Linz',
            },
            {
              '@type': 'City',
              name: 'Wels',
            },
            {
              '@type': 'City',
              name: 'Steyr',
            },
            {
              '@type': 'City',
              name: 'Vöcklabruck',
            },
            {
              '@type': 'State',
              name: 'Oberösterreich',
            },
            {
              '@type': 'Country',
              name: 'Austria',
            },
          ],
          priceRange: '€€',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
          description:
            'Professional 24-hour home care services for elderly and people in need across Austria, with focus on Upper Austria (Oberösterreich). Legal, transparent, and compassionate care.',
        },
        // FAQPage Schema
        {
          '@type': 'FAQPage',
          '@id': 'https://www.d-care24.at/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is 24-hour home care (24-Stunden Betreuung)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '24-hour home care provides around-the-clock support for elderly or people in need, allowing them to stay in their own homes. Our caregivers live with the client and provide comprehensive assistance with daily activities, personal care, and companionship.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does 24-hour home care cost in Austria?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The cost of 24-hour home care in Austria typically ranges from €2,200 to €3,500 per month, depending on the level of care required. Additional services like night shifts may increase the cost. We provide transparent pricing and help you understand all available funding options.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is 24-hour home care legal in Austria?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, 24-hour home care is completely legal in Austria when provided by properly registered caregivers. D-Care24+ ensures all our caregivers are legally employed and registered according to Austrian regulations.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you provide service in Oberösterreich (Upper Austria)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, we provide comprehensive 24-hour home care services throughout Oberösterreich, including Linz, Wels, Steyr, Vöcklabruck, and all surrounding areas.',
              },
            },
            {
              '@type': 'Question',
              name: 'What languages do your caregivers speak?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our caregivers are multilingual and speak German, Slovak, Czech, and English, ensuring effective communication with clients and their families.',
              },
            },
          ],
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove added meta tags and scripts on unmount (if needed)
    };
  }, [language]);

  return null;
};