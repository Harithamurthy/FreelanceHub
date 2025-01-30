import axios from "axios";

// Base URL for the backend API
const BASE_URL = "http://localhost:5000/api"; 

// Get all jobs (for freelancers to browse)
export const getJobs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Post a job (for clients)
export const postJob = async (jobData) => {
  try {
    const response = await axios.post(`${BASE_URL}/jobs`, jobData);
    return response.data;
  } catch (error) {
    console.error("Error posting job:", error);
    throw error;
  }
};

// Get applications for a specific job (for clients)
export const getApplicationsForJob = async (jobId) => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs/${jobId}/applications`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job applications:", error);
    throw error;
  }
};









