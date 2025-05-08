// pages/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy auth or connect backend
    alert("Login Success (fake)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f2027] to-[#203a43] px-4">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-lg space-y-6">
        <h2 className="text-white text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:ring-2 ring-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:ring-2 ring-cyan-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded">
            Log In
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center">
          Don’t have an account? <a href="/register" className="text-cyan-400 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;