


// import React from "react";
// import { Link } from "react-router-dom";
// import "./../styles/ClientDashboard.css";

// const ClientDashboard = () => {
//   return (
//     <div className="client-dashboard">
//       <header className="dashboard-header">
//         <h1 className="logo">FREELANCEHUB</h1>
//         <Link to="/" className="home-button">Home</Link>
//       </header>
      
//       {/* Job Post Management Section */}
//       <div className="job-management">
//         <h3>Manage Your Job Posts</h3>
//         <Link to="/manage-applications" className="btn btn-manage-jobs">
//           Manage Applications
//         </Link>
//         <Link to="/post-job" className="btn btn-post-job">
//           Post a New Job
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default ClientDashboard;















import React from "react";
import { Link } from "react-router-dom";
import "./../styles/ClientDashboard.css";

const ClientDashboard = () => {
  return (
    <div className="client-dashboard">
      <header className="dashboard-header">
        <h1 className="logo">FREELANCEHUB</h1>
        <Link to="/" className="home-button">Home</Link>
      </header>
      
      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-title">Welcome to Your Dashboard!</h2>
        <p className="hero-description">
          Manage your job posts, track applications, and hire the best freelancers
          for your projects. Get started by posting a new job or managing your existing
          applications.
        </p>
      </section>
      
      {/* Job Post Management Section */}
      <div className="job-management">
        <h3>Manage Your Job Posts</h3>
        <div className="management-cards">
          <Link to="/manage-applications" className="btn btn-manage-jobs">
            <span className="icon">&#128179;</span> Manage Applications
          </Link>
          <Link to="/post-job" className="btn btn-post-job">
            <span className="icon">&#9997;</span> Post a New Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
