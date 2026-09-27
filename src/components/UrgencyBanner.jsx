import React from 'react';
import { Flame, ArrowUpRight } from 'lucide-react';

export default function UrgencyBanner({ onApplyClick }) {
  return (
    <section className="urgency-banner" aria-label="Limited seats alert">
      <div className="container-wide urgency-banner-inner">
        <div className="urgency-banner-left">
          <div className="urgency-fire-icon">
            <Flame size={20} />
          </div>
          <div>
            <div className="urgency-banner-title">
              Only 9 of 40 seats left
            </div>
            <div className="urgency-banner-sub">
              Next cohort — applications close soon
            </div>
          </div>
        </div>

        <button 
          type="button" 
          onClick={onApplyClick} 
          className="btn-urgent-apply"
        >
          Apply for the experienced track <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}
