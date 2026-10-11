import { Link } from 'react-router'
import { clinic, doctors } from '../data/clinic.js'
import { langOf, useT } from '../lib/i18n.js'
import { clinicLd, crumbsLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { BookButtons, SPECIALTY } from '../components/Doctor.jsx'

const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'About', hi: 'परिचय' }, '/about']]

export const meta = ({ location }) =>
  seo(location, {
    title: { en: `About Swastik Nursing Home, Ghatkopar West (since ${clinic.founded})`, hi: `स्वस्तिक नर्सिंग होम, घाटकोपर पश्चिम का परिचय (${clinic.founded} से)` },
    description: { en: `A pediatric and orthopedic nursing home on L.B.S. Marg, Ghatkopar West, Mumbai, since ${clinic.founded}. Doctors, registration, languages and payment.`, hi: `${clinic.founded} से एल.बी.एस. मार्ग, घाटकोपर पश्चिम, मुंबई में बाल रोग और हड्डी रोग नर्सिंग होम। डॉक्टर, पंजीकरण, भाषाएँ और भुगतान।` },
    jsonLd: [clinicLd(), crumbsLd(langOf(location.pathname), CRUMBS)],
  })

export default function About() {
  const { tx, href } = useT()
  const a = clinic.address
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'About the clinic', hi: 'क्लिनिक का परिचय' })}</h1>
          <p className="lede">
            {tx({
              en: `Swastik Nursing Home opened on L.B.S. Marg in Ghatkopar West in ${clinic.founded}. It has two specialties: care for children, and treatment of bones, joints and the spine.`,
              hi: `स्वस्तिक नर्सिंग होम ${clinic.founded} में घाटकोपर पश्चिम के एल.बी.एस. मार्ग पर शुरू हुआ। यहाँ दो विभाग हैं: बच्चों की देखभाल, और हड्डी, जोड़ व रीढ़ का इलाज।`,
            })}
          </p>
        </div>
      </header>
      <div className="wrap">
      <section className="section side">
        <div className="prose">
          <h2 style={{ marginTop: 0 }}>{tx({ en: 'At a glance', hi: 'एक नज़र में' })}</h2>
          <dl className="facts">
            <dt>{tx({ en: 'Name', hi: 'नाम' })}</dt>
            <dd>{clinic.name}</dd>
            <dt>{tx({ en: 'Since', hi: 'स्थापना' })}</dt>
            <dd>{clinic.founded}</dd>
            <dt>{tx({ en: 'Address', hi: 'पता' })}</dt>
            <dd>{a.line1}, {a.line2}, {a.locality}, {a.city} {a.pin}</dd>
            <dt>{tx({ en: 'Languages', hi: 'भाषाएँ' })}</dt>
            <dd>{tx({ en: 'English, Hindi, Marathi', hi: 'हिंदी, मराठी, अंग्रेज़ी' })}</dd>
            <dt>{tx({ en: 'Payment', hi: 'भुगतान' })}</dt>
            <dd>{tx(clinic.payment)}</dd>
            <dt>{tx({ en: 'Emergencies', hi: 'इमरजेंसी' })}</dt>
            <dd>{tx({ en: 'Not an emergency facility. Call 108.', hi: 'इमरजेंसी सुविधा नहीं। 108 पर कॉल करें।' })}</dd>
          </dl>

          <h2>{tx({ en: 'Doctors', hi: 'डॉक्टर' })}</h2>
          <ul className="ticks">
            {doctors.map((d) => (
              <li key={d.id} className={d.specialty}>
                <Link to={href(`/doctor/${d.id}`)}>{tx({ en: d.name, hi: d.nameHi })}</Link>, {d.degrees} · {tx(SPECIALTY[d.specialty])}
                {d.regNo && <> · {tx({ en: 'MMC Reg. No.', hi: 'MMC पंजीकरण' })} <span className="num">{d.regNo}</span></>}
              </li>
            ))}
          </ul>

          <h2>{tx({ en: 'What this website does not do', hi: 'यह वेबसाइट क्या नहीं करती' })}</h2>
          <p>
            {tx({
              en: 'We do not publish patient testimonials, ratings or success claims, in line with the National Medical Commission’s rules for doctors. You can read independent reviews on Google and other directories.',
              hi: 'नेशनल मेडिकल कमीशन के डॉक्टरों के नियमों के अनुसार, हम मरीज़ों के प्रशंसापत्र, रेटिंग या सफलता के दावे प्रकाशित नहीं करते। स्वतंत्र समीक्षाएँ आप Google और अन्य डायरेक्टरी पर पढ़ सकते हैं।',
            })}
          </p>
        </div>
        <aside className="card">
          <h2>{tx({ en: 'Book a visit', hi: 'अपॉइंटमेंट लें' })}</h2>
          <BookButtons />
        </aside>
      </section>
      </div>
    </>
  )
}
