import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4300" });

export const signUp = (formData) => API.post("/auth/register", formData);

export const personalInfo = (formData) => API.post("/auth/personal", formData);
