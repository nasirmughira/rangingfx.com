import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function SEOPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">SEO</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">High-impact SEO for trading, crypto, and finance brands.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">From structured content and metadata to local indexing strategy, we optimize every page to rank for high-value fintech search queries.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">Technical SEO</h2>
            <p className="mt-4 text-slate-300">Fast builds, schema markup, canonical tagging, and XML sitemaps ensure search engines crawl and index your site cleanly.</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">Content strategy</h2>
            <p className="mt-4 text-slate-300">We build finance-focused content flows, blog systems, and landing page copy designed for buyer intent and organic traffic growth.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
