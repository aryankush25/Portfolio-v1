"use client";

import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import DesignThoughts from "@/components/DesignThoughts";
import ContactForm from "@/components/ContactForm";
import PremiumTools from "@/components/PremiumTools";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div
      className="relative bg-black min-h-screen"
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className="relative mx-auto px-4 py-8 max-w-screen-xl">
        <div className="flex gap-24 mt-8">
          <aside
            id="profile"
            className="flex-shrink-0 w-[400px]"
            itemProp="author"
            itemScope
            itemType="http://schema.org/Person"
          >
            <Profile />
          </aside>

          <main className="flex-1 space-y-8">
            <section aria-label="Statistics" className="hidden">
              <span itemProp="jobTitle">Software Engineer</span>
              <span itemProp="worksFor">Glue Labs</span>
              <meta itemProp="email" content="yash.sh0031@gmail.com" />
            </section>

            <section aria-label="Statistics">
              <Stats />
            </section>

            <section
              id="projects"
              aria-label="Recent Projects"
              itemScope
              itemType="http://schema.org/CollectionPage"
            >
              <meta itemProp="name" content="Portfolio Projects" />
              <RecentProjects />
            </section>

            <section
              id="experience"
              aria-label="Work Experience"
              itemScope
              itemType="http://schema.org/WorkExperience"
            >
              <meta itemProp="name" content="Professional Experience" />
              <Experience />
            </section>

            <section
              id="tech-stack"
              aria-label="Technical Skills"
              itemScope
              itemType="http://schema.org/ItemList"
            >
              <meta itemProp="name" content="Technical Skills" />
              <PremiumTools />
            </section>

            <section
              id="resume"
              aria-label="Resume"
              itemScope
              itemType="http://schema.org/DigitalDocument"
            >
              <meta itemProp="name" content="Yash Sharma's Resume" />
              <Resume />
            </section>

            <section
              id="blog"
              aria-label="Blog Posts"
              itemScope
              itemType="http://schema.org/Blog"
            >
              <meta itemProp="name" content="Design Thoughts Blog" />
              <DesignThoughts />
            </section>

            <section
              id="contact"
              aria-label="Contact Form"
              itemScope
              itemType="http://schema.org/ContactPoint"
            >
              <meta itemProp="name" content="Contact Information" />
              <ContactForm />
            </section>

            <section
              id="certifications"
              aria-label="Certifications"
              itemScope
              itemType="http://schema.org/ItemList"
            >
              <meta itemProp="name" content="Professional Certifications" />
              <Certifications />
            </section>
          </main>
        </div>

        <footer className="mt-16 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Yash Sharma. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
