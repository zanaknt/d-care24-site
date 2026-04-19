# D-Care24+ Website - Project Structure

## Overview
Modern, interactive single-page website for D-Care24+, an Austrian 24-hour home care service provider.

## Tech Stack
- **React** - Component-based UI
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons

## Project Structure

```
/src
├── /app
│   ├── App.tsx                          # Main app component
│   ├── /components
│   │   ├── Header.tsx                   # Sticky navigation with language switcher
│   │   ├── Hero.tsx                     # Hero section with CTA
│   │   ├── HowItWorks.tsx              # 3-step process section
│   │   ├── PriceCalculator.tsx         # Interactive price calculator
│   │   ├── ChatbotSection.tsx          # Chatbot iframe embed
│   │   ├── ContactForm.tsx             # Callback request form
│   │   ├── Footer.tsx                   # Footer with links
│   │   └── ScrollToTop.tsx             # Floating scroll-to-top button
│   └── /contexts
│       └── LanguageContext.tsx          # Multi-language support (EN, DE, SK, CZ)
└── /styles
    ├── index.css                        # Main CSS imports
    ├── tailwind.css                     # Tailwind config + custom utilities
    ├── theme.css                        # Design tokens & colors
    └── fonts.css                        # Font imports

```

## Key Features

### 1. Multi-Language Support
- Languages: English (EN), German (DE), Slovak (SK), Czech (CZ)
- To add/edit translations: Edit `/src/app/contexts/LanguageContext.tsx`
- All text is centralized in the `translations` object

### 2. Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Adaptive layouts for all screen sizes

### 3. Animations
- Scroll-reveal animations using Intersection Observer
- Smooth transitions between sections
- Hover effects on interactive elements
- Motion animations powered by Motion/React

### 4. Interactive Components

#### Price Calculator
- Real-time cost estimation
- Care level selection (Basic, Medium, Intensive)
- Night shift toggle
- Located in: `/src/app/components/PriceCalculator.tsx`

#### Chatbot
- Embedded Chatbase chatbot
- URL: `https://www.chatbase.co/chatbot-iframe/-QhniFAa0lbTeOvSdrJzf`
- Located in: `/src/app/components/ChatbotSection.tsx`

#### Contact Form
- Form validation
- Fields: Name, Phone, Email, Message
- Success message on submission
- Located in: `/src/app/components/ContactForm.tsx`

### 5. Design System

**Color Palette:**
- Primary: `#0891b2` (Deep Blue/Teal)
- Background: White with subtle gradients
- Accent: Pastel teal overlays

**Typography:**
- Font size variables defined in `theme.css`
- Responsive font sizing
- Clean, accessible fonts

## How to Edit

### Change Logo
Replace the logo import in:
- `/src/app/components/Header.tsx`
- `/src/app/components/Footer.tsx`

Currently uses: `figma:asset/74400998ddb7ebf225fd2ea6810b803241c7b5cf.png`

### Update Translations
Edit `/src/app/contexts/LanguageContext.tsx` and modify the `translations` object.

### Modify Prices
Edit the `basePrices` object in `/src/app/components/PriceCalculator.tsx`:
```typescript
const basePrices = {
  basic: 2200,
  medium: 2800,
  intensive: 3500,
};
```

### Change Chatbot
Update the iframe `src` in `/src/app/components/ChatbotSection.tsx`

### Update Colors
Edit color values in `/src/styles/theme.css` under the `:root` selector.

### Add/Remove Sections
1. Create new component in `/src/app/components/`
2. Import and add to `/src/app/App.tsx`
3. Update navigation in `/src/app/components/Header.tsx`

## Component Props & State

Most components use:
- `useLanguage()` hook for translations
- `useState()` for local state management
- `useEffect()` with Intersection Observer for scroll animations
- `useRef()` for DOM references

## Navigation
Uses smooth scroll with `scrollIntoView`:
```typescript
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

Section IDs:
- `#hero`
- `#how-it-works`
- `#calculator`
- `#chatbot`
- `#contact`

## Footer Links
Update in `/src/app/components/Footer.tsx`:
- Impressum
- Privacy Policy (Datenschutz)
- Terms & Conditions (AGB)
- Contact

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive across all devices
- Smooth scroll polyfill included

## Future Enhancements
- Backend integration for form submissions
- CMS integration for content management
- Analytics integration
- A/B testing capabilities
- Enhanced accessibility features

---

**Built with ❤️ by Digized InfoTech**
