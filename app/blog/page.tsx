import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: 'Blog — Jupyter Notebook Tips & Guides | notebookconvert.com',
  description:
    'Tutorials and guides about exporting Jupyter Notebooks to PDF, HTML, and Python. Tips for nbconvert, LaTeX issues, and more.',
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

  return files
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-600 mb-10">
          Guides, tips, and tutorials for working with Jupyter Notebooks.
        </p>

        <div className="space-y-6">
          {posts.map(post => (
            <article
              key={post.slug}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <time className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
