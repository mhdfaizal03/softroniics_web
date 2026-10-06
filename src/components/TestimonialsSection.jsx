import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emma Rodriguez",
      badge: "Professional",
      rating: 5,
      avatar: "./assets/testimonial-avatar.jpg",
      photo: "./assets/testimonial-student.jpg",
      paragraphs: [
        "My experience with Softroniics’ AI Forward Deployed Engineering program has been really valuable. The program focuses not just on learning AI concepts, but on understanding how AI can be applied to solve real-world problems.",
        "What I especially liked was the practical approach, hands-on learning, and exposure to real project scenarios. ."
      ]
    },
    {
      name: "Rahul Verma",
      badge: "Professional",
      rating: 5,
      avatar: "./assets/testimonial-avatar.jpg",
      photo: "./assets/testimonial-student.jpg",
      paragraphs: [
        "The hands-on multi-agent and GraphRAG curriculum directly helped our team ship an enterprise document intelligence pipeline in under 3 weeks.",
        "The mentorship from senior practicing architects was second to none, giving us real production patterns from day one."
      ]
    }
  ];

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        {/* Top Header Row with Title & Round Arrow Buttons */}
        <div className="testimonial-header-row">
          <div>
            <div className="testimonial-badge-pill">
              Students Love
            </div>
            <h2 className="testimonial-heading">
              WHAT OUR ENGINEERS SAY
            </h2>
            <p className="testimonial-subheading">
              Nothing makes us happier than seeing our customers enjoy every scoop. Here’s what people are saying about their meltzy experience.
            </p>
          </div>

          <div className="testimonial-nav-btns">
            <button 
              type="button" 
              className="testimonial-circle-btn" 
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} strokeWidth={1.3} />
            </button>
            <button 
              type="button" 
              className="testimonial-circle-btn" 
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} strokeWidth={1.3} />
            </button>
          </div>
        </div>

        {/* 2-Column Testimonial Layout: Left Photo + Right Cream Card */}
        <div className="testimonial-card-main">
          <div className="testimonial-photo-box">
            <img src={current.photo} alt={current.name} />
          </div>

          <div className="testimonial-content-box">
            {/* Soft Cream Giant Double Quotes SVG */}
            <div className="testimonial-quote-mark" aria-hidden="true">
              <svg width="68" height="54" viewBox="0 0 68 54" fill="none">
                <path 
                  d="M16.5 54C7.5 54 0 46.5 0 37.5C0 27 7 16.5 19 0H30C21.5 14.5 17.5 24 17.5 29.5C19 28.5 21.5 28 24 28C30.5 28 35.5 33 35.5 41C35.5 49 26.5 54 16.5 54ZM49 54C40 54 32.5 46.5 32.5 37.5C32.5 27 39.5 16.5 51.5 0H62.5C54 14.5 50 24 50 29.5C51.5 28.5 54 28 56.5 28C63 28 68 33 68 41C68 49 59 54 49 54Z" 
                  fill="#F1ECE1" 
                />
              </svg>
            </div>

            {/* Exact Tilted Speech Bubble Badge SVG */}
            <div className="testimonial-speech-bubble-svg-wrap" aria-label={current.badge}>
              <svg width="132" height="60" viewBox="0 0 132 60" fill="none">
                <g transform="rotate(-8 66 30)">
                  <path 
                    d="M26 4C13 4 3 13.5 3 25C3 36.5 13 46 26 46H34L26 56L44 46H104C117 46 127 36.5 127 25C127 13.5 117 4 104 4H26Z" 
                    fill="#F7BE38" 
                  />
                  <text 
                    x="65" 
                    y="29" 
                    textAnchor="middle" 
                    fill="#432602" 
                    fontSize="15" 
                    fontStyle="italic" 
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    {current.badge}
                  </text>
                </g>
              </svg>
            </div>

            {/* Testimonial Quote Paragraphs */}
            <div className="testimonial-paragraphs-wrap">
              {current.paragraphs.map((p, idx) => (
                <p key={idx} className="testimonial-quote-para">
                  {p}
                </p>
              ))}
            </div>

            {/* Author Row: Avatar + Name + 5 Stars */}
            <div className="testimonial-author-row">
              <img 
                src={current.avatar} 
                alt={current.name} 
                className="author-avatar" 
              />
              <div className="author-meta">
                <h4 className="author-name">{current.name}</h4>
                <div className="stars-row">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
