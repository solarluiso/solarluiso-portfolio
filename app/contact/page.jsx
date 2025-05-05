"use client";

import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 786 825 4670",
    action: () => (window.location.href = "tel:+17868254670"),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "solarluiso@gmail.com",
    action: () => (window.location.href = "mailto:solarluiso@gmail.com"),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Washington, DC",
    action: () =>
      window.open("https://www.google.com/maps?q=Washington+DC", "_blank"),
  },
];

const Contact = () => {
  const formRef = useRef(null); // Create a reference for the form

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Check if all fields are filled
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "error",
      });
      return;
    }

    // Validate email format (extra layer)
    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email format.",
        icon: "error",
      });
      return;
    }

    // Proceed with form submission
    formData.append("access_key", "c83ad2be-7bc5-4273-9457-6524f5deda36");
    const json = JSON.stringify(Object.fromEntries(formData));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      formRef.current.reset(); // Reset the form
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  }

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-[30px]">
          {/* text */}
          <div className="w-full h-[524px] max-w-[500px] flex flex-col justify-between gap-6">
            {/* message */}
            <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-[30px] bg-black/10 text-white">
              <h3 className="h3 text-center w-full">Let's connect!</h3>
              <p className="p max-w-[336px] mx-auto text-center">
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </p>
            </div>
            {/* info */}
            <div className="h-full flex flex-col items-center justify-center rounded-xl p-8 bg-black/10 text-white">
              <ul className="flex flex-col gap-[30px]">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div
                        className="w-12 h-12 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500"
                        onClick={item.action}
                      >
                        <div className="text-xl">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="uppercase text-accent">{item.title}</p>
                        <h3 className="text-base tracking-tight text-white/60">
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
          <div className="w-full max-w-[500px]">
            <form
              ref={formRef} // Attach the reference to the form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 bg-secondary rounded-xl"
            >
              <p className="text-[16px] uppercase text-white/60">
                Fill out the form below to get in touch:
              </p>
              <Input name="name" type="text" placeholder="Your name" required />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here!"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="max-w-40 uppercase"
              >
                Send email
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
