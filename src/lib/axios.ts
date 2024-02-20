import axios, { AxiosInstance } from "axios";

/**
 * Axios Instance
 */
const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export { axiosClient };
