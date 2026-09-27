import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: "About Us", href: "#why-choose" },
    { label: "Training", href: "#overview" },
    { label: "Internship", href: "#capstone" },
    { label: "Placements", href: "#partners" },
    { label: "Events", href: "#events" },
    { label: "Blog", href: "#faq" },
    { label: "Contact Us", href: "#branches" }
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
    <footer className="footer-section" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Need Help? */}
          <div className="footer-col">
            <h4 className="footer-col-title">Need Help?</h4>
            <p className="footer-help-text">
              Want to know more about our courses?<br />
              Talk to our Academic Advisors
            </p>
            <a href="tel:+919037291113" className="footer-contact-link">
              <Phone size={15} color="#E88F1B" />
              <span>+91 9037-29-1113</span>
            </a>
            <a href="mailto:info@softroniics.com" className="footer-contact-link">
              <Mail size={15} color="#E88F1B" />
              <span>info@softroniics.com</span>
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="footer-link-item">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Training */}
          <div className="footer-col">
            <h4 className="footer-col-title">Training</h4>
            <ul className="footer-links-list">
              {trainingLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#overview" className="footer-link-item">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="social-icons-row">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#E88F1B">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E88F1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#E88F1B">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#E88F1B">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#E88F1B">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="footer-bottom-divider" />
      </div>
    </footer>
  );
}
