import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const ImageCarousel = ({ images, autoPlayInterval = 5000, className, contentClassName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={cn("relative w-full rounded-lg overflow-hidden group", className)}>
      <div className={cn("relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]", contentClassName)}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <div className={`absolute inset-0 transform transition-transform duration-[8000ms] ease-out ${index === currentIndex ? 'scale-110' : 'scale-100'}`}>
              <img
                src={image.url}
                alt={image.alt || `Hospital image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Darker Modern Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 transform transition-transform duration-1000 delay-500 translate-y-0">
                <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide border-l-4 border-primary pl-4 backdrop-blur-sm bg-black/10 inline-block py-2 rounded-r-lg max-w-md animate-fadeInUp">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-white/20"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-white/20"
        aria-label="Next image"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-white w-6 sm:w-8'
              : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

