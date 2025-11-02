import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Zap, Users, Lightbulb, Target, Eye, TrendingUp, Award } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/About.css";

const values = [
  {
    title: "Compassion",
    description: "Empathy and understanding drive every interaction, recognizing the dignity of every individual.",
    icon: Heart,
    color: "#FF6B6B"
  },
  {
    title: "Empowerment",
    description: "Equipping people with tools, knowledge, and confidence to create positive change.",
    icon: Zap,
    color: "#FFBF00"
  },
  {
    title: "Community",
    description: "Working hand-in-hand with local communities for sustainable development.",
    icon: Users,
    color: "#4ECDC4"
  },
  {
    title: "Innovation",
    description: "Embracing creative solutions and modern approaches to address challenges.",
    icon: Lightbulb,
    color: "#95E1D3"
  }
];

const impactStats = [
  { number: "10,000+", label: "Lives Impacted", icon: Users },
  { number: "5,000+", label: "Children Educated", icon: Award },
  { number: "1,500+", label: "Women Empowered", icon: TrendingUp },
  { number: "50+", label: "Communities Served", icon: Target }
];

const About = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    window.open("https://connecting-smiles-foundation.danamojo.org/", "_blank", "noopener,noreferrer");
  };

  const handleVolunteer = () => {
    navigate("/contactus");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>About Connecting Smiles</h1>
          <p>
            Connecting Smiles Foundation is an India-based non-profit working towards zero hunger and sustainable 
            employability. We align with UN Sustainable Development Goals to improve the lives of vulnerable and 
            economically disadvantaged communities through education, healthcare, and empowerment.
          </p>
        </motion.div>
      </motion.section>

      {/* Impact Stats */}
      <section className="impact-stats-section">
        <div className="container">
          <motion.div
            className="impact-stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="impact-stat-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="stat-icon">
                    <IconComponent size={32} color="#FFBF00" />
            </div>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Combined */}
      <section className="mission-vision-section">
        <div className="container">
          <motion.div
            className="mission-vision-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="mission-block" variants={itemVariants}>
              <div className="block-icon">
                <Target size={40} color="#FFBF00" />
              </div>
            <h2>Our Mission</h2>
            <p>
                To uplift underprivileged communities—especially women and children—through quality education, 
                skill development, and essential healthcare. We address immediate needs while creating sustainable 
                pathways to break the cycle of poverty.
              </p>
            </motion.div>
            <motion.div className="vision-block" variants={itemVariants}>
              <div className="block-icon">
                <Eye size={40} color="#FFBF00" />
          </div>
            <h2>Our Vision</h2>
            <p>
                A world where every person has access to education, healthcare, and opportunities to thrive. 
                We envision empowered communities driving their own development, where every smile tells a story 
                of hope, dignity, and possibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Condensed */}
      <section className="story-section">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="story-text">
            <h2>Our Story</h2>
            <p>
                Founded in 2021, Connecting Smiles began with food drives to address hunger during crises. 
                We quickly realized that true change requires empowerment, not just charity. Today, we've expanded 
                into education programs, skill development workshops, and healthcare initiatives focused on women 
                and children. Partnering closely with local communities, we build solutions together—from 
                classrooms to clinics, connecting hope with action, one life at a time.
            </p>
          </div>
            <motion.div
              className="story-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}cs-1.jpeg`} 
                alt="Connecting Smiles Foundation team working together on community projects" 
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
          <h2>Our Core Values</h2>
            <p>Principles that guide everything we do</p>
          </motion.div>
          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                key={index}
                className="value-card"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
              >
                  <div className="value-icon" style={{ backgroundColor: `${value.color}15` }}>
                    <IconComponent size={32} color={value.color} />
                  </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>
            Together, we can create transformative change. Your support helps us expand our reach and 
            impact more communities in need.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="cta-btn primary"
              onClick={handleDonate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
            <motion.button
              className="cta-btn secondary"
              onClick={handleVolunteer}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer With Us
            </motion.button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
