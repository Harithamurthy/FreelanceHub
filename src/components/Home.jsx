



import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="logo">FREELANCEHUB</div>
        <div className="header-nav">
          <Link to="/" className="btn header-btn">Home</Link>
        
          <Link to="/aboutUs" className="btn header-btn">About Us</Link>
        </div>
        <div className="header-buttons">
          <Link to="/login" className="btn header-btn">Login</Link>
          <Link to="/signup" className="btn header-btn">Signup</Link>
          
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="home-main">
        <div className="hero">
          <h1>Find the Right Talent or Opportunity</h1>
          <p>FreelanceHub connects freelancers and clients with opportunities that bring visions to life.</p>
          <div className="cta-buttons">
            <Link to="/signup" className="cta-btn">Get Started</Link>
            <Link to="/about" className="cta-btn secondary">Learn More</Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2025 FreelanceHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
