// components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f2027] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm tracking-wide">&copy; {new Date().getFullYear()} ImageUpload App. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-cyan-400"><Facebook size={20} /></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-cyan-400"><Instagram size={20} /></a>
          <a href="https://github.com" target="_blank" className="hover:text-cyan-400"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;