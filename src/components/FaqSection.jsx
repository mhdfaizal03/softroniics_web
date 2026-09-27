import React, { useState } from 'react';
import { Phone, ArrowUpRight, Plus, Minus } from 'lucide-react';

export default function FaqSection({ onContactClick }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      num: "01",
      question: "What types of AI solutions do you offer?",
      answer: "We provide a full range of AI-driven services including chatbot & virtual assistant development, automation workflows, AI integration & consulting, generative AI solutions, and advanced data analytics—customized for your business needs."
    },
    {
      num: "02",
      question: "How long does implementation take?",
      answer: "Typical implementation ranges from 2 to 6 weeks depending on project complexity, data preparation, and enterprise integration requirements. Students build live functional systems within weekly sprints."
    },
    {
      num: "03",
      question: "Is there a trial or demo available?",
      answer: "Yes, we offer scheduled live architecture walk-throughs, sample project repos, and an interactive demo session with our instructors prior to cohort enrollment."
    },
    {
      num: "04",
      question: "Can we integrate with existing tools/CRMs?",
      answer: "Absolutely. Our solutions and training cover integrations with Slack, HubSpot, Salesforce, Microsoft Teams, PostgreSQL, Snowflake, and custom REST/GraphQL APIs."
    },
    {
      num: "05",
      question: "How secure is your AI platform?",
      answer: "Security and data sovereignty are paramount. We teach on-prem and VPC deployments with zero-retention API policies, SOC2 compliance standards, and local LLM options."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', margin: '0 0 40px 0', maxWidth: '700px' }}>
          <div className="badge-pill">
            FAQs
          </div>
          <h2>Answers to Your Most Common Questions</h2>
          <p>
            Find quick, clear answers to the questions we get asked the most. Whether you're exploring AI solutions or ready to start, we've got you covered.
          </p>
        </div>

        <div className="faq-grid">
          {/* Left Contact Card */}
          <div className="faq-contact-card">
            <div className="faq-icon-box">
              <Phone size={24} />
            </div>
            <h4>
              Still Have Questions? Let's talk and find the perfect AI solution for your business.
            </h4>
            <button 
              type="button" 
              onClick={onContactClick} 
              className="btn-contact-us"
            >
              Contact Us <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Right Accordion */}
          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-title-wrap">
                      <span className="faq-num">{faq.num}</span>
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </button>

                  {isOpen && (
                    <div className="faq-body">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
