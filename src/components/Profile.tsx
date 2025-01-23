"use client";

import { CONTACT_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowAnimation = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const socialHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

export default function Profile() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    animate(mouseX, 0, { duration: 0.5 });
    animate(mouseY, 0, { duration: 0.5 });
  };

  // Particle animation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{ x: number; y: number; vx: number; vy: number; size: number }>
  >([]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      });
    }
  }, []);

  useAnimationFrame(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

    particles.current.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  return (
    <motion.div
      className="relative bg-white rounded-3xl w-[400px] h-[70dvh] overflow-hidden"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30 w-full h-full"
        width={400}
        height={800}
      />

      <div className="relative flex flex-col items-center gap-8 p-8">
        <motion.div
          className="relative w-[320px] h-[360px]"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg rounded-2xl"
            variants={glowAnimation}
            initial="initial"
            animate="animate"
          />
          <Image
            src="/images/profile.jpeg"
            alt="Yash Sharma"
            className="relative rounded-2xl"
            fill
            objectFit="cover"
          />
        </motion.div>

        <div className="space-y-8 text-center">
          <motion.h1
            className="font-semibold text-4xl text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            YASH SHARMA
          </motion.h1>
          <motion.p
            className="text-gray-600 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A software engineer developed seamless user experiences.
          </motion.p>
        </div>

        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {[
            { icon: <RiTwitterXFill size={24} />, href: CONTACT_LINKS.twitter },
            {
              icon: <RiLinkedinFill size={24} />,
              href: CONTACT_LINKS.linkedin,
            },
            { icon: <RiGithubFill size={24} />, href: CONTACT_LINKS.github },
          ].map((social) => (
            <motion.div
              key={social.href}
              variants={socialHover}
              initial="initial"
              whileHover="hover"
            >
              <Link
                href={social.href}
                className="flex justify-center items-center bg-white/10 rounded-full w-12 h-12 text-black hover:text-gray-300 transition-colors"
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
