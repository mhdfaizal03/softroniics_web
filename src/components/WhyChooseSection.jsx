import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function WhyChooseSection({ onRegisterClick }) {
  return (
    <section className="why-choose-section" id="why-choose">
      <div className="container">
        <div className="why-choose-inner">
          <h2 className="why-choose-title">Why Choose Softroniics?</h2>

          <p className="why-choose-text">
            At Softroniics, FDE-ACCEL is an excellent choice for any experienced engineer looking to master forward deployed AI engineering. Going through the Experienced Track with FDE-ACCEL offers a comprehensive learning experience that combines deep technical grounding with real client-facing craft. FDE-ACCEL provides a rich learning environment with production-grade infrastructure and live, ambiguous-RFP style projects — not sandboxed tutorials.
          </p>

          <p className="why-choose-text">
            During the program, you will work alongside senior mentors who've shipped AI systems into real enterprise environments, and learn to build production AI systems using fine-tuning, GraphRAG, multi-agent orchestration and enterprise integrations. You will gain hands-on experience across the full stack of forward deployed work — model internals, cloud deployment, observability and security, and the consulting craft of scoping, proposing and negotiating client engagements.
          </p>

          {/* Large Vibrant Curved CTA Banner */}
          <div className="cta-banner-card">
            <h3 className="cta-banner-title">
              Don't delay any further! Begin one of<br />our top-notch courses instructed by experts
            </h3>

            <p className="cta-banner-sub">
              If You Have Any Questions Call Us / WhatsApp On +91 9037-29-1113
            </p>

            <div className="cta-banner-actions">
              <button 
                type="button" 
                onClick={onRegisterClick} 
                className="btn-white-action"
              >
                Register Now
              </button>

              <div className="cta-banner-phone">
                <span>Call Us / WhatsApp</span>
                <a href="tel:+919037291113" style={{ color: '#ffffff' }}>
                  <strong>+91 9037-29-1113</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
