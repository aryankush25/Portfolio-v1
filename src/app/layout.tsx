import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@components/navbar";
import { metadata } from "./metadata";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Agarwal",
              url: "https://v1.aryankush25.com/",
              image: "/images/Aryan_new.JPG",
              sameAs: [
                "https://github.com/aryankush25",
                "https://www.linkedin.com/in/aryankush25/",
                "https://twitter.com/aryankush25",
              ],
              jobTitle: "Senior Software Engineer",
              description:
                "Senior Software Engineer specializing in Node.js, NestJS, Express.js, React, Next.js, and modern web technologies. Experienced in building scalable and innovative solutions with 6+ years of experience in software development.",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "Flutter",
                "React Native",
                "Svelte",
                "TailwindCSS",
                "PostgreSQL",
                "Redis",
                "MongoDB",
                "Firebase",
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
