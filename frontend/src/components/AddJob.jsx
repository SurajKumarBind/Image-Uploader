import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const AddJob = ({ refreshJobs }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      toast.error("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:8080/api/jobs/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Job Added Successfully!");
      refreshJobs(); // To refresh the job list after adding a job
    } catch (error) {
      toast.error("Failed to add job");
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className="bg-gray-900/70 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-center text-cyan-400 mb-4">Add a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter job name"
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white focus:outline-none"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit" className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-2 rounded-md text-white font-semibold">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;