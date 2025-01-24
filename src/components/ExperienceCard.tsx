import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const ExperienceCard = ({
  company,
  role,
  period,
  responsibilities,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col gap-6 border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm p-8 border rounded-3xl transition-all group"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <motion.h3
            className="font-semibold text-5xl text-white"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
          >
            {company}
          </motion.h3>
          <p className="text-2xl text-gray-400">{role}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FiCalendar className="w-4 h-4" />
          <p className="text-lg">{period}</p>
        </div>
      </div>

      <ul className="space-y-4">
        {responsibilities.map((responsibility, index) => (
          <motion.li
            key={index}
            className="group-hover:before:bg-white/40 relative before:top-[0.6rem] before:left-0 before:absolute before:bg-white/20 pl-6 before:rounded-full before:w-2 before:h-2 text-gray-300 text-lg leading-relaxed before:transition-colors"
            variants={{
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
            }}
            transition={{ delay: index * 0.1 }}
          >
            {responsibility}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
