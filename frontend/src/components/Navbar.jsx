import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLink = (path, label) => {
    const isActive = location.pathname === path;
    return (
      <Link
        to={path}
        onClick={() => setOpen(false)}
        className={`relative group text-lg font-medium px-2 py-1 transition duration-300 ${
          isActive ? "text-cyan-400" : "text-gray-300"
        } hover:text-cyan-300`}
      >
        {label}
        <span
          className={`absolute left-0 -bottom-0.5 h-0.5 bg-cyan-400 transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]/90 backdrop-blur-lg shadow-lg dark:bg-black/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-widest"
        >
          ImageUpload
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLink("/", "Image List")}
          {navLink("/add-job", "Add Image")}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-yellow-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* User Avatar with Menu (Static for now) */}
          <div className="relative group">
            <div className="bg-cyan-500 text-white rounded-full p-2 cursor-pointer hover:ring-2 ring-white">
              <User size={18} />
            </div>
            <div className="absolute right-0 mt-2 w-36 bg-gray-800 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-700">Settings</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-700">Logout</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-6 bg-gray-900/80 backdrop-blur-md">
          {navLink("/", "Image List")}
          {navLink("/add-job", "Add Image")}
        </div>
      )}
    </nav>
  );
};

export default Navbar;