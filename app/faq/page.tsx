import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const faqs = [
  { question: 'How long does a launch take?', answer: 'A premium website launch typically takes 4-6 weeks depending on scope, content readiness, and integrations.' },
  { question: 'Do you integrate with analytics and email systems?', answer: 'Yes. We provide placeholder integration for email capture, Cloudflare-compatible analytics, RSS feeds, and SEO tracking.' },
  { question: 'Can you create custom pricing and subscription pages?', answer: 'Absolutely. Pricing plans, service pages, and subscription flows are available as part of the website package.' }
];

export default function FAQPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Frequently asked questions about our fintech website service.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">Answers to common questions about timeline, analytics, hosting, and design approach.</p>
        </section>

        <section className="mt-16 space-y-6">
          {faqs.map((item) => (
            <details key={item.question} className="glass-card rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-white">{item.question}</summary>
              <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
