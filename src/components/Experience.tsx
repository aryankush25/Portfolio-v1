import { motion, Variants } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "PixelForge Studios",
      period: "Jan 2020 - Present",
      description:
        "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    },
    {
      company: "BlueWave Innovators",
      period: "Jun 2017 - Dec 2019",
      description:
        "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    },
    {
      company: "TrendCraft Solutions",
      period: "Mar 2015 - May 2017",
      description:
        "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    },
  ];

  const containerVariants: Variants = {
    initial: {},
    animate: {},
  };

  return (
    <motion.div
      className="space-y-12 mt-32"
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
          <span className="text-white">12 YEARS OF</span>{" "}
          <span className="text-gray-600">EXPERIENCE</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="space-y-24"
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
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
