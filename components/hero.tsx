'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 lg:pt-24">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_24%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <p className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200">
                <Sparkles className="mr-2 h-4 w-4" />
                Fintech growth crafted for modern brands
              </p>
            </motion.div>
            <motion.h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
              Elevate your trading brand with premium fintech storytelling and conversion-first design.
            </motion.h1>
            <motion.p className="max-w-2xl leading-8 text-slate-300 sm:text-lg"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
              Launch a fast, secure website built for investors, traders, and institutions. Premium visuals, lightning speed, and SEO-ready growth strategy bundled in one.
            </motion.p>
            <motion.div className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300">
                Start your project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-200">
                Explore plans
              </Link>
            </motion.div>
          </div>
          <motion.div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}>
            <div className="grid gap-4 rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-5 text-slate-100 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Live trading signals</p>
                  <p className="text-2xl font-semibold text-white">+23.8%</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3 text-brand-400">
                  <BarChart3 size={20} />
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-300">
                <p>Market sentiment, liquidity flows, and performance metrics delivered with glassmorphic clarity.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Conversion', value: '4.6x' },
                  { label: 'Retention', value: '91%' }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-brand-500/10 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 text-slate-300">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-400" />
                <span className="text-sm">Enterprise-grade performance and compliance-ready delivery.</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-brand-400" />
                <span className="text-sm">Seamless onboarding, launch, and growth support.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
