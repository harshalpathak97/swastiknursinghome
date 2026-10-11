import { doctors } from '../data/clinic.js'
import { langOf, useT } from '../lib/i18n.js'
import { crumbsLd, doctorLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { DoctorPanel } from '../components/Doctor.jsx'

const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Doctors', hi: 'डॉक्टर' }, '/doctors']]

export const meta = ({ location }) =>
  seo(location, {
    title: { en: 'Doctors: Dr. Amit Shah (Pediatrics) and Dr. Swapnil Shah (Orthopedics) | Swastik Nursing Home', hi: 'डॉक्टर: डॉ. अमित शाह (बाल रोग) और डॉ. स्वप्निल शाह (हड्डी रोग) | स्वस्तिक नर्सिंग होम' },
    description: { en: 'Qualifications, registration, languages, fees and hours for the pediatrician and orthopedic surgeon at Swastik Nursing Home, Ghatkopar West.', hi: 'स्वस्तिक नर्सिंग होम, घाटकोपर पश्चिम के बाल रोग विशेषज्ञ और ऑर्थोपेडिक सर्जन की योग्यता, पंजीकरण, भाषाएँ, फ़ीस और समय।' },
    jsonLd: [...doctors.map(doctorLd), crumbsLd(langOf(location.pathname), CRUMBS)],
  })

export default function Doctors() {
  const { tx } = useT()
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'Doctors', hi: 'डॉक्टर' })}</h1>
          <p className="lede">{tx({ en: 'Both doctors consult in English, Hindi and Marathi.', hi: 'दोनों डॉक्टर हिंदी, मराठी और अंग्रेज़ी में बात करते हैं।' })}</p>
        </div>
      </header>
      <div className="wrap">
      <section className="section">
        <div className="split">
          {doctors.map((d) => (
            <DoctorPanel key={d.id} d={d} />
          ))}
        </div>
      </section>
      </div>
    </>
  )
}
