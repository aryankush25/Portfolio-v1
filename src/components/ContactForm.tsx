"use client";

import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiBriefcase } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ContactForm() {
  return (
    <motion.div
      className="space-y-12 px-4 md:px-6 pt-32"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h2
        className="font-bold text-[72px] text-white md:text-[120px] leading-none"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        LET&apos;S WORK TOGETHER
      </motion.h2>

      <motion.form
        className="space-y-8 max-w-4xl"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-medium text-indigo-300/70 text-sm">
              <FiUser className="w-4 h-4" /> Name
            </label>
            <div className="relative group">
              <input
                type="text"
                className="border-zinc-800 focus:border-indigo-500/30 bg-zinc-900/50 px-4 py-4 pl-12 border rounded-xl w-full text-zinc-100 placeholder:text-zinc-600 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
                placeholder="John Doe"
              />
              <FiUser className="group-focus-within:text-indigo-400 top-1/2 left-4 absolute w-4 h-4 text-zinc-600 transition-colors -translate-y-1/2 duration-300" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-medium text-indigo-300/70 text-sm">
              <FiMail className="w-4 h-4" /> Email
            </label>
            <div className="relative group">
              <input
                type="email"
                className="border-zinc-800 focus:border-indigo-500/30 bg-zinc-900/50 px-4 py-4 pl-12 border rounded-xl w-full text-zinc-100 placeholder:text-zinc-600 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
                placeholder="john@example.com"
              />
              <FiMail className="group-focus-within:text-indigo-400 top-1/2 left-4 absolute w-4 h-4 text-zinc-600 transition-colors -translate-y-1/2 duration-300" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-indigo-300/70 text-sm">
            <FiBriefcase className="w-4 h-4" /> Subject
          </label>
          <div className="relative group">
            <input
              type="text"
              className="border-zinc-800 focus:border-indigo-500/30 bg-zinc-900/50 px-4 py-4 pl-12 border rounded-xl w-full text-zinc-100 placeholder:text-zinc-600 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
              placeholder="Tell me about your project"
            />
            <FiBriefcase className="group-focus-within:text-indigo-400 top-1/2 left-4 absolute w-4 h-4 text-zinc-600 transition-colors -translate-y-1/2 duration-300" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-indigo-300/70 text-sm">
            <FiMessageSquare className="w-4 h-4" /> Message
          </label>
          <div className="relative group">
            <textarea
              className="border-zinc-800 focus:border-indigo-500/30 bg-zinc-900/50 px-4 py-4 pl-12 border rounded-xl w-full h-40 text-zinc-100 placeholder:text-zinc-600 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/20 resize-none"
              placeholder="Share the details of your project, timeline, and any specific requirements..."
            />
            <FiMessageSquare className="group-focus-within:text-indigo-400 top-6 left-4 absolute w-4 h-4 text-zinc-600 transition-colors duration-300" />
          </div>
        </div>

        <motion.button
          className="bg-gradient-to-r from-indigo-500 hover:from-indigo-600 to-purple-500 hover:to-purple-600 shadow-indigo-500/10 shadow-lg px-6 py-4 rounded-xl w-full font-semibold text-zinc-100 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>

        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 pt-4 text-sm text-zinc-500">
          <p className="font-medium">Made with 💜 by Yash</p>
          <div className="flex gap-4">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-zinc-800/50 hover:bg-zinc-800 p-2 rounded-full transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5 text-zinc-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-zinc-800/50 hover:bg-zinc-800 p-2 rounded-full transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5 text-zinc-400" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-zinc-800/50 hover:bg-zinc-800 p-2 rounded-full transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-zinc-400" />
            </motion.a>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
}
