import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BottomCtaSection({ onApplyClick }) {
  return (
    <section className="bottom-cta-section" id="apply">
      <div className="container">
        <div className="bottom-cta-badge">
          Applications open
        </div>

        <h2 className="bottom-cta-title">
          Stop learning AI in isolation.<br />
          Start engineering it for the real world.
        </h2>

        <div className="bottom-cta-btn-wrap">
          <button 
            type="button" 
            onClick={onApplyClick} 
            className="bottom-cta-apply-btn"
            id="bottom-apply-btn"
          >
            <span>Apply Now</span>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
