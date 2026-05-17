import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Privacy Policy</h1>
          <p className="mt-4 leading-8 text-slate-300">We take privacy seriously. This policy explains how we collect, use, and protect your information when you use the RangingFX website.</p>
        </section>

        <article className="mt-10 space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-slate-300 shadow-glow">
          <section>
            <h2 className="text-2xl font-semibold text-white">Information Collection</h2>
            <p className="mt-3">We collect only the data you provide directly through contact forms and newsletter signups. We do not sell your data, and your information is stored for the purpose of delivering requested services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Cookies</h2>
            <p className="mt-3">This website may use cookies to improve user experience and support analytics. You can manage cookie preferences through your browser settings.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Third-party Services</h2>
            <p className="mt-3">We may reference analytics or email tools, but no customer data is shared without consent. Integration placeholders are included for Cloudflare analytics and email platforms.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
