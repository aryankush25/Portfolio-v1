import { FiLayers, FiCode } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";

export const CONTACT_LINKS = {
  twitter: "https://x.com/aryankush25",
  linkedin: "https://linkedin.com/in/aryankush25/",
  github: "https://github.com/aryankush25",
};

export const HERO_SECTION = {
  title: "SENIOR SOFTWARE",
  titleColored: "ENGINEER",
  description:
    "Specializing in building scalable and innovative solutions with 6+ years of experience in software development. Currently working at Thoughtworks and building Dashgen.",
  stats: [
    { number: "50+", text: "GITHUB REPOSITORIES" },
    { number: "15K+", text: "LINES OF CODE" },
    { number: "20+", text: "SUCCESSFUL PROJECTS" },
  ],
};

export const FEATURED_PROJECTS = [
  {
    title: "DASHGEN",
    description: "Unified AI Platform",
    icon: FiCode,
    isDark: true,
  },
  {
    title: "GLUE IDENTITY",
    description: "Authentication Platform",
    icon: MdOutlineChat,
    isDark: true,
  },
  {
    title: "FIFO",
    description: "Blogging Platform",
    icon: FiLayers,
    isDark: true,
  },
];

export const RECENT_PROJECTS = [
  {
    title: "Dashgen - Unified AI Platform",
    description:
      "A unified platform for multiple AI models including OpenAI, Anthropic, Google Gemini, Mistral, xAI and DeepSeek.",
    image: "/images/dashgen.png",
    gradient: "from-blue-500/10 to-purple-500/10",
    link: "https://dashgen.in",
  },
  {
    title: "Glue Identity - Authentication Platform",
    description:
      "Built an identity management platform with features like authentication, RBAC, and OAuth 2.0, designed for scalability and security.",
    image: "/images/glue-identity.png",
    gradient: "from-green-500/10 to-teal-500/10",
    link: "https://id.glue.is",
  },
  {
    title: "FIFO - Blogging Platform",
    description:
      "A modern blogging platform built with React and Node.js, featuring rich text editing and responsive design.",
    image: "/images/fifo.png",
    gradient: "from-purple-500/10 to-pink-500/10",
    link: "https://fifo.im",
  },
];

export const EXPERIENCE = [
  {
    company: "Senior Software Engineer at Thoughtworks",
    period: "2023 - Present",
    description:
      "Working as a Senior Software Engineer, specializing in building scalable and innovative solutions for enterprise clients.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    company: "Technical Lead at Glue Labs",
    period: "2019 - 2023",
    description:
      "Led technical teams and developed multiple React applications. Improved application performance through code optimization and modern web practices.",
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    company: "Software Developer",
    period: "2017 - 2019",
    description:
      "Built responsive web applications and implemented modern UI/UX designs. Collaborated with designers and backend teams for seamless integration.",
    technologies: ["JavaScript", "React", "CSS3", "REST APIs"],
  },
];

export const PREMIUM_TOOLS = [
  {
    name: "React",
    description: "Core Framework",
    icon: "/images/tools/react.png",
  },
  {
    name: "Next.js",
    description: "Full-Stack Framework",
    icon: "/images/tools/nextjs.png",
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    icon: "/images/tools/typescript.png",
  },
  {
    name: "TailwindCSS",
    description: "Styling Framework",
    icon: "/images/tools/tailwind.png",
  },
  {
    name: "Electron",
    description: "Desktop Apps",
    icon: "/images/tools/electron.png",
  },
  {
    name: "Framer Motion",
    description: "Animations",
    icon: "/images/tools/framer.png",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building Dashgen: A Unified AI Platform",
    description:
      "A deep dive into creating Dashgen, a unified platform for multiple AI models including OpenAI, Anthropic, Google Gemini, Mistral, xAI and DeepSeek.",
    date: "Jan 15, 2024",
  },
  {
    title: "Optimizing React Applications",
    description:
      "Practical techniques for improving React application performance. From code splitting to memoization, learn how to make your apps faster.",
    date: "Dec 20, 2023",
  },
  {
    title: "Modern Frontend Architecture",
    description:
      "Exploring the latest trends in frontend architecture. Learn about micro-frontends, state management, and modular design patterns.",
    date: "Nov 30, 2023",
  },
];
