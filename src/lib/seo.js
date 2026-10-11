import { SITE, clinic, doctors } from '../data/clinic.js'
import { localize } from '../data/paths.js'
import { langOf, tx, unlocalize } from './i18n.js'

const DAY_SCHEMA = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const hhmm = (min) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`
const abs = (path) => SITE + path

export const clinicLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': abs('/#clinic'),
  name: clinic.name,
  alternateName: clinic.nameHi,
  url: abs('/'),
  telephone: clinic.phoneE164,
  image: abs('/og-image.png'),
  foundingDate: String(clinic.founded),
  medicalSpecialty: ['Pediatric', 'Orthopedic'],
  priceRange: '₹₹',
  paymentAccepted: 'Cash, UPI',
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
    addressLocality: `${clinic.address.locality}, ${clinic.address.city}`,
    addressRegion: clinic.address.region,
    postalCode: clinic.address.pin,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: clinic.geo.lat, longitude: clinic.geo.lng },
  hasMap: clinic.gbp,
  openingHoursSpecification: clinic.hours.flatMap((h, i) =>
    h ? [{ '@type': 'OpeningHoursSpecification', dayOfWeek: DAY_SCHEMA[i], opens: hhmm(h[0]), closes: hhmm(h[1]) }] : [],
  ),
  availableLanguage: ['English', 'Hindi', 'Marathi'],
  sameAs: clinic.sameAs,
  employee: doctors.map((d) => ({ '@id': abs(`/doctor/${d.id}#doctor`) })),
})

export const doctorLd = (d) => ({
  '@context': 'https://schema.org',
  '@type': 'IndividualPhysician',
  '@id': abs(`/doctor/${d.id}#doctor`),
  name: d.name,
  url: abs(`/doctor/${d.id}`),
  medicalSpecialty: d.specialty === 'peds' ? 'Pediatric' : 'Orthopedic',
  description: d.bio.en,
  knowsLanguage: d.languages,
  practicesAt: { '@id': abs('/#clinic') },
  telephone: clinic.phoneE164,
  ...(d.regNo && { identifier: { '@type': 'PropertyValue', propertyID: 'Maharashtra Medical Council registration', value: d.regNo } }),
})

export const faqLd = (items, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: tx(f.q, lang),
    acceptedAnswer: { '@type': 'Answer', text: tx(f.a, lang) },
  })),
})

export const crumbsLd = (lang, items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: tx(name, lang),
    item: abs(localize(path, lang)),
  })),
})

// Full <head> for a page: title, description, canonical, hreflang, Open Graph, JSON-LD.
export function seo(location, { title, description, jsonLd = [] }) {
  const lang = langOf(location.pathname)
  const base = unlocalize(location.pathname)
  const url = (l) => abs(localize(base, l))
  const t = tx(title, lang)
  const d = tx(description, lang)
  return [
    { title: t },
    { name: 'description', content: d },
    { tagName: 'link', rel: 'canonical', href: url(lang) },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en-IN', href: url('en') },
    { tagName: 'link', rel: 'alternate', hrefLang: 'hi-IN', href: url('hi') },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: url('en') },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: clinic.name },
    { property: 'og:title', content: t },
    { property: 'og:description', content: d },
    { property: 'og:url', content: url(lang) },
    { property: 'og:image', content: abs('/og-image.png') },
    { property: 'og:locale', content: lang === 'hi' ? 'hi_IN' : 'en_IN' },
    { name: 'twitter:card', content: 'summary_large_image' },
    ...jsonLd.map((o) => ({ 'script:ld+json': o })),
  ]
}
