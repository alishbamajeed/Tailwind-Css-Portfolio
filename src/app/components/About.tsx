"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <div>
      <section className="text-gray-100 body-font bg-gradient-to-r from-fuchsia-950 to-black bg-opacity-80 relative overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 animate-bg-gradient-pattern" />

        <div className="container px-4 sm:px-6 lg:px-8 py-24 mx-auto flex flex-wrap relative z-10">
          <div className="flex flex-wrap items-center w-full">
            {/* Heading and Icon - Positioned centered */}
            <div className="w-full mb-8 text-center mt-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center items-center mb-6"
              >
                <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full animate-pulse bg-indigo-400 inline-flex items-center justify-center text-white mr-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 sm:w-8 h-6 sm:h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h1 className="text-6xl sm:text-6xl mb-6 tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-6 animate-text-glow-slight hover:text-blue-300 transition-colors duration-300">
                  About Me
                </h1>
              </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
              {/* 3D Animated Circular Image on the left side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 20, scale: 1.1 }}
                className="lg:w-2/5 md:w-1/2 w-full mb-12 lg:mb-0"
              >
                <div className="relative">
                  <Image
                    className="w-40 sm:w-60 md:w-80 lg:w-[600px] h-40 sm:h-60 md:h-80 lg:h-[600px] object-cover object-center rounded-full shadow-2xl neon-glow z-10 relative border-4 border-indigo-500 hover:shadow-[0_0_15px_5px_rgba(75,29,215,0.8)] mx-auto"
                    src="/3d.avif"
                    alt="About Image"
                    width={600} // Width for optimization
                    height={600} // Height for optimization
                  />
                </div>
              </motion.div>

              {/* About Me Content on the right side */}
              <div className="lg:w-3/5 md:w-1/2 w-full lg:pl-10 md:py-6">
                {/* Steps Section */}
                <div className="mt-8 space-y-8">
                  {[
                    {
                      title: "Introduction",
                      description:
                        "Hello! I&apos;m Alishba, a passionate web developer focused on creating interactive, user-friendly, and responsive websites.",
                    },
                    {
                      title: "My Journey",
                      description:
                        "I started learning web development in 2023 and have been fascinated by the endless possibilities of the web ever since.",
                    },
                    {
                      title: "Education",
                      description:
                        "Currently, I am pursuing my degree in Computer Science, where I am learning a wide range of technical skills.",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.3 }}
                      viewport={{ once: true }}
                      className="flex relative pb-8 sm:pb-12"
                    >
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                      </div>
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </motion.div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 mb-1 tracking-wider animate-text-glow-slight">
                          {step.title}
                        </h2>
                        <p className="leading-relaxed text-base sm:text-lg text-gray-100">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
