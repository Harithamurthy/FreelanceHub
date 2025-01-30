
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/FreelancerCongratulations.css";

const FreelancerCongratulations = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="congratulations-container">
      <header className="freelancehub-header">
        <h1>FREELANCEHUB</h1>
        <button onClick={goToHome} className="home-button">
          Home
        </button>
      </header>

      <h2>Congratulations!</h2>
      <p>Your profile has been successfully created.</p>

      {/* Profile Summary */}
      <div className="profile-summary">
        <h3>Profile Summary:</h3>
        <div className="profile-details">
          <img src="/images/profile-placeholder.png" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <p><strong>Name:</strong> </p>
            <p><strong>Experience:</strong> </p>
            <p><strong>Skills:</strong> </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="next-steps">
        <h3>What’s Next?</h3>
        <ul>
          <li>Browse jobs that match your skills.</li>
          <li>Update your profile to showcase more details.</li>
          <li>Start applying to jobs that interest you!</li>
        </ul>
      </div>

      {/* Options */}
      <div className="options">
        <Link to="/browse-jobs" className="btn">
          Browse Jobs
        </Link>

        <Link to="/view-my-applications" className="btn">
          View My Applications
        </Link>

        <Link to="/freelancer-create-profile" className="btn">
          Update Profile
        </Link>
      </div>

      {/* Celebrate! */}
      <div className="celebration-message">
        <h4>Start your journey now and land your dream job!</h4>
        <div className="celebration-icon">
          <img src="/images/confetti.gif" alt="Confetti Celebration" className="celebration-gif" />
        </div>
      </div>
    </div>
  );
};

export default FreelancerCongratulations;
