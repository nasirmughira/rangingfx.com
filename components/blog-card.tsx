'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogFrontMatter } from '@/types/blog';

export function BlogCard({ post }: { post: BlogFrontMatter }) {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-brand-400/30 hover:bg-slate-950/90">
      <div className="flex items-center justify-between gap-4 text-slate-400">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em]">{post.category}</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{post.title}</h3>
      <p className="mt-4 text-slate-300">{post.description}</p>
      <div className="mt-6 flex items-center justify-between text-brand-300">
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold">
          Read article <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
