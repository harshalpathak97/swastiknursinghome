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
            onClick={() => { navigate(`/doctors/${item._id}`); window.scrollTo(0, 0) }}
            className="group rounded-2xl overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/10"
            key={index}
          >
            <div className="overflow-hidden">
              <img
                className="bg-neutral-light w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-center text-green-500 mb-2 sm:mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p>Available for Consultation</p>
              </div>
              <h3 className="text-neutral-dark text-xl sm:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-primary text-sm sm:text-base font-medium mb-2">{item.speciality}</p>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{item.about}</p>
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <span className="bg-primary/5 px-3 py-1 rounded-full text-primary font-medium">{item.experience} Exp.</span>
                <span className="font-bold text-neutral-dark text-base">{clinicData.currencySymbol}{item.fees}</span>
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
