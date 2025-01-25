"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Stylish Portfolio",
    imageUrl: "/portfolio.png",
    link: "https://stylish-portfolio-html-css01.netlify.app/",
  },
  {
    quote: "PicBazar-Ecommerce Website",
    imageUrl: "/ecommerce.png",
    link: "https://picbazar-ecommerce-wpki.vercel.app/",
  },
  {
    quote: "Blog Website",
    imageUrl: "/blog.png",
    link: "https://blog-two-peach.vercel.app/",
  },
  {
    quote: "Shop.CO",
    imageUrl: "/shop.png",
    link: "https://shop-figma-template.vercel.app/",
  },
  {
    quote: "Multiple-page mobile website",
    imageUrl: "/mobile.png",
    link: "https://mobile-website-orw9.vercel.app/",
  },
  {
    quote: "Neon Portfolio",
    imageUrl: "/personal.png",
    link: "https://my-portfolio-zj6x.vercel.app/",
  },
  {
    quote: "My Resume",
    imageUrl: "/resume2.png",
    link: "https://static-resume-builder-vert.vercel.app/",
  },
  {
    quote: "Login Page",
    imageUrl: "/login.png",
    link: "https://login-page-chi-green.vercel.app/",
  },
  {
    quote: "Stylish Calculator",
    imageUrl: "/calcu.jpg",
    link: "https://stylish-calculator.vercel.app/",
  },
  {
    quote: "Count-down Timer",
    imageUrl: "/count.png",
    link: "https://count-down-timer-weld-rho.vercel.app/",
  },
  {
    quote: "45 Assignment",
    imageUrl: "/45.jpg",
    link: "https://github.com/alishbamajeed/Getting_Started_Exercises_with_TypeScript_and_Node.js.git",
  },
];

export default function AnimatedProjects() {
  return (
    <div className="min-h-screen rounded-md flex flex-col items-center justify-center bg-gradient-to-r from-fuchsia-950 to-black py-12 px-6">
      <motion.h2
        className="text-5xl font-extrabold tracking-wide text-white mb-10 stylish-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-full h-[320px] relative rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-gray-600 hover:border-pink-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={item.link || "#"} aria-label={item.quote || "Project"}>
              <div className="relative h-full flex flex-col items-center justify-between p-4">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.quote || item.name || "Project image"}
                    width={350}
                    height={200}
                    className="w-full h-36 object-cover rounded-md hover:scale-110 transition-transform duration-300"
                    priority
                  />
                )}
                <blockquote className="mt-4 text-center">
                  <p className="text-lg font-extrabold text-white stylish-text">
                    {item.quote || item.name}
                  </p>
                </blockquote>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .stylish-text {
          background: linear-gradient(to right, #ff007f, #7f00ff);
          -webkit-background-clip: text;
          color: transparent;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
