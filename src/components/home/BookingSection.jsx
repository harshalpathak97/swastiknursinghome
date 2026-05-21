import { useState, useEffect } from 'react';
import I from '../Icons';
import drAmitShah from '../../assets/dr_amit_shah.jpg';
import drSwapnilShah from '../../assets/dr_swapnil_shah_new.jpg';
import { useMapsPrompt } from '../MapsPrompt';
import '../../styles/design-system.css';

const CLINIC_PHONE = '022 2500 8858';
const WHATSAPP_NUMBER = '+912225008858';

const DOCTORS = [
  { id: 'dr-amit-shah', name: 'Dr. Amit Shah', specialty: 'Pediatrician', tag: 'pedi', photo: drAmitShah, consultFrom: '₹800' },
  { id: 'dr-swapnil-shah', name: 'Dr. Swapnil Shah', specialty: 'Orthopedic Surgeon', tag: 'ortho', photo: drSwapnilShah, consultFrom: '₹1000' },
];

const BookingSection = ({ initialDocId }) => {
  const { open: openMaps } = useMapsPrompt();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    if (initialDocId) {
      const doc = DOCTORS.find((d) => d.id === initialDocId);
      if (doc) {
        setSelectedDoctor(doc);
      }
    }
  }, [initialDocId]);

  const whatsappMessage = selectedDoctor 
    ? `Hi, I'd like to book an appointment with Dr. ${selectedDoctor.name.split(' ').slice(1).join(' ')}.`
    : `Hi, I'd like to book an appointment.`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="ds-section ds-reveal" id="book" style={{ background: 'var(--bg)' }}>
      <div className="ds-container">
        <div className="ds-booking-section">
          <div className="ds-booking-grid">
            {/* Left Column - Information */}
            <div>
              <div className="ds-eyebrow">Schedule Your Visit</div>
              <h2>Book a consultation in seconds.</h2>
              <p className="bk-sub">
                To guarantee minimal wait times and provide personalized scheduling, all consultations are managed directly over the phone or via WhatsApp. Walk-ins are also welcome during clinic hours.
              </p>
              
              <ul className="ds-book-info-list">
                <li>
                  <div className="bk-ic"><I.Clock size={16} /></div>
                  <div><strong>Clinic Hours</strong>Mon–Sat: 9:00 AM – 8:00 PM (Saturdays 9:00 AM – 2:00 PM). Closed Sundays.</div>
                </li>
                <li>
                  <div className="bk-ic"><I.Shield size={16} /></div>
                  <div><strong>No Prepayment Needed</strong>Pay at the clinic after consultation. Cash and UPI payments are accepted.</div>
                </li>
                <li>
                  <div className="bk-ic"><I.Pin size={16} /></div>
                  <div>
                    <strong>Location</strong>
                    <button
                      type="button"
                      onClick={openMaps}
                      className="text-left font-semibold hover:text-primary transition-colors focus:outline-none"
                      style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}
                    >
                      C-101, Bhaveshwar Plaza, L.B.S. Marg, Ghatkopar West, Mumbai ↗
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Booking CTA Card */}
            <div className="ds-booking-form" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="text-center sm:text-left">
                <h3 className="ds-serif" style={{ fontSize: '24px', marginBottom: '8px' }}>
                  {selectedDoctor ? `Consult with Dr. ${selectedDoctor.name.split(' ').slice(1).join(' ')}` : 'Schedule an Appointment'}
                </h3>
                <p style={{ color: 'var(--ink-2)', fontSize: '13.5px', fontFamily: "'Geist', sans-serif", lineHeight: 1.5 }}>
                  Click below to speak with our receptionist immediately, or send a quick WhatsApp message to reserve a slot.
                </p>
              </div>

              {/* Doctor Selector Dropdown/Toggler if no initialDocId was passed */}
              {!initialDocId && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-3)', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif" }}>SELECT DOCTOR (OPTIONAL)</span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {DOCTORS.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setSelectedDoctor(selectedDoctor?.id === d.id ? null : d)}
                        className={`ds-btn ds-btn-sm ${selectedDoctor?.id === d.id ? 'ds-btn-primary' : 'ds-btn-outline'}`}
                        style={{ flex: 1, padding: '8px 12px', fontSize: '12px' }}
                      >
                        {d.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedDoctor && initialDocId && (
                <div style={{ padding: '10px 12px', background: 'var(--surface-warm)', border: '1px solid var(--line)', borderRadius: 10, fontSize: '13px', color: 'var(--ink-2)', fontFamily: "'Geist', sans-serif", display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--brand)' }}>✓</span>
                  <span>Requesting consultation with <strong>{selectedDoctor.name}</strong> ({selectedDoctor.specialty})</span>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                <a
                  href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
                  className="ds-btn ds-btn-primary ds-btn-lg"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textDecoration: 'none', height: '48px' }}
                >
                  <I.Phone size={18} />
                  <span>Call Us: {CLINIC_PHONE}</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-btn"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    textDecoration: 'none', 
                    backgroundColor: '#25D366', 
                    color: 'white',
                    height: '48px',
                    fontWeight: 600
                  }}
                >
                  <I.WhatsApp size={18} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              {/* Visit Directly Info */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', textAlign: 'center' }}>
                <p style={{ color: 'var(--ink-3)', fontSize: '12px', fontFamily: "'Geist', sans-serif", lineHeight: 1.5 }}>
                  Or visit us directly at the clinic. Walk-ins are registered at the reception desk.
                </p>
                <button
                  onClick={openMaps}
                  className="ds-btn ds-btn-ghost ds-btn-sm"
                  style={{ marginTop: '8px', fontSize: '12px', padding: '6px 12px' }}
                >
                  <I.Pin size={14} style={{ marginRight: '6px' }} /> Get Directions ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
