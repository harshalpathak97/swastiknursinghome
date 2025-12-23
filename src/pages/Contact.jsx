import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const { clinicData } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredDate: '',
    preferredTime: '',
    doctor: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Appointment Request - ${formData.name}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Reason: ${formData.reason}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Preferred Doctor: ${formData.doctor}

This appointment request was submitted through the Swastik Nursing Home website.
    `.trim();

    const mailtoLink = `mailto:${clinicData.clinic.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Show success message
    alert('Thank you for your appointment request! We will contact you soon.');
  };

  const openGoogleMaps = () => {
    window.open(clinicData.clinic.googleMapsLink || 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9', '_blank');
  };

  return (
    <div className="py-8 px-4 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-dark mb-4 animate-slideInFromTop" style={{ animationDelay: '0.1s' }}>
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Get in touch with Swastik Nursing Home for appointments and healthcare inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Contact Information & Map */}
        <div className="animate-slideInFromLeft" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-dark mb-6 text-center lg:text-left">Clinic Information</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold text-neutral-dark mb-2">📍 Address</h3>
                <p className="text-gray-600 leading-relaxed">{clinicData.clinic.addressText}</p>
                <button
                  onClick={openGoogleMaps}
                  className="mt-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  🗺️ Open in Google Maps
                </button>
              </div>

              {/* Contact Details */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-lg font-semibold text-neutral-dark mb-2">📞 Contact Details</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${clinicData.clinic.phone}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <span>📱</span>
                    <span>{clinicData.clinic.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors"
                  >
                    <span>💬</span>
                    <span>WhatsApp: {clinicData.clinic.whatsappNumber}</span>
                  </a>
                  <a
                    href={`mailto:${clinicData.clinic.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <span>✉️</span>
                    <span>{clinicData.clinic.email}</span>
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-lg font-semibold text-neutral-dark mb-2">🕒 Clinic Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Saturday: {clinicData.clinic.timings.monday}</p>
                  <p>Sunday: {clinicData.clinic.timings.sunday}</p>
                </div>
                <p className="text-red-600 text-sm mt-2 font-medium">
                  {clinicData.clinic.emergencyNote}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:${clinicData.clinic.phone}`}
              className="bg-primary text-white p-4 rounded-lg text-center hover:bg-primary/90 transition-colors animate-bounceIn" style={{ animationDelay: '0.7s' }}
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold">Call Now</div>
            </a>
            <a
              href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-4 rounded-lg text-center hover:bg-[#20BA5A] transition-colors animate-bounceIn" style={{ animationDelay: '0.8s' }}
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-semibold">WhatsApp</div>
            </a>
            <a
              href={`mailto:${clinicData.clinic.email}`}
              className="bg-neutral-dark text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors animate-bounceIn" style={{ animationDelay: '0.9s' }}
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold">Email</div>
            </a>
          </div>
        </div>

        {/* Appointment Request Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 animate-slideInFromRight" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-dark mb-6 text-center lg:text-left">Book an Appointment</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Doctor</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Any Doctor</option>
                <option value="Dr. Amit Shah">Dr. Amit Shah (Pediatrician)</option>
                <option value="Dr. Swapnil Shah">Dr. Swapnil Shah (Orthopedic Surgeon)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit *</label>
              <textarea
                name="reason"
                required
                value={formData.reason}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please describe your symptoms or reason for visit"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any Time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary/90 transition-colors animate-bounceIn" style={{ animationDelay: '1.0s' }}
            >
              Send Appointment Request
            </button>
          </form>

          <div className="mt-6 p-4 bg-neutral-light rounded-lg animate-fadeIn" style={{ animationDelay: '1.1s' }}>
            <p className="text-primary text-sm">
              <strong>Note:</strong> This form will open your email client. We'll contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-neutral-light rounded-lg p-6 sm:p-8 text-center mx-4 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
        <div className="text-5xl sm:text-6xl mb-4">🗺️</div>
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-2 px-4">Find Us on Google Maps</h3>
        <p className="text-gray-600 mb-4 px-4">
          {clinicData.clinic.addressShort}
        </p>
        <button
          onClick={openGoogleMaps}
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors animate-bounceIn w-full sm:w-auto" style={{ animationDelay: '1.3s' }}
        >
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default Contact;
