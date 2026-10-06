import React from 'react';

export default function MentorsSection() {
  const mentors = [
    {
      name: "Neeraj Nirala",
      role: "Technical Architect",
      experience: "15 Years of Experience",
      image: "./assets/mentor-neeraj.png"
    },
    {
      name: "Arjun M.S",
      role: "AI solution Architect",
      experience: "13 Years of Experience",
      image: "./assets/mentor-arjun.png"
    },
    {
      name: "Midhun G S",
      role: "Technical Architect",
      experience: "13 Years of Experience",
      image: "./assets/mentor-midhun.png"
    }
  ];

  return (
    <section className="mentors-section" id="mentors">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill mentors-badge">
            Meet the team
          </div>
          <h2 className="mentors-title">Meet our Mentors</h2>
          <p className="mentors-desc">
            We are all aware of the fact that getting an Engineering degree from a good college matters a lot, but the degree won’t hold much of a value if you are not able to apply the knowledge.
          </p>
        </div>

        <div className="mentors-grid">
          {mentors.map((m, idx) => (
            <div key={idx} className="mentor-card">
              {/* Solid orange rounded background card */}
              <div className="mentor-orange-bg" />
              
              {/* Cutout portrait extending above the orange box */}
              <div className="mentor-portrait-wrap">
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="mentor-portrait-img"
                  loading="lazy" 
                />
              </div>

              {/* Floating white information badge */}
              <div className="mentor-info-floating">
                <h3 className="mentor-name">{m.name}</h3>
                <div className="mentor-role">{m.role}</div>
                <div className="mentor-exp">{m.experience}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

