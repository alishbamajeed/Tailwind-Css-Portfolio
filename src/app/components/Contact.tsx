"use client";

import React, { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Run on mount

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSuccess(false), 5000); // Auto-hide success message
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 via-indigo-900 to-black min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl w-full mx-auto p-12 rounded-lg shadow-lg bg-gray-900 border border-purple-700 fade-in opacity-0 translate-y-10 transition-opacity transition-transform duration-1000">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8 fade-in opacity-0 translate-y-10 transition-opacity transition-transform duration-1000 delay-200">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 fade-in opacity-0 translate-y-10 transition-opacity transition-transform duration-1000 delay-400">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              aria-label="Your Name"
              className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 text-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              aria-label="Your Email"
              className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 text-lg"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={5}
              aria-label="Your Message"
              className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="py-3 px-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 w-full transform hover:scale-105 text-lg"
            disabled={!name || !email || !message}
          >
            Send Message
          </button>

          {isSuccess && (
            <p className="mt-4 text-center text-green-400 text-lg animate-bounce">
              Message Sent Successfully! 🚀
            </p>
          )}
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm fade-in opacity-0 translate-y-10 transition-opacity transition-transform duration-1000 delay-600">
          Need urgent assistance? Reach me at <a href="mailto:your-email@example.com" className="text-purple-400 hover:underline">your-email@example.com</a>
        </p>
      </div>
    </div>
  );
}
