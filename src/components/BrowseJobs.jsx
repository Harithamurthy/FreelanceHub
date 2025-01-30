// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./../styles/BrowseJobs.css";

// const BrowseJobs = () => {
//   const navigate = useNavigate();

//   const [jobs] = useState([
//     {
//       id: 1,
//       title: "Web Developer Needed",
//       description: "Looking for a skilled developer to build a responsive website.",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       budget: "$500 - $1000",
//       deadline: "2025-02-15",
//     },
//     {
//       id: 2,
//       title: "Graphic Designer for Logo Creation",
//       description: "Need a creative designer for a branding project.",
//       skills: ["Photoshop", "Illustrator"],
//       budget: "$200 - $400",
//       deadline: "2025-02-20",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [filterSkill, setFilterSkill] = useState("");

//   const handleApply = (jobId) => {
//     alert(`You have applied for job ID: ${jobId}`);
//   };

//   const handleViewApplications = () => {
//     navigate("/view-my-applications"); // Redirect to "ViewMyApplications" component
//   };

//   const filteredJobs = jobs.filter(
//     (job) =>
//       job.title.toLowerCase().includes(search.toLowerCase()) &&
//       (filterSkill === "" || job.skills.includes(filterSkill))
//   );

//   return (
//     <div className="browse-jobs-container">
//       {/* Header */}
//       <header className="browse-jobs-header">
//         <h1>FREELANCEHUB</h1>
//         <button className="home-button" onClick={() => navigate("/")}>
//           Home
//         </button>
//       </header>

//       <h2>Browse Jobs</h2>

//       {/* Search and Filter Section */}
//       <div className="search-filter">
//         <input
//           type="text"
//           placeholder="Search for jobs..."
//           className="search-input"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="filter-select"
//           value={filterSkill}
//           onChange={(e) => setFilterSkill(e.target.value)}
//         >
//           <option value="">Filter by Skills</option>
//           <option value="HTML">HTML</option>
//           <option value="CSS">CSS</option>
//           <option value="React">React</option>
//           <option value="Photoshop">Photoshop</option>
//         </select>
//       </div>

//       {/* Job List */}
//       <div className="job-list">
//         {filteredJobs.map((job) => (
//           <div className="job-card" key={job.id}>
//             <h3>{job.title}</h3>
//             <p>
//               <strong>Description:</strong> {job.description}
//             </p>
//             <p>
//               <strong>Skills:</strong> {job.skills.join(", ")}
//             </p>
//             <p>
//               <strong>Budget:</strong> {job.budget}
//             </p>
//             <p>
//               <strong>Deadline:</strong> {job.deadline}
//             </p>
//             <button className="apply-button" onClick={() => handleApply(job.id)}>
//               Apply
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* No Results Message */}
//       {filteredJobs.length === 0 && (
//         <p className="no-results">No jobs match your criteria.</p>
//       )}

//       {/* View My Applications Button */}
//       <div className="view-applications-container">
//         <button className="view-applications-button" onClick={handleViewApplications}>
//           View My Applications
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BrowseJobs;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/BrowseJobs.css";

const BrowseJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterSkill, setFilterSkill] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        setJobs(response.data);
      } catch (error) {
        setErrorMessage("Error fetching jobs. Please try again later.");
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

 
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterSkill === "" || (job.skills && job.skills.includes(filterSkill)))
  );


  const handleApply = async (jobId) => {
    try {
     
      const token = localStorage.getItem("authToken");

      if (!token) {
        alert("No token found, please login again.");
        return;
      }

      
      await axios.post(
        `http://localhost:5000/api/jobs/${jobId}/apply`, // API endpoint
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token here
          },
        }
      );

      alert(`You have applied for job ID: ${jobId}`);
    } catch (error) {
      console.error(error);
      alert("Error applying for the job.");
    }
  };

  const handleViewApplications = () => {
    navigate("/view-my-applications"); // Redirect to "ViewMyApplications" component
  };

  return (
    <div className="browse-jobs-container">
      
      <header className="browse-jobs-header">
        <h1>FREELANCEHUB</h1>
        <button className="home-button" onClick={() => navigate("/")}>
          Home
        </button>
      </header>

      <h2>Browse Jobs</h2>

     
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for jobs..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
        >
          <option value="">Filter by Skills</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="React">React</option>
          <option value="Photoshop">Photoshop</option>
        </select>
      </div>

      
      {errorMessage && <div className="error-message">{errorMessage}</div>}

   
      <div className="job-list">
        {filteredJobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p>
              <strong>Description:</strong> {job.description}
            </p>
            {/* <p>
              <strong>Skills:</strong> {job.skills ? job.skills.join(", ") : "Not specified"}
            </p> */}
            <p>
              <strong>Budget:</strong> {job.budget}
            </p>
            {/* <p>
              <strong>Deadline:</strong> {job.deadline}
            </p> */}
            <button
              className="apply-button"
              onClick={() => handleApply(job._id)} // Use job._id for MongoDB job ID
            >
              Apply
            </button>
          </div>
        ))}
      </div>

    
      {filteredJobs.length === 0 && (
        <p className="no-results">No jobs match your criteria.</p>
      )}

    
      <div className="view-applications-container">
        <button
          className="view-applications-button"
          onClick={handleViewApplications}
        >
          View My Applications
        </button>
      </div>
    </div>
  );
};

export default BrowseJobs;
