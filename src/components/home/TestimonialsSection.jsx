import I from '../Icons';
import '../../styles/design-system.css';

const TESTIMONIALS = [
  { id: 1, name: 'Priya Sharma', loc: 'Ghatkopar West', rating: 5, svc: 'pedi', quote: 'Dr. Amit is so patient with my three-year-old. He explains everything clearly and never rushes us.' },
  { id: 2, name: 'Rajesh Kumar', loc: 'Chandan Nagar', rating: 5, svc: 'ortho', quote: 'Dr. Swapnil treated my knee without surgery. The conservative approach worked — I\'m walking pain-free again.' },
  { id: 3, name: 'Sunita Patel', loc: 'Surya Nagar', rating: 5, svc: 'gen', quote: 'Easy to find, spotlessly clean, and the staff actually remember us. It feels like a family clinic should.' },
  { id: 4, name: 'Meera Joshi', loc: 'Ghatkopar West', rating: 5, svc: 'pedi', quote: 'Vaccinations were stress-free for both me and my baby. The doctor walked us through the full schedule.' },
  { id: 5, name: 'Anil Desai', loc: 'Chandan Nagar', rating: 5, svc: 'ortho', quote: 'Recovered fully from a sports injury under their rehab plan. Modern facility, fair fees, real care.' },
  { id: 6, name: 'Vikram Singh', loc: 'Ghatkopar', rating: 5, svc: 'ortho', quote: 'They take the time to actually understand the problem before prescribing anything. Rare these days.' },
];

const SVC_LABEL = { pedi: 'Pediatrics', ortho: 'Orthopedics', gen: 'General' };

const TestimonialsSection = () => (
  <section className="ds-section" id="reviews" style={{ background: 'var(--bg)' }}>
    <div className="ds-container">
      <div className="ds-section-header">
        <div>
          <div className="ds-eyebrow">Patient stories</div>
          <h2 className="ds-title-display">
            <em>4.9 ★</em> across 600+ Google reviews.
          </h2>
        </div>
        <p className="ds-lede">Real words from real Ghatkopar families. We don't filter or curate — what you read is what you'll experience.</p>
      </div>

      <div className="ds-testi-grid">
        {TESTIMONIALS.map((t) => (
          <div className="ds-testi" key={t.id}>
            <div className="dt-stars">
              {Array.from({ length: t.rating }).map((_, i) => <I.Star key={i} size={14} />)}
            </div>
            <blockquote>"{t.quote}"</blockquote>
            <div className="dt-person">
              <div className="dt-av">{t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</div>
              <div>
                <div className="dt-nm">{t.name}</div>
                <div className="dt-lo">{t.loc}</div>
              </div>
              <span className={`dt-svc-tag ${t.svc}`}>{SVC_LABEL[t.svc]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
