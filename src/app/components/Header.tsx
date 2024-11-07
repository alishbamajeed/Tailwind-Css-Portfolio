"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineDownload, AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMail } from "react-icons/ai"; // Icons for Home, About, Projects, and Contact
import { FiMenu, FiX } from "react-icons/fi"; // FiX icon for closing menu
import { FaServicestack, FaTools } from "react-icons/fa"; // Icon for Skills
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/Resume.pdf"; // Replace with the actual path to your CV
    link.setAttribute("download", "Alishba_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Menu items array with icons
  const menuItems = [
    { name: "Home", href: "#home", icon: <AiOutlineHome /> },
    { name: "About", href: "#about", icon: <AiOutlineUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <AiOutlineFundProjectionScreen /> },
    { name: "Service", href: "#service", icon: <FaServicestack /> },
    { name: "Contact", href: "#contact", icon: <AiOutlineMail /> }
  ];

  return (
    <header className="text-black py-2 sticky top-0 z-10 shadow-lg bg-gradient-to-r from-black to-fuchsia-950 border-pink-700">
      <div className="container mx-auto flex p-5 flex-row items-center justify-between">
        {/* Logo with Motion Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
          whileHover={{ scale: 1.1, color: "#ff0080" }}
        >
          <Link href="/" className="hover:text-pink-700 text-4xl font-bold transition duration-300">
            Alishba
          </Link>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <FiX className="w-8 h-8 hover:text-pink-600 transition-colors duration-300 ease-in-out" />
            ) : (
              <FiMenu className="w-8 h-8 hover:text-pink-600 transition-colors duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-5">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`relative text-white text-lg font-medium transition-colors duration-300 hover:text-red-400 cursor-pointer ${
                  item.name === "Service" ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {item.icon} <span>{item.name}</span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Download CV Button for Desktop */}
        <div className="hidden md:flex">
          <button
            onClick={handleDownload}
            className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700 rounded font-medium shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <AiOutlineDownload className="w-4 h-4 mr-2" />
            Download CV
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-fuchsia-950 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={`flex items-center text-lg font-medium transition-colors duration-300 hover:text-red-400 cursor-pointer space-x-2 ${
                    item.name === "Service" ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  {item.icon} <span>{item.name}</span>
                </span>
              </Link>
            ))}
            {/* Download CV Button for Mobile */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700 rounded font-medium shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />
              Download CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
