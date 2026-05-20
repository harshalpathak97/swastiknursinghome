import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { assets } from '../assets/assets';
import I from './Icons';
import '../styles/design-system.css';

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

const CLINIC_PHONE = '022 2500 8858';
const CLINIC_PHONE_DIGITS = '+912225008858';
const CLINIC_MAPS = 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9';
const CLINIC_ADDRESS_SHORT = 'Near Shreyas Cinema, Ghatkopar West';

function UtilityBar() {
  return (
    <div className="ds-utility">
      <div className="ds-container">
        <div className="u-left">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="u-dot" /> Open today · walk-ins welcome
          </span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <I.Clock size={13} /> Mon–Fri 9:00–8:00 · Sat 9:00–2:00
          </span>
        </div>
        <div className="u-right">
          <a href={`tel:${CLINIC_PHONE_DIGITS}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <I.Phone size={13} /> {CLINIC_PHONE}
          </a>
          <span style={{ opacity: 0.5 }}>·</span>
          <a href={CLINIC_MAPS} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <I.Pin size={13} /> {CLINIC_ADDRESS_SHORT}
          </a>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, userData, logout } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleSectionLink = (id) => {
    if (isHome) {
      smoothScrollTo(id);
    } else {
      navigate('/');
      setTimeout(() => smoothScrollTo(id), 200);
    }
  };

  const handleBook = () => {
    if (isHome) {
      smoothScrollTo('book');
    } else {
      navigate('/');
      setTimeout(() => smoothScrollTo('book'), 200);
    }
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate('/');
  };

  const navBtnStyle = {
    background: 'none', border: 'none', padding: '10px 14px', borderRadius: 999,
    fontSize: 14.5, color: 'var(--ink-2)', fontWeight: 500, cursor: 'pointer',
    fontFamily: "'Geist', sans-serif", transition: 'background 0.15s, color 0.15s',
  };

  return (
    <>
      <UtilityBar />
      <div className={`ds-nav-wrap${scrolled ? ' scrolled' : ''}`}>
        <div className="ds-container ds-nav">
          <button
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
          >
            <div className="ds-brand-mark">S</div>
            <div className="ds-brand-text">
              <div className="ds-brand-name">Swastik</div>
              <div className="ds-brand-sub">Nursing Home · Est. 2002</div>
            </div>
          </button>

          <nav className="ds-nav-links">
            <button style={navBtnStyle} onClick={() => handleSectionLink('specialties')}>Specialties</button>
            <button style={navBtnStyle} onClick={() => handleSectionLink('doctors')}>Doctors</button>
            <button style={navBtnStyle} onClick={() => handleSectionLink('services')}>Services</button>
            <button style={navBtnStyle} onClick={() => handleSectionLink('why')}>Why us</button>
            <button style={navBtnStyle} onClick={() => handleSectionLink('visit')}>Visit us</button>
          </nav>

          <div className="ds-nav-cta">
            <a href={`tel:${CLINIC_PHONE_DIGITS}`} className="ds-btn ds-btn-outline ds-btn-sm">
              <I.Phone size={14} /> <span style={{ display: 'none' }} className="hide-sm">{CLINIC_PHONE}</span>
            </a>
            <button className="ds-btn ds-btn-primary ds-btn-sm" onClick={handleBook}>
              Book a visit <I.Arrow size={14} />
            </button>
            {isAuthenticated && (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  style={{ background: 'none', border: '2px solid var(--line)', cursor: 'pointer', borderRadius: '50%', padding: 0, display: 'flex' }}
                >
                  <img src={userData?.image || assets.profile_pic} alt="Profile" style={{ width: 34, height: 34, borderRadius: '50%', display: 'block' }} />
                </button>
                {userMenuOpen && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: '8px 0', minWidth: 160, boxShadow: 'var(--ds-shadow)', zIndex: 60 }}>
                    <button onClick={() => { navigate('/profile'); setUserMenuOpen(false); }} style={{ width: '100%', textAlign: 'left', padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--ink-2)', fontFamily: "'Geist', sans-serif" }}>My Profile</button>
                    <button onClick={() => { navigate('/my-appointment'); setUserMenuOpen(false); }} style={{ width: '100%', textAlign: 'left', padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--ink-2)', fontFamily: "'Geist', sans-serif" }}>My Appointments</button>
                    <button onClick={handleLogout} style={{ width: '100%', textAlign: 'left', padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--danger)', fontFamily: "'Geist', sans-serif" }}>Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
