import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const RecentProjects = () => {
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

  return (
    <motion.div
      className="space-y-16 pt-32"
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
            className={`p-8 rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all group`}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="mb-2 font-bold text-4xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{project.role}</p>
                  <p className="text-gray-500">{project.duration}</p>
                </div>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiExternalLink size={24} />
                </a>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border-white/10 bg-white/5 px-4 py-2 border rounded-full text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
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
