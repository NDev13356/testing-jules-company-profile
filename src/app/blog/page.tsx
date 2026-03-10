import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Writings on design, technology, and strategy.',
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <header className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Writings</h1>
          <p className="text-xl text-text-muted max-w-2xl">
            Thoughts, observations, and deep dives into design strategy, interfaces, and digital experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col md:flex-row gap-8 items-start border-t border-border/50 pt-12">
              <div className="md:w-1/4 shrink-0 text-sm font-mono text-text-muted uppercase tracking-wider flex flex-col gap-2">
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.readingTime}</span>
              </div>

              <div className="md:w-3/4 flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block mb-4">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border/50 text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="ml-auto flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors duration-300"
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
