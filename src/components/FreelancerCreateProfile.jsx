


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/FreelancerCreateProfile.css";

const FreelancerCreateProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    skills: "",
    certifications: "",
    portfolio: "",
    bio: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Created:", profile);
    navigate("/freelancer-congratulations");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="create-profile-page">
      <header className="freelancehub-header">
        <h1>FreelanceHub</h1>
        <button onClick={goToHome} className="home-button">
          Home
        </button>
      </header>
      <div className="create-profile-container">
        <h2>Create Your Freelancer Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="E.g., +1-234-567-890"
              required
            />
          </label>
          <label>
            Experience (Years):
            <input
              type="number"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Education:
            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleChange}
              placeholder="E.g., B.Sc in Computer Science"
            />
          </label>
          <label>
            Skills:
            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="E.g., JavaScript, React, Python"
              required
            />
          </label>
          <label>
            Certifications:
            <input
              type="text"
              name="certifications"
              value={profile.certifications}
              onChange={handleChange}
              placeholder="E.g., AWS Certified, PMP"
            />
          </label>
          <label>
            Portfolio Link:
            <input
              type="url"
              name="portfolio"
              value={profile.portfolio}
              onChange={handleChange}
              placeholder="E.g., https://yourportfolio.com"
            />
          </label>
          <label>
            Short Bio:
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Write a brief introduction about yourself..."
              rows="4"
            ></textarea>
          </label>
          <button type="submit" className="btn">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreelancerCreateProfile;
