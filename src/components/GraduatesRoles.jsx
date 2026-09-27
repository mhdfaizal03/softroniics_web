import React from 'react';

export default function GraduatesRoles() {
  const roles = [
    {
      title: "AI Architect",
      img: "/assets/role-1.jpg"
    },
    {
      title: "AI Consultant",
      img: "/assets/role-2.jpg"
    },
    {
      title: "AI Platform Engineer",
      img: "/assets/role-3.jpg"
    },
    {
      title: "Enterprise AI Engineer",
      img: "/assets/role-4.jpg"
    },
    {
      title: "Staff / Lead Applied AI Engineer",
      img: "/assets/role-5.jpg"
    }
  ];

  return (
    <section className="roles-section" id="roles">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            Career outcomes
          </div>
          <h2>Where Our Graduates Work</h2>
          <p>
            The program is scoped around five roles that experienced engineers move into after building production AI systems end to end.
          </p>
        </div>

        <div className="roles-grid">
          {roles.map((role, idx) => (
            <div key={idx} className="role-card">
              <div className="role-img-wrap">
                <img src={role.img} alt={role.title} />
              </div>
              <div className="role-card-body">
                <div className="role-badges-row">
                  <span className="badge-tag-pill cyan">Premium</span>
                  <span className="badge-tag-pill pink">All Levels</span>
                </div>
                <h3 className="role-card-title">{role.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
