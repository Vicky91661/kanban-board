import axios from "axios";

// Create an Axios instance with default configuration
const axiosApiInstance = axios.create({
  baseURL: "https://api.quicksell.co/v1",
  // timeout: constsnts.timeout,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    // config.headers["Authorization"] = `Bearer ${}`;
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    handleResponseError(error);
  }
);

// Response interceptor
axiosApiInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    handleResponseError(error);
  }
);

// Function to handle response errors
const handleResponseError = async (error) => {
  if (axios.isAxiosError(error)) {
    const { status } = error.response || {};

    switch (status) {
      case 403: {
        // Permission denied
        console.error("Permission denied:", error.message);
        break;
      }
      case 404: {
        // Invalid request
        console.error("Resource not found:", error.message);
        break;
      }
      case 500: {
        // Server error
        console.error("Server error:", error.message);
        break;
      }
      default: {
        // Unknown error occurred
        console.error("Unknown error occurred:", error.message);
        break;
      }
    }
  } else {
    // Log other non-Axios errors
    console.error(`🚨 [API] | Unknown error occurred!`);
  }

  return Promise.reject(error);
};

// Export the Axios instance
export default axiosApiInstance;
