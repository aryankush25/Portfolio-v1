import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiBriefcase,
  FiChevronRight,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

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
  const formatPeriod = (period: string) => {
    const [start, end] = period.split(" - ");
    const isPresent = end.toLowerCase() === "present";
    return { start, end, isPresent };
  };

  return (
    <motion.div
      className="relative flex flex-col gap-6 border-white/10 hover:border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 border rounded-3xl transition-all overflow-hidden group"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <HiOutlineOfficeBuilding className="w-6 h-6 text-white" />
            <motion.h3
              className="group-hover:text-white/90 font-semibold text-5xl text-white transition-colors"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
            >
              {company}
            </motion.h3>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FiBriefcase className="w-5 h-5" />
            <p className="text-2xl">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <FiCalendar className="w-4 h-4" />
            <p className="text-lg">{formatPeriod(period).start}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FiClock className="w-4 h-4" />
            <p
              className={`text-lg ${
                formatPeriod(period).isPresent ? "text-green-400" : ""
              }`}
            >
              {formatPeriod(period).end}
            </p>
          </div>
        </div>
      </div>

      <ul className="relative space-y-4">
        {responsibilities.map((responsibility, index) => (
          <motion.li
            key={index}
            className="group-hover:before:bg-white/40 flex items-start gap-3 text-gray-300 text-lg leading-relaxed"
            variants={{
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
            }}
            transition={{ delay: index * 0.1 }}
          >
            <FiChevronRight className="group-hover:text-white/60 flex-shrink-0 mt-1 w-5 h-5 text-gray-500 transition-colors" />
            <span>{responsibility}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
