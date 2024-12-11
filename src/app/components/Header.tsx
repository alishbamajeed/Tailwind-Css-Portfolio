"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineDownload,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import { FaServicestack, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/Resume.pdf"; // Update with your actual CV path
    link.setAttribute("download", "Alishba_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuItems = [
    { name: "Home", href: "#home", icon: <AiOutlineHome /> },
    { name: "About", href: "#about", icon: <AiOutlineUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <AiOutlineFundProjectionScreen /> },
    { name: "Service", href: "#services", icon: <FaServicestack /> }, // Make sure this is correct
    { name: "Contact", href: "#contact", icon: <AiOutlineMail /> },
  ];

  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-purple-900 via-black to-fuchsia-900 shadow-lg border-b border-pink-700">
      <div className="container mx-auto flex p-4 items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-wide"
        >
          <Link
            href="/"
            className="font-lobster text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-200 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-red-300 transition-all duration-300 transform hover:scale-110"
          >
            Alishba
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center justify-center flex-1">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.span
                whileHover={{ scale: 1.1, color: "#ff0080" }}
                className="text-lg text-white font-medium hover:text-pink-500 transition-colors duration-300"
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Download CV Button for Desktop */}
        <div className="hidden md:flex">
          <button
            onClick={handleDownload}
            className="flex items-center px-5 py-2 text-white bg-pink-600 rounded-full hover:bg-pink-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <AiOutlineDownload className="w-4 h-4 mr-2" />
            Download CV
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <FiX className="w-8 h-8 hover:text-pink-500 transition-colors duration-300" />
            ) : (
              <FiMenu className="w-8 h-8 hover:text-pink-500 transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden bg-black text-white shadow-lg py-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-lg font-medium hover:text-pink-500 transition-colors duration-300"
                >
                  <span className="mr-2">{item.icon}</span> {item.name}
                </span>
              </Link>
            ))}
            <button
              onClick={handleDownload}
              className="flex items-center px-4 py-2 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-all duration-300"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />
              Download CV
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
