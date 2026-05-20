import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Button } from "../components/ui/button";
import SEO from '../components/SEO'

const Services = () => {
  const { clinicData } = useContext(AppContext)

  const ServiceCard = ({ service }) => (
    <div className="border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-3 sm:mb-4">
        <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">{service.icon}</span>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  )

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Medical Services at Swastik Nursing Home",
    "description": "Pediatric and orthopedic healthcare services in Ghatkopar West, Mumbai",
    "itemListElement": [
      ...clinicData.services.pediatrics.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "MedicalProcedure",
          "name": s.title,
          "description": s.description,
          "procedureType": "Therapeutic",
          "followup": "Consultation available at Swastik Nursing Home, Ghatkopar West"
        }
      })),
      ...clinicData.services.orthopedics.map((s, i) => ({
        "@type": "ListItem",
        "position": clinicData.services.pediatrics.length + i + 1,
        "item": {
          "@type": "MedicalProcedure",
          "name": s.title,
          "description": s.description,
          "procedureType": "Therapeutic",
          "followup": "Consultation available at Swastik Nursing Home, Ghatkopar West"
        }
      }))
    ]
  }

  return (
    <div className="py-8 sm:py-10 md:py-12 px-3 sm:px-4">
      <SEO
        title="Services - Pediatric &amp; Orthopedic Care"
        description="Comprehensive pediatric and orthopedic services in Ghatkopar West, Mumbai: newborn care, vaccinations, growth monitoring, joint pain, sports injuries, fracture care. Walk-ins welcome."
        canonical="/services"
        schema={servicesSchema}
      />
      {/* Hero Section */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-3 sm:mb-4">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-3 sm:px-4">
          Comprehensive pediatric and orthopedic care services tailored to meet your family's healthcare needs
        </p>
      </div>

      {/* Pediatrics Section */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-dark mb-3 sm:mb-4 px-3 sm:px-4">Pediatric Care</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3 sm:px-4">
            Specialized healthcare services for infants, children, and adolescents, focusing on their unique medical needs and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {clinicData.services.pediatrics.map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Orthopedics Section */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-dark mb-3 sm:mb-4 px-3 sm:px-4">Orthopedic Care</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3 sm:px-4">
            Expert diagnosis and treatment of musculoskeletal conditions, injuries, and disorders affecting bones, joints, and muscles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {clinicData.services.orthopedics.map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <Button asChild className="mt-4 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200">
          <a href="/contact#appointment-form">Book Appointment</a>
        </Button>
      </div>

      {/* Why Choose Our Services */}
      <div className="bg-neutral-light rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 mx-2 sm:mx-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-dark mb-3 sm:mb-4 px-3 sm:px-4">Why Choose Our Services</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-3 sm:px-4">
            What sets Swastik Nursing Home apart in providing healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clinicData.whyChooseUs.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-primary">{reason.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-10 sm:mt-12 md:mt-16 bg-primary text-white rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 mx-2 sm:mx-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-3 sm:px-4">Ready to Schedule Your Appointment?</h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-3 sm:px-4">
          Contact us today to book a consultation with our experienced doctors
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3 sm:px-4">
          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${clinicData.clinic.phone}`}
            className="bg-white text-neutral-dark px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto"
          >
            Call Now: {clinicData.clinic.phone}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
