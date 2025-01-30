import React, { useState } from "react";
import "./../styles/ManageApplications.css";

const ManageApplications = () => {
  // Mock applications data
  const [applications, setApplications] = useState([
    {
      id: 1,
      freelancer: "John Doe",
      jobTitle: "Web Development",
      coverLetter: "I am experienced in React and Node.js...",
      status: "Pending",
    },
    {
      id: 2,
      freelancer: "Jane Smith",
      jobTitle: "Graphic Design",
      coverLetter: "I specialize in branding and logo design...",
      status: "Pending",
    },
  ]);

  const handleApplicationAction = (id, action) => {
    const updatedApplications = applications.map((app) =>
      app.id === id ? { ...app, status: action } : app
    );
    setApplications(updatedApplications);
  };

  return (
    <div className="manage-applications-container">
      <h2 className="manage-applications-title">Manage Applications</h2>
      <div className="applications-list">
        {applications.map((application) => (
          <div key={application.id} className="application-card">
            <h3 className="application-job-title">{application.jobTitle}</h3>
            <p className="application-freelancer">
              Freelancer: {application.freelancer}
            </p>
            <p className="application-cover-letter">
              Cover Letter: {application.coverLetter}
            </p>
            <p className={`application-status ${application.status.toLowerCase()}`}>
              Status: {application.status}
            </p>
            <div className="application-actions">
              <button
                className="btn accept-btn"
                onClick={() => handleApplicationAction(application.id, "Accepted")}
              >
                Accept
              </button>
              <button
                className="btn reject-btn"
                onClick={() => handleApplicationAction(application.id, "Rejected")}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageApplications;

