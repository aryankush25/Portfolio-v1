"use client";

import { CONTACT_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

const imageAnimation = {
  initial: { scale: 0.8, borderRadius: "16px" },
  animate: {
    scale: 1,
    borderRadius: ["16px", "30px", "16px"],
    transition: {
      borderRadius: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
      scale: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

const socialIconVariants = {
  initial: { scale: 0 },
  animate: (i: number) => ({
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: i * 0.1 + 1,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const glowAnimation = {
  initial: { opacity: 0.4 },
  animate: {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Profile() {
  const profileRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const borderRadius = useTransform(progress, [0, 1], [20, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      progress.set(Math.random());
    }, 2000);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <motion.div
      ref={profileRef}
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl w-[400px] h-[70dvh] overflow-hidden"
      style={{ borderRadius }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex flex-col items-center gap-8 p-8">
        <motion.div
          className="relative w-[320px] h-[360px] group"
          variants={imageAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-2xl rounded-[30px]"
            variants={glowAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50 blur-md rounded-[30px]"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
          />
          <Image
            src="/images/profile.jpeg"
            alt="Yash Sharma"
            className="relative border-2 border-white/10 rounded-2xl"
            fill
            objectFit="cover"
          />
        </motion.div>

        <div className="space-y-6 text-center">
          <h1 className="font-bold text-4xl text-white">YASH SHARMA</h1>
          <motion.p
            className="text-gray-300 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A software engineer developed seamless user experiences.
          </motion.p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: <RiTwitterXFill size={24} />, href: CONTACT_LINKS.twitter },
            {
              icon: <RiLinkedinFill size={24} />,
              href: CONTACT_LINKS.linkedin,
            },
            { icon: <RiGithubFill size={24} />, href: CONTACT_LINKS.github },
          ].map((social, i) => (
            <motion.div
              key={social.href}
              variants={socialIconVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              custom={i}
            >
              <Link
                href={social.href}
                className="flex justify-center items-center bg-gradient-to-r from-blue-500/20 hover:from-blue-500/30 to-purple-500/20 hover:to-purple-500/30 rounded-full w-12 h-12 text-white transition-all"
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
