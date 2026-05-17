import { Hero } from '@/components/hero';
export const dynamic = 'force-dynamic';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import Link from 'next/link';
import { motion } from 'framer-motion';

const statistics = [
  { label: 'Conversion lift', value: '4.7x' },
  { label: 'Page speed', value: '99%' },
  { label: 'Organic traffic', value: '+32%' },
  { label: 'Retention rate', value: '92%' }
];

const services = [
  { title: 'Custom Web Development', description: 'Modern fintech web experiences built for speed, reliability, and conversion.' },
  { title: 'SEO & Growth Strategy', description: 'Data-led search optimization that captures investor intent and improves visibility.' },
  { title: 'Brand & UI Design', description: 'Premium visual systems engineered for trust and market credibility.' }
];

const testimonials = [
  { name: 'Sofia Chen', role: 'CTO, Apex Markets', quote: 'RangingFX transformed our digital presence overnight. The speed and clarity helped us convert top-tier leads faster.', company: 'Apex Markets' },
  { name: 'Mason Lee', role: 'Founder, Vertex Capital', quote: 'The new site feels premium, secure, and truly financial. The team delivered a modern trading experience that outperforms competitors.', company: 'Vertex Capital' }
];

const faqItems = [
  { question: 'Can this website be deployed on Cloudflare Pages?', answer: 'Yes. The project is fully compatible with Cloudflare Pages and includes build configuration for fast, edge-ready deployment.' },
  { question: 'Do you support MDX blogging and RSS feeds?', answer: 'Absolutely. The blog runs on MDX with dynamic metadata, RSS feed generation, and search-ready indexing.' },
  { question: 'Is the design mobile-first and accessible?', answer: 'The entire site is built mobile-first, keyboard-friendly, and optimized for modern accessibility standards.' }
];

export default function HomePage() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="mx-auto max-w-7xl pb-20 pt-6 sm:pb-24">
        <Hero />

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Performance-led trading insights</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Trusted fintech metrics with premium motion.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">A design system built for trading dashboards, investor trust, and fast page experiences across desktop and mobile.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {statistics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article key={service.title} className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="glass-card p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Premium fintech design with measurable results.</h2>
            <ul className="mt-8 grid gap-4 text-slate-300 sm:grid-cols-2">
              {['Market-first UX', 'Speed-optimized architecture', 'SEO-ready content', 'Data-driven branding'].map((item) => (
                <li key={item} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-card grid gap-4 p-8">
            <div className="flex items-center gap-4 rounded-3xl border border-brand-500/10 bg-slate-950/90 p-5">
              <div className="rounded-2xl bg-brand-500/10 p-3 text-brand-300">01</div>
              <div>
                <h3 className="font-semibold text-white">Trading performance</h3>
                <p className="mt-1 text-slate-400">UI inspired by charts, heatmaps, and market momentum for investor-grade credibility.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Insight</p>
              <p className="mt-3 text-slate-300">Every page is optimized to explain your financial products clearly while driving qualified leads.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Featured services</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Intelligent experiences for every financial user.</h2>
              <p className="mt-4 leading-7 text-slate-300">Our services blend strategy, frontend performance, and creative design to strengthen trust and accelerate acquisition.</p>
            </div>
            <div className="grid gap-4">
              {['Corporate web systems', 'SEO for financial brands', 'Conversion-first landing pages'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/90 p-6">
                  <p className="font-semibold text-white">{item}</p>
                  <p className="mt-3 text-slate-400">Designed with enterprise quality and built to scale with markets.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 text-brand-300">
              <div className="h-12 w-12 rounded-3xl bg-brand-400/10" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em]">Trading performance</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Data-driven dashboards for premium portfolios.</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Liquidity monitoring', 'Growth forecast', 'Investor signals', 'Conversion tracking'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-slate-300">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 to-slate-900/80 p-8 text-slate-100 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Market pulse</p>
            <div className="mt-8 grid gap-5">
              {['Session duration +41%', 'Revenue visibility upgraded', 'Launch confidence strengthened'].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-950/90 p-5">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl sm:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Client success</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Trusted by trading and fintech teams worldwide.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-8">
                  <p className="text-lg leading-8 text-slate-300">“{testimonial.quote}”</p>
                  <p className="mt-6 font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.55fr]">
          <div className="glass-card p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Latest insights</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Market insights from the RangingFX team.</h2>
            <p className="mt-4 leading-7 text-slate-300">Keep your fintech strategy sharp with curated articles, product thinking, and digital growth trends.</p>
            <Link href="/blog" className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-200">
              Read the blog
            </Link>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <p className="font-semibold text-white">{item.question}</p>
                  <p className="mt-2 text-slate-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Newsletter</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Receive trading insights and monthly growth reports.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">Stay ahead of market trends and product launches with premium analysis delivered to your inbox.</p>
            </div>
            <form className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
                required
              />
              <button type="submit" className="rounded-3xl bg-brand-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-300">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 to-slate-900/80 p-10 text-center shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Ready to launch</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Let’s build the fintech brand your customers trust.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">From strategy to launch, the premium digital experience your trading business deserves is one message away.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            Book a consultation
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
