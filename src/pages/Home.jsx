import Banner from "../components/Banner";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import Topdoctors from "../components/Topdoctors";
import SEO from "../components/SEO";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.swastiknursinghome.org/#clinic",
  "name": "Swastik Nursing Home",
  "description": "Trusted pediatric and orthopedic care in Ghatkopar West, Mumbai. Serving families for over 20 years.",
  "url": "https://www.swastiknursinghome.org/",
  "telephone": "+912225008858",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lal Bahadur Shastri Marg, Near Shreyas Cinema",
    "addressLocality": "Ghatkopar West",
    "addressRegion": "Maharashtra",
    "postalCode": "400083",
    "addressCountry": "IN"
  }
};

const Home = () => {
  return (
    <div>
      <SEO
        canonical="/"
        description="Trusted pediatric and orthopedic care in Ghatkopar West, Mumbai. Dr. Amit Shah (Pediatrician) and Dr. Swapnil Shah (Orthopedic Surgeon, 27+ years). Walk-ins welcome. Call: 022 2500 8858."
        schema={clinicSchema}
      />
      <Header />
      <Speciality />
      <Topdoctors />
      <Banner />
    </div>
  );
};

export default Home;
