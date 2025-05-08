// pages/Register.jsx
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register Success (fake)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f2027] to-[#203a43] px-4">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-lg space-y-6">
        <h2 className="text-white text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:ring-2 ring-cyan-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center">
          Already registered? <a href="/login" className="text-cyan-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;