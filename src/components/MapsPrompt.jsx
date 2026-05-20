import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const CLINIC_LAT = 19.08628;
const CLINIC_LNG = 72.9078;
const CLINIC_NAME = 'Swastik Nursing Home';
const CLINIC_ADDRESS = 'C-101, Bhaveshwar Plaza, Nityanand Nagar, Ghatkopar West, Mumbai 400086';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Swastik+Nursing+Home+Bhaveshwar+Plaza+C-101+Nityanand+Nagar+Ghatkopar+West+Mumbai+Maharashtra+400086+India';

const googleDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${CLINIC_LAT},${CLINIC_LNG}&destination_place_id=&travelmode=driving`;

const appleMapsUrl = () =>
  `https://maps.apple.com/?daddr=${CLINIC_LAT},${CLINIC_LNG}&q=${encodeURIComponent(CLINIC_NAME)}`;

const detectPlatform = () => {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent || navigator.vendor || '';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return 'ios';
  if (/Mac OS X|Macintosh/.test(ua)) return 'mac';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
};

const MapsPromptContext = createContext({ open: () => {} });

export const useMapsPrompt = () => useContext(MapsPromptContext);

export const MapsPromptProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [isOpen, close]);

  const launch = (url) => {
    close();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const platform = detectPlatform();
  const primary = platform === 'ios' || platform === 'mac' ? 'apple' : 'google';

  return (
    <MapsPromptContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="maps-prompt-title"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(15, 31, 51, 0.55)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'grid',
            placeItems: 'center',
            padding: 20,
            animation: 'mp-fade 0.25s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)',
              borderRadius: 18,
              maxWidth: 420,
              width: '100%',
              padding: 28,
              boxShadow: '0 30px 80px -20px rgba(15, 31, 51, 0.45)',
              fontFamily: "'Geist', sans-serif",
              animation: 'mp-pop 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--brand-soft)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--brand)',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div
                  id="maps-prompt-title"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 22,
                    color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                  }}
                >
                  Open directions
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 3 }}>
                  Choose your preferred maps app
                </div>
              </div>
            </div>

            <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55, marginBottom: 18 }}>
              {CLINIC_ADDRESS}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button
                onClick={() => launch(primary === 'apple' ? appleMapsUrl() : googleDirectionsUrl())}
                className="ds-btn ds-btn-primary"
                style={{ width: '100%' }}
                autoFocus
              >
                Open in {primary === 'apple' ? 'Apple Maps' : 'Google Maps'}
              </button>
              <button
                onClick={() => launch(primary === 'apple' ? googleDirectionsUrl() : appleMapsUrl())}
                className="ds-btn ds-btn-outline"
                style={{ width: '100%' }}
              >
                Open in {primary === 'apple' ? 'Google Maps' : 'Apple Maps'}
              </button>
              <button
                onClick={close}
                className="ds-btn ds-btn-ghost"
                style={{ width: '100%', marginTop: 2 }}
              >
                Cancel
              </button>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 14, textAlign: 'center' }}>
              Or share location: <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--brand)' }}>Google Maps link</a>
            </div>
          </div>
          <style>{`
            @keyframes mp-fade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes mp-pop { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: none; } }
          `}</style>
        </div>
      )}
    </MapsPromptContext.Provider>
  );
};

export default MapsPromptProvider;
