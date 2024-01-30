import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

//create custom axios instance with a base URL
export const axiosInstance = axios.create({ baseURL: "http://localhost:3000" });
