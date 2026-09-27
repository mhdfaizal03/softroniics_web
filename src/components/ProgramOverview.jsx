import React, { useState } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

export default function ProgramOverview({ onFormSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onFormSuccess) onFormSuccess();
    }, 600);
  };

  const modules = [
    "Rapid Foundations to Deployed AI API",
    "Advanced Systems — Fine-Tuning, RAG & Multi-Agent",
    "Enterprise Integrations",
    "Consulting Craft, Observability & Security",
    "Capstone Project"
  ];

  const outcomes = [
    "Design and deploy production-grade AI systems end to end",
    "Fine-tune models, build GraphRAG pipelines and orchestrate multi-agent systems",
    "Scope, propose and deliver AI solutions as a consultant to enterprise clients"
  ];

  return (
    <section className="program-overview-section" id="overview">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb-wrap">
          <nav className="breadcrumb-list" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <span className="breadcrumb-separator">/</span>
            <a href="#training">Training</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">AI Engineering</span>
          </nav>
        </div>

        <div className="program-overview-grid">
          {/* Left Column: Why This Program */}
          <div className="overview-left-col">
            <div className="badge-pill">
              Why this program
            </div>

            <h2 className="overview-heading">
              Learn AI Engineering<br />Through Real Projects
            </h2>

            <p className="overview-text">
              Master the full stack of forward deployed AI engineering — from fine-tuning foundation models to shipping multi-agent systems inside real enterprise stacks. Live build sessions, senior mentors, and consulting craft included.
            </p>

            <p className="overview-text">
              At FDE-ACCEL, we train engineers who ship AI that survives contact with a client's actual infrastructure. Whether you're an experienced backend engineer moving into AI or an ML engineer ready to own the full deployment lifecycle, the Experienced Track meets you at senior level from week one.
            </p>

            <p className="overview-text">
              Go beyond fine-tuning tutorials and RAG demos. Our curriculum emphasizes GraphRAG, multi-agent orchestration, observability, security and cost-aware inference at scale — the systems-level skills that separate a forward deployed engineer from someone who can only build a proof of concept.
            </p>

            <p className="overview-text">
              Apply today and join a cohort of engineers building toward AI Architect, AI Consultant, and Staff/Lead Applied AI Engineer roles. FDE-ACCEL — where engineers become the people enterprises call when the AI actually has to work.
            </p>

            {/* What You Will Learn Card */}
            <div className="learn-card">
              <div className="learn-card-header">
                <h3>What You Will Learn?</h3>
              </div>

              <div className="learn-card-body">
                <p className="learn-card-intro">
                  This course focuses on production AI engineering — fine-tuning, GraphRAG and multi-agent systems — built for experienced engineers moving into forward-deployed and consulting roles.
                </p>

                <div className="learn-card-group-title">
                  Modules:
                </div>
                <ul className="check-list">
                  {modules.map((item, idx) => (
                    <li key={idx} className="check-item">
                      <span className="check-icon-sq">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="learn-card-group-title" style={{ marginTop: '24px' }}>
                  Learning Outcomes:
                </div>
                <ul className="check-list">
                  {outcomes.map((item, idx) => (
                    <li key={idx} className="check-item">
                      <span className="check-icon-sq">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="learn-card-footer">
                  <div style={{ marginBottom: '6px' }}>
                    <strong>Duration:</strong> 3 Months (3 Days / Week)
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>Timings:</strong> Live sessions, flexible slots
                  </div>
                  <div style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    Become a forward deployed AI engineer.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Application Form */}
          <div className="overview-right-col">
            <aside className="apply-form-sticky" aria-label="Course Application Form">
              <h3 className="apply-form-title">Launch Your AI Career</h3>
              <p className="apply-form-sub">Apply to Our Next Cohort</p>

              {submitted ? (
                <div style={{
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  borderRadius: '10px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 12px auto' }} />
                  <h4 style={{ color: '#065F46', marginBottom: '8px', fontSize: '18px' }}>
                    Application Submitted!
                  </h4>
                  <p style={{ color: '#047857', fontSize: '14px' }}>
                    Thank you! Our Academic Admissions Advisor will contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{
                      marginTop: '16px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '13.5px'
                    }}
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-name">
                      Name <span className="req">*</span>
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Enter name"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-email">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="Enter email address"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-phone">
                      Mobile Number <span className="req">*</span>
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-message">
                      Message
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      placeholder="Enter message"
                      className="form-control"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-form-submit" 
                    disabled={loading}
                    id="submit-lead-form-btn"
                  >
                    {loading ? 'Submitting...' : 'SUBMIT'}
                  </button>
                </form>
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
