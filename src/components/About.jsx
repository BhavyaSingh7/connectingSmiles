import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/About.css";

const team = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in social work, Jane leads our mission to transform communities through education and healthcare."
  },
  {
    name: "Emily Lee",
    role: "Founder & CEO",
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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

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
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-content" data-aos="fade-down">
          <h1>About Connecting Smiles</h1>
          <p>
            At Connecting Smiles Foundation, we empower lives through education, healthcare, hunger relief, and community-driven programs.
            Since 2021, we’ve been creating lasting positive change in underserved communities—connecting smiles that build brighter futures.
          </p>
          <div className="hero-stats">
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
              <h3>10,000+</h3>
              <p>Lives Impacted</p>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
              <h3>50+</h3>
              <p>Communities Served</p>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
              <h3>15+</h3>
              <p>Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container mission-content">
          <div className="text-block" data-aos="fade-right">
            <h2>Our Mission</h2>
            <p>
              Our mission is to uplift underprivileged communities—especially women and children—through access to quality education, skill development training, and essential health services.
              We address immediate needs like hunger while creating long-term opportunities for growth.
              By fostering self-reliance, we help individuals and families break the cycle of poverty.
              We strive to create sustainable pathways to prosperity and well-being.
            </p>
          </div>
          <div className="text-block" data-aos="fade-left">
            <h2>Our Vision</h2>
            <p>
              We envision a world where every person, regardless of background or circumstance, has the resources and opportunities they need to thrive.
              A future where education is universal and healthcare is accessible to all.
              Where communities are empowered to drive their own development.
              Where every smile tells a story of hope, dignity, and possibility.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container story-content">
          <div className="text-block" data-aos="fade-up">
            <h2>Our Story</h2>
            <p>
              Connecting Smiles Foundation was founded in 2021 with a simple belief—that hunger, lack of education, and limited access to healthcare should never define a person’s future.
              It began with small food drives, feeding those in need during times of crisis.
              But we soon realized that true change requires more than charity—it requires empowerment.
              So we expanded into education programs, skill development workshops, and healthcare initiatives.
              Our work began focusing on women and children, creating opportunities for them to lead self-reliant lives.
              Every initiative we take is aligned with the UN Sustainable Development Goals, ensuring lasting global impact.
            </p>
            <p>
              We partner closely with local communities, listening to their needs and building solutions together.
              From classrooms to clinics, from kitchens to skill labs—we are there, connecting hope with action.
              We believe dignity is as important as development.
              And every day, we keep connecting more smiles, one life at a time.
            </p>
          </div>
          <div className="img-block" data-aos="zoom-in">
            <img src="/cs-1.jpeg" alt="Our journey" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section" data-aos="fade-up">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" data-aos="fade-up">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our dedicated team of professionals and volunteers work tirelessly to make our mission a reality.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
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
      <section className="impact-section" data-aos="fade-right">
        <div className="container impact-content">
          <div className="text-block" data-aos="fade-up">
            <h2>Our Impact</h2>
            <p>
              Through our various programs, we've been able to create meaningful change in the lives
              of thousands of individuals and families. From providing quality education to children
              who might otherwise go without, to offering healthcare services in underserved areas,
              our impact extends far beyond numbers.
            </p>
            <div className="impact-highlights">
              <div className="highlight" data-aos="fade-right" data-aos-delay="100">
                <h4>Education Programs</h4>
                <p>5,000+ children provided with quality education and learning materials</p>
              </div>
              <div className="highlight" data-aos="fade-right" data-aos-delay="200">
                <h4>Healthcare Services</h4>
                <p>3,000+ individuals received essential healthcare services and wellness programs</p>
              </div>
              <div className="highlight" data-aos="fade-right" data-aos-delay="300">
                <h4>Women's Empowerment</h4>
                <p>1,500+ women trained in vocational skills and entrepreneurship</p>
              </div>
            </div>
          </div>
          <div className="img-block" data-aos="zoom-in">
            <img src="/cs-2a.jpeg" alt="Our impact" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta" data-aos="fade-up">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>
            Together, we can create a world where every smile tells a story of hope, opportunity, and transformation.
            Your support helps us continue our work and expand our reach to even more communities in need.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleDonate} data-aos="zoom-in">
              Donate Now
            </button>
            <button className="cta-btn secondary" onClick={handleVolunteer} data-aos="zoom-in" data-aos-delay="100">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
