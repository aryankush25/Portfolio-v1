"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { MdWork, MdArticle } from "react-icons/md";
import { FaProjectDiagram, FaTools, FaCertificate } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const navItems = [
  { text: "Home", icon: <HiHome className="text-lg" />, href: "#profile" },
  {
    text: "Projects",
    icon: <FaProjectDiagram className="text-lg" />,
    href: "#projects",
  },
  {
    text: "Experience",
    icon: <MdWork className="text-lg" />,
    href: "#experience",
  },
  {
    text: "Tech Stack",
    icon: <FaTools className="text-lg" />,
    href: "#tech-stack",
  },
  { text: "Blog", icon: <MdArticle className="text-lg" />, href: "#blog" },
  {
    text: "Contact",
    icon: <RiContactsLine className="text-lg" />,
    href: "#contact",
  },
  {
    text: "Certifications",
    icon: <FaCertificate className="text-lg" />,
    href: "#certifications",
  },
];

const containerVariants = {
  expanded: {
    width: "36rem",
    height: "4rem",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  expandedNoText: {
    width: "24rem",
    height: "4rem",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  collapsed: {
    width: "8rem",
    height: "3rem",
    transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
  },
};

const contentVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href.slice(1),
        element: document.getElementById(item.href.slice(1)),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showContent = !isScrolled || isHovered;
  const variant = showContent
    ? !isScrolled
      ? "expanded"
      : "expandedNoText"
    : "collapsed";

  return (
    <div className="md:block hidden">
      <div className="mx-auto w-full max-w-screen-xl h-20" />
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            className="top-0 right-0 left-0 z-50 fixed"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mx-auto px-4 py-6 max-w-screen-xl">
              <motion.div
                className="relative flex items-center border-2 border-gray-800 bg-black mx-auto rounded-full"
                variants={containerVariants}
                animate={variant}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Dots (shown when collapsed) */}
                <motion.div
                  className="absolute inset-0 flex justify-center items-center gap-2 pointer-events-none"
                  animate={{ opacity: !showContent ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-full w-1.5 h-1.5" />
                  <div className="bg-white rounded-full w-1.5 h-1.5" />
                  <div className="bg-white rounded-full w-1.5 h-1.5" />
                </motion.div>

                {/* Content (shown when expanded) */}
                <AnimatePresence mode="wait">
                  {showContent && (
                    <motion.div
                      className="flex justify-between items-center px-8 w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {!isScrolled && (
                        <motion.p
                          className="font-semibold text-white"
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          custom={-1}
                        >
                          YASH SHARMA
                        </motion.p>
                      )}

                      <div
                        className={`flex items-center gap-8 ${
                          isScrolled ? "mx-auto" : ""
                        }`}
                      >
                        {navItems.map(({ text, icon, href }, i) => (
                          <motion.button
                            key={text}
                            onClick={() => handleNavClick(href)}
                            className={`group relative transition-all duration-200 ${
                              activeSection === href.slice(1)
                                ? "text-blue-400"
                                : "text-white/80 hover:text-white"
                            }`}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            custom={i}
                          >
                            <div className="group-hover:scale-110 transform transition-transform duration-200">
                              {icon}
                            </div>
                            <div className="top-0 left-1/2 absolute border-gray-700 bg-gray-900/95 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm mb-2 px-2 py-1 border rounded text-white text-xs whitespace-nowrap transition-all -translate-x-1/2 -translate-y-full duration-200 pointer-events-none">
                              {text}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
