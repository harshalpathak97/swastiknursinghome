import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const DoctorProfile = () => {
  const { clinicData } = useContext(AppContext);
  const { doctorId } = useParams();
  const navigate = useNavigate();

  // Find the doctor based on the URL parameter
  const doctor = clinicData.doctors.find(doc => doc.id === doctorId);

  if (!doctor) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-neutral-dark mb-4">Doctor Not Found</h1>
        <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/doctors')}
          className="bg-primary text-white px-6 py-2 rounded-full"
        >
          View All Doctors
        </button>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-8 px-3 sm:px-4 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-8 sm:py-10 md:py-12 lg:py-16 animate-slideInFromTop" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg animate-bounceIn" style={{ animationDelay: '0.2s' }}
            />
            <div className="text-center md:text-left animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-base sm:text-lg md:text-xl mb-2 opacity-90">{doctor.specialty}</p>
              <p className="text-sm sm:text-base md:text-lg opacity-80">{doctor.degree} • {doctor.credentials}</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 justify-center md:justify-start">
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {doctor.experience}
                </span>
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {doctor.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-dark mb-3 sm:mb-4 text-center lg:text-left">About Dr. {doctor.name.split(' ')[1]}</h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-center lg:text-left">{doctor.longBio}</p>

              {/* Areas of Focus */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-dark mb-2 sm:mb-3 text-center lg:text-left">Areas of Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {doctor.areasOfFocus.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-700 text-sm sm:text-base">{area}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-dark mb-2 sm:mb-3 text-center lg:text-left">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {doctor.languages.map((language, index) => (
                  <span key={index} className="bg-neutral-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700 animate-fadeIn" style={{ animationDelay: `${1.0 + index * 0.1}s` }}>
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 animate-fadeIn" style={{ animationDelay: '1.3s' }}>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-800 mb-2 text-center lg:text-left">Medical Disclaimer</h3>
              <p className="text-yellow-700 text-xs sm:text-sm text-center lg:text-left leading-relaxed">
                Information on this site is for general guidance and not a substitute for medical consultation.
                Always consult with a qualified healthcare professional for medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 animate-slideInFromRight" style={{ animationDelay: '0.6s' }}>
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-dark mb-3 sm:mb-4 text-center lg:text-left">Book Consultation</h3>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi, I would like to book an appointment with Dr. ${doctor.name.split(' ')[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 animate-bounceIn" style={{ animationDelay: '1.4s' }}
                >
                  <span>💬</span>
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${clinicData.clinic.phone}`}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 animate-bounceIn" style={{ animationDelay: '1.5s' }}
                >
                  <span>📞</span>
                  Call Now
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-neutral-light hover:bg-gray-200 text-neutral-dark py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors animate-bounceIn" style={{ animationDelay: '1.6s' }}
                >
                  Contact Form
                </button>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 animate-fadeIn" style={{ animationDelay: '1.7s' }}>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-dark mb-3 sm:mb-4 text-center lg:text-left">Clinic Information</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-center lg:text-left">
                <div>
                  <p className="font-semibold text-neutral-dark">Clinic</p>
                  <p className="text-gray-600">{clinicData.clinic.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark">Address</p>
                  <a
                    href={clinicData.clinic.googleMapsLink || 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors cursor-pointer block break-words"
                  >
                    {clinicData.clinic.addressShort}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark">Timings</p>
                  <p className="text-gray-600">{doctor.availability}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark">Phone</p>
                  <a href={`tel:${clinicData.clinic.phone}`} className="text-primary hover:underline break-all">
                    {clinicData.clinic.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/doctors')}
              className="w-full bg-neutral-light hover:bg-gray-200 text-neutral-dark py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors animate-bounceIn" style={{ animationDelay: '1.8s' }}
            >
              ← Back to Doctors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
