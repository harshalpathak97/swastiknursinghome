import I from '../Icons';
import '../../styles/design-system.css';

const WalkinBanner = () => (
  <div className="ds-walkin-banner" id="walkin">
    <div className="ds-container">
      <div className="wb-left">
        <div className="wb-icon"><I.Alert size={18} /></div>
        <div className="wb-text">
          <strong>Walk-ins welcome every day.</strong> We protect time daily for unbooked visits. We provide non-emergency care only — for life-threatening emergencies please call <span className="wb-emergency-num">108</span> or visit the nearest emergency facility.
        </div>
      </div>
      <div className="wb-right">
        <a className="wb-call108" href="tel:108">
          <I.Phone size={14} /> Emergency · Dial 108
        </a>
      </div>
    </div>
  </div>
);

export default WalkinBanner;
