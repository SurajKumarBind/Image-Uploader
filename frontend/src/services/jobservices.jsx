import axios from "axios";

const API_URL = "http://localhost:8080/api/jobs"; 

// Upload Job with Image
export const addJob = async (formData) => {
    return await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
};

// Fetch All Jobs
export const getJobs = async () => {
    return await axios.get(API_URL);
};

// Fetch Single Job
export const getJobById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// Delete Job
export const deleteJob = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};