"use client";

import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import DesignThoughts from "@/components/DesignThoughts";
import ContactForm from "@/components/ContactForm";
import PremiumTools from "@/components/PremiumTools";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      <div className="relative mx-auto px-4 py-8 max-w-screen-xl">
        <div className="flex gap-24 mt-16">
          <div id="profile" className="flex-shrink-0 w-[400px]">
            <Profile />
          </div>

          <div className="flex-1 space-y-8">
            <Stats />
            <div id="projects">
              <RecentProjects />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="tech-stack">
              <PremiumTools />
            </div>
            <div id="blog">
              <DesignThoughts />
            </div>
            <div id="contact">
              <ContactForm />
            </div>
            <div id="certifications">
              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
