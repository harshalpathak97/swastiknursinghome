import I from '../Icons';
import drAmitShah from '../../assets/dr_amit_shah.jpg';
import drSwapnilShah from '../../assets/dr_swapnil_shah_new.jpg';
import { useMapsPrompt } from '../MapsPrompt';
import '../../styles/design-system.css';

const CLINIC = {
  phone: '022 2500 8858',
  phoneDigits: '+912225008858',
  whatsapp: '919821330087',
  mapsLink: 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9',
  hours: [
    { d: 'Monday', h: '9:00 AM – 8:00 PM' },
    { d: 'Tuesday', h: '9:00 AM – 8:00 PM' },
    { d: 'Wednesday', h: '9:00 AM – 8:00 PM' },
    { d: 'Thursday', h: '9:00 AM – 8:00 PM' },
    { d: 'Friday', h: '9:00 AM – 8:00 PM' },
    { d: 'Saturday', h: '9:00 AM – 2:00 PM' },
    { d: 'Sunday', h: 'Closed', closed: true },
  ],
};

const HeroSection = ({ onBook }) => {
  const { open: openMaps } = useMapsPrompt();
  const today = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayLabel = dayNames[today];
  const todayHours = CLINIC.hours[(today + 6) % 7];

  return (
    <section className="ds-hero" id="top">
      <div className="ds-container">
        <div className="ds-hero-grid">
          {/* Left: headline + CTAs + trust */}
          <div className="ds-hero-left">
            <div className="ds-tag-pills">
              <span className="tp-pill pedi"><span className="tp-swatch" /> Pediatrics</span>
              <span className="tp-pill ortho"><span className="tp-swatch" /> Orthopedics</span>
            </div>

            <h1 className="ds-hero-headline">
              Care for your<br />
              <span className="accent-pedi">little ones</span>.<br />
              Care for your<br />
              <span className="accent-ortho">bones</span>.
            </h1>

            <p className="ds-hero-sub">
              A family clinic in Ghatkopar West — pediatric care for children and orthopedic care for adults, under one calm, unhurried roof. <strong>Walk-ins welcome every day.</strong>
            </p>

            <div className="ds-hero-ctas">
              <button className="ds-btn ds-btn-primary ds-btn-lg" onClick={onBook}>
                Book a visit <I.Arrow size={16} />
              </button>
              <button type="button" onClick={openMaps} className="ds-btn ds-btn-outline ds-btn-lg">
                <I.Pin size={16} /> Get directions
              </button>
              <a href={`tel:${CLINIC.phoneDigits}`} className="ds-btn ds-btn-ghost ds-btn-lg">
                <I.Phone size={16} /> Call clinic
              </a>
            </div>

            <div className="ds-hero-trust">
              <div className="ds-trust-stat">
                <div className="ts-n">20<span style={{ fontSize: 24, color: 'var(--ink-3)' }}>+ yrs</span></div>
                <div className="ts-l">SERVING GHATKOPAR</div>
              </div>
              <div className="ds-trust-stat">
                <div className="ts-n">40k<span style={{ fontSize: 24, color: 'var(--ink-3)' }}>+</span></div>
                <div className="ts-l">PATIENT VISITS</div>
              </div>
              <div className="ds-trust-stat">
                <div className="ts-n" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  4.9 <I.Star size={20} style={{ color: '#d59c2a' }} />
                </div>
                <div className="ts-l">FROM 600+ REVIEWS</div>
              </div>
            </div>
          </div>

          {/* Right: Visit card */}
          <aside className="ds-visit-card" id="visit">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="ds-eyebrow" style={{ marginBottom: 0 }}>Visit us</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: 'var(--ink-3)', padding: '4px 10px', borderRadius: 999, background: 'var(--bg-soft)', border: '1px solid var(--line)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: '#6abf7a', boxShadow: '0 0 0 3px rgba(106,191,122,0.18)', display: 'inline-block' }} />
                  Open now
                </span>
              </div>
              <h3 className="ds-serif" style={{ fontSize: 24, margin: '8px 0 0', lineHeight: 1.15, letterSpacing: '-0.005em', color: 'var(--ink)' }}>
                {todayLabel} · <span style={{ color: 'var(--brand)' }}>{todayHours.closed ? 'Closed' : todayHours.h}</span>
              </h3>
            </div>

            {/* Stylised map */}
            <div
              className="vc-map"
              role="button"
              tabIndex={0}
              aria-label="Open directions to clinic"
              onClick={openMaps}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMaps(); } }}
            >
              <span className="vc-pin"><span className="vc-dot" /> Near Shreyas Cinema</span>
              <div className="vc-map-canvas" aria-label="Clinic location map">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <defs>
                    <pattern id="mapgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect width="40" height="40" fill="transparent" />
                      <path d="M40 0 H0 V40" stroke="rgba(31,79,122,0.07)" strokeWidth="1" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="400" height="280" fill="url(#mapgrid)" />
                  <path d="M -20 90 L 420 110" stroke="#fff" strokeWidth="14" strokeLinecap="round" />
                  <path d="M -20 90 L 420 110" stroke="rgba(31,79,122,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 130 -10 L 170 300" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 240 -10 L 280 300" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
                  <path d="M -20 200 L 420 220" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
                  <rect x="30" y="125" width="80" height="60" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="190" y="125" width="40" height="60" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="300" y="125" width="70" height="60" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="30" y="230" width="80" height="40" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="190" y="230" width="80" height="40" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="300" y="230" width="70" height="40" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="30" y="30" width="80" height="40" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="190" y="30" width="40" height="40" rx="4" fill="rgba(31,79,122,0.06)" />
                  <rect x="300" y="30" width="70" height="40" rx="4" fill="rgba(31,79,122,0.06)" />
                  <text x="40" y="260" fontFamily="ui-monospace, SF Mono, Menlo, monospace" fontSize="9" fill="rgba(31,79,122,0.45)" letterSpacing="1">LBS MARG →</text>
                  <g transform="translate(204 138)">
                    <circle r="22" fill="rgba(31,79,122,0.16)">
                      <animate attributeName="r" values="18;26;18" dur="3.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.35;0;0.35" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                    <circle r="12" fill="#fff" stroke="#1f4f7a" strokeWidth="2" />
                    <circle r="5" fill="#1f4f7a" />
                  </g>
                </svg>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Geist', sans-serif" }}>Address</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink)', fontFamily: "'Geist', sans-serif" }}>
                C-101 / Room No. 101, 1st Floor,<br />
                Bhaveshwar Plaza, L. B. S. Marg,<br />
                opposite Shreyas Theatre, Ghatkopar West,<br />
                Mumbai 400086
              </div>
            </div>

            <hr className="ds-hr" />

            <div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 10, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Geist', sans-serif" }}>
                This week's hours
              </div>
              <div className="ds-hours-row">
                {CLINIC.hours.map((h, i) => (
                  <div key={i} className={i === ((today + 6) % 7) ? 'hr-today' : ''}>
                    <span className="hr-day">{h.d.slice(0, 3)}</span>
                    <span className={`hr-h${h.closed ? ' closed' : ''}`}>{h.closed ? 'Closed' : h.h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-visit-actions">
              <button type="button" className="ds-btn ds-btn-outline ds-btn-sm" onClick={openMaps}>
                <I.Pin size={14} /> Directions
              </button>
              <a className="ds-btn ds-btn-outline ds-btn-sm" href={`tel:${CLINIC.phoneDigits}`}>
                <I.Phone size={14} /> Call
              </a>
              <a className="ds-btn ds-btn-outline ds-btn-sm" href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer">
                <I.WhatsApp size={14} /> WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
