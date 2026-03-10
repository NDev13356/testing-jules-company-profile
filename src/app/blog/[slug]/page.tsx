import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 text-sm font-mono text-accent uppercase tracking-wider mb-6">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-text-primary">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border/50 text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Placeholder Content Area */}
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-display prose-a:text-accent hover:prose-a:text-white prose-a:transition-colors text-text-muted leading-relaxed">
          <p className="lead text-2xl text-text-primary font-serif italic mb-12">
            {post.excerpt}
          </p>

          <h2>The Return of Skeuomorphism?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

          <blockquote>
            &quot;Good design is obvious. Great design is transparent.&quot;
          </blockquote>

          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
    </article>
  );
}
