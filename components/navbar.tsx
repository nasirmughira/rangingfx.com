'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/utils/cn';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-white">
          RangingFX
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={{ pathname: link.href }}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white',
                pathname === link.href ? 'bg-white/10 text-white' : 'text-slate-300'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-4 md:hidden">
          <div className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={{ pathname: link.href }}
                className={cn(
                  'block rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/10',
                  pathname === link.href ? 'bg-brand-500/15 text-white' : 'text-slate-300'
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
