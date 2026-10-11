import { faqs } from '../data/clinic.js'
import { langOf, useT } from '../lib/i18n.js'
import { crumbsLd, faqLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { BookButtons } from '../components/Doctor.jsx'

const TITLE = { en: 'Questions', hi: 'सवाल-जवाब' }
const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [TITLE, '/faq']]

export const meta = ({ location }) =>
  seo(location, {
    title: { en: 'Fees, timings, insurance and other questions | Swastik Nursing Home', hi: 'फ़ीस, समय, इंश्योरेंस और अन्य सवाल | स्वस्तिक नर्सिंग होम' },
    description: { en: 'Consultation fees, walk-ins, payment, insurance and what to bring to Swastik Nursing Home, Ghatkopar West.', hi: 'स्वस्तिक नर्सिंग होम, घाटकोपर पश्चिम: फ़ीस, बिना अपॉइंटमेंट आना, भुगतान, इंश्योरेंस और साथ में क्या लाएँ।' },
    jsonLd: [faqLd(faqs, langOf(location.pathname)), crumbsLd(langOf(location.pathname), CRUMBS)],
  })

export function FaqList({ items }) {
  const { tx } = useT()
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q.en}>
          <summary>{tx(f.q)}</summary>
          <p>{tx(f.a)}</p>
        </details>
      ))}
    </div>
  )
}

export default function Faq() {
  const { tx } = useT()
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'Questions people ask', hi: 'अक्सर पूछे जाने वाले सवाल' })}</h1>
          <p className="lede">{tx({ en: 'Anything else, call or WhatsApp the clinic.', hi: 'कुछ और पूछना हो तो क्लिनिक को कॉल या WhatsApp करें।' })}</p>
        </div>
      </header>
      <div className="wrap">
      <section className="section">
        <FaqList items={faqs} />
        <div style={{ marginTop: '2rem' }}>
          <BookButtons />
        </div>
      </section>
      </div>
    </>
  )
}
