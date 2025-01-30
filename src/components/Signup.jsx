// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./../styles/Signup.css";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log("Signup details:", { email, password });
//     alert("Signup successful!");
//     navigate("/login");
//   };

//   return (
//     <div className="signup-page">
      
//       <header className="signup-header">
//         <div className="logo">FREELANCEHUB</div>
//         <div className="header-nav">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </div>
//         <div className="header-actions">
//           <span
//             className="nav-link"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </div>
//       </header>


//       <main className="signup-main">
//         <div className="signup-container">
//           <h2 className="signup-title">Create Your Account</h2>
//           <form className="signup-form" onSubmit={handleSignup}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Create a password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-submit">
//               Signup
//             </button>
//           </form>
//           <p className="signup-footer">
//             Already have an account?{" "}
//             <span
//               className="signup-login-link"
//               onClick={() => navigate("/login")}
//             >
//               Login here
//             </span>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Signup;






// frontend/src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "./../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        email,
        password,
      });
      console.log(response.data);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("There was an error during signup!", error);
      alert("Signup failed!");
    }
  };

  return (
    <div className="signup-page">
      <header className="signup-header">
        <div className="logo">FREELANCEHUB</div>
        <div className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="header-actions">
          <span className="nav-link" onClick={() => navigate("/login")}>Login</span>
        </div>
      </header>

      <main className="signup-main">
        <div className="signup-container">
          <h2 className="signup-title">Create Your Account</h2>
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-submit">Signup</button>
          </form>
          <p className="signup-footer">
            Already have an account?{" "}
            <span className="signup-login-link" onClick={() => navigate("/login")}>Login here</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;






