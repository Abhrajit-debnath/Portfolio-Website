import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const About = () => {
  const text =
    "A recent graduate from Amity University Online with a passion for software development and a knack for problem-solving. My journey began at Sri Aurobindo Vidyamandir, where I developed a strong foundation in programming and Tech, eventually sparking my interest in technology.";

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative px-6 lg:px-16 mid-md:mb-48 mb-36">
      <div className="w-40 h-50 bg-circle absolute rounded-full blur-[150px] top-[450px] md:top-[300px] left-0 -z-1 mid-md:w-0 xl:w-30 1xl:-left-56 xl:-left-26 xl:blur-[250px] xl:-top-10 mid-md:blur-[250px]"></div>
      <motion.img
        initial={{ x: 0, y: 0 }}
        animate={{ x: 3, y: 15 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "mirror",
        }}
        src="/assets/abt-shape.png"
        alt=""
        className="w-12 absolute -top-8 right-5 mid-md:right-20 md:w-15 md:right-30 md:-top-10 mid-md:w-20  mid-md:-top-20 lg:-top-10 xl:-top-10 xl:right-40 2xl:right-48 2xl:-top-10"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col mid-md:flex-row-reverse items-center gap-16 mid-md:items-center"
      >
        {/* LEFT SIDE - HEADING + TEXT */}
        <div className="mid-md:w-1/2">
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="text-white pb-4 text-4xl font-primary font-bold leading-[50px] lg:text-5.5xl xl:text-5.7xl xl:leading-[55px]"
          >
            About Me
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white font-secondary font-normal text-lg leading-relaxed"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.01, duration: 0.3 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Education Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            className="abt pt-10 w-full group hover:cursor-pointer"
          >
            {/* Top Section */}
            <div className="top py-6 px-8 border-primary border-b-[1px] group-hover:border-[#0f0715] group-hover:rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div className="flex items-center text-white gap-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                >
                  <AutoStoriesIcon
                    sx={{ fontSize: { xs: 22, sm: 25, md: 35 } }}
                  />
                </motion.div>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.3,
                      },
                    },
                  }}
                  className="font-primary text-sm md:text-lg"
                >
                  Studied from Sri Aurobindo Vidyamandir from arts, 2023
                </motion.h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    },
                  }}
                >
                  <ArrowOutwardIcon
                    sx={{ fontSize: { xs: 22, sm: 25, md: 35 } }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom py-6 px-8 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300">
              <div className="flex items-center text-white gap-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.7,
                      },
                    },
                  }}
                >
                  <SchoolIcon sx={{ fontSize: { xs: 22, sm: 25, md: 35 } }} />
                </motion.div>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.9,
                      },
                    },
                  }}
                  className="font-primary text-sm md:text-lg"
                >
                  Graduated from Amity University Online in BCA (Specialization
                  in Cloud Security), 2026
                </motion.h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 1,
                      },
                    },
                  }}
                >
                  <ArrowOutwardIcon
                    sx={{ fontSize: { xs: 22, sm: 25, md: 35 } }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="mid-md:w-1/2 flex justify-center mid-md:justify-start mid-md:pl-24 relative">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="relative w-64 mid-md:w-72 xl:w-80"
          >
            {/* Blurred Background */}
            <div className="w-72 h-16 xl:w-96 bg-[#0F0715] absolute blur-[8px] -bottom-5 left-1/2 -translate-x-1/2 z-20"></div>

            {/* Profile Image */}
            <img
              src="/assets/abt-img.png"
              alt="About Me"
              className="w-full relative z-10 rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
