import I from '../Icons';
import '../../styles/design-system.css';

const STATS = [
  { n: '20+', l: 'Years serving Ghatkopar families' },
  { n: '40k+', l: 'Patient visits to date' },
  { n: '4.9', l: 'Average patient rating' },
  { n: '2', l: 'Senior consultants on staff' },
];

const WHY = [
  { t: 'Two senior doctors, decades of trust', d: 'Dr. Amit Shah (15+ yrs paediatrics) and Dr. Swapnil Shah (27+ yrs orthopaedics) personally see every patient.' },
  { t: 'Conservative-first treatment', d: 'We try the simplest, most evidence-led path first — only escalating when it\'s genuinely needed.' },
  { t: 'Family-friendly clinic', d: 'Calm rooms, separate paediatric area, friendly staff and no rushed appointments.' },
  { t: 'Easy to reach', d: 'Right on LBS Marg near Shreyas Cinema, with parking and an auto-stand outside.' },
  { t: 'Walk-ins welcome', d: 'We protect time every day for walk-ins — you don\'t need an appointment to be seen.' },
];

const WhyChooseSection = () => (
  <section
    className="ds-section"
    id="why"
    style={{ background: 'var(--surface-warm)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
  >
    <div className="ds-container">
      <div className="ds-trust-block">
        <div>
          <div className="ds-eyebrow">Why families choose us</div>
          <h2 className="ds-title-display" style={{ marginBottom: 18 }}>
            A clinic that <em>knows your name</em>.
          </h2>
          <p className="ds-lede" style={{ marginBottom: 28 }}>
            We've never been a busy chain hospital. We're two doctors in Ghatkopar West who happen to be quite good at what we do, and who think the best healthcare feels personal.
          </p>
          <div className="ds-trust-stats">
            {STATS.map((s) => (
              <div className="ts-cell" key={s.l}>
                <div className="ts-big">{s.n}</div>
                <div className="ts-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-why-list">
          {WHY.map((w, i) => (
            <div className="ds-why-row" key={w.t}>
              <div className="wr-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h4 className="wr-title">{w.t}</h4>
                <p className="wr-desc">{w.d}</p>
              </div>
              <div style={{ color: 'var(--ink-3)' }}><I.Arrow size={16} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
