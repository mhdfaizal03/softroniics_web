import React from 'react';
import { Clock, Code2, CalendarCheck, CheckCircle2 } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Clock size={24} strokeWidth={2.2} />,
      number: "3M",
      label: "full-time depth"
    },
    {
      icon: <Code2 size={24} strokeWidth={2.2} />,
      number: "36+",
      label: "Live build sessions"
    },
    {
      icon: <CalendarCheck size={24} strokeWidth={2.2} />,
      number: "4x",
      label: "Days per week"
    },
    {
      icon: <CheckCircle2 size={24} strokeWidth={2.2} />,
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
