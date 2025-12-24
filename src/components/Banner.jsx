import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg px-3 sm:px-4 md:px-6 lg:px-10 xl:px-12 my-12 sm:my-16 md:my-20 mx-2 sm:mx-4 md:mx-10">
      {/* Testimonials Section */}
      <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            What Our Patients Say
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Trusted by families in Ghatkopar West for quality healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {clinicData.testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 text-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
              <p className="text-white/90 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-white/20 pt-3 sm:pt-4">
                <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-white/70 text-xs sm:text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a
            href="/contact"
            className="inline-block bg-white text-neutral-dark px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
