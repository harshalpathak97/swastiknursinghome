import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext";


const Topdoctors = () => {

  const navigate = useNavigate()
  const { doctors, clinicData } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 my-10 sm:my-12 md:my-16 px-3 sm:px-4 text-neutral-dark md:mx-10">
      <h1 className="text-2xl sm:text-3xl font-medium text-neutral-dark text-center animate-slideInFromTop">Our Expert Doctors</h1>
      <p className="w-full sm:w-2/3 md:w-1/3 text-center text-xs sm:text-sm text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>Meet our experienced doctors providing specialized care in pediatrics and orthopedics.</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-5 px-3 sm:px-0 max-w-4xl animate-slideInFromBottom" style={{ animationDelay: '0.2s' }}>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            onClick={() => navigate(`/doctors/${item._id}`)} // Changed to doctor profile page
            className="border border-primary/20 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white shadow-sm"
            key={index}
          >
            <img className="bg-neutral-light w-full h-40 sm:h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-center text-secondary mb-2 sm:mb-3">
                <p className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full"></p>
                <p>Available for Consultation</p>
              </div>
              <h3 className="text-neutral-dark text-lg sm:text-xl font-semibold mb-1">{item.name}</h3>
              <p className="text-primary text-sm sm:text-base font-medium mb-2">{item.speciality}</p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{item.degree}</p>
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 flex-wrap gap-1">
                <span>Experience: {item.experience}</span>
                <span className="font-semibold">{clinicData.currencySymbol}{item.fees}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => { navigate('/doctors'); window.scrollTo(0, 0) }}
        className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full mt-4 sm:mt-6 text-sm sm:text-base hover:bg-primary/90 transition-colors animate-bounceIn" style={{ animationDelay: '0.4s' }}
      >
        View All Doctors
      </button>
    </div>
  );
};

export default Topdoctors;
