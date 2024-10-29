"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "@/node_modules/react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:items-start"
    >
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-[30px]">
          {/* text */}
          <div className="w-full max-w-[580px] xl:w-[50%] flex flex-col gap-[30px]">
            {/* message */}
            <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-[30px] border border-accent/10 border-dashed">
              <motion.h3
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h3 text-center w-full"
              >
                Let's connect!
              </motion.h3>
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="p max-w-[336px] mx-auto text-center"
              >
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </motion.p>
            </div>
            {/* info */}
            <div className="flex flex-col items-center justify-center rounded-xl p-10 border border-accent/10 border-dashed">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[70px] xl:h-[70px] bg-secondary text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="uppercase text-white">{item.title}</p>
                        <h3 className="font-secondary text-lg text-white/60">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* form */}
          <div className="w-full max-w-[580px] xl:w-[50%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
            >
              <p className="text-[16px] uppercase text-white/60">
                Fill out the form below to get in touch:
              </p>
              <Input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here!"
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" size="md" className="max-w-40 uppercase">
                Send email
              </Button>
              {status && (
                <p className="text-[16px] uppercase text-white/60 mt-4">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
