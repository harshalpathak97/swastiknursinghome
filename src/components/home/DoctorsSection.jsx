import I from '../Icons';
import drAmitShah from '../../assets/dr_amit_shah.jpg';
import drSwapnilShah from '../../assets/dr_swapnil_shah_new.jpg';
import '../../styles/design-system.css';

const DOCTORS = [
  {
    id: 'dr-amit-shah',
    name: 'Dr. Amit Shah',
    degree: 'MD Pediatrics, MBBS',
    specialty: 'Pediatrician',
    tag: 'pedi',
    photo: drAmitShah,
    experience: '15+ yrs',
    bio: 'A warm, patient pediatrician who has been guiding Ghatkopar families through newborn care, vaccinations and child development for over fifteen years.',
    focus: ['Newborn care', 'Vaccinations', 'Growth monitoring', 'Child nutrition', 'Allergies & asthma'],
    languages: ['English', 'Hindi', 'Marathi'],
    consultFrom: '₹800',
  },
  {
    id: 'dr-swapnil-shah',
    name: 'Dr. Swapnil Shah',
    degree: 'MS Orthopedic Surgery, MBBS',
    specialty: 'Orthopedic Surgeon',
    tag: 'ortho',
    photo: drSwapnilShah,
    experience: '27+ yrs',
    bio: 'A senior orthopedic surgeon who favours conservative, evidence-led treatment — helping patients avoid surgery wherever possible.',
    focus: ['Joint care', 'Sports injuries', 'Fracture management', 'Back & neck pain', 'Arthritis treatment'],
    languages: ['English', 'Hindi', 'Marathi'],
    consultFrom: '₹1000',
  },
];

const DoctorsSection = ({ onBook }) => (
  <section className="ds-section" id="doctors" style={{ paddingTop: 48, background: 'var(--bg)' }}>
    <div className="ds-container">
      <div className="ds-section-header">
        <div>
          <div className="ds-eyebrow">Meet your doctors</div>
          <h2 className="ds-title-display">
            Two senior consultants.<br />
            <em>Same warm bedside.</em>
          </h2>
        </div>
        <p className="ds-lede">
          You won't be bounced between a panel of names — at Swastik, you'll see Dr. Amit Shah or Dr. Swapnil Shah, every visit.
        </p>
      </div>

      <div className="ds-doctors-grid">
        {DOCTORS.map((d) => (
          <article className={`ds-doc-card ${d.tag}`} id={d.id} key={d.id}>
            <div className="dc-photo">
              <img src={d.photo} alt={d.name} />
              <span className="dc-badge"><span className="dc-sw" /> {d.specialty}</span>
            </div>
            <div className="dc-body">
              <div>
                <h3 className="dc-name">{d.name}</h3>
                <div className="dc-degree">{d.degree}</div>
              </div>
              <div className="dc-meta">
                <span className="dc-chip">{d.experience}</span>
                <span className="dc-chip">From {d.consultFrom}</span>
                <span className="dc-chip">{d.languages.join(' · ')}</span>
              </div>
              <p className="dc-bio">{d.bio}</p>
              <div className="dc-focus">
                {d.focus.map((f) => <span key={f} className="dc-focus-chip">{f}</span>)}
              </div>
              <div className="dc-foot">
                <span className="dc-avail"><span className="dc-pulse" /> Available today · Mon–Sat</span>
                <button
                  className={`ds-btn ${d.tag === 'pedi' ? 'ds-btn-pedi' : 'ds-btn-brand'} ds-btn-sm`}
                  onClick={() => onBook(d.id)}
                >
                  Book consultation <I.Arrow size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
