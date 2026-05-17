'use client';

import { useMemo, useState } from 'react';
import { BlogCard } from '@/components/blog-card';
import { BlogFrontMatter } from '@/types/blog';
import { BlogPagination } from '@/components/blog-pagination';
import { cn } from '@/utils/cn';

const PAGE_SIZE = 6;

export function BlogList({ posts }: { posts: BlogFrontMatter[] }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        [post.title, post.description, post.category, post.tags.join(' ')].some((text) =>
          text.toLowerCase().includes(query.toLowerCase())
        )
      ),
    [posts, query]
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const currentPosts = filteredPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <div className="space-y-8">
      <div className="glass-card rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
        <label className="mb-3 block text-sm font-semibold text-slate-200">Search the blog</label>
        <input
          type="search"
          value={query}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Search articles, tags, or keywords"
          className={cn(
            'w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition',
            'focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20'
          )}
        />
        <p className="mt-3 text-sm text-slate-400">Showing {filteredPosts.length} articles matching your query.</p>
      </div>

      <div className="grid gap-6">
        {currentPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <BlogPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
