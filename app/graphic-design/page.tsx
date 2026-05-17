import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function GraphicDesignPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Design</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Brand systems and UI for premium fintech experiences.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">We create striking, trustworthy visuals for trading apps, corporate finance pages, and investor-grade digital products.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {['Visual identity', 'Data storytelling', 'Interactive UI components'].map((item) => (
            <div key={item} className="glass-card p-8">
              <h2 className="text-xl font-semibold text-white">{item}</h2>
              <p className="mt-4 text-slate-300">High-quality design systems that communicate authority and performance.</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
