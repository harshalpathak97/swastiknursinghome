import I from '../Icons';
import drAmitShah from '../../assets/dr_amit_shah.jpg';
import drSwapnilShah from '../../assets/dr_swapnil_shah_new.jpg';
import '../../styles/design-system.css';

const PEDI_SERVICES = [
  'Newborn & infant care', 'Vaccinations', 'Common illnesses',
  'Growth & nutrition', 'Allergy & asthma', 'School-health guidance',
];
const ORTHO_SERVICES = [
  'Joint pain evaluation', 'Sports injury care', 'Fracture management',
  'Back & neck pain', 'Arthritis care', 'Post-operative care',
];

const SpecialtySection = ({ onBook }) => {
  const scrollToDoctors = () => {
    const el = document.getElementById('doctors');
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="ds-section" id="specialties" style={{ background: 'var(--bg)' }}>
      <div className="ds-container">
        <div className="ds-section-header">
          <div>
            <div className="ds-eyebrow">What we treat</div>
            <h2 className="ds-title-display">
              Two specialties.<br />One <em>family clinic</em>.
            </h2>
          </div>
          <p className="ds-lede">
            Most families come to us for one of two reasons — and many for both. Choose the pillar that fits your visit.
          </p>
        </div>

        <div className="ds-specialty-grid">
          <div className="ds-pillar pedi">
            <span className="p-glyph">✦</span>
            <div className="p-head">
              <span className="p-tag"><span className="p-swatch" /> Pediatrics</span>
              <span style={{ fontSize: 13, color: 'var(--pedi-deep)', fontWeight: 600 }}>Ages 0 – 18</span>
            </div>
            <h3>Care for your<br /><em>little ones</em>.</h3>
            <p className="p-for-who">
              Newborn checkups, vaccinations on the IAP schedule, fevers and infections, growth tracking, allergies and asthma — handled gently by Dr. Amit Shah.
            </p>
            <ul className="p-svc-list">
              {PEDI_SERVICES.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="p-doc-snippet" onClick={scrollToDoctors}>
              <div className="p-avatar"><img src={drAmitShah} alt="Dr. Amit Shah" /></div>
              <div className="p-meta">
                <span className="p-nm">Dr. Amit Shah</span>
                <span className="p-deg">Pediatrician · 15+ years</span>
              </div>
              <div className="p-arrow"><I.Arrow size={14} /></div>
            </div>
          </div>

          <div className="ds-pillar ortho">
            <span className="p-glyph">✦</span>
            <div className="p-head">
              <span className="p-tag"><span className="p-swatch" /> Orthopedics</span>
              <span style={{ fontSize: 13, color: 'var(--brand-deep)', fontWeight: 600 }}>Adults · 18+</span>
            </div>
            <h3>Care for your<br /><em>bones & joints</em>.</h3>
            <p className="p-for-who">
              Joint pain, sports injuries, fractures, back and neck care, arthritis — Dr. Swapnil Shah favours the conservative path, only escalating when truly needed.
            </p>
            <ul className="p-svc-list">
              {ORTHO_SERVICES.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="p-doc-snippet" onClick={scrollToDoctors}>
              <div className="p-avatar"><img src={drSwapnilShah} alt="Dr. Swapnil Shah" /></div>
              <div className="p-meta">
                <span className="p-nm">Dr. Swapnil Shah</span>
                <span className="p-deg">Orthopedic Surgeon · 27+ years</span>
              </div>
              <div className="p-arrow"><I.Arrow size={14} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
