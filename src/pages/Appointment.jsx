import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import I from "../components/Icons";
import { useMapsPrompt } from "../components/MapsPrompt";

const WHATSAPP = '919821330087';
const PHONE = '022 2500 8858';
const ADDRESS = 'C-101, Bhaveshwar Plaza, L.B.S. Marg, Ghatkopar West, Mumbai 400086';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const { open: openMaps } = useMapsPrompt();
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const found = doctors.find(doc => doc._id === docId);
    setDocInfo(found);
  }, [doctors, docId]);

  const doctorName = docInfo ? docInfo.name.split(" ").slice(1).join(" ") : null;
  const waMessage = doctorName
    ? `Hi, I'd like to book an appointment with Dr. ${doctorName}.`
    : `Hi, I'd like to book an appointment.`;
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="pt-24 sm:pt-28 pb-16 container mx-auto px-4 max-w-xl">
      {/* Doctor badge if came from doctor profile */}
      {docInfo && (
        <div className="flex items-center gap-3 mb-6 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-12 h-12 rounded-full object-cover object-top border border-gray-200 flex-shrink-0"
          />
          <div>
            <p className="font-bold text-neutral-dark text-sm flex items-center gap-1.5">
              {docInfo.name}
              <img src={assets.verified_icon} alt="Verified" className="w-4 h-4" />
            </p>
            <p className="text-xs text-gray-400">{docInfo.speciality}</p>
          </div>
        </div>
      )}

      {/* Main CTA Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mb-2">
          Book a Consultation
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
          Reach out directly to schedule your visit. No online form needed — our team will confirm your slot right away.
        </p>

        <div className="flex flex-col gap-3">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#20BA5A] transition-all shadow-sm hover:shadow-md min-h-[52px] text-sm sm:text-base"
          >
            <I.WhatsApp size={20} />
            WhatsApp: +91 98213 30087
          </a>

          {/* Call */}
          <a
            href={`tel:${PHONE.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-3 bg-primary text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md min-h-[52px] text-sm sm:text-base"
          >
            <I.Phone size={20} />
            Call: {PHONE}
          </a>

          {/* Visit */}
          <button
            onClick={openMaps}
            className="flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 text-gray-700 py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all min-h-[52px] text-sm sm:text-base w-full"
          >
            <I.Pin size={20} />
            <span className="text-left leading-tight">
              Visit: {ADDRESS}
            </span>
          </button>
        </div>

        {/* Hours note */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
          <I.Clock size={13} />
          <span>Mon–Sat: 9 AM – 8 PM &nbsp;·&nbsp; Closed Sundays</span>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
