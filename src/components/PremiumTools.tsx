"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiMui,
  SiStyledcomponents,
  SiSvelte,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiFastify,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiSocketdotio,
  SiAuth0,
  SiOrg,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiApachekafka,
  SiSequelize,
  SiRedux,
  SiDocker,
  SiKubernetes,
  SiChainlink,
  SiGithubactions,
  SiBuildkite,
  SiTerraform,
  SiAmazons3,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazonrds,
  SiNginx,
  SiFirebase,
  SiSupabase
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "C++", icon: SiCplusplus, color: "text-red-500" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "React Native", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "Material UI", icon: SiMui, color: "text-blue-400" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "text-pink-400" },
      { name: "Svelte", icon: SiSvelte, color: "text-red-500" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "Fastify", icon: SiFastify, color: "text-white" },
      { name: "Flask", icon: SiFlask, color: "text-black" },
      { name: "FastAPI", icon: SiFastapi, color: "text-green-500" },
      { name: "Django", icon: SiDjango, color: "text-green-700" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-black" },
      { name: "OAuth 2.0", icon: SiAuth0, color: "text-orange-500" },
      { name: "OpenID Connect", icon: SiAuth0, color: "text-blue-500" },
      { name: "Ory Kratos", icon: SiOrg, color: "text-blue-400" },
      { name: "Ory Hydra", icon: SiOrg, color: "text-blue-600" },
      { name: "Microservices", icon: SiNodedotjs, color: "text-green-400" },
      { name: "Distributed Systems", icon: SiNodedotjs, color: "text-green-600" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "SQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Kafka", icon: SiApachekafka, color: "text-black" },
      { name: "Sequelize ORM", icon: SiSequelize, color: "text-blue-500" },
      { name: "TypeORM", icon: SiTypescript, color: "text-blue-400" },
      { name: "SQLAlchemy", icon: SiPython, color: "text-blue-500" },
      { name: "Alembic", icon: SiPython, color: "text-green-500" },
    ],
  },
  {
    title: "State Management",
    items: [
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
      { name: "Redux Saga", icon: SiRedux, color: "text-purple-700" },
      { name: "React Query", icon: SiReact, color: "text-red-400" },
      { name: "Zustand", icon: SiReact, color: "text-blue-400" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "Docker Containerisation", icon: SiDocker, color: "text-blue-600" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
      { name: "Langchain", icon: SiChainlink, color: "text-blue-400" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-400" },
      { name: "Buildkite", icon: SiBuildkite, color: "text-green-500" },
      { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
      { name: "AWS S3", icon: SiAmazons3, color: "text-yellow-500" },
      { name: "AWS EC2", icon: SiAmazonec2, color: "text-yellow-500" },
      { name: "AWS SES", icon: SiAmazonecs, color: "text-yellow-500" },
      { name: "AWS RDS", icon: SiAmazonrds, color: "text-yellow-500" },
      { name: "Nginx", icon: SiNginx, color: "text-green-500" },
    ],
  },
  {
    title: "BaaS",
    items: [
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
    ],
  },
];

export default function PremiumTools() {
  return (
    <motion.div
      className="space-y-8 md:space-y-16 px-4 md:px-0 pt-16 md:pt-32"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.h2
        className="font-bold text-5xl md:text-[120px] leading-none"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <span className="text-white">TECH</span>{" "}
        <span className="text-gray-600">STACK</span>
      </motion.h2>

      <div className="space-y-4 md:space-y-6">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="space-y-4 md:space-y-6"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            <h3 className="font-semibold text-white/80 text-xl md:text-2xl">
              {category.title}
            </h3>
            <motion.div
              className="gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {category.items.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative flex items-center gap-3 md:gap-4 border-white/10 bg-white/5 md:hover:bg-white/10 backdrop-blur-sm p-3 md:p-4 border rounded-2xl transition-colors cursor-default md:cursor-pointer group"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                >
                  <item.icon
                    className={`w-6 h-6 md:w-8 md:h-8 ${item.color}`}
                  />
                  <div>
                    <h4 className="md:group-hover:text-white/90 font-medium text-sm text-white md:text-base">
                      {item.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
