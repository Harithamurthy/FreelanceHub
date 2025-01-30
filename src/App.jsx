import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FreelancerDashboard from "./components/FreelancerDashboard";
import ClientDashboard from "./components/ClientDashboard";
import FreelancerCreateProfile from "./components/FreelancerCreateProfile";
import FreelancerCongratulations from "./components/FreelancerCongratulations";
import "./styles/Home.css";
//import "./styles/styles.css"; 
import PostJob from "./components/PostJob";
import ManageApplications from "./components/ManageApplications";
import BrowseJobs from "./components/BrowseJobs";
import ViewMyApplications from "./components/ViewMyApplications";
import AboutUs from "./components/AboutUs";




const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
         
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/manage-applications" element={<ManageApplications />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
        
        
        <Route path="/freelancer-create-profile" element={<FreelancerCreateProfile />} />
           
        {/* <Route path="/freelancer-congratulations" element={<FreelancerCongratulations />} /> 
        <Route path="/applications" element={<ViewMyApplications />} /> */ }
        <Route path="/freelancer-congratulations" element={<FreelancerCongratulations />} />
        <Route path="/view-my-applications" element={<ViewMyApplications />} />
        <Route path="/AboutUs" element ={<AboutUs />} />
 

        </Routes> 
      </div>
    </Router>
  );
};

export default App;


