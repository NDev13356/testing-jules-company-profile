'use client';

import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants, staggerContainer } from '@/hooks/useScrollReveal';
import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const isVisible = useScrollReveal();
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mb-16 flex items-center justify-between"
        >
          <motion.h2 variants={revealVariants} className="text-5xl md:text-7xl font-display font-bold">
            Writings
          </motion.h2>
          <motion.div variants={revealVariants}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              View all posts
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recentPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={revealVariants}
              className="group relative flex flex-col p-8 rounded-3xl bg-surface border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30"
            >
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read {post.title}</span>
              </Link>

              <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-6 uppercase tracking-wider">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-background border border-border/50 text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-border/50 pt-6 flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                Read Article
                <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
