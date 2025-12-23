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
    <div className="py-8 px-4 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 sm:py-16 animate-slideInFromTop" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-lg animate-bounceIn" style={{ animationDelay: '0.2s' }}
            />
            <div className="text-center md:text-left animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-lg sm:text-xl mb-2 opacity-90">{doctor.specialty}</p>
              <p className="text-base sm:text-lg opacity-80">{doctor.degree} • {doctor.credentials}</p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {doctor.experience}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {doctor.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-dark mb-4 text-center lg:text-left">About Dr. {doctor.name.split(' ')[1]}</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-center lg:text-left">{doctor.longBio}</p>

              {/* Areas of Focus */}
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-3 text-center lg:text-left">Areas of Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {doctor.areasOfFocus.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-3 text-center lg:text-left">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {doctor.languages.map((language, index) => (
                  <span key={index} className="bg-neutral-light px-3 py-1 rounded-full text-sm text-gray-700 animate-fadeIn" style={{ animationDelay: `${1.0 + index * 0.1}s` }}>
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 animate-fadeIn" style={{ animationDelay: '1.3s' }}>
              <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-2 text-center lg:text-left">Medical Disclaimer</h3>
              <p className="text-yellow-700 text-sm text-center lg:text-left">
                Information on this site is for general guidance and not a substitute for medical consultation.
                Always consult with a qualified healthcare professional for medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-slideInFromRight" style={{ animationDelay: '0.6s' }}>
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-dark mb-4 text-center lg:text-left">Book Consultation</h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi, I would like to book an appointment with Dr. ${doctor.name.split(' ')[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 animate-bounceIn" style={{ animationDelay: '1.4s' }}
                >
                  <span>💬</span>
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${clinicData.clinic.phone}`}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 animate-bounceIn" style={{ animationDelay: '1.5s' }}
                >
                  <span>📞</span>
                  Call Now
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-neutral-light hover:bg-gray-200 text-neutral-dark py-3 px-4 rounded-lg font-semibold transition-colors animate-bounceIn" style={{ animationDelay: '1.6s' }}
                >
                  Contact Form
                </button>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeIn" style={{ animationDelay: '1.7s' }}>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-dark mb-4 text-center lg:text-left">Clinic Information</h3>
              <div className="space-y-3 text-sm text-center lg:text-left">
                <div>
                  <p className="font-semibold text-neutral-dark">Clinic</p>
                  <p className="text-gray-600">{clinicData.clinic.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark">Address</p>
                  <p className="text-gray-600">{clinicData.clinic.addressShort}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark">Timings</p>
                  <p className="text-gray-600">{doctor.availability}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark">Phone</p>
                  <a href={`tel:${clinicData.clinic.phone}`} className="text-primary hover:underline">
                    {clinicData.clinic.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/doctors')}
              className="w-full bg-neutral-light hover:bg-gray-200 text-neutral-dark py-3 px-4 rounded-lg font-semibold transition-colors animate-bounceIn" style={{ animationDelay: '1.8s' }}
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
