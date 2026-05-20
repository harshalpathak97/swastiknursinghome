import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import I from "../components/Icons";

const Appointment = () => {
  const { docId } = useParams(); // URL parameter
  const { doctors, currencySymbol, clinicData } = useContext(AppContext); // AppContext values

  const [docInfo, setDocInfo] = useState(null); // State for selected doctor

  useEffect(() => {
    const fetchDocInfo = () => {
      const foundDoc = doctors.find(doc => doc._id === docId); // Find doctor by ID
      setDocInfo(foundDoc); // Set state
    };

    fetchDocInfo();
  }, [doctors, docId]); // Dependencies: doctors array and docId

  if (!docInfo) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-gray-500 font-medium">Loading doctor information...</p>
      </div>
    );
  }

  // Generate dynamic phone and WhatsApp values
  const rawPhone = clinicData?.clinic?.phone || "022 2500 8858";
  const telLink = `tel:${rawPhone.replace(/\s+/g, "")}`;
  const rawWhatsapp = clinicData?.clinic?.whatsappNumber || "+912225008858";
  const whatsappLink = `https://wa.me/${rawWhatsapp.replace(/[^0-9]/g, "")}?text=Hi,%20I'd%20like%20to%20book%20an%20appointment%20with%20Dr.%20${docInfo.name.split(" ").slice(1).join(" ")}`;

  return (
    <div className="pt-24 sm:pt-28 pb-12 container mx-auto px-4 max-w-5xl">
      {/* Doctor Card */}
      <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm">
        {/* Doctor Image */}
        <div className="flex justify-center md:justify-start flex-shrink-0">
          <img
            className="bg-primary w-full max-w-[280px] sm:max-w-72 h-72 sm:h-80 md:h-84 rounded-xl object-cover object-top shadow-sm border border-gray-100"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Doctor Information */}
        <div className="flex-1 flex flex-col justify-between py-2">
          <div>
            <p className="flex items-center justify-center md:justify-start gap-2 text-xl sm:text-2xl font-bold text-neutral-dark text-center md:text-left">
              {docInfo.name} 
              <img className="w-5 h-5 flex-shrink-0" src={assets.verified_icon} alt="Verified" />
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs sm:text-sm mt-2 text-gray-600">
              <span className="font-semibold">{docInfo.degree}</span>
              <span className="text-gray-300">•</span>
              <span className="text-primary font-medium">{docInfo.speciality}</span>
              <span className="text-gray-300">•</span>
              <button className="py-0.5 px-2.5 bg-neutral-light border border-gray-200 text-xs rounded-full whitespace-nowrap font-medium text-neutral-dark">
                {docInfo.experience}
              </button>
            </div>

            {/* Doctor About */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-sm font-semibold text-neutral-dark mb-2">
                About 
                <img className="w-4 h-4 flex-shrink-0 opacity-60" src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-xs sm:text-sm text-gray-500 max-w-[650px] text-center md:text-left leading-relaxed">
                {docInfo.about}
              </p>
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
            <span className="font-medium text-center sm:text-left">
              Consultation Fee: <span className="text-neutral-dark font-bold text-base">{currencySymbol}{docInfo.fees}</span>
            </span>
            <span className="text-green-600 font-semibold flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full text-xs">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Available for Consultation
            </span>
          </div>
        </div>
      </div>

      {/* Book Appointment Action Section */}
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-dark mb-2 font-serif text-center md:text-left">Book a Consultation</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed text-center md:text-left">
          To ensure the best possible care and avoid long wait times, appointments with Dr. {docInfo.name.split(" ").slice(1).join(" ")} are scheduled directly over the phone or via WhatsApp messages. Reach out to our receptionist, and we will confirm a convenient slot for you immediately.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto md:mx-0">
          {/* Call Option */}
          <a
            href={telLink}
            className="flex items-center justify-center gap-3 bg-primary text-white py-3 sm:py-3.5 px-6 rounded-xl font-semibold hover:bg-primary/95 transition-all shadow-sm hover:shadow-md min-h-[48px]"
          >
            <I.Phone size={18} />
            <span className="text-xs sm:text-sm whitespace-nowrap">Call Clinic: {rawPhone}</span>
          </a>

          {/* WhatsApp Option */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 sm:py-3.5 px-6 rounded-xl font-semibold hover:bg-[#20BA5A] transition-all shadow-sm hover:shadow-md min-h-[48px]"
          >
            <I.WhatsApp size={18} />
            <span className="text-xs sm:text-sm whitespace-nowrap">Book via WhatsApp</span>
          </a>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-100">
          <div className="flex gap-3 text-xs sm:text-sm text-gray-500">
            <I.Clock className="text-primary flex-shrink-0 mt-0.5" size={16} />
            <div>
              <p className="font-semibold text-neutral-dark">Clinic Hours</p>
              <p className="mt-0.5">Mon - Sat: 9 AM - 8 PM</p>
              <p className="text-gray-400 text-xs mt-0.5">Sundays: Closed</p>
            </div>
          </div>

          <div className="flex gap-3 text-xs sm:text-sm text-gray-500">
            <I.Shield className="text-primary flex-shrink-0 mt-0.5" size={16} />
            <div>
              <p className="font-semibold text-neutral-dark">No Prepayment Needed</p>
              <p className="mt-0.5">Pay at the clinic after visit</p>
              <p className="text-gray-400 text-xs mt-0.5">Cash / UPI accepted</p>
            </div>
          </div>

          <div className="flex gap-3 text-xs sm:text-sm text-gray-500">
            <I.Pin className="text-primary flex-shrink-0 mt-0.5" size={16} />
            <div>
              <p className="font-semibold text-neutral-dark">Location</p>
              <p className="mt-0.5">Bhaveshwar Plaza, L.B.S. Marg</p>
              <p className="text-gray-400 text-xs mt-0.5">Ghatkopar West, Mumbai 400086</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;

