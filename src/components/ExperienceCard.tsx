import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface ExperienceCardProps {
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({
  company,
  period,
  description,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col gap-4 group"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex justify-between items-center">
        <motion.h3
          className="font-semibold text-5xl text-white"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          {company}
        </motion.h3>

        <motion.div
          className="bg-white/5 p-4 rounded-xl"
          whileHover={{
            x: 5,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transition: { duration: 0.2 },
          }}
        >
          <FiArrowRight size={24} className="text-white" />
        </motion.div>
      </div>

      <div className="space-y-3">
        <p className="max-w-3xl text-gray-400 text-xl">{description}</p>
        <p className="text-gray-500 text-lg">{period}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
