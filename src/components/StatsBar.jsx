import React from 'react';
import { Smile, Users, Globe, Handshake } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Smile size={28} />,
      number: "3M",
      label: "full-time depth"
    },
    {
      icon: <Users size={28} />,
      number: "36+",
      label: "Live build sessions"
    },
    {
      icon: <Globe size={28} />,
      number: "4x",
      label: "Days per week"
    },
    {
      icon: <Handshake size={28} />,
      number: "100%",
      label: "Project-based, no filler"
    }
  ];

  return (
    <section className="stats-bar" aria-label="Program Highlights and Numbers">
      <div className="container-wide">
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon-circle">
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
