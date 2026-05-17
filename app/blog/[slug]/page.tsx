import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import components from '@/components/mdx-components';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { generatePageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: any) {
  const post = await getPostBySlug(params.slug);
  if (!post) return;
  return generatePageMetadata({
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    pathname: `/blog/${post.frontMatter.slug}`,
    image: post.frontMatter.coverImage
  });
}

export default async function BlogPostPage(props: any) {
  const { params } = props;
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">{post.frontMatter.category}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.frontMatter.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              <span>{post.frontMatter.author}</span>
              <span>{new Date(post.frontMatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>{post.frontMatter.readingTime}</span>
            </div>
          </div>
          <div className="prose prose-invert mt-10 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-brand-200 prose-code:text-brand-200 prose-blockquote:border-slate-700 prose-blockquote:text-slate-300">
            <MDXRemote source={post.mdxSource} components={components} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
