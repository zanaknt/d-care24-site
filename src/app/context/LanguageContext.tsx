import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'sk' | 'cz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Professional 24-Hour Home Care Across Austria',
    'hero.subtitle': 'Legal. Loving. Nationwide.',
    'hero.description':
      'We provide experienced, trustworthy caregivers for 24-hour home care for elderly and people in need across Austria. Fully compliant with Austrian regulations, ensuring legal certainty and peace of mind for your family.',
    'hero.cta.primary': 'Request Free Consultation',
    'hero.cta.secondary': 'Learn More',
    'hero.badge': '24/7 Available',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional 24-hour home care tailored to your needs',
    'services.care.title': 'Compassionate Care',
    'services.care.desc':
      'Experienced caregivers provide loving, personalized support. We maintain dignity and independence while offering needed assistance.',
    'services.legal.title': 'Legal & Transparent',
    'services.legal.desc':
      'Fully compliant with Austrian regulations. All caregivers legally registered and insured with complete pricing transparency.',
    'services.multilingual.title': 'Multilingual Service',
    'services.multilingual.desc':
      'Caregivers speak German, Slovak, Czech, Russian, and English for effective communication and cultural compatibility.',
    'services.support.title': '24/7 Support',
    'services.support.desc':
      'Round-the-clock care ensuring safety and comfort. Our coordinators are always available for any concerns.',

    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.step1.title': 'Free Consultation',
    'howItWorks.step1.desc':
      'Contact us for a free consultation. We discuss your needs and create a personalized care plan.',
    'howItWorks.step2.title': 'Caregiver Placement',
    'howItWorks.step2.desc':
      'We match you with qualified caregivers who speak your preferred language.',
    'howItWorks.step3.title': '24h Care Starts',
    'howItWorks.step3.desc':
      'Professional, loving care begins immediately with continuous quality monitoring.',

    // Pricing
    'pricing.title': 'Price Calculator',
    'pricing.subtitle': 'Get an instant estimate for 24-hour home care in Austria',
    'pricing.careLevel': 'Care Level',
    'pricing.basic': 'Basic Care',
    'pricing.basic.desc': 'Daily assistance & companionship',
    'pricing.medium': 'Medium Care',
    'pricing.medium.desc': 'Medical monitoring & personal care',
    'pricing.intensive': 'Intensive Care',
    'pricing.intensive.desc': 'Advanced medical care',
    'pricing.nightShift': 'Night Shift Required',
    'pricing.estimated': 'Estimated Monthly Cost',
    'pricing.perMonth': 'per month',
    'pricing.baseCare': 'Base Care:',
    'pricing.nightShiftLabel': 'Night Shift:',
    'pricing.total': 'Total:',
    'pricing.disclaimer': '* Prices are estimates. Final costs may vary.',

    // Service Areas
    'areas.title': 'Service Areas in Austria',
    'areas.subtitle': 'Professional home care across Austria with focus on Upper Austria',
    'areas.upperAustria': 'Upper Austria',
    'areas.vienna': 'Vienna',
    'areas.lowerAustria': 'Lower Austria',
    'areas.restAustria': 'Rest of Austria',
    'areas.specialization': 'Specializing in Linz, Wels, Steyr, and all of Upper Austria',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions about 24-hour home care in Austria',
    'faq.q1': 'What is 24-hour home care?',
    'faq.a1':
      '24-hour home care provides around-the-clock support, allowing elderly to stay in their homes with comprehensive assistance.',
    'faq.q2': 'How much does it cost in Austria?',
    'faq.a2':
      'Costs typically range from €2,200 to €3,500 per month depending on care level. We help with funding options and subsidies.',
    'faq.q3': 'Is it legal in Austria?',
    'faq.a3':
      'Yes, completely legal when provided by registered caregivers. We ensure full compliance with Austrian regulations.',
    'faq.q4': 'Do you serve Upper Austria?',
    'faq.a4':
      'Yes, we serve all of Upper Austria including Linz, Wels, Steyr, and surrounding areas.',
    'faq.q5': 'What languages do caregivers speak?',
    'faq.a5':
      'Our caregivers speak German, Slovak, Czech, Russian, and English.',

    // Contact
    'contact.title': 'Request a Callback',
    'contact.subtitle': 'We will contact you within 24 hours',
    'contact.name': 'Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your care needs...',
    'contact.send': 'Send Request',
    'contact.success': 'Success!',
    'contact.successMessage': 'Thank you! We will contact you soon.',
    'contact.emailLabel': 'Email:',
    'contact.phoneLabel': 'Phone:',
    'contact.available': 'Available 24/7',

    // Footer
    'footer.description': 'Professional 24-hour home care across Austria.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.poweredBy': 'Powered by',
    'footer.madeWith': 'Made with',
    'footer.inAustria': 'in Austria',

    // Chatbot
    'chatbot.tooltip': 'D-Care24+ Assistant',
    'chatbot.greeting': 'Hi! How can we help you?',
    'chatbot.title': 'D-Care24+ Assistant',
    'chatbot.subtitle': 'Ask me anything',

    // Validation
    'validation.nameRequired': 'Name is required',
    'validation.phoneRequired': 'Phone is required',
    'validation.phoneInvalid': 'Invalid phone number',
    'validation.emailRequired': 'Email is required',
    'validation.emailInvalid': 'Invalid email',
  },
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.pricing': 'Preise',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Professionelle 24-Stunden-Betreuung in ganz Österreich',
    'hero.subtitle': 'Legal. Liebevoll. Österreichweit.',
    'hero.description':
      'Wir vermitteln erfahrene Betreuer für 24-Stunden-Betreuung älterer Menschen in ganz Österreich. Vollständig konform mit österreichischen Vorschriften für rechtliche Sicherheit.',
    'hero.cta.primary': 'Kostenlose Beratung',
    'hero.cta.secondary': 'Mehr erfahren',
    'hero.badge': '24/7 Verfügbar',

    // Services
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Professionelle 24-Stunden-Betreuung nach Maß',
    'services.care.title': 'Liebevolle Pflege',
    'services.care.desc':
      'Erfahrene Betreuer bieten persönliche Unterstützung. Wir wahren Würde und Unabhängigkeit.',
    'services.legal.title': 'Legal & Transparent',
    'services.legal.desc':
      'Konform mit österreichischen Vorschriften. Alle Betreuer legal angemeldet und versichert.',
    'services.multilingual.title': 'Mehrsprachig',
    'services.multilingual.desc':
      'Betreuer sprechen Deutsch, Slowakisch, Tschechisch, Russisch und Englisch.',
    'services.support.title': '24/7 Unterstützung',
    'services.support.desc':
      'Rund-um-die-Uhr Betreuung. Koordinatoren jederzeit verfügbar.',

    // How It Works
    'howItWorks.title': 'So funktioniert es',
    'howItWorks.step1.title': 'Kostenlose Beratung',
    'howItWorks.step1.desc':
      'Kontaktieren Sie uns für eine Beratung. Wir erstellen einen Pflegeplan.',
    'howItWorks.step2.title': 'Betreuer-Vermittlung',
    'howItWorks.step2.desc':
      'Wir vermitteln qualifizierte Betreuer in Ihrer Sprache.',
    'howItWorks.step3.title': '24h-Betreuung beginnt',
    'howItWorks.step3.desc':
      'Professionelle Betreuung beginnt sofort mit Qualitätskontrolle.',

    // Pricing
    'pricing.title': 'Preisrechner',
    'pricing.subtitle': 'Sofort-Schätzung für 24-Stunden-Betreuung',
    'pricing.careLevel': 'Pflegestufe',
    'pricing.basic': 'Basis-Pflege',
    'pricing.basic.desc': 'Tägliche Unterstützung',
    'pricing.medium': 'Mittlere Pflege',
    'pricing.medium.desc': 'Medizinische Überwachung',
    'pricing.intensive': 'Intensive Pflege',
    'pricing.intensive.desc': 'Erweiterte Pflege',
    'pricing.nightShift': 'Nachtdienst erforderlich',
    'pricing.estimated': 'Geschätzte Kosten',
    'pricing.perMonth': 'pro Monat',
    'pricing.baseCare': 'Basis:',
    'pricing.nightShiftLabel': 'Nachtdienst:',
    'pricing.total': 'Gesamt:',
    'pricing.disclaimer': '* Preise sind Schätzungen.',

    // Service Areas
    'areas.title': 'Einsatzgebiete',
    'areas.subtitle': 'Professionelle Pflege in ganz Österreich',
    'areas.upperAustria': 'Oberösterreich',
    'areas.vienna': 'Wien',
    'areas.lowerAustria': 'Niederösterreich',
    'areas.restAustria': 'Rest Österreichs',
    'areas.specialization': 'Spezialisiert auf Linz, Wels, Steyr',

    // FAQ
    'faq.title': 'Häufige Fragen',
    'faq.subtitle': 'Fragen zur 24-Stunden-Betreuung',
    'faq.q1': 'Was ist 24-Stunden-Betreuung?',
    'faq.a1':
      'Rund-um-die-Uhr Unterstützung für ältere Menschen zu Hause.',
    'faq.q2': 'Wie viel kostet es?',
    'faq.a2':
      'Zwischen €2.200 und €3.500 pro Monat je nach Pflegegrad.',
    'faq.q3': 'Ist es legal in Österreich?',
    'faq.a3':
      'Ja, vollkommen legal mit registrierten Betreuern.',
    'faq.q4': 'Bieten Sie Service in Oberösterreich?',
    'faq.a4':
      'Ja, in ganz Oberösterreich inkl. Linz, Wels, Steyr.',
    'faq.q5': 'Welche Sprachen sprechen die Betreuer?',
    'faq.a5':
      'Deutsch, Slowakisch, Tschechisch, Russisch und Englisch.',

    // Contact
    'contact.title': 'Rückruf anfordern',
    'contact.subtitle': 'Kontakt innerhalb 24 Stunden',
    'contact.name': 'Name',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Ihr Pflegebedarf...',
    'contact.send': 'Anfrage senden',
    'contact.success': 'Erfolg!',
    'contact.successMessage': 'Danke! Wir melden uns bald.',
    'contact.emailLabel': 'E-Mail:',
    'contact.phoneLabel': 'Telefon:',
    'contact.available': 'Verfügbar 24/7',

    // Footer
    'footer.description': 'Professionelle 24-Stunden-Betreuung in Österreich.',
    'footer.quickLinks': 'Schnelllinks',
    'footer.contact': 'Kontakt',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.poweredBy': 'Powered by',
    'footer.madeWith': 'Gemacht mit',
    'footer.inAustria': 'in Österreich',

    // Chatbot
    'chatbot.tooltip': 'D-Care24+ Assistent',
    'chatbot.greeting': 'Hallo! Wie können wir helfen?',
    'chatbot.title': 'D-Care24+ Assistent',
    'chatbot.subtitle': 'Fragen Sie uns',

    // Validation
    'validation.nameRequired': 'Name erforderlich',
    'validation.phoneRequired': 'Telefon erforderlich',
    'validation.phoneInvalid': 'Ungültige Nummer',
    'validation.emailRequired': 'E-Mail erforderlich',
    'validation.emailInvalid': 'Ungültige E-Mail',
  },
  sk: {
    // Navbar
    'nav.home': 'Domov',
    'nav.services': 'Služby',
    'nav.pricing': 'Ceny',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Profesionálna 24-hodinová starostlivosť v Rakúsku',
    'hero.subtitle': 'Legálne. Láskyplne. Celonárodne.',
    'hero.description':
      'Poskytujeme skúsených opatrovateľov pre 24-hodinovú domácu starostlivosť v celom Rakúsku. Plne v súlade s rakúskymi predpismi.',
    'hero.cta.primary': 'Bezplatná konzultácia',
    'hero.cta.secondary': 'Zistiť viac',
    'hero.badge': '24/7 Dostupné',

    // Services
    'services.title': 'Naše služby',
    'services.subtitle': 'Profesionálna 24-hodinová starostlivosť',
    'services.care.title': 'Láskavá starostlivosť',
    'services.care.desc':
      'Skúsení opatrovatelia poskytujú osobnú podporu. Zachovávame dôstojnosť a nezávislosť.',
    'services.legal.title': 'Legálne & Transparentné',
    'services.legal.desc':
      'V súlade s rakúskymi predpismi. Všetci opatrovatelia legálne registrovaní.',
    'services.multilingual.title': 'Viacjazyčné',
    'services.multilingual.desc':
      'Opatrovatelia hovoria po nemecky, slovensky, česky, rusky a anglicky.',
    'services.support.title': '24/7 Podpora',
    'services.support.desc':
      'Nepretržitá starostlivosť. Koordinátori vždy k dispozícii.',

    // How It Works
    'howItWorks.title': 'Ako to funguje',
    'howItWorks.step1.title': 'Konzultácia zadarmo',
    'howItWorks.step1.desc':
      'Kontaktujte nás pre konzultáciu. Vytvoríme plán starostlivosti.',
    'howItWorks.step2.title': 'Výber opatrovateľa',
    'howItWorks.step2.desc':
      'Nájdeme kvalifikovaných opatrovateľov vo vašom jazyku.',
    'howItWorks.step3.title': 'Starostlivosť začína',
    'howItWorks.step3.desc':
      'Profesionálna starostlivosť začína okamžite s kontrolou kvality.',

    // Pricing
    'pricing.title': 'Cenová kalkulačka',
    'pricing.subtitle': 'Okamžitý odhad pre 24-hodinovú starostlivosť',
    'pricing.careLevel': 'Úroveň starostlivosti',
    'pricing.basic': 'Základná starostlivosť',
    'pricing.basic.desc': 'Denná pomoc',
    'pricing.medium': 'Stredná starostlivosť',
    'pricing.medium.desc': 'Zdravotný monitoring',
    'pricing.intensive': 'Intenzívna starostlivosť',
    'pricing.intensive.desc': 'Pokročilá starostlivosť',
    'pricing.nightShift': 'Nočná zmena potrebná',
    'pricing.estimated': 'Odhadované náklady',
    'pricing.perMonth': 'mesačne',
    'pricing.baseCare': 'Základ:',
    'pricing.nightShiftLabel': 'Noc:',
    'pricing.total': 'Spolu:',
    'pricing.disclaimer': '* Ceny sú orientačné.',

    // Service Areas
    'areas.title': 'Oblasti pôsobenia',
    'areas.subtitle': 'Profesionálna starostlivosť v celom Rakúsku',
    'areas.upperAustria': 'Horné Rakúsko',
    'areas.vienna': 'Viedeň',
    'areas.lowerAustria': 'Dolné Rakúsko',
    'areas.restAustria': 'Zvyšok Rakúska',
    'areas.specialization': 'Špecializácia na Linz, Wels, Steyr',

    // FAQ
    'faq.title': 'Často kladené otázky',
    'faq.subtitle': 'Otázky o 24-hodinovej starostlivosti',
    'faq.q1': 'Čo je 24-hodinová starostlivosť?',
    'faq.a1':
      'Nepretržitá podpora pre seniorov v ich domove.',
    'faq.q2': 'Koľko to stojí?',
    'faq.a2':
      'Medzi €2.200 a €3.500 mesačne podľa úrovne starostlivosti.',
    'faq.q3': 'Je to legálne v Rakúsku?',
    'faq.a3':
      'Áno, plne legálne s registrovanými opatrovateľmi.',
    'faq.q4': 'Poskytujete služby v Hornom Rakúsku?',
    'faq.a4':
      'Áno, v celom Hornom Rakúsku vrátane Linz, Wels, Steyr.',
    'faq.q5': 'Akými jazykmi hovoria opatrovatelia?',
    'faq.a5':
      'Nemecky, slovensky, česky, rusky a anglicky.',

    // Contact
    'contact.title': 'Požiadať o späťvolanie',
    'contact.subtitle': 'Ozveme sa do 24 hodín',
    'contact.name': 'Meno',
    'contact.phone': 'Telefón',
    'contact.email': 'Email',
    'contact.message': 'Správa',
    'contact.messagePlaceholder': 'Vaše potreby...',
    'contact.send': 'Odoslať žiadosť',
    'contact.success': 'Úspech!',
    'contact.successMessage': 'Ďakujeme! Ozveme sa čoskoro.',
    'contact.emailLabel': 'Email:',
    'contact.phoneLabel': 'Telefón:',
    'contact.available': 'Dostupné 24/7',

    // Footer
    'footer.description': 'Profesionálna 24-hodinová starostlivosť v Rakúsku.',
    'footer.quickLinks': 'Rýchle odkazy',
    'footer.contact': 'Kontakt',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Ochrana údajov',
    'footer.terms': 'Podmienky',
    'footer.poweredBy': 'Powered by',
    'footer.madeWith': 'Vytvorené s',
    'footer.inAustria': 'v Rakúsku',

    // Chatbot
    'chatbot.tooltip': 'D-Care24+ Asistent',
    'chatbot.greeting': 'Ahoj! Ako môžeme pomôcť?',
    'chatbot.title': 'D-Care24+ Asistent',
    'chatbot.subtitle': 'Opýtajte sa nás',

    // Validation
    'validation.nameRequired': 'Meno je povinné',
    'validation.phoneRequired': 'Telefón je povinný',
    'validation.phoneInvalid': 'Neplatné číslo',
    'validation.emailRequired': 'Email je povinný',
    'validation.emailInvalid': 'Neplatný email',
  },
  cz: {
    // Navbar
    'nav.home': 'Domů',
    'nav.services': 'Služby',
    'nav.pricing': 'Ceny',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Profesionální 24hodinová péče v Rakousku',
    'hero.subtitle': 'Legálně. Laskavě. Celostátně.',
    'hero.description':
      'Poskytujeme zkušené pečovatele pro 24hodinovou domácí péči v celém Rakousku. Plně v souladu s rakouskými předpisy.',
    'hero.cta.primary': 'Bezplatná konzultace',
    'hero.cta.secondary': 'Zjistit více',
    'hero.badge': '24/7 Dostupné',

    // Services
    'services.title': 'Naše služby',
    'services.subtitle': 'Profesionální 24hodinová péče',
    'services.care.title': 'Laskavá péče',
    'services.care.desc':
      'Zkušení pečovatelé poskytují osobní podporu. Zachováváme důstojnost a nezávislost.',
    'services.legal.title': 'Legální & Transparentní',
    'services.legal.desc':
      'V souladu s rakouskými předpisy. Všichni pečovatelé legálně registrováni.',
    'services.multilingual.title': 'Vícejazyčné',
    'services.multilingual.desc':
      'Pečovatelé mluví německy, slovensky, česky, rusky a anglicky.',
    'services.support.title': '24/7 Podpora',
    'services.support.desc':
      'Nepřetržitá péče. Koordinátoři vždy k dispozici.',

    // How It Works
    'howItWorks.title': 'Jak to funguje',
    'howItWorks.step1.title': 'Konzultace zdarma',
    'howItWorks.step1.desc':
      'Kontaktujte nás pro konzultaci. Vytvoříme plán péče.',
    'howItWorks.step2.title': 'Výběr pečovatele',
    'howItWorks.step2.desc':
      'Najdeme kvalifikované pečovatele ve vašem jazyce.',
    'howItWorks.step3.title': 'Péče začíná',
    'howItWorks.step3.desc':
      'Profesionální péče začíná okamžitě s kontrolou kvality.',

    // Pricing
    'pricing.title': 'Cenová kalkulačka',
    'pricing.subtitle': 'Okamžitý odhad pro 24hodinovou péči',
    'pricing.careLevel': 'Úroveň péče',
    'pricing.basic': 'Základní péče',
    'pricing.basic.desc': 'Denní pomoc',
    'pricing.medium': 'Střední péče',
    'pricing.medium.desc': 'Zdravotní monitoring',
    'pricing.intensive': 'Intenzivní péče',
    'pricing.intensive.desc': 'Pokročilá péče',
    'pricing.nightShift': 'Noční směna potřebná',
    'pricing.estimated': 'Odhadované náklady',
    'pricing.perMonth': 'měsíčně',
    'pricing.baseCare': 'Základ:',
    'pricing.nightShiftLabel': 'Noc:',
    'pricing.total': 'Celkem:',
    'pricing.disclaimer': '* Ceny jsou orientační.',

    // Service Areas
    'areas.title': 'Oblasti působení',
    'areas.subtitle': 'Profesionální péče v celém Rakousku',
    'areas.upperAustria': 'Horní Rakousko',
    'areas.vienna': 'Vídeň',
    'areas.lowerAustria': 'Dolní Rakousko',
    'areas.restAustria': 'Zbytek Rakouska',
    'areas.specialization': 'Specializace na Linz, Wels, Steyr',

    // FAQ
    'faq.title': 'Časté otázky',
    'faq.subtitle': 'Otázky o 24hodinové péči',
    'faq.q1': 'Co je 24hodinová péče?',
    'faq.a1':
      'Nepřetržitá podpora pro seniory v jejich domově.',
    'faq.q2': 'Kolik to stojí?',
    'faq.a2':
      'Mezi €2.200 a €3.500 měsíčně podle úrovně péče.',
    'faq.q3': 'Je to legální v Rakousku?',
    'faq.a3':
      'Ano, plně legální s registrovanými pečovateli.',
    'faq.q4': 'Poskytujete služby v Horním Rakousku?',
    'faq.a4':
      'Ano, v celém Horním Rakousku včetně Linz, Wels, Steyr.',
    'faq.q5': 'Jakými jazyky mluví pečovatelé?',
    'faq.a5':
      'Německy, slovensky, česky, rusky a anglicky.',

    // Contact
    'contact.title': 'Požádat o zpětné volání',
    'contact.subtitle': 'Ozveme se do 24 hodin',
    'contact.name': 'Jméno',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.message': 'Zpráva',
    'contact.messagePlaceholder': 'Vaše potřeby...',
    'contact.send': 'Odeslat žádost',
    'contact.success': 'Úspěch!',
    'contact.successMessage': 'Děkujeme! Ozveme se brzy.',
    'contact.emailLabel': 'Email:',
    'contact.phoneLabel': 'Telefon:',
    'contact.available': 'Dostupné 24/7',

    // Footer
    'footer.description': 'Profesionální 24hodinová péče v Rakousku.',
    'footer.quickLinks': 'Rychlé odkazy',
    'footer.contact': 'Kontakt',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Ochrana údajů',
    'footer.terms': 'Podmínky',
    'footer.poweredBy': 'Powered by',
    'footer.madeWith': 'Vytvořeno s',
    'footer.inAustria': 'v Rakousku',

    // Chatbot
    'chatbot.tooltip': 'D-Care24+ Asistent',
    'chatbot.greeting': 'Ahoj! Jak můžeme pomoci?',
    'chatbot.title': 'D-Care24+ Asistent',
    'chatbot.subtitle': 'Zeptejte se nás',

    // Validation
    'validation.nameRequired': 'Jméno je povinné',
    'validation.phoneRequired': 'Telefon je povinný',
    'validation.phoneInvalid': 'Neplatné číslo',
    'validation.emailRequired': 'Email je povinný',
    'validation.emailInvalid': 'Neplatný email',
  },
  ru: {
    // Navbar
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'Профессиональный 24-часовой уход в Австрии',
    'hero.subtitle': 'Легально. Заботливо. По всей стране.',
    'hero.description':
      'Мы предоставляем опытных сиделок для 24-часового ухода на дому по всей Австрии. Полное соответствие австрийским законам.',
    'hero.cta.primary': 'Бесплатная консультация',
    'hero.cta.secondary': 'Узнать больше',
    'hero.badge': '24/7 Доступно',

    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Профессиональный 24-часовой уход',
    'services.care.title': 'Заботливый уход',
    'services.care.desc':
      'Опытные сиделки обеспечивают личную поддержку. Сохраняем достоинство и независимость.',
    'services.legal.title': 'Легально и прозрачно',
    'services.legal.desc':
      'Соответствие австрийским законам. Все сиделки легально зарегистрированы.',
    'services.multilingual.title': 'Многоязычность',
    'services.multilingual.desc':
      'Сиделки говорят по-немецки, по-словацки, по-чешски, по-русски и по-английски.',
    'services.support.title': '24/7 Поддержка',
    'services.support.desc':
      'Круглосуточный уход. Координаторы всегда на связи.',

    // How It Works
    'howItWorks.title': 'Как это работает',
    'howItWorks.step1.title': 'Бесплатная консультация',
    'howItWorks.step1.desc':
      'Свяжитесь с нами для консультации. Создадим план ухода.',
    'howItWorks.step2.title': 'Подбор сиделки',
    'howItWorks.step2.desc':
      'Найдем квалифицированных сиделок, говорящих на вашем языке.',
    'howItWorks.step3.title': 'Начало ухода',
    'howItWorks.step3.desc':
      'Профессиональный уход начинается немедленно с контролем качества.',

    // Pricing
    'pricing.title': 'Калькулятор цен',
    'pricing.subtitle': 'Мгновенная оценка 24-часового ухода',
    'pricing.careLevel': 'Уровень ухода',
    'pricing.basic': 'Базовый уход',
    'pricing.basic.desc': 'Ежедневная помощь',
    'pricing.medium': 'Средний уход',
    'pricing.medium.desc': 'Медицинский мониторинг',
    'pricing.intensive': 'Интенсивный уход',
    'pricing.intensive.desc': 'Расширенный уход',
    'pricing.nightShift': 'Ночная смена нужна',
    'pricing.estimated': 'Примерная стоимость',
    'pricing.perMonth': 'в месяц',
    'pricing.baseCare': 'Базовая:',
    'pricing.nightShiftLabel': 'Ночь:',
    'pricing.total': 'Итого:',
    'pricing.disclaimer': '* Цены ориентировочные.',

    // Service Areas
    'areas.title': 'Зоны обслуживания',
    'areas.subtitle': 'Профессиональный уход по всей Австрии',
    'areas.upperAustria': 'Верхняя Австрия',
    'areas.vienna': 'Вена',
    'areas.lowerAustria': 'Нижняя Австрия',
    'areas.restAustria': 'Остальная Австрия',
    'areas.specialization': 'Специализация на Линце, Вельсе, Штайре',

    // FAQ
    'faq.title': 'Частые вопросы',
    'faq.subtitle': 'Вопросы о 24-часовом уходе',
    'faq.q1': 'Что такое 24-часовой уход?',
    'faq.a1':
      'Круглосуточная поддержка для пожилых людей дома.',
    'faq.q2': 'Сколько это стоит?',
    'faq.a2':
      'От €2.200 до €3.500 в месяц в зависимости от уровня ухода.',
    'faq.q3': 'Это легально в Австрии?',
    'faq.a3':
      'Да, полностью легально с зарегистрированными сиделками.',
    'faq.q4': 'Вы работаете в Верхней Австрии?',
    'faq.a4':
      'Да, по всей Верхней Австрии, включая Линц, Вельс, Штайр.',
    'faq.q5': 'На каких языках говорят сиделки?',
    'faq.a5':
      'По-немецки, по-словацки, по-чешски, по-русски и по-английски.',

    // Contact
    'contact.title': 'Запросить обратный звонок',
    'contact.subtitle': 'Свяжемся в течение 24 часов',
    'contact.name': 'Имя',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Ваши потребности...',
    'contact.send': 'Отправить запрос',
    'contact.success': 'Успешно!',
    'contact.successMessage': 'Спасибо! Свяжемся скоро.',
    'contact.emailLabel': 'Email:',
    'contact.phoneLabel': 'Телефон:',
    'contact.available': 'Доступно 24/7',

    // Footer
    'footer.description': 'Профессиональный 24-часовой уход в Австрии.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms': 'Условия',
    'footer.poweredBy': 'Powered by',
    'footer.madeWith': 'Создано с',
    'footer.inAustria': 'в Австрии',

    // Chatbot
    'chatbot.tooltip': 'D-Care24+ Ассистент',
    'chatbot.greeting': 'Привет! Как мы можем помочь?',
    'chatbot.title': 'D-Care24+ Ассистент',
    'chatbot.subtitle': 'Спросите нас',

    // Validation
    'validation.nameRequired': 'Имя обязательно',
    'validation.phoneRequired': 'Телефон обязателен',
    'validation.phoneInvalid': 'Неверный номер',
    'validation.emailRequired': 'Email обязателен',
    'validation.emailInvalid': 'Неверный email',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};