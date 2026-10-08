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
              url: "https://aryankush25.com",
              image: "/images/Aryan_new.JPG",
              sameAs: [
                "https://github.com/aryankush25",
                "https://www.linkedin.com/in/aryankush25/",
                "https://twitter.com/aryankush25",
              ],
              jobTitle: "Senior Software Engineer",
              description:
                "Aryan Agarwal is a Senior Software Engineer and Technical Lead with nearly 8 years building backend and full-stack systems in Node.js and TypeScript.",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "Flutter",
                "React Native",
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
