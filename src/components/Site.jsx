import { Link, NavLink, useLocation } from 'react-router'
import { clinic, doctors } from '../data/clinic.js'
import { localize } from '../data/paths.js'
import { unlocalize, useT } from '../lib/i18n.js'
import { directionsHref, telHref, waHref } from '../lib/links.js'
import { HoursTable, OpenStatus, useHoursSummary } from './Hours.jsx'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

const NAV = [
  ['/doctors', { en: 'Doctors', hi: 'डॉक्टर' }],
  ['/vaccination-schedule', { en: 'Vaccination', hi: 'टीकाकरण' }],
  ['/services', { en: 'Treatments', hi: 'इलाज' }],
  ['/about', { en: 'About', hi: 'परिचय' }],
  ['/contact', { en: 'Contact', hi: 'संपर्क' }],
]

function LangSwitch() {
  const { lang } = useT()
  const { pathname, search } = useLocation()
  const other = lang === 'hi' ? 'en' : 'hi'
  return (
    <Link className="lang" to={localize(unlocalize(pathname), other) + search} hrefLang={other} lang={other}>
      {other === 'hi' ? 'हिंदी' : 'English'}
    </Link>
  )
}

export function Brand() {
  const { tx, href } = useT()
  return (
    <Link to={href('/')} className="brand">
      <img className="brand-mark" src="/logo.svg" alt="" width="48" height="48" />
      <span>
        <span className="brand-name">{tx({ en: 'Swastik', hi: 'स्वस्तिक' })}</span>
        <span className="brand-sub">{tx({ en: 'Nursing Home', hi: 'नर्सिंग होम' })}</span>
      </span>
    </Link>
  )
}

export function Header() {
  const { tx, href } = useT()
  const { pathname } = useLocation()
  const hours = useHoursSummary()
  const links = NAV.map(([p, label]) => (
    <NavLink key={p} to={href(p)}>
      {tx(label)}
    </NavLink>
  ))
  return (
    <>
      <a className="skip" href="#main">{tx({ en: 'Skip to content', hi: 'सामग्री पर जाएँ' })}</a>
      <div className="util">
        <div className="wrap">
          <OpenStatus />
          <span className="hours-line">{hours}</span>
          <a href={telHref} className="num">{clinic.phone}</a>
          <LangSwitch />
        </div>
      </div>
      <header className="site-head">
        <div className="wrap">
          <Brand />
          <nav className="nav" aria-label={tx({ en: 'Main', hi: 'मुख्य' })}>
            {links}
            <a className="btn btn-wa" href={waHref(tx({ en: 'Hello, I would like to book an appointment.', hi: 'नमस्ते, मुझे अपॉइंटमेंट चाहिए।' }))} style={{ minHeight: '2.75rem', padding: '0.25rem 1.125rem' }}>
              <WhatsAppIcon />
              {tx({ en: 'Book', hi: 'बुक करें' })}
            </a>
          </nav>
          {/* Native disclosure: works before JS loads. key resets it on navigation. */}
          <details className="menu" key={pathname}>
            <summary>{tx({ en: 'Menu', hi: 'मेन्यू' })}</summary>
            <nav aria-label={tx({ en: 'Main', hi: 'मुख्य' })}>
              {links}
            </nav>
          </details>
        </div>
      </header>
    </>
  )
}

export function Footer() {
  const { tx, href } = useT()
  const a = clinic.address
  return (
    <footer className="site-foot">
      <div className="wrap">
        <p className="foot-name">{tx({ en: clinic.name, hi: clinic.nameHi })}</p>
        <div className="foot-grid">
          <div className="stack">
            <h2>{tx({ en: 'Visit', hi: 'पता' })}</h2>
            <p>
              {a.line1},<br />
              {a.line2},<br />
              {a.locality}, {a.city} {a.pin}
            </p>
            <p>
              <a href={telHref} className="num">{clinic.phone}</a>
              <br />
              WhatsApp: <a href={waHref()} className="num">{clinic.whatsapp}</a>
            </p>
          </div>
          <div>
            <h2>{tx({ en: 'Hours', hi: 'समय' })}</h2>
            <HoursTable />
          </div>
          <div>
            <h2>{tx({ en: 'Pages', hi: 'पेज' })}</h2>
            <ul>
              {[...NAV, ['/faq', { en: 'Questions', hi: 'सवाल-जवाब' }], ['/privacy', { en: 'Privacy', hi: 'गोपनीयता' }]].map(([p, label]) => (
                <li key={p}><Link to={href(p)}>{tx(label)}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-legal">
          <p>
            {doctors
              .filter((d) => d.regNo)
              .map((d) => `${tx({ en: d.name, hi: d.nameHi })}, ${d.degrees}: ${tx({ en: 'Maharashtra Medical Council Reg. No.', hi: 'महाराष्ट्र मेडिकल काउंसिल पंजीकरण सं.' })} ${d.regNo}`)
              .join(' · ')}
          </p>
          <p>{tx({ en: 'Health information on this website is for general awareness. It is not a substitute for seeing a doctor.', hi: 'इस वेबसाइट पर दी गई स्वास्थ्य जानकारी सामान्य जागरूकता के लिए है। यह डॉक्टर से मिलने का विकल्प नहीं है।' })}</p>
          <p>{tx({ en: 'This is not an emergency facility. In an emergency, call 108.', hi: 'यह इमरजेंसी सुविधा नहीं है। इमरजेंसी में 108 पर कॉल करें।' })}</p>
          <p>© {clinic.founded}–{new Date().getFullYear()} {clinic.name}</p>
        </div>
      </div>
    </footer>
  )
}

export function ActionBar() {
  const { tx } = useT()
  return (
    <nav className="actionbar" aria-label={tx({ en: 'Contact the clinic', hi: 'क्लिनिक से संपर्क' })}>
      <a href={telHref}><PhoneIcon />{tx({ en: 'Call', hi: 'कॉल' })}</a>
      <a href={waHref()} className="wa"><WhatsAppIcon />WhatsApp</a>
      <a href={directionsHref}><PinIcon />{tx({ en: 'Directions', hi: 'रास्ता' })}</a>
    </nav>
  )
}

export function Crumbs({ items }) {
  const { tx, href } = useT()
  return (
    <nav className="crumbs" aria-label={tx({ en: 'Breadcrumb', hi: 'ब्रेडक्रंब' })}>
      {items.map(([label, p], i) => (
        <span key={p}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i < items.length - 1 ? <Link to={href(p)}>{tx(label)}</Link> : <span aria-current="page">{tx(label)}</span>}
        </span>
      ))}
    </nav>
  )
}
