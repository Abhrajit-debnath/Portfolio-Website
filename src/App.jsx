import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NorthIcon from "@mui/icons-material/North";
import { useState, useEffect } from "react";

function App() {
  const [pagescroll, setpagescroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setpagescroll((window.scrollY > 20 ? true : false));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollup = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="w-[90%] m-auto xl:w-[85%] 1xl:w-[85%] 2xl:w-[81%]">
      <section id="home">
          <Header />
          <Hero />
        </section>
        <section id="about-me">
          <About />
        </section>
      </div>

      <div className="bg-[#1B0928]">
        <div className="w-[90%] m-auto xl:w-[85%] 1xl:w-[85%] 2xl:w-[81%]">
        <section id="skills">
            <Skills />
          </section>
        </div>
      </div>

      <div className="w-[90%] m-auto xl:w-[85%] 1xl:w-[85%] 2xl:w-[81%]">
      <section id="projects">
          <Projects />
        </section>
        <ToastContainer />
        <Contact />
        <Footer />
      </div>

      <div
        className={`Top w-12 h-12 bg-primary rounded-full flex justify-center items-center text-white fixed bottom-5 right-5 lg:bottom-10 lg:right-10 z-50 transition-opacity sm:w-15 sm:h-15 xl:w-18 xl:h-18 cursor-pointer ${
          pagescroll ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleScrollup}
      >
        <NorthIcon sx={{ fontSize: { xs: 25, sm: 30, md: 33 } }} />
      </div>
    </div>
  );
}

export default App;
