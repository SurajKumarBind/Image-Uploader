import React, { useEffect, useState } from "react";
import { getJobs, deleteJob } from "../services/jobservices";
import JobItem from "./JobItem";
import AddJob from "./AddJob";
import { Loader2 } from "lucide-react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await getJobs();
      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    let updated = [...jobs];

    // Search functionality
    if (search.trim()) {
      updated = updated.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting functionality
    if (sortOrder === "latest") {
      updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOrder === "oldest") {
      updated.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortOrder === "title") {
      updated.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredJobs(updated);
  }, [search, sortOrder, jobs]);

  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs(); // Refresh the job list after deletion
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight">📋 Your Job List</h1>

      <AddJob refreshJobs={fetchJobs} />

      {/* Search and Sort Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="🔍 Search by title..."
          className="w-full md:w-1/2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="latest">🆕 Latest First</option>
          <option value="oldest">📜 Oldest First</option>
          <option value="title">🔤 Sort by Title</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <Loader2 className="animate-spin text-cyan-400" size={40} />
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center text-gray-400 mt-12 text-xl">😕 No jobs found.</div>
      ) : (
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <JobItem key={job.id} job={job} onDelete={handleDelete} />
          ))}
        </div>
      )}

      {!loading && (
        <p className="text-sm text-center text-gray-500 mt-10">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}.
        </p>
      )}
    </div>
  );
};

export default JobList;