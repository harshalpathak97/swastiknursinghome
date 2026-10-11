// IAP ACVIP recommended immunization schedule 2023 (Indian Pediatrics, Feb 2024).
// https://www.indianpediatrics.net/feb2024/113.pdf
// TODO(clinic): Dr. Amit Shah to confirm this matches what the clinic follows.
// Set to 'YYYY-MM-DD' when the pediatrician has checked this table; until then the page shows a draft notice.
export const scheduleReviewed = null

// at / to: { w | m | y } offset from date of birth; `to` marks an age range.
export const schedule = [
  { at: { w: 0 }, label: { en: 'Birth', hi: 'जन्म' }, vaccines: ['BCG', 'OPV 0', 'Hepatitis B 1'] },
  { at: { w: 6 }, label: { en: '6 weeks', hi: '6 हफ़्ते' }, vaccines: ['DTwP/DTaP 1', 'IPV 1', 'Hib 1', 'Hepatitis B 2', 'Rotavirus 1', 'PCV 1'] },
  { at: { w: 10 }, label: { en: '10 weeks', hi: '10 हफ़्ते' }, vaccines: ['DTwP/DTaP 2', 'IPV 2', 'Hib 2', 'Hepatitis B 3', 'Rotavirus 2', 'PCV 2'] },
  { at: { w: 14 }, label: { en: '14 weeks', hi: '14 हफ़्ते' }, vaccines: ['DTwP/DTaP 3', 'IPV 3', 'Hib 3', 'Hepatitis B 4', 'Rotavirus 3', 'PCV 3'] },
  { at: { m: 6 }, label: { en: '6 months', hi: '6 महीने' }, vaccines: ['Influenza 1'] },
  { at: { m: 6 }, to: { m: 9 }, label: { en: '6 to 9 months', hi: '6 से 9 महीने' }, vaccines: ['Typhoid conjugate'] },
  { at: { m: 7 }, label: { en: '7 months', hi: '7 महीने' }, vaccines: ['Influenza 2'] },
  { at: { m: 9 }, label: { en: '9 months', hi: '9 महीने' }, vaccines: ['MMR 1'] },
  { at: { m: 12 }, label: { en: '12 months', hi: '12 महीने' }, vaccines: ['Hepatitis A 1'] },
  { at: { m: 12 }, to: { m: 15 }, label: { en: '12 to 15 months', hi: '12 से 15 महीने' }, vaccines: ['PCV booster'] },
  { at: { m: 15 }, label: { en: '15 months', hi: '15 महीने' }, vaccines: ['MMR 2', 'Varicella 1'] },
  { at: { m: 16 }, to: { m: 18 }, label: { en: '16 to 18 months', hi: '16 से 18 महीने' }, vaccines: ['DTwP/DTaP booster 1', 'IPV booster', 'Hib booster'] },
  { at: { m: 18 }, to: { m: 19 }, label: { en: '18 to 19 months', hi: '18 से 19 महीने' }, vaccines: ['Hepatitis A 2', 'Varicella 2'] },
  { at: { y: 2 }, to: { y: 5 }, label: { en: '2 to 5 years', hi: '2 से 5 साल' }, vaccines: ['Influenza (once every year)'] },
  { at: { y: 4 }, to: { y: 6 }, label: { en: '4 to 6 years', hi: '4 से 6 साल' }, vaccines: ['DTwP/DTaP booster 2', 'MMR 3'] },
  { at: { y: 9 }, to: { y: 14 }, label: { en: '9 to 14 years', hi: '9 से 14 साल' }, vaccines: ['HPV (2 doses, 6 months apart; girls and boys)'] },
  { at: { y: 10 }, to: { y: 12 }, label: { en: '10 to 12 years', hi: '10 से 12 साल' }, vaccines: ['Tdap/Td'] },
  { at: { y: 16 }, to: { y: 18 }, label: { en: '16 to 18 years', hi: '16 से 18 साल' }, vaccines: ['Td'] },
]

const DAY = 86400000
const parse = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  return Date.UTC(y, m - 1, d)
}
const iso = (t) => new Date(t).toISOString().slice(0, 10)

// Calendar-month add that clamps to month end (31 Jan + 1 month = 28/29 Feb).
function addMonths(t, n) {
  const d = new Date(t)
  const y = d.getUTCFullYear()
  const m = d.getUTCMonth() + n
  const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate()
  return Date.UTC(y, m, Math.min(d.getUTCDate(), last))
}

export function addAge(dobISO, { w = 0, m = 0, y = 0 }) {
  return iso(addMonths(parse(dobISO), m + 12 * y) + w * 7 * DAY)
}

export const todayIST = (now = new Date()) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(now)

// Each schedule row with its due date (and range end) for this child.
// status: 'past' once the window has closed, 'now' inside a range, else 'upcoming'.
export function dueDates(dobISO, today) {
  return schedule.map((row) => {
    const date = addAge(dobISO, row.at)
    const until = row.to ? addAge(dobISO, row.to) : date
    const status = until < today ? 'past' : date <= today ? 'now' : 'upcoming'
    return { ...row, date, until, status }
  })
}
