"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

// Define an interface for the bubble object
interface Bubble {
  animationDuration: string;
  animationDelay: string;
  left: string;
  top: string;
  size: string;
}

const skills = [
  { name: "HTML", level: 90, icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", level: 85, icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", level: 75, icon: <SiTypescript color="#007ACC" /> },
  { name: "React", level: 85, icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", level: 70, icon: <SiNextdotjs color="#000000" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Node.js", level: 70, icon: <SiNodedotjs color="#339933" /> },
];

export default function Skills() {
  const [randomValues, setRandomValues] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random values after component mounts
    const randomBubbles = [...Array(15)].map(() => ({
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 10}px`, // Bubble size between 10px and 40px
    }));

    setRandomValues(randomBubbles);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {randomValues.map((bubble, index) => {
          const bubbleColors = ["pink", "blue", "purple"];
          const color = bubbleColors[index % bubbleColors.length];

          return (
            <div
              key={index}
              className={`bubble bg-${color}-500`}
              style={{
                animationDuration: bubble.animationDuration,
                animationDelay: bubble.animationDelay,
                left: bubble.left,
                top: bubble.top,
                width: bubble.size,
                height: bubble.size,
                animationTimingFunction: "ease-in-out",
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center py-12 z-10 relative">
        <h2 className="text-6xl font-bold text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative p-5 rounded-lg neon-border flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mr-4">{skill.icon}</div> {/* Icon */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-800 h-3 rounded-full">
                  <motion.div
                    className="h-3 rounded-full neon-glow"
                    style={{ backgroundColor: skill.icon.props.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <span className="text-white text-sm mt-2 inline-block">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .neon-border {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
          transition: box-shadow 0.3s ease;
        }
        .neon-border:hover {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6);
        }
        .neon-glow {
          box-shadow: 0 0 10px rgba(255, 20, 147, 0.8), 0 0 20px rgba(255, 20, 147, 0.5);
        }

        /* Background Bubble Animation */
        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: float 10s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          25% {
            transform: translate(-50px, -50px);
            opacity: 0.8;
          }
          50% {
            transform: translate(50px, -50px);
            opacity: 0.6;
          }
          75% {
            transform: translate(50px, 50px);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50px, 50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
