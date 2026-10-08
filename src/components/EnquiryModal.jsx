import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, defaultTopic = "AI Forward Deployed Engineering" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '1-3 years',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={54} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px', color: '#111827' }}>
              Application Received!
            </h3>
            <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '24px' }}>
              Thank you, <strong>{formData.name}</strong>. An admissions counselor will reach out via phone/WhatsApp within 24 hours to schedule your technical consultation.
            </p>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="badge-pill">
              Admissions Open
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
              Enquire for {defaultTopic}
            </h3>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
              Fill in your details below to receive the detailed syllabus and cohort onboarding guide.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-name">
                  Full Name <span className="req">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-email">
                  Work Email <span className="req">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-phone">
                  Phone / WhatsApp <span className="req">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="+91 90000 00000"
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-exp">
                  Engineering Experience
                </label>
                <select
                  id="modal-exp"
                  className="form-control"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="Fresher / Student">Fresher / Final Year Student</option>
                  <option value="1-3 years">1 - 3 years experience</option>
                  <option value="3-5 years">3 - 5 years experience</option>
                  <option value="5+ years">5+ years senior engineer</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={loading}
                style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
              >
                {loading ? 'Submitting...' : 'Submit Application'} <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
