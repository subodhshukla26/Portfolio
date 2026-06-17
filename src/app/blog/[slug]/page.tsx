import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostData(params.slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Section className="pt-32">
        <Container>
          <a href="/" className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-12 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 text-sm font-mono text-foreground/40">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              {post.title}
            </h1>
            
            <div className="prose prose-invert prose-blue max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
