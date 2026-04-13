import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-ink-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-500">
        <p>
          &copy; {year}{' '}
          <Link
            href="/"
            className="font-medium text-ink-700 hover:text-accent-600 transition-colors"
          >
            notebookconvert.com
          </Link>{' '}
          — Free online Jupyter Notebook converter
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          <Link href="/blog" className="hover:text-accent-600 transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-accent-600 transition-colors">
            Privacy Policy
          </Link>
          <a href="mailto:contact@notebookconvert.com" className="hover:text-accent-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
