import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="md:mx-10 px-4">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 sm:gap-14 my-10 mt-40 text-sm">
        {/* left section  */}
        <div className="text-center sm:text-left">
          <div className="mb-5 text-xl sm:text-2xl font-bold text-gray-800">
            {clinicData.clinic.name}
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">{clinicData.clinic.description}</p>
          <div className="mt-4">
            <p className="font-medium text-gray-800 mb-2">Clinic Hours:</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Mon-Sat: {clinicData.clinic.timings.monday}</li>
              <li>Sunday: {clinicData.clinic.timings.sunday}</li>
            </ul>
          </div>
        </div>
        {/* center section  */}
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-xl font-medium mb-5">Quick Links</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/doctors" className="hover:text-primary">Doctors</a></li>
            <li><a href="/about" className="hover:text-primary">About Us</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
          </ul>
        </div>
        {/* right section  */}
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <span>📞</span>
              <a href={`tel:${clinicData.clinic.phone}`} className="hover:text-primary">
                {clinicData.clinic.phone}
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <span>💬</span>
              <a
                href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <span>✉️</span>
              <a href={`mailto:${clinicData.clinic.email}`} className="hover:text-primary">
                {clinicData.clinic.email}
              </a>
            </li>
            <li className="mt-3">
              <p className="font-medium text-gray-800 mb-1">Address:</p>
              <p className="text-sm">{clinicData.clinic.addressShort}</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyright  */}
        <p className="py-5 text-sm text-center border-t border-gray-300 px-4">
          © 2025 {clinicData.clinic.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
