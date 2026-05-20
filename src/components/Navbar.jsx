import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { assets } from '../assets/assets';
import I from './Icons';
import Logo from './Logo';
import { useMapsPrompt } from './MapsPrompt';
import '../styles/design-system.css';

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

const CLINIC_PHONE = '022 2500 8858';
const CLINIC_PHONE_DIGITS = '+912225008858';
const CLINIC_ADDRESS_SHORT = 'Near Shreyas Cinema, Ghatkopar West';

function UtilityBar() {
  const { open: openMaps } = useMapsPrompt();
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
          <button
            type="button"
            onClick={openMaps}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
          >
            <I.Pin size={13} /> {CLINIC_ADDRESS_SHORT}
          </button>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      <div className={`ds-nav-wrap${scrolled ? ' scrolled' : ''}${mobileMenuOpen ? ' drawer-open' : ''}`}>
        <div className="ds-container ds-nav">
          <button
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}
            aria-label="Swastik Nursing Home — go to home"
          >
            <Logo size={44} />
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
            <button className="ds-btn ds-btn-primary ds-btn-sm hide-xs" onClick={handleBook}>
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
            
            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`ds-nav-hamburger${mobileMenuOpen ? ' active' : ''}`}
              aria-label="Toggle navigation menu"
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Mobile Menu Drawer */}
      <div className={`ds-mobile-drawer-overlay${mobileMenuOpen ? ' active' : ''}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`ds-mobile-drawer${mobileMenuOpen ? ' active' : ''}`}>
        <div className="ds-mobile-drawer-header">
          <button
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}
          >
            <Logo size={40} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="ds-mobile-drawer-close"
            aria-label="Close menu"
          >
            <I.Close size={22} />
          </button>
        </div>
        
        <nav className="ds-mobile-drawer-nav">
          <button onClick={() => { handleSectionLink('specialties'); setMobileMenuOpen(false); }}>
            <span>Specialties</span>
            <I.Arrow size={14} />
          </button>
          <button onClick={() => { handleSectionLink('doctors'); setMobileMenuOpen(false); }}>
            <span>Doctors</span>
            <I.Arrow size={14} />
          </button>
          <button onClick={() => { handleSectionLink('services'); setMobileMenuOpen(false); }}>
            <span>Services</span>
            <I.Arrow size={14} />
          </button>
          <button onClick={() => { handleSectionLink('why'); setMobileMenuOpen(false); }}>
            <span>Why choose us</span>
            <I.Arrow size={14} />
          </button>
          <button onClick={() => { handleSectionLink('visit'); setMobileMenuOpen(false); }}>
            <span>Visit clinic</span>
            <I.Arrow size={14} />
          </button>

          <div className="ds-mobile-drawer-divider" />

          {isAuthenticated ? (
            <>
              <button onClick={() => { navigate('/profile'); setMobileMenuOpen(false); }}>
                <span>My Profile</span>
                <I.Arrow size={14} />
              </button>
              <button onClick={() => { navigate('/my-appointment'); setMobileMenuOpen(false); }}>
                <span>My Appointments</span>
                <I.Arrow size={14} />
              </button>
              <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="danger">
                <span>Logout</span>
                <I.Arrow size={14} />
              </button>
            </>
          ) : (
            <button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="primary-color">
              <span>Patient Portal / Login</span>
              <I.Arrow size={14} />
            </button>
          )}
        </nav>

        <div className="ds-mobile-drawer-footer">
          <div className="ds-mobile-drawer-contact-info">
            <div className="contact-item">
              <I.Clock size={14} />
              <span>Mon–Fri 9:00 AM – 8:00 PM · Sat 9:00 – 2:00</span>
            </div>
            <div className="contact-item">
              <I.Pin size={14} />
              <span>Near Shreyas Cinema, Ghatkopar West</span>
            </div>
          </div>
          <div className="ds-mobile-drawer-actions">
            <a href={`tel:${CLINIC_PHONE_DIGITS}`} className="ds-btn ds-btn-outline">
              <I.Phone size={14} /> Call clinic
            </a>
            <button className="ds-btn ds-btn-primary" onClick={() => { handleBook(); setMobileMenuOpen(false); }}>
              Book a visit <I.Arrow size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
