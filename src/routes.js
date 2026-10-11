import { index, route } from '@react-router/dev/routes'

const pages = [
  ['', 'pages/Home.jsx'],
  ['doctors', 'pages/Doctors.jsx'],
  ['doctor/:doctorId', 'pages/Doctor.jsx'],
  ['vaccination-schedule', 'pages/Vaccines.jsx'],
  ['services', 'pages/Services.jsx'],
  ['conditions/:slug', 'pages/Condition.jsx'],
  ['about', 'pages/About.jsx'],
  ['contact', 'pages/Contact.jsx'],
  ['faq', 'pages/Faq.jsx'],
  ['privacy', 'pages/Privacy.jsx'],
]

// Same pages twice: English at /, Hindi at /hi.
const make = (lang) =>
  pages.map(([p, file]) => {
    const path = [lang, p].filter(Boolean).join('/')
    const id = `${lang || 'en'}:${p || 'home'}`
    return path ? route(path, file, { id }) : index(file, { id })
  })

export default [...make(''), ...make('hi'), route('*', 'pages/NotFound.jsx')]
