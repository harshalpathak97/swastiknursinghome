import { Link } from 'react-router'
import { doctors } from '../data/clinic.js'
import { conditions } from '../data/conditions.js'
import { langOf, useT } from '../lib/i18n.js'
import { crumbsLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { BookButtons, SPECIALTY } from '../components/Doctor.jsx'

const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Treatments', hi: 'इलाज' }, '/services']]

export const meta = ({ location }) =>
  seo(location, {
    title: { en: 'Child care and orthopedic treatment in Ghatkopar West | Swastik Nursing Home', hi: 'घाटकोपर पश्चिम में बच्चों का इलाज और हड्डी रोग उपचार | स्वस्तिक नर्सिंग होम' },
    description: { en: 'Vaccination, newborn care, fever and asthma in children. Knee and back pain, fractures, sports injuries and arthritis in adults. Plain-language health guides.', hi: 'बच्चों में टीकाकरण, नवजात देखभाल, बुखार और अस्थमा। बड़ों में घुटने और कमर दर्द, फ़्रैक्चर, खेल की चोट और गठिया। आसान भाषा में स्वास्थ्य जानकारी।' },
    jsonLd: [crumbsLd(langOf(location.pathname), CRUMBS)],
  })

export default function Services() {
  const { tx, href } = useT()
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'Treatments and health guides', hi: 'इलाज और स्वास्थ्य जानकारी' })}</h1>
          <p className="lede">{tx({ en: 'What each doctor treats, with short guides on common problems: the signs, when to come in, and when to go straight to a hospital.', hi: 'हर डॉक्टर किसका इलाज करते हैं, और आम समस्याओं पर छोटी जानकारी: लक्षण, कब आएँ, और कब सीधे अस्पताल जाएँ।' })}</p>
        </div>
      </header>
      <div className="wrap">
      <section className="section cols">
        {[...doctors].reverse().map((d) => (
          <div key={d.id} className={`block ${d.specialty}`}>
            <span className="tag">{tx(SPECIALTY[d.specialty])}</span>
            <h2 style={{ fontSize: '1.5rem' }}>
              <Link to={href(`/doctor/${d.id}`)}>{tx({ en: d.name, hi: d.nameHi })}</Link>
            </h2>
            <ul className="ticks">{tx(d.focus).map((f) => <li key={f}>{f}</li>)}</ul>
            <h3 style={{ marginTop: '1.5rem' }}>{tx({ en: 'Guides', hi: 'जानकारी' })}</h3>
            <ul className="chips">
              {d.specialty === 'peds' && (
                <li><Link to={href('/vaccination-schedule')}>{tx({ en: 'Vaccination schedule', hi: 'टीकाकरण शेड्यूल' })}</Link></li>
              )}
              {conditions.filter((c) => c.doctor === d.id).map((c) => (
                <li key={c.slug}><Link to={href(`/conditions/${c.slug}`)}>{tx(c.title)}</Link></li>
              ))}
            </ul>
            <BookButtons doctor={d} />
          </div>
        ))}
      </section>
      </div>
    </>
  )
}
