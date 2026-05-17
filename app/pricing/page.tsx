import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { generatePageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Pricing Plans',
    description: 'Transparent pricing plans for premium fintech website design and development.',
    pathname: '/pricing'
  });
}

const plans = [
  { title: 'Launch', price: '$3,800', description: 'Perfect for startups and boutique traders looking to launch a premium presence.', features: ['Landing page', 'SEO setup', 'Mobile-first design'] },
  { title: 'Growth', price: '$7,200', description: 'Designed for scaling fintech brands needing data-driven digital strategy.', features: ['Multi-page website', 'Blog system', 'Performance optimization'] },
  { title: 'Enterprise', price: '$12,500', description: 'Enterprise-grade delivery for trading platforms and financial service firms.', features: ['Custom systems', 'Advanced analytics', 'Ongoing support'] }
];

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Flexible plans built for fintech growth.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">Choose the package that fits your stage, whether you need a high-converting landing page or a full enterprise web platform.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="glass-card p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">{plan.title}</p>
              <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
              <p className="mt-4 text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-brand-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300">
                Choose plan
              </button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
