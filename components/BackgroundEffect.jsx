"use client";

import { motion } from "framer-motion";

const BackgroundEffect = ({ variant = "default" }) => {
  const variantColors = {
    default: [
      {
        color: "#6A4C93", // Violet
        baseSize: 600,
        position: { top: "15vh", left: "10vw" },
      },
      {
        color: "#FF6F91", // Soft Pink
        baseSize: 700,
        position: { top: "50vh", left: "40vw" },
      },
      {
        color: "#57C9B9", // Turquoise
        baseSize: 800,
        position: { top: "30vh", left: "70vw" },
      },
    ],
    about: [
      {
        color: "#9C4EFF", // Purple
        baseSize: 650,
        position: { top: "10vh", left: "25vw" },
      },
      {
        color: "#EC4A8F", // Soft Pink
        baseSize: 750,
        position: { top: "65vh", left: "50vw" },
      },
      {
        color: "#F53C8C", // Bright Pink
        baseSize: 800,
        position: { top: "50vh", left: "80vw" },
      },
    ],
    projects: [
      {
        color: "#57EBB0", // Soft Turquoise
        baseSize: 700,
        position: { top: "20vh", left: "20vw" },
      },
      {
        color: "#FF6F91", // Soft Pink
        baseSize: 750,
        position: { top: "60vh", left: "45vw" },
      },
      {
        color: "#9C4EFF", // Purple
        baseSize: 800,
        position: { top: "40vh", left: "75vw" },
      },
    ],
    contact: [
      {
        color: "#6C4EFF", // Bright Purple
        baseSize: 750,
        position: { top: "5vh", left: "30vw" },
      },
      {
        color: "#F53C8C", // Soft Pink
        baseSize: 700,
        position: { top: "55vh", left: "50vw" },
      },
      {
        color: "#FF8DAA", // Light Pink
        baseSize: 800,
        position: { top: "45vh", left: "85vw" },
      },
    ],
  };

  const lightSources = variantColors[variant] || variantColors.default;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {lightSources.map((source, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: source.baseSize,
            height: source.baseSize,
            filter: "blur(150px)",
            background: source.color,
            top: source.position.top,
            left: source.position.left,
            opacity: 0.1, // Lower opacity for less perceptibility
          }}
          animate={{
            scale: [1, 1.05, 1.1], // Subtle scaling
            opacity: [0.1, 0.3, 0.1], // Reduced opacity range for softer effect
          }}
          transition={{
            duration: 10, // Slow duration for gradual change
            ease: "linear", // Smooth, constant pace
            repeat: Infinity, // Repeating animation
            repeatType: "reverse", // Reverse back to original state
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;
