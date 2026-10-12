import { useEffect } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useLocation } from 'react-router'
import { Analytics } from '@vercel/analytics/react'
import { track } from '@vercel/analytics'
import '@fontsource/mukta/400.css'
import '@fontsource/mukta/600.css'
import '@fontsource/mukta/700.css'
import '@fontsource/tiro-devanagari-hindi/400.css'
import './styles/site.css'
import { ActionBar, Footer, Header } from './components/Site.jsx'
import { langOf } from './lib/i18n.js'
import NotFound from './pages/NotFound.jsx'

export function Layout({ children }) {
  const lang = langOf(useLocation().pathname)
  return (
    <html lang={lang === 'hi' ? 'hi-IN' : 'en-IN'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#faf7f0" />
        {/* ?v= busts cached tab icons; bump when the logo changes. Safari needs the PNG/ICO. */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="48x48" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

// The three actions that matter: call, WhatsApp, directions. One listener for every link on the site.
function useConversionTracking() {
  useEffect(() => {
    const onClick = (e) => {
      const href = e.target.closest?.('a')?.getAttribute('href') || ''
      const kind = href.startsWith('tel:') ? 'call' : href.includes('wa.me/') ? 'whatsapp' : href.includes('google.com/maps') ? 'directions' : null
      if (kind) track(kind, { page: location.pathname })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

function Shell({ children }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <ActionBar />
    </>
  )
}

export default function App() {
  useConversionTracking()
  return (
    <Shell>
      <Outlet />
      <Analytics />
    </Shell>
  )
}

export function ErrorBoundary({ error }) {
  if (isRouteErrorResponse(error) && error.status === 404) return <Shell><NotFound /></Shell>
  console.error(error)
  return (
    <Shell>
      <div className="wrap section">
        <h1>Something went wrong</h1>
        <p>Please call 022 2500 8858.</p>
      </div>
    </Shell>
  )
}
