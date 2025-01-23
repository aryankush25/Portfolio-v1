"use client";

import Profile from "@/components/Profile";
import Image from "next/image";
import cicle from "../assets/svg/circle1.svg";
import waves from "../assets/svg/waves1.svg";
import { motion, useAnimationFrame } from "framer-motion";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";
import { useEffect, useRef } from "react";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const arrowHover = {
  rest: { x: 0 },
  hover: {
    x: 10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
  },
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particles = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      angle: number;
      speed: number;
    }>
  >([]);

  const colors = ["#60A5FA", "#818CF8", "#A78BFA", "#F472B6"];

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Initialize particles with random movement patterns
    const particleCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAnimationFrame((time) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      // Natural movement pattern
      particle.angle += Math.sin(time * 0.001) * 0.02;
      particle.vx = Math.cos(particle.angle) * particle.speed;
      particle.vy = Math.sin(particle.angle) * particle.speed;

      // Mouse repulsion
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 200; // Increased mouse influence radius

      if (distance < maxDistance) {
        // Strong repulsion force
        const force = (1 - distance / maxDistance) * 2;
        const angle = Math.atan2(dy, dx);
        particle.vx -= Math.cos(angle) * force;
        particle.vy -= Math.sin(angle) * force;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle with enhanced glow effect
      ctx.save();
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15;

      // Pulse size based on time
      const pulseSize = particle.size * (1 + Math.sin(time * 0.003) * 0.2);

      // Fade opacity based on velocity
      const speed = Math.sqrt(
        particle.vx * particle.vx + particle.vy * particle.vy
      );
      ctx.globalAlpha = 0.4 + Math.min(speed * 0.5, 0.4);

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
};

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      <ParticleBackground />
      <div className="relative mx-auto px-4 py-8 max-w-screen-xl">
        <div className="flex gap-24 mt-16">
          <Profile />
          <motion.div
            className="flex-1 space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.h2
                className="font-bold text-9xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                SOFTWARE <span className="text-gray-600">ENGINEER</span>
              </motion.h2>
              <motion.h4
                className="mt-10 max-w-[80%] text-2xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </motion.h4>
            </motion.div>

            <motion.div
              className="flex gap-12 py-10"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { number: "~3", text: "YEARS OF EXPERIENCE" },
                { number: "+18", text: "PROJECTS COMPLETED" },
                { number: "+28", text: "WORKED LIBRARIES" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    animate: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <motion.h2
                    className="font-bold text-8xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
                  >
                    {item.number}
                  </motion.h2>
                  <p className="max-w-[80%] text-gray-500 text-xl">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  src: cicle,
                  icon: <FiLayers size={40} color="white" />,
                  title: "VIDEO EDITOR WITH PIXI.JS",
                  isDark: true,
                },
                {
                  src: waves,
                  icon: <MdOutlineChat size={40} color="black" />,
                  title: "AI CHAT WITH MULTIPLE LANGUAGES",
                  isDark: false,
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  className="relative rounded-3xl w-80 h-72 cursor-pointer"
                  variants={projectHover}
                  initial="rest"
                  whileHover="hover"
                  custom={i}
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    className="border-2 border-black rounded-2xl"
                    fill
                    objectFit="cover"
                  />
                  <motion.div
                    className="top-8 left-8 absolute w-full h-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <motion.p
                    className={`absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl ${
                      project.isDark ? "text-white" : "text-black"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
                  >
                    {project.title}
                  </motion.p>
                  <motion.div
                    className={`right-8 bottom-8 absolute border-2 p-3 rounded-2xl ${
                      project.isDark ? "border-white" : "border-black"
                    }`}
                    variants={arrowHover}
                  >
                    <FiArrowRight
                      size={30}
                      color={project.isDark ? "white" : "black"}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
