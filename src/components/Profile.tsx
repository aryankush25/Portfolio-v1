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

function MobileProfile() {
  return (
    <div
      id="profile"
      className="flex flex-col md:hidden bg-gradient-to-br from-gray-900 to-black mx-4 mt-4 rounded-2xl overflow-hidden"
    >
      <div className="relative flex flex-col p-6">
        <div className="flex items-center gap-5">
          {/* Profile Image */}
          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/images/profile.jpeg"
              alt="Yash Sharma"
              className="relative rounded-2xl"
              fill
              sizes="(max-width: 768px) 96px, 96px"
              priority
              objectFit="cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-2 min-w-0">
            <h1 className="font-bold text-2xl text-white">YASH SHARMA</h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              A software engineer developing seamless user experiences with
              modern web technologies.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mt-6">
          {[
            { icon: <RiTwitterXFill size={18} />, href: CONTACT_LINKS.twitter },
            {
              icon: <RiLinkedinFill size={18} />,
              href: CONTACT_LINKS.linkedin,
            },
            { icon: <RiGithubFill size={18} />, href: CONTACT_LINKS.github },
          ].map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl w-9 h-9 text-white transition-all active:scale-95"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    <>
      <MobileProfile />
      <motion.div
        ref={profileRef}
        className="md:block top-32 fixed hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl w-[400px] h-[680px] overflow-hidden"
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

        <div className="relative flex flex-col items-center px-8 py-12">
          <motion.div
            className="relative w-[300px] h-[340px] group"
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
            className="space-y-5 mt-10 text-center"
            animate={floatingAnimation}
          >
            <motion.h1
              className="font-bold text-4xl text-white"
              whileHover={{ scale: 1.05 }}
            >
              YASH SHARMA
            </motion.h1>

            <motion.p
              className="max-w-[320px] text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A software engineer developing seamless user experiences with
              modern web technologies.
            </motion.p>
          </motion.div>

          <div className="flex gap-5 mt-10">
            {[
              {
                icon: <RiTwitterXFill size={22} />,
                href: CONTACT_LINKS.twitter,
              },
              {
                icon: <RiLinkedinFill size={22} />,
                href: CONTACT_LINKS.linkedin,
              },
              { icon: <RiGithubFill size={22} />, href: CONTACT_LINKS.github },
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
                  className="flex justify-center items-center bg-gradient-to-r from-blue-500/20 hover:from-blue-500/30 to-purple-500/20 hover:to-purple-500/30 rounded-full w-11 h-11 text-white transition-all"
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
