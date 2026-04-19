import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { BookingSection } from '../components/BookingSection';
import { ServiceAreas } from '../components/ServiceAreas';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <BookingSection />
      <ServiceAreas />
      <FAQ />
      <ContactSection />
    </main>
  );
};