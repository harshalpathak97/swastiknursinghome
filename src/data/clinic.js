// Single source of truth for every clinic fact. Pages, JSON-LD, sitemap and
// llms.txt must agree with this file. Text that is shown to patients is
// { en, hi }; pick with tx() from src/lib/i18n.js.

export const SITE = 'https://www.swastiknursinghome.org'

export const clinic = {
  name: 'Swastik Nursing Home',
  nameHi: 'स्वस्तिक नर्सिंग होम',
  founded: 2002,

  phone: '022 2500 8858',
  phoneE164: '+912225008858',
  whatsapp: '+91 98213 30087',
  whatsappE164: '919821330087',
  // No MX record on the domain yet (see .context/hostinger-checklist.md).
  // Keep this out of the UI until mail actually arrives.
  email: 'info@swastiknursinghome.org',

  address: {
    line1: 'C-101 / Room No. 101, 1st Floor, Bhaveshwar Plaza',
    line2: 'L. B. S. Marg, opposite Shreyas Theatre',
    locality: 'Ghatkopar West',
    city: 'Mumbai',
    pin: '400086',
    region: 'Maharashtra',
  },
  landmark: {
    en: 'Opposite Shreyas Theatre on L.B.S. Marg. First floor of Bhaveshwar Plaza.',
    hi: 'एल.बी.एस. मार्ग पर श्रेयस थिएटर के सामने। भावेश्वर प्लाज़ा की पहली मंज़िल।',
  },
  geo: { lat: 19.08727, lng: 72.90132 },
  // Tuned query string — geocodes correctly in Google and Apple Maps.
  mapsQuery:
    'Swastik Nursing Home C-101 Room No 101 1st Floor Bhaveshwar Plaza L B S Marg opposite Shreyas Theatre Ghatkopar West Mumbai 400086',
  gbp: 'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9',
  sameAs: [
    'https://maps.app.goo.gl/XhjxgoR9ndcL98GB9',
    'https://www.practo.com/mumbai/hospital/swastic-nursing-home-ghatkopar-west',
    'https://www.justdial.com/Mumbai/Swastik-Nursing-Home-Opposite-Shreyas-Theatre-Surya-Nagar-Chandan-Nagar-Ghatkopar-West/022PXX22-XX22-180713104007-I7H7_BZDET',
  ],

  // 24h minutes per weekday, 0 = Sunday. null = closed.
  hours: [
    null,
    [9 * 60, 20 * 60],
    [9 * 60, 20 * 60],
    [9 * 60, 20 * 60],
    [9 * 60, 20 * 60],
    [9 * 60, 20 * 60],
    [9 * 60, 14 * 60],
  ],

  // Shown in the hero. TODO(clinic): check against the live Google Business Profile
  // before launch (Justdial shows 3.8 from 62 reviews). NMC rules bar unprovable claims.
  stats: { rating: 4.9, reviews: '600+', visits: '40,000+' },

  payment: { en: 'Cash and UPI', hi: 'कैश और UPI' },
  // TODO(clinic): replace with the named list of insurers / TPAs for cashless admission.
  insurers: [],
}

export const doctors = [
  {
    id: 'dr-amit-shah',
    // AI-retouched (Gemini mark bottom-right). Replace with an unedited photo.
    photo: '/doctors/dr-amit-shah.jpg',
    name: 'Dr. Amit Shah',
    nameHi: 'डॉ. अमित शाह',
    specialty: 'peds',
    title: { en: 'Pediatrician (child specialist)', hi: 'बाल रोग विशेषज्ञ (बच्चों के डॉक्टर)' },
    degrees: 'MBBS, MD (Pediatrics)',
    education: [],
    // TODO(clinic): Maharashtra Medical Council registration number. NMC requires it on the site.
    regNo: '',
    since: 15,
    languages: ['English', 'Hindi', 'Marathi'],
    fee: 800,
    focus: {
      en: ['Newborn and infant check-ups', 'Vaccination (IAP schedule)', 'Fever, cough, cold and infections', 'Growth and nutrition', 'Allergy and asthma', 'School fitness check-ups'],
      hi: ['नवजात और शिशु जाँच', 'टीकाकरण (IAP शेड्यूल)', 'बुखार, खाँसी, सर्दी और इन्फ़ेक्शन', 'बढ़त और पोषण', 'एलर्जी और अस्थमा', 'स्कूल फ़िटनेस जाँच'],
    },
    bio: {
      en: 'Dr. Amit Shah sees children from newborns to teenagers: routine check-ups, vaccinations, growth and nutrition, allergies and asthma, and the fevers, coughs and stomach upsets that bring most families in. He looks at the child’s overall health, not just the complaint of the day.',
      hi: 'डॉ. अमित शाह नवजात से किशोर उम्र तक के बच्चों को देखते हैं: नियमित जाँच, टीकाकरण, बढ़त और पोषण, एलर्जी और अस्थमा, और बुखार, खाँसी, पेट की तकलीफ़ जैसी आम बीमारियाँ। वे सिर्फ़ उस दिन की तकलीफ़ नहीं, बच्चे की पूरी सेहत देखते हैं।',
    },
  },
  {
    id: 'dr-swapnil-shah',
    photo: '/doctors/dr-swapnil-shah.jpg',
    name: 'Dr. Swapnil Shah',
    nameHi: 'डॉ. स्वप्निल शाह',
    specialty: 'ortho',
    title: { en: 'Orthopedic surgeon (bone and joint)', hi: 'ऑर्थोपेडिक सर्जन (हड्डी और जोड़)' },
    degrees: 'MBBS, MS (Orthopedics)',
    // Source: Practo profile (doctor-supplied).
    education: ['MBBS, Shivaji University, Kolhapur (1991)', 'MS Orthopedics, Shivaji University, Kolhapur (1996)'],
    regNo: '070546',
    since: 27,
    languages: ['English', 'Hindi', 'Marathi'],
    fee: 1000,
    focus: {
      en: ['Knee, hip and shoulder pain', 'Arthritis', 'Fractures and plaster care', 'Back and neck pain', 'Sports injuries and sprains', 'Care after surgery'],
      hi: ['घुटने, कूल्हे और कंधे का दर्द', 'गठिया (आर्थराइटिस)', 'फ़्रैक्चर और प्लास्टर', 'कमर और गर्दन का दर्द', 'खेल में चोट और मोच', 'ऑपरेशन के बाद की देखभाल'],
    },
    bio: {
      en: 'Dr. Swapnil Shah has over 27 years of experience with bone and joint problems: knee and back pain, arthritis, fractures and sports injuries. He combines surgery with conservative treatment such as medicines, exercise and physiotherapy, and explains the condition so you can take part in the decision.',
      hi: 'डॉ. स्वप्निल शाह को हड्डी और जोड़ों की समस्याओं में 27 से अधिक वर्षों का अनुभव है: घुटने और कमर का दर्द, गठिया, फ़्रैक्चर और खेल की चोटें। वे ऑपरेशन के साथ-साथ दवा, व्यायाम और फ़िज़ियोथेरेपी जैसे इलाज भी अपनाते हैं, और बीमारी समझाते हैं ताकि फ़ैसले में आप भी शामिल रहें।',
    },
  },
]

export const faqs = [
  {
    q: { en: 'Do I need an appointment?', hi: 'क्या अपॉइंटमेंट ज़रूरी है?' },
    a: {
      en: 'Walk-ins are seen during clinic hours. Calling or sending a WhatsApp message first means a shorter wait, and lets us confirm the doctor is in.',
      hi: 'क्लिनिक के समय में बिना अपॉइंटमेंट भी आ सकते हैं। पहले कॉल या WhatsApp करने से इंतज़ार कम होता है और डॉक्टर की उपलब्धता पक्की हो जाती है।',
    },
  },
  {
    q: { en: 'What is the consultation fee?', hi: 'कंसल्टेशन फ़ीस कितनी है?' },
    a: {
      en: 'From ₹800 for the pediatrician and from ₹1,000 for the orthopedic surgeon. Vaccines, X-rays, plasters and procedures are charged separately; ask at the desk before anything is done.',
      hi: 'बाल रोग विशेषज्ञ के लिए ₹800 से और ऑर्थोपेडिक सर्जन के लिए ₹1,000 से। टीके, X-ray, प्लास्टर और प्रोसीजर का शुल्क अलग है; पहले डेस्क पर पूछ लें।',
    },
  },
  {
    q: { en: 'How do I pay?', hi: 'भुगतान कैसे करें?' },
    a: { en: 'Cash or UPI.', hi: 'कैश या UPI से।' },
  },
  {
    q: { en: 'Is insurance accepted?', hi: 'क्या इंश्योरेंस चलता है?' },
    a: {
      en: 'We accept most major health insurance plans and our staff help with the claim. Call with your insurer’s name to confirm before you come.',
      hi: 'हम ज़्यादातर बड़े हेल्थ इंश्योरेंस प्लान स्वीकार करते हैं और क्लेम में हमारा स्टाफ़ मदद करता है। आने से पहले अपनी इंश्योरेंस कंपनी का नाम बताकर पक्का कर लें।',
    },
  },
  {
    q: { en: 'Is this an emergency hospital?', hi: 'क्या यह इमरजेंसी अस्पताल है?' },
    a: {
      en: 'No. For a medical emergency call 108 for an ambulance, or go to the nearest hospital casualty department.',
      hi: 'नहीं। मेडिकल इमरजेंसी में एम्बुलेंस के लिए 108 पर कॉल करें, या नज़दीकी अस्पताल के कैज़ुअल्टी विभाग में जाएँ।',
    },
  },
  {
    q: { en: 'What should I bring?', hi: 'साथ में क्या लाएँ?' },
    a: {
      en: 'For a child: the vaccination card and any earlier prescriptions. For bone or joint problems: old X-rays, MRI reports and the medicines you are taking.',
      hi: 'बच्चे के लिए: टीकाकरण कार्ड और पुराने प्रिस्क्रिप्शन। हड्डी या जोड़ की समस्या के लिए: पुराने X-ray, MRI रिपोर्ट और चल रही दवाइयाँ।',
    },
  },
  {
    q: { en: 'Which languages do the doctors speak?', hi: 'डॉक्टर कौन-सी भाषाएँ बोलते हैं?' },
    a: { en: 'English, Hindi and Marathi.', hi: 'हिंदी, मराठी और अंग्रेज़ी।' },
  },
]
