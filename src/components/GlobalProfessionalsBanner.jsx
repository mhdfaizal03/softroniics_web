import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function GlobalProfessionalsBanner({ onEnrollClick }) {
  return (
    <section className="professionals-banner-section" id="professionals-banner">
      <div className="container">
        <div className="prof-banner-card">
          <div className="prof-banner-content">
            <h2 className="prof-banner-title">
              Learn from top professionals<br className="hide-mobile" /> worldwide.
            </h2>
            <p className="prof-banner-sub">
              We ensure our students receive consistent guidance on their projects throughout various stages via regular classes and detailed technical support.
            </p>
            <div className="prof-banner-actions">
              <button 
                type="button" 
                onClick={onEnrollClick} 
                className="btn-enroll-banner"
              >
                Enroll Now <ArrowUpRight size={17} className="btn-arrow-icon" />
              </button>
              <div className="prof-banner-call">
                <span className="prof-call-label">
                  Call Us
                </span>
                <a href="tel:+919037291113" className="prof-call-number">
                  +91 9037-29-1113
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

