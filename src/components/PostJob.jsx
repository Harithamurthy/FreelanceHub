
// import React, { useState } from "react";

// import "./../styles/PostJob.css";

// const PostJob = () => {
//   const [jobTitle, setJobTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [budget, setBudget] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (jobTitle && description && category && budget) {
//       setSuccessMessage("Job posted successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000);
//       setJobTitle("");
//       setDescription("");
//       setCategory("");
//       setBudget("");
//     }
//   };

//   return (
//     <div className="post-job-page">
      
//       <header className="post-job-header">
//         <div className="logo">FREELANCEHUB</div>
//         <a href="/" className="home-button">Home</a>
//       </header>

//       <div className="post-job-container">
//         <h2 className="post-job-title">Post a New Job</h2>

//         {successMessage && <div className="success-message">{successMessage}</div>}

//         <form className="post-job-form" onSubmit={handleSubmit}>
//           <label>Job Title:</label>
//           <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />

//           <label>Description:</label>
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

//           <label>Category:</label>
//           <select value={category} onChange={(e) => setCategory(e.target.value)} required>
//             <option value="">Select a Category</option>
//             <option value="Web Development">Web Development</option>
//             <option value="Graphic Design">Graphic Design</option>
//             <option value="Marketing">Marketing</option>
//           </select>

//           <label>Budget ($):</label>
//           <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />

//           <div className="form-actions">
//             <button type="submit">Post Job</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostJob;

















import React, { useState } from "react";
import axios from "axios";
import "./../styles/PostJob.css";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (jobTitle && description && category && budget) {
      try {
        // Get token from localStorage (or sessionStorage)
        const token = localStorage.getItem("token");

        const response = await axios.post(
          "http://localhost:5000/api/jobs", 
          { title: jobTitle, description, category, budget },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );

        setSuccessMessage("Job posted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
        setJobTitle("");
        setDescription("");
        setCategory("");
        setBudget("");
      } catch (error) {
        console.error(error);
        setErrorMessage("Error posting job.");
      }
    }
  };

  return (
    <div className="post-job-page">
      {/* Header */}
      <header className="post-job-header">
        <div className="logo">FREELANCEHUB</div>
        <a href="/" className="home-button">Home</a>
      </header>

      {/* Job Post Container */}
      <div className="post-job-container">
        <h2 className="post-job-title">Post a New Job</h2>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form className="post-job-form" onSubmit={handleSubmit}>
          <label>Job Title:</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />

          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select a Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Marketing">Marketing</option>
          </select>

          <label>Budget ($):</label>
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />

          <div className="form-actions">
            <button type="submit">Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;








