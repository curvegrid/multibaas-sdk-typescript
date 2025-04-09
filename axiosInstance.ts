import axios from "axios";
import { APIError } from "./APIError";

// Create an Axios instance
export const axiosInstance = axios.create({});

// Add an interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => Promise.reject(new APIError(error)) // Reject with an APIError
);
