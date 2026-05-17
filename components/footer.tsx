'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 sm:px-6 lg:px-8 lg:flex-row lg:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">RangingFX Premium</p>
          <p className="max-w-xl leading-7 text-slate-400">
            Premium fintech growth solutions optimized for performance, credibility, and market conversion.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-100">Quick Links</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Resources</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Follow</p>
            <div className="mt-3 flex items-center gap-4 text-slate-400">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition hover:text-white"><Twitter size={18} /></a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin size={18} /></a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 px-4 pt-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} RangingFX Studio. Built for high-performance fintech brands.</p>
      </div>
    </footer>
  );
}
