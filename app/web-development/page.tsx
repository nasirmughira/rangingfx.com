import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function WebDevelopmentPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Web development</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Launch secure, lightning-fast fintech experiences.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">We build custom web applications, landing experiences, and market intelligence dashboards that feel premium and perform at edge scale.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {['Next.js App Router', 'Tailwind CSS UI', 'Framer Motion interactions'].map((item) => (
            <div key={item} className="glass-card p-8">
              <h2 className="text-xl font-semibold text-white">{item}</h2>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Platform architecture</h2>
          <p className="mt-4 leading-7 text-slate-300">Our development workflow includes component-based design, accessibility verification, and strict quality checks to ensure each launch is polished and stable.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
