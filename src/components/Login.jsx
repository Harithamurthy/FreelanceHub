


// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const mockUser = {
//       email: "test@freelancer.com",
//       password: "password123",
//       role: "freelancer",
//     };

//     if (email === mockUser.email && password === mockUser.password) {
//       setError("");
//       if (mockUser.role === "freelancer") {
//         navigate("/dashboard");
//       } else {
//         navigate("/client-dashboard");
//       }
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-page">
//       {/* Header */}
//       <header className="login-header">
//         <div className="logo">FREELANCEHUB</div>
//         <div className="header-nav">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </div>
//         <div className="header-actions">
//           <Link to="/signup" className="nav-link">
//             Signup
//           </Link>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="login-main">
//         <div className="login-card">
//           <h2>Login</h2>
//           {error && <p className="error-message">{error}</p>}
//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button type="submit" className="login-btn">
//               Login
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Login;


//working codeeeeeeeeeeeee
// frontend/src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend with email and password
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // On successful login, store the JWT token in localStorage
      localStorage.setItem("token", response.data.token);
     

      // Navigate to the appropriate dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
     
      <header className="login-header">
        <div className="logo">FREELANCEHUB</div>
        <div className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="header-actions">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </div>
      </header>

      
      <main className="login-main">
        <div className="login-card">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;















