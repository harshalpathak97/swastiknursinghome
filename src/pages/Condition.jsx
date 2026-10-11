import { Link, data, useParams } from 'react-router'
import { SITE, doctors } from '../data/clinic.js'
import { conditionBySlug } from '../data/conditions.js'
import { localize } from '../data/paths.js'
import { fmtDate, langOf, tx as txFor, useT } from '../lib/i18n.js'
import { crumbsLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { BookButtons, SPECIALTY } from '../components/Doctor.jsx'

const crumbs = (c) => [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Treatments', hi: 'इलाज' }, '/services'], [c.title, `/conditions/${c.slug}`]]
const docOf = (c) => doctors.find((d) => d.id === c.doctor)

export const meta = ({ location, params }) => {
  const c = conditionBySlug[params.slug]
  if (!c) return [{ title: 'Not found' }]
  const lang = langOf(location.pathname)
  const d = docOf(c)
  return seo(location, {
    title: { en: `${c.title.en}: signs, when to see a doctor | Ghatkopar West`, hi: `${c.title.hi}: लक्षण, डॉक्टर को कब दिखाएँ | घाटकोपर पश्चिम` },
    description: c.summary,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: txFor(c.title, lang),
        url: SITE + localize(`/conditions/${c.slug}`, lang),
        inLanguage: lang === 'hi' ? 'hi-IN' : 'en-IN',
        about: { '@type': 'MedicalCondition', name: c.title.en },
        audience: { '@type': 'Patient' },
        ...(c.reviewed && { lastReviewed: c.reviewed, reviewedBy: { '@id': `${SITE}/doctor/${d.id}#doctor` } }),
      },
      crumbsLd(lang, crumbs(c)),
    ],
  })
}

export default function Condition() {
  const { lang, tx, href } = useT()
  const c = conditionBySlug[useParams().slug]
  if (!c) throw data(null, { status: 404 })
  const d = docOf(c)
  return (
    <>
      <header className={`page-head ${d.specialty}`}>
        <div className="wrap">
          <Crumbs items={crumbs(c)} />
          <span className="tag">{tx(SPECIALTY[d.specialty])}</span>
          <h1>{tx(c.title)}</h1>
          <p className="lede">{tx(c.summary)}</p>
        </div>
      </header>
      <div className="wrap">
      <div className={`section side ${d.specialty}`}>
        <article className="prose">
          {c.reviewed ? (
            <p className="muted small">
              {tx({ en: `Reviewed by ${d.name} on ${fmtDate(c.reviewed, lang)}`, hi: `${d.nameHi} द्वारा ${fmtDate(c.reviewed, lang)} को जाँचा गया` })}
            </p>
          ) : (
            <p className="note draft">{tx({ en: `Draft: awaiting review by ${d.name}.`, hi: `ड्राफ़्ट: ${d.nameHi} की समीक्षा बाकी है।` })}</p>
          )}

          <h2>{tx(c.signsHeading ?? { en: 'Common signs', hi: 'आम लक्षण' })}</h2>
          <ul className="ticks">{tx(c.signs).map((x) => <li key={x}>{x}</li>)}</ul>

          <h2>{tx(c.seeHeading ?? { en: 'See the doctor if', hi: 'डॉक्टर को दिखाएँ अगर' })}</h2>
          <ul className="ticks">{tx(c.see).map((x) => <li key={x}>{x}</li>)}</ul>

          <div className="note alert" style={{ marginTop: '2rem' }}>
            <p><strong>{tx({ en: 'Go to a hospital or call 108 now if:', hi: 'तुरंत अस्पताल जाएँ या 108 पर कॉल करें अगर:' })}</strong></p>
            <ul className="ticks" style={{ marginTop: '0.5rem', '--accent': 'var(--alert)' }}>{tx(c.urgent).map((x) => <li key={x}>{x}</li>)}</ul>
          </div>

          <h2>{tx({ en: 'At the clinic', hi: 'क्लिनिक में' })}</h2>
          <p>{tx(c.visit)}</p>
        </article>
        <aside className="card">
          <h2>{tx({ en: 'Who to see', hi: 'किसे दिखाएँ' })}</h2>
          <p>
            <Link to={href(`/doctor/${d.id}`)}><strong>{tx({ en: d.name, hi: d.nameHi })}</strong></Link>
            <br />
            <span className="muted">{tx(d.title)}</span>
          </p>
          <BookButtons doctor={d} />
        </aside>
      </div>
      </div>
    </>
  )
}
