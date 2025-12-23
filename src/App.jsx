import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Myappointment from './pages/myappointment'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'
import Services from './pages/Services'
import DoctorProfile from './pages/DoctorProfile'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'


const App = () => {
  return (
  <div className="pt-20">
    <Navbar />
    <div className="mx-4 sm:mx-[10%] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointment" element={<Myappointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
    <FloatingWhatsApp />
  </div>
  );
};

export default App;
