import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Flame, CalendarDays, CalendarClock } from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function Hero({ onEnrollClick, onViewCurriculumClick }) {
  // Animated Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 360,
    hours: 24,
    minutes: 60,
    seconds: 60
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* 3D Perspective Tunnel Background Grid from abc.svg */}
      <div className="hero-perspective-bg" aria-hidden="true">
        <img src="./assets/hero-bg-grid.svg" alt="" className="hero-bg-grid-img" />
      </div>

      <div className="container-wide hero-container-rel">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            <div className="hero-tag-badge">
              AI Forward deployed engineering
            </div>

            {/* Spec Badges Row */}
            <div className="hero-pills-row">
              <div className="hero-pill-item">
                <div className="hero-pill-circle">
                  <CalendarDays size={20} color="#E88F1B" fill="#ffffff" strokeWidth={2} />
                </div>
                <div className="hero-pill-text">
                  <span className="hero-pill-label">Duration</span>
                  <span className="hero-pill-val">3 months</span>
                </div>
              </div>

              <div className="hero-pill-item">
                <div className="hero-pill-circle">
                  <CalendarClock size={20} color="#E88F1B" fill="#ffffff" strokeWidth={2} />
                </div>
                <div className="hero-pill-text">
                  <span className="hero-pill-label">Schedule</span>
                  <span className="hero-pill-val">Weekday &amp; Weekend cohorts</span>
                </div>
              </div>
            </div>

            <h1 className="hero-title">
              AI Engineering Program
            </h1>
            <div className="hero-title-sub">
              Build real-world AI systems.
            </div>

            <p className="hero-desc">
              A 12-week hands-on AI engineering program covering LLMs, AI agents, deployment, evaluation, and production systems.
            </p>

            <div className="hero-cta-group">
              <button 
                type="button" 
                onClick={onEnrollClick} 
                className="btn-primary"
                id="hero-enroll-btn"
              >
                Enroll Now <ArrowUpRight size={18} />
              </button>

              <button 
                type="button" 
                onClick={onViewCurriculumClick} 
                className="btn-secondary"
                id="hero-curriculum-btn"
              >
                View Curriculum
              </button>

              <div className="hero-call-info">
                <span className="hero-call-label">Call Us</span>
                <a href="tel:+919037291113" className="hero-call-num">
                  +91 9037-29-1113
                </a>
              </div>
            </div>

            <div className="hero-urgency-badge">
              <div className="urgency-flame-circle">
                <Flame size={15} color="#E11D48" fill="#E11D48" />
              </div>
              <span>Next cohort — only 9 of 40 seats left</span>
            </div>

            <div className="hero-countdown-wrap">
              <div className="hero-countdown-label">
                Applications close in
              </div>
              <div className="countdown-boxes">
                <div className="countdown-box">
                  <span className="countdown-num">{timeLeft.days}</span>
                  <span className="countdown-unit">DAYS</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-num">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="countdown-unit">HOURS</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-num">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="countdown-unit">MIN</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-num">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="countdown-unit">SEC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact 6-Tile Collage with Organic Golden Connector */}
          <div className="hero-visual">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
