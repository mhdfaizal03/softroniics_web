import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HubShowcaseSection({ onApplyClick }) {
  return (
    <section className="hub-showcase-section" id="hub">
      {/* Background Grid Pattern */}
      <div className="hub-grid-pattern" aria-hidden="true" />

      <div className="container-hub">
        {/* Top Header Banner */}
        <div className="hub-header-center">
          <div className="hub-badge-pill">
            Applications open
          </div>
          <h2 className="hub-title-headline">
            Stop learning AI in isolation.<br />
            Start engineering it for the real world.
          </h2>
          <div className="hub-apply-btn-wrapper">
            <button 
              type="button" 
              onClick={onApplyClick} 
              className="hub-apply-cta-btn"
              id="hub-apply-btn"
            >
              <span>Apply Now</span>
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Map & Kochi Hub Card Showcase */}
        <div className="hub-grid-layout">
          {/* Left Column: Vector Map */}
          <div className="hub-map-column">
            <div className="hub-map-wrapper">
              <img 
                src="/assets/hub_map_with_pins.svg" 
                alt="Softroniics Hubs: Calicut, Perinthalmanna, Palakkad"
                className="hub-map-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Column: Ivory Kochi Hub Card */}
          <div className="hub-card-column">
            <div className="hub-details-card">
              {/* Spinning Contact Stamp matching exact design */}
              <a 
                href="tel:+919995125959" 
                className="hub-contact-stamp-link" 
                title="Contact Us via Phone"
              >
                <svg viewBox="0 0 120 120" className="hub-stamp-svg">
                  <circle cx="60" cy="60" r="58" fill="#E88F1B" />
                  <g className="hub-stamp-spin-text">
                    <path 
                      id="hubBadgePath" 
                      d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" 
                      fill="none" 
                    />
                    <text fill="white" fontSize="9.5" fontWeight="700" letterSpacing="3px">
                      <textPath href="#hubBadgePath" startOffset="50%" textAnchor="middle">
                        CONTACT US • CONTACT US •
                      </textPath>
                    </text>
                  </g>
                  {/* Clean slanted arrow inside */}
                  <g transform="translate(60,60)">
                    <line x1="-10" y1="10" x2="10" y2="-10" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
                    <polyline points="0,-10 10,-10 10,0" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </a>

              <div className="hub-card-content-flex">
                {/* Hub Information */}
                <div className="hub-text-block">
                  <h3 className="hub-main-title">Our Hub</h3>
                  <h4 className="hub-city-name">Kochi</h4>
                  <a 
                    href="https://softroniics.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hub-external-link"
                  >
                    <span>Softroniics</span>
                    <ArrowUpRight size={13} strokeWidth={2.5} />
                  </a>

                  <address className="hub-address-block">
                    Chiyezhath Tower<br />
                    Mahatma Gandhi Rd<br />
                    Padma Junction, North Kaloor<br />
                    Kacheripady, Kochi, Ernakulam<br />
                    Kerala 682035
                  </address>

                  <div className="hub-contact-links">
                    <a href="tel:+919995125959" className="hub-phone-link">
                      +91 99951 25959
                    </a>
                    <a href="mailto:info@softroniics.com" className="hub-email-link">
                      info@softroniics.com
                    </a>
                  </div>
                </div>

                {/* Hub Photos Gallery */}
                <div className="hub-gallery-block">
                  <div className="hub-photo-frame hub-photo-tall">
                    <img 
                      src="/assets/hub_corridor.jpg" 
                      alt="Softroniics Modern Campus Corridor"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="hub-photo-frame hub-photo-short">
                    <img 
                      src="/assets/hub_meeting.jpg" 
                      alt="Meeting Room Discussion"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="hub-photo-frame hub-photo-tall hub-photo-cutout">
                    <img 
                      src="/assets/hub_laptop.jpg" 
                      alt="Workstation Setup"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
