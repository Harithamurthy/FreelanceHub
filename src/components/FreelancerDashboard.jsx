


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./../styles/FreelancerDashboard.css";

// const FreelancerDashboard = () => {
//   const navigate = useNavigate();

//   const handleCreateProfile = () => {
//     navigate("/freelancer-create-profile");
//   };

//   const handleViewJobs = () => {
//     navigate("/browse-jobs");
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome to Your Freelancer Dashboard</h2>

//       <div className="profile-progress">
//         <h3>Profile Completion</h3>
//         <div className="progress-bar">
//           <div className="progress" style={{ width: "40%" }}></div>
//         </div>
//         <p>40% Complete - Add more details to your profile!</p>
//         <button onClick={handleCreateProfile} className="btn">
//           Complete Profile
//         </button>
//       </div>

//       <div className="job-recommendations">
//         <h3>Job Recommendations</h3>
//         <ul>
//           <li>
//             <h4>Frontend Developer</h4>
//             <p>Company: ABC Corp</p>
//             <p>Pay: $50/hr</p>
//             <button className="btn" onClick={handleViewJobs}>
//               View Job
//             </button>
//           </li>
//           <li>
//             <h4>Data Analyst</h4>
//             <p>Company: DataCo</p>
//             <p>Pay: $30/hr</p>
//             <button className="btn" onClick={handleViewJobs}>
//               View Job
//             </button>
//           </li>
//         </ul>
//       </div>

//       <div className="earnings-summary">
//         <h3>Earnings Summary</h3>
//         <p>Total Earnings: $0</p>
//         <p>Pending Payments: $0</p>
//       </div>

//       <div className="quick-links">
//         <h3>Quick Links</h3>
//         <ul>
//           <li>
//             <button onClick={handleCreateProfile} className="btn">
//               Edit Profile
//             </button>
//           </li>
//           <li>
//             <button onClick={handleViewJobs} className="btn">
//               BrowseJobs
//             </button>
//           </li>
//           <li>
//             <button className="btn">View Applied Jobs</button>
//           </li>
//           <li>
//             <button className="btn">Notifications</button>
//           </li>
//         </ul>
//       </div>

//       <div className="tips-section">
//         <h3>Tips for Success</h3>
//         <ul>
//           <li>Boost your profile visibility by adding certifications.</li>
//           <li>Apply for jobs that match your skills and experience.</li>
//           <li>Respond promptly to job invitations.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FreelancerDashboard;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/FreelancerDashboard.css";

const FreelancerDashboard = () => {
  const navigate = useNavigate();
  const [isProfileCreated, setIsProfileCreated] = useState(false); // State to track if the profile is created

  const handleCreateProfile = () => {
    navigate("/freelancer-create-profile");
  };

  const handleViewJobs = () => {
    if (!isProfileCreated) {
      alert("Please complete your profile before viewing jobs.");
    } else {
      navigate("/browse-jobs");
    }
  };

  const handleViewProfile = () => {
    navigate("/freelancer-profile"); // Redirect to the profile details page
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">FREELANCEHUB</div>
        <div className="header-nav">
          <button onClick={() => navigate("/")} className="btn header-btn">
            Home
          </button>
          {isProfileCreated && (
            <button onClick={handleViewProfile} className="btn header-btn">
              Profile
            </button>
          )}
        </div>
      </header>

      <h2>Welcome to Your Freelancer Dashboard</h2>

      {/* Job Recommendations */}
      <div className="job-recommendations">
        <h3>Job Recommendations</h3>
        <ul>
          <li>
            <h4>Frontend Developer</h4>
            <p>Company: ABC Corp</p>
            <p>Pay: $50/hr</p>
            <button className="btn" onClick={handleViewJobs}>
              View Job
            </button>
          </li>
          <li>
            <h4>Data Analyst</h4>
            <p>Company: DataCo</p>
            <p>Pay: $30/hr</p>
            <button className="btn" onClick={handleViewJobs}>
              View Job
            </button>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          {!isProfileCreated && (
            <li>
              <button onClick={handleCreateProfile} className="btn">
                Complete Profile
              </button>
            </li>
          )}
          <li>
            <button onClick={handleViewJobs} className="btn">
              Browse Jobs
            </button>
          </li>
        </ul>
      </div>

      {/* Tips Section */}
      <div className="tips-section">
        <h3>Tips for Success</h3>
        <ul>
          <li>Boost your profile visibility by adding certifications.</li>
          <li>Apply for jobs that match your skills and experience.</li>
          <li>Respond promptly to job invitations.</li>
        </ul>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
