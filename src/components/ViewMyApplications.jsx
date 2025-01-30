

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ViewMyApplications = () => {
//   const navigate = useNavigate();

//   const applications = [
//     {
//       id: 1,
//       jobTitle: "Frontend Developer",
//       company: "Tech Solutions",
//       status: "Applied",
//       dateApplied: "2025-01-20",
//     },
//     {
//       id: 2,
//       jobTitle: "Backend Developer",
//       company: "DevWorks",
//       status: "Interview Scheduled",
//       dateApplied: "2025-01-18",
//     },
//     {
//       id: 3,
//       jobTitle: "Full Stack Developer",
//       company: "Innovative Tech",
//       status: "Rejected",
//       dateApplied: "2025-01-15",
//     },
//   ];

//   return (
//     <div className="applications-container">
//       {/* Header */}
//       <header className="applications-header">
//         <h1>FREELANCEHUB</h1>
//         <button className="home-button" onClick={() => navigate("/")}>
//           Home
//         </button>
//       </header>

//       <h2>My Applications</h2>

//       {applications.length > 0 ? (
//         <ul className="applications-list">
//           {applications.map((application) => (
//             <li className="application-card" key={application.id}>
//               <h3>{application.jobTitle}</h3>
//               <p>
//                 <strong>Company:</strong> {application.company}
//               </p>
//               <p>
//                 <strong>Status:</strong> {application.status}
//               </p>
//               <p>
//                 <strong>Date Applied:</strong> {application.dateApplied}
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="no-applications">You have no applications yet.</p>
//       )}
//     </div>
//   );
// };

// export default ViewMyApplications;








//working code
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewMyApplications = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]); // State for applications
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Get the token
        if (!token) {
          setError("No token found, please login again.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/applications/my-applications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setApplications(response.data); // Set fetched applications
      } catch (err) {
        console.error("Error fetching applications:", err);
        setError("Failed to load applications.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="applications-container">
      {/* Header */}
      <header className="applications-header">
        <h1>FREELANCEHUB</h1>
        <button className="home-button" onClick={() => navigate("/")}>
          Home
        </button>
      </header>

      <h2>My Applications</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : applications.length > 0 ? (
        <ul className="applications-list">
          {applications.map((application) => (
            <li className="application-card" key={application._id}>
              <h3>{application.jobTitle}</h3>
              <p>
                <strong>Company:</strong> {application.company}
              </p>
              <p>
                <strong>Status:</strong> {application.status}
              </p>
              <p>
                <strong>Date Applied:</strong> {new Date(application.dateApplied).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-applications">You have no applications yet.</p>
      )}
    </div>
  );
};

export default ViewMyApplications;
