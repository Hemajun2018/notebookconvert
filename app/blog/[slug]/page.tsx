import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface PageProps {
  params: { slug: string };
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return {
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    html,
  };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(f => ({ slug: f.replace(/\.md$/, '') }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://notebookconvert.com/blog/${params.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'notebookconvert.com',
      url: 'https://notebookconvert.com',
    },
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-accent-600">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-700 font-medium truncate">{post.title}</li>
          </ol>
        </nav>

        <article>
          <header className="mb-8">
            <time className="font-mono text-xs text-ink-500 uppercase tracking-wide">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="font-semibold text-3xl sm:text-4xl text-ink-900 mt-2 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-ink-500 mt-3 leading-relaxed">{post.description}</p>
          </header>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        {/* CTA */}
        <div className="mt-12 p-6 bg-accent-50 rounded-xl border border-accent-200 text-center">
          <p className="font-semibold text-accent-700 mb-2">Ready to convert your notebook?</p>
          <p className="text-sm text-ink-700 mb-4">
            Use our free online converter — no LaTeX, no upload, no account needed.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-700 transition-colors text-sm"
          >
            Convert IPYNB to PDF
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-ink-200">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent-600 hover:text-accent-700 inline-flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
