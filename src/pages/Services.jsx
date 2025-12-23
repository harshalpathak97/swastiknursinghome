import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Button } from "../components/ui/button";

const Services = () => {
  const { clinicData } = useContext(AppContext)

  const ServiceCard = ({ service, delay }) => (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-slideInFromBottom" style={{ animationDelay: `${delay}s` }}>
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  )

  return (
    <div className="py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-dark mb-4 animate-slideInFromTop">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          Comprehensive pediatric and orthopedic care services tailored to meet your family's healthcare needs
        </p>
      </div>

      {/* Pediatrics Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-4 px-4 animate-slideInFromTop" style={{ animationDelay: '0.2s' }}>Pediatric Care</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Specialized healthcare services for infants, children, and adolescents, focusing on their unique medical needs and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideInFromBottom" style={{ animationDelay: '0.4s' }}>
          {clinicData.services.pediatrics.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={0.1 + index * 0.05} />
          ))}
        </div>
      </div>

      {/* Orthopedics Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-4 px-4 animate-slideInFromTop" style={{ animationDelay: '0.5s' }}>Orthopedic Care</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Expert diagnosis and treatment of musculoskeletal conditions, injuries, and disorders affecting bones, joints, and muscles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideInFromBottom" style={{ animationDelay: '0.7s' }}>
          {clinicData.services.orthopedics.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={0.1 + index * 0.05} />
          ))}
        </div>
      </div>

      <div className="text-center mb-16">
        <Button asChild className="mt-4 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
          <a href="/contact#appointment-form">Book Appointment</a>
        </Button>
      </div>

      {/* Why Choose Our Services */}
      <div className="bg-neutral-light rounded-2xl p-6 sm:p-8 md:p-12 mx-4 animate-fadeIn" style={{ animationDelay: '1.0s' }}>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-4 px-4 animate-slideInFromTop" style={{ animationDelay: '1.1s' }}>Why Choose Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
            What sets Swastik Nursing Home apart in providing healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideInFromBottom" style={{ animationDelay: '1.3s' }}>
          {clinicData.whyChooseUs.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4 text-primary">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-primary text-white rounded-2xl p-6 sm:p-8 md:p-12 mx-4 animate-slideInFromBottom" style={{ animationDelay: '1.6s' }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4 animate-fadeIn" style={{ animationDelay: '1.7s' }}>Ready to Schedule Your Appointment?</h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90 px-4 animate-fadeIn" style={{ animationDelay: '1.8s' }}>
          Contact us today to book a consultation with our experienced doctors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '1.9s' }}
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${clinicData.clinic.phone}`}
            className="bg-white text-neutral-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '2.0s' }}
          >
            Call Now: {clinicData.clinic.phone}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
