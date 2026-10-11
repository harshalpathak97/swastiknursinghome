import { Link } from 'react-router'
import { doctors } from '../data/clinic.js'
import { daysUntil, dueDates, progress, schedule } from '../lib/vaccines.js'
import { fmtDate, useT } from '../lib/i18n.js'
import { waHref } from '../lib/links.js'
import { WhatsAppIcon } from './Icons.jsx'

const PEDIATRICIAN = doctors.find((d) => d.specialty === 'peds')
const R = 52
const C = +(2 * Math.PI * R).toFixed(2)
const range = (r, lang) => (r.until === r.date ? fmtDate(r.date, lang) : `${fmtDate(r.date, lang)} – ${fmtDate(r.until, lang)}`)

// Progress ring for one child's IAP schedule. dob: valid ISO date or '' (idle). today: ISO, client-only.
export default function VaccineRing({ dob, today, showScheduleLink = true }) {
  const { lang, tx, href } = useT()
  const rows = dob ? dueDates(dob, today) : schedule
  const { done, total, next } = dob ? progress(rows) : { done: 0, total: schedule.length }
  const upcoming = dob ? rows.filter((r) => r.status !== 'past' && r !== next).slice(0, 3) : []
  const days = next && daysUntil(today, next.date)

  const when = !next
    ? tx({ en: 'Schedule complete', hi: 'शेड्यूल पूरा' })
    : next.status === 'now'
      ? tx({ en: 'Due now', hi: 'अभी लगना है' })
      : days <= 90
        ? tx({ en: `In ${days} day${days === 1 ? '' : 's'}`, hi: `${days} दिन में` })
        : tx({ en: `On ${fmtDate(next.date, lang)}`, hi: `${fmtDate(next.date, lang)} को` })

  return (
    <div className="ring-card" aria-live="polite">
      <div className="ring-wrap">
        <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
          <circle className="ring-track" cx="60" cy="60" r={R} />
          {done > 0 && (
            <circle
              key={dob}
              className="ring-fill"
              cx="60"
              cy="60"
              r={R}
              transform="rotate(-90 60 60)"
              style={{ strokeDasharray: C, strokeDashoffset: C * (1 - done / total), '--c': C }}
            />
          )}
        </svg>
        <div className="ring-center">
          <b className="num">{dob ? done : total}</b>
          <span>
            {dob
              ? tx({ en: `of ${total} milestones done`, hi: `${total} में से पूरे` })
              : tx({ en: 'milestones, birth to 18 years', hi: 'पड़ाव, जन्म से 18 साल' })}
          </span>
        </div>
      </div>

      <div className="ring-info">
        {!dob ? (
          <p className="muted">{tx({ en: 'Enter a date of birth to see where your child is on the schedule and what comes next.', hi: 'जन्मतिथि डालें और देखें कि बच्चा शेड्यूल में कहाँ है और आगे क्या है।' })}</p>
        ) : (
          <>
            <p className="ring-when">{when}</p>
            {next && <p className="ring-next">{next.vaccines.join(', ')}</p>}
            {next && <p className="muted small">{tx(next.label)} · <span className="num">{range(next, lang)}</span></p>}
            {upcoming.length > 0 && (
              <ul className="ring-list">
                {upcoming.map((r) => (
                  <li key={r.label.en + r.vaccines[0]}>
                    <span>{tx(r.label)}</span>
                    <span className="num">{fmtDate(r.date, lang)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="btns">
              {next && (
                <a className="btn btn-wa" href={waHref(`Hello, I would like to book a vaccination with ${PEDIATRICIAN.name}. Due at ${next.label.en}: ${next.vaccines.join(', ')}.`)}>
                  <WhatsAppIcon />
                  {tx({ en: 'Book on WhatsApp', hi: 'WhatsApp पर बुक करें' })}
                </a>
              )}
              {showScheduleLink && (
                <Link className="btn btn-line" to={href(`/vaccination-schedule?dob=${dob}`)}>
                  {tx({ en: 'Full schedule', hi: 'पूरा शेड्यूल' })}
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
