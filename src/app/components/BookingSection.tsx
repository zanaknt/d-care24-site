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
      className="py-16 md:py-24 bg-gradient-to-b from-[#050B1A] via-[#0A1628] to-[#050B1A] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30 text-sm backdrop-blur-sm">
            <Calendar className="w-4 h-4" />
            <span>Book Your Free Consultation</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent px-4">
            Free 1:1 Consultation Call
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Find the right care solution in just 15 minutes. Schedule your personal session now.
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
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/20">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">15-30 Minutes</h3>
              <p className="text-sm text-gray-400">
                Quick and efficient consultation tailored to your needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/20">
                <Video className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Video or Phone</h3>
              <p className="text-sm text-gray-400">
                Choose your preferred consultation method
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/20">
                <Calendar className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Flexible Schedule</h3>
              <p className="text-sm text-gray-400">
                Book a time that works best for you
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
            <div className="relative rounded-2xl bg-gradient-to-br from-[#111827] to-[#0A1628] p-1 shadow-2xl">
              {/* Glowing border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl opacity-50 blur-sm animate-pulse" 
                   style={{ animationDuration: '3s' }} 
              />
              
              {/* Inner container */}
              <div className="relative bg-[#0A1628] rounded-2xl overflow-hidden p-6 md:p-8">
                
                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-8 gap-2">
                  <div className={`flex items-center gap-2 ${step === 'date' ? 'text-cyan-400' : step === 'time' || step === 'info' || step === 'success' ? 'text-cyan-500' : 'text-gray-500'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'date' ? 'border-cyan-400 bg-cyan-500/20' : step === 'time' || step === 'info' || step === 'success' ? 'border-cyan-500 bg-cyan-500/30' : 'border-gray-500'}`}>
                      {step === 'time' || step === 'info' || step === 'success' ? <Check className="w-4 h-4" /> : '1'}
                    </div>
                    <span className="text-sm hidden sm:inline">Date</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-600" />
                  <div className={`flex items-center gap-2 ${step === 'time' ? 'text-cyan-400' : step === 'info' || step === 'success' ? 'text-cyan-500' : 'text-gray-500'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'time' ? 'border-cyan-400 bg-cyan-500/20' : step === 'info' || step === 'success' ? 'border-cyan-500 bg-cyan-500/30' : 'border-gray-500'}`}>
                      {step === 'info' || step === 'success' ? <Check className="w-4 h-4" /> : '2'}
                    </div>
                    <span className="text-sm hidden sm:inline">Time</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-600" />
                  <div className={`flex items-center gap-2 ${step === 'info' ? 'text-cyan-400' : step === 'success' ? 'text-cyan-500' : 'text-gray-500'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'info' ? 'border-cyan-400 bg-cyan-500/20' : step === 'success' ? 'border-cyan-500 bg-cyan-500/30' : 'border-gray-500'}`}>
                      {step === 'success' ? <Check className="w-4 h-4" /> : '3'}
                    </div>
                    <span className="text-sm hidden sm:inline">Info</span>
                  </div>
                </div>

                {/* Step: Select Date */}
                {step === 'date' && (
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl text-white text-center mb-6">
                      Select a Date
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {availableDates.map((date, index) => {
                        const isToday = date.toDateString() === new Date().toDateString();
                        return (
                          <button
                            key={index}
                            onClick={() => handleDateSelect(date)}
                            className="group relative p-4 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all duration-300 text-left"
                          >
                            {isToday && (
                              <span className="absolute top-2 right-2 text-[10px] bg-cyan-500 text-white px-2 py-0.5 rounded-full">
                                Today
                              </span>
                            )}
                            <div className="text-gray-400 text-xs mb-1">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div className="text-white text-lg font-semibold">
                              {date.getDate()}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {date.toLocaleDateString('en-US', { month: 'short' })}
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
                        className="text-cyan-400 hover:text-cyan-300 text-sm mb-2"
                      >
                        ← Change Date
                      </button>
                      <h3 className="text-xl md:text-2xl text-white">
                        Select a Time
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {formatDate(selectedDate)}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => handleTimeSelect(time)}
                          className="p-3 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all duration-300 text-center"
                        >
                          <div className="text-white font-medium">{time}</div>
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
                        className="text-cyan-400 hover:text-cyan-300 text-sm mb-2"
                      >
                        ← Change Time
                      </button>
                      <h3 className="text-xl md:text-2xl text-white">
                        Your Information
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {formatDate(selectedDate)} at {selectedTime}
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-white text-sm">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 bg-white/5 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all ${
                              errors.name ? 'border-red-500' : 'border-white/10'
                            }`}
                            placeholder="Your full name"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 text-white text-sm">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 bg-white/5 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all ${
                              errors.email ? 'border-red-500' : 'border-white/10'
                            }`}
                            placeholder="your@email.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-2 text-white text-sm">
                          Phone *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 bg-white/5 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all ${
                              errors.phone ? 'border-red-500' : 'border-white/10'
                            }`}
                            placeholder="+43 123 456789"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block mb-2 text-white text-sm">
                          Additional Notes (Optional)
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                            placeholder="Tell us about your care needs..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 font-semibold"
                      >
                        Confirm Booking
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
                    <h3 className="text-2xl md:text-3xl text-emerald-400 mb-2">
                      Booking Request Sent!
                    </h3>
                    <div className="max-w-md mx-auto space-y-3 text-gray-300">
                      <p>
                        Your consultation request has been sent to our team.
                      </p>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-sm text-gray-400 mb-2">Booking Details:</p>
                        <p className="text-cyan-400">{selectedDate && formatDate(selectedDate)}</p>
                        <p className="text-cyan-400">{selectedTime}</p>
                      </div>
                      <p className="text-sm text-gray-400">
                        We will confirm your appointment via email or phone within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={resetBooking}
                      className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/20"
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                )}

              </div>
            </div>

            {/* Help text */}
            <p className="text-center text-gray-400 text-sm mt-6 px-4">
              Questions? Contact us at{' '}
              <a href="mailto:office@d-care24.at" className="text-cyan-400 hover:underline">
                office@d-care24.at
              </a>{' '}
              or call{' '}
              <a href="tel:+436704047322" className="text-cyan-400 hover:underline">
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
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 188, 212, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 188, 212, 0.7);
        }
      `}</style>
    </section>
  );
};