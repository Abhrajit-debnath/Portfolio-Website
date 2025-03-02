// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { useMemo } from "react";

// const Footer = () => {
//   const socialIcons = useMemo(
//     () => [
//       {
//         icon: <InstagramIcon sx={{ fontSize: { xs: 25, sm: 28, md: 35 } }} />,
//         href: "https://www.instagram.com/thecode.nath/",
//         label: "Instagram",
//       },
//       {
//         icon: <LinkedInIcon sx={{ fontSize: { xs: 25, sm: 28, md: 35 } }} />,
//         href: "https://www.linkedin.com/in/abhrajit-debnath-ad2005/",
//         label: "LinkedIn",
//       },
//       {
//         icon: <GitHubIcon sx={{ fontSize: { xs: 25, sm: 28, md: 35 } }} />,
//         href: "https://github.com/Abhrajit-debnath",
//         label: "GitHub",
//       },
//     ],
//     []
//   );
//   return (
//     <div className="w-full text-white py-9 flex flex-col justify-center items-center">
//       <motion.div
//         initial={{ y: -100 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true, amount: 0.6 }}
//         className="logo text-3xl font-primary font-medium lg:text-medium pb-5 xl:pb-8"
//       >
//         <NavLink to="/" className="text-primary">
//           <span className="text-white pr-1">A</span>D
//         </NavLink>
//       </motion.div>

//       <nav className="flex justify-between items-center">
//         <ul className="flex justify-between items-center gap-4 lg:gap-15 xl:gap-17">
//           {["Home", "About Me", "Skills", "Projects"].map((item, index) => (
//             <motion.li
//               viewport={{ once: true, amount: 0.6 }}
//               key={index}
//               initial={{ y: -100 }}
//               whileInView={{ y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <NavLink
//                 viewport={{ once: true, amount: 0.6 }}
//                 initial={{ y: -100 }}
//                 whileInView={{ y: 0 }}
//                 to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "border border-primary rounded-full px-6 py-2 font-primary text-xs  xs:text-sm sm:text-base lg:text-base transition-all duration-200"
//                     : "border border-transparent font-primary text-xs xs:text-sm sm:text-base lg:text-base transition-all duration-200"
//                 }
//               >
//                 {item}
//               </NavLink>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//       <div className="social-icons flex justify-center items-center w-full text-white gap-4 lg:gap-8 mt-10">
//         {socialIcons.map((item, index) => (
//           <motion.a
//             key={index}
//             href={item.href}
//             aria-label={item.label}
//             className=""
//             whileInView={{ opacity: 1, scale: 1 }}
//             initial={{ opacity: 0, scale: 0 }}
//             transition={{
//               duration: 1.5,
//               ease: "easeInOut",
//               delay: index * 0.2,
//             }}
//             viewport={{ once: true, amount: 0.6 }}
//             target="_blank"
//           >
//             {item.icon}
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useMemo } from "react";

const Footer = () => {
  // Social Media Links
  const socialIcons = useMemo(
    () => [
      {
        icon: <InstagramIcon sx={{ fontSize: { xs: 25, sm: 28, md: 35 } }} />,
        href: "https://www.instagram.com/thecode.nath/",
        label: "Instagram",
      },
      {
        icon: <LinkedInIcon sx={{ fontSize: { xs: 25, sm: 28, md: 35 } }} />,
        href: "https://www.linkedin.com/in/abhrajit-debnath-ad2005/",
        label: "LinkedIn",
      },
      {
        icon: <GitHubIcon sx={{ fontSize: { xs: 25, sm: 28, md: 35 } }} />,
        href: "https://github.com/Abhrajit-debnath",
        label: "GitHub",
      },
    ],
    []
  );

  return (
    <div className="w-full text-white py-9 flex flex-col justify-center items-center">
      {/* Logo */}
      <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        className="logo text-3xl font-primary font-medium lg:text-medium pb-5 xl:pb-8"
      >
        <a href="#home" className="text-primary">
          <span className="text-white pr-1">A</span>D
        </a>
      </motion.div>

      {/* Navigation Links with Smooth Scroll */}
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center gap-4 lg:gap-15 xl:gap-17">
          {["Home", "About Me", "Skills", "Projects"].map((item, index) => (
            <motion.li
              viewport={{ once: true, amount: 0.6 }}
              key={index}
              initial={{ y: -100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.toLowerCase().replace(/\s+/g, "-"))
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="border border-transparent font-primary text-xs xs:text-sm sm:text-base lg:text-base transition-all duration-200 cursor-pointer"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="social-icons flex justify-center items-center w-full text-white gap-4 lg:gap-8 mt-10">
        {socialIcons.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            aria-label={item.label}
            className=""
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.6 }}
            target="_blank"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
