import { useState } from 'react';
import I from '../Icons';
import '../../styles/design-system.css';

const PEDI_SERVICES = [
  { t: 'Newborn & infant care', d: 'Comprehensive checkups, feeding guidance and developmental monitoring for the first months of life.' },
  { t: 'Vaccinations', d: 'Complete IAP-schedule immunisation, plus optional and travel vaccines, in a calm, child-friendly room.' },
  { t: 'Common illnesses', d: 'Same-day evaluation of fever, cough, infections and respiratory complaints.' },
  { t: 'Growth & nutrition', d: 'Personalised growth tracking and nutrition plans tailored to your child\'s stage.' },
  { t: 'Allergy & asthma', d: 'Diagnosis and gentle, ongoing management of childhood allergies and asthma.' },
  { t: 'School-health guidance', d: 'Readiness assessments, posture checks and advice on staying well during school years.' },
];
const ORTHO_SERVICES = [
  { t: 'Joint pain evaluation', d: 'Thorough assessment for arthritis, degenerative changes and inflammatory joint conditions.' },
  { t: 'Sports injury care', d: 'Diagnosis and rehabilitation of sprains, strains, ligament tears and overuse injuries.' },
  { t: 'Fracture management', d: 'Casting, follow-up and structured physiotherapy guidance through recovery.' },
  { t: 'Back & neck pain', d: 'Conservative care — posture, ergonomics, exercise therapy — before considering surgery.' },
  { t: 'Arthritis care', d: 'Medication, joint-preservation techniques and lifestyle plans that genuinely help.' },
  { t: 'Post-operative care', d: 'Wound care, rehab and recovery monitoring after orthopedic procedures.' },
];

const ServicesSection = () => {
  const [tab, setTab] = useState('pedi');
  const list = tab === 'pedi' ? PEDI_SERVICES : ORTHO_SERVICES;

  return (
    <section className="ds-section" id="services" style={{ background: 'var(--bg)' }}>
      <div className="ds-container">
        <div className="ds-section-header">
          <div>
            <div className="ds-eyebrow">Services</div>
            <h2 className="ds-title-display">
              Everything we offer,<br /><em>plainly listed</em>.
            </h2>
          </div>
          <div className="ds-svc-tabs" role="tablist">
            <button className={tab === 'pedi' ? 'active' : ''} onClick={() => setTab('pedi')}>
              <span className="st-swatch" style={{ background: 'var(--pedi)' }} /> Pediatrics
            </button>
            <button className={tab === 'ortho' ? 'active' : ''} onClick={() => setTab('ortho')}>
              <span className="st-swatch" style={{ background: 'var(--brand)' }} /> Orthopedics
            </button>
          </div>
        </div>

        <div className="ds-services-block">
          <div className="ds-svc-grid">
            {list.map((s, i) => (
              <div className="ds-svc-card" key={s.t}>
                <div className="sc-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
                <span className="sc-read">Ask in clinic <I.Arrow size={12} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
