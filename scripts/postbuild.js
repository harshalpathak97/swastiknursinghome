// After `react-router build`: write sitemap.xml from the same route list the
// prerenderer used, and expose the prerendered 404 page where Vercel expects it.
import { copyFileSync, writeFileSync } from 'node:fs'
import { SITE } from '../src/data/clinic.js'
import { basePaths, localize } from '../src/data/paths.js'

const out = 'build/client'
const today = new Date().toISOString().slice(0, 10)
const link = (lang, p) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}${p}"/>`

const urls = basePaths.flatMap((p) =>
  ['en', 'hi'].map((lang) =>
    [
      '  <url>',
      `    <loc>${SITE}${localize(p, lang)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      link('en-IN', p),
      link('hi-IN', localize(p, 'hi')),
      link('x-default', p),
      '  </url>',
    ].join('\n'),
  ),
)

writeFileSync(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`,
)
copyFileSync(`${out}/404/index.html`, `${out}/404.html`)
console.log(`sitemap.xml: ${urls.length} URLs; 404.html written`)
