"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { TextGenerateEffect } from "./Ui/text-generate-effect";
import Image from "next/image";

const words =
  "Frontend developer and UI/UX designer focused on creating engaging and responsive web experiences.";

export default function Hero() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const generateRandomBubbles = () => {
      const randomBubbles = Array.from({ length: 15 }, () => {
        const size = Math.random() * (80 - 30) + 30;
        return {
          size: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * (15 - 8) + 8}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
      });
      setBubbles(randomBubbles);
    };

    generateRandomBubbles();
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative overflow-hidden bg-gray-900 text-gray-600 body-font">
        {/* Background Bubbles */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900 opacity-80" />
          <div className="absolute inset-0 pointer-events-none">
            {bubbles.map((bubble, index) => (
              <div
                key={index}
                className="bubble"
                style={{
                  backgroundColor: `rgba(${Math.random() * 255}, ${
                    Math.random() * 255
                  }, ${Math.random() * 255}, 0.6)`,
                  width: bubble.size,
                  height: bubble.size,
                  left: bubble.left,
                  top: bubble.top,
                  animationDuration: bubble.animationDuration,
                  animationDelay: bubble.animationDelay,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto flex flex-col px-10 py-32 items-center relative z-10 md:flex-row">
          <motion.div
            className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="title-font sm:text-8xl text-6xl mb-4 font-bold text-gray-200 font-poppins">
              Hi, 👋🏻
            </h1>
            <h1 className="title-font sm:text-8xl text-6xl mb-8 font-bold text-pink-300 font-poppins hover:text-pink-800">
              It's me, Alishba
            </h1>

            <TextGenerateEffect words={words} />

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/alishbamajeed"
                className="px-8 py-3 bg-black text-white border border-gray-700 rounded-lg text-xl font-semibold flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105 shadow-md"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alishba-majeed-5099b8310"
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-lg text-xl font-semibold transform transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:max-w-4xl lg:w-1/2 md:w-2/3 w-full mx-auto flex justify-end items-center mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotateY: 15, rotateX: -15, scale: 1.1 }}
          >
            <Image
              className="neon-circle object-cover object-center shadow-lg w-96 sm:w-[450px] lg:w-[500px]"
              alt="Alishba"
              src="/cartoon.png"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .neon-circle {
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7),
            0 0 40px rgba(0, 255, 255, 0.5);
          transition: transform 0.5s ease;
        }

        .bubble {
          border-radius: 50%;
          position: absolute;
          animation: floatBubbles 10s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes floatBubbles {
          0% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
