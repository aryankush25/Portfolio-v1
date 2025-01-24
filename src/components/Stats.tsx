import { motion, Variants } from "framer-motion";

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
      className="font-bold text-8xl"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.7 + delay, duration: 0.5 }}
    >
      {number}
    </motion.h2>
    <p className="max-w-[80%] text-gray-500 text-xl">{text}</p>
  </motion.div>
);

const Stats = () => {
  const stats = [
    { number: "~3", text: "YEARS OF EXPERIENCE" },
    { number: "+18", text: "PROJECTS COMPLETED" },
    { number: "+28", text: "WORKED LIBRARIES" },
  ];

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
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
    <div>
      <motion.div
        className="flex-1 space-y-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <motion.h2
            className="font-bold text-9xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            SOFTWARE <span className="text-gray-600">ENGINEER</span>
          </motion.h2>
          <motion.h4
            className="mt-10 max-w-[80%] text-2xl text-gray-300"
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
        className="flex gap-12 py-10"
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
    </div>
  );
};

export default Stats;
