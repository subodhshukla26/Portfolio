"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";

const experiences = [
  {
    company: "Marvedge",
    role: "Full Stack Developer",
    period: "June 2025 – August 2025",
    description: [
      "Built and maintained modern web applications using frontend technologies, backend APIs, and database systems",
      "Developed responsive user interfaces and integrated RESTful services with scalable application architectures",
      "Contributed to debugging, feature development, and deployment processes while ensuring code quality and reliability",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span>
          Where I've Worked
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l border-card-border last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              
              <div className="bg-card/30 border border-card-border p-8 rounded-2xl hover:bg-card/50 transition-colors">
                <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role} <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-foreground/50 italic">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
