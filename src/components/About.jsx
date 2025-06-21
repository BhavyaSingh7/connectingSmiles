import React from "react";
import "./css/About.css";

const team = [
  { name: "Jane Doe", role: "Founder" },
  { name: "John Smith", role: "Program Director" },
  { name: "Emily Lee", role: "Education Lead" },
];

const About = () => (
  <div className="about-page">
    {/* Hero */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>About Connecting Smiles</h1>
        <p>
          At Connecting Smiles Foundation, we empower lives through education, healthcare,
          and community-driven programs. We believe in smiles that build futures.
        </p>
      </div>
    </section>

    {/* Mission & Story */}
    <section className="mission-section">
      <div className="text-block">
        <h2>Our Mission</h2>
        <p>
          Our mission is to uplift underprivileged communities – especially women and children –
          through access to education, skill training, and health services.
        </p>
      </div>
{/*       <div className="img-block"> */}
{/*         <img src={missionImg} alt="Our Mission" /> */}
{/*       </div> */}
    </section>

    {/* Team */}
    <section className="team-section">
      <h2>Meet The Team</h2>
      <div className="team-grid">
        {team.map((m, i) => (
          <div key={i} className="team-card">
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="about-cta">
      <h2>Want to support our mission?</h2>
      <button className="cta-btn">Donate Now</button>
    </section>
  </div>
);

export default About;
