import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg px-4 sm:px-6 md:px-10 lg:px-12 my-20 mx-4 md:mx-10">
      {/* Testimonials Section */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by families in Ghatkopar West for quality healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
              <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-white/70 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-white text-neutral-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
