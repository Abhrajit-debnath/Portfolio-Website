import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

function Header() {
  const [togglehamburger, settogglehamburger] = useState(false);

  // Disable scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = togglehamburger ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [togglehamburger]);

  return (
    <div className="w-full text-white py-9 flex justify-between items-center">
      {/* ✅ Logo */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="logo hidden md:block text-3xl font-primary font-medium w-30 lg:w-38 lg:text-medium"
      >
        <a
          href="home"
          className="text-primary"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          <span className="text-white pr-1">A</span>D
        </a>
      </motion.div>

      {/* ✅ Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center gap-10">
        <ul className="flex justify-between items-center gap-7 lg:gap-15 xl:gap-17">
          {["Home", "About Me", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <motion.li
                key={index}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <a
                  href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e)=>{
                    e.preventDefault()
                    document.getElementById(item.toLowerCase().replace(/\s+/g, "-")).scrollIntoView({behavior:"smooth",block:"center"})
                  }}
                  className={
                    "border border-transparent font-primary text-sm lg:text-base transition-all duration-200"
                  }
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </nav>

      {/* ✅ Mobile Navbar with Animation */}
      <AnimatePresence>
        {togglehamburger && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mobile-menu fixed top-0 left-0 w-full h-full bg-secondary/35 backdrop-blur-xl flex flex-col justify-center items-center z-50 text-center"
            aria-hidden={!togglehamburger}
          >
            <ul className="flex flex-col gap-8 transition-all duration-500 ease-in-out">
              {["Home", "About Me", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={() => settogglehamburger(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "border border-primary rounded-full px-5 py-2 font-primary text-base sm:text-lg"
                          : "px-5 py-2 font-primary text-base sm:text-lg"
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            <div className="close absolute top-5 right-5">
              <CloseIcon
                sx={{ fontSize: 34 }}
                onClick={() => settogglehamburger(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hamburger Menu */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="md:hidden cursor-pointer"
        onClick={() => settogglehamburger(true)}
      >
        <MenuIcon sx={{ fontSize: 32 }} />
      </motion.div>

      {/* ✅ Call-to-Action Button */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="w-32 sm:w-35 md:w-36 lg:w-38 py-3 bg-gradient-to-r from-primary to-secondary rounded-full flex justify-center items-center gap-1"
      >
        <a href="tel:7044349126" className="font-primary text-sm md:text-base">
          Let's Talk
        </a>
        <ArrowOutwardIcon sx={{ fontSize: 25 }} />
      </motion.div>
    </div>
  );
}

export default Header;
