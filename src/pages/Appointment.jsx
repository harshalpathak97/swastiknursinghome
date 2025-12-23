import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams(); // URL parameter
  const { doctors, currencySymbol } = useContext(AppContext); // Doctors array

  const [docInfo, setDocInfo] = useState(null); // State for selected doctor



  useEffect(() => {
    const fetchDocInfo = () => {
      const foundDoc = doctors.find(doc => doc._id === docId); // Find doctor by ID
      setDocInfo(foundDoc); // Set state
    };

    fetchDocInfo();
  }, [doctors, docId]); // Dependencies: doctors array and docId









  if (!docInfo) {
    return <p>Loading doctor information...</p>;
  }

  return (
    <div className="px-4">
    {/* // doctor details  */}
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Doctor Image */}
      <div className="flex justify-center sm:justify-start">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={docInfo.image}
          alt={docInfo.name}
        />
      </div>

      {/* Doctor Information */}
      <div className="flex-1 border border-gray-400 rounded-lg p-6 sm:p-8 py-7 bg-white">
        <p className="flex items-center justify-center sm:justify-start gap-2 text-xl sm:text-2xl font-medium text-gray-700">{docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" /></p>
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 text-sm mt-1 text-gray-600">
          <p className="text-center sm:text-left">{docInfo.degree} - {docInfo.speciality}</p>
          <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
        </div>

          {/* doctor about  */}
          <div className="mt-4">
            <p className="flex items-center justify-center sm:justify-start gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="" /></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1 text-center sm:text-left">{docInfo.about}</p>
          </div>
        <p className="text-gray-500 font-medium mt-4 text-center sm:text-left">Appointment fee: <span className="text-gray-600 ">{currencySymbol}{docInfo.fees}</span> </p>
      </div>
    </div>

    {/* related doctors   */}

    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />


    </div>
  );
};

export default Appointment;
