// import React from "react";
// import { Link } from "react-router-dom";
// import "./../styles/Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="dashboard-container">
//         <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
//         <p className="dashboard-description">
//           Please select your role to proceed.
//         </p>
//         <div className="dashboard-buttons">
//           <Link to="/freelancer-dashboard" className="btn btn-freelancer">
//             Freelancer
//           </Link>
//           <Link to="/client-dashboard" className="btn btn-client">
//             Client
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./../styles/Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h1 className="logo">FreelanceHub</h1>
//       </header>
//       <div className="dashboard-container">
//         <h2 className="dashboard-title">Please Select Your Role</h2>
//         <div className="dashboard-content">
//           <div className="role-card">
//             <h3>I am a Client</h3>
//             <p>
//               As a client, you can post projects, review applications, and hire
//               the best freelancers to bring your ideas to life.
//             </p>
//             <Link to="/client-dashboard" className="btn btn-client">
//               Go to Client Dashboard
//             </Link>
//           </div>

//           <div className="role-card">
//             <h3>I am a Freelancer</h3>
//             <p>
//               As a freelancer, you can browse projects, apply to jobs, and work
//               with amazing clients to grow your career.
//             </p>
//             <Link to="/freelancer-dashboard" className="btn btn-freelancer">
//               Go to Freelancer Dashboard
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="logo">FreelanceHub</h1>
        {/* Add the Home button */}
        <Link to="/" className="btn btn-home">
          Home
        </Link>
      </header>
      <div className="dashboard-container">
        <h2 className="dashboard-title">Please Select Your Role</h2>
        <div className="dashboard-content">
          <div className="role-card">
            <h3>I am a Client</h3>
            <p>
              As a client, you can post projects, review applications, and hire
              the best freelancers to bring your ideas to life.
            </p>
            <Link to="/client-dashboard" className="btn btn-client">
              Go to Client Dashboard
            </Link>
          </div>

          <div className="role-card">
            <h3>I am a Freelancer</h3>
            <p>
              As a freelancer, you can browse projects, apply to jobs, and work
              with amazing clients to grow your career.
            </p>
            <Link to="/freelancer-dashboard" className="btn btn-freelancer">
              Go to Freelancer Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
