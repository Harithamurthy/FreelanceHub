// import axios from "axios";

// // Base URL for the backend API
// const BASE_URL = "http://localhost:5000/api"; // Adjust to your backend URL

// // Signup function
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during signup:", error);
//     throw error;
//   }
// };

// // Login function
// export const login = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/auth/login`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during login:", error);
//     throw error;
//   }
// };






//newly added code while connecting backend 

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

// Sign Up function
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

// Login function
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    // Store token in localStorage
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Logout function
export const logoutUser = () => {
  localStorage.removeItem('token');
};
