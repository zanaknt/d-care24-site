import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050B1A] to-[#0A1628] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl text-white">Privacy Policy</h1>
            </div>

            <div className="space-y-6 text-gray-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-semibold mb-2">1. Data Protection Overview</h3>
                <p className="leading-relaxed">
                  D-Care24+ takes the protection of your personal data very seriously. We treat
                  your personal data confidentially and in accordance with statutory data
                  protection regulations and this privacy policy.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">2. Data Controller</h3>
                <p className="leading-relaxed">
                  The party responsible for processing data on this website (data controller) is:
                </p>
                <p className="mt-2">
                  D-Care24+ GmbH
                  <br />
                  Musterstraße 123, 4020 Linz, Austria
                  <br />
                  Email: office@d-care24.at
                  <br />
                  Phone: +43 670 404 73 22
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">3. Data Collection on This Website</h3>
                <h4 className="text-white font-medium mt-3 mb-1">Cookies</h4>
                <p className="leading-relaxed">
                  Our website uses cookies. Cookies are small text files that are stored on your
                  device by your browser. Cookies do not cause any damage to your device and do
                  not contain viruses. We use cookies to make our website more user-friendly,
                  effective, and secure.
                </p>
                <h4 className="text-white font-medium mt-3 mb-1">Contact Form</h4>
                <p className="leading-relaxed">
                  When you submit inquiries via our contact form, the data you provide (name,
                  email, phone, message) will be stored by us for the purpose of processing your
                  inquiry and in case of follow-up questions. This data will not be passed on
                  without your consent.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">4. Your Rights (GDPR)</h3>
                <p className="leading-relaxed">
                  You have the right to information, correction, deletion, restriction of
                  processing, data portability, and objection. You also have the right to lodge a
                  complaint with a supervisory authority.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">5. Analytics and Third-Party Tools</h3>
                <p className="leading-relaxed">
                  We use basic analytics tools to understand how visitors use our website. These
                  tools collect data anonymously and help us improve user experience. No personal
                  data is shared with third parties without your explicit consent.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">6. Data Security</h3>
                <p className="leading-relaxed">
                  We use SSL/TLS encryption for data transmission. However, we would like to point
                  out that data transmission over the Internet can have security gaps.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                <p>Last updated: January 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
