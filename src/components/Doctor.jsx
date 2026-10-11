import { Link } from 'react-router'
import { clinic } from '../data/clinic.js'
import { conditions } from '../data/conditions.js'
import { inr, useT } from '../lib/i18n.js'
import { telHref, waHref } from '../lib/links.js'
import { useHoursSummary } from './Hours.jsx'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export const SPECIALTY = {
  peds: { en: 'Pediatrics', hi: 'बाल रोग' },
  ortho: { en: 'Orthopedics', hi: 'हड्डी रोग' },
}

const LANG_HI = { English: 'अंग्रेज़ी', Hindi: 'हिंदी', Marathi: 'मराठी' }

export const bookText = (d) => `Hello, I would like an appointment with ${d.name} at ${clinic.name}.`

export function BookButtons({ doctor, text }) {
  const { tx } = useT()
  return (
    <div className="btns">
      <a className="btn btn-ink" href={telHref}>
        <PhoneIcon />
        {tx({ en: `Call ${clinic.phone}`, hi: `कॉल करें ${clinic.phone}` })}
      </a>
      <a className="btn btn-wa" href={waHref(text ?? (doctor ? bookText(doctor) : ''))}>
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  )
}

export function DoctorFacts({ d }) {
  const { tx } = useT()
  const hours = useHoursSummary()
  return (
    <dl className="facts">
      <dt>{tx({ en: 'Qualifications', hi: 'योग्यता' })}</dt>
      <dd>{d.degrees}</dd>
      {d.regNo && (
        <>
          <dt>{tx({ en: 'MMC Reg. No.', hi: 'MMC पंजीकरण' })}</dt>
          <dd className="num">{d.regNo}</dd>
        </>
      )}
      <dt>{tx({ en: 'Experience', hi: 'अनुभव' })}</dt>
      <dd>{tx({ en: `${d.since}+ years`, hi: `${d.since}+ वर्ष` })}</dd>
      <dt>{tx({ en: 'Languages', hi: 'भाषाएँ' })}</dt>
      <dd>{tx({ en: d.languages.join(', '), hi: d.languages.map((l) => LANG_HI[l]).join(', ') })}</dd>
      <dt>{tx({ en: 'Consultation', hi: 'फ़ीस' })}</dt>
      <dd>{tx({ en: `from ${inr(d.fee)}`, hi: `${inr(d.fee)} से` })}</dd>
      <dt>{tx({ en: 'Clinic hours', hi: 'समय' })}</dt>
      <dd>{hours}</dd>
    </dl>
  )
}

// The specialty block: photo, credentials, guides and booking for one doctor.
export function DoctorPanel({ d }) {
  const { tx, href } = useT()
  const guides = conditions.filter((c) => c.doctor === d.id)
  return (
    <article className={`block ${d.specialty}`}>
      <div className="block-top">
        <img src={d.photo} alt="" width="88" height="88" loading="lazy" />
        <div>
          <span className="tag">{tx(SPECIALTY[d.specialty])}</span>
          <h3 style={{ marginTop: '0.5rem' }}>
            <Link to={href(`/doctor/${d.id}`)}>{tx({ en: d.name, hi: d.nameHi })}</Link>
          </h3>
          <p className="muted">{tx(d.title)}</p>
        </div>
      </div>
      <DoctorFacts d={d} />
      <ul className="chips">
        {d.specialty === 'peds' && (
          <li><Link to={href('/vaccination-schedule')}>{tx({ en: 'Vaccination schedule', hi: 'टीकाकरण शेड्यूल' })}</Link></li>
        )}
        {guides.map((c) => (
          <li key={c.slug}><Link to={href(`/conditions/${c.slug}`)}>{tx(c.title)}</Link></li>
        ))}
      </ul>
      <BookButtons doctor={d} />
    </article>
  )
}

export function Portrait({ d, eager }) {
  const { tx, href } = useT()
  return (
    <figure className={`portrait ${d.specialty}`}>
      <Link to={href(`/doctor/${d.id}`)}>
        <img src={d.photo} alt={tx({ en: d.name, hi: d.nameHi })} width="686" height="1024" loading={eager ? 'eager' : 'lazy'} />
        <figcaption>
          <b>{tx({ en: d.name, hi: d.nameHi })}</b>
          <span>{tx(d.title)}</span>
        </figcaption>
      </Link>
    </figure>
  )
}
