import { clinic } from '../data/clinic.js'
import { langOf, useT } from '../lib/i18n.js'
import { directionsHref, mapEmbedSrc, telHref, waHref } from '../lib/links.js'
import { clinicLd, crumbsLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'
import { HoursTable, OpenStatus } from '../components/Hours.jsx'
import { PinIcon, WhatsAppIcon } from '../components/Icons.jsx'

const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Contact', hi: 'संपर्क' }, '/contact']]

export const meta = ({ location }) =>
  seo(location, {
    title: { en: 'Contact and directions: L.B.S. Marg, opposite Shreyas Theatre, Ghatkopar West | Swastik Nursing Home', hi: 'संपर्क और रास्ता: एल.बी.एस. मार्ग, श्रेयस थिएटर के सामने, घाटकोपर पश्चिम | स्वस्तिक नर्सिंग होम' },
    description: { en: `Call ${clinic.phone} or WhatsApp ${clinic.whatsapp}. 1st floor, Bhaveshwar Plaza, L.B.S. Marg, opposite Shreyas Theatre, Ghatkopar West, Mumbai 400086.`, hi: `कॉल ${clinic.phone} या WhatsApp ${clinic.whatsapp}। पहली मंज़िल, भावेश्वर प्लाज़ा, एल.बी.एस. मार्ग, श्रेयस थिएटर के सामने, घाटकोपर पश्चिम, मुंबई 400086।` },
    jsonLd: [clinicLd(), crumbsLd(langOf(location.pathname), CRUMBS)],
  })

export default function Contact() {
  const { tx } = useT()
  const a = clinic.address
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'Contact and directions', hi: 'संपर्क और रास्ता' })}</h1>
          <OpenStatus />
        </div>
      </header>
      <div className="wrap">
      <section className="section cols">
        <div className="stack" style={{ '--gap': '1.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.125rem' }}>{tx({ en: 'Phone', hi: 'फ़ोन' })}</h2>
            <a href={telHref} className="num" style={{ fontSize: '2rem', fontWeight: 700, textDecoration: 'none' }}>{clinic.phone}</a>
          </div>
          <div>
            <h2 style={{ fontSize: '1.125rem' }}>WhatsApp</h2>
            <a href={waHref()} className="btn btn-wa" style={{ marginTop: '0.5rem' }}>
              <WhatsAppIcon />
              <span className="num">{clinic.whatsapp}</span>
            </a>
          </div>
          <div>
            <h2 style={{ fontSize: '1.125rem' }}>{tx({ en: 'Address', hi: 'पता' })}</h2>
            <address style={{ fontStyle: 'normal' }}>
              {clinic.name}
              <br />
              {a.line1}
              <br />
              {a.line2}
              <br />
              {a.locality}, {a.city} {a.pin}
            </address>
            <p className="muted" style={{ marginTop: '0.5rem' }}>{tx(clinic.landmark)}</p>
            <p className="muted">
              {tx({ en: 'Nearest station: Ghatkopar (Central line and Metro Line 1), under a kilometre away.', hi: 'नज़दीकी स्टेशन: घाटकोपर (सेंट्रल लाइन और मेट्रो लाइन 1), एक किलोमीटर से कम दूरी।' })}
            </p>
            <a href={directionsHref} className="btn btn-line" target="_blank" rel="noopener" style={{ marginTop: '1rem' }}>
              <PinIcon />
              {tx({ en: 'Get directions', hi: 'रास्ता देखें' })}
            </a>
          </div>
          <div>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{tx({ en: 'Hours', hi: 'समय' })}</h2>
            <HoursTable />
          </div>
        </div>
        <div>
          <iframe
            className="map"
            src={mapEmbedSrc}
            title={tx({ en: 'Map showing Swastik Nursing Home', hi: 'स्वस्तिक नर्सिंग होम का नक्शा' })}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="note alert small" style={{ marginTop: '1.5rem' }}>
            {tx({ en: 'This is not an emergency facility. In an emergency, call 108 for an ambulance.', hi: 'यह इमरजेंसी सुविधा नहीं है। इमरजेंसी में एम्बुलेंस के लिए 108 पर कॉल करें।' })}
          </p>
        </div>
      </section>
      </div>
    </>
  )
}
