import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <motion.div
      className="space-y-12 pt-32"
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
        className="font-bold text-[120px] leading-none"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <span className="text-white">MY</span>{" "}
        <span className="text-gray-600">RESUME</span>
      </motion.h2>

      <motion.div
        className="relative rounded-3xl overflow-hidden"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm" />

        <div className="relative flex flex-col items-center gap-8 p-16 text-center">
          <motion.div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-full"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FiDownload size={48} className="text-white" />
          </motion.div>

          <div className="space-y-4">
            <h3 className="font-bold text-4xl text-white">
              Download My Resume
            </h3>
            <p className="max-w-2xl text-gray-400 text-xl">
              Get a detailed overview of my skills, experience, and achievements
              in a comprehensive PDF format.
            </p>
          </div>

          <motion.a
            href="/Yash-Sharma-Resume.pdf"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={20} />
            <span>Download Resume</span>
          </motion.a>

          <div className="bottom-0 left-0 absolute bg-gradient-to-t from-black/50 to-transparent w-full h-1/2 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}
