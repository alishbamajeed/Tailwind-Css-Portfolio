"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Responsive Web Design",
    description:
      "Designing websites that work seamlessly on all devices, including mobile, tablet, and desktop.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces and experiences.",
  },
  {
    title: "Canva Design Services",
    description:
      "Creating visually stunning graphics and designs using Canva for various needs.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website loading speed and performance with image optimization and lazy loading.",
  },
  {
    title: "Accessibility Enhancements",
    description:
      "Making websites accessible for all users, regardless of their abilities.",
  },
  {
    title: "JavaScript Development",
    description:
      "Building dynamic and interactive features using JavaScript and frameworks like React or Vue.",
  },
];

const Services = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-black text-white py-16 px-6">
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-16">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-xl p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative neon-border"
            >
              <FaCheckCircle className="h-16 w-16 text-green-400 mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg text-gray-300">{service.description}</p>
              <div className="absolute inset-0 rounded-lg border-4 border-transparent neon-border"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .neon-border {
          position: relative;
          z-index: 0;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6);
          transition: box-shadow 0.3s ease;
        }

        .neon-border:hover {
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6);
        }

        .bubble {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          animation: rise 4s linear infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }

        @media (max-width: 640px) {
          .neon-border {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
