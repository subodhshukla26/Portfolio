"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Code2, Server, Database, Wrench } from "lucide-react";
import Image from "next/image";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Frontend",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Express.js", "Spring Boot", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: ["Git", "Docker", "Vercel"],
  },
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">01.</span>
              About Me
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
              <p>
                Hello! My name is Subodh and I enjoy creating things that live on the internet. 
                My interest in web development started back in university when I realized the power 
                of building scalable applications that solve real-world problems.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working as a Full Stack Developer 
                at Marvedge, where I sharpened my skills in building responsive UIs and robust backend APIs.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences 
                at various environments for a variety of clients.
              </p>
            </div>

            <div className="mt-12 relative group max-w-[300px]">
              <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-primary/20 transition-all duration-300 group-hover:border-primary group-hover:scale-[1.02]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Subodh Shukla"
                  width={300}
                  height={400}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Background Offset Square */}
              <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary/30 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="p-6 rounded-xl border border-card-border bg-card/50 hover:bg-card transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
