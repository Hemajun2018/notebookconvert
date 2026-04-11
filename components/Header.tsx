import Link from 'next/link';
import Image from 'next/image';
import HeaderToolsDropdown from './HeaderToolsDropdown';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-ink-200">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo + tagline */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-ink-900 hover:text-accent-600 transition-colors"
        >
          <Image
            src="/logo.png"
            alt="notebookconvert.com logo"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="text-sm sm:text-base">notebookconvert.com</span>
          <span className="hidden md:inline font-mono text-xs text-ink-400 ml-2 border-l border-ink-200 pl-2">
            // .ipynb → .pdf · .html · .py
          </span>
        </Link>

        {/* Nav (visible on all breakpoints; Tools dropdown now also on mobile) */}
        <div className="flex items-center gap-5 sm:gap-6">
          <HeaderToolsDropdown />
          <Link
            href="/blog"
            className="text-sm font-medium text-ink-700 hover:text-accent-600 transition-colors"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
