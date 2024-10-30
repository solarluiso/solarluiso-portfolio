"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import { motion } from "framer-motion";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Focus",
    description:
      "A sleek web application designed to enhance productivity and focus.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/projects/thumb1.png",
    live: "https://focus-inky.vercel.app/",
    github: "https://github.com/solarluiso/focus",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Fit physique",
    description: "A fitness-focused platform to track workouts and progress.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/assets/projects/thumb2.png",
    live: "https://fitphysique-pi.vercel.app/",
    github: "https://github.com/solarluiso/fitphysique",
  },
  {
    num: "03",
    category: "frontend",
    title: "Modern bank app",
    description:
      "An innovative banking application with a modern user interface.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Vite" }],
    image: "/assets/projects/thumb3.png",
    live: "https://modern-bank-app-ebon-omega.vercel.app/",
    github: "https://github.com/solarluiso/modern-bank-app",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6 xl:items-start"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:justify-center gap-[60px] xl:gap-0">
          {/* text */}
          <div className="w-full flex justify-start xl:justify-center max-w-[640px] xl:max-w-none order-2 xl:order-none">
            <div className="w-full flex flex-col gap-[30px] xl:gap-[18px]">
              {/* num + info */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-[30px]">
                {/* info */}
                <div className="flex flex-col gap-4 xl:gap-2 order-2 xl:order-none xl:pl-[267px]">
                  {/* project category */}
                  <h2 className="h2">{project.category} project</h2>
                  {/* project description */}
                  <p className="p">{project.description}</p>
                  {/* stack */}
                  <ul className="flex gap-2">
                    {project.stack.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-md text-accent leading-[1.5]"
                        >
                          {item.name}
                          {/* remove the last comma */}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* outline num */}
                <div className="text-8xl xl:text-[110px] font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
              </div>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4 xl:justify-end xl:mt-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="w-full max-w-[640px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[420px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
