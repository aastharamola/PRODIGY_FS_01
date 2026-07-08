import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Assumes backend is running on port 5000
  withCredentials: true, // Required for sending/receiving cookies
});

export default api;
