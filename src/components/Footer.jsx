import { LogoMark } from './Logo';
import { useMapsPrompt } from './MapsPrompt';
import '../styles/design-system.css';

const CLINIC = {
  phone: '022 2500 8858',
  phoneDigits: '+912225008858',
  whatsapp: '912225008858',
  email: 'info@swastiknursinghome.org',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Swastik+Nursing+Home+C-101+Bhaveshwar+Plaza+Nityanand+Nagar+Ghatkopar+West+Mumbai+400086',
};

const Footer = () => {
  const { open: openMaps } = useMapsPrompt();
  return (
  <footer className="ds-footer">
    <div className="ds-container">
      <div className="ds-foot-grid">
        <div className="ds-foot-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <LogoMark size={42} />
            <div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: 'var(--ink)', letterSpacing: '-0.01em' }}>Swastik Nursing Home</div>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 3 }}>Pediatric · Orthopedic · Family Care</div>
            </div>
          </div>
          <p className="fc-blurb">A family clinic in Ghatkopar West, looking after Mumbai families since 2002. We see children and adults — same warmth, same unhurried approach.</p>
        </div>

        <div className="ds-foot-col">
          <h5>Visit</h5>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
            C-101, Bhaveshwar Plaza,<br />
            Nityanand Nagar, L.B.S. Marg,<br />
            Ghatkopar West, Mumbai 400086
          </p>
          <p style={{ marginTop: 12 }}>
            <button
              type="button"
              onClick={openMaps}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--brand)', cursor: 'pointer', fontSize: 14, fontFamily: 'inherit', textDecoration: 'none' }}
            >
              Open in Maps ↗
            </button>
          </p>
        </div>

        <div className="ds-foot-col">
          <h5>Contact</h5>
          <ul>
            <li><a href={`tel:${CLINIC.phoneDigits}`}>{CLINIC.phone}</a></li>
            <li><a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></li>
          </ul>
        </div>

        <div className="ds-foot-col">
          <h5>Hours</h5>
          <ul style={{ fontSize: 13.5, color: 'var(--ink-2)', fontVariantNumeric: 'tabular-nums' }}>
            <li>Mon–Fri · 9:00 AM – 8:00 PM</li>
            <li>Saturday · 9:00 AM – 2:00 PM</li>
            <li style={{ color: 'var(--danger)' }}>Sunday · Closed</li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/doctors">Doctors</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-foot-bottom">
        <div>© 2026 Swastik Nursing Home · Ghatkopar West, Mumbai</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="/privacy">Privacy</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
