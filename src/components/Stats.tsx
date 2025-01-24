import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";

import cicle from "../assets/svg/circle1.svg";
import waves from "../assets/svg/waves1.svg";

interface StatItemProps {
  number: string;
  text: string;
  delay: number;
}

const StatItem = ({ number, text, delay }: StatItemProps) => (
  <motion.div
    variants={{
      initial: { y: 20, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
        },
      },
    }}
  >
    <motion.h2
      className="font-bold text-5xl md:text-8xl"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.7 + delay, duration: 0.5 }}
    >
      {number}
    </motion.h2>
    <p className="max-w-[80%] text-base text-gray-500 md:text-xl">{text}</p>
  </motion.div>
);

const Stats = () => {
  const stats = [
    { number: "~3", text: "YEARS OF EXPERIENCE" },
    { number: "+18", text: "PROJECTS COMPLETED" },
    { number: "+28", text: "WORKED LIBRARIES" },
  ];

  const projectHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const arrowHover = {
    rest: { x: 0 },
    hover: {
      x: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="px-4 md:px-0">
      <motion.div
        className="flex-1 space-y-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <motion.h2
            className="font-bold text-5xl md:text-9xl leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            SOFTWARE <span className="text-gray-600">ENGINEER</span>
          </motion.h2>
          <motion.h4
            className="mt-6 md:mt-10 max-w-full md:max-w-[80%] text-gray-300 text-lg md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </motion.h4>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex md:flex-row flex-col gap-8 md:gap-12 py-8 md:py-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.text}
            number={stat.number}
            text={stat.text}
            delay={i * 0.2}
          />
        ))}
      </motion.div>

      <motion.div
        className="flex md:flex-row flex-col gap-8 md:gap-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {[
          {
            src: cicle,
            icon: (
              <FiLayers className="w-8 md:w-10 h-8 md:h-10" color="white" />
            ),
            title: "VIDEO EDITOR WITH PIXI.JS",
            link: "https://glue.is",
            isDark: true,
          },
          {
            src: waves,
            icon: (
              <MdOutlineChat
                className="w-8 md:w-10 h-8 md:h-10"
                color="black"
              />
            ),
            title: "AI CHAT WITH MULTIPLE LANGUAGES",
            link: "https://dashgen.in",
            isDark: false,
          },
        ].map((project, i) => (
          <motion.div
            key={project.title}
            className="relative rounded-3xl w-full md:w-80 h-60 md:h-72 cursor-pointer"
            variants={projectHover}
            initial="rest"
            whileHover="hover"
            custom={i}
          >
            <Image
              src={project.src}
              alt={project.title}
              className="border-2 border-black rounded-2xl"
              fill
              objectFit="cover"
            />
            <motion.div
              className="top-6 md:top-8 left-6 md:left-8 absolute w-full h-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
            >
              {project.icon}
            </motion.div>
            <motion.p
              className={`absolute flex justify-center items-center px-6 md:px-8 w-full h-full font-semibold text-2xl md:text-3xl ${
                project.isDark ? "text-white" : "text-black"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
            >
              {project.title}
            </motion.p>
            <motion.div
              className={`right-6 md:right-8 bottom-6 md:bottom-8 absolute border-2 p-2 md:p-3 rounded-2xl ${
                project.isDark ? "border-white" : "border-black"
              }`}
              variants={arrowHover}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.link, "_blank")}
            >
              <FiArrowRight
                size={24}
                className="md:w-[30px] md:h-[30px]"
                color={project.isDark ? "white" : "black"}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;
