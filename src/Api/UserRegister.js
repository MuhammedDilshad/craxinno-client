import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:4300" });
const API = axios.create({ baseURL: "https://craxinno-backend.onrender.com" });

export const signUp = (formData) => API.post("/auth/register", formData);

export const personalInfo = (formData) => API.post("/auth/personal", formData);
