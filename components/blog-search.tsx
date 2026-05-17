'use client';

import { useMemo, useState } from 'react';
import type { BlogFrontMatter } from '@/types/blog';
import { cn } from '@/utils/cn';

export function BlogSearch({ posts }: { posts: BlogFrontMatter[] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      posts.filter((post) =>
        [post.title, post.description, post.category, post.tags.join(' ')].some((text) =>
          text.toLowerCase().includes(query.toLowerCase())
        )
      ),
    [posts, query]
  );

  return (
    <div className="glass-card rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
      <label className="mb-3 block text-sm font-semibold text-slate-200">Search the blog</label>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search articles, tags, or keywords"
        className={cn(
          'w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition',
          'focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20'
        )}
      />
      <p className="mt-3 text-sm text-slate-400">Showing {filtered.length} / {posts.length} articles.</p>
    </div>
  );
}
