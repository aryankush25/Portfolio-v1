import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yashsharma.com"), // Replace with your domain
  title: {
    default: "Yash Sharma | Software Engineer",
    template: "%s | Yash Sharma",
  },
  description:
    "Software engineer specializing in building exceptional digital experiences. Expert in React, Next.js, and modern web technologies.",
  keywords: [
    "Yash Sharma",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "WebGL",
    "Pixi.js",
  ],
  authors: [{ name: "Yash Sharma" }],
  creator: "Yash Sharma",
  publisher: "Yash Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashsharma.com", // Replace with your domain
    siteName: "Yash Sharma Portfolio",
    title: "Yash Sharma | Software Engineer",
    description:
      "Software engineer specializing in building exceptional digital experiences. Expert in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/images/profile.jpeg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Yash Sharma - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Sharma | Software Engineer",
    description:
      "Software engineer specializing in building exceptional digital experiences. Expert in React, Next.js, and modern web technologies.",
    creator: "@yash_sh0031", // Replace with your Twitter handle
    images: ["/images/profile.jpeg"], // Replace with your Twitter card image
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Optional: Add if you want Yandex verification
  },
  alternates: {
    canonical: "https://yashsharma.com", // Replace with your domain
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yash Sharma",
              url: "https://yashsharma.com", // Replace with your domain
              image: "/images/profile.jpeg",
              sameAs: [
                "https://github.com/yourgithub", // Replace with your social links
                "https://linkedin.com/in/yourlinkedin",
                "https://twitter.com/yourtwitter",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Glue Labs",
              },
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
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
