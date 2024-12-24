import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/solarluiso/" },
  { icon: <FaGithub />, path: "https://github.com/solarluiso" },
  { icon: <FaDiscord />, path: "https://discordapp.com/users/solarluiso" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <motion.a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3 + index * 0.3,
            duration: 1,
          }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Social;
