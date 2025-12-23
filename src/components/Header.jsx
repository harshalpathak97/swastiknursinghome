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
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4 py-10 px-4 m-auto md:py-[10vw] md:mb-[-30px] animate-slideInFromLeft">
        <h1 className="text-3xl text-center lg:text-left md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight">
          {clinicData.clinic.name}
        </h1>
        <p className="text-xl text-center lg:text-left md:text-2xl text-gray-700 font-medium mb-2">
          {clinicData.clinic.tagline}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light text-center lg:text-left">
          <img className="w-28" src={assets.group_profiles} alt="Happy patients" />
          <p>Experienced doctors providing compassionate care for your family. <br className="hidden md:block" />
          Conveniently located near Shreyas Cinema in Ghatkopar West.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
          <Button
            asChild
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white text-sm font-medium hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a href="#appointment">Book Appointment</a>
          </Button>
          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-secondary text-white text-sm font-medium hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-600 justify-center lg:justify-start w-full">
          <div className="flex items-center gap-2">
            <span className="text-primary">📍</span>
            <span>Ghatkopar West</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">🕒</span>
            <span>Mon-Sat: {clinicData.clinic.timings.monday}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">📞</span>
            <span>{clinicData.clinic.phone}</span>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="lg:w-1/2 relative animate-slideInFromRight px-4 lg:px-0 flex items-center justify-center lg:justify-end">
        {clinicData.clinic.images && clinicData.clinic.images.length > 0 ? (
          <div className="w-full max-w-full lg:max-w-lg">
            <ImageCarousel images={clinicData.clinic.images} autoPlayInterval={5000} />
          </div>
        ) : (
          <img className="w-full lg:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="Swastik Nursing Home" />
        )}
      </div>
    </div>
  );
};

export default Header;
