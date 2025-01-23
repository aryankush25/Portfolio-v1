"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { HiHome, HiUser, HiMail } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const navItems = [
  { text: "Home", icon: <HiHome className="text-xl" /> },
  { text: "About", icon: <HiUser className="text-xl" /> },
  { text: "Contact", icon: <HiMail className="text-xl" /> },
  { text: "Blog", icon: <MdArticle className="text-xl" /> },
  { text: "Services", icon: <RiCustomerService2Line className="text-xl" /> },
];

const containerVariants = {
  expanded: {
    width: "36rem",
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

const dotsVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.2 },
  },
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const showContent = !isScrolled || isHovered;

  return (
    <div className="top-0 right-0 left-0 z-50 fixed">
      <div className="mx-auto px-4 py-6 max-w-screen-xl">
        <motion.div
          className="flex justify-between items-center border-2 bg-black mx-auto px-8 border-black rounded-full overflow-hidden"
          variants={containerVariants}
          animate={showContent ? "expanded" : "collapsed"}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            {showContent && (
              <>
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

                <div className="flex items-center gap-8">
                  {navItems.map(({ text, icon }, i) => (
                    <motion.a
                      key={text}
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
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
              </>
            )}
          </AnimatePresence>

          <motion.div
            className="left-1/2 absolute flex gap-2 -translate-x-1/2"
            variants={dotsVariants}
            initial="hidden"
            animate={!showContent ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-full w-1.5 h-1.5" />
            <div className="bg-white rounded-full w-1.5 h-1.5" />
            <div className="bg-white rounded-full w-1.5 h-1.5" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
