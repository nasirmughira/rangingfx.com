import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 text-center text-slate-200 sm:px-6">
      <p className="text-sm uppercase tracking-[0.4em] text-brand-300">404</p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-400">The page you are looking for has moved or no longer exists. Return to the homepage to continue exploring premium fintech solutions.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300">
        Back to home
      </Link>
    </div>
  );
}
