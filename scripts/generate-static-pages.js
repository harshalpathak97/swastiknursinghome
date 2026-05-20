#!/usr/bin/env node
/**
 * Generates static HTML shells for routes react-snap couldn't pre-render.
 * Reads dist/index.html, injects per-page meta + schema, writes to dist/<route>/index.html.
 * Run after `npm run build` if react-snap misses some pages.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8')

const BASE_URL = 'https://www.swastiknursinghome.org'
const OG_IMAGE = `${BASE_URL}/og-image.png`

const pages = [
  {
    path: 'faq',
    title: 'FAQ - Frequently Asked Questions | Swastik Nursing Home',
    description: 'Answers about appointments, consultation fees (₹800–₹1,000), vaccinations, insurance, parking, and more at Swastik Nursing Home, Ghatkopar West, Mumbai.',
    canonical: `${BASE_URL}/faq`,
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you accept walk-in appointments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we accept walk-in patients for urgent consultations. However, we recommend booking appointments in advance for better service, especially for specialized consultations." } },
        { "@type": "Question", "name": "What are your consultation fees?", "acceptedAnswer": { "@type": "Answer", "text": "Our consultation fees vary by doctor and service type. Pediatric consultations start from ₹800, and orthopedic consultations start from ₹1000. Please contact us for specific pricing." } },
        { "@type": "Question", "name": "Do you provide emergency services?", "acceptedAnswer": { "@type": "Answer", "text": "We provide non-emergency medical care only. For medical emergencies, please visit the nearest emergency facility or call emergency services immediately." } },
        { "@type": "Question", "name": "Do you accept health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "We accept most major health insurance plans. Please bring your insurance card and ID proof. Our staff will help you with the insurance claim process." } },
        { "@type": "Question", "name": "What vaccinations do you provide?", "acceptedAnswer": { "@type": "Answer", "text": "We provide all routine childhood vaccinations as per the national immunization schedule, including optional vaccines. We also provide travel vaccinations for adults and children." } },
        { "@type": "Question", "name": "How can I book an appointment?", "acceptedAnswer": { "@type": "Answer", "text": "You can book appointments by calling us at 022 2500 8858, WhatsApp messaging +912225008858, or through our contact form. Walk-ins are also welcome for urgent consultations." } },
        { "@type": "Question", "name": "Do you have parking facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we have dedicated parking space available for patients visiting our clinic. Additional street parking is also available nearby." } },
        { "@type": "Question", "name": "What should I bring for my first visit?", "acceptedAnswer": { "@type": "Answer", "text": "Please bring any previous medical records, current medications, insurance information, and identification proof. For pediatric visits, bring the child's vaccination records." } },
        { "@type": "Question", "name": "Do you provide home visits?", "acceptedAnswer": { "@type": "Answer", "text": "We do not provide routine home visits. However, for special cases or patients with mobility issues, please discuss with your doctor for possible arrangements." } },
        { "@type": "Question", "name": "How long do appointments typically last?", "acceptedAnswer": { "@type": "Answer", "text": "Initial consultations typically last 15-20 minutes, while follow-up visits are usually 10-15 minutes. Complex cases may require longer appointments." } }
      ]
    }
  },
  {
    path: 'contact',
    title: 'Contact Us - Book an Appointment | Swastik Nursing Home',
    description: 'Contact Swastik Nursing Home in Ghatkopar West, Mumbai. Phone: 022 2500 8858. Open Mon–Fri 9 AM–8 PM, Sat 9 AM–2 PM. Lal Bahadur Shastri Marg, Near Shreyas Cinema.',
    canonical: `${BASE_URL}/contact`,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Swastik Nursing Home",
      "url": `${BASE_URL}/contact`,
      "description": "Contact page for Swastik Nursing Home, Ghatkopar West, Mumbai",
      "mainEntity": {
        "@type": "MedicalClinic",
        "@id": `${BASE_URL}/#clinic`,
        "name": "Swastik Nursing Home",
        "telephone": "+912225008858",
        "email": "info@swastiknursinghome.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lal Bahadur Shastri Marg, Near Shreyas Cinema",
          "addressLocality": "Ghatkopar West",
          "addressRegion": "Maharashtra",
          "postalCode": "400083",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Swastik Nursing Home',
    description: 'Privacy policy for Swastik Nursing Home. How we collect, use, and protect your personal information in compliance with applicable Indian laws.',
    canonical: `${BASE_URL}/privacy`,
    schema: null
  },
  {
    path: 'doctor/dr-amit-shah',
    title: 'Dr. Amit Shah - MD Pediatrics, Pediatrician | Swastik Nursing Home',
    description: 'Dr. Amit Shah is a pediatrician at Swastik Nursing Home, Ghatkopar West, Mumbai. MD Pediatrics. Specializes in newborn care, vaccinations, growth monitoring, and childhood illnesses. Book: 022 2500 8858.',
    canonical: `${BASE_URL}/doctor/dr-amit-shah`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${BASE_URL}/doctor/dr-amit-shah`,
      "name": "Dr. Amit Shah",
      "medicalSpecialty": "Pediatrics",
      "jobTitle": "Pediatrician",
      "description": "Experienced pediatrician specializing in child healthcare, vaccination programs, growth monitoring, and treatment of childhood illnesses at Swastik Nursing Home, Ghatkopar West, Mumbai.",
      "worksFor": {
        "@type": "MedicalClinic",
        "@id": `${BASE_URL}/#clinic`,
        "name": "Swastik Nursing Home",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lal Bahadur Shastri Marg, Near Shreyas Cinema",
          "addressLocality": "Ghatkopar West",
          "addressRegion": "Maharashtra",
          "postalCode": "400083",
          "addressCountry": "IN"
        }
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "MD Pediatrics, MBBS"
      },
      "knowsAbout": ["Pediatrics", "Newborn Care", "Childhood Vaccinations", "Growth Monitoring", "Allergy Management"],
      "knowsLanguage": ["English", "Hindi", "Marathi"]
    }
  },
  {
    path: 'doctor/dr-swapnil-shah',
    title: 'Dr. Swapnil Shah - MS Orthopedics, 27+ Years Experience | Swastik Nursing Home',
    description: 'Dr. Swapnil Shah is an orthopedic surgeon with 27+ years of experience at Swastik Nursing Home, Ghatkopar West, Mumbai. Specializes in joint pain, sports injuries, fracture care, and arthritis. Book: 022 2500 8858.',
    canonical: `${BASE_URL}/doctor/dr-swapnil-shah`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${BASE_URL}/doctor/dr-swapnil-shah`,
      "name": "Dr. Swapnil Shah",
      "medicalSpecialty": "Orthopedic Surgery",
      "jobTitle": "Orthopedic Surgeon",
      "description": "Orthopedic surgeon with 27+ years of experience specializing in joint care, sports injuries, fracture management, back pain, and arthritis treatment at Swastik Nursing Home, Ghatkopar West, Mumbai.",
      "worksFor": {
        "@type": "MedicalClinic",
        "@id": `${BASE_URL}/#clinic`,
        "name": "Swastik Nursing Home",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lal Bahadur Shastri Marg, Near Shreyas Cinema",
          "addressLocality": "Ghatkopar West",
          "addressRegion": "Maharashtra",
          "postalCode": "400083",
          "addressCountry": "IN"
        }
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "MS Orthopedic Surgery, MBBS"
      },
      "knowsAbout": ["Orthopedic Surgery", "Joint Care", "Sports Injuries", "Fracture Management", "Back Pain", "Arthritis"],
      "knowsLanguage": ["English", "Hindi", "Marathi"]
    }
  }
]

function injectMetaIntoHtml(html, page) {
  const headInsert = `
    <title>${page.title}</title>
    <link rel="canonical" href="${page.canonical}" />
    <meta name="description" content="${page.description}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:site_name" content="Swastik Nursing Home" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    ${page.schema ? `<script type="application/ld+json">${JSON.stringify(page.schema)}</script>` : ''}
  `
  // Replace the base title and inject per-page meta right after <head>
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /(<link rel="canonical"[^>]*>)/,
      `<link rel="canonical" href="${page.canonical}" />`
    )
    .replace(
      /(<meta name="description"[^>]*>)/,
      `<meta name="description" content="${page.description}" />`
    )
    .replace(
      /(<meta property="og:title"[^>]*>)/,
      `<meta property="og:title" content="${page.title}" />`
    )
    .replace(
      /(<meta property="og:description"[^>]*>)/,
      `<meta property="og:description" content="${page.description}" />`
    )
    .replace(
      /(<meta property="og:url"[^>]*>)/,
      `<meta property="og:url" content="${page.canonical}" />`
    )
    .replace(
      /(<meta name="twitter:title"[^>]*>)/,
      `<meta name="twitter:title" content="${page.title}" />`
    )
    .replace(
      /(<meta name="twitter:description"[^>]*>)/,
      `<meta name="twitter:description" content="${page.description}" />`
    )
    + (page.schema ? `\n<!-- Schema injected by generate-static-pages for ${page.path} -->` : '')
}

function injectSchemaIntoHtml(html, page) {
  if (!page.schema) return injectMetaIntoHtml(html, page)

  const schemaScript = `<script type="application/ld+json">${JSON.stringify(page.schema, null, 2)}</script>\n  `
  const modified = injectMetaIntoHtml(html, page)
  return modified.replace('</head>', `  ${schemaScript}</head>`)
}

for (const page of pages) {
  const outDir = join(distDir, page.path)
  mkdirSync(outDir, { recursive: true })

  const outputHtml = injectSchemaIntoHtml(baseHtml, page)
  writeFileSync(join(outDir, 'index.html'), outputHtml, 'utf-8')
  console.log(`✅ Generated: /${page.path}/index.html`)
}

console.log('\nDone! Static HTML shells generated for 5 pages.')
