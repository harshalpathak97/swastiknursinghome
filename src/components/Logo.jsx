/**
 * Swastik mark — a tall serif "S" set inside a navy rounded square,
 * with a faint medical cross watermark behind. Renders crisply at any size.
 */
const LogoMark = ({ size = 42, radius }) => {
  const r = radius ?? Math.round(size * 0.27);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="swastik-mark-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a5d96" />
          <stop offset="1" stopColor="#163a5c" />
        </linearGradient>
        <linearGradient id="swastik-mark-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx={(r / size) * 64} fill="url(#swastik-mark-bg)" />
      <rect x="3.5" y="3.5" width="57" height="57" rx={(r / size) * 64 - 3.5} fill="none" stroke="url(#swastik-mark-ring)" strokeWidth="0.8" />
      {/* faint medical cross watermark */}
      <g transform="translate(32 32)" opacity="0.10">
        <rect x="-1.6" y="-12" width="3.2" height="24" rx="0.6" fill="#ffffff" />
        <rect x="-12" y="-1.6" width="24" height="3.2" rx="0.6" fill="#ffffff" />
      </g>
      <text
        x="32"
        y="44.5"
        textAnchor="middle"
        fontFamily="'Instrument Serif', 'Cormorant Garamond', Georgia, serif"
        fontSize="42"
        fontWeight="400"
        fill="#ffffff"
        letterSpacing="-0.02em"
      >
        S
      </text>
    </svg>
  );
};

const Logo = ({ size = 42, showText = true, subtitle = 'Est. 2002' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
    <LogoMark size={size} />
    {showText && (
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          className="ds-logo-title"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: Math.round(size * 0.55),
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
          }}
        >
          Swastik Nursing Home
        </span>
        <span
          className="ds-logo-subtitle"
          style={{
            fontSize: 10.5,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            marginTop: 5,
            fontFamily: "'Geist', sans-serif",
            fontWeight: 500,
          }}
        >
          {subtitle}
        </span>
      </span>
    )}
  </span>
);

export { LogoMark };
export default Logo;
