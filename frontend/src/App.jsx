import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import AddJob from "./components/AddJob";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";

// (Optional) ProtectedRoute component if you implement auth
// import ProtectedRoute from "./components/ProtectedRoute"; 

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans">
      <Router>
        {/* Navbar across all pages */}
        <Navbar />
        
        <main className="min-h-[calc(100vh-150px)] px-4 py-6">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        
        {/* Footer */}  
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </div>
  );
};

export default App;