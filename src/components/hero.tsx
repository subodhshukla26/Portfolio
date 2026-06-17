"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { FileText, ArrowRight } from "lucide-react";
import { useEffect, useState, MouseEvent } from "react";

export function Hero() {
  const [tagline, setTagline] = useState("");
  const fullTagline = "Building scalable full-stack applications with precision.";
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    let i = 0;
    let isActive = true;
    const interval = setInterval(() => {
      if (!isActive) return;
      setTagline(fullTagline.slice(0, i));
      i++;
      if (i > fullTagline.length) clearInterval(interval);
    }, 50);
    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <Section 
      className="relative flex min-h-[90vh] items-center group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono text-primary mb-4 text-lg font-medium tracking-wider">
              Hi, my name is
            </h2>
            <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Subodh Shukla.
            </h1>
            <div className="min-h-[1.2em] mb-8">
              <p className="text-3xl md:text-5xl font-bold text-foreground/60 leading-tight">
                {tagline}
                <span className="animate-pulse text-primary ml-1">|</span>
              </p>
            </div>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
              I&apos;m a Full-Stack Software Developer dedicated to crafting high-performance web solutions. 
              Currently focused on building modern applications with Next.js, TypeScript, and Node.js.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-card-border bg-transparent px-6 text-lg font-medium transition-colors hover:bg-card-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Download Resume <FileText className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
