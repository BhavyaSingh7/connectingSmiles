import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./css/About.css";

const team = [
  { 
    name: "Jane Doe", 
    role: "Founder & CEO",
    bio: "With over 15 years of experience in social work, Jane leads our mission to transform communities through education and healthcare."
  },
  { 
    name: "John Smith", 
    role: "Program Director",
    bio: "John oversees our educational programs and community outreach initiatives, bringing innovative solutions to complex social challenges."
  },
  { 
    name: "Emily Lee", 
    role: "Education Lead",
    bio: "Emily develops and implements our educational curricula, ensuring quality learning experiences for all beneficiaries."
  },
];

const values = [
  {
    title: "Compassion",
    description: "We approach every interaction with empathy and understanding, recognizing the dignity and worth of every individual.",
    icon: "💝"
  },
  {
    title: "Empowerment",
    description: "We believe in equipping people with the tools, knowledge, and confidence to create positive change in their own lives.",
    icon: "⚡"
  },
  {
    title: "Community",
    description: "We work hand-in-hand with local communities, fostering collaboration and sustainable development.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "We embrace creative solutions and modern approaches to address traditional challenges in new ways.",
    icon: "💡"
  }
];

const About = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate("/donateNow");
  };

  const handleVolunteer = () => {
    navigate("/contactus");
  };

  return (
    <div className="about-page">
      <Header />
    
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>About Connecting Smiles</h1>
        <p>
          At Connecting Smiles Foundation, we empower lives through education, healthcare,
          and community-driven programs. We believe in smiles that build futures and create
          lasting positive change in underserved communities.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Communities Served</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years of Service</p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="mission-section">
      <div className="container">
        <div className="mission-content">
          <div className="text-block">
            <h2>Our Mission</h2>
            <p>
              Our mission is to uplift underprivileged communities – especially women and children –
              through access to quality education, skill development training, and essential health services.
              We strive to create sustainable pathways to prosperity and well-being.
            </p>
          </div>
          <div className="text-block">
            <h2>Our Vision</h2>
            <p>
              We envision a world where every person, regardless of their background or circumstances,
              has access to the resources and opportunities they need to thrive. A world where education
              is universal, healthcare is accessible, and communities are empowered to drive their own development.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="story-section">
      <div className="container">
        <div className="story-content">
          <div className="text-block">
            <h2>Our Story</h2>
            <p>
              Founded in 2009, Connecting Smiles began as a small initiative to provide educational
              support to children in rural communities. What started as a modest effort to brighten
              a few smiles has grown into a comprehensive foundation touching thousands of lives.
            </p>
            <p>
              Over the years, we've expanded our reach to include healthcare services, women's
              empowerment programs, and sustainable development initiatives. Each program is designed
              with the community's unique needs in mind, ensuring our impact is both meaningful and lasting.
            </p>
          </div>
          <div className="img-block">
            <img src="/cs-1.jpeg" alt="Our journey" />
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="values-section">
      <div className="container">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <p className="team-intro">
          Our dedicated team of professionals and volunteers work tirelessly to make our mission a reality.
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                <img src={`/cs-${index + 1}.jpeg`} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact Section */}
    <section className="impact-section">
      <div className="container">
        <div className="impact-content">
          <div className="text-block">
            <h2>Our Impact</h2>
            <p>
              Through our various programs, we've been able to create meaningful change in the lives
              of thousands of individuals and families. From providing quality education to children
              who might otherwise go without, to offering healthcare services in underserved areas,
              our impact extends far beyond numbers.
            </p>
            <div className="impact-highlights">
              <div className="highlight">
                <h4>Education Programs</h4>
                <p>5,000+ children provided with quality education and learning materials</p>
              </div>
              <div className="highlight">
                <h4>Healthcare Services</h4>
                <p>3,000+ individuals received essential healthcare services and wellness programs</p>
              </div>
              <div className="highlight">
                <h4>Women's Empowerment</h4>
                <p>1,500+ women trained in vocational skills and entrepreneurship</p>
              </div>
            </div>
          </div>
          <div className="img-block">
            <img src="/cs-2a.jpeg" alt="Our impact" />
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="about-cta">
      <div className="container">
        <h2>Join Our Mission</h2>
        <p>
          Together, we can create a world where every smile tells a story of hope, opportunity, and transformation.
          Your support helps us continue our work and expand our reach to even more communities in need.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary" onClick={handleDonate}>Donate Now</button>
          <button className="cta-btn secondary" onClick={handleVolunteer}>Volunteer With Us</button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default About;
