import React from 'react';
import { Compass, ArrowUpRight, ChevronDown, Play } from 'lucide-react';

export default function CapstoneSection({ onExploreClick }) {
  const capstoneProjects = [
    {
      title: "Enterprise Document Intelligence Platform",
      description: "Ingest, classify and extract structured knowledge from unstructured enterprise documents at scale."
    },
    {
      title: "AI Customer Support Copilot",
      description: "A grounded, tool-using support agent that resolves tickets against live product and policy data."
    },
    {
      title: "Enterprise SQL & BI Copilot",
      description: "Natural-language querying over a real warehouse schema, with guardrails and query verification."
    },
    {
      title: "Team-scoped RFP Response",
      description: "Respond to an ambiguous, client-style RFP as a team — architecture, build and client-ready proposal."
    }
  ];

  return (
    <section className="capstone-section" id="capstone">
      <div className="container">
        <div className="capstone-grid">
          {/* Left Column */}
          <div>
            <div className="badge-pill">
              Capstone
            </div>

            <h2 className="overview-heading">
              A tough project. A real deadline. No clear answers.
            </h2>

            <p className="capstone-desc">
              Month 3 hands you an intentionally open-ended client-style RFP. You'll scope it, architect it, build it and demo it — the same ambiguity you'll meet on your first real engagement. Most teams land on one of four directions:
            </p>

            <button
              type="button"
              onClick={onExploreClick}
              className="btn-primary"
              style={{ marginBottom: '32px' }}
            >
              Explore Now <ArrowUpRight size={17} />
            </button>

            <div className="capstone-cards-list">
              {capstoneProjects.map((p, idx) => (
                <div key={idx} className="capstone-item-card">
                  <div className="capstone-icon-circle">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo & Floating Metric Card */}
          <div className="capstone-media-wrap">
            <img
              src="/assets/students-group.jpg"
              alt="Engineering students collaborating on AI Capstone"
              className="capstone-main-img"
            />

            {/* Floating Metric Card — bottom-left of image */}
            <div className="capstone-floating-metric">
              {/* Header row: date | Week dropdown | play btn */}
              <div className="metric-header">
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>8-15 Jan</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '12px', color: '#374151', fontWeight: 600 }}>
                  Week <ChevronDown size={13} />
                </span>
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: '#111827',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginLeft: 'auto'
                }}>
                  <Play size={9} fill="#ffffff" strokeWidth={0} />
                </div>
              </div>

              {/* Chart area with y-axis + badge + curve */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                {/* +60% badge + chart */}
                <div style={{ flex: 1 }}>
                  <div className="metric-value-wrap">
                    <span className="metric-badge">+60%</span>
                  </div>
                  <svg width="110" height="52" viewBox="0 0 110 52" fill="none" style={{ display: 'block', marginTop: '6px' }}>
                    {/* Curve */}
                    <path
                      d="M4 46 C 25 42, 50 28, 106 8"
                      stroke="#6366F1"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    {/* Dot on curve at ~65% */}
                    <circle cx="72" cy="24" r="4.5" fill="#6366F1" />
                  </svg>
                </div>
                {/* Y-axis labels */}
                <div className="metric-y-axis">
                  <span>4K</span>
                  <span>2K</span>
                  <span>0</span>
                </div>
              </div>

              <div className="metric-subtitle">New students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
