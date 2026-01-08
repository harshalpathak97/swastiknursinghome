import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import ImageCarousel from "./ImageCarousel";

const Header = () => {
  const { clinicData } = useContext(AppContext);

  // Prepare images for the carousel
  const carouselImages = clinicData.clinic.images && clinicData.clinic.images.length > 0
    ? clinicData.clinic.images
    : [{ url: assets.header_img, alt: "Swastik Nursing Home" }];

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel
          images={carouselImages}
          autoPlayInterval={5000}
          className="h-full rounded-none"
          contentClassName="h-full"
        />
      </div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white h-full pt-16 gap-6 sm:gap-8 animate-in fade-in duration-1000">

        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Trusted Care for Your Family, <span className="text-primary-foreground text-blue-200">Under One Roof</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            From the first visit to full recovery, we stay with you with compassionate and expert care.
          </p>
        </div>

        {/* Quick Info Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
            <span className="text-lg">📍</span>
            <span className="text-sm font-medium">Ghatkopar West</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
            <span className="text-lg">🕒</span>
            <span className="text-sm font-medium">Mon-Sat: {clinicData.clinic.timings.monday}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 w-full sm:w-auto">
          <Button
            asChild
            className="h-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
          >
            <a href="/contact#appointment-form">Book Appointment</a>
          </Button>

          <a
            href={`https://wa.me/${clinicData.clinic.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
          >
            <span className="text-xl">💬</span> WhatsApp Us
          </a>
        </div>

        {/* Trust/Social Proof */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 animate-in fade-in duration-1000 delay-1000 opacity-0 fill-mode-forwards" style={{ animationFillMode: 'forwards' }}>
          <div className="flex -space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-white" src={assets.group_profiles} alt="Happy patients" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-bold">+1k</div>
          </div>
          <p className="text-sm text-gray-200 font-medium drop-shadow">Join thousands of happy families</p>
        </div>

      </div>
    </div>
  );
};

export default Header;
