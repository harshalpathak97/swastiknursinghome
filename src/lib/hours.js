const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Day of week (0 = Sun) and minutes since midnight in India, wherever the visitor is.
export function nowIST(now = new Date()) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(now)
      .map((x) => [x.type, x.value]),
  )
  return { day: DAYS.indexOf(p.weekday), min: Number(p.hour) * 60 + Number(p.minute) }
}

// hours: array of 7 [open, close] minute pairs (or null), index 0 = Sunday.
export function status(hours, now = new Date()) {
  const { day, min } = nowIST(now)
  const today = hours[day]
  if (today && min >= today[0] && min < today[1]) return { open: true, closes: today[1] }
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7
    const h = hours[d]
    if (h && (i > 0 || min < h[0])) return { open: false, opens: h[0], day: d, inDays: i }
  }
  return { open: false }
}

export function fmtTime(min) {
  const h = Math.floor(min / 60)
  const m = min % 60
  const h12 = h % 12 || 12
  return `${h12}${m ? `:${String(m).padStart(2, '0')}` : ''} ${h < 12 ? 'AM' : 'PM'}`
}

// Monday-first runs of days that share the same hours, e.g. Mon–Fri / Sat / Sun.
export function hoursGroups(hours) {
  const groups = []
  for (const d of [1, 2, 3, 4, 5, 6, 0]) {
    const h = hours[d]
    const last = groups.at(-1)
    if (last && String(last.h) === String(h)) last.to = d
    else groups.push({ from: d, to: d, h })
  }
  return groups
}
