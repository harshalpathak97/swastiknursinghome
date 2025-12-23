import { specialityData } from "../assets/assets";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Speciality = () => {
  const { clinicData } = useContext(AppContext);

  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-medium text-neutral-dark text-center animate-slideInFromTop">Our Specialties</h1>
      <p className="w-full sm:w-2/3 md:w-1/3 text-center text-sm text-gray-600 px-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        Expert care in pediatrics and orthopedics for your family's health needs
      </p>
      <div className="flex flex-wrap justify-center gap-4 pt-5 w-full overflow-scroll lg:flex animate-slideInFromBottom" style={{ animationDelay: '0.2s' }}>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
            <p className="text-neutral-dark text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>

      {/* Quick Service Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl animate-slideInFromBottom" style={{ animationDelay: '00.4s' }}>
        <div className="text-center p-4 bg-neutral-light rounded-lg hover:bg-blue-100 transition-colors">
          <div className="text-2xl mb-2 text-primary">👶</div>
          <h3 className="font-semibold text-sm text-neutral-dark">Pediatrics</h3>
          <p className="text-xs text-gray-600 mt-1">Child Healthcare</p>
        </div>
        <div className="text-center p-4 bg-neutral-light rounded-lg hover:bg-green-100 transition-colors">
          <div className="text-2xl mb-2 text-secondary">🦴</div>
          <h3 className="font-semibold text-sm text-neutral-dark">Orthopedics</h3>
          <p className="text-xs text-gray-600 mt-1">Bone & Joint Care</p>
        </div>
        <div className="text-center p-4 bg-neutral-light rounded-lg hover:bg-purple-100 transition-colors">
          <div className="text-2xl mb-2 text-purple-600">💉</div>
          <h3 className="font-semibold text-sm text-neutral-dark">Vaccinations</h3>
          <p className="text-xs text-gray-600 mt-1">Immunization</p>
        </div>
        <div className="text-center p-4 bg-neutral-light rounded-lg hover:bg-orange-100 transition-colors">
          <div className="text-2xl mb-2 text-accent">🏥</div>
          <h3 className="font-semibold text-sm text-neutral-dark">Consultation</h3>
          <p className="text-xs text-gray-600 mt-1">Expert Care</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
