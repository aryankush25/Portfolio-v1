"use client";

import { CONTACT_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import ParticleBackground from "./ParticleBackground";

const imageAnimation = {
  initial: { scale: 0.8, borderRadius: "16px" },
  animate: {
    scale: 1,
    borderRadius: ["16px", "30px", "16px"],
    transition: {
      borderRadius: {
        duration: 3,
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

const shimmerEffect = {
  hidden: { backgroundPosition: "200% 0" },
  visible: {
    backgroundPosition: "-200% 0",
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

type CustomCSSProperties = {
  "--mouse-x": string;
  "--mouse-y": string;
};

export default function Profile() {
  const profileRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = profileRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    animate(mouseX, 0, { duration: 0.5 });
    animate(mouseY, 0, { duration: 0.5 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (profileRef.current) {
        const hue = Math.random() * 360;
        profileRef.current.style.setProperty(
          "--gradient-color",
          `hsl(${hue}, 70%, 50%)`
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={profileRef}
      className="md:block top-36 fixed hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl w-[400px] h-[700px] overflow-hidden"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ParticleBackground />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--gradient-color, #4f46e5) 0%, transparent 60%)",
          opacity: 0.15,
          mixBlendMode: "screen",
        }}
        animate={
          {
            "--mouse-x": mouseX.get() + "px",
            "--mouse-y": mouseY.get() + "px",
          } as CustomCSSProperties
        }
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        variants={shimmerEffect}
        initial="hidden"
        animate="visible"
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      <div className="relative flex flex-col items-center gap-8 p-8">
        <motion.div
          className="relative w-[320px] h-[360px] group"
          variants={imageAnimation}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"
            animate={floatingAnimation}
          />
          <Image
            src="/images/profile.jpeg"
            alt="Yash Sharma"
            className="relative rounded-2xl"
            fill
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          className="space-y-6 text-center"
          animate={floatingAnimation}
        >
          <motion.h1
            className="font-bold text-4xl text-white"
            whileHover={{ scale: 1.05 }}
          >
            YASH SHARMA
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A software engineer developing seamless user experiences with modern
            web technologies.
          </motion.p>
        </motion.div>

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
