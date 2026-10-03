import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: "About Us", href: "#why-choose" },
    { label: "Training", href: "#overview" },
    { label: "Internship", href: "#capstone" },
    { label: "Placements", href: "#partners" },
    { label: "Events", href: "#testimonials" },
    { label: "Blog", href: "#faq" },
    { label: "Contact Us", href: "#hub" }
  ];

  const trainingLinks = [
    "Front End Development",
    "UI/UX",
    "Digital Marketing",
    "Flutter",
    "Python",
    "Laravel",
    "Data Science",
    "MERN Fullstack",
    "AI forward deployed engineering"
  ];

  return (
    <footer className="main-footer-section" id="footer">
      {/* Dark gradient overlay over skyscraper background */}
      <div className="main-footer-overlay" aria-hidden="true" />

      <div className="container main-footer-container">
        {/* ── Main 4-column grid ── */}
        <div className="main-footer-grid">

          {/* Col 1 – Need Help? */}
          <div className="main-footer-col main-footer-col--wide">
            <h5 className="main-footer-title">Need Help?</h5>
            <p className="main-footer-help-text">
              Want to know more about our courses?<br />
              Talk to our Academic Advisors
            </p>
            <div className="main-footer-contact-list">
              <a href="tel:+919037291113" className="main-footer-contact-link">
                <Phone size={14} className="text-orange" />
                <span>+91 9037-29-1113</span>
              </a>
              <a href="mailto:info@softroniics.com" className="main-footer-contact-link">
                <Mail size={14} className="text-orange" />
                <span>info@softroniics.com</span>
              </a>
            </div>
          </div>

          {/* Col 2 – Navigation */}
          <div className="main-footer-col">
            <h5 className="main-footer-title">Navigation</h5>
            <ul className="main-footer-links">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Training */}
          <div className="main-footer-col">
            <h5 className="main-footer-title">Training</h5>
            <ul className="main-footer-links">
              {trainingLinks.map((item, i) => (
                <li key={i} className={item.includes('AI') ? 'pt-2' : ''}>
                  <a href="#overview">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Follow Us */}
          <div className="main-footer-col">
            <h5 className="main-footer-title">Follow Us</h5>
            <div className="main-footer-socials">

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="main-footer-social-btn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="main-footer-social-btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="main-footer-social-btn" aria-label="Facebook">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="main-footer-social-btn" aria-label="Twitter">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="main-footer-social-btn" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <hr className="main-footer-divider" />
        <div className="main-footer-bottom-row">
          <p className="main-footer-copy">© 2026 Softroniics. All Rights Reserved.</p>
          <div className="main-footer-legal-links">
            <a href="#terms" className="main-footer-legal-link">Terms of Use</a>
            <a href="#privacy" className="main-footer-legal-link">Privacy Policy</a>
            <a href="#refund" className="main-footer-legal-link">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

