import { useEffect, useState } from 'react'
import { Form, useSearchParams } from 'react-router'
import { doctors } from '../data/clinic.js'
import { dueDates, schedule, scheduleReviewed, todayIST } from '../lib/vaccines.js'
import { fmtDate, langOf, useT } from '../lib/i18n.js'
import { crumbsLd, seo } from '../lib/seo.js'
import { waHref } from '../lib/links.js'
import { Crumbs } from '../components/Site.jsx'
import { WhatsAppIcon } from '../components/Icons.jsx'

const CRUMBS = [[{ en: 'Home', hi: 'होम' }, '/'], [{ en: 'Vaccination schedule', hi: 'टीकाकरण शेड्यूल' }, '/vaccination-schedule']]
const PEDIATRICIAN = doctors.find((d) => d.specialty === 'peds')

export const meta = ({ location }) =>
  seo(location, {
    title: { en: 'Child vaccination schedule (IAP 2023) with due-date calculator | Ghatkopar West', hi: 'बच्चों का टीकाकरण शेड्यूल (IAP 2023) और तारीख़ कैलकुलेटर | घाटकोपर पश्चिम' },
    description: { en: 'Enter your child’s date of birth to see which vaccines are due and when, from birth to 18 years, as per the Indian Academy of Pediatrics 2023 schedule.', hi: 'बच्चे की जन्मतिथि डालें और देखें कि जन्म से 18 साल तक कौन-सा टीका कब लगना है, इंडियन एकेडमी ऑफ़ पीडियाट्रिक्स 2023 शेड्यूल के अनुसार।' },
    jsonLd: [crumbsLd(langOf(location.pathname), CRUMBS)],
  })

const range = (r, lang) => (r.until === r.date ? fmtDate(r.date, lang) : `${fmtDate(r.date, lang)} – ${fmtDate(r.until, lang)}`)

export default function Vaccines() {
  const { lang, tx } = useT()
  const [params] = useSearchParams()
  // Today is only known in the browser; until then render the plain schedule (matches the prerendered HTML).
  const [today, setToday] = useState(null)
  useEffect(() => setToday(todayIST()), [])

  const dob = today ? params.get('dob') || '' : ''
  const valid = /^\d{4}-\d{2}-\d{2}$/.test(dob) && dob <= today && dob > `${Number(today.slice(0, 4)) - 19}${today.slice(4)}`
  const rows = valid ? dueDates(dob, today) : schedule
  const next = valid ? rows.find((r) => r.status !== 'past') : null

  return (
    <>
      <header className="page-head peds">
        <div className="wrap">
          <Crumbs items={CRUMBS} />
          <h1>{tx({ en: 'Vaccination schedule for children', hi: 'बच्चों का टीकाकरण शेड्यूल' })}</h1>
          <p className="lede">
            {tx({
              en: 'The Indian Academy of Pediatrics (IAP) 2023 schedule, from birth to 18 years. Enter your child’s date of birth to see the date each vaccine is due. Nothing you enter leaves your phone.',
              hi: 'इंडियन एकेडमी ऑफ़ पीडियाट्रिक्स (IAP) 2023 शेड्यूल, जन्म से 18 साल तक। बच्चे की जन्मतिथि डालें और हर टीके की तारीख़ देखें। आपकी डाली जानकारी आपके फ़ोन से बाहर नहीं जाती।',
            })}
          </p>
        </div>
      </header>
      <div className="wrap">

      <section className="section stack peds" style={{ '--gap': '2rem' }}>
        {!scheduleReviewed && (
          <p className="note draft">{tx({ en: `Draft: awaiting review by ${PEDIATRICIAN.name}.`, hi: `ड्राफ़्ट: ${PEDIATRICIAN.nameHi} की समीक्षा बाकी है।` })}</p>
        )}
        <Form method="get" className="dob" replace preventScrollReset>
          <label>
            {tx({ en: 'Child’s date of birth', hi: 'बच्चे की जन्मतिथि' })}
            <input type="date" name="dob" defaultValue={dob} max={today ?? undefined} required />
          </label>
          <button className="btn btn-ink" type="submit">{tx({ en: 'Show due dates', hi: 'तारीख़ें देखें' })}</button>
          {valid && (
            <button className="btn btn-line" type="button" onClick={() => window.print()}>
              {tx({ en: 'Print', hi: 'प्रिंट करें' })}
            </button>
          )}
        </Form>
        {dob && !valid && (
          <p className="note alert">{tx({ en: 'Please enter a date of birth in the past 18 years.', hi: 'कृपया पिछले 18 वर्षों के भीतर की जन्मतिथि डालें।' })}</p>
        )}

        {next && (
          <div className="next-due" aria-live="polite">
            <p className="muted">{next.status === 'now' ? tx({ en: 'Due now', hi: 'अभी लगना है' }) : tx({ en: 'Next due', hi: 'अगला टीका' })}</p>
            <p className="big">{next.vaccines.join(', ')}</p>
            <p>
              {tx(next.label)} · <span className="num">{range(next, lang)}</span>
            </p>
            <div className="btns" style={{ marginTop: '1rem' }}>
              <a
                className="btn btn-wa"
                href={waHref(`Hello, I would like to book a vaccination with ${PEDIATRICIAN.name}. Due at ${next.label.en}: ${next.vaccines.join(', ')}.`)}
              >
                <WhatsAppIcon />
                {tx({ en: 'Book on WhatsApp', hi: 'WhatsApp पर बुक करें' })}
              </a>
            </div>
          </div>
        )}

        <div className="scroll-x">
          <table className="vtable">
            <caption className="sr">{tx({ en: 'IAP 2023 immunization schedule', hi: 'IAP 2023 टीकाकरण शेड्यूल' })}</caption>
            <thead>
              <tr>
                <th scope="col">{tx({ en: 'Age', hi: 'उम्र' })}</th>
                <th scope="col">{tx({ en: 'Vaccines', hi: 'टीके' })}</th>
                {valid && <th scope="col">{tx({ en: 'Due', hi: 'तारीख़' })}</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label.en + r.vaccines[0]} className={r === next ? 'next' : r.status}>
                  <th scope="row">{tx(r.label)}</th>
                  <td>{r.vaccines.join(', ')}</td>
                  {valid && (
                    <td className="when">
                      {range(r, lang)}
                      {r === next && <span className="pill">{tx({ en: 'next', hi: 'अगला' })}</span>}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cols">
          <div className="stack">
            <h2 style={{ fontSize: '1.375rem' }}>{tx({ en: 'Free and optional vaccines', hi: 'मुफ़्त और वैकल्पिक टीके' })}</h2>
            <p>
              {tx({
                en: 'Many of these vaccines are given free at government centres under the Universal Immunization Programme. Others are optional and paid. Before any vaccine, ask the doctor whether it is essential or optional, and what it costs.',
                hi: 'इनमें से कई टीके यूनिवर्सल इम्यूनाइज़ेशन प्रोग्राम के तहत सरकारी केंद्रों पर मुफ़्त लगते हैं। बाकी वैकल्पिक हैं और उनका शुल्क लगता है। कोई भी टीका लगवाने से पहले डॉक्टर से पूछें कि वह ज़रूरी है या वैकल्पिक, और उसकी क़ीमत क्या है।',
              })}
            </p>
          </div>
          <div className="stack">
            <h2 style={{ fontSize: '1.375rem' }}>{tx({ en: 'Missed a dose?', hi: 'कोई टीका छूट गया?' })}</h2>
            <p>
              {tx({
                en: 'Most vaccines can still be given late; there is usually no need to restart the series. Bring the vaccination card and the doctor will plan a catch-up schedule.',
                hi: 'ज़्यादातर टीके देर से भी लग सकते हैं; आमतौर पर पूरी सीरीज़ दोबारा शुरू करने की ज़रूरत नहीं होती। टीकाकरण कार्ड लाएँ, डॉक्टर छूटे टीकों का शेड्यूल बना देंगे।',
              })}
            </p>
          </div>
        </div>

        <p className="note small">
          {tx({
            en: 'Source: IAP Advisory Committee on Vaccines and Immunization Practices, recommended schedule 2023 (Indian Pediatrics, February 2024). Your doctor may change the timing for your child. Influenza, typhoid and some others have brand-specific dosing.',
            hi: 'स्रोत: IAP एडवाइज़री कमेटी ऑन वैक्सीन्स एंड इम्यूनाइज़ेशन प्रैक्टिसेज़, अनुशंसित शेड्यूल 2023 (इंडियन पीडियाट्रिक्स, फ़रवरी 2024)। डॉक्टर आपके बच्चे के लिए समय बदल सकते हैं।',
          })}{' '}
          <a href="https://www.indianpediatrics.net/feb2024/113.pdf" target="_blank" rel="noopener">indianpediatrics.net</a>
        </p>
      </section>
      </div>
    </>
  )
}
