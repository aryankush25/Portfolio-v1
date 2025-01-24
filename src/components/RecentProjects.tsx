import { motion, Variants } from "framer-motion";
import React from "react";
import {
  FiExternalLink,
  FiCalendar,
  FiBriefcase,
  FiClock,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiWebgl,
  SiSvg,
  SiJavascript,
} from "react-icons/si";
import { BsEnvelopePaper } from "react-icons/bs";

const RecentProjects = () => {
  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      "Next.js": <SiNextdotjs className="w-4 h-4" />,
      TypeScript: <SiTypescript className="w-4 h-4" />,
      "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
      "React Pixi": <SiReact className="w-4 h-4" />,
      "Pixi.js": <SiWebgl className="w-4 h-4" />,
      SVG: <SiSvg className="w-4 h-4" />,
      "React-Email": <BsEnvelopePaper className="w-4 h-4" />,
    };
    return icons[tech] || <SiJavascript className="w-4 h-4" />;
  };

  const formatDuration = (duration: string) => {
    const [start, end] = duration.split(" - ");
    const isPresent = end.toLowerCase() === "present";
    return { start, end, isPresent };
  };

  const projects = [
    {
      title: "Glue",
      role: "Software Development Engineer",
      duration: "03/2022 - Present",
      description:
        "Orchestrated a canvas using Pixi.js and React-pixi with WebGL rendering for high-performance 2D graphics processing, achieving 30% more efficiency. Traced performance bottlenecks resulting in a 150ms reduction in load time.",
      technologies: [
        "Pixi.js",
        "React Pixi",
        "Next.js",
        "Zustand",
        "TypeScript",
      ],
      url: "glue.is",
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      title: "Dashgen",
      role: "Software Development Engineer and UI/UX Designer",
      duration: "06/2024 - Present",
      description:
        "Developed a multi-platform AI integration tool with 5 different AI models, achieving 20% improvement in user experience through interface design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      url: "dashgen.in",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "xG",
      role: "Software Development Engineer",
      duration: "05/2023 - 12/2024",
      description:
        "Engineered a high-performance video creator app using Pixi.js and React Pixi.js, resulting in 20% faster rendering. Designed an advanced email edit tool increasing customization by 40%. Built an image positioning system with 10x customization accuracy.",
      technologies: ["Next.js", "React-Email", "SVG", "Tailwind CSS"],
      gradient: "from-pink-500/10 to-orange-500/10",
    },
  ];

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="space-y-16 pt-32"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={titleVariants}>
        <div className="flex items-center gap-4 mb-4">
          <HiOutlineSparkles className="w-8 h-8 text-white" />
          <h3 className="font-medium text-2xl text-white">Featured Work</h3>
        </div>
        <motion.h2 className="font-bold text-[120px] leading-none">
          <span className="text-white">RECENT</span>{" "}
          <span className="text-gray-600">PROJECTS</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="gap-12 grid grid-cols-1"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className={`p-8 rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden`}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="relative space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="group-hover:text-white/90 mb-2 font-bold text-4xl text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-lg">
                    <FiBriefcase className="w-5 h-5" />
                    <p>{project.role}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-500">
                      <FiCalendar className="w-4 h-4" />
                      <p>{formatDuration(project.duration).start}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <FiClock className="w-4 h-4" />
                      <p
                        className={
                          formatDuration(project.duration).isPresent
                            ? "text-green-400"
                            : ""
                        }
                      >
                        {formatDuration(project.duration).end}
                      </p>
                    </div>
                  </div>
                </div>
                <motion.a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-white/5 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={24} />
                </motion.a>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="flex items-center gap-2 border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 border rounded-full text-gray-300 text-sm transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentProjects;
