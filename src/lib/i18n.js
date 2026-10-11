import { useLocation } from 'react-router'
import { localize } from '../data/paths.js'

// Two languages, no library: text is { en, hi } and we pick by URL prefix.
export const langOf = (pathname) => (pathname === '/hi' || pathname.startsWith('/hi/') ? 'hi' : 'en')
export const unlocalize = (pathname) => pathname.replace(/^\/hi(?=\/|$)/, '') || '/'
export const tx = (v, lang) => (v && typeof v === 'object' && 'en' in v ? v[lang] ?? v.en : v)

export function useT() {
  const lang = langOf(useLocation().pathname)
  return { lang, tx: (v) => tx(v, lang), href: (p) => localize(p, lang) }
}

export const DAY_NAMES = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  hi: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
}

export const fmtDate = (iso, lang) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

export const inr = (n) => `₹${n.toLocaleString('en-IN')}`
