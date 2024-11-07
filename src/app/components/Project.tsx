"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "Personal-Portfolio-HTML-CSS",
    imageUrl: "/portfolio.png",
    link: "https://stylish-portfolio-html-css01.netlify.app/",
  },
  {
    quote: "Neon-Portfolio",
    imageUrl: "/personal.png",
    link: "https://my-portfolio-zj6x.vercel.app/",
  },
  {
    quote: "My Resume",
    imageUrl: "/resume.png",
    link: "https://static-resume-builder-vert.vercel.app/",
  },
  {
    quote: "Login Page",
    imageUrl: "/login.png",
    link: "https://login-page-chi-green.vercel.app/",
  },
  {
    quote: "Stylish-Calculator",
    imageUrl: "/calcu.jpg",
    link: "https://stylish-calculator.vercel.app/",
  },
  {
    quote: "Count-down-Timer",
    imageUrl: "/count.png",
    link: "https://count-down-timer-weld-rho.vercel.app/",
  },
  {
    quote: "45-Assignment",
    imageUrl: "/45.jpg",
    link: "https://github.com/alishbamajeed/Getting_Started_Exercises_with_TypeScript_and_Node.js.git",
  },
];

export default function InfiniteMovingCardsDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set slower animation speed
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "20s"); // slower speed
    }
  }, []);

  return (
    <div className="h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-r from-fuchsia-950 to-black dark:bg-black">
      {/* Animated Heading */}
      <h2 className="text-5xl tracking-wide relative z-10 font-bold hover:text-pink-700 transition-colors duration-300 text-gray-200 dark:text-white mb-8 animate-fade-in">
        My Project
      </h2>

      <div ref={containerRef} className="scroller w-full flex gap-8 py-6 animate-scroll">
        {/* Duplicate the scrolling content */}
        <div className="scroller-content flex">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[350px] h-[200px] md:h-[300px] max-w-full relative rounded-lg md:rounded-xl px-4 py-4 md:px-6 md:py-6 neon-border overflow-hidden"
              style={{
                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <Link href={item.link || "#"} className="block h-full">
                <div className="relative h-full flex flex-col justify-between items-center text-center">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.quote || item.name || "Project image"}
                      width={350}
                      height={200}
                      className="w-full h-28 md:h-40 object-cover rounded-t-md md:rounded-t-xl mb-2 md:mb-4"
                    />
                  )}
                  <blockquote className="px-2">
                    <span className="relative z-20 text-base md:text-lg font-semibold text-gray-100 stylish-text">
                      {item.quote || item.name}
                    </span>
                    <div className="relative z-20 mt-2 md:mt-4">
                      <span className="text-sm md:text-md text-gray-300">
                        {item.name}
                      </span>
                    </div>
                  </blockquote>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Duplicate the content again for seamless scrolling */}
        <div className="scroller-content flex">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[350px] h-[200px] md:h-[300px] max-w-full relative rounded-lg md:rounded-xl px-4 py-4 md:px-6 md:py-6 neon-border overflow-hidden"
              style={{
                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <Link href={item.link || "#"} className="block h-full">
                <div className="relative h-full flex flex-col justify-between items-center text-center">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.quote || item.name || "Project image"}
                      width={350}
                      height={200}
                      className="w-full h-28 md:h-40 object-cover rounded-t-md md:rounded-t-xl mb-2 md:mb-4"
                    />
                  )}
                  <blockquote className="px-2">
                    <span className="relative z-20 text-base md:text-lg font-semibold text-gray-100 stylish-text">
                      {item.quote || item.name}
                    </span>
                    <div className="relative z-20 mt-2 md:mt-4">
                      <span className="text-sm md:text-md text-gray-300">
                        {item.name}
                      </span>
                    </div>
                  </blockquote>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll CSS */}
      <style jsx>{`
        :root {
          --animation-duration: 20s; /* slower speed */
        }
        .animate-scroll {
          display: flex;
          animation: scroll var(--animation-duration) linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroller-content {
          display: flex;
        }
        .neon-border {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
          transition: box-shadow 0.3s ease;
        }
        .neon-border:hover {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6);
        }
      `}</style>
    </div>
  );
}
