import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Converter from '@/components/Converter';
import TrustBadges from '@/components/TrustBadges';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free IPYNB to HTML Converter Online | notebookconvert.com',
  description:
    'Convert Jupyter Notebook (.ipynb) to a standalone HTML file online. No upload, no server. Preserves all outputs, charts, and code highlighting. Free.',
  alternates: {
    canonical: 'https://notebookconvert.com/ipynb-to-html',
  },
};

const faqs: FAQItem[] = [
  {
    question: 'How do I convert an IPYNB file to HTML?',
    answer:
      'Upload your .ipynb file, select HTML as the format, and click "Convert to HTML". A standalone .html file will be downloaded automatically.',
  },
  {
    question: 'Is the HTML output self-contained?',
    answer:
      'The HTML file includes all text content and base64-encoded images inline. It links to CDN-hosted highlight.js and optionally MathJax for math rendering, so an internet connection may be needed to view those elements.',
  },
  {
    question: 'Can I share the HTML file with others?',
    answer:
      'Yes. The HTML file can be opened in any browser. You can email it, host it on a web server, or share it via file-sharing services.',
  },
  {
    question: 'Does the HTML output include charts and images?',
    answer:
      'Yes. Charts saved as PNG or SVG in notebook outputs are embedded as base64 data URIs in the HTML file.',
  },
  {
    question: 'How is this different from nbconvert --to html?',
    answer:
      'nbconvert requires Python and Jupyter to be installed locally. This tool runs in your browser — no installation needed. For simple sharing and viewing, the output is equivalent.',
  },
];

const includedItems = [
  'Syntax-highlighted code cells',
  'Rendered markdown with headings, lists, links',
  'Embedded PNG/SVG chart images',
  'Formatted pandas DataFrames',
  'MathJax equations (loaded from CDN)',
  'stdout/stderr stream output',
  'Error tracebacks',
  'Clean print CSS for printing',
];

export default function IpynbToHtmlPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 via-white to-white border-b border-ink-200">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 lg:items-start">
              <div className="lg:col-span-7 lg:pt-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-700 bg-accent-100 border border-accent-200 rounded-full px-3 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" aria-hidden="true" />
                  Browser-Only · No Upload · Free
                </div>
                <h1 className="font-semibold tracking-tight text-ink-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-5">
                  Free IPYNB to HTML{' '}
                  <span className="text-accent-500">Converter Online</span>
                </h1>
                <p className="text-ink-500 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                  Convert your Jupyter Notebook to a standalone HTML file that anyone can open in a
                  browser. No server, no installation, completely private.
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-ink-500">
                  {['No upload', 'No server', 'No signup'].map(item => (
                    <li key={item} className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-accent-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <Converter defaultFormat="html" variant="card" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <TrustBadges />

          <section className="py-12 max-w-none">
            <h2 className="font-semibold text-2xl sm:text-3xl text-ink-900 mb-4">
              Why Convert Jupyter Notebook to HTML?
            </h2>
            <p className="text-ink-700 leading-relaxed mb-4">
              HTML is the most universally viewable format for Jupyter notebooks. Unlike PDF (which
              requires a PDF reader) or the .ipynb format (which requires Jupyter), an HTML file
              can be opened by anyone with a web browser — on any operating system, on any device.
            </p>
            <p className="text-ink-700 leading-relaxed mb-4">
              HTML output is ideal for sharing reports with stakeholders who don&apos;t use Jupyter,
              hosting notebooks on a web server or GitHub Pages, sending notebooks via email, or
              archiving analysis results.
            </p>
            <p className="text-ink-700 leading-relaxed">
              Our converter generates a standalone HTML file with all code syntax-highlighted, all
              outputs rendered, and all charts embedded as base64 images — no external files
              required.
            </p>
          </section>

          <section aria-labelledby="what-included-heading" className="py-12">
            <h2
              id="what-included-heading"
              className="font-semibold text-2xl sm:text-3xl text-ink-900 text-center mb-8"
            >
              What&apos;s Included in the HTML Output
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {includedItems.map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-ink-200"
                >
                  <svg
                    className="w-5 h-5 text-accent-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-ink-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <FAQSection questions={faqs} heading="IPYNB to HTML FAQ" />

          <section className="py-10 border-t border-ink-200">
            <h2 className="font-semibold text-xl text-ink-900 mb-6 text-center">
              More Jupyter Notebook Converters
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: '/', label: 'IPYNB to PDF', desc: 'Export notebook as PDF' },
                { href: '/jupyter-to-pdf', label: 'Jupyter to PDF', desc: 'No LaTeX needed' },
                {
                  href: '/ipynb-to-python',
                  label: 'IPYNB to Python',
                  desc: 'Extract code as .py file',
                },
              ].map(tool => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block p-4 rounded-xl border border-ink-200 bg-white hover:border-accent-500 hover:bg-accent-50 transition-all group"
                >
                  <p className="font-mono font-medium text-ink-900 group-hover:text-accent-700 text-xs transition-colors">
                    {tool.label}
                  </p>
                  <p className="text-xs text-ink-500 mt-1">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
