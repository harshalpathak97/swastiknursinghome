import { Link, data, useParams } from 'react-router'
import { doctors } from '../data/clinic.js'
import { conditions } from '../data/conditions.js'
import { langOf, tx as txFor, useT } from '../lib/i18n.js'
import { crumbsLd, doctorLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { BookButtons, DoctorFacts, SPECIALTY } from '../components/Doctor.jsx'

const find = (id) => doctors.find((d) => d.id === id)
const crumbs = (d) => [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Doctors', hi: 'डॉक्टर' }, '/doctors'], [{ en: d.name, hi: d.nameHi }, `/doctor/${d.id}`]]

export const meta = ({ location, params }) => {
  const d = find(params.doctorId)
  if (!d) return [{ title: 'Not found' }]
  const lang = langOf(location.pathname)
  const spec = txFor(d.title, lang)
  return seo(location, {
    title: { en: `${d.name}, ${spec} in Ghatkopar West | ${d.degrees}`, hi: `${d.nameHi}, ${spec}, घाटकोपर पश्चिम | ${d.degrees}` },
    description: {
      en: `${d.name}, ${d.degrees}, ${d.since}+ years. ${d.focus.en.slice(0, 4).join(', ')}. Swastik Nursing Home, L.B.S. Marg, Ghatkopar West.`,
      hi: `${d.nameHi}, ${d.degrees}, ${d.since}+ वर्ष। ${d.focus.hi.slice(0, 4).join(', ')}। स्वस्तिक नर्सिंग होम, एल.बी.एस. मार्ग, घाटकोपर पश्चिम।`,
    },
    jsonLd: [doctorLd(d), crumbsLd(lang, crumbs(d))],
  })
}

export default function Doctor() {
  const { tx, href } = useT()
  const d = find(useParams().doctorId)
  if (!d) throw data(null, { status: 404 })
  const guides = conditions.filter((c) => c.doctor === d.id)
  return (
    <>
      <header className={`page-head ${d.specialty}`}>
        <div className="wrap">
          <Crumbs items={crumbs(d)} />
          <div className="doc-hero">
            <div>
              <span className="tag">{tx(SPECIALTY[d.specialty])}</span>
              <h1>{tx({ en: d.name, hi: d.nameHi })}</h1>
              <p className="lede">{tx(d.title)} · {d.degrees}</p>
            </div>
            <img src={d.photo} alt={tx({ en: d.name, hi: d.nameHi })} width="686" height="1024" />
          </div>
        </div>
      </header>
      <div className="wrap">
      <div className="section side">
        <div className="prose">
          <p className="lede">{tx(d.bio)}</p>

          <h2>{tx({ en: 'What the doctor treats', hi: 'किन समस्याओं का इलाज' })}</h2>
          <ul className={`ticks ${d.specialty}`}>
            {tx(d.focus).map((f) => <li key={f}>{f}</li>)}
          </ul>

          {d.education.length > 0 && (
            <>
              <h2>{tx({ en: 'Education', hi: 'शिक्षा' })}</h2>
              <ul className="ticks">
                {d.education.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </>
          )}

          <h2>{tx({ en: 'Health guides', hi: 'स्वास्थ्य जानकारी' })}</h2>
          <ul className="chips">
            {d.specialty === 'peds' && (
              <li><Link className="peds" to={href('/vaccination-schedule')}>{tx({ en: 'Vaccination schedule', hi: 'टीकाकरण शेड्यूल' })}</Link></li>
            )}
            {guides.map((c) => (
              <li key={c.slug}><Link className={d.specialty} to={href(`/conditions/${c.slug}`)}>{tx(c.title)}</Link></li>
            ))}
          </ul>
        </div>
        <aside className="card">
          <h2>{tx({ en: 'Book a consultation', hi: 'अपॉइंटमेंट लें' })}</h2>
          <DoctorFacts d={d} />
          <BookButtons doctor={d} />
        </aside>
      </div>
      </div>
    </>
  )
}
