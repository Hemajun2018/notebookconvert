import Link from 'next/link';
import HeaderToolsDropdown from './HeaderToolsDropdown';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span className="text-sm sm:text-base">notebookconvert.com</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <HeaderToolsDropdown />
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </div>

        {/* Mobile: simple links */}
        <div className="flex sm:hidden items-center gap-4">
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
