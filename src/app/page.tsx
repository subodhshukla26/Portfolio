import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog posts={posts} />
      <Contact />
      
      {/* Footer */}
      <footer className="py-10 border-t border-card-border text-center">
        <p className="font-mono text-xs text-foreground/40">
          Designed & Built by Subodh Shukla
        </p>
      </footer>
    </main>
  );
}
