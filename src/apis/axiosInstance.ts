import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dhan-rakshak-feedback.vercel.app/feedback",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
