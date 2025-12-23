import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Privacy = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="py-8 max-w-4xl mx-auto px-4 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slideInFromTop" style={{ animationDelay: '0.1s' }}>
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          How we collect, use, and protect your personal information
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-8">

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-center sm:text-left">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 text-center sm:text-left">
              <li>Submit appointment requests through our contact form</li>
              <li>Contact us via phone, WhatsApp, or email</li>
              <li>Provide information for medical consultations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4 text-center sm:text-left">
              This may include your name, phone number, email address, and details about your health concerns.
            </p>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-center sm:text-left">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 text-center sm:text-left">
              <li>Schedule and confirm appointments</li>
              <li>Provide medical care and consultations</li>
              <li>Communicate with you about your healthcare needs</li>
              <li>Improve our services and patient care</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">3. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
              except as described in this policy or as required by law. Your medical information is kept confidential and
              is only shared with healthcare providers involved in your care.
            </p>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. This includes physical, electronic, and administrative safeguards.
            </p>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">5. Contact Form Data</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-center sm:text-left">
              Information submitted through our appointment request form is used solely for scheduling purposes and
              providing healthcare services. We do not store this information in databases; it is processed through
              your email client for our records.
            </p>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              For appointment requests, we recommend using WhatsApp or calling directly for immediate assistance.
            </p>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-center sm:text-left">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 text-center sm:text-left">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for processing (where applicable)</li>
            </ul>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-center sm:text-left">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-center sm:text-left">
              <p className="font-semibold text-gray-800">{clinicData.clinic.name}</p>
              <a
                href={clinicData.clinic.googleMapsLink || 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer block"
              >
                {clinicData.clinic.addressShort}
              </a>
              <p className="text-gray-600">Phone: {clinicData.clinic.phone}</p>
              <p className="text-gray-600">Email: {clinicData.clinic.email}</p>
            </div>
          </section>

          <section className="animate-slideInFromBottom" style={{ animationDelay: '1.0s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">8. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="animate-fadeIn" style={{ animationDelay: '1.1s' }}>
            <p className="text-sm text-gray-500 italic">
              Last updated: December 2025
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This privacy policy applies to information collected through our website and healthcare services.
              For medical records and HIPAA-related privacy matters, please consult directly with our healthcare providers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
