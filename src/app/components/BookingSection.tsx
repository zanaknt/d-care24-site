import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, Check, ArrowRight, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BookingSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<'date' | 'time' | 'info' | 'success'>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
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

  // Generate next 30 days (excluding weekends)
  const generateAvailableDates = () => {
    const dates: Date[] = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDay = 1;

    while (daysAdded < 30) {
      const date = new Date(today);
      date.setDate(today.getDate() + currentDay);
      const dayOfWeek = date.getDay();
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(date);
        daysAdded++;
      }
      currentDay++;
    }
    return dates;
  };

  // Generate time slots (9 AM - 6 PM, 30-minute intervals)
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) continue; // Stop at 5:30 PM
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const availableDates = generateAvailableDates();
  const timeSlots = generateTimeSlots();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-AT', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('info');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = t('validation.nameRequired');
    if (!formData.phone.trim()) newErrors.phone = t('validation.phoneRequired');
    else if (!/^[\d\s\-+()]+$/.test(formData.phone))
      newErrors.phone = t('validation.phoneInvalid');
    if (!formData.email.trim()) newErrors.email = t('validation.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t('validation.emailInvalid');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && selectedDate && selectedTime) {
      // Create email content
      const emailSubject = `New Consultation Booking - ${formData.name}`;
      const emailBody = `
New Consultation Booking Request

Date: ${formatDate(selectedDate)}
Time: ${selectedTime}

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Message: ${formData.message || 'No additional message'}

Please confirm this appointment with the client.
      `.trim();

      // Open email client
      window.location.href = `mailto:office@d-care24.at?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Show success
      setStep('success');
    }
  };

  const resetBooking = () => {
    setStep('date');
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#EDF2EE] via-[#F5F0E8] to-[#EDF2EE] relative overflow-hidden"
    >
      {/* Subtle warm decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Kostenloses Erstgespräch buchen</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#183028] px-4">
            Kostenloser Beratungsruf
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Finden Sie die passende Betreuungslösung in nur 15 Minuten. Termin jetzt vereinbaren.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#183028] mb-2">15–30 Minuten</h3>
              <p className="text-sm text-stone-600">
                Effiziente Beratung, individuell auf Ihre Bedürfnisse abgestimmt
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200">
                <Video className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#183028] mb-2">Video oder Telefon</h3>
              <p className="text-sm text-stone-600">
                Wählen Sie Ihre bevorzugte Beratungsform
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#183028] mb-2">Flexibler Zeitplan</h3>
              <p className="text-sm text-stone-600">
                Termin wählen, der Ihnen am besten passt
              </p>
            </motion.div>
          </div>

          {/* Booking Calendar Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl bg-white border border-stone-200 shadow-lg overflow-hidden">
              {/* Inner container */}
              <div className="relative rounded-2xl overflow-hidden p-6 md:p-8">
                
                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-8 gap-2">
                  <div className={`flex items-center gap-2 ${step === 'date' ? 'text-emerald-600' : step === 'time' || step === 'info' || step === 'success' ? 'text-emerald-700' : 'text-stone-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'date' ? 'border-emerald-500 bg-emerald-50' : step === 'time' || step === 'info' || step === 'success' ? 'border-emerald-600 bg-emerald-100' : 'border-stone-300'}`}>
                      {step === 'time' || step === 'info' || step === 'success' ? <Check className="w-4 h-4" /> : '1'}
                    </div>
                    <span className="text-sm hidden sm:inline">Datum</span>
                  </div>
                  <div className="w-8 h-0.5 bg-stone-300" />
                  <div className={`flex items-center gap-2 ${step === 'time' ? 'text-emerald-600' : step === 'info' || step === 'success' ? 'text-emerald-700' : 'text-stone-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'time' ? 'border-emerald-500 bg-emerald-50' : step === 'info' || step === 'success' ? 'border-emerald-600 bg-emerald-100' : 'border-stone-300'}`}>
                      {step === 'info' || step === 'success' ? <Check className="w-4 h-4" /> : '2'}
                    </div>
                    <span className="text-sm hidden sm:inline">Uhrzeit</span>
                  </div>
                  <div className="w-8 h-0.5 bg-stone-300" />
                  <div className={`flex items-center gap-2 ${step === 'info' ? 'text-emerald-600' : step === 'success' ? 'text-emerald-700' : 'text-stone-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'info' ? 'border-emerald-500 bg-emerald-50' : step === 'success' ? 'border-emerald-600 bg-emerald-100' : 'border-stone-300'}`}>
                      {step === 'success' ? <Check className="w-4 h-4" /> : '3'}
                    </div>
                    <span className="text-sm hidden sm:inline">Angaben</span>
                  </div>
                </div>

                {/* Step: Select Date */}
                {step === 'date' && (
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl text-[#183028] text-center mb-6">
                      Datum wählen
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {availableDates.map((date, index) => {
                        const isToday = date.toDateString() === new Date().toDateString();
                        return (
                          <button
                            key={index}
                            onClick={() => handleDateSelect(date)}
                            className="group relative p-4 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400/60 rounded-xl transition-all duration-300 text-left"
                          >
                            {isToday && (
                              <span className="absolute top-2 right-2 text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                                Heute
                              </span>
                            )}
                            <div className="text-stone-500 text-xs mb-1">
                              {date.toLocaleDateString('de-AT', { weekday: 'short' })}
                            </div>
                            <div className="text-stone-800 text-lg font-semibold">
                              {date.getDate()}
                            </div>
                            <div className="text-stone-500 text-xs">
                              {date.toLocaleDateString('de-AT', { month: 'short' })}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step: Select Time */}
                {step === 'time' && selectedDate && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <button
                        onClick={() => setStep('date')}
                        className="text-emerald-600 hover:text-emerald-700 text-sm mb-2"
                      >
                        ← Datum ändern
                      </button>
                      <h3 className="text-xl md:text-2xl text-[#183028]">
                        Uhrzeit wählen
                      </h3>
                      <p className="text-stone-500 text-sm mt-2">
                        {formatDate(selectedDate)}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => handleTimeSelect(time)}
                          className="p-3 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400/60 rounded-xl transition-all duration-300 text-center"
                        >
                          <div className="text-stone-800 font-medium">{time}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step: Contact Info */}
                {step === 'info' && selectedDate && selectedTime && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <button
                        onClick={() => setStep('time')}
                        className="text-emerald-600 hover:text-emerald-700 text-sm mb-2"
                      >
                        ← Uhrzeit ändern
                      </button>
                      <h3 className="text-xl md:text-2xl text-[#183028]">
                        Ihre Kontaktdaten
                      </h3>
                      <p className="text-stone-500 text-sm mt-2">
                        {formatDate(selectedDate)} at {selectedTime}
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-stone-700 text-sm font-medium">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 bg-white border-2 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-all ${
                              errors.name ? 'border-red-400' : 'border-stone-300'
                            }`}
                            placeholder="Ihr vollständiger Name"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 text-stone-700 text-sm font-medium">
                          E-Mail *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 bg-white border-2 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-all ${
                              errors.email ? 'border-red-400' : 'border-stone-300'
                            }`}
                            placeholder="ihre@email.at"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-2 text-stone-700 text-sm font-medium">
                          Telefon *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 bg-white border-2 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-all ${
                              errors.phone ? 'border-red-400' : 'border-stone-300'
                            }`}
                            placeholder="+43 123 456789"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block mb-2 text-stone-700 text-sm font-medium">
                          Anmerkungen (optional)
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-stone-400" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full pl-12 pr-4 py-3 bg-white border-2 border-stone-300 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                            placeholder="Schildern Sie uns Ihren Betreuungsbedarf..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl hover:from-emerald-700 hover:to-teal-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/30 font-semibold"
                      >
                        Termin bestätigen
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                )}

                {/* Step: Success */}
                {step === 'success' && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
                      <Check className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl text-emerald-700 mb-2">
                      Anfrage gesendet!
                    </h3>
                    <div className="max-w-md mx-auto space-y-3 text-stone-600">
                      <p>
                        Ihre Beratungsanfrage wurde an unser Team weitergeleitet.
                      </p>
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                        <p className="text-sm text-stone-500 mb-2">Ihre Termindetails:</p>
                        <p className="text-emerald-700 font-medium">{selectedDate && formatDate(selectedDate)}</p>
                        <p className="text-emerald-700 font-medium">{selectedTime}</p>
                      </div>
                      <p className="text-sm text-stone-500">
                        Wir bestätigen Ihren Termin per E-Mail oder Telefon innerhalb von 24 Stunden.
                      </p>
                    </div>
                    <button
                      onClick={resetBooking}
                      className="px-8 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-all border border-stone-300"
                    >
                      Weiteren Termin buchen
                    </button>
                  </motion.div>
                )}

              </div>
            </div>

            {/* Help text */}
            <p className="text-center text-stone-500 text-sm mt-6 px-4">
              Fragen? Kontaktieren Sie uns:{' '}
              <a href="mailto:office@d-care24.at" className="text-emerald-700 hover:underline">
                office@d-care24.at
              </a>{' '}
              oder{' '}
              <a href="tel:+436704047322" className="text-emerald-700 hover:underline">
                0670 4047322
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(5, 150, 105, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(5, 150, 105, 0.65);
        }
      `}</style>
    </section>
  );
};