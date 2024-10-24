"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-28 xl:px-16">
          {/* text */}
          <div className="flex flex-col gap-6 order-2 xl:order-none w-auto max-w-[490px] xl:max-w-[490px] text-center xl:text-left">
            <div className="flex flex-col gap-4">
              {" "}
              <h3 className="h3 text-white/60">Web Developer</h3>
              <h1 className="h1">
                Hello, <br /> I'm <span className="text-accent">Luiso</span>
              </h1>
              <p className="p max-w-[400px] text-xl">
                I build thoughtful and effective web solutions while sipping
                coffee on a glorious day!
              </p>
            </div>
            <h3 className="h3">
              Let's create something <br />
              remarkable together!
            </h3>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Luis-Solar-CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </motion.div>
  );
};

export default Home;
