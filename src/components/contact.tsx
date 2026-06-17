"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="bg-card/20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono text-xl mb-4">05. What&apos;s Next?</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-foreground/60 text-lg mb-12 max-w-2xl mx-auto">
              I&apos;m currently looking for new opportunities, especially internships and full-time roles. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              {/* Form */}
              <div className="bg-card border border-card-border p-8 rounded-2xl">
                <form action="https://formspree.io/f/subodhshukla1093@gmail.com" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono text-foreground/50 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-foreground/50 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-foreground/50 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={4}
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2 py-6 text-lg">
                    Send Message <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>

              {/* Socials & Info */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let&apos;s connect</h3>
                  <p className="text-foreground/60 mb-8">
                    Feel free to reach out via the form or through my social media channels.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:subodhshukla1093@gmail.com" 
                      className="flex items-center gap-4 p-4 rounded-xl border border-card-border hover:bg-card transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm">subodhshukla1093@gmail.com</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/subodhshukla26/" 
                      target="_blank"
                      className="flex items-center gap-4 p-4 rounded-xl border border-card-border hover:bg-card transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm">linkedin.com/in/subodhshukla26</span>
                    </a>

                    <a 
                      href="https://github.com/subodhshukla26" 
                      target="_blank"
                      className="flex items-center gap-4 p-4 rounded-xl border border-card-border hover:bg-card transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Github className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm">github.com/subodhshukla26</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
