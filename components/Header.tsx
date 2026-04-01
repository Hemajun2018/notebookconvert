'use client';

import { useState } from 'react';
import Link from 'next/link';

const tools = [
  { href: '/', label: 'IPYNB to PDF' },
  { href: '/jupyter-to-pdf', label: 'Jupyter to PDF' },
  { href: '/ipynb-to-html', label: 'IPYNB to HTML' },
  { href: '/ipynb-to-python', label: 'IPYNB to Python' },
];

export default function Header() {
  const [toolsOpen, setToolsOpen] = useState(false);

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
          {/* Tools dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setToolsOpen(prev => !prev)}
              onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              aria-haspopup="true"
              aria-expanded={toolsOpen}
            >
              Tools
              <svg
                className={`w-4 h-4 transition-transform duration-150 ${toolsOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {toolsOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
                {tools.map(tool => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    onClick={() => setToolsOpen(false)}
                  >
                    {tool.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
