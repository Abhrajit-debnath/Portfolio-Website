import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import axios from "axios";

const Projects = () => {
  const [projectsupperRow, setprojectsupperRow] = useState([]);
  const [projectlowerRow, setprojectlowerRow] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Abhrajit-debnath/repos")
      .then((response) => {
        let excludedRepos = [
          "Abhrajit-debnath",
          "ultimate-js-course-youtube",
          "testspotify",
          "Sigma-Web-Dev-Course",
          "100-days-of-code-youtube",
          "Portfolio-Website"
        ];
        let repos = response.data.filter(
          (repo) => !excludedRepos.includes(repo.name)
        );

        repos = repos.map((repo) => ({
          ...repo,
          homepage:
            repo.name === "Bitclear-cryptocurrency-website"
              ? "https://abhrajit-debnath.github.io/Bitclear-cryptocurrency-website/"
              : repo.name === "Weather-App"
              ? "https://abhrajit-debnath.github.io/Weather-App/"
              : repo.name === "Password-Generator"
              ? "https://abhrajit-debnath.github.io/Password-Generator/"
              : repo.name === "Netflix--Clone"
              ? "https://abhrajit-debnath.github.io/Netflix--Clone/"
              : repo.name === "file-drive"
              ? "https://file-drive-yi6x.onrender.com/"
              : repo.homepage || null,
        }));
        const middleindex = repos.length / 2;
        setprojectsupperRow(repos.slice(0, middleindex));
        setprojectlowerRow(repos.slice(middleindex));
      })
      .catch((error) => console.error("Error Fetching repositories", error));
  }, []);

  return (
    <div className="projects relative my-36">
      <motion.h2
        className="text-white pb-10 text-4xl font-primary font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        My Projects
      </motion.h2>

      {/* Upper Slide  */}
      <Swiper
        className="mb-10 sm:mb-12 lg:mb-16 relative"
        modules={[Autoplay, FreeMode]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        freeMode={true}
        loop={true}
        speed={2000}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1220: { slidesPerView: 4 },
        }}
      >
        <div className="w-20 h-72 xs:h-90 xl:w-16 bg-[#0F0715] absolute blur-[10px] -bottom-5 z-20 -left-9 hidden md:block"></div>
        <div className="w-20 h-72 xs:h-90 xl:w-16 bg-[#0F0715] absolute blur-[10px] -bottom-5  z-20 -right-9 hidden  md:block"></div>
        {projectsupperRow.map((project, idx) => (
          <SwiperSlide key={idx}>
            <a href={project.homepage} target="_blank">
              <motion.div
                className="text-center w-full cursor-pointer"
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "linear" },
                }}
              >
                <img
                  src="/assets/projects-bg.jpg"
                  alt={project.name}
                  className="rounded-3xl"
                />
                <h3 className="mt-2 text-lg font-semibold text-white capitalize">
                  {project.name.replace(/-/g, " ")}
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lower Slide  */}
      <Swiper
        className="relative"
        modules={[Autoplay, FreeMode]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={true}
        loop={true}
        speed={2000}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1220: { slidesPerView: 4 },
        }}
      >
        <div className="w-20 h-72 xs:h-90 xl:w-16 bg-[#0F0715] absolute blur-[10px] -bottom-5 z-20 -left-9 hidden md:block"></div>
        <div className="w-20 h-72 xs:h-90 xl:w-16 bg-[#0F0715] absolute blur-[10px] -bottom-5  z-20 -right-9 hidden md:block"></div>
        {projectlowerRow.map((project, idx) => (
          <SwiperSlide key={idx}>
            <a href={project.homepage} target="_blank">
              <motion.div
                className="text-center w-full cursor-pointer"
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "linear" },
                }}
              >
                <img
                  src="/assets/projects-bg.jpg"
                  alt={project.name}
                  className="rounded-3xl"
                />
                <h3 className="mt-2 text-xl font-semibold text-white capitalize">
                  {project.name.replace(/-/g, " ")}
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
