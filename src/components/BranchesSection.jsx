import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BranchesSection() {
  const branches = [
    {
      city: "Calicut",
      name: "Softroniics",
      addressLines: [
        "Ground Floor, Maniyattukudi",
        "Asfa Building, Mavoor Road",
        "Calicut, Kerala"
      ],
      phone: "+91 6238752003",
      email: "info@softroniics.com"
    },
    {
      city: "Perinthalmanna",
      name: "Softroniics",
      addressLines: [
        "4th Floor,Qatar Tower",
        "Chanthully Padam, Angadipuram",
        "Perinthalmanna, Malappuram"
      ],
      phone: "+91 9037291113",
      email: "info@softroniics.com"
    },
    {
      city: "Palakkad",
      name: "Softroniics",
      addressLines: [
        "2nd Floor, Vinayaka Building",
        "Vellan Street, Sulthanpet",
        "Near karur vysya Bank, Palakkad"
      ],
      phone: "+91 7907435072",
      email: "info@softroniics.com"
    },
    {
      city: "Kochi",
      name: "Softroniics",
      addressLines: [
        "Chiyezhath Tower",
        "Mahatma Gandhi Rd",
        "Padma Junction, North Kaloor",
        "Kacheripady, Kochi, Ernakulam",
        "Kerala 682035"
      ],
      phone: "+91 99951 25959",
      email: "info@softroniics.com"
    }
  ];

  return (
    <section className="branches-section" id="branches">
      <div className="container">
        <div className="branches-container-card">
          <h3 className="branches-title">Our branches</h3>

          <div className="branches-grid">
            {branches.map((b, idx) => (
              <div key={idx} className="branch-col">
                <h4 className="branch-city-name">{b.city}</h4>
                <a href="#branches" className="branch-link-name">
                  <span>{b.name}</span>
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </a>
                <div className="branch-address-box">
                  {b.addressLines.map((line, lIdx) => (
                    <span key={lIdx} className="branch-address-line">{line}</span>
                  ))}
                </div>
                <a href={`tel:${b.phone.replace(/\s+/g, '')}`} className="branch-phone">
                  {b.phone}
                </a>
                <a href={`mailto:${b.email}`} className="branch-email">
                  {b.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
