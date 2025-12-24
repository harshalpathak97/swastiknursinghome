import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="md:mx-10 px-3 sm:px-4">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-8 md:gap-14 my-8 sm:my-10 mt-20 sm:mt-32 md:mt-40 text-xs sm:text-sm">
        {/* left section  */}
        <div className="text-center sm:text-left">
          <div className="mb-4 sm:mb-5 text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            {clinicData.clinic.name}
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed text-xs sm:text-sm">{clinicData.clinic.description}</p>
          <div className="mt-3 sm:mt-4">
            <p className="font-medium text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Clinic Hours:</p>
            <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
              <li>Mon-Sat: {clinicData.clinic.timings.monday}</li>
              <li>Sunday: {clinicData.clinic.timings.sunday}</li>
            </ul>
          </div>
        </div>
        {/* center section  */}
        <div className="text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-5">Quick Links</p>
          <ul className="flex flex-col gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="/doctors" className="hover:text-primary transition-colors">Doctors</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        {/* right section  */}
        <div className="text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-base">📞</span>
              <a href={`tel:${clinicData.clinic.phone}`} className="hover:text-primary transition-colors break-all">
                {clinicData.clinic.phone}
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-base">💬</span>
              <a
                href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-base">✉️</span>
              <a href={`mailto:${clinicData.clinic.email}`} className="hover:text-primary transition-colors break-all">
                {clinicData.clinic.email}
              </a>
            </li>
            <li className="mt-2 sm:mt-3">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Address:</p>
              <a
                href={clinicData.clinic.googleMapsLink || 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm hover:text-primary transition-colors cursor-pointer block break-words"
              >
                {clinicData.clinic.addressShort}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyright  */}
        <p className="py-4 sm:py-5 text-xs sm:text-sm text-center border-t border-gray-300 px-3 sm:px-4">
          © 2025 {clinicData.clinic.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
