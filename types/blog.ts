export type BlogFrontMatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  category: string;
  author: string;
  coverImage?: string;
  readingTime: string;
  slug: string;
};

export type BlogPost = {
  content: string;
  frontMatter: BlogFrontMatter;
};
