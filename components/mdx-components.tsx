 'use client';
import React from 'react';

import { cn } from '@/utils/cn';

const components = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className={cn('scroll-m-20 text-4xl font-semibold tracking-tight text-slate-100')} {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className={cn('mt-10 scroll-m-20 text-3xl font-semibold tracking-tight text-slate-100')} {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className={cn('leading-8 text-slate-300')} {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<'a'>) => (
    <a className={cn('font-medium text-brand-400 transition hover:text-brand-300')} {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => (
    <code className={cn('rounded bg-slate-900 px-1.5 py-0.5 font-mono text-sm text-brand-200')} {...props} />
  ),
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <pre className={cn('my-6 overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950/90 p-5')} {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className={cn('ml-5 list-disc space-y-2 text-slate-300')} {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className={cn('ml-5 list-decimal space-y-2 text-slate-300')} {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className={cn('border-l-4 border-brand-500 pl-4 italic text-slate-300')} {...props} />
  )
};

export default components;
