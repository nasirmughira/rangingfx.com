'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-slate-900/50">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-400 via-sky-400 to-cyan-300"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
      />
    </div>
  );
}
