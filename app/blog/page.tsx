import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogList } from '@/components/blog-list';
import { generatePageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Blog',
    description: 'Insights, trading analysis, and fintech strategy articles from RangingFX.',
    pathname: '/blog'
  });
}

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Market insights and fintech growth stories.</h1>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">Explore premium posts focused on trading brand strategy, performance marketing, and digital finance design.</p>
        </section>

        <div className="mt-12">
          <BlogList posts={allPosts.map(({ frontMatter }) => frontMatter)} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
