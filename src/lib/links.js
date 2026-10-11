import { clinic } from '../data/clinic.js'

export const telHref = `tel:${clinic.phoneE164}`
export const waHref = (text = '') => `https://wa.me/${clinic.whatsappE164}${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapsQuery)}`
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`
