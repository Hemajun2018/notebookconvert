import Link from 'next/link';
import Image from 'next/image';
import HeaderToolsDropdown from './HeaderToolsDropdown';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <Image src="/logo.png" alt="notebookconvert.com logo" width={28} height={28} className="rounded" />
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
