import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Start your fintech launch with a high-performance website.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">Submit your brief and receive a focused response with next-phase recommendations, timeline estimates, and strategic next steps.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_0.85fr]">
          <div className="glass-card p-8">
            <p className="font-semibold text-white">Contact details</p>
            <dl className="mt-6 space-y-4 text-slate-300">
              <div>
                <dt className="font-semibold text-slate-100">Email</dt>
                <dd>hello@rangingfx.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Phone</dt>
                <dd>+1 (555) 842-7392</dd>
              </div>
            </dl>
          </div>
          <form className="glass-card rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
            <div className="grid gap-5">
              <label className="flex flex-col gap-2 text-slate-300">
                <span>Name</span>
                <input type="text" placeholder="Your name" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" required />
              </label>
              <label className="flex flex-col gap-2 text-slate-300">
                <span>Email</span>
                <input type="email" placeholder="Your email" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" required />
              </label>
              <label className="flex flex-col gap-2 text-slate-300">
                <span>Message</span>
                <textarea rows={6} placeholder="Tell us about your project" className="min-h-[160px] rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" required />
              </label>
              <button type="submit" className="rounded-full bg-brand-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-300">
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
