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
              style={{ marginBottom: '24px' }}
            >
              Explore Now <ArrowUpRight size={18} />
            </button>

            <div className="capstone-cards-list">
              {capstoneProjects.map((p, idx) => (
                <div key={idx} className="capstone-item-card">
                  <div className="capstone-icon-circle">
                    <Compass size={22} />
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

            {/* Floating Metric Card matching design */}
            <div className="capstone-floating-metric">
              <div className="metric-header">
                <span>8-15 Jan</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Week <ChevronDown size={14} />
                </span>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#111827',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Play size={10} fill="#ffffff" />
                </div>
              </div>

              <div className="metric-value-wrap">
                <span className="metric-badge">+60%</span>
                <svg width="100" height="35" viewBox="0 0 100 35" fill="none">
                  <path 
                    d="M5 30 C 30 28, 50 15, 95 6" 
                    stroke="#6366F1" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                  <circle cx="68" cy="20" r="4" fill="#6366F1" />
                </svg>
              </div>

              <div className="metric-subtitle">
                New students
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
