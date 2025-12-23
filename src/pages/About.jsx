import { assets } from '../assets/assets';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const About = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="py-8 px-4 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-dark mb-4 animate-slideInFromTop" style={{ animationDelay: '0.1s' }}>
          About <span className="text-primary">{clinicData.clinic.name}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Your trusted healthcare partner in Ghatkopar West, providing specialized pediatric and orthopedic care with compassion and expertise.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="flex justify-center animate-slideInFromLeft" style={{ animationDelay: '0.3s' }}>
          <img
            className="w-full max-w-md rounded-lg shadow-lg"
            src={assets.about_image}
            alt="Swastik Nursing Home Clinic"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-neutral-dark mb-4">Our Story</h2>
            <p className="leading-relaxed mb-4">
              Swastik Nursing Home has been serving the Ghatkopar West community for years, providing quality healthcare services
              with a focus on family-centered care. Located conveniently near Shreyas Cinema, we are committed to delivering
              personalized medical attention in a comfortable and welcoming environment.
            </p>
            <p className="leading-relaxed">
              Our experienced doctors, Dr. Amit Shah (Pediatrician) and Dr. Swapnil Shah (Orthopedic Surgeon), bring years of
              expertise and dedication to ensure the best possible outcomes for our patients. We understand that each family
              has unique healthcare needs, and we strive to provide comprehensive care that addresses both physical and
              emotional well-being.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-neutral-dark mb-3">Our Mission</h3>
            <p className="leading-relaxed">
              To provide accessible, high-quality healthcare services to families in Ghatkopar West, combining medical expertise
              with compassionate care. We are dedicated to building lasting relationships with our patients and being a trusted
              healthcare partner for every stage of life.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-4 animate-slideInFromTop" style={{ animationDelay: '0.5s' }}>Why Choose Swastik Nursing Home</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            What makes us the preferred healthcare choice for families in Ghatkopar West
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicData.whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center group animate-bounceIn" style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Highlights */}
      <div className="bg-neutral-light rounded-2xl p-6 sm:p-8 md:p-12 mb-20 mx-4 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-4 animate-slideInFromTop" style={{ animationDelay: '1.3s' }}>Our Facility</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
            A modern, patient-friendly clinic designed for comfort and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center animate-bounceIn" style={{ animationDelay: '1.5s' }}>
            <div className="text-3xl mb-3 text-primary">🏥</div>
            <h4 className="font-semibold text-neutral-dark mb-2">Modern Clinic</h4>
            <p className="text-sm text-gray-600">Well-equipped facility with hygienic environment</p>
          </div>
          <div className="text-center animate-bounceIn" style={{ animationDelay: '1.6s' }}>
            <div className="text-3xl mb-3 text-primary">🅿️</div>
            <h4 className="font-semibold text-neutral-dark mb-2">Parking Available</h4>
            <p className="text-sm text-gray-600">Dedicated parking space for patient convenience</p>
          </div>
          <div className="text-center animate-bounceIn" style={{ animationDelay: '1.7s' }}>
            <div className="text-3xl mb-3 text-primary">📍</div>
            <h4 className="font-semibold text-neutral-dark mb-2">Prime Location</h4>
            <p className="text-sm text-gray-600">Conveniently located near Shreyas Cinema</p>
          </div>
          <div className="text-center animate-bounceIn" style={{ animationDelay: '1.8s' }}>
            <div className="text-3xl mb-3 text-primary">👨‍👩‍👧‍👦</div>
            <h4 className="font-semibold text-neutral-dark mb-2">Family-Friendly</h4>
            <p className="text-sm text-gray-600">Welcoming atmosphere for families and children</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary text-white rounded-2xl p-6 sm:p-8 md:p-12 mx-4 animate-slideInFromBottom" style={{ animationDelay: '2.0s' }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4 animate-fadeIn" style={{ animationDelay: '2.1s' }}>Experience Quality Healthcare</h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90 px-4 animate-fadeIn" style={{ animationDelay: '2.2s' }}>
          Join the families who trust Swastik Nursing Home for their healthcare needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-full font-semibold transition-colors animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '2.3s' }}
          >
            Book Your Appointment
          </a>
          <a
            href={`tel:${clinicData.clinic.phone}`}
            className="bg-white text-neutral-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '2.4s' }}
          >
            Call Us: {clinicData.clinic.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
