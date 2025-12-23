import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4 animate-slideInFromTop">Our Expert Doctors</h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          Meet our experienced doctors providing specialized care in pediatrics and orthopedics.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Filter Sidebar */}
        <div className="w-full sm:w-64 flex-shrink-0 animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-lg font-semibold text-neutral-dark mb-4 text-center sm:text-left">Filter by Specialty</h3>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/doctors')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                !speciality ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-gray-200'
              }`}
            >
              All Doctors
            </button>
            <button
              onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                speciality === 'Pediatrician' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-gray-200'
              }`}
            >
              Pediatrician
            </button>
            <button
              onClick={() => speciality === 'Orthopedic Surgeon' ? navigate('/doctors') : navigate('/doctors/Orthopedic Surgeon')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                speciality === 'Orthopedic Surgeon' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-gray-200'
              }`}
            >
              Orthopedic Surgeon
            </button>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="flex-1 animate-slideInFromBottom" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filterDoc.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <img className="w-full h-48 object-cover bg-neutral-light" src={item.image} alt={item.name} />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Available for Consultation</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-1">{item.name}</h3>
                  <p className="text-primary font-medium mb-2">{item.speciality}</p>
                  <p className="text-gray-600 text-sm mb-3">{item.degree}</p>
                  <p className="text-gray-500 text-sm mb-4">{item.experience}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/doctors/${item._id}`)}
                      className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => navigate(`/appointment/${item._id}`)}
                      className="flex-1 bg-[#25D366] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filterDoc.length === 0 && (
            <div className="text-center py-12 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
              <p className="text-gray-500 text-lg">No doctors found for this specialty.</p>
              <button
                onClick={() => navigate('/doctors')}
                className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                View All Doctors
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
