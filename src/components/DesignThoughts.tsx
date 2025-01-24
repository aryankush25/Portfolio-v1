"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getMediumPosts, type MediumPost } from "@/utils/medium";
import Image from "next/image";

const MEDIUM_PROFILE = "https://medium.com/@yash.sh0031";

export default function DesignThoughts() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const mediumPosts = await getMediumPosts();
        setPosts(mediumPosts.slice(0, 4)); // Only take first 4 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

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
      <div className="flex justify-between items-end">
        <motion.h2
          className="font-bold text-[120px] leading-none"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
        >
          <span className="text-white">BLOG</span>{" "}
          <span className="text-gray-600">POSTS</span>
        </motion.h2>

        <motion.a
          href={MEDIUM_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 pb-4 text-blue-400 hover:text-blue-300 transition-colors"
          variants={{
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
          }}
          whileHover={{ x: 5 }}
        >
          <span>View all posts</span>
          <FiArrowRight />
        </motion.a>
      </div>

      <motion.div
        className="gap-6 grid grid-cols-1 md:grid-cols-2"
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
        {loading
          ? // Loading skeleton
            Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col gap-4 border-white/5 bg-black/20 backdrop-blur-sm p-6 border rounded-3xl overflow-hidden"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
              >
                <div className="bg-white/5 rounded-2xl w-full animate-pulse aspect-[1.91/1]" />
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg w-3/4 h-8 animate-pulse" />
                  <div className="bg-white/5 rounded-lg w-full h-4 animate-pulse" />
                  <div className="bg-white/5 rounded-lg w-2/3 h-4 animate-pulse" />
                </div>
              </motion.div>
            ))
          : posts.map((post) => (
              <motion.a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                key={post.title}
                className="relative flex flex-col gap-4 border-white/5 bg-black/20 backdrop-blur-sm p-6 border rounded-3xl cursor-pointer overflow-hidden group"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.2 },
                }}
              >
                {post.thumbnail ? (
                  <div className="relative rounded-2xl w-full overflow-hidden aspect-[1.91/1]">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-300 object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-white/5 rounded-2xl w-full aspect-[1.91/1]" />
                )}

                <div className="space-y-3">
                  <h3 className="group-hover:text-blue-400 line-clamp-2 font-semibold text-white text-xl transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <FiClock className="shrink-0" />
                      <span>{post.pubDate}</span>
                    </div>
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        <FiTag className="shrink-0" />
                        {post.categories.slice(0, 2).map((category) => (
                          <span
                            key={category}
                            className="bg-white/5 px-2 py-1 rounded-full text-xs"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-blue-400 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read article</span>
                    <FiArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.a>
            ))}
      </motion.div>
    </motion.div>
  );
}
