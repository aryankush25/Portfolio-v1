"use client";

import { CONTACT_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

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

  // Particle animation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }>
  >([]);

  const colors = ["#60A5FA", "#818CF8", "#A78BFA", "#F472B6"];

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAnimationFrame((time) => {
    if (!canvasRef.current || !profileRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      // Draw particle with glow effect
      ctx.save();
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Add slight movement based on time
      particle.x += Math.sin(time * 0.001 + particle.y * 0.01) * 0.2;
      particle.y += Math.cos(time * 0.001 + particle.x * 0.01) * 0.2;
    });
  });

  return (
    <motion.div
      ref={profileRef}
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl w-[400px] h-[70dvh] overflow-hidden"
      style={{ borderRadius }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        width={400}
        height={800}
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
        >
          <motion.div className="absolute rounded-2xl" />
          <Image
            src="/images/profile.jpeg"
            alt="Yash Sharma"
            className="relative rounded-2xl"
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
