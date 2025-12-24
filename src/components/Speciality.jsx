import { specialityData } from "../assets/assets";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Speciality = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div id="speciality" className="flex flex-col items-center gap-3 sm:gap-4 py-10 sm:py-12 md:py-16 px-3 sm:px-4 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-medium text-neutral-dark text-center animate-slideInFromTop">Our Specialties</h1>
      <p className="w-full sm:w-2/3 md:w-1/3 text-center text-xs sm:text-sm text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        Expert care in pediatrics and orthopedics for your family's health needs
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-5 w-full animate-slideInFromBottom" style={{ animationDelay: '0.2s' }}>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[80px] sm:min-w-[100px]"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-14 sm:w-20 md:w-24 mb-1 sm:mb-2" src={item.image} alt={item.speciality} />
            <p className="text-neutral-dark text-center text-xs sm:text-sm">{item.speciality}</p>
          </Link>
        ))}
      </div>

      {/* Quick Service Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 w-full max-w-4xl animate-slideInFromBottom px-2 sm:px-0" style={{ animationDelay: '00.4s' }}>
        <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg hover:bg-blue-100 transition-colors">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-primary">👶</div>
          <h3 className="font-semibold text-xs sm:text-sm text-neutral-dark">Pediatrics</h3>
          <p className="text-xs text-gray-600 mt-1">Child Healthcare</p>
        </div>
        <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg hover:bg-green-100 transition-colors">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-secondary">🦴</div>
          <h3 className="font-semibold text-xs sm:text-sm text-neutral-dark">Orthopedics</h3>
          <p className="text-xs text-gray-600 mt-1">Bone & Joint Care</p>
        </div>
        <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg hover:bg-purple-100 transition-colors">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-purple-600">💉</div>
          <h3 className="font-semibold text-xs sm:text-sm text-neutral-dark">Vaccinations</h3>
          <p className="text-xs text-gray-600 mt-1">Immunization</p>
        </div>
        <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg hover:bg-orange-100 transition-colors">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-accent">🏥</div>
          <h3 className="font-semibold text-xs sm:text-sm text-neutral-dark">Consultation</h3>
          <p className="text-xs text-gray-600 mt-1">Expert Care</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
