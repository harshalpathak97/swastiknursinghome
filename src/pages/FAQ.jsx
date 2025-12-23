import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FAQ = () => {
  const { clinicData } = useContext(AppContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 px-4 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-dark mb-4 animate-slideInFromTop" style={{ animationDelay: '0.1s' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Find answers to common questions about our services, appointments, and policies
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {clinicData.faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-lg shadow-sm animate-slideInFromBottom" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-neutral-dark pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-primary flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16 bg-neutral-light rounded-2xl p-6 sm:p-8 md:p-12 mx-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-4 px-4 animate-slideInFromTop" style={{ animationDelay: '0.9s' }}>Still Have Questions?</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '1.0s' }}>
          We're here to help! Contact us directly for personalized assistance with your healthcare needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '1.1s' }}
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${clinicData.clinic.phone}`}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '1.2s' }}
          >
            Call Now: {clinicData.clinic.phone}
          </a>
          <a
            href="/contact"
            className="bg-neutral-dark hover:bg-neutral-dark/90 text-white px-8 py-3 rounded-full font-semibold transition-colors animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '1.3s' }}
          >
            Contact Form
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center px-4 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
        <div className="bg-neutral-light border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">Medical Disclaimer</h3>
          <p className="text-primary/90 text-sm">
            The information provided on this website is for general informational purposes only and is not intended as medical advice.
            Always consult with qualified healthcare professionals for medical concerns and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
