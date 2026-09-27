import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onEnquireClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero', hasDropdown: false },
    { label: 'Internship', href: '#capstone', hasDropdown: true },
    { label: 'Training', href: '#overview', hasDropdown: true },
    { label: 'About Us', href: '#why-choose', hasDropdown: true },
    { label: 'Services', href: '#topics', hasDropdown: false },
    { label: 'Placements', href: '#partners', hasDropdown: false },
    { label: 'Blog', href: '#faq', hasDropdown: false },
    { label: 'Contact Us', href: '#branches', hasDropdown: false }
  ];

  return (
    <header className="navbar">
      <div className="container-wide navbar-inner">
        <a href="#" className="logo-link" aria-label="Softroniics Home">
          <img src="/assets/logo.png" alt="Softroniics Logo" className="brand-logo" />
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="nav-link">
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={14} className="nav-caret" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          type="button" 
          onClick={onEnquireClick} 
          className="btn-enquire"
          id="enquire-now-btn"
        >
          Enquire Now
        </button>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid #E5E7EB',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navLinks.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 600, color: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown size={16} />}
            </a>
          ))}
          <button 
            type="button" 
            onClick={() => { setMobileMenuOpen(false); onEnquireClick(); }}
            className="btn-enquire"
            style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}
