"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { HiHome, HiUser, HiMail } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const navItems = [
  { text: "Home", icon: <HiHome className="text-xl" />, href: "#home" },
  { text: "About", icon: <HiUser className="text-xl" />, href: "#about" },
  { text: "Contact", icon: <HiMail className="text-xl" />, href: "#contact" },
  { text: "Blog", icon: <MdArticle className="text-xl" />, href: "#blog" },
  {
    text: "Services",
    icon: <RiCustomerService2Line className="text-xl" />,
    href: "#services",
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

  const showContent = !isScrolled || isHovered;
  const variant = showContent
    ? !isScrolled
      ? "expanded"
      : "expandedNoText"
    : "collapsed";

  return (
    <div>
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
                className="relative flex items-center border-2 border-gray-800 bg-black mx-auto rounded-full overflow-hidden"
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
                          YASH
                        </motion.p>
                      )}

                      <div
                        className={`flex items-center gap-8 ${
                          isScrolled ? "mx-auto" : ""
                        }`}
                      >
                        {navItems.map(({ text, icon, href }, i) => (
                          <motion.a
                            key={text}
                            href={href}
                            className="relative z-10 text-white hover:text-gray-300 transition-colors"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            custom={i}
                          >
                            {icon}
                          </motion.a>
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
