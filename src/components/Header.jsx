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
    <div className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">

      {/* Background Carousel */}
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel
          images={carouselImages}
          autoPlayInterval={6000}
          className="h-full rounded-none"
          contentClassName="h-full"
        />
      </div>

      {/* Modern Gradient Overlay - sophisticated masking */}
      {/* 1. Left fade for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent opacity-95 sm:opacity-100" />

      {/* 2. Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center h-full gap-6 max-w-5xl">

        {/* Decorative Element */}
        <div className="w-20 h-1 bg-primary rounded-full mb-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}></div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Trusted Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary whitespace-nowrap">Your Family,</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-800 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>
            Under One Roof.
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal max-w-2xl leading-relaxed opacity-0 animate-fadeInUp backdrop-blur-[2px]" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          From the first visit to full recovery, we stay with you with compassionate and expert care.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}>
          <Button
            asChild
            className="h-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-4 ring-primary/20"
          >
            <a href="/contact#appointment-form">Book Appointment</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-white text-primary text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <a href="/about">Learn More</a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Header;
