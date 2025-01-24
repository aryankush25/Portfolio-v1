"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "Framer",
    description: "Design Tool",
    icon: "/images/tools/framer.png",
  },
  {
    name: "Figma",
    description: "Design Tool",
    icon: "/images/tools/figma.png",
  },
  {
    name: "Lemon Squeezy",
    description: "Payment Tool",
    icon: "/images/tools/lemon.png",
  },
  {
    name: "ChatGPT",
    description: "AI Tool",
    icon: "/images/tools/chatgpt.png",
  },
  {
    name: "Notion",
    description: "Productivity Tool",
    icon: "/images/tools/notion.png",
  },
  {
    name: "Nexjs",
    description: "React Framework",
    icon: "/images/tools/nextjs.png",
  },
];

export default function PremiumTools() {
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
        <span className="text-white">PREMIUM</span>{" "}
        <span className="text-gray-600">TOOLS</span>
      </motion.h2>

      <motion.div
        className="gap-4 grid grid-cols-3"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            className="relative flex items-center gap-4 border-white/5 bg-black/20 backdrop-blur-sm p-4 border rounded-2xl cursor-pointer group"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative rounded-xl w-12 h-12 overflow-hidden">
              <Image
                src={tool.icon}
                alt={tool.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-white">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
