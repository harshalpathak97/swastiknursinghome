import { Form, Link } from 'react-router'
import { clinic, doctors, faqs } from '../data/clinic.js'
import { schedule } from '../lib/vaccines.js'
import { langOf, useT } from '../lib/i18n.js'
import { directionsHref, mapEmbedSrc, telHref, waHref } from '../lib/links.js'
import { clinicLd, doctorLd, faqLd, seo } from '../lib/seo.js'
import { BookButtons, DoctorPanel, Portrait } from '../components/Doctor.jsx'
import { HoursTable, OpenStatus } from '../components/Hours.jsx'
import { PhoneIcon, PinIcon, WhatsAppIcon } from '../components/Icons.jsx'
import { FaqList } from './Faq.jsx'

export const meta = ({ location }) =>
  seo(location, {
    title: {
      en: 'Swastik Nursing Home, Ghatkopar West | Pediatrician and Orthopedic Surgeon',
      hi: 'स्वस्तिक नर्सिंग होम, घाटकोपर पश्चिम | बच्चों के डॉक्टर और हड्डी रोग विशेषज्ञ',
    },
    description: {
      en: `Dr. Amit Shah (MD Pediatrics) and Dr. Swapnil Shah (MS Orthopedics, 27+ years) on L.B.S. Marg, opposite Shreyas Theatre, Ghatkopar West, Mumbai. Call ${clinic.phone} or WhatsApp to book.`,
      hi: `डॉ. अमित शाह (MD बाल रोग) और डॉ. स्वप्निल शाह (MS ऑर्थोपेडिक्स, 27+ वर्ष), एल.बी.एस. मार्ग, श्रेयस थिएटर के सामने, घाटकोपर पश्चिम, मुंबई। अपॉइंटमेंट के लिए ${clinic.phone} पर कॉल या WhatsApp करें।`,
    },
    jsonLd: [clinicLd(), ...doctors.map(doctorLd), faqLd(faqs.slice(0, 4), langOf(location.pathname))],
  })

export default function Home() {
  const { tx, href } = useT()
  const a = clinic.address
  const st = clinic.stats
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">{tx({ en: `Ghatkopar West · since ${clinic.founded}`, hi: `घाटकोपर पश्चिम · ${clinic.founded} से` })}</p>
            <h1>{tx({ en: 'Children’s doctor and bone & joint surgeon, Ghatkopar West', hi: 'बच्चों के डॉक्टर और हड्डी-जोड़ के सर्जन, घाटकोपर पश्चिम' })}</h1>
            <p className="lede">
              {tx({
                en: 'Dr. Amit Shah looks after children from newborns to teens. Dr. Swapnil Shah treats knee, back and joint pain, fractures and sports injuries. On L.B.S. Marg, opposite Shreyas Theatre.',
                hi: 'डॉ. अमित शाह नवजात से किशोर उम्र तक के बच्चों को देखते हैं। डॉ. स्वप्निल शाह घुटने, कमर और जोड़ों के दर्द, फ़्रैक्चर और खेल की चोटों का इलाज करते हैं। एल.बी.एस. मार्ग, श्रेयस थिएटर के सामने।',
              })}
            </p>
            <div className="btns">
              <a className="btn btn-ink" href={telHref}>
                <PhoneIcon />
                <span className="num">{clinic.phone}</span>
              </a>
              <a className="btn btn-wa" href={waHref(tx({ en: 'Hello, I would like to book an appointment.', hi: 'नमस्ते, मुझे अपॉइंटमेंट चाहिए।' }))}>
                <WhatsAppIcon />
                {tx({ en: 'Book on WhatsApp', hi: 'WhatsApp पर बुक करें' })}
              </a>
            </div>
            <div className="proof">
              <div>
                <b>{st.rating}<span className="star" aria-hidden="true">★</span></b>
                <span>{tx({ en: `Google rating · ${st.reviews} reviews`, hi: `Google रेटिंग · ${st.reviews} रिव्यू` })}</span>
              </div>
              <div>
                <b>{clinic.founded}</b>
                <span>{tx({ en: 'in Ghatkopar since', hi: 'से घाटकोपर में' })}</span>
              </div>
              <div>
                <b>{st.visits}</b>
                <span>{tx({ en: 'patient visits', hi: 'मरीज़ विज़िट' })}</span>
              </div>
            </div>
          </div>
          <div className="portraits">
            {doctors.map((d) => (
              <Portrait key={d.id} d={d} eager />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="doctors-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">{tx({ en: 'The doctors', hi: 'डॉक्टर' })}</p>
              <h2 id="doctors-h">{tx({ en: 'Who you will see', hi: 'आप किससे मिलेंगे' })}</h2>
            </div>
            <p>{tx({ en: 'Fees, timings and registration up front. Both doctors speak English, Hindi and Marathi.', hi: 'फ़ीस, समय और पंजीकरण पहले से साफ़। दोनों डॉक्टर हिंदी, मराठी और अंग्रेज़ी बोलते हैं।' })}</p>
          </div>
          <div className="split">
            {doctors.map((d) => (
              <DoctorPanel key={d.id} d={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark kolam" aria-labelledby="vax-h">
        <div className="wrap vax-grid">
          <div>
            <p className="eyebrow">{tx({ en: 'For parents', hi: 'माता-पिता के लिए' })}</p>
            <h2 id="vax-h">{tx({ en: 'Which vaccine is your child due for?', hi: 'आपके बच्चे का अगला टीका कौन-सा है?' })}</h2>
            <p className="lede" style={{ marginTop: '1.25rem' }}>
              {tx({
                en: 'Enter the date of birth to see every vaccine in the IAP 2023 schedule, with the date each one is due. Nothing you type leaves your phone.',
                hi: 'जन्मतिथि डालें और IAP 2023 शेड्यूल का हर टीका उसकी तारीख़ के साथ देखें। आपकी डाली जानकारी आपके फ़ोन से बाहर नहीं जाती।',
              })}
            </p>
            <Form method="get" action={href('/vaccination-schedule')} className="dob">
              <label>
                {tx({ en: 'Date of birth', hi: 'जन्मतिथि' })}
                <input type="date" name="dob" required />
              </label>
              <button className="btn btn-ink" type="submit">{tx({ en: 'Show due dates', hi: 'तारीख़ें देखें' })}</button>
            </Form>
          </div>
          <ol className="timeline" aria-label={tx({ en: 'First-year vaccines', hi: 'पहले साल के टीके' })}>
            {schedule.slice(0, 9).map((r) => (
              <li key={r.label.en + r.vaccines[0]}>
                <b>{tx(r.label)}</b>
                <span>{r.vaccines.join(', ')}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt" aria-labelledby="visit-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">{tx({ en: 'Visiting', hi: 'आना' })}</p>
              <h2 id="visit-h">{tx({ en: 'Planning your visit', hi: 'विज़िट की तैयारी' })}</h2>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <h3>{tx({ en: 'Hours', hi: 'समय' })}</h3>
              <OpenStatus />
              <HoursTable />
              <p className="muted small">{tx({ en: 'Walk-ins are seen during clinic hours. Call first to check the doctor is in.', hi: 'क्लिनिक के समय में बिना अपॉइंटमेंट भी आ सकते हैं। डॉक्टर उपलब्ध हैं या नहीं, पहले कॉल करके पूछ लें।' })}</p>
            </div>
            <div className="card">
              <h3>{tx({ en: 'Finding us', hi: 'पता' })}</h3>
              <iframe className="map" src={mapEmbedSrc} title={tx({ en: 'Map', hi: 'नक्शा' })} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <p>
                <strong>{a.line1}</strong>, {a.line2}, {a.locality} {a.pin}
              </p>
              <p className="muted small">{tx(clinic.landmark)}</p>
              <div className="btns">
                <a className="btn btn-line" href={directionsHref} target="_blank" rel="noopener">
                  <PinIcon />
                  {tx({ en: 'Directions', hi: 'रास्ता देखें' })}
                </a>
              </div>
            </div>
            <div className="card">
              <h3>{tx({ en: 'What to bring', hi: 'साथ क्या लाएँ' })}</h3>
              <p className="tag peds" style={{ alignSelf: 'start' }}>{tx({ en: 'For your child', hi: 'बच्चे के लिए' })}</p>
              <ul className="ticks peds">
                {tx({ en: ['Vaccination card', 'Earlier prescriptions', 'A note of temperatures, if feverish'], hi: ['टीकाकरण कार्ड', 'पुराने प्रिस्क्रिप्शन', 'बुखार हो तो तापमान का नोट'] }).map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="tag ortho" style={{ alignSelf: 'start', marginTop: '0.5rem' }}>{tx({ en: 'For bones and joints', hi: 'हड्डी और जोड़ के लिए' })}</p>
              <ul className="ticks ortho">
                {tx({ en: ['Old X-rays, MRI or CT reports', 'Medicines you take', 'Loose clothing'], hi: ['पुराने X-ray, MRI या CT रिपोर्ट', 'चल रही दवाइयाँ', 'ढीले कपड़े'] }).map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-h">
        <div className="wrap faq-grid">
          <div className="stack">
            <p className="eyebrow">{tx({ en: 'Questions', hi: 'सवाल' })}</p>
            <h2 id="faq-h">{tx({ en: 'Before you call', hi: 'कॉल करने से पहले' })}</h2>
            <p className="muted">{tx({ en: 'Anything else, the desk will answer on the phone or WhatsApp.', hi: 'कुछ और पूछना हो तो डेस्क फ़ोन या WhatsApp पर जवाब देगा।' })}</p>
            <Link to={href('/faq')}>{tx({ en: 'All questions', hi: 'सभी सवाल' })}</Link>
          </div>
          <FaqList items={faqs.slice(0, 5)} />
        </div>
      </section>

      <section className="section dark kolam">
        <div className="wrap section-head" style={{ marginBottom: 0 }}>
          <h2 style={{ maxWidth: '18ch' }}>{tx({ en: 'Call or WhatsApp to book your visit.', hi: 'अपॉइंटमेंट के लिए कॉल या WhatsApp करें।' })}</h2>
          <BookButtons />
        </div>
      </section>
    </>
  )
}
