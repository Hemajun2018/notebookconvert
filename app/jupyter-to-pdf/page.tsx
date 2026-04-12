import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Converter from '@/components/Converter';
import TrustBadges from '@/components/TrustBadges';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Convert Jupyter Notebook to PDF Online — Free, No LaTeX | notebookconvert.com',
  description:
    'Free online converter for Jupyter Notebook to PDF. No LaTeX installation needed. Preserves code, outputs, and charts. Runs 100% in your browser.',
  alternates: {
    canonical: 'https://notebookconvert.com/jupyter-to-pdf',
  },
};

const faqs: FAQItem[] = [
  {
    question: 'How do I convert a Jupyter Notebook to PDF online?',
    answer:
      'Upload your .ipynb file, select PDF, and click Convert. A print dialog opens where you choose "Save as PDF" as the destination.',
  },
  {
    question: 'Why does nbconvert fail to create a PDF?',
    answer:
      'nbconvert requires a LaTeX installation (TeXLive, MiKTeX, or MacTeX). If LaTeX is missing or misconfigured, nbconvert will fail with errors like "xelatex not found". This tool avoids LaTeX entirely by using browser printing.',
  },
  {
    question: 'Does the PDF preserve matplotlib charts?',
    answer:
      'Yes. Matplotlib figures embedded as PNG or SVG in the notebook output are rendered and included in the PDF.',
  },
  {
    question: 'Can I use this on a Chromebook or tablet?',
    answer:
      'Yes. Since everything runs in the browser, any device with a modern browser (Chrome, Firefox, Edge, Safari) can use this converter.',
  },
  {
    question: 'Will my notebook data be sent to a server?',
    answer:
      'No. All conversion happens locally in your browser. No data is sent to any server.',
  },
  {
    question: 'What Jupyter notebook format versions are supported?',
    answer:
      'We support nbformat 4 (the current format used by Jupyter Notebook and JupyterLab). If your notebook was created with a very old Jupyter version, open it in JupyterLab and re-save it to update to nbformat 4.',
  },
];

const preservedItems = [
  'Code cells with syntax highlighting',
  'Markdown cells with formatted text',
  'matplotlib and seaborn charts (PNG/SVG)',
  'pandas DataFrames as HTML tables',
  'LaTeX math equations (via MathJax)',
  'stdout/stderr output streams',
  'Error tracebacks',
  'Raw cell content',
];

export default function JupyterToPdfPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 via-white to-white border-b border-ink-200">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 lg:items-start">
              <div className="lg:col-span-7 lg:pt-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-700 bg-accent-100 border border-accent-200 rounded-full px-3 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" aria-hidden="true" />
                  No LaTeX · No Upload · Instant
                </div>
                <h1 className="font-semibold tracking-tight text-ink-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-5">
                  Convert Jupyter Notebook to PDF Online{' '}
                  <span className="text-accent-500">— Free, No LaTeX</span>
                </h1>
                <p className="text-ink-500 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                  Export your Jupyter Notebook as a PDF without installing LaTeX. Runs entirely in your
                  browser — private, fast, and free.
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-ink-500">
                  {['No upload', 'No LaTeX', 'No signup'].map(item => (
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
                <Converter defaultFormat="pdf" variant="card" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <TrustBadges />

          <section className="py-12 max-w-none">
            <h2 className="font-semibold text-2xl sm:text-3xl text-ink-900 mb-4">
              Jupyter Notebook to PDF — The Easy Way
            </h2>
            <p className="text-ink-700 leading-relaxed mb-4">
              Exporting a Jupyter Notebook to PDF traditionally requires{' '}
              <code className="font-mono bg-ink-100 px-1.5 py-0.5 rounded text-ink-900 text-sm border border-ink-200">
                nbconvert
              </code>{' '}
              with a working LaTeX installation. LaTeX installs can be gigabytes in size and
              frequently fail with cryptic errors like{' '}
              <code className="font-mono bg-red-50 px-1.5 py-0.5 rounded text-red-700 text-sm border border-red-200">
                LaTeX failed to compile
              </code>{' '}
              or missing{' '}
              <code className="font-mono bg-red-50 px-1.5 py-0.5 rounded text-red-700 text-sm border border-red-200">
                xelatex
              </code>{' '}
              binaries.
            </p>
            <p className="text-ink-700 leading-relaxed mb-4">
              This tool takes a fundamentally different approach: it reads your .ipynb file in the
              browser, renders each cell to HTML (using highlight.js for code, marked.js for
              markdown, and MathJax for equations), then uses the browser&apos;s built-in print
              engine to produce a PDF. The result is a clean, readable PDF with syntax-highlighted
              code, embedded charts, and rendered markdown.
            </p>
            <p className="text-ink-700 leading-relaxed">
              The converter runs 100% locally — your notebook content never leaves your computer.
            </p>
          </section>

          <section aria-labelledby="features-heading" className="py-12">
            <h2
              id="features-heading"
              className="font-semibold text-2xl sm:text-3xl text-ink-900 text-center mb-8"
            >
              What gets preserved in the PDF
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {preservedItems.map(item => (
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

          <FAQSection questions={faqs} heading="Jupyter to PDF FAQ" />

          <section className="py-10 border-t border-ink-200">
            <h2 className="font-semibold text-xl text-ink-900 mb-6 text-center">
              More Jupyter Notebook Converters
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: '/', label: 'IPYNB to PDF', desc: 'Convert .ipynb to PDF' },
                {
                  href: '/ipynb-to-html',
                  label: 'IPYNB to HTML',
                  desc: 'Export as standalone HTML',
                },
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
