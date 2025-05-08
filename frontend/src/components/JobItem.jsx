import React from "react";
import { toast } from "react-hot-toast";

const JobItem = ({ job, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await onDelete(job.id);
      toast.success("Job deleted successfully!");
    }
  };

  return (
    <div className="bg-gray-900/70 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-cyan-400">{job.name}</h3>
      {job.image && (
        <img src={job.image} alt={job.name} className="mt-4 mb-6 rounded-md w-full h-auto" />
      )}
      <button
        onClick={handleDelete}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-md"
      >
        Delete Job
      </button>
    </div>
  );
};

export default JobItem;