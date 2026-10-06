import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onEnquireClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.pageYOffset;

      // Add elevated shadow styling once user scrolls past 20px
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // If mobile drawer is open, keep navbar pinned visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // Hide when scrolling DOWN, Reveal when scrolling UP
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down past hero top -> hide smoothly
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 120) {
        // Scrolling up or near top of the page -> reveal immediately
        setIsVisible(true);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero', hasDropdown: false },
    { 
      label: 'Internship', 
      href: '#capstone', 
      hasDropdown: true,
      subItems: [
        { label: 'Capstone RFP Project', href: '#capstone' },
        { label: 'Live Client Deployment', href: '#capstone' },
        { label: 'Mentorship Track', href: '#mentors' }
      ]
    },
    { 
      label: 'Training', 
      href: '#overview', 
      hasDropdown: true,
      subItems: [
        { label: 'Full Curriculum (12 Weeks)', href: '#curriculum' },
        { label: 'Fine-Tuning & Multi-Agent', href: '#topics' },
        { label: 'GraphRAG & AI Observability', href: '#topics' }
      ]
    },
    { 
      label: 'About Us', 
      href: '#why-choose', 
      hasDropdown: true,
      subItems: [
        { label: 'Why Softroniics', href: '#why-choose' },
        { label: 'Our Hubs & Campuses', href: '#hub' },
        { label: 'Verified Outcomes', href: '#partners' }
      ]
    },
    { label: 'Services', href: '#topics', hasDropdown: false },
    { label: 'Placements', href: '#partners', hasDropdown: false },
    { label: 'Blog', href: '#faq', hasDropdown: false },
    { label: 'Contact Us', href: '#hub', hasDropdown: false }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${!isVisible ? 'navbar-hidden' : 'navbar-visible'}`}>
      <div className="container-wide navbar-inner">
        <a href="#" className="logo-link" aria-label="Softroniics Home">
          <img src="./assets/logo.png" alt="Softroniics Logo" className="brand-logo" />
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((item, idx) => (
              <li 
                key={idx} 
                className="nav-item-dropdown-wrap"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a href={item.href} className="nav-link">
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={14} className={`nav-caret ${activeDropdown === idx ? 'caret-rotated' : ''}`} />}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === idx && (
                  <div className="nav-dropdown-menu">
                    {item.subItems.map((sub, sIdx) => (
                      <a key={sIdx} href={sub.href} className="nav-dropdown-item" onClick={() => setActiveDropdown(null)}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
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
        <div className="navbar-mobile-drawer">
          {navLinks.map((item, idx) => (
            <div key={idx} className="mobile-nav-group">
              <a 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
            </div>
          ))}
          <button 
            type="button" 
            onClick={() => { setMobileMenuOpen(false); onEnquireClick(); }}
            className="btn-enquire"
            style={{ width: '100%', justifyContent: 'center', marginTop: '14px' }}
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}
