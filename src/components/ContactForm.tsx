"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
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
        <span className="text-white">LET&apos;S WORK</span>{" "}
        <span className="text-gray-600">TOGETHER</span>
      </motion.h2>

      <motion.form
        className="space-y-6"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <div className="gap-6 grid grid-cols-2">
          <div className="space-y-2">
            <label className="text-gray-400 text-sm">Name</label>
            <input
              type="text"
              className="border-white/5 focus:border-white/20 bg-black/20 p-4 border rounded-xl w-full text-white transition-colors focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              className="border-white/5 focus:border-white/20 bg-black/20 p-4 border rounded-xl w-full text-white transition-colors focus:outline-none"
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-400 text-sm">Subject</label>
          <input
            type="text"
            className="border-white/5 focus:border-white/20 bg-black/20 p-4 border rounded-xl w-full text-white transition-colors focus:outline-none"
            placeholder="Project subject"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-400 text-sm">Message</label>
          <textarea
            className="border-white/5 focus:border-white/20 bg-black/20 p-4 border rounded-xl w-full h-40 text-white transition-colors focus:outline-none resize-none"
            placeholder="Write your message here..."
          />
        </div>

        <motion.button
          className="bg-orange-500 hover:bg-orange-600 py-4 rounded-xl w-full font-semibold text-white transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit
        </motion.button>

        <div className="flex justify-between items-center text-gray-500 text-sm">
          <p>Made by Yash</p>
          <div className="flex gap-2">
            <div className="bg-[#1DA1F2] rounded-full w-6 h-6" />
            <div className="bg-[#0077B5] rounded-full w-6 h-6" />
            <div className="bg-[#333333] rounded-full w-6 h-6" />
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
}
