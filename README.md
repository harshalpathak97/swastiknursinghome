# Swastik Nursing Home — swastiknursinghome.org

Static, prerendered clinic site (React Router 7, `ssr: false`). Deployed on Vercel from `main`; domain DNS at Hostinger.

```
npm run dev     # local dev
npm test        # hours + vaccine due-date checks
npm run build   # prerenders every route (EN + /hi) to build/client, writes sitemap.xml + 404.html
```

- **All clinic facts** (phone, hours, fees, doctors, registration numbers): `src/data/clinic.js`. Pages, JSON-LD and the sitemap read from it; `public/llms.txt` is hand-maintained to match.
- **Health guides**: `src/data/conditions.js`. Set `reviewed: 'YYYY-MM-DD'` once the doctor approves a page.
- **Vaccine schedule** (IAP 2023): `src/lib/vaccines.js`. Set `scheduleReviewed` after the pediatrician checks it.
- **Routes**: `src/routes.js` (every page exists at `/x` and `/hi/x`); URL list in `src/data/paths.js`.
- **Styles**: one file, `src/styles/site.css`.
- Analytics: Vercel Web Analytics + `call` / `whatsapp` / `directions` click events (`src/root.jsx`).
