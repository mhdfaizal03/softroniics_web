import React from 'react';
import { Smile, Users, Globe, Handshake } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Smile size={28} />,
      number: "3M",
      label: "full-time depth",
      iconBg: "#E8DDFB",
      iconColor: "#9333EA"
    },
    {
      icon: <Users size={28} />,
      number: "36+",
      label: "Live build sessions",
      iconBg: "#FEE2E2",
      iconColor: "#DC2626"
    },
    {
      icon: <Globe size={28} />,
      number: "4x",
      label: "Days per week",
      iconBg: "#DBEAFE",
      iconColor: "#2563EB"
    },
    {
      icon: <Handshake size={28} />,
      number: "100%",
      label: "Project-based, no filler",
      iconBg: "#FFFFFF",
      iconColor: "#E88F1B"
    }
  ];

  return (
    <section className="stats-bar" aria-label="Program Highlights and Numbers">
      <div className="container-wide">
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-item">
              <div 
                className="stat-icon-circle"
                style={{ backgroundColor: s.iconBg, color: s.iconColor }}
              >
                {s.icon}
              </div>
              <div className="stat-content">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
