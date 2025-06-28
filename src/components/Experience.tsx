import { motion, Variants } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "Thoughtworks",
      role: "Senior Software Engineer",
      period: "02/2025 - Present",
      responsibilities: [
        "Thoughtworks is a global leader in tech, driving innovation through strategic design and engineering",
        "Increased application performance by 40% through optimizing backend services and algorithms",
        "Oversaw development of 15 microservices, each handling over 200,000 transactions/month",
        "Drove down bugs by 30% in production releases by automating end-to-end testing protocols",
      ],
    },
    {
      company: "Glue Labs",
      role: "Technical Lead",
      period: "01/2022 - 01/2025",
      responsibilities: [
        "Led product development at Glue Labs, from conceptualization to scaling, for products like FIFO.im, Glue, xG, and Glue Identity",
        "Designed user-centric UX flows and architected repositories using best practices to ensure scalability and performance",
        "Conducted code reviews to improve quality, security, and compliance with standards",
        "Streamlined workflows through detailed documentation, enhancing onboarding and collaboration",
        "Scaled the team from 8 to 40+ through strategic hiring and mentoring, while developing an Intern Training Module and training 30+ interns in core technologies like React, Flutter, and Node.js",
      ],
    },
    {
      company: "Glue Labs",
      role: "Senior Software Engineer",
      period: "10/2021 - 01/2022",
      responsibilities: [
        "Built a Voice Calling App using React Native, Firebase, and Agora, enabling users to create/join voice chat rooms",
        "Spearheaded development of FIFO.im and Glue Mobile App from scratch using React, Node.js, and Flutter, delivering scalable and innovative solutions",
        "Led cross-functional teams, designed UX flows, and defined product roadmaps to ensure timely delivery and user satisfaction",
        "Refactored codebases with TypeScript and ESLint, improving code quality, security, and maintainability",
        "Streamlined developer workflows through comprehensive documentation for seamless collaboration",
      ],
    },
    {
      company: "GeekyAnts",
      role: "Software Development Engineer",
      period: "02/2019 - 10/2021",
      responsibilities: [
        "Worked on 6+ client projects as a full-stack developer using technologies like React, React Native, Svelte, Next.js, Node.js, Flutter, and GraphQL",
        "Delivered high-quality features on time across multiple projects, ensuring performance and client satisfaction",
        "Experienced with state management tools such as Redux, React Query, Zustand, SWR, Flutter Bloc, and Riverpod",
        "Conducted 40+ technical interviews for GeekyAnts and mentored 3-4 interns on best practices and code quality",
        "Delivered a Tech Talk on voice calling in React Native with Agora",
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
        <motion.h2 className="font-bold text-4xl md:text-[90px] leading-none">
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
