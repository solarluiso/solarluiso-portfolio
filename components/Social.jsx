import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/solarluiso/" },
  { icon: <FaGithub />, path: "https://github.com/solarluiso" },
  { icon: <FaDiscord />, path: "https://discordapp.com/users/solarluiso" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
