'use client';

import Link from 'next/link';

export function BlogPagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const prevPage = currentPage > 1 ? `/blog?page=${currentPage - 1}` : undefined;
  const nextPage = currentPage < totalPages ? `/blog?page=${currentPage + 1}` : undefined;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-300">
      <span>Page {currentPage} of {totalPages}</span>
      <div className="flex gap-3">
        {prevPage ? (
          <Link
            href={{ pathname: '/blog', query: { page: String(currentPage - 1) } }}
            className="rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 transition hover:border-brand-400 hover:text-white"
          >
            Previous
          </Link>
        ) : null}
        {nextPage ? (
          <Link
            href={{ pathname: '/blog', query: { page: String(currentPage + 1) } }}
            className="rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 transition hover:border-brand-400 hover:text-white"
          >
            Next
          </Link>
        ) : null}
      </div>
    </div>
  );
}
