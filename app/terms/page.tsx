import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function TermsPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Terms & Conditions</h1>
          <p className="mt-4 leading-8 text-slate-300">These terms govern the use of the RangingFX website and any services offered here. By engaging with this site, you accept these conditions.</p>
        </section>

        <article className="mt-10 space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-slate-300 shadow-glow">
          <section>
            <h2 className="text-2xl font-semibold text-white">Usage</h2>
            <p className="mt-3">Use of the site is provided for informational purposes only. Any service requests submitted through contact forms are subject to additional agreement terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
            <p className="mt-3">All design, branding, and content on this website are proprietary to RangingFX Studio. Unauthorized copying is prohibited.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-3">RangingFX is not liable for indirect damages arising from use of this website or any referenced services. All project work is subject to separate contract terms.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
