import { doctors } from './clinic.js'
import { conditions } from './conditions.js'

// Every public URL. Used by the prerenderer and the sitemap.
export const localize = (path, lang) => (lang === 'hi' ? (path === '/' ? '/hi' : `/hi${path}`) : path)

export const basePaths = [
  '/',
  '/doctors',
  ...doctors.map((d) => `/doctor/${d.id}`),
  '/vaccination-schedule',
  '/services',
  ...conditions.map((c) => `/conditions/${c.slug}`),
  '/about',
  '/contact',
  '/faq',
  '/privacy',
]

export const paths = [...basePaths, ...basePaths.map((p) => localize(p, 'hi'))]
