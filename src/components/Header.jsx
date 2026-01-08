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
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel
          images={carouselImages}
          autoPlayInterval={5000}
          className="h-full rounded-none"
          contentClassName="h-full"
        />
      </div>

      {/* Gradient Overlay - subtle white from left for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-start justify-center text-left h-full gap-5 max-w-3xl">

        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Trusted Care for<br />Your Family,
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-primary opacity-0 animate-fadeInUp" style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>
            Under One Roof.
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal max-w-md leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          From the first visit to full recovery, we stay with you with compassionate and expert care. Conveniently located near Shreyas Cinema in Ghatkopar West.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}>
          <Button
            asChild
            className="h-auto px-8 py-4 rounded-md bg-primary hover:bg-primary/90 text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <a href="/contact#appointment-form">Get started now</a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Header;
