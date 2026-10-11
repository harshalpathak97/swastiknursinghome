import { useEffect, useState } from 'react'
import { clinic } from '../data/clinic.js'
import { fmtTime, hoursGroups, nowIST, status } from '../lib/hours.js'
import { DAY_NAMES, useT } from '../lib/i18n.js'

const SHORT = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  hi: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
}
const CLOSED = { en: 'Closed', hi: 'बंद' }

// "Mon–Fri 9 AM – 8 PM · Sat 9 AM – 2 PM · Sun closed"
export function useHoursSummary() {
  const { lang } = useT()
  return hoursGroups(clinic.hours)
    .map(({ from, to, h }) => {
      const days = from === to ? SHORT[lang][from] : `${SHORT[lang][from]}–${SHORT[lang][to]}`
      return `${days} ${h ? `${fmtTime(h[0])} – ${fmtTime(h[1])}` : CLOSED[lang].toLowerCase()}`
    })
    .join(' · ')
}

// Time-dependent UI renders only after mount, so prerendered HTML never lies.
function useNow() {
  const [now, setNow] = useState(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function OpenStatus() {
  const { lang, tx } = useT()
  const now = useNow()
  if (!now) return <p className="status" />
  const s = status(clinic.hours, now)
  if (s.open) {
    return <p className="status is-open">{tx({ en: `Open now · closes at ${fmtTime(s.closes)}`, hi: `अभी खुला है · ${fmtTime(s.closes)} पर बंद होगा` })}</p>
  }
  const when = s.inDays === 0 ? tx({ en: 'today', hi: 'आज' }) : s.inDays === 1 ? tx({ en: 'tomorrow', hi: 'कल' }) : DAY_NAMES[lang][s.day]
  return <p className="status is-closed">{tx({ en: `Closed now · opens ${when} at ${fmtTime(s.opens)}`, hi: `अभी बंद है · ${when} ${fmtTime(s.opens)} पर खुलेगा` })}</p>
}

export function HoursTable() {
  const { lang, tx } = useT()
  const now = useNow()
  const today = now ? nowIST(now).day : -1
  return (
    <table className="hours">
      <caption className="sr">{tx({ en: 'Clinic hours', hi: 'क्लिनिक का समय' })}</caption>
      <tbody>
        {[1, 2, 3, 4, 5, 6, 0].map((d) => {
          const h = clinic.hours[d]
          return (
            <tr key={d} className={d === today ? 'today' : undefined}>
              <th scope="row" data-today={tx({ en: 'today', hi: 'आज' })}>{DAY_NAMES[lang][d]}</th>
              <td>{h ? `${fmtTime(h[0])} – ${fmtTime(h[1])}` : tx(CLOSED)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
