import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Converter from '@/components/Converter';
import TrustBadges from '@/components/TrustBadges';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free IPYNB to Python (.py) Converter Online | notebookconvert.com',
  description:
    'Extract Python code from Jupyter Notebook (.ipynb) files instantly in your browser. Converts all code cells to a clean .py script. Free, no upload.',
  alternates: {
    canonical: 'https://notebookconvert.com/ipynb-to-python',
  },
};

const faqs: FAQItem[] = [
  {
    question: 'How do I convert an IPYNB file to Python?',
    answer:
      'Upload your .ipynb file, select "Python (.py)" as the format, and click "Extract Python". A .py file with all code cells will be downloaded.',
  },
  {
    question: 'What happens to markdown cells?',
    answer:
      'Markdown cells are included in the .py file as Python comments (prefixed with #), so the script reads naturally.',
  },
  {
    question: 'Are cell outputs included in the .py file?',
    answer:
      'No. Cell outputs (charts, prints, etc.) are not included since they are runtime results, not source code.',
  },
  {
    question: 'Is this the same as nbconvert --to script?',
    answer:
      'Very similar. nbconvert --to script is the standard tool, but it requires Python and Jupyter to be installed. This tool does the same thing in your browser with no installation.',
  },
  {
    question: 'Can I run the resulting .py file directly?',
    answer:
      'Yes. The extracted .py file is valid Python that you can run with the Python interpreter. Some cells may depend on notebook-specific magic commands (like %matplotlib inline) which you may need to remove or adapt.',
  },
  {
    question: 'What about Jupyter magic commands?',
    answer:
      'Magic commands (lines starting with % or %%) are included as-is in the .py file. When running as a script, you may need to remove or replace them with equivalent Python code.',
  },
];

const useCases = [
  {
    title: 'Production deployment',
    desc: 'Run your analysis as a scheduled script or in a pipeline.',
  },
  {
    title: 'Version control',
    desc: 'Git diffs are much cleaner for .py files than .ipynb JSON.',
  },
  { title: 'Code review', desc: 'Share pure code with teammates who prefer .py files.' },
  { title: 'Testing', desc: 'Run your notebook logic through a test framework like pytest.' },
  {
    title: 'Refactoring',
    desc: 'Move functions and classes from a notebook into a proper module.',
  },
  {
    title: 'IDE integration',
    desc: 'Edit your notebook code in your preferred IDE with full tooling.',
  },
];

export default function IpynbToPythonPage() {
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
                  Free IPYNB to Python{' '}
                  <span className="text-accent-500">(.py) Converter</span>
                </h1>
                <p className="text-ink-500 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                  Extract all Python code from your Jupyter Notebook into a clean .py script. No
                  installation, no upload — runs entirely in your browser.
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
                <Converter defaultFormat="python" variant="card" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <TrustBadges />

          <section className="py-12 max-w-none">
            <h2 className="font-semibold text-2xl sm:text-3xl text-ink-900 mb-4">
              Extract Python Code from Jupyter Notebooks
            </h2>
            <p className="text-ink-700 leading-relaxed mb-4">
              Jupyter Notebooks are excellent for interactive data exploration, but for production
              use, CI/CD pipelines, or running your analysis as a script, you often need a clean
              Python file. Manually copying code cells is tedious and error-prone.
            </p>
            <p className="text-ink-700 leading-relaxed mb-4">
              This tool automatically extracts all code cells from your .ipynb file and combines
              them into a single .py script. Markdown cells become Python comments, preserving the
              narrative structure of your notebook. The result is a clean Python file you can run,
              import, or check into version control.
            </p>
            <p className="text-ink-700 leading-relaxed">
              Everything runs in your browser — your notebook code never leaves your computer.
            </p>
          </section>

          <section aria-labelledby="use-cases-heading" className="py-12">
            <h2
              id="use-cases-heading"
              className="font-semibold text-2xl sm:text-3xl text-ink-900 text-center mb-8"
            >
              When to Convert IPYNB to Python
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map(item => (
                <div
                  key={item.title}
                  className="p-4 bg-white rounded-xl border border-ink-200 hover:border-accent-200 hover:shadow-cell transition-all"
                >
                  <h3 className="font-semibold text-ink-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-ink-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <FAQSection questions={faqs} heading="IPYNB to Python FAQ" />

          <section className="py-10 border-t border-ink-200">
            <h2 className="font-semibold text-xl text-ink-900 mb-6 text-center">
              More Jupyter Notebook Converters
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: '/', label: 'IPYNB to PDF', desc: 'Export notebook as PDF' },
                { href: '/jupyter-to-pdf', label: 'Jupyter to PDF', desc: 'No LaTeX needed' },
                { href: '/ipynb-to-html', label: 'IPYNB to HTML', desc: 'Export as HTML file' },
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
