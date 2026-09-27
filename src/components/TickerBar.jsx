import React from 'react';

export default function TickerBar({ onApplyClick }) {
  const items = [
    "New Cohort Starting Soon",
    "Apply For The Experienced Track",
    "Limited Seats",
    "3 Months, 4 Days/Week",
    "Enrollment Closes Soon",
    "Build Production AI Systems"
  ];

  const renderGroup = (isHidden) => (
    <div className="ticker-group" aria-hidden={isHidden}>
      {items.map((text, idx) => (
        <span key={idx} className="ticker-item">
          <span>★</span>
          <span>{text}</span>
        </span>
      ))}
      <button 
        type="button" 
        onClick={onApplyClick} 
        className="apply-btn-inline"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        ★ Apply Now
      </button>
    </div>
  );

  return (
    <div className="ticker-bar" role="region" aria-label="Announcements">
      <div className="ticker-track">
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
}
