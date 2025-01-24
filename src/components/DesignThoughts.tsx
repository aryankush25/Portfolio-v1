"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const posts = [
  {
    title: "Starting and Growing a Career in Web Design",
    description:
      "Whether you seek a mentoring role or product design position, consistency can lead to the career as you want. In this article, I'll share my ideas to help design and development.",
    date: "Apr 5, 2023",
  },
  {
    title: "Create a Landing Page That Performs Great",
    description:
      "Whether you seek a mentoring role or product design position, consistency can lead to the career as you want. In this article, I'll share my ideas to help you increase your conversion rate.",
    date: "Mar 15, 2023",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    description:
      "Whether you seek a mentoring role or product design position, consistency can lead to the career as you want. In this article, I'll share my ideas to help you prepare for the future.",
    date: "Feb 28, 2023",
  },
];

export default function DesignThoughts() {
  return (
    <motion.div
      className="space-y-12"
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
        <span className="text-white">DESIGN</span>{" "}
        <span className="text-gray-600">THOUGHTS</span>
      </motion.h2>

      <motion.div
        className="space-y-6"
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
        {posts.map((post) => (
          <motion.div
            key={post.title}
            className="relative flex flex-col gap-2 border-white/5 bg-black/20 backdrop-blur-sm p-8 border rounded-3xl cursor-pointer group"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex justify-between items-start gap-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-2xl text-white">
                  {post.title}
                </h3>
                <p className="max-w-2xl text-gray-400">{post.description}</p>
              </div>

              <motion.div
                className="bg-white/5 p-4 rounded-xl shrink-0"
                whileHover={{
                  x: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <FiArrowRight size={24} className="text-white" />
              </motion.div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">{post.date}</p>
              <p className="text-blue-400">Read more</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
