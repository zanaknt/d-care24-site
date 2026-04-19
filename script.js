/* ========================================
   D-CARE24+ JAVASCRIPT
   Tüm interaktif özellikler + 5 dil sistemi
   ======================================== */

// ==========================================
// 1. TRANSLATION SYSTEM (5 Languages)
// ==========================================

const translations = {
    de: {
        // Navigation
        nav_home: 'Startseite',
        nav_services: 'Leistungen',
        nav_calculator: 'Kostenrechner',
        nav_about: 'Über uns',
        nav_contact: 'Kontakt',
        
        // Hero Section
        hero_title: '24-Stunden-Pflege in Oberösterreich',
        hero_subtitle: 'Professionelle und liebevolle Betreuung für Ihre Angehörigen – rund um die Uhr',
        hero_cta_primary: 'Kostenlos berechnen',
        hero_cta_secondary: 'Kontakt aufnehmen',
        
        // Services
        services_title: 'Unsere Leistungen',
        services_subtitle: 'Umfassende Betreuung und Pflege für jeden Bedarf',
        service1_title: '24-Stunden-Betreuung',
        service1_desc: 'Rund-um-die-Uhr Betreuung durch qualifiziertes Personal in der gewohnten Umgebung',
        service2_title: 'Medizinische Pflege',
        service2_desc: 'Professionelle medizinische Versorgung und Betreuung bei speziellen Bedürfnissen',
        service3_title: 'Haushaltsführung',
        service3_desc: 'Unterstützung im Alltag und bei der Haushaltsführung für mehr Lebensqualität',
        
        // Calculator
        calc_title: 'Kostenrechner',
        calc_subtitle: 'Berechnen Sie Ihre individuelle Pflegekosten',
        calc_care_level: 'Pflegestufe',
        calc_care_type: 'Betreuungsart',
        calc_type_basic: 'Grundbetreuung',
        calc_type_extended: 'Erweiterte Betreuung',
        calc_type_intensive: 'Intensivbetreuung',
        calc_additional: 'Zusatzleistungen',
        calc_add_medical: 'Medizinische Versorgung',
        calc_add_therapy: 'Physiotherapie',
        calc_add_transport: 'Fahrdienst',
        calc_monthly_cost: 'Monatliche Kosten:',
        calc_cta: 'Beratungsgespräch anfragen',
        
        // About
        about_title: 'Über D-Care24+',
        about_text1: 'Seit über 10 Jahren bieten wir professionelle Pflegedienstleistungen in Oberösterreich an. Unser erfahrenes Team aus qualifizierten Pflegekräften steht Ihnen mit Herz und Kompetenz zur Seite.',
        about_text2: 'Wir legen großen Wert auf individuelle Betreuung und orientieren uns an den Bedürfnissen unserer Klienten. Vertrauen, Transparenz und höchste Qualität sind unsere Grundprinzipien.',
        about_stat1: 'Zufriedene Klienten',
        about_stat2: 'Jahre Erfahrung',
        about_availability: 'Verfügbar',
        
        // Contact
        contact_title: 'Kontaktieren Sie uns',
        contact_subtitle: 'Wir sind für Sie da – persönlich und unverbindlich',
        form_name: 'Name *',
        form_email: 'E-Mail *',
        form_phone: 'Telefon',
        form_message: 'Nachricht *',
        form_submit: 'Nachricht senden',
        contact_info_title: 'Kontaktinformationen',
        contact_address_label: 'Adresse',
        contact_phone_label: 'Telefon',
        contact_email_label: 'E-Mail',
        chatbot_title: 'Live Chat',
        chatbot_desc: 'Chatten Sie direkt mit unserem Team',
        chatbot_placeholder: 'Chatbot würde hier integriert werden',
        
        // Footer
        footer_tagline: 'Professionelle Pflege mit Herz',
        footer_services: 'Leistungen',
        footer_service1: '24h Betreuung',
        footer_service2: 'Medizinische Pflege',
        footer_service3: 'Haushaltsführung',
        footer_company: 'Unternehmen',
        footer_about: 'Über uns',
        footer_contact: 'Kontakt',
        footer_legal: 'Impressum',
        footer_privacy: 'Datenschutz',
        footer_contact_title: 'Kontakt',
        footer_copyright: 'Alle Rechte vorbehalten.',
        
        // Legal
        legal_back: 'Zurück',
        impressum_title: 'Impressum',
        impressum_company_info: 'Firmeninformationen',
        impressum_contact: 'Kontakt',
        impressum_register: 'Handelsregister',
        privacy_title: 'Datenschutzerklärung',
        privacy_intro_title: 'Einleitung',
        privacy_intro_text: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).',
        privacy_collection_title: 'Datenerfassung',
        privacy_collection_text: 'Wenn Sie mit uns in Kontakt treten, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        privacy_rights_title: 'Ihre Rechte',
        privacy_rights_text: 'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.',
        
        // Form Messages
        form_success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
        form_error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
        form_validation_name: 'Bitte geben Sie Ihren Namen ein.',
        form_validation_email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        form_validation_message: 'Bitte geben Sie eine Nachricht ein.',
    },
    
    en: {
        // Navigation
        nav_home: 'Home',
        nav_services: 'Services',
        nav_calculator: 'Calculator',
        nav_about: 'About Us',
        nav_contact: 'Contact',
        
        // Hero
        hero_title: '24-Hour Care in Upper Austria',
        hero_subtitle: 'Professional and compassionate care for your loved ones – around the clock',
        hero_cta_primary: 'Calculate Free',
        hero_cta_secondary: 'Get in Touch',
        
        // Services
        services_title: 'Our Services',
        services_subtitle: 'Comprehensive care and support for every need',
        service1_title: '24-Hour Care',
        service1_desc: 'Round-the-clock care by qualified staff in the comfort of home',
        service2_title: 'Medical Care',
        service2_desc: 'Professional medical care and support for special needs',
        service3_title: 'Household Management',
        service3_desc: 'Daily support and household management for better quality of life',
        
        // Calculator
        calc_title: 'Cost Calculator',
        calc_subtitle: 'Calculate your individual care costs',
        calc_care_level: 'Care Level',
        calc_care_type: 'Care Type',
        calc_type_basic: 'Basic Care',
        calc_type_extended: 'Extended Care',
        calc_type_intensive: 'Intensive Care',
        calc_additional: 'Additional Services',
        calc_add_medical: 'Medical Care',
        calc_add_therapy: 'Physiotherapy',
        calc_add_transport: 'Transportation',
        calc_monthly_cost: 'Monthly Cost:',
        calc_cta: 'Request Consultation',
        
        // About
        about_title: 'About D-Care24+',
        about_text1: 'For over 10 years, we have been providing professional care services in Upper Austria. Our experienced team of qualified caregivers supports you with heart and competence.',
        about_text2: 'We place great value on individual care and focus on the needs of our clients. Trust, transparency, and highest quality are our core principles.',
        about_stat1: 'Satisfied Clients',
        about_stat2: 'Years of Experience',
        about_availability: 'Available',
        
        // Contact
        contact_title: 'Contact Us',
        contact_subtitle: 'We are here for you – personally and without obligation',
        form_name: 'Name *',
        form_email: 'Email *',
        form_phone: 'Phone',
        form_message: 'Message *',
        form_submit: 'Send Message',
        contact_info_title: 'Contact Information',
        contact_address_label: 'Address',
        contact_phone_label: 'Phone',
        contact_email_label: 'Email',
        chatbot_title: 'Live Chat',
        chatbot_desc: 'Chat directly with our team',
        chatbot_placeholder: 'Chatbot would be integrated here',
        
        // Footer
        footer_tagline: 'Professional care with heart',
        footer_services: 'Services',
        footer_service1: '24h Care',
        footer_service2: 'Medical Care',
        footer_service3: 'Household Management',
        footer_company: 'Company',
        footer_about: 'About Us',
        footer_contact: 'Contact',
        footer_legal: 'Legal Notice',
        footer_privacy: 'Privacy Policy',
        footer_contact_title: 'Contact',
        footer_copyright: 'All rights reserved.',
        
        // Legal
        legal_back: 'Back',
        impressum_title: 'Legal Notice',
        impressum_company_info: 'Company Information',
        impressum_contact: 'Contact',
        impressum_register: 'Commercial Register',
        privacy_title: 'Privacy Policy',
        privacy_intro_title: 'Introduction',
        privacy_intro_text: 'The protection of your personal data is very important to us. We process your data exclusively on the basis of legal regulations (GDPR).',
        privacy_collection_title: 'Data Collection',
        privacy_collection_text: 'When you contact us, your provided data will be stored for processing your request and for follow-up questions.',
        privacy_rights_title: 'Your Rights',
        privacy_rights_text: 'You have the right to information, correction, deletion, restriction, data portability, revocation, and objection.',
        
        // Form Messages
        form_success: 'Thank you! Your message has been sent successfully.',
        form_error: 'Error sending message. Please try again.',
        form_validation_name: 'Please enter your name.',
        form_validation_email: 'Please enter a valid email address.',
        form_validation_message: 'Please enter a message.',
    },
    
    sk: {
        // Navigation
        nav_home: 'Domov',
        nav_services: 'Služby',
        nav_calculator: 'Kalkulačka',
        nav_about: 'O nás',
        nav_contact: 'Kontakt',
        
        // Hero
        hero_title: '24-hodinová starostlivosť v Hornom Rakúsku',
        hero_subtitle: 'Profesionálna a starostlivá opatrovníctvo pre vašich blízkych – nepretržite',
        hero_cta_primary: 'Vypočítať zadarmo',
        hero_cta_secondary: 'Kontaktujte nás',
        
        // Services
        services_title: 'Naše služby',
        services_subtitle: 'Komplexná starostlivosť a podpora pre každú potrebu',
        service1_title: '24-hodinová starostlivosť',
        service1_desc: 'Nepretržitá starostlivosť kvalifikovaným personálom v pohodlí domova',
        service2_title: 'Medicínska starostlivosť',
        service2_desc: 'Profesionálna zdravotná starostlivosť a podpora pre špeciálne potreby',
        service3_title: 'Vedenie domácnosti',
        service3_desc: 'Každodenná podpora a vedenie domácnosti pre lepšiu kvalitu života',
        
        // Calculator
        calc_title: 'Cenová kalkulačka',
        calc_subtitle: 'Vypočítajte si vaše individuálne náklady na starostlivosť',
        calc_care_level: 'Úroveň starostlivosti',
        calc_care_type: 'Typ starostlivosti',
        calc_type_basic: 'Základná starostlivosť',
        calc_type_extended: 'Rozšírená starostlivosť',
        calc_type_intensive: 'Intenzívna starostlivosť',
        calc_additional: 'Doplnkové služby',
        calc_add_medical: 'Medicínska starostlivosť',
        calc_add_therapy: 'Fyzioterapia',
        calc_add_transport: 'Doprava',
        calc_monthly_cost: 'Mesačné náklady:',
        calc_cta: 'Požiadať o konzultáciu',
        
        // About
        about_title: 'O D-Care24+',
        about_text1: 'Viac ako 10 rokov poskytujeme profesionálne služby starostlivosti v Hornom Rakúsku. Náš skúsený tím kvalifikovaných opatrovateľov vám pomáha so srdcom a kompetenciou.',
        about_text2: 'Kladieme veľký dôraz na individuálnu starostlivosť a orientujeme sa na potreby našich klientov. Dôvera, transparentnosť a najvyššia kvalita sú naše základné princípy.',
        about_stat1: 'Spokojných klientov',
        about_stat2: 'Rokov skúseností',
        about_availability: 'Dostupné',
        
        // Contact
        contact_title: 'Kontaktujte nás',
        contact_subtitle: 'Sme tu pre vás – osobne a nezáväzne',
        form_name: 'Meno *',
        form_email: 'Email *',
        form_phone: 'Telefón',
        form_message: 'Správa *',
        form_submit: 'Odoslať správu',
        contact_info_title: 'Kontaktné informácie',
        contact_address_label: 'Adresa',
        contact_phone_label: 'Telefón',
        contact_email_label: 'Email',
        chatbot_title: 'Live Chat',
        chatbot_desc: 'Chatujte priamo s naším tímom',
        chatbot_placeholder: 'Chatbot by bol integrovaný tu',
        
        // Footer
        footer_tagline: 'Profesionálna starostlivosť so srdcom',
        footer_services: 'Služby',
        footer_service1: '24h starostlivosť',
        footer_service2: 'Medicínska starostlivosť',
        footer_service3: 'Vedenie domácnosti',
        footer_company: 'Spoločnosť',
        footer_about: 'O nás',
        footer_contact: 'Kontakt',
        footer_legal: 'Právne informácie',
        footer_privacy: 'Ochrana údajov',
        footer_contact_title: 'Kontakt',
        footer_copyright: 'Všetky práva vyhradené.',
        
        // Legal
        legal_back: 'Späť',
        impressum_title: 'Právne informácie',
        impressum_company_info: 'Informácie o spoločnosti',
        impressum_contact: 'Kontakt',
        impressum_register: 'Obchodný register',
        privacy_title: 'Ochrana osobných údajov',
        privacy_intro_title: 'Úvod',
        privacy_intro_text: 'Ochrana vašich osobných údajov je pre nás veľmi dôležitá. Vaše údaje spracovávame výhradne na základe právnych predpisov (GDPR).',
        privacy_collection_title: 'Zber údajov',
        privacy_collection_text: 'Keď nás kontaktujete, vaše poskytnuté údaje budú uložené na spracovanie vašej žiadosti a pre následné otázky.',
        privacy_rights_title: 'Vaše práva',
        privacy_rights_text: 'Máte právo na informácie, opravu, vymazanie, obmedzenie, prenosnosť údajov, odvolanie a námietku.',
        
        // Form Messages
        form_success: 'Ďakujeme! Vaša správa bola úspešne odoslaná.',
        form_error: 'Chyba pri odosielaní. Prosím skúste znova.',
        form_validation_name: 'Prosím zadajte vaše meno.',
        form_validation_email: 'Prosím zadajte platnú emailovú adresu.',
        form_validation_message: 'Prosím zadajte správu.',
    },
    
    cz: {
        // Navigation
        nav_home: 'Domů',
        nav_services: 'Služby',
        nav_calculator: 'Kalkulačka',
        nav_about: 'O nás',
        nav_contact: 'Kontakt',
        
        // Hero
        hero_title: '24hodinová péče v Horním Rakousku',
        hero_subtitle: 'Profesionální a láskyplná péče o vaše blízké – nepřetržitě',
        hero_cta_primary: 'Vypočítat zdarma',
        hero_cta_secondary: 'Kontaktujte nás',
        
        // Services
        services_title: 'Naše služby',
        services_subtitle: 'Komplexní péče a podpora pro každou potřebu',
        service1_title: '24hodinová péče',
        service1_desc: 'Nepřetržitá péče kvalifikovaným personálem v pohodlí domova',
        service2_title: 'Zdravotní péče',
        service2_desc: 'Profesionální zdravotní péče a podpora pro speciální potřeby',
        service3_title: 'Vedení domácnosti',
        service3_desc: 'Každodenní podpora a vedení domácnosti pro lepší kvalitu života',
        
        // Calculator
        calc_title: 'Cenová kalkulačka',
        calc_subtitle: 'Vypočítejte si vaše individuální náklady na péči',
        calc_care_level: 'Úroveň péče',
        calc_care_type: 'Typ péče',
        calc_type_basic: 'Základní péče',
        calc_type_extended: 'Rozšířená péče',
        calc_type_intensive: 'Intenzivní péče',
        calc_additional: 'Doplňkové služby',
        calc_add_medical: 'Zdravotní péče',
        calc_add_therapy: 'Fyzioterapie',
        calc_add_transport: 'Doprava',
        calc_monthly_cost: 'Měsíční náklady:',
        calc_cta: 'Požádat o konzultaci',
        
        // About
        about_title: 'O D-Care24+',
        about_text1: 'Více než 10 let poskytujeme profesionální pečovatelské služby v Horním Rakousku. Náš zkušený tým kvalifikovaných pečovatelů vám pomáhá se srdcem a kompetencí.',
        about_text2: 'Klademe velký důraz na individuální péči a zaměřujeme se na potřeby našich klientů. Důvěra, transparentnost a nejvyšší kvalita jsou naše základní principy.',
        about_stat1: 'Spokojených klientů',
        about_stat2: 'Let zkušeností',
        about_availability: 'Dostupné',
        
        // Contact
        contact_title: 'Kontaktujte nás',
        contact_subtitle: 'Jsme tu pro vás – osobně a nezávazně',
        form_name: 'Jméno *',
        form_email: 'Email *',
        form_phone: 'Telefon',
        form_message: 'Zpráva *',
        form_submit: 'Odeslat zprávu',
        contact_info_title: 'Kontaktní informace',
        contact_address_label: 'Adresa',
        contact_phone_label: 'Telefon',
        contact_email_label: 'Email',
        chatbot_title: 'Live Chat',
        chatbot_desc: 'Chatujte přímo s naším týmem',
        chatbot_placeholder: 'Chatbot by byl integrován zde',
        
        // Footer
        footer_tagline: 'Profesionální péče se srdcem',
        footer_services: 'Služby',
        footer_service1: '24h péče',
        footer_service2: 'Zdravotní péče',
        footer_service3: 'Vedení domácnosti',
        footer_company: 'Společnost',
        footer_about: 'O nás',
        footer_contact: 'Kontakt',
        footer_legal: 'Právní informace',
        footer_privacy: 'Ochrana údajů',
        footer_contact_title: 'Kontakt',
        footer_copyright: 'Všechna práva vyhrazena.',
        
        // Legal
        legal_back: 'Zpět',
        impressum_title: 'Právní informace',
        impressum_company_info: 'Informace o společnosti',
        impressum_contact: 'Kontakt',
        impressum_register: 'Obchodní rejstřík',
        privacy_title: 'Ochrana osobních údajů',
        privacy_intro_title: 'Úvod',
        privacy_intro_text: 'Ochrana vašich osobních údajů je pro nás velmi důležitá. Vaše údaje zpracováváme výhradně na základě právních předpisů (GDPR).',
        privacy_collection_title: 'Sběr údajů',
        privacy_collection_text: 'Když nás kontaktujete, vaše poskytnuté údaje budou uloženy ke zpracování vaší žádosti a pro následné dotazy.',
        privacy_rights_title: 'Vaše práva',
        privacy_rights_text: 'Máte právo na informace, opravu, vymazání, omezení, přenositelnost údajů, odvolání a námitku.',
        
        // Form Messages
        form_success: 'Děkujeme! Vaše zpráva byla úspěšně odeslána.',
        form_error: 'Chyba při odesílání. Prosím zkuste znovu.',
        form_validation_name: 'Prosím zadejte vaše jméno.',
        form_validation_email: 'Prosím zadejte platnou emailovou adresu.',
        form_validation_message: 'Prosím zadejte zprávu.',
    },
    
    ru: {
        // Navigation
        nav_home: 'Главная',
        nav_services: 'Услуги',
        nav_calculator: 'Калькулятор',
        nav_about: 'О нас',
        nav_contact: 'Контакт',
        
        // Hero
        hero_title: '24-часовой уход в Верхней Австрии',
        hero_subtitle: 'Профессиональный и заботливый уход за вашими близкими – круглосуточно',
        hero_cta_primary: 'Рассчитать бесплатно',
        hero_cta_secondary: 'Связаться с нами',
        
        // Services
        services_title: 'Наши услуги',
        services_subtitle: 'Комплексный уход и поддержка для любых нужд',
        service1_title: '24-часовой уход',
        service1_desc: 'Круглосуточный уход квалифицированным персоналом в комфорте дома',
        service2_title: 'Медицинский уход',
        service2_desc: 'Профессиональная медицинская помощь и поддержка для особых нужд',
        service3_title: 'Ведение домашнего хозяйства',
        service3_desc: 'Ежедневная поддержка и ведение домашнего хозяйства для лучшего качества жизни',
        
        // Calculator
        calc_title: 'Калькулятор стоимости',
        calc_subtitle: 'Рассчитайте ваши индивидуальные расходы на уход',
        calc_care_level: 'Уровень ухода',
        calc_care_type: 'Тип ухода',
        calc_type_basic: 'Базовый уход',
        calc_type_extended: 'Расширенный уход',
        calc_type_intensive: 'Интенсивный уход',
        calc_additional: 'Дополнительные услуги',
        calc_add_medical: 'Медицинская помощь',
        calc_add_therapy: 'Физиотерапия',
        calc_add_transport: 'Транспорт',
        calc_monthly_cost: 'Ежемесячные расходы:',
        calc_cta: 'Запросить консультацию',
        
        // About
        about_title: 'О D-Care24+',
        about_text1: 'Более 10 лет мы предоставляем профессиональные услуги по уходу в Верхней Австрии. Наша опытная команда квалифицированных сиделок поддерживает вас с сердцем и компетентностью.',
        about_text2: 'Мы придаем большое значение индивидуальному уходу и ориентируемся на потребности наших клиентов. Доверие, прозрачность и высочайшее качество - наши основные принципы.',
        about_stat1: 'Довольных клиентов',
        about_stat2: 'Лет опыта',
        about_availability: 'Доступно',
        
        // Contact
        contact_title: 'Свяжитесь с нами',
        contact_subtitle: 'Мы здесь для вас – лично и без обязательств',
        form_name: 'Имя *',
        form_email: 'Email *',
        form_phone: 'Телефон',
        form_message: 'Сообщение *',
        form_submit: 'Отправить сообщение',
        contact_info_title: 'Контактная информация',
        contact_address_label: 'Адрес',
        contact_phone_label: 'Телефон',
        contact_email_label: 'Email',
        chatbot_title: 'Онлайн-чат',
        chatbot_desc: 'Общайтесь напрямую с нашей командой',
        chatbot_placeholder: 'Чат-бот будет интегрирован здесь',
        
        // Footer
        footer_tagline: 'Профессиональный уход с душой',
        footer_services: 'Услуги',
        footer_service1: '24ч уход',
        footer_service2: 'Медицинская помощь',
        footer_service3: 'Ведение хозяйства',
        footer_company: 'Компания',
        footer_about: 'О нас',
        footer_contact: 'Контакт',
        footer_legal: 'Правовая информация',
        footer_privacy: 'Конфиденциальность',
        footer_contact_title: 'Контакт',
        footer_copyright: 'Все права защищены.',
        
        // Legal
        legal_back: 'Назад',
        impressum_title: 'Правовая информация',
        impressum_company_info: 'Информация о компании',
        impressum_contact: 'Контакт',
        impressum_register: 'Торговый реестр',
        privacy_title: 'Политика конфиденциальности',
        privacy_intro_title: 'Введение',
        privacy_intro_text: 'Защита ваших личных данных очень важна для нас. Мы обрабатываем ваши данные исключительно на основе правовых норм (GDPR).',
        privacy_collection_title: 'Сбор данных',
        privacy_collection_text: 'Когда вы связываетесь с нами, ваши предоставленные данные будут сохранены для обработки вашего запроса и последующих вопросов.',
        privacy_rights_title: 'Ваши права',
        privacy_rights_text: 'У вас есть право на информацию, исправление, удаление, ограничение, переносимость данных, отзыв и возражение.',
        
        // Form Messages
        form_success: 'Спасибо! Ваше сообщение успешно отправлено.',
        form_error: 'Ошибка отправки. Пожалуйста, попробуйте снова.',
        form_validation_name: 'Пожалуйста, введите ваше имя.',
        form_validation_email: 'Пожалуйста, введите действительный email адрес.',
        form_validation_message: 'Пожалуйста, введите сообщение.',
    }
};

// Current Language (default: German)
let currentLanguage = 'de';

// Language Change Function
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found!`);
        return;
    }
    
    currentLanguage = lang;
    
    // Update current language display
    const langMap = {
        'de': 'DE',
        'en': 'EN',
        'sk': 'SK',
        'cz': 'CZ',
        'ru': 'RU'
    };
    document.getElementById('current-lang').textContent = langMap[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update select options
    document.querySelectorAll('[data-i18n-option]').forEach(option => {
        const key = option.getAttribute('data-i18n-option');
        if (translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Close dropdown
    document.getElementById('lang-dropdown').classList.add('hidden');
    
    // Update URL parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
    
    console.log(`Language changed to: ${lang}`);
}

// ==========================================
// 2. HERO SLIDER
// ==========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.slider-dot');
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-advance slider
setInterval(nextSlide, slideInterval);

// ==========================================
// 3. STICKY HEADER
// ==========================================

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// 4. MOBILE MENU
// ==========================================

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('mobile-menu').classList.remove('active');
    });
});

// ==========================================
// 5. LANGUAGE DROPDOWN
// ==========================================

document.getElementById('lang-button').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('lang-dropdown').classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('lang-dropdown');
    const button = document.getElementById('lang-button');
    if (!dropdown.contains(e.target) && !button.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

// ==========================================
// 6. CALCULATOR
// ==========================================

const careLevelEl = document.getElementById('care-level');
const careTypeEl = document.getElementById('care-type');
const additionalServices = document.querySelectorAll('.additional-service');
const calculatedPriceEl = document.getElementById('calculated-price');

// Base prices
const basePrices = {
    1: 1800,
    2: 2000,
    3: 2200,
    4: 2400,
    5: 2600,
    6: 2800,
    7: 3000
};

const careTypeMultiplier = {
    'basic': 1.0,
    'extended': 1.2,
    'intensive': 1.5
};

function calculatePrice() {
    const careLevel = parseInt(careLevelEl.value);
    const careType = careTypeEl.value;
    
    let basePrice = basePrices[careLevel] || 2000;
    let totalPrice = basePrice * careTypeMultiplier[careType];
    
    // Add additional services
    additionalServices.forEach(service => {
        if (service.checked) {
            totalPrice += parseInt(service.getAttribute('data-price'));
        }
    });
    
    // Update display with animation
    calculatedPriceEl.classList.add('price-update');
    calculatedPriceEl.textContent = `€${Math.round(totalPrice).toLocaleString()}`;
    
    setTimeout(() => {
        calculatedPriceEl.classList.remove('price-update');
    }, 500);
}

// Event listeners
careLevelEl.addEventListener('change', calculatePrice);
careTypeEl.addEventListener('change', calculatePrice);
additionalServices.forEach(service => {
    service.addEventListener('change', calculatePrice);
});

// Initial calculation
calculatePrice();

// ==========================================
// 7. CONTACT FORM
// ==========================================

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');
    
    // Validation
    if (!name) {
        showFormMessage(translations[currentLanguage].form_validation_name, 'error');
        return;
    }
    
    if (!email || !isValidEmail(email)) {
        showFormMessage(translations[currentLanguage].form_validation_email, 'error');
        return;
    }
    
    if (!message) {
        showFormMessage(translations[currentLanguage].form_validation_message, 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        showFormMessage(translations[currentLanguage].form_success, 'success');
        
        // Reset form
        document.getElementById('contact-form').reset();
    }, 1500);
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = `p-4 rounded-lg ${type === 'success' ? 'form-success' : 'form-error'}`;
    formMessage.classList.remove('hidden');
    
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// ==========================================
// 8. SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip legal page links
        if (href === '#impressum' || href === '#datenschutz') {
            e.preventDefault();
            openLegalPage(href.substring(1));
            return;
        }
        
        // Skip if just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// 9. SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('scroll-fade-in');
    observer.observe(card);
});

// ==========================================
// 10. LEGAL PAGES (Hash Routing)
// ==========================================

function openLegalPage(page) {
    const legalPages = document.getElementById('legal-pages');
    const impressumContent = document.getElementById('impressum-content');
    const datenschutzContent = document.getElementById('datenschutz-content');
    
    // Hide all content
    impressumContent.classList.add('hidden');
    datenschutzContent.classList.add('hidden');
    
    // Show selected content
    if (page === 'impressum') {
        impressumContent.classList.remove('hidden');
    } else if (page === 'datenschutz') {
        datenschutzContent.classList.remove('hidden');
    }
    
    // Show legal pages container
    legalPages.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Update URL
    window.location.hash = page;
}

function closeLegalPage() {
    document.getElementById('legal-pages').classList.add('hidden');
    document.body.style.overflow = 'auto';
    window.location.hash = '';
}

// Handle hash navigation
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash === 'impressum' || hash === 'datenschutz') {
        openLegalPage(hash);
    } else if (hash === '') {
        closeLegalPage();
    }
});

// Check for hash on page load
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash === 'impressum' || hash === 'datenschutz') {
        openLegalPage(hash);
    }
});

// ==========================================
// 11. INITIALIZE ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    
    // Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Priority: URL > localStorage > default (de)
    const initialLang = urlLang || savedLang || 'de';
    
    if (initialLang !== 'de') {
        changeLanguage(initialLang);
    }
    
    console.log('D-Care24+ initialized successfully!');
    console.log('Current language:', currentLanguage);
});
