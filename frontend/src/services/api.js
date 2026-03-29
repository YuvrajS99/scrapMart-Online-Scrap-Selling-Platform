import axios from 'axios';

const api = axios.create({
  baseURL: 'https://scrapmart-online-scrap-selling-platform.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach the JWT token if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally or handle unauthorized access
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if the token expired or is invalid
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // If we are not already on the login page, we can reload or redirect
      // window.location.href = '/login'; // Optional: Redirect on 401
    }
    return Promise.reject(error);
  }
);

export default api;
