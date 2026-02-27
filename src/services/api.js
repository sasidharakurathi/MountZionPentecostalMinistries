import axios from 'axios';

// Create an Axios instance with base configuration
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Interceptor for Requests (e.g., adding Auth Token later)
api.interceptors.request.use(
    (config) => {
        // Example: Add token if it exists in local storage
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor for Responses (Global Error Handling)
api.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const customError = {
            message: 'An unexpected error occurred',
            status: error.response?.status,
            data: error.response?.data,
        };

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            customError.message = error.response.data.message || 'Server Error';
        } else if (error.request) {
            // The request was made but no response was received
            customError.message = 'No response from server. Check your network connection.';
        } else {
            // Something happened in setting up the request that triggered an Error
            customError.message = error.message;
        }

        console.error('API Error:', customError);
        return Promise.reject(customError);
    }
);

export default api;
