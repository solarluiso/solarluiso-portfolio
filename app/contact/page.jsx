"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 786 825 4670",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "solarluiso@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Washington, DC",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 pb-[30px] xl:mb-8">
          <h3 className="text-4xl font-bold text-center">Let's connect!</h3>
          <p className="text-white/60 max-w-[560px] mx-auto text-center">
            Reach out to discuss opportunities, projects, or simply to start a
            conversation. Fill out the form below to get in touch.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-[30px]">
          {/* form */}
          <div className="order-2 xl:order-none w-full max-w-xl">
            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
              {/* input */}
              <Input type="name" placeholder="Your name" />
              <Input type="email" placeholder="Your email" />
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here!"
              />
              {/* btn */}
              <Button size="md" className="max-w-40 uppercase">
                Send email
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center justify-center my-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
