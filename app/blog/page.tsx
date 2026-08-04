import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-cyan">Blog</p>
      <h1 className="font-display text-4xl font-bold text-text mt-3">
        Architecture explainers, viva prep, and project guides
      </h1>
      <p className="text-text-muted mt-4 max-w-xl">
        Full posts are coming soon — this index is a placeholder stub so
        navigation works end to end while the homepage is the current focus.
      </p>

      <div className="mt-12 divide-y divide-border border-t border-b border-border">
        {blogPosts.map((post) => (
          <div key={post.slug} className="py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div>
              <p className="font-display font-semibold text-text">{post.title}</p>
              <p className="text-sm text-text-muted mt-1 max-w-xl">{post.excerpt}</p>
            </div>
            <div className="font-mono text-xs text-text-faint whitespace-nowrap">
              {post.readTime} &middot; {post.category}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-text-faint mt-8">
        <Link href="/" className="text-cyan hover:underline">
          &larr; Back to home
        </Link>
      </p>
    </div>
  );
}
