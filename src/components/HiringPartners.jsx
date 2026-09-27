import React from 'react';

export default function HiringPartners() {
  const partnerRows = [
    [
      { name: "Don Bosco Group", logo: "/assets/exact-partner-1.png" },
      { name: "LearnAbout Edutech", logo: "/assets/exact-partner-2.png" },
      { name: "sysol SYSTEM SOLUTIONS", logo: "/assets/exact-partner-3.png" },
      { name: "Edutech E-Learning", logo: "/assets/exact-partner-4.png" }
    ],
    [
      { name: "GJ GLOBAL IT VENTURES", logo: "/assets/exact-partner-5.png" },
      { name: "NME", logo: "/assets/exact-partner-6.png" },
      { name: "exaware Software Innovation", logo: "/assets/exact-partner-7.png" },
      { name: "edutech", logo: "/assets/exact-partner-8.png" }
    ],
    [
      { name: "Don Bosco Group", logo: "/assets/exact-partner-1.png" },
      { name: "LearnAbout Edutech", logo: "/assets/exact-partner-2.png" },
      { name: "sysol SYSTEM SOLUTIONS", logo: "/assets/exact-partner-3.png" },
      { name: "Edutech E-Learning", logo: "/assets/exact-partner-4.png" }
    ],
    [
      { name: "GJ GLOBAL IT VENTURES", logo: "/assets/exact-partner-5.png" },
      { name: "NME", logo: "/assets/exact-partner-6.png" },
      { name: "exaware Software Innovation", logo: "/assets/exact-partner-7.png" },
      { name: "edutech", logo: "/assets/exact-partner-8.png" }
    ]
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill partners-badge">
            Our trainers
          </div>
          <h2 className="partners-title">Companies Our Graduates Have Joined</h2>
          <p className="partners-desc">
            Softroniics has a diverse range of global hiring partners across various industries. Our graduates have been placed in top-tier companies, and our continuous partnerships provide better career opportunities for our students.
          </p>
        </div>

        <div className="partners-rows-container">
          {partnerRows.map((row, rowIdx) => (
            <div key={rowIdx} className="partners-row">
              {row.map((p, idx) => (
                <div key={idx} className="partner-logo-item">
                  <img src={p.logo} alt={p.name} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

