import axios from 'axios';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Backend API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
