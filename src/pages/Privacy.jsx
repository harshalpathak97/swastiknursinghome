import { clinic } from '../data/clinic.js'
import { langOf, useT } from '../lib/i18n.js'
import { telHref } from '../lib/links.js'
import { crumbsLd, seo } from '../lib/seo.js'
import { Crumbs } from '../components/Site.jsx'

const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Privacy', hi: 'गोपनीयता' }, '/privacy']]
const UPDATED = { en: '11 October 2026', hi: '11 अक्टूबर 2026' }

export const meta = ({ location }) =>
  seo(location, {
    title: { en: 'Privacy notice | Swastik Nursing Home', hi: 'गोपनीयता सूचना | स्वस्तिक नर्सिंग होम' },
    description: { en: 'What this website collects (almost nothing), how phone and WhatsApp messages are used, and your rights under the Digital Personal Data Protection Act, 2023.', hi: 'यह वेबसाइट क्या जानकारी लेती है (लगभग कुछ नहीं), फ़ोन और WhatsApp संदेशों का उपयोग कैसे होता है, और डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत आपके अधिकार।' },
    jsonLd: [crumbsLd(langOf(location.pathname), CRUMBS)],
  })

const SECTIONS = [
  {
    h: { en: 'What this website collects', hi: 'यह वेबसाइट क्या जानकारी लेती है' },
    p: {
      en: 'This website has no forms, no accounts and no advertising cookies. We use Vercel Web Analytics to count page visits and clicks on the call, WhatsApp and directions buttons. It does not use cookies and does not identify you; we only see totals.',
      hi: 'इस वेबसाइट पर कोई फ़ॉर्म, अकाउंट या विज्ञापन कुकी नहीं है। हम पेज विज़िट और कॉल, WhatsApp व रास्ते वाले बटन के क्लिक गिनने के लिए Vercel Web Analytics का उपयोग करते हैं। यह कुकी का उपयोग नहीं करता और आपकी पहचान नहीं करता; हमें सिर्फ़ कुल संख्या दिखती है।',
    },
  },
  {
    h: { en: 'The vaccination calculator', hi: 'टीकाकरण कैलकुलेटर' },
    p: {
      en: 'The date of birth you enter is processed only in your browser. It is not sent to us or stored anywhere.',
      hi: 'आपकी डाली गई जन्मतिथि सिर्फ़ आपके ब्राउज़र में प्रोसेस होती है। यह हमें नहीं भेजी जाती और कहीं सेव नहीं होती।',
    },
  },
  {
    h: { en: 'When you call or WhatsApp us', hi: 'जब आप हमें कॉल या WhatsApp करते हैं' },
    p: {
      en: 'We use your name, number and what you tell us only to arrange your appointment and care. WhatsApp is run by Meta and its own privacy policy applies to messages sent through it. Please do not send reports or photos over WhatsApp unless the doctor asks for them.',
      hi: 'आपका नाम, नंबर और आपकी दी गई जानकारी हम सिर्फ़ आपकी अपॉइंटमेंट और इलाज के लिए उपयोग करते हैं। WhatsApp, Meta द्वारा चलाया जाता है और उस पर भेजे संदेशों पर उसकी अपनी गोपनीयता नीति लागू होती है। डॉक्टर के कहे बिना WhatsApp पर रिपोर्ट या फ़ोटो न भेजें।',
    },
  },
  {
    h: { en: 'Medical records', hi: 'मेडिकल रिकॉर्ड' },
    p: {
      en: 'Records made during your visit are kept confidential at the clinic, as required by law and medical ethics, and are not part of this website.',
      hi: 'विज़िट के दौरान बने रिकॉर्ड क़ानून और चिकित्सा नैतिकता के अनुसार क्लिनिक में गोपनीय रखे जाते हैं, और इस वेबसाइट का हिस्सा नहीं हैं।',
    },
  },
  {
    h: { en: 'Children', hi: 'बच्चे' },
    p: {
      en: 'This website does not collect any information about children. A child’s details are taken only at the clinic, from a parent or guardian.',
      hi: 'यह वेबसाइट बच्चों के बारे में कोई जानकारी नहीं लेती। बच्चे की जानकारी सिर्फ़ क्लिनिक में, माता-पिता या अभिभावक से ली जाती है।',
    },
  },
  {
    h: { en: 'Your rights', hi: 'आपके अधिकार' },
    p: {
      en: 'Under the Digital Personal Data Protection Act, 2023, you can ask to see, correct or delete personal data we hold about you, and withdraw consent. Contact the clinic desk using the number below. If you are not satisfied with our reply, you can complain to the Data Protection Board of India.',
      hi: 'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत आप हमारे पास मौजूद अपनी व्यक्तिगत जानकारी देखने, सुधारने या हटाने, और सहमति वापस लेने का अनुरोध कर सकते हैं। नीचे दिए नंबर पर क्लिनिक डेस्क से संपर्क करें। जवाब से संतुष्ट न हों तो आप डेटा प्रोटेक्शन बोर्ड ऑफ़ इंडिया में शिकायत कर सकते हैं।',
    },
  },
]

export default function Privacy() {
  const { tx } = useT()
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'Privacy notice', hi: 'गोपनीयता सूचना' })}</h1>
          <p className="muted">{tx({ en: 'Last updated', hi: 'अंतिम अपडेट' })}: {tx(UPDATED)}</p>
        </div>
      </header>
      <div className="wrap">
      <section className="section prose">
        {SECTIONS.map((s, i) => (
          <div key={s.h.en}>
            <h2 style={i === 0 ? { marginTop: 0 } : undefined}>{tx(s.h)}</h2>
            <p>{tx(s.p)}</p>
          </div>
        ))}
        <h2>{tx({ en: 'Contact for privacy questions', hi: 'गोपनीयता संबंधी सवालों के लिए संपर्क' })}</h2>
        <p>
          {clinic.name}, {clinic.address.line1}, {clinic.address.line2}, {clinic.address.locality}, {clinic.address.city} {clinic.address.pin}.{' '}
          {tx({ en: 'Phone', hi: 'फ़ोन' })}: <a href={telHref} className="num">{clinic.phone}</a>
        </p>
      </section>
      </div>
    </>
  )
}
