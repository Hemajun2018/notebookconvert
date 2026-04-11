'use client';

import { useState } from 'react';
import Link from 'next/link';

const tools = [
  { href: '/', label: 'IPYNB to PDF' },
  { href: '/jupyter-to-pdf', label: 'Jupyter to PDF' },
  { href: '/ipynb-to-html', label: 'IPYNB to HTML' },
  { href: '/ipynb-to-python', label: 'IPYNB to Python' },
];

export default function HeaderToolsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-accent-600 transition-colors"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Tools
        <svg
          className={`w-4 h-4 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white border border-ink-200 rounded-xl shadow-cell py-1 z-50">
          {tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block px-4 py-2 text-sm font-mono text-ink-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              {tool.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
