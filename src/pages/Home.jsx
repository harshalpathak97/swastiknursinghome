import { useState, useCallback } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import WalkinBanner from '../components/home/WalkinBanner';
import SpecialtySection from '../components/home/SpecialtySection';
import DoctorsSection from '../components/home/DoctorsSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BookingSection from '../components/home/BookingSection';
import '../styles/design-system.css';

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://www.swastiknursinghome.org/#clinic',
  name: 'Swastik Nursing Home',
  description: 'Trusted pediatric and orthopedic care in Ghatkopar West, Mumbai. Serving families for over 20 years.',
  url: 'https://www.swastiknursinghome.org/',
  telephone: '+912225008858',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lal Bahadur Shastri Marg, Near Shreyas Cinema',
    addressLocality: 'Ghatkopar West',
    addressRegion: 'Maharashtra',
    postalCode: '400083',
    addressCountry: 'IN',
  },
};

const Home = () => {
  const [bookingDocId, setBookingDocId] = useState(null);

  const scrollToBook = useCallback(() => {
    const el = document.getElementById('book');
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  }, []);

  const handleBook = useCallback(() => {
    scrollToBook();
  }, [scrollToBook]);

  const handleBookFor = useCallback((docId) => {
    setBookingDocId(docId);
    scrollToBook();
  }, [scrollToBook]);

  return (
    <div className="ds-page">
      <SEO
        canonical="/"
        description="Trusted pediatric and orthopedic care in Ghatkopar West, Mumbai. Dr. Amit Shah (Pediatrician) and Dr. Swapnil Shah (Orthopedic Surgeon, 27+ years). Walk-ins welcome. Call: 022 2500 8858."
        schema={clinicSchema}
      />
      <HeroSection onBook={handleBook} />
      <WalkinBanner />
      <SpecialtySection onBook={handleBook} />
      <DoctorsSection onBook={handleBookFor} />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BookingSection initialDocId={bookingDocId} />
    </div>
  );
};

export default Home;
