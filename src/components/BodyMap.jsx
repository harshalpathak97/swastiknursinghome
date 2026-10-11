import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { doctors } from '../data/clinic.js'
import { conditionBySlug } from '../data/conditions.js'
import { useT } from '../lib/i18n.js'
import { waHref } from '../lib/links.js'
import { SPECIALTY } from './Doctor.jsx'
import { WhatsAppIcon } from './Icons.jsx'

// "Where does it hurt?" Tap a point on the figure to see the matching health guide and doctor.
// Coordinates are in the 200×460 figure viewBox. `slug` points at src/data/conditions.js.
const VACCINES = {
  doctor: 'dr-amit-shah',
  path: '/vaccination-schedule',
  title: { en: 'Vaccinations', hi: 'टीकाकरण' },
  summary: {
    en: 'Every vaccine in the IAP 2023 schedule, from birth to 18 years. Enter your child’s date of birth to see which ones are due and when.',
    hi: 'IAP 2023 शेड्यूल का हर टीका, जन्म से 18 साल तक। बच्चे की जन्मतिथि डालें और देखें कौन-सा टीका कब लगना है।',
  },
}

const SPOTS = {
  adult: [
    { id: 'neck', x: 100, y: 82, slug: 'back-neck-pain', label: { en: 'Neck & back', hi: 'गर्दन और कमर' }, ask: { en: 'I have neck or back pain', hi: 'मुझे गर्दन या कमर में दर्द है' } },
    { id: 'shoulder', x: 140, y: 100, slug: 'frozen-shoulder', label: { en: 'Shoulder', hi: 'कंधा' }, ask: { en: 'I have shoulder pain and stiffness', hi: 'मुझे कंधे में दर्द और जकड़न है' } },
    { id: 'wrist', x: 37, y: 262, slug: 'fractures', label: { en: 'Wrist & arm', hi: 'कलाई और हाथ' }, ask: { en: 'I may have a fracture', hi: 'मुझे फ़्रैक्चर हो सकता है' } },
    { id: 'hip', x: 120, y: 232, slug: 'osteoporosis', label: { en: 'Hip', hi: 'कूल्हा' }, ask: { en: 'I have hip pain or weak bones', hi: 'मुझे कूल्हे में दर्द या कमज़ोर हड्डियों की समस्या है' } },
    { id: 'knee', x: 79, y: 338, slug: 'knee-pain-arthritis', label: { en: 'Knee', hi: 'घुटना' }, ask: { en: 'I have knee pain', hi: 'मुझे घुटने में दर्द है' } },
    { id: 'ankle', x: 124, y: 424, slug: 'sports-injuries', label: { en: 'Ankle', hi: 'टखना' }, ask: { en: 'I have a sprain or sports injury', hi: 'मुझे मोच या खेल की चोट है' } },
  ],
  child: [
    { id: 'head', x: 100, y: 112, slug: 'fever-in-children', label: { en: 'Fever', hi: 'बुखार' }, ask: { en: 'my child has a fever', hi: 'मेरे बच्चे को बुखार है' } },
    { id: 'arm', x: 146, y: 196, slug: null, label: { en: 'Vaccines', hi: 'टीके' }, ask: { en: 'my child is due for a vaccination', hi: 'मुझे बच्चे का टीका लगवाना है' } },
    { id: 'chest', x: 100, y: 196, slug: 'cough-cold-asthma', label: { en: 'Cough & breathing', hi: 'खाँसी और साँस' }, ask: { en: 'my child has a cough or cold', hi: 'मेरे बच्चे को खाँसी या सर्दी है' } },
    { id: 'tummy', x: 100, y: 248, slug: 'growth-and-nutrition', label: { en: 'Growth & eating', hi: 'बढ़त और खान-पान' }, ask: { en: 'I would like a growth and nutrition check for my child', hi: 'मुझे बच्चे की बढ़त और पोषण की जाँच करानी है' } },
  ],
}
const NEWBORN = { id: 'newborn', slug: 'newborn-care', label: { en: 'Newborn baby', hi: 'नवजात शिशु' }, ask: { en: 'I would like a newborn check-up', hi: 'मुझे नवजात शिशु की जाँच करानी है' } }

const limb = (d, w) => <path d={d} fill="none" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />

function Figure({ kind, spot }) {
  return (
    <svg viewBox="0 0 200 460" aria-hidden="true">
      <defs>
        <radialGradient id="bm-glow">
          <stop offset="0" stopColor="#eda432" stopOpacity="0.55" />
          <stop offset="1" stopColor="#eda432" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="bm-body">
        {kind === 'adult' ? (
          <>
            <circle cx="100" cy="42" r="26" />
            {limb('M100 66V94', 20)}
            <path d="M60 96C80 86 120 86 140 96L147 170C145 200 139 222 135 240H65C61 222 55 200 53 170Z" />
            {limb('M64 104L45 184L37 260', 22)}
            {limb('M136 104L155 184L163 260', 22)}
            <circle cx="35" cy="274" r="12" />
            <circle cx="165" cy="274" r="12" />
            {limb('M82 232L79 338L77 426', 30)}
            {limb('M118 232L121 338L123 426', 30)}
            <ellipse cx="72" cy="442" rx="17" ry="8" />
            <ellipse cx="128" cy="442" rx="17" ry="8" />
          </>
        ) : (
          <>
            <circle cx="100" cy="116" r="36" />
            {limb('M100 150V166', 18)}
            <path d="M66 168C86 158 114 158 134 168L139 226C137 250 133 266 131 280H69C67 266 63 250 61 226Z" />
            {limb('M71 174L56 226L50 280', 20)}
            {limb('M129 174L144 226L150 280', 20)}
            <circle cx="49" cy="291" r="10" />
            <circle cx="151" cy="291" r="10" />
            {limb('M86 274L84 352L83 424', 26)}
            {limb('M114 274L116 352L117 424', 26)}
            <ellipse cx="79" cy="438" rx="14" ry="7" />
            <ellipse cx="121" cy="438" rx="14" ry="7" />
          </>
        )}
      </g>
      {spot?.x && <circle className="bm-glow" cx={spot.x} cy={spot.y} r="40" fill="url(#bm-glow)" />}
    </svg>
  )
}

export default function BodyMap() {
  const { tx, href } = useT()
  const [kind, setKind] = useState('adult')
  const [id, setId] = useState('knee')
  const panel = useRef(null)

  // On phones the panel sits below the figure; bring the answer into view after a tap.
  const pick = (next) => {
    setId(next)
    if (window.matchMedia('(max-width: 899px)').matches) {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      requestAnimationFrame(() => panel.current?.scrollIntoView({ block: 'nearest', behavior: smooth ? 'smooth' : 'auto' }))
    }
  }

  const all = [...SPOTS[kind], ...(kind === 'child' ? [NEWBORN] : [])]
  const spot = all.find((s) => s.id === id) ?? all[0]
  const c = spot.slug ? conditionBySlug[spot.slug] : VACCINES
  const doc = doctors.find((d) => d.id === c.doctor)
  const guide = spot.slug ? `/conditions/${spot.slug}` : VACCINES.path

  const switchTo = (k) => {
    setKind(k)
    setId(SPOTS[k][0].id)
  }

  return (
    <div className="bodymap">
      <div className="bm-stage">
        <div className="bm-toggle" role="group" aria-label={tx({ en: 'Who is it for?', hi: 'किसके लिए?' })}>
          {[
            ['adult', { en: 'Adult', hi: 'बड़े' }],
            ['child', { en: 'Child', hi: 'बच्चा' }],
          ].map(([k, label]) => (
            <button key={k} type="button" aria-pressed={kind === k} onClick={() => switchTo(k)}>
              {tx(label)}
            </button>
          ))}
        </div>
        <div className="bm-figure">
          <Figure kind={kind} spot={spot} />
          {SPOTS[kind].map((s) => (
            <button
              key={s.id}
              type="button"
              className={`bm-spot${s.x > 100 ? ' right' : ''}`}
              style={{ left: `${(s.x / 200) * 100}%`, top: `${(s.y / 460) * 100}%` }}
              aria-pressed={s.id === spot.id}
              aria-label={tx(s.label)}
              onClick={() => pick(s.id)}
            >
              {s.id === spot.id && <span className="bm-label" aria-hidden="true">{tx(s.label)}</span>}
            </button>
          ))}
        </div>
        {kind === 'child' ? (
          <button type="button" className="bm-chip" aria-pressed={spot.id === 'newborn'} onClick={() => pick('newborn')}>
            {tx(NEWBORN.label)}
          </button>
        ) : (
          <p className="muted small">{tx({ en: 'Tap a point on the body', hi: 'शरीर पर किसी बिंदु को छुएँ' })}</p>
        )}
      </div>

      <div className={`bm-panel ${doc.specialty}`} key={spot.id} ref={panel} aria-live="polite" style={{ scrollMarginBottom: '6rem' }}>
        <span className="tag">{tx(SPECIALTY[doc.specialty])}</span>
        <h3>{tx(c.title)}</h3>
        <p className="lede">{tx(c.summary)}</p>
        {c.see && (
          <div>
            <p className="bm-sub">{tx(c.seeHeading ?? { en: 'See the doctor if', hi: 'डॉक्टर को दिखाएँ अगर' })}</p>
            <ul className="ticks">{tx(c.see).slice(0, 3).map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        )}
        {c.urgent && (
          <p className="note alert small">
            <strong>{tx({ en: 'Call 108 or go to a hospital if: ', hi: 'तुरंत 108 पर कॉल करें या अस्पताल जाएँ अगर: ' })}</strong>
            {tx(c.urgent)[0]}
          </p>
        )}
        <div className="bm-doc">
          <img src={doc.photo} alt="" width="48" height="48" loading="lazy" />
          <div>
            <b>{tx({ en: doc.name, hi: doc.nameHi })}</b>
            <span className="muted small">{tx(doc.title)}</span>
          </div>
        </div>
        <div className="btns">
          <a className="btn btn-wa" href={waHref(`${tx({ en: 'Hello', hi: 'नमस्ते' })}, ${tx(spot.ask)}. ${tx({ en: `I would like an appointment with ${doc.name}.`, hi: `मुझे ${doc.nameHi} से अपॉइंटमेंट चाहिए।` })}`)}>
            <WhatsAppIcon />
            {tx({ en: `Book with ${doc.name}`, hi: `${doc.nameHi} से मिलें` })}
          </a>
          <Link className="btn btn-line" to={href(guide)}>
            {tx({ en: 'Read the guide', hi: 'पूरी जानकारी' })}
          </Link>
        </div>
      </div>
    </div>
  )
}
