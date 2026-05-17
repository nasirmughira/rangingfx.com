import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import { BlogPost, BlogFrontMatter } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const slugs = fs.readdirSync(postsDirectory).filter((slug) => slug.endsWith('.mdx'));
  const posts = slugs.map((slugFile) => {
    const slug = slugFile.replace(/\.mdx$/, '');
    const source = fs.readFileSync(path.join(postsDirectory, slugFile), 'utf8');
    const { data, content } = matter(source);
    return {
      content,
      frontMatter: {
        title: String(data.title),
        description: String(data.description),
        date: String(data.date),
        updated: data.updated ? String(data.updated) : undefined,
        tags: Array.isArray(data.tags) ? data.tags : [String(data.tags || '')].filter(Boolean),
        category: String(data.category || 'News'),
        author: String(data.author || 'RangingFX Studio'),
        coverImage: String(data.coverImage || '/og-image.svg'),
        readingTime: String(data.readingTime || '4 min read'),
        slug
      } as BlogFrontMatter
    };
  });

  return posts.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
};

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug as any, rehypeAutolinkHeadings as any, rehypePrismPlus as any]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      title: String(data.title),
      description: String(data.description),
      date: String(data.date),
      updated: data.updated ? String(data.updated) : undefined,
      tags: Array.isArray(data.tags) ? data.tags : [String(data.tags || '')].filter(Boolean),
      category: String(data.category || 'Insights'),
      author: String(data.author || 'RangingFX Studio'),
      coverImage: String(data.coverImage || '/og-image.svg'),
      readingTime: String(data.readingTime || '4 min read'),
      slug
    } as BlogFrontMatter
  };
};

export const getAllSlugs = async (): Promise<string[]> => {
  return fs
    .readdirSync(postsDirectory)
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => slug.replace(/\.mdx$/, ''));
};
