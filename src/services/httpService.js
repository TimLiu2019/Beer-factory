import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://api.punkapi.com/v2";
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred");
  }
  return Promise.reject(error);
});

const http = {
  get: axios.get
};
export default http;
