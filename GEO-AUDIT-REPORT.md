# GEO Audit Report: Swastik Nursing Home

**Audit Date:** 2026-05-20
**URL:** https://www.swastiknursinghome.org/
**Business Type:** Local Medical Clinic (Pediatric + Orthopedic)
**Pages Analyzed:** 10 (/, /services, /doctors, /about, /contact, /faq, /privacy, /doctors/dr-amit-shah, /doctors/dr-swapnil-shah, + source code analysis)

---

## Executive Summary

**Overall GEO Score: 36/100 (Critical)**

Swastik Nursing Home has a solid real-world presence — 22+ years of operation, two credentialed specialists, and listings across 6+ healthcare directories — but its online GEO profile is nearly invisible to AI systems. The root cause is architectural: the site is a pure React SPA with no server-side rendering, which means every AI crawler (GPTBot, ClaudeBot, PerplexityBot, BingBot) receives an empty HTML shell with no extractable body content. Compounding this, the single Schema.org block served to crawlers contains a placeholder phone number (`+91 9876543210`), a wrong email domain (`.com` vs `.org`), and a wrong canonical URL — actively misleading AI entity resolution. The highest-priority fixes (SSR/SSG + schema data correction + llms.txt) are achievable without a full rebuild and would raise the GEO score to the 60–70 range within 4–6 weeks.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 34/100 | 25% | 8.5 |
| Brand Authority | 36/100 | 20% | 7.2 |
| Content E-E-A-T | 41/100 | 20% | 8.2 |
| Technical GEO | 38/100 | 15% | 5.7 |
| Schema & Structured Data | 31/100 | 10% | 3.1 |
| Platform Optimization | 33/100 | 10% | 3.3 |
| **Overall GEO Score** | | | **36/100** |

---

## Critical Issues (Fix Immediately)

### 1. React SPA — All page content invisible to AI crawlers
**Affects:** All pages | **Impact:** All 5 AI platforms blocked

The site is built with Vite React and has no server-side rendering or static site generation. Every route returns an identical HTML shell: `<div id="root"></div>`. No body content (services, doctor bios, FAQs, testimonials) is accessible to GPTBot, ClaudeBot, PerplexityBot, or BingBot without JavaScript execution — which AI crawlers do not perform.

**Fix:** Migrate public-facing pages to Next.js App Router with `generateStaticParams`, or add `vite-plugin-ssg` to pre-render all known routes at build time. Every key page (/, /services, /doctors, /about, /contact, /faq) must produce full HTML content in the HTTP response.

---

### 2. Schema.org telephone is a placeholder — wrong contact data served to AI
**File:** [index.html](index.html):18–70 | **Impact:** Entity resolution failure on Google AI, ChatGPT, Gemini, Bing

The MedicalClinic JSON-LD block contains:
- `"telephone": "+91 9876543210"` → should be `"+912225008858"`
- `"email": "info@swastiknursinghome.com"` → should be `"info@swastiknursinghome.org"`
- `"url": "https://swastiknursinghome.com"` → should be `"https://www.swastiknursinghome.org/"`
- `"openingHours": "Mo-Sa 09:00-20:00"` → Saturday closes at 14:00, not 20:00

**Fix:** Edit [index.html](index.html) directly — a 5-minute change with large impact. Also fix `canonicalBase` in [src/data/clinic.js](src/data/clinic.js):317 from `swastiknursinghome.com` to `www.swastiknursinghome.org`.

---

### 3. llms.txt referenced but missing
**File:** Referenced in robots.txt as `LLM-Policy: /llms.txt` | **Impact:** Perplexity AI, ChatGPT, Bing Copilot

The robots.txt declares an LLM-Policy pointing to `/llms.txt`, but this file does not exist in the `public/` directory. AI crawlers following this directive receive a 404 — signaling incomplete AI accessibility setup.

**Fix:** Create `public/llms.txt` (see Quick Win #1 below for content template).

---

### 4. Sitemap covers only /lander (non-existent test URL)
**Impact:** All crawlers cannot discover real pages

The sitemap.xml contains only `https://www.swastiknursinghome.org/lander` — a path that does not exist in App.jsx. All 10+ real routes are absent from the sitemap.

**Fix:** Create `public/sitemap.xml` including `/`, `/services`, `/doctors`, `/doctors/dr-amit-shah`, `/doctors/dr-swapnil-shah`, `/about`, `/contact`, `/faq`, `/privacy` with proper `<lastmod>` dates.

---

## High Priority Issues

### 5. No per-page meta tags (all routes share one title/description)
Every page — /services, /about, /faq, /doctors/dr-amit-shah — returns the homepage title and description. AI crawlers cannot differentiate page purposes.

**Fix:** Install `react-helmet-async`. Add a `<Helmet>` block to each page component with a unique, keyword-rich title (e.g., "/doctors/dr-amit-shah" → "Dr. Amit Shah — Pediatrician in Ghatkopar West, Mumbai | Swastik Nursing Home") and canonical `<link>` tag.

---

### 6. OG image uses a broken development path
`<meta property="og:image" content="/src/assets/header_img.png" />` — Vite hashes and moves this file in production. Every social share, AI link preview, and knowledge panel attempt returns a broken image.

**Fix:** Copy `header_img.png` to `public/` and update to `content="https://www.swastiknursinghome.org/header_img.png"`.

---

### 7. No sameAs links connecting schema to directory listings
The clinic appears on Practo, Lybrate, Justdial, 1mg, and ClinicSpots — but the MedicalClinic schema has zero `sameAs` properties. AI models cannot merge these signals into a single entity.

**Fix:** Add `"sameAs": [...]` array to the MedicalClinic schema linking to all 6 verified directory profiles (see corrected schema in Schema section).

---

### 8. Doctor experience not mentioned on site (27 years for Dr. Swapnil Shah)
Dr. Swapnil Shah has 27 years of experience documented on Justdial and 1mg — but this is absent from the site. Dr. Amit Shah's experience years are completely unspecified anywhere.

**Fix:** Update `longBio` in [src/data/clinic.js](src/data/clinic.js):81,105 to include years of experience and render it on the DoctorProfile page.

---

### 9. No Wikipedia entity page for the clinic or either doctor
Wikipedia is the highest-weight AI entity recognition signal. Its absence means AI models have no authoritative anchor for "Swastik Nursing Home" as a named entity.

**Fix:** Create a Wikipedia article for Dr. Swapnil Shah (27 years experience, notable enough for a practicing specialist) and/or the clinic. Alternatively, establish a Wikidata entry as a lower-friction first step.

---

### 10. Zero social media presence
All three social fields (Facebook, Instagram, LinkedIn) are empty strings in [src/data/clinic.js](src/data/clinic.js):32–36. AI models weight social presence as a recency and trust signal.

**Fix:** Create a LinkedIn company page at minimum (highest authority for Bing Copilot and ChatGPT entity resolution). Add an active Google Business Profile. Even one platform with regular posts provides meaningful freshness signals.

---

## Medium Priority Issues

- **Practo listing misspelled** as "Swastic" (missing 'k') — contact Practo support to correct the clinic name; weakens entity matching.
- **Fee inconsistency:** Site shows ₹800 pediatric; Lybrate shows ₹500 — update Lybrate to reflect current pricing.
- **No canonical tag** in index.html — all routes lack `<link rel="canonical">` causing duplicate content signals.
- **FAQ answers hidden by JS accordion** — collapse state means even Google's second-wave renderer may miss answer text; FAQPage JSON-LD schema bypasses this.
- **Favicon uses dev path** `/src/assets/Dermatologist.svg` — will 404 in production; move file to `public/`.
- **Saturday hours mismatch** — clinic.js shows Saturday closing at 2:00 PM but schema says `Mo-Sa 09:00-20:00`.
- **No medical college/university mentioned** for either doctor's credentials.
- **No NMC/MMC registration numbers** — publicly verifiable credentials that establish YMYL trust.
- **Privacy policy cites HIPAA** — incorrect for an Indian clinic; applicable regulation is the DPDP Act 2023.
- **No Google Business Profile link** anywhere on the site — unclear whether GBP is claimed and optimized.

---

## Low Priority Issues

- Missing `og:url`, `og:locale` (should be `en_IN`), `twitter:title`, `twitter:description`, `twitter:image` meta tags.
- No `<link rel="preconnect">` for Google Fonts — adds LCP latency.
- `@vercel/analytics` bundled but site is on Hostinger — minor mismatch.
- Mouse move event listener attached globally in App.jsx — potential INP contributor on lower-end mobile devices.
- All clinic photos are Unsplash stock images — no real clinic photography; weakens Experience signals.
- No `Content-Signal:` directive in robots.txt (emerging IETF draft standard).
- No `BreadcrumbList` schema on inner pages.
- No `WebSite` schema on homepage.

---

## Category Deep Dives

### AI Citability — 34/100

The site contains strong citation-ready content in its source data — 10 factual FAQs, two credentialed doctor bios, specific consultation fees, and 12 service descriptions — but **none of this content is accessible to AI crawlers** because it is rendered client-side only. The effective citability score collapses from a rendered ~59/100 to 34/100 due to the SPA rendering wall.

**Block-by-block rendered scores (would apply post-SSR fix):**

| Content Block | Citability Score | Notes |
|---|---|---|
| FAQ — Consultation fees (₹800/₹1000) | 75/100 | Citation-ready — specific, self-contained |
| FAQ — Appointment duration (15-20 min) | 64/100 | Citation-ready — concrete time values |
| FAQ — Walk-in policy | 59/100 | Adequate — lacks statistical depth |
| FAQ — Vaccination services | 52/100 | Needs named vaccines (BCG, MMR, etc.) |
| Doctor profile bios | 44/100 | Missing years of experience, outcomes |
| About page | 27/100 | "Serving for years" — unquotable |
| Homepage hero | 19/100 | Pure marketing slogan — no facts |

**Rewrite for highest impact — About page opening:**

*Before:* "Swastik Nursing Home has been serving the Ghatkopar West community for years, providing quality healthcare services with a focus on family-centered care."

*After:* "Swastik Nursing Home is a pediatric and orthopedic clinic located at Lal Bahadur Shastri Marg, Chandan Nagar, Ghatkopar West, Mumbai — 400083 (near Shreyas Cinema). The clinic offers two specialized departments: pediatric care under Dr. Amit Shah (MD Pediatrics) and orthopedic care under Dr. Swapnil Shah (MS Orthopedic Surgery, 27 years experience). Consultations are available Monday through Saturday, 9 AM to 8 PM. Pediatric fees start at ₹800; orthopedic fees start at ₹1,000. The clinic accepts most major health insurance plans. Walk-in patients are welcome."

---

### Brand Authority — 36/100

| Platform | Status | Detail |
|---|---|---|
| Wikipedia | Absent | Zero AI entity recognition weight from this source — highest-impact gap |
| Reddit | Absent | No discussions in r/mumbai or healthcare subs |
| YouTube | Absent | No channel; critical for Gemini |
| LinkedIn | Absent | No company page; critical for Bing Copilot + ChatGPT |
| Practo | Present (misspelled) | "Swastic Nursing Home" — name typo weakens entity matching |
| Lybrate | Present | Dr. Amit Shah: 4.3/5, 1 review (thin); fee discrepancy (₹500 vs ₹800) |
| Justdial | Present | 3.8/5, 62 reviews — best community validation present |
| 1mg | Minimal | Listed but doctor profiles appear filtered |
| ClinicSpots | Present | Dr. Swapnil Shah profile |
| MouthShut | Present | 3.58/5 — mixed sentiment |
| Google Business Profile | Unverified | Google Maps deep-link present; completeness unknown |
| Facebook / Instagram | Absent | Confirmed empty in source code |

The brand has meaningful depth on Indian healthcare platforms (6+ listings), but zero presence on the platforms AI models weight most heavily for global/English entity resolution (Wikipedia, YouTube, LinkedIn). The gap between 22 years of real-world authority and online AI recognition is large but closeable.

---

### Content E-E-A-T — 41/100

| Dimension | Score | Key Gap |
|---|---|---|
| Experience | 10/25 | No founding year, no patient volume, all images are Unsplash stock photos |
| Expertise | 14/25 | Credentials stated but no years of experience, no university affiliations, no NMC registration numbers, no author bylines |
| Authoritativeness | 10/25 | Zero external citations, no medical association memberships, empty social profiles, wrong schema URL |
| Trustworthiness | 14/25 | HTTPS present, full contact info, privacy policy exists — but schema phone is a placeholder, all 5-star reviews lack third-party source, privacy policy incorrectly cites HIPAA |

**Top content improvements:**
1. Add founding year and doctor years of experience throughout (particularly Dr. Swapnil Shah's 27 years)
2. Cite the IAP (Indian Academy of Pediatrics) vaccination schedule in the pediatric content
3. Add NMC/Maharashtra Medical Council registration numbers to doctor profiles
4. Replace stock photography with real clinic photos
5. Add a `Last reviewed: [date] by [Doctor Name]` byline to services and FAQ pages

---

### Technical GEO — 38/100

| Check | Status | Severity |
|---|---|---|
| Server-side rendering | ABSENT (pure CSR) | Critical |
| llms.txt | Referenced but missing | Critical |
| Sitemap completeness | Only /lander indexed | Critical |
| Per-page meta tags | All share one title/description | High |
| Canonical tag | Completely absent | High |
| og:image | Broken dev path | High |
| Canonical domain mismatch (.com vs .org) | In schema + clinic.js | High |
| Security headers | Unknown (not set in .htaccess) | Medium |
| Core Web Vitals risk | High (SPA, no code splitting, no preloads) | Medium |
| Mobile optimization | Tailwind responsive present | Good |
| URL structure | Clean, hyphenated, max 2 levels | Good |
| Favicon path | Broken dev path | Low |

The mobile foundation and URL structure are genuine strengths. The rest requires the SSR/SSG migration as the foundational fix, after which all other meta tag and canonical issues become solvable with `react-helmet-async`.

---

### Schema & Structured Data — 31/100

**Schema types found:** MedicalClinic (1 block, in index.html static HTML)
**Schema types missing:** FAQPage, Physician (standalone), BreadcrumbList, WebSite, aggregateRating, sameAs

| Property | Status | Issue |
|---|---|---|
| @type: MedicalClinic | Correct | Appropriate type |
| telephone | INVALID | Placeholder `+91 9876543210` |
| email | INVALID | Wrong domain `.com` |
| url | INVALID | Wrong domain `.com` |
| openingHours | Partially wrong | Saturday shows 20:00, should be 14:00 |
| sameAs | MISSING | Zero platform links |
| geo/GeoCoordinates | MISSING | No lat/long |
| logo | MISSING | No ImageObject |
| aggregateRating | MISSING | No rating data |
| FAQPage | MISSING | 10 FAQs present in source but no schema |
| Physician schemas | Partial | Nested only, no standalone per-doctor schemas |

**Corrected MedicalClinic schema** (replace existing block in [index.html](index.html)):

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Swastik Nursing Home",
  "alternateName": "Swastik Nursing Home Ghatkopar",
  "description": "Trusted pediatric and orthopedic care in Ghatkopar West, Mumbai. Experienced doctors providing specialized healthcare services for infants, children, and adults.",
  "url": "https://www.swastiknursinghome.org/",
  "telephone": "+912225008858",
  "email": "info@swastiknursinghome.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4W8G+HCP, Lal Bahadur Shastri Marg, Near Shreyas Cinema, Surya Nagar, Chandan Nagar",
    "addressLocality": "Ghatkopar West",
    "addressRegion": "Maharashtra",
    "postalCode": "400083",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0867",
    "longitude": "72.9076"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "medicalSpecialty": ["Pediatrics", "Orthopedic Surgery"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Pediatric Care",
      "description": "Comprehensive healthcare for infants, children, and adolescents including vaccinations, growth monitoring, and acute illness management."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Orthopedic Care",
      "description": "Specialized treatment for musculoskeletal conditions and injuries including fractures, joint disorders, and post-surgical rehabilitation."
    }
  ],
  "physician": [
    {
      "@type": "Physician",
      "name": "Dr. Amit Shah",
      "medicalSpecialty": "Pediatrics",
      "jobTitle": "Pediatrician",
      "description": "MD Pediatrics, MBBS — specialist in comprehensive pediatric care for infants, children, and adolescents.",
      "sameAs": [
        "https://www.lybrate.com/mumbai/clinic/swastik-nursing-home-ghatkopar-west-1"
      ]
    },
    {
      "@type": "Physician",
      "name": "Dr. Swapnil Shah",
      "medicalSpecialty": "Orthopedic Surgery",
      "jobTitle": "Orthopedic Surgeon",
      "description": "MS Orthopedic Surgery, MBBS — 27 years of experience treating musculoskeletal conditions, fractures, and joint disorders.",
      "sameAs": [
        "https://www.lybrate.com/mumbai/clinic/swastik-nursing-home-ghatkopar-west-7"
      ]
    }
  ],
  "priceRange": "₹₹",
  "hasMap": "https://maps.app.goo.gl/XhjxgoR9ndcL98GB9",
  "sameAs": [
    "https://www.practo.com/mumbai/hospital/swastic-nursing-home-ghatkopar-west",
    "https://www.justdial.com/Mumbai/Swastik-Nursing-Home-Opposite-Shreyas-Theatre-Surya-Nagar-Chandan-Nagar-Ghatkopar-West/022PXX22-XX22-180713104007-I7H7_BZDET",
    "https://www.1mg.com/doctors/swastik-nursing-home-in-mumbai/PLC-00rl4",
    "https://www.lybrate.com/mumbai/clinic/swastik-nursing-home-ghatkopar-west-1",
    "https://www.clinicspots.com/hospital/swastik-nursing-home",
    "https://maps.app.goo.gl/XhjxgoR9ndcL98GB9"
  ]
}
```

**Verify the geo coordinates** against the Google Maps pin before deploying — the values above are approximate for Ghatkopar West.

---

### Platform Optimization — 33/100

| Platform | Score | Key Blocker |
|---|---|---|
| Google AI Overviews | 38/100 | SPA rendering + FAQ answers hidden in JS accordion |
| Google Gemini | 35/100 | No YouTube, no confirmed GBP optimization |
| ChatGPT Web Search | 32/100 | No Wikipedia entity, OAI-SearchBot sees empty HTML |
| Perplexity AI | 31/100 | No llms.txt, no community validation (Reddit/Quora) |
| Bing Copilot | 30/100 | No LinkedIn, no Bing Webmaster Tools verification, no IndexNow |

**Cross-platform wins (fixes that help all 5 platforms simultaneously):**
1. SSR/SSG — single highest-impact change for all platforms
2. Fix schema data errors — affects entity resolution on all 4 non-Perplexity platforms
3. Create/optimize Google Business Profile — impacts Google AIO, Gemini, Perplexity
4. Create llms.txt — impacts Perplexity, ChatGPT, Bing Copilot

---

## Quick Wins (Implement This Week)

1. **Fix the 3 schema errors in [index.html](index.html)** — Change telephone to `+912225008858`, email to `info@swastiknursinghome.org`, url to `https://www.swastiknursinghome.org/`, and fix Saturday openingHours to 14:00. Effort: 5 minutes. Impact: Prevents AI systems from presenting wrong contact info for the clinic.

2. **Create `public/llms.txt`** with the following content:
   ```
   # Swastik Nursing Home

   > Pediatric and orthopedic clinic in Ghatkopar West, Mumbai, India.
   > Specialists: Dr. Amit Shah (MD Pediatrics) and Dr. Swapnil Shah (MS Orthopedic Surgery, 27 years experience).
   > Phone: 022 2500 8858 | Email: info@swastiknursinghome.org

   ## Clinic

   - [Home](https://www.swastiknursinghome.org/): Overview and appointment booking
   - [About](https://www.swastiknursinghome.org/about): Clinic history and mission
   - [Contact](https://www.swastiknursinghome.org/contact): Address, phone, hours, appointment form

   ## Services

   - [Pediatric Care](https://www.swastiknursinghome.org/services): Newborn care, vaccinations, growth monitoring, allergy management
   - [Orthopedic Care](https://www.swastiknursinghome.org/services): Joint pain, fractures, sports injuries, back pain, arthritis

   ## Doctors

   - [Dr. Amit Shah](https://www.swastiknursinghome.org/doctors): Pediatrician, MD Pediatrics, MBBS. Mon-Sat 9AM-8PM.
   - [Dr. Swapnil Shah](https://www.swastiknursinghome.org/doctors): Orthopedic Surgeon, MS Orthopedic Surgery, MBBS, 27 years experience. Mon-Sat 9AM-8PM.

   ## FAQ

   - [Frequently Asked Questions](https://www.swastiknursinghome.org/faq): Fees, hours, insurance, walk-ins, vaccinations

   ## Key Facts

   - Address: Lal Bahadur Shastri Marg, Near Shreyas Cinema, Ghatkopar West, Mumbai 400083
   - Hours: Mon-Fri 9:00 AM - 8:00 PM | Sat 9:00 AM - 2:00 PM | Sun Closed
   - Pediatric consultation: from ₹800 | Orthopedic consultation: from ₹1000
   - Insurance: Most major health plans accepted
   - Emergency: Non-emergency care only. For emergencies call 108.
   ```
   Effort: 30 minutes. Impact: Satisfies the existing `LLM-Policy` directive; gives Perplexity and ChatGPT a readable content manifest without JS execution.

3. **Fix the og:image broken path** — Copy `src/assets/header_img.png` to `public/header_img.png` and update [index.html](index.html):13 to `content="https://www.swastiknursinghome.org/header_img.png"`. Effort: 10 minutes. Impact: Fixes all social sharing previews and AI link cards.

4. **Add sameAs to the MedicalClinic schema** — Add the 6 directory URLs listed above to the corrected schema. Effort: 5 minutes. Impact: AI models can merge 6 separate platform signals into one verified entity.

5. **Rebuild sitemap.xml with all real routes** — Create `public/sitemap.xml` with all 9 canonical routes. Effort: 20 minutes. Impact: Enables proper crawler discovery of all pages once SSR is in place.

---

## 30-Day Action Plan

### Week 1: Fix What's Broken (Schema + Static Files)
- [ ] Fix 3 data errors in MedicalClinic schema in [index.html](index.html) (telephone, email, url)
- [ ] Fix Saturday openingHours (20:00 → 14:00) in schema
- [ ] Add sameAs array to MedicalClinic schema (6 directory URLs)
- [ ] Create `public/llms.txt` with clinic facts, doctor bios, and FAQ summary
- [ ] Fix og:image broken path (copy to public/, use absolute URL)
- [ ] Create `public/sitemap.xml` with all real routes
- [ ] Fix favicon path (move to `public/favicon.svg`)
- [ ] Fix `canonicalBase` in [src/data/clinic.js](src/data/clinic.js):317 from `.com` to `.org`

### Week 2: Content & Credentials
- [ ] Add Dr. Swapnil Shah's 27 years of experience to his bio in [src/data/clinic.js](src/data/clinic.js):105
- [ ] Add Dr. Amit Shah's years of experience (verify and add)
- [ ] Add NMC/Maharashtra Medical Council registration numbers to both doctor profiles
- [ ] Add founding year to About page copy ("Swastik Nursing Home has been serving... since [year]")
- [ ] Replace all Unsplash stock photos with real clinic photographs
- [ ] Rewrite About page opening paragraph using specific, citability-optimized copy
- [ ] Add medical college/university affiliations for both doctors

### Week 3: Technical Foundation (SSR/SSG)
- [ ] Install `react-helmet-async` and add per-page `<Helmet>` blocks to all 8 page components
- [ ] Add unique `<title>`, `<meta name="description">`, and `<link rel="canonical">` to each page
- [ ] Add FAQPage JSON-LD schema to FAQ.jsx via react-helmet-async
- [ ] Add Physician @graph schema to Doctors.jsx / DoctorProfile.jsx
- [ ] Add Bing Webmaster Tools verification `<meta>` tag to index.html
- [ ] Begin SSG implementation (vite-plugin-ssg or Next.js migration planning)
- [ ] Add security headers to `public/.htaccess` (X-Content-Type-Options, X-Frame-Options, HSTS)

### Week 4: Authority & Platform Presence
- [ ] Create and fully optimize Google Business Profile (correct phone, .org URL, real photos, both doctors, hours)
- [ ] Create LinkedIn company page for Swastik Nursing Home
- [ ] Contact Practo support to fix "Swastic" → "Swastik" name spelling
- [ ] Update Lybrate fee listings from ₹500 to ₹800 for pediatric consultations
- [ ] Fix privacy policy: replace HIPAA reference with DPDP Act 2023
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Add `<link rel="preconnect">` for Google Fonts in index.html

---

## Appendix: Pages Analyzed

| URL | Title (from source) | Key GEO Issues |
|---|---|---|
| / (Home) | Swastik Nursing Home - Pediatric & Orthopedic Care... | SPA — no body content served; hero H1 is marketing slogan not query |
| /services | (same as home) | No per-page meta; service descriptions in JS only; no Service schema |
| /doctors | (same as home) | No per-page meta; doctor bios in JS only; no Physician schema |
| /doctors/dr-amit-shah | (same as home) | No per-page meta; no years of experience; no credentials schema |
| /doctors/dr-swapnil-shah | (same as home) | Same; 27 years experience known but not on site |
| /about | (same as home) | "For years" vague; stock photos only; no founding year |
| /contact | (same as home) | Contact form uses mailto — no CRM/tracking; map is external link only |
| /faq | (same as home) | 10 FAQs hidden in JS accordion; no FAQPage schema |
| /privacy | (same as home) | HIPAA cited incorrectly for Indian business |
| index.html | Base HTML shell | OG image broken; canonical missing; schema has 3 data errors |

---

*Report generated 2026-05-20 by GEO Audit v1.0 | swastiknursinghome.org*
