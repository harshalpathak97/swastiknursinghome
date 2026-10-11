import { Link } from 'react-router'
import { useT } from '../lib/i18n.js'
import { BookButtons } from '../components/Doctor.jsx'

export const meta = () => [{ title: 'Page not found | Swastik Nursing Home' }, { name: 'robots', content: 'noindex' }]

export default function NotFound() {
  const { tx, href } = useT()
  return (
    <div className="wrap section stack">
      <h1>{tx({ en: 'This page doesn’t exist', hi: 'यह पेज मौजूद नहीं है' })}</h1>
      <p className="lede">
        {tx({ en: 'The link may be old. Go to the ', hi: 'लिंक पुराना हो सकता है। ' })}
        <Link to={href('/')}>{tx({ en: 'home page', hi: 'होम पेज पर जाएँ' })}</Link>
        {tx({ en: ', or contact the clinic directly.', hi: ', या सीधे क्लिनिक से संपर्क करें।' })}
      </p>
      <BookButtons />
    </div>
  )
}
