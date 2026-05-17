import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">About us</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">A premium fintech digital studio delivering trust, velocity, and market clarity.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">We partner with trading and finance brands to craft high-speed websites, SEO-driven content, and polished UI built for global investors. Our work blends trading-grade aesthetics with conversion engineering and strict performance standards.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">Our mission</h2>
            <p className="mt-4 leading-7 text-slate-300">To empower fintech leaders with digital experiences that feel premium, load instantly, and inspire investor confidence. We design with data, SEO, and strategy at the core.</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">Our approach</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Audience-first content for financial decision makers.</li>
              <li>Edge-optimized builds for Cloudflare Pages and global performance.</li>
              <li>Modern glassmorphism, premium gradients, and secure UX.</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Why leading trading brands choose RangingFX</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {['Fast loading UX', 'SEO-first content', 'Brand integrity', 'Secure modern build'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-300">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Get in touch</h2>
          <p className="mt-4 leading-7 text-slate-300">Every project begins with a conversation. Contact our team to discuss your fintech launch, platform redesign, or digital growth strategy.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300">
            Schedule a consultation
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
