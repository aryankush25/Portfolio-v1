import { Metadata } from "next";

const SITE_URL = "https://yashsharma.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yash Sharma | Software Engineer",
    template: "%s | Yash Sharma",
  },
  description:
    "Software engineer specializing in React, Next.js, and modern web technologies. View my work experience, projects, and technical expertise.",
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
  authors: [{ name: "Yash Sharma", url: SITE_URL }],
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
    url: SITE_URL,
    siteName: "Yash Sharma Portfolio",
    title: "Yash Sharma | Software Engineer",
    description:
      "Software engineer specializing in building exceptional digital experiences. Expert in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
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
    creator: "@yash_sh0031",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};
