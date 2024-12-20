"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
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
        className="absolute w-[258px] h-[258px] xl:w-[408px] xl:h-[408px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#57ebd7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: "24 10 0 0",
          }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
