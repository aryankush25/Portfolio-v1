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
              name: "Yash Sharma",
              url: "https://yashsharma.com",
              image: "/images/profile.jpeg",
              sameAs: [
                "https://github.com/yash-sh",
                "https://linkedin.com/in/yash-sh",
                "https://twitter.com/yash_sh0031",
              ],
              jobTitle: "Software Engineer",
              description:
                "Software engineer specializing in building exceptional digital experiences.",
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "WebGL",
                "Pixi.js",
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
