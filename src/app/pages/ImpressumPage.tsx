import React from 'react';
import { motion } from 'motion/react';
import { Building2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ImpressumPage: React.FC = () => {
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
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl text-white">Impressum</h1>
            </div>

            <div className="space-y-4 text-gray-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-semibold mb-2">Company Information</h3>
                <p>D-Care24+ GmbH</p>
                <p>Legal Form: Limited Liability Company (GmbH)</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p>Musterstraße 123</p>
                <p>4020 Linz, Oberösterreich</p>
                <p>Austria</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Contact</h3>
                <p>
                  Email:{' '}
                  <a href="mailto:office@d-care24.at" className="text-cyan-400 hover:underline">
                    office@d-care24.at
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+436704047322" className="text-cyan-400 hover:underline">
                    +43 670 404 73 22
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Company Register</h3>
                <p>Commercial Register: FN 123456a</p>
                <p>Commercial Court: Linz</p>
                <p>UID: ATU12345678</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Management</h3>
                <p>Managing Director: [Name]</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Professional Association</h3>
                <p>Trade Authority: Wirtschaftskammer Oberösterreich</p>
                <p>Professional Title: 24-Hour Care Services</p>
                <p>Country of Award: Austria</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Responsible for Content</h3>
                <p>D-Care24+ GmbH, represented by the Managing Director</p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                <p>
                  <strong>Disclaimer:</strong> Despite careful content control, we assume no
                  liability for the content of external links. The operators of linked pages are
                  solely responsible for their content.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
