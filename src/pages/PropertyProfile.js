import React, { useState } from 'react';
import './Page.css';
import './PropertyProfile.css';

const RISK_LEVELS = {
  low: { label: 'Low Risk', color: '#16a34a', bg: '#dcfce7' },
  moderate: { label: 'Moderate Risk', color: '#ca8a04', bg: '#fef9c3' },
  high: { label: 'High Risk', color: '#dc2626', bg: '#fee2e2' },
};

function RiskBadge({ level }) {
  const r = RISK_LEVELS[level] || RISK_LEVELS.low;
  return (
    <span className="risk-badge" style={{ color: r.color, background: r.bg }}>
      {r.label}
    </span>
  );
}

function PropertyProfile() {
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) setSubmitted(true);
  };

  return (
    <div className="page">
      <h1 className="page-title">Property Profile</h1>
      <p className="page-subtitle">Enter your property address to get your risk overview.</p>

      <form className="address-form" onSubmit={handleSubmit}>
        <input
          className="address-input"
          type="text"
          placeholder="123 Main St, City, State ZIP"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="btn-primary" type="submit">Look Up Property</button>
      </form>

      {submitted && (
        <div className="risk-scorecard">
          <h2 className="scorecard-title">{address}</h2>
          <p className="scorecard-note">Risk data pulls from FEMA and NOAA - connect APIs to activate live data.</p>

          <div className="risk-grid">
            <div className="risk-card">
              <span className="risk-label">Flood Zone</span>
              <RiskBadge level="moderate" />
              <span className="risk-detail">Zone AE - Special Flood Hazard Area</span>
            </div>
            <div className="risk-card">
              <span className="risk-label">Wildfire Risk</span>
              <RiskBadge level="low" />
              <span className="risk-detail">Minimal vegetation, urban area</span>
            </div>
            <div className="risk-card">
              <span className="risk-label">Storm Risk</span>
              <RiskBadge level="moderate" />
              <span className="risk-detail">Hurricane zone, moderate wind exposure</span>
            </div>
            <div className="risk-card">
              <span className="risk-label">Overall</span>
              <RiskBadge level="moderate" />
              <span className="risk-detail">Review flood and storm coverage</span>
            </div>
          </div>

          <div className="property-actions">
            <button className="btn-outline">Add Another Property</button>
            <button className="btn-outline">View Insurance Checklist</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyProfile;
