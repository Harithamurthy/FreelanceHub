import React from "react";
import { Link } from "react-router-dom";
import "./../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Header */}
      <header className="aboutus-header">
        <div className="logo">FREELANCEHUB</div>
        <nav className="aboutus-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link">Get Started</Link>
        </nav>
      </header>

      {/* About Us Content */}
      <main className="aboutus-main">
        <section className="about-section">
          <h1>About FreelanceHub</h1>
          <p>
            FreelanceHub is a platform designed to connect talented freelancers with clients looking for quality work. 
            Whether you're a freelancer seeking opportunities or a business in need of expert services, we provide a seamless experience to help you succeed.
          </p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower freelancers by providing a fair and efficient marketplace while helping businesses find the best talent for their needs.
          </p>
        </section>

        <section className="features-section">
          <h2>Why Choose FreelanceHub?</h2>
          <div className="features-list">
            <div className="feature-card">
              <h3>For Freelancers</h3>
              <p>✔️ Find jobs that match your skills</p>
              <p>✔️ Set your own rates</p>
              <p>✔️ Secure payments and contracts</p>
            </div>
            <div className="feature-card">
              <h3>For Clients</h3>
              <p>✔️ Hire skilled professionals easily</p>
              <p>✔️ Post job listings quickly</p>
              <p>✔️ Manage projects seamlessly</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Join Us Today!</h2>
          <p>Start your freelancing journey or find the right talent for your project.</p>
          <Link to="/signup" className="btn">Get Started</Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="aboutus-footer">
        <p>&copy; 2025 FreelanceHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
