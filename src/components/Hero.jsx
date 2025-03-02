import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Hero() {
  const [heading, setHeading] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(130);
  const headingText = "Developer turning code into creativity.";

  useEffect(() => {
    const handleType = () => {
      const currentText = isDeleting
        ? headingText.substring(0, heading.length - 1)
        : headingText.substring(0, heading.length + 1);
      setHeading(currentText);

      if (!isDeleting && currentText === headingText) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait 1 second before deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
      }
    };

    const typingTimer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [heading, isDeleting, typingSpeed]);

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
    <div className="mid-md:mb-48 mb-36 mt-15 lg:mt-0 lg:h-[650px] lg:mb-28 xl:h-[750px] xl:mt-0 top pt-5 w-full text-center relative mid-md:flex mid-md:justify-between mid-md:text-left mid-md:items-center">
      <div className="w-50 h-50 bg-circle absolute rounded-full blur-[150px] top-70 right-0 -z-1 mid-md:-top-50 mid-md:w-70 mid-md:h-70 mid-md:blur-[250px]"></div>
      <motion.img
        initial={{ x: 0, y: 0 }}
        animate={{ x: 3, y: 15 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "mirror" }}
        src="/assets/shape.png"
        alt="shape"
        className="w-10 absolute -top-8 right-10 md:w-10 md:right-30 md:top-10 mid-md:left-76 mid-md:top-5 mid-md:w-12 xl:top-24 xl:left-80 2xl:left-96 2xl:top-40"
      />
      <div className="flex flex-col gap-3 mid-md:hidden">
        <div className="flex items-center justify-center">
          <motion.img
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            src="/assets/hand.png"
            alt="Waving hand"
            className="w-8 xs:w-10 sm:w-11 md:w-12"
          />
          <motion.h3
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -70, opacity: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-white font-primary font-medium text-medium-smaller flex items-center justify-center pt-2 xs:text-lg md:text-xl"
          >
            Hi There, I am Abhrajit Debnath
          </motion.h3>
        </div>
        <motion.h1
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, ease: "backInOut" }}
          className="text-white font-primary text-2xl h-17 xs:h-25 sm:h-28 md:h-29 font-bold leading-[35px] xs:text-4xl xs:leading-12 sm:text-5.5xl sm:leading-14 md:text-5.7xl"
        >
          {heading}
        </motion.h1>
        <motion.p
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -80, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-white text-base xs:text-lg font-secondary"
        >
          Transforming ideas into innovative solutions, I am a passionate Full
          stack web developer dedicated to creating production level websites.
        </motion.p>
        <div className="bottom mt-3 flex flex-col justify-center items-center gap-6 mid-md:hidden">
          <motion.img
            animate={{ x: 5, y: 5 }}
            initial={{ x: 0, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            src="/assets/hero-img.png"
            alt="Image"
            className="w-62 sm:w-75 object-cover"
          />
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
            className="w-40 sm:w-41 md:w-45 py-3 text-white bg-linear-to-r from-primary to-secondary rounded-full flex justify-center items-center gap-1"
          >
            <a
              href="#"
              className="font-primary "
            >
              Download CV
            </a>
            <GetAppIcon sx={{ fontSize: { xs: 22, sm: 25, md: 25 } }} />
          </motion.div>
          <div className="social-icons flex justify-center items-center w-full text-white gap-4">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                aria-label={item.label}
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
      </div>
      {/* Desktop View */}
      <div className="hidden mid-md:w-1/2 mid-md:flex-col mid-md:flex gap-2">
        <div className="flex items-center justify-self-auto">
          <motion.img
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            src="/assets/hand.png"
            alt="Waving hand"
            className="w-8"
          />
          <motion.h3
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-white font-primary font-medium text-medium-smaller pt-2 lg:text-base xl:text-lg"
          >
            Hi There, I am Abhrajit Debnath
          </motion.h3>
        </div>
        <motion.h1
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, ease: "backInOut" }}
          className="text-white font-primary pb-3 mid-md:h-30 xl:h-30 1xl:h-33 2xl:h-40 text-4xl font-bold leading-[50px] lg:text-5.5xl xl:text-5.7xl xl:leading-[55px] 1xl:text-5.8xl 1xl:leading-[62px] 2xl:text-5.9xl 2xl:leading-[72px]"
        >
          {heading}
        </motion.h1>
        <motion.p
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -80, opacity: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          className="text-white text-base pb-5 xl:text-lg 1xl:text-xl 2xl:text-1xl font-secondary"
        >
          Transforming ideas into innovative solutions, I am a passionate Full
          stack web developer dedicated to creating production level websites.
        </motion.p>
        <div className="flex items-center gap-5 w-full">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-40 2xl:w-44 cursor-pointer py-3 text-white bg-gradient-to-r from-primary to-secondary rounded-full flex justify-center items-center gap-1 transition-colors duration-700 ease-in-out hover:bg-gradient-to-l"
            viewport={{ once: true, amount: 0.6 }}
          >
            <a href="#" className="font-primary text-base font-normal">
              Download CV
            </a>
            <GetAppIcon sx={{ fontSize: { xs: 22, sm: 25, md: 25 } }} />
          </motion.div>
          <div className="social-icons flex items-center text-white gap-6 w-1/2">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                aria-label={item.label}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 1.8 + index * 0.2,
                }}
                target="_blank"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="mid-md:w-1/2 hidden mid-md:flex mid-md:justify-end mid-md:items-center mid-md:object-cover xl:pr-30 mid-md:pr-10">
        <motion.img
          animate={{ x: 5, y: 10 }}
          initial={{ x: 0, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          src="/assets/hero-img-md.png"
          alt="Hero Image"
          className="w-70 xl:w-82 1xl:w-85 2xl:w-96"
        />
      </div>
    </div>
  );
}

export default Hero;
