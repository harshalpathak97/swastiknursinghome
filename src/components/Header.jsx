import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import ImageCarousel from "./ImageCarousel";

const Header = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="flex flex-col xl:flex-row lg:flex-row flex-wrap lg:px-10">

      {/* left side  */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-3 sm:gap-4 py-6 sm:py-8 md:py-10 px-3 sm:px-4 m-auto md:py-[10vw] md:mb-[-30px] animate-slideInFromLeft">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left text-black font-semibold leading-tight">
          {clinicData.clinic.name}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center lg:text-left text-gray-700 font-medium mb-2 px-2 sm:px-0">
          {clinicData.clinic.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-black text-xs sm:text-sm font-light text-center lg:text-left px-2 sm:px-0">
          <img className="w-20 sm:w-24 md:w-28 flex-shrink-0" src={assets.group_profiles} alt="Happy patients" />
          <p className="leading-relaxed">Experienced doctors providing compassionate care for your family. <br className="hidden sm:block" />
          Conveniently located near Shreyas Cinema in Ghatkopar West.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4 w-full sm:w-auto px-2 sm:px-0">
          <Button
            asChild
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-primary text-white text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a href="/contact#appointment-form">Book Appointment</a>
          </Button>
          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 justify-center lg:justify-start w-full px-2 sm:px-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-primary text-sm sm:text-base">📍</span>
            <span>Ghatkopar West</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-primary text-sm sm:text-base">🕒</span>
            <span className="whitespace-nowrap">Mon-Sat: {clinicData.clinic.timings.monday}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-primary text-sm sm:text-base">📞</span>
            <a href={`tel:${clinicData.clinic.phone}`} className="hover:text-primary">{clinicData.clinic.phone}</a>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="lg:w-1/2 relative animate-slideInFromRight px-3 sm:px-4 lg:px-0 flex items-center justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
        {clinicData.clinic.images && clinicData.clinic.images.length > 0 ? (
          <div className="w-full max-w-full lg:max-w-lg">
            <ImageCarousel images={clinicData.clinic.images} autoPlayInterval={5000} />
          </div>
        ) : (
          <img className="w-full lg:absolute bottom-0 h-auto rounded-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover" src={assets.header_img} alt="Swastik Nursing Home" />
        )}
      </div>
    </div>
  );
};

export default Header;
