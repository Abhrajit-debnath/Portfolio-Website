import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState([0]);

  const skills = [
    { name: "HTML", img: "/assets/html.png", progress: 90 },
    { name: "CSS", img: "/assets/css.svg", progress: 85 },
    { name: "JavaScript", img: "/assets/js.svg", progress: 80 },
    { name: "Tailwind CSS", img: "/assets/tailwindcss.svg", progress: 90 },
    { name: "Bootstrap", img: "/assets/bootstrap.png", progress: 75 },
    { name: "React", img: "/assets/react.svg", progress: 70 },
    { name: "Node.js", img: "/assets/nodejs.svg", progress: 50 },
    { name: "Express", img: "/assets/expressjs.png", progress: 50 },
    { name: "MongoDB", img: "/assets/mongodb.png", progress: 50 },
  ];

  return (
    <div className="my-36 py-20">
      <motion.h2
        className="text-white pb-10 text-4xl font-primary font-bold leading-[50px] lg:text-5.5xl xl:text-5.7xl xl:leading-[55px]"
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
      >
        My Skills
      </motion.h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        speed={800}
        loopAdditionalSlides={1}
        breakpoints={{
          640: { slidesPerView: 2, slidesPerGroup: 1 },
          1024: { slidesPerView: 3, slidesPerGroup: 1 },
          1220: { slidesPerView: 4, slidesPerGroup: 3 },
        }}
        onSlideChange={(swiper) => {
          const visibleSlides = [];
          for (let i = 0; i < swiper.params.slidesPerView; i++) {
            visibleSlides.push((swiper.realIndex + i) % skills.length);
          }
          setActiveIndex(visibleSlides);
        }}
      >
        {skills.map((skill, idx) => (
          <SwiperSlide key={idx} className="bg-[#250a39ed] rounded-[40px]">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: "linear" },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className={`w-full text-white cursor-pointer px-6 py-10 flex flex-col items-center justify-center text-center border-primary border-2 rounded-[40px]`}
              transition={{ ease: "easeInOut" }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={skill.img}
                alt={skill.name}
                className="w-32 h-25 object-contain"
              />
              <p className="mt-2 text-xl font-semibold sm:text-2xl">
                {skill.name}
              </p>
              <AnimatedCounter
                target={skill.progress}
                isActive={activeIndex.includes(idx)}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const AnimatedCounter = ({ target, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      let current = 0;
      setCount(0);
      const interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current == target) clearInterval(interval);
      }, 18);
      return () => clearInterval(interval);
    }
  }, [isActive, target]);

  return (
    <p className="mt-2 text-2xl text-white font-secondary xl:text-3xl">
      {count}%
    </p>
  );
};

export default Skills;
