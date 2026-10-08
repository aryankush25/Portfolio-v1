import { motion, Variants } from "framer-motion";
import React from "react";
import {
  FiExternalLink,
  FiCalendar,
  FiBriefcase,
  FiClock,
  FiGithub,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiLangchain,
  SiDocker,
  SiCaddy,
  SiTerraform,
  SiGithubactions,
  SiAmazonwebservices,
  SiFirebase,
  SiNodedotjs,
  SiGraphql,
  SiApachekafka,
  SiTimescale,
  SiAuth0,
  SiOpenid,
} from "react-icons/si";

interface ProjectLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

const RecentProjects = () => {
  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      "Next.js": <SiNextdotjs className="w-4 h-4" />,
      TailwindCSS: <SiTailwindcss className="w-4 h-4" />,
      Zustand: <SiReact className="w-4 h-4" />,
      React: <SiReact className="w-4 h-4" />,
      "React Native": <SiReact className="w-4 h-4" />,
      NestJS: <SiNestjs className="w-4 h-4" />,
      "PostgreSQL (RDS)": <SiPostgresql className="w-4 h-4" />,
      PostgreSQL: <SiPostgresql className="w-4 h-4" />,
      LangChain: <SiLangchain className="w-4 h-4" />,
      Docker: <SiDocker className="w-4 h-4" />,
      Caddy: <SiCaddy className="w-4 h-4" />,
      Terraform: <SiTerraform className="w-4 h-4" />,
      "GitHub Actions": <SiGithubactions className="w-4 h-4" />,
      AWS: <SiAmazonwebservices className="w-4 h-4" />,
      Firebase: <SiFirebase className="w-4 h-4" />,
      "Node.js": <SiNodedotjs className="w-4 h-4" />,
      GraphQL: <SiGraphql className="w-4 h-4" />,
      Kafka: <SiApachekafka className="w-4 h-4" />,
      TimescaleDB: <SiTimescale className="w-4 h-4" />,
      Deepstream: <HiOutlineSparkles className="w-4 h-4" />,
      "OAuth 2.0": <SiAuth0 className="w-4 h-4" />,
      "OpenID Connect": <SiOpenid className="w-4 h-4" />,
    };
    return icons[tech] || <SiJavascript className="w-4 h-4" />;
  };

  const formatDuration = (duration: string) => {
    const [start, end] = duration.split(" - ");
    const isPresent = end.toLowerCase() === "present";
    return { start, end, isPresent };
  };

  const projects: {
    title: string;
    role: string;
    duration: string;
    description: string;
    technologies: string[];
    links: ProjectLink[];
    gradient: string;
  }[] = [
    {
      title: "Dashgen",
      role: "Founder",
      duration: "09/2024 - Present",
      description:
        "A platform to interact with multiple LLMs (OpenAI, Anthropic, Mistral, Groq, Google Gen AI, xAI, DeepSeek) through your own API keys in a single, unified interface. 100+ active users, built and operated solo. Terraform-managed AWS across three environments.",
      technologies: [
        "NestJS",
        "PostgreSQL (RDS)",
        "LangChain",
        "Docker",
        "Caddy",
        "Terraform",
        "GitHub Actions",
        "AWS",
        "Next.js",
        "TailwindCSS",
        "Zustand",
      ],
      links: [
        {
          href: "https://dashgen.in",
          label: "Visit Dashgen website",
          icon: FiExternalLink,
        },
        {
          href: "https://github.com/aryankush25/dashgen-architecture",
          label: "Read the Dashgen architecture write-up",
          icon: FiGithub,
        },
      ],
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      title: "Glue Identity",
      role: "Technical Lead, Glue Labs",
      duration: "01/2022 - 01/2025",
      description:
        "Identity management platform and OAuth 2.0 provider. Moved a non-standard in-house implementation onto Ory Kratos and Ory Hydra (OAuth 2.0 and OpenID Connect).",
      technologies: ["Ory Kratos", "Ory Hydra", "OAuth 2.0", "OpenID Connect"],
      links: [],
      gradient: "from-green-500/10 to-teal-500/10",
    },
    {
      title: "FIFO",
      role: "Technical Lead, Glue Labs",
      duration: "10/2021 - 01/2025",
      description:
        "Real-time voice app that pivoted into a content publishing platform. React Native + Firebase, then React, Node.js, GraphQL and PostgreSQL; Deepstream pub/sub for real-time rooms; NestJS events service with Kafka and TimescaleDB.",
      technologies: [
        "React Native",
        "Firebase",
        "React",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "Deepstream",
        "NestJS",
        "Kafka",
        "TimescaleDB",
      ],
      links: [],
      gradient: "from-purple-500/10 to-pink-500/10",
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
  };

  return (
    <motion.div
      className="space-y-8 md:space-y-16 px-4 md:px-0 pt-16 md:pt-32"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={titleVariants}>
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <HiOutlineSparkles className="w-6 md:w-8 h-6 md:h-8 text-white" />
          <h3 className="font-medium text-white text-xl md:text-2xl">
            Featured Work
          </h3>
        </div>
        <motion.h2 className="font-bold text-5xl md:text-8xl lg:text-7xl xl:text-[120px] leading-none">
          <span className="text-white">RECENT</span>{" "}
          <span className="text-gray-600">PROJECTS</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="gap-6 md:gap-12 grid grid-cols-1"
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
            className={`p-5 md:p-8 rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-3xl border border-white/10 md:hover:border-white/20 transition-all group relative overflow-hidden md:[&:hover]:scale-105`}
            variants={cardVariants}
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="relative space-y-4 md:space-y-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="md:group-hover:text-white/90 mb-2 font-bold text-2xl text-white md:text-4xl transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-base text-gray-400 md:text-lg">
                    <FiBriefcase className="w-4 md:w-5 h-4 md:h-5 shrink-0" />
                    <p className="line-clamp-1">{project.role}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
                      <FiCalendar className="w-4 h-4 shrink-0" />
                      <p>{formatDuration(project.duration).start}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
                      <FiClock className="w-4 h-4 shrink-0" />
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
                {project.links.length > 0 && (
                  <div className="flex shrink-0">
                    {project.links.map((link) => (
                      <React.Fragment key={link.href}>
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.label}
                          aria-label={link.label}
                          className="md:flex hidden hover:bg-white/5 p-2 rounded-full text-gray-400 hover:text-white transition-colors shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <link.icon className="w-5 md:w-6 h-5 md:h-6" />
                        </motion.a>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.label}
                          aria-label={link.label}
                          className="flex md:hidden p-2 rounded-full text-gray-400 shrink-0"
                        >
                          <link.icon className="w-5 h-5" />
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 md:gap-2 border-white/10 md:hover:border-white/20 bg-white/5 md:hover:bg-white/10 px-3 md:px-4 py-1.5 md:py-2 border rounded-full text-gray-300 text-xs md:text-sm transition-colors cursor-default"
                  >
                    {getTechIcon(tech)}
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
