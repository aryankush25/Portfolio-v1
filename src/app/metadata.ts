import { Metadata } from "next";

const SITE_URL = "https://v1.aryankush25.com/";
const PROFILE_DESCRIPTION =
  "Senior Software Engineer specializing in React, Next.js, and modern web technologies. Experienced in building scalable and innovative solutions with 6+ years of experience in software development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aryan Agarwal | Senior Software Engineer & Full Stack Developer",
    template:
      "%s | Aryan Agarwal - Senior Software Engineer & Full Stack Developer",
  },
  description: PROFILE_DESCRIPTION,
  keywords: [
    "Aryan Agarwal",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "JavaScript",
    "TypeScript",
    "Thoughtworks",
    "Glue Labs",
    "Dashgen",
    "Web Development",
    "Software Development",
    "India",
    "Remote Developer",
  ],
  authors: [{ name: "Aryan Agarwal", url: SITE_URL }],
  creator: "Aryan Agarwal",
  publisher: "Aryan Agarwal",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aryan Agarwal - Senior Software Engineer Portfolio",
    title: "Aryan Agarwal | Senior Software Engineer & Full Stack Developer",
    description: PROFILE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Agarwal - Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Agarwal | Senior Software Engineer & Full Stack Developer",
    description: PROFILE_DESCRIPTION,
    creator: "@aryankush25",
    images: ["/og-image.png"],
    site: "@aryankush25",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
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
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};
