import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaDirections } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Locations.css";

const locations = [
  {
    id: 1,
    name: "KR Puram",
    address: "#353, 2nd Cross, Kuvempu Nagar, Ramamurthy Nagar, Bangalore – 560016",
    phone: "+91 72047 40835",
    email: "info@connectingsmilesfoundation.org",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    coordinates: "12.9716,77.62766",
    description: "Our main office and primary service center located in the heart of KR Puram."
  },
  {
    id: 2,
    name: "Koramangala",
    address: "#204, 9th Main, 14th Cross, Rajendranagar, Vivek Nagar, Bangalore – 560047",
    phone: "+91 72047 40835",
    email: "info@connectingsmilesfoundation.org",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    coordinates: "12.9352,77.6245",
    description: "Our secondary office serving the Koramangala community with educational and healthcare programs."
  }
];

const services = [
  {
    icon: "📚",
    title: "Education Programs",
    description: "Quality education and skill development programs for children and adults in underserved communities."
  },
  {
    icon: "🏥",
    title: "Healthcare Services",
    description: "Essential healthcare services, wellness programs, and medical support for community members."
  },
  {
    icon: "👩‍💼",
    title: "Women's Empowerment",
    description: "Vocational training, entrepreneurship support, and skill development programs for women."
  },
  {
    icon: "🤝",
    title: "Community Outreach",
    description: "Community development initiatives, awareness programs, and social welfare activities."
  }
];

const Locations = () => {
  // IntersectionObserver for minimal scroll animations
  useEffect(() => {
    const nodes = document.querySelectorAll(".animate-on-scroll");
    if (!("IntersectionObserver" in window)) {
      // fallback: reveal all
      nodes.forEach((n) => n.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);

  const openGoogleMaps = (coordinates, name) => {
    const url = `https://www.google.com/maps?q=${coordinates}&z=15&t=m`;
    window.open(url, "_blank");
  };

  return (
    <div className="locations-page">
      <Header />

      {/* Hero Section */}
      <section className="locations-hero">
        <div
          className="hero-content animate-on-scroll"
          style={{ transitionDelay: "0ms" }}
        >
          <h1>Our Locations</h1>
          <p>
            Find us at our offices across Bangalore. We're here to serve our communities with education,
            healthcare, and compassion.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-main">
        <div className="container">
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="location-card animate-on-scroll"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="location-header">
                  <div className="location-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="location-title">
                    <h2>{location.name}</h2>
                    <p className="location-description">{location.description}</p>
                  </div>
                </div>

                <div className="location-details">
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="detail-content">
                      <h4>Address</h4>
                      <p>{location.address}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="detail-content">
                      <h4>Phone</h4>
                      <p>{location.phone}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaEnvelope />
                    </div>
                    <div className="detail-content">
                      <h4>Email</h4>
                      <p>{location.email}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaClock />
                    </div>
                    <div className="detail-content">
                      <h4>Working Hours</h4>
                      <p>{location.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="location-actions">
                  <button
                    className="directions-btn"
                    onClick={() => openGoogleMaps(location.coordinates, location.name)}
                    aria-label={`Get directions to ${location.name}`}
                  >
                    <FaDirections />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="animate-on-scroll" style={{ transitionDelay: "100ms" }}>
            Find Us on the Map
          </h2>
          <p className="map-subtitle animate-on-scroll" style={{ transitionDelay: "140ms" }}>
            Click on any location to get directions
          </p>
          <div className="map-container animate-on-scroll" style={{ transitionDelay: "180ms" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0859554227817!2d77.62766!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f2a8e3f5f7%3A0x1234567890abcdef!2sKR%20Puram%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Connecting Smiles Foundation Locations"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="animate-on-scroll" style={{ transitionDelay: "120ms" }}>
            Services at Our Locations
          </h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-item animate-on-scroll"
                style={{ transitionDelay: `${i * 80 + 160}ms` }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2 className="animate-on-scroll" style={{ transitionDelay: "180ms" }}>
            Need Help Finding Us?
          </h2>
          <p className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            If you need assistance locating our offices or have questions about our services, don't hesitate to reach out.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary animate-on-scroll" style={{ transitionDelay: "220ms" }}>
              Contact Us
            </button>
            <button className="cta-btn secondary animate-on-scroll" style={{ transitionDelay: "240ms" }}>
              Call Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
