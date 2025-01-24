import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  const projects = [
    {
      title: "Revo",
      description: "Free Framer Template",
      image: "/images/revo.png",
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      title: "NajmAI",
      description: "SaaS Framer Template",
      image: "/images/najmai.png",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Nashra",
      description: "SaaS Framer Template",
      image: "/images/nashra.png",
      gradient: "from-pink-500/10 to-orange-500/10",
    },
  ];

  const containerVariants: Variants = {
    initial: {},
    animate: {},
  };

  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <motion.h2 className="font-bold text-[120px] leading-none">
          <span className="text-white">RECENT</span>{" "}
          <span className="text-gray-600">PROJECTS</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="gap-8 grid grid-cols-1"
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
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentProjects;
