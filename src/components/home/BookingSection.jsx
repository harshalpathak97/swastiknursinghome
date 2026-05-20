import { useState, useEffect } from 'react';
import I from '../Icons';
import drAmitShah from '../../assets/dr_amit_shah.jpg';
import drSwapnilShah from '../../assets/dr_swapnil_shah_new.jpg';
import { useMapsPrompt } from '../MapsPrompt';
import '../../styles/design-system.css';

const CLINIC_PHONE = '022 2500 8858';

const DOCTORS = [
  { id: 'dr-amit-shah', name: 'Dr. Amit Shah', specialty: 'Pediatrician', tag: 'pedi', photo: drAmitShah, consultFrom: '₹800' },
  { id: 'dr-swapnil-shah', name: 'Dr. Swapnil Shah', specialty: 'Orthopedic Surgeon', tag: 'ortho', photo: drSwapnilShah, consultFrom: '₹1000' },
];

function makeSlots() {
  const slots = [];
  for (let h = 9; h < 20; h++) {
    for (const m of [0, 30]) {
      if (h === 9 && m === 0) continue;
      const hh = h > 12 ? h - 12 : h;
      const ap = h >= 12 ? 'PM' : 'AM';
      slots.push(`${hh}:${String(m).padStart(2, '0')} ${ap}`);
    }
  }
  return slots;
}

function nextDays(n) {
  const out = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push(d);
  }
  return out;
}

const BookingSection = ({ initialDocId }) => {
  const { open: openMaps } = useMapsPrompt();
  const [step, setStep] = useState(1);
  const [docId, setDocId] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (initialDocId && DOCTORS.find((d) => d.id === initialDocId)) {
      setDocId(initialDocId);
      setStep(2);
    }
  }, [initialDocId]);

  const doctor = DOCTORS.find((d) => d.id === docId);
  const days = nextDays(14);
  const slots = makeSlots();

  const isSlotDisabled = (d, s) => {
    if (!d) return false;
    if (d.getDay() === 0) return true;
    if (d.getDay() === 6) {
      const hour = parseInt(s.split(':')[0]);
      const ap = s.split(' ')[1];
      if (ap === 'PM' && hour !== 12) return true;
      if (hour === 12) return true;
    }
    const key = `${d.toDateString()}-${s}`;
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0;
    return Math.abs(h) % 7 === 0;
  };

  const fmtDay = (d) => d.toLocaleDateString('en-IN', { weekday: 'short' });
  const fmtNum = (d) => d.getDate();
  const fmtMonth = (d) => d.toLocaleDateString('en-IN', { month: 'short' });

  const reset = () => {
    setStep(1); setDocId(null); setDate(null); setSlot(null);
    setName(''); setPhone(''); setReason(''); setDone(false);
  };

  const infoList = done ? (
    <ul className="ds-book-info-list">
      <li>
        <div className="bk-ic"><I.Pin size={16} /></div>
        <div>
          <strong>Address</strong>
          <button
            type="button"
            onClick={openMaps}
            style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
          >
            C-101, Bhaveshwar Plaza, Nityanand Nagar, Ghatkopar West, Mumbai 400086 ↗
          </button>
        </div>
      </li>
      <li>
        <div className="bk-ic"><I.Phone size={16} /></div>
        <div><strong>Need to change something?</strong>Call us on {CLINIC_PHONE} or WhatsApp — we'll sort it without fuss.</div>
      </li>
      <li>
        <div className="bk-ic"><I.Check size={16} /></div>
        <div><strong>What to bring</strong>Any previous reports, current medications, ID. For kids: vaccination card.</div>
      </li>
    </ul>
  ) : (
    <ul className="ds-book-info-list">
      <li>
        <div className="bk-ic"><I.Clock size={16} /></div>
        <div><strong>Open Mon–Fri 9–8, Sat 9–2</strong>Closed Sundays. We see most patients within 15 minutes of their slot.</div>
      </li>
      <li>
        <div className="bk-ic"><I.Phone size={16} /></div>
        <div><strong>Prefer to call?</strong>{CLINIC_PHONE} · or WhatsApp the clinic anytime.</div>
      </li>
      <li>
        <div className="bk-ic"><I.Shield size={16} /></div>
        <div><strong>No payment online</strong>Pay at the clinic. Insurance accepted — bring your card and ID.</div>
      </li>
    </ul>
  );

  return (
    <section className="ds-section ds-reveal" id="book" style={{ background: 'var(--bg)' }}>
      <div className="ds-container">
        <div className="ds-booking-section">
          <div className="ds-booking-grid">
            <div>
              <div className="ds-eyebrow">{done ? 'Appointment confirmed' : 'Book your visit'}</div>
              <h2>{done ? `You're all set, ${name.split(' ')[0]}.` : 'Pick a doctor, pick a time — done.'}</h2>
              <p className="bk-sub">
                {done
                  ? 'We\'ve held your slot. A confirmation will be sent to your phone shortly.'
                  : 'Three small questions and you\'re booked. We hold your slot for 24 hours; no payment needed online.'}
              </p>
              {infoList}
            </div>

            <div className="ds-booking-form">
              {done ? (
                <div className="ds-success-state">
                  <div className="ss-check"><I.Check size={28} /></div>
                  <h3 className="ds-serif">Confirmed</h3>
                  <div className="ss-summary">
                    <div className="ss-row"><span className="ss-k">Doctor</span><span>{doctor?.name}</span></div>
                    <div className="ss-row"><span className="ss-k">When</span><span>{date?.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} · {slot}</span></div>
                    <div className="ss-row"><span className="ss-k">Patient</span><span>{name}</span></div>
                    <div className="ss-row"><span className="ss-k">Phone</span><span>{phone}</span></div>
                    {reason && <div className="ss-row"><span className="ss-k">Note</span><span style={{ maxWidth: '60%', textAlign: 'right' }}>{reason}</span></div>}
                  </div>
                  <button className="ds-btn ds-btn-outline ds-btn-sm" onClick={reset}>Book another visit</button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="ds-serif">
                      {step === 1 && 'Who are you visiting?'}
                      {step === 2 && 'When suits you?'}
                      {step === 3 && 'Your details'}
                    </h3>
                    <div className="bf-step-dots">
                      <div className={`bf-d${step >= 1 ? ' active' : ''}`} />
                      <div className={`bf-d${step >= 2 ? ' active' : ''}`} />
                      <div className={`bf-d${step >= 3 ? ' active' : ''}`} />
                      <span style={{ marginLeft: 8 }}>Step {step} of 3</span>
                    </div>
                  </div>

                  {step === 1 && (
                    <>
                      <div className="ds-choose-doctor">
                        {DOCTORS.map((d) => (
                          <label key={d.id} className={docId === d.id ? `checked-${d.tag}` : ''}>
                            <input type="radio" name="doc" checked={docId === d.id} onChange={() => setDocId(d.id)} />
                            <span className="cd-av"><img src={d.photo} alt={d.name} /></span>
                            <span>
                              <div className="cd-nm">{d.name}</div>
                              <div className="cd-sp">{d.specialty} · From {d.consultFrom}</div>
                            </span>
                            <span className="cd-sw" />
                          </label>
                        ))}
                      </div>
                      <button
                        className="ds-btn ds-btn-primary ds-btn-lg"
                        disabled={!docId}
                        onClick={() => setStep(2)}
                        style={{ marginTop: 6 }}
                      >
                        Continue <I.Arrow size={16} />
                      </button>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)', textAlign: 'center', fontFamily: "'Geist', sans-serif" }}>
                        Unsure? Tell us your symptom on the next step — we'll route you correctly.
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', letterSpacing: '0.04em', fontFamily: "'Geist', sans-serif" }}>SELECT A DATE</span>
                          <span style={{ fontSize: 12, color: 'var(--ink-3)', fontFamily: "'Geist', sans-serif" }}>Next 14 days · Sundays closed</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
                          {days.map((d, i) => {
                            const disabled = d.getDay() === 0;
                            const selected = date && d.toDateString() === date.toDateString();
                            return (
                              <button
                                key={i}
                                disabled={disabled}
                                onClick={() => { setDate(d); setSlot(null); }}
                                className={`ds-date-btn${selected ? ' selected' : ''}`}
                              >
                                <span style={{ fontSize: 10.5, opacity: 0.7 }}>{fmtDay(d)}</span>
                                <span className="ds-serif" style={{ fontSize: 18 }}>{fmtNum(d)}</span>
                                <span style={{ fontSize: 10.5, opacity: 0.7 }}>{fmtMonth(d)}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {date && (
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', letterSpacing: '0.04em', fontFamily: "'Geist', sans-serif" }}>PICK A TIME</span>
                            <span style={{ fontSize: 12, color: 'var(--ink-3)', fontFamily: "'Geist', sans-serif" }}>{slots.filter((s) => !isSlotDisabled(date, s)).length} slots open</span>
                          </div>
                          <div className="ds-slot-grid">
                            {slots.map((s) => {
                              const disabled = isSlotDisabled(date, s);
                              return (
                                <button
                                  key={s}
                                  className={`ds-slot${slot === s ? ' active' : ''}${disabled ? ' disabled' : ''}`}
                                  disabled={disabled}
                                  onClick={() => setSlot(s)}
                                >
                                  {s}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button className="ds-btn ds-btn-ghost" onClick={() => setStep(1)}>← Back</button>
                        <button
                          className="ds-btn ds-btn-primary ds-btn-lg"
                          disabled={!date || !slot}
                          onClick={() => setStep(3)}
                          style={{ flex: 1 }}
                        >
                          Continue <I.Arrow size={16} />
                        </button>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div className="ds-field-row">
                        <div className="ds-field">
                          <label>Full name</label>
                          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Priya Sharma" />
                        </div>
                        <div className="ds-field">
                          <label>Mobile number</label>
                          <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^\d+\s]/g, ''))} placeholder="+91 9XXXX XXXXX" inputMode="tel" />
                        </div>
                      </div>
                      <div className="ds-field">
                        <label>What would you like seen? <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>(optional)</span></label>
                        <textarea
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          placeholder={doctor?.tag === 'pedi' ? 'e.g. 6-month vaccination, persistent cough…' : 'e.g. knee pain when climbing stairs, follow-up on X-ray…'}
                        />
                      </div>
                      <div style={{ display: 'flex', gap: 14, padding: '10px 12px', background: 'var(--surface-warm)', border: '1px solid var(--line)', borderRadius: 10, fontSize: 13, color: 'var(--ink-2)', fontFamily: "'Geist', sans-serif" }}>
                        <I.Check size={16} style={{ flexShrink: 0, marginTop: 2, color: 'var(--brand)' }} />
                        <span>
                          <strong style={{ color: 'var(--ink)' }}>Visiting:</strong> {doctor?.name} · {date?.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} · {slot}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button className="ds-btn ds-btn-ghost" onClick={() => setStep(2)}>← Back</button>
                        <button
                          className="ds-btn ds-btn-primary ds-btn-lg"
                          disabled={!name || !phone}
                          onClick={() => setDone(true)}
                          style={{ flex: 1 }}
                        >
                          Confirm appointment <I.Check size={16} />
                        </button>
                      </div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', textAlign: 'center', lineHeight: 1.5, fontFamily: "'Geist', sans-serif" }}>
                        By booking you agree to receive an SMS confirmation. We will never share your number.
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
