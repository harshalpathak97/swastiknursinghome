import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate(); // Hook sax ah
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc.id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => { navigate(`/doctors/${item._id}`); window.scrollTo(0, 0) }}
            className="group rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            key={index}
          >
            <div className="overflow-hidden h-60">
              <img
                className="w-full h-full object-cover object-top"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span><p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-semibold mb-1">{item.name}</p>
              <p className="text-primary text-sm mb-2">{item.speciality}</p>
              <div className="text-xs text-gray-500">
                {item.degree}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full">more</button>
    </div>
  );
};

export default RelatedDoctors;
