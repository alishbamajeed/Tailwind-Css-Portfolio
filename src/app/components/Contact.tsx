"use client";

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-fuchsia-950 to-black min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full mx-auto p-12 rounded-lg shadow-2xl bg-gray-900 transform transition-all duration-700 hover:scale-105 animate__animated animate__fadeInUp">
        <h2 className="text-5xl font-bold text-center text-gray-200 mb-12">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="p-6 rounded-lg border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-500 ease-in-out text-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="p-6 rounded-lg border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-500 ease-in-out text-lg"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={6}
              className="p-6 w-full rounded-lg border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-500 ease-in-out text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="py-4 px-12 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300 w-full transform hover:scale-105 text-xl"
          >
            Send Message
          </button>

          {isSuccess && (
            <p className="mt-6 text-center text-green-500 text-2xl animate__animated animate__fadeInUp">
              Message Sent Successfully! 🚀
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
