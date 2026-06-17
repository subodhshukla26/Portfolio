"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Slotify 2.0",
    subtitle: "Simplifies recurring schedule management",
    description: "Built a robust system for slot booking, exceptions & dynamic availability. Handles complex recurring schedules with ease.",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Knex.js"],
    category: "Backend",
    github: "https://github.com/subodhshukla26",
    live: "https://vercel.com",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Route",
    subtitle: "Reduces traffic congestion using AI",
    description: "Real-time traffic analysis & AI-powered route optimization. Integrated Leaflet for maps and Recharts for data visualization.",
    tech: ["React 19", "TypeScript", "Tailwind", "Zustand", "Spring Boot", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/subodhshukla26",
    live: "https://vercel.com",
    featured: true,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <Section id="projects">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">03.</span>
              Some Things I&apos;ve Built
            </h2>
            <p className="text-foreground/60 max-w-xl">
              A collection of projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>
          
          <div className="flex bg-card/50 p-1 rounded-lg border border-card-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === cat 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-foreground/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card/30 border border-card-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/80 font-mono text-sm mb-4">{project.subtitle}</p>
                  <p className="text-foreground/60 mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-card-border/50 text-xs font-mono text-foreground/50 rounded-full border border-card-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
