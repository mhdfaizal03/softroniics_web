import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CertificateSection({ onApplyClick }) {
  return (
    <section className="certificate-section" id="certificate">
      <div className="container">
        <div className="certificate-grid">
          {/* Left Column: Certificate with thick orange border */}
          <div className="certificate-card-frame">
            <img 
              src="/assets/certificate.jpg" 
              alt="Conformance Certificate Softroniics Technologies NSDC" 
              className="certificate-image"
            />
          </div>

          {/* Right Column: Title, Subtitle, Apply CTA & Phone */}
          <div className="certificate-info-col">
            <h2 className="certificate-title">
              Earn Your AI Engineering<br />Certificate
            </h2>

            <p className="certificate-desc">
              Don't hesitate, take the first step towards a brighter future by enrolling in one of our top-notch courses taught by the best in the industry!
            </p>

            <div className="certificate-cta-row">
              <button 
                type="button" 
                onClick={onApplyClick} 
                className="certificate-apply-btn"
                id="cert-apply-btn"
              >
                <span>Apply Today</span>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>

              <div className="certificate-contact-box">
                <span className="certificate-contact-label">
                  Call Us / Whatsapp On
                </span>
                <a 
                  href="tel:+919037291113" 
                  className="certificate-contact-num"
                >
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
