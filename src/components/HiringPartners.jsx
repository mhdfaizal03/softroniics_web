import React from 'react';

export default function HiringPartners() {
  const partnerRows = [
    [
      { name: "Tata Consultancy Services (TCS)", logo: "/company-images/tata-consultancy-services-logo-tcs.png", scale: "0.95" },
      { name: "Cognizant", logo: "/company-images/COG-Logo-2022-1.svg", scale: "1.0" },
      { name: "Speridian Technologies", logo: "/company-images/speridian-cropped.png", scale: "1.0" },
      { name: "Posibolt Solutions", logo: "/company-images/posibolt-horizontal.svg", scale: "1.0" }
    ],
    [
      { name: "Cybrosys Technologies", logo: "/company-images/cybrosis-horizontal.svg", scale: "1.0" },
      { name: "Aufait Technologies", logo: "/company-images/aufait-logo.svg", scale: "0.95" },
      { name: "2Base Technologies", logo: "/company-images/2Base-logo.svg", scale: "0.95" },
      { name: "Nucore Software Solutions", logo: "/company-images/nucore-Logo.png", scale: "0.82" }
    ],
    [
      { name: "Broroots", logo: "/company-images/broroots-logo.webp", scale: "0.92" },
      { name: "Infython Technologies", logo: "/company-images/infython-logo.webp", scale: "1.0" },
      { name: "Invigo Software", logo: "/company-images/invigo-logo.png", scale: "0.95" },
      { name: "Iocod Infotech", logo: "/company-images/iocod-logo-black.webp", scale: "1.0" }
    ],
    [
      { name: "Kaizen Global", logo: "/company-images/kaizen-logo.png", scale: "0.85" },
      { name: "Niveosys Technologies", logo: "/company-images/niveosys-logo.png", scale: "0.95" },
      { name: "NUOX Technologies", logo: "/company-images/nuox-fill.png", scale: "0.78" },
      { name: "Delemon Technologies", logo: "/company-images/delemon-official.png", scale: "0.92" }
    ],
    [
      { name: "Appletlogic", logo: "/company-images/appletlogic-logo-cropped.png", scale: "0.95" },
      { name: "Perfect Solutions", logo: "/company-images/logo-perfect.png", scale: "0.9" },
      { name: "Technologica", logo: "/company-images/technologica-logo-1.png", scale: "0.9" },
      { name: "Zecser Technologies", logo: "/company-images/zecser-clean.png", scale: "0.95" }
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
                <div key={idx} className="partner-logo-item" title={p.name}>
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    loading="lazy" 
                    style={{ '--logo-scale': p.scale || 1 }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
