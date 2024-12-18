"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="relative z-10 w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]"
      >
        <Image
          src="/assets/photo.png"
          alt="Luiso's profile photo"
          priority
          quality={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-contain"
          fill
        />
      </motion.div>

      {/* Circular Animation */}
      <motion.svg
        className="absolute w-[260px] h-[260px] xl:w-[410px] xl:h-[410px]"
        viewBox="0 0 506 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#57ebd7"
          strokeWidth="4"
          strokeDasharray="15 120 25 25"
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
