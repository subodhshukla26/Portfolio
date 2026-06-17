"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export function Blog({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <Section id="blog">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">04.</span>
              Latest Insights
            </h2>
            <p className="text-foreground/60 max-w-xl">
              I write about technology, productivity, and the journey of a software developer.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-primary font-mono text-sm hover:underline">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card/30 border border-card-border rounded-2xl overflow-hidden hover:bg-card/50 transition-all"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-xs font-mono text-foreground/40">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/60 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
