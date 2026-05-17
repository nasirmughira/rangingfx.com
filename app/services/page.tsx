import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const offerings = [
  { title: 'Custom fintech platforms', description: 'Full stack trading portals, investor dashboards, and liquidity applications designed for modern finance.' },
  { title: 'Landing pages & conversion', description: 'Strategic funnels built to increase leads, trust, and signups for financial products.' },
  { title: 'Analytics-driven content', description: 'SEO-rich copy, case stories, and blog content that targets traders, brokers, and financial advisors.' }
];

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">High-performance services for fintech, trading, and crypto brands.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">We deliver strategic digital products that increase clarity, trust, and organic growth for financial businesses of every stage.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {offerings.map((item) => (
            <article key={item.title} className="glass-card p-8">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">Enterprise-ready delivery</h2>
            <p className="mt-4 leading-7 text-slate-300">Our builds include performance optimization, SEO architecture, and visual treatments designed for trust in regulated industries.</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">Edge optimized</h2>
            <p className="mt-4 leading-7 text-slate-300">We use Cloudflare Pages friendly builds, careful caching, and lightweight code to create a fast, resilient online presence.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
