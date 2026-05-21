import I from './Icons';
import '../styles/design-system.css';

const FloatingWhatsApp = () => (
  <a
    className="ds-wa-float"
    href="https://wa.me/919821330087"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <I.WhatsApp size={26} />
  </a>
);

export default FloatingWhatsApp;
