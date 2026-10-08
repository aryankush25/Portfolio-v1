import { motion, Variants } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "Thoughtworks",
      role: "Senior Software Engineer",
      period: "02/2025 - Present",
      summary:
        "Embedded with Apple's engineering team, building and evolving its shipping exception management platform.",
      responsibilities: [
        "Lead a team of 6 engineers delivering a shipping exception management platform, owning delivery across React frontends and Node.js services.",
        "Built the MVP and proofs of concept, then owned delivery across multiple phases through production launch; the work received formal commendation from Apple product leadership.",
        "Designed a questionnaire-driven workflow engine that replaced manual exception triage.",
        "Replaced HTTP polling with WebSockets, eliminating ~1MB of redundant traffic every 3 seconds.",
        "Primary technical contact for client stakeholders across product, backend and QA; run architecture reviews and set the team's TypeScript, testing and state-management standards.",
      ],
    },
    {
      company: "Glue Labs",
      role: "Technical Lead",
      period: "10/2021 - 01/2025",
      summary:
        "Led product engineering end to end across Glue Labs' web, mobile and identity products, from idea through design, build, QA and release.",
      responsibilities: [
        "Led a cross-functional team of developers, QA and DevOps, growing engineering from 8 to 20+ through hiring; trained and mentored 10+ interns across React, React Native and Flutter.",
        "Owned engineering across FIFO, Glue, Glue Mobile, Glue Identity and xG, taking products from idea to production and shaping features with the designer, CEO and customers.",
        "Ran scrum as scrum master: sprint planning, stand-ups and code review, and resolved disagreements across development, design, QA and product.",
        "Owned the release flow from dev through QA and UAT to production, including the branching strategy, working with the DevOps engineer on deployment pipelines.",
      ],
    },
    {
      company: "GeekyAnts",
      role: "Software Development Engineer",
      period: "02/2019 - 10/2021",
      summary:
        "Full-stack engineer delivering web and mobile products for clients, while contributing to hiring and mentoring.",
      responsibilities: [
        "Delivered client products across web and mobile, including Sortly, Airops, Torii Homes, Acrobody and Hotcoldbags.",
        "Conducted 40+ technical interviews, contributing to 10 successful hires.",
        "Trained and mentored 4 junior developers, and code-reviewed and mentored the team building FWD's authentication service.",
        "Spoke at the React Native & Flutter Bangalore meetup (Nov 2020) on building real-time voice chat in React Native with Agora, and gave a tech talk on Apollo Client for GraphQL APIs.",
      ],
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

  return (
    <motion.div
      className="relative space-y-6 md:space-y-8 px-4 md:px-0 pt-16 md:pt-24"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={titleVariants}>
        <div className="flex items-center gap-2 md:gap-3 mb-2">
          <HiOutlineBriefcase className="w-5 md:w-6 h-5 md:h-6 text-white" />
          <h3 className="font-medium text-lg text-white md:text-xl">
            Career Journey
          </h3>
        </div>
        <motion.h2 className="font-bold text-4xl md:text-8xl lg:text-7xl xl:text-[90px] leading-none">
          <span className="text-white">WORK</span>{" "}
          <span className="text-gray-600">EXPERIENCE</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="space-y-4 md:space-y-6"
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
        {experiences.map((experience) => (
          <ExperienceCard key={experience.period} {...experience} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
