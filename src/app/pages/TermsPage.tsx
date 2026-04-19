import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl text-white">Terms & Conditions</h1>
            </div>

            <div className="space-y-6 text-gray-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-semibold mb-2">1. Scope of Services</h3>
                <p className="leading-relaxed">
                  D-Care24+ provides professional 24-hour home care services (24-Stunden
                  Betreuung) throughout Austria. Our services include placement of qualified
                  caregivers, coordination, quality monitoring, and legal support in accordance
                  with Austrian regulations.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">2. Contract Formation</h3>
                <p className="leading-relaxed">
                  A contract is formed after a personal consultation and written confirmation by
                  both parties. The contract details the specific care requirements, pricing, and
                  start date of services.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">3. Pricing and Payment</h3>
                <p className="leading-relaxed">
                  Prices are quoted individually based on care level and specific requirements.
                  All prices include caregiver placement, social security contributions, and
                  ongoing support. Payment terms are specified in the individual service contract.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">4. Service Quality</h3>
                <p className="leading-relaxed">
                  All our caregivers are carefully selected, professionally trained, and legally
                  registered. We conduct regular quality checks and are available 24/7 for
                  support and emergency situations.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">5. Cancellation Policy</h3>
                <p className="leading-relaxed">
                  Either party may terminate the contract with 14 days' notice in writing.
                  Immediate termination is possible in case of serious breach of contract. Refunds
                  are calculated pro-rata for the unused service period.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">6. Replacement Caregivers</h3>
                <p className="leading-relaxed">
                  In case a caregiver is temporarily unavailable (illness, vacation), we provide a
                  qualified replacement caregiver at no additional cost to ensure continuous care.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">7. Liability</h3>
                <p className="leading-relaxed">
                  D-Care24+ is liable for damages caused by gross negligence or intent. All
                  caregivers are insured according to Austrian legal requirements. Liability is
                  limited to the extent permitted by Austrian law.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">8. Data Protection</h3>
                <p className="leading-relaxed">
                  All personal data is processed in accordance with the GDPR and Austrian data
                  protection regulations. For details, please refer to our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">9. Applicable Law</h3>
                <p className="leading-relaxed">
                  These Terms & Conditions and the contractual relationship are subject to Austrian
                  law. The place of jurisdiction is Linz, Austria.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                <p>Last updated: January 2025</p>
                <p className="mt-2">
                  These are general terms. Specific service contracts may include additional terms
                  tailored to individual care requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
