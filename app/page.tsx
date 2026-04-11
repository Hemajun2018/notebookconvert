import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Converter from '@/components/Converter';
import TrustBadges from '@/components/TrustBadges';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
import FeaturedBadges from '@/components/FeaturedBadges';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free IPYNB to PDF Converter Online — No LaTeX, No Upload | notebookconvert.com',
  description:
    'Convert Jupyter Notebook (.ipynb) to PDF instantly in your browser. No LaTeX required. Files never uploaded. Preserves code, outputs & charts. 100% free.',
  alternates: {
    canonical: 'https://notebookconvert.com',
  },
};

const faqs: FAQItem[] = [
  {
    question: 'How do I convert an IPYNB file to PDF?',
    answer:
      'Upload your .ipynb file using the drop zone above, select PDF as the export format, and click "Convert to PDF". A print dialog will open — choose "Save as PDF" as the destination and click Save.',
  },
  {
    question: 'Do I need to install LaTeX to convert Jupyter Notebook to PDF?',
    answer:
      'No. notebookconvert.com works entirely in your browser using browser print functionality. There is no LaTeX, no nbconvert, and no server involved.',
  },
  {
    question: 'Are my notebook files uploaded to a server?',
    answer:
      'Never. All conversion happens locally inside your web browser. Your files never leave your device. We have no server to upload to.',
  },
  {
    question: 'What output types are supported?',
    answer:
      'We support all standard Jupyter output types: text/plain, text/html (DataFrames, HTML tables), image/png and image/jpeg (matplotlib charts), image/svg+xml, stream output (stdout/stderr), and error tracebacks.',
  },
  {
    question: 'Does it support math equations and LaTeX in markdown cells?',
    answer:
      'Yes. When the converter detects math expressions (inline $...$ or block $$...$$), it automatically loads MathJax to render equations in the output.',
  },
  {
    question: 'What is the maximum file size?',
    answer:
      'The converter accepts .ipynb files up to 10 MB. Notebooks with many large images embedded as base64 may approach this limit.',
  },
  {
    question: 'Can I convert a Jupyter Notebook to HTML?',
    answer:
      'Yes. Select "HTML" in the format selector and click Convert. A standalone .html file will be downloaded that you can open in any browser or share with others.',
  },
  {
    question: 'Can I extract just the Python code from a notebook?',
    answer:
      'Yes. Select "Python (.py)" to download a .py file containing all code cells. Markdown cells are included as comments.',
  },
];

const features = [
  {
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    tag: '01',
    title: 'No LaTeX Installation',
    desc: 'Traditional nbconvert PDF export requires a full LaTeX distribution. We use browser printing — zero dependencies, zero setup.',
  },
  {
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
    tag: '02',
    title: 'Complete Privacy',
    desc: 'Conversion happens entirely client-side. We never see your code, data, or outputs. No analytics on your files.',
  },
  {
    icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
    tag: '03',
    title: 'All Output Types',
    desc: 'Preserves matplotlib plots, pandas DataFrames, HTML output, stdout/stderr streams, error tracebacks, and equations.',
  },
];

const steps = [
  {
    prompt: 'In [1]:',
    title: 'Upload your .ipynb file',
    desc: 'Drag and drop your Jupyter Notebook or click to browse. Works with any notebook in nbformat 4.',
  },
  {
    prompt: 'In [2]:',
    title: 'Choose PDF, HTML, or Python',
    desc: 'Select PDF for printing, HTML for sharing, or Python to extract code cells as a .py file.',
  },
  {
    prompt: 'In [3]:',
    title: 'Download instantly',
    desc: 'For PDF, a print dialog opens — select "Save as PDF". For HTML and Python, the file downloads automatically.',
  },
];

const comparisonRows: Array<[string, string, string]> = [
  ['LaTeX required', 'Yes (2–4 GB install)', 'No'],
  ['Installation needed', 'Python + LaTeX toolchain', 'None — runs in browser'],
  ['Works offline', 'Yes', 'Yes (after first load)'],
  ['Preserves charts', 'Yes', 'Yes'],
  ['Preserves HTML outputs', 'Partial', 'Yes'],
  ['Math equations', 'Yes (native LaTeX)', 'Yes (MathJax)'],
  ['Privacy', 'Local', '100% local, zero upload'],
  ['Cost', 'Free', 'Free'],
  ['Speed', 'Slow (LaTeX compile)', 'Fast (browser render)'],
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 via-white to-white border-b border-ink-200">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-700 bg-accent-100 border border-accent-200 rounded-full px-3 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" aria-hidden="true" />
                  Free · Browser-based · No nbconvert needed
                </div>

                <h1 className="font-semibold tracking-tight text-ink-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-5">
                  Free IPYNB to PDF Converter Online{' '}
                  <span className="text-accent-500">— No LaTeX Required</span>
                </h1>

                <p className="text-ink-500 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                  Convert Jupyter Notebook files to PDF, HTML, or Python directly in your browser.
                  No installation, no server, no signup. Your files stay private.
                </p>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-ink-500">
                  <li className="flex items-center gap-1.5">
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
                    No upload
                  </li>
                  <li className="flex items-center gap-1.5">
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
                    No LaTeX
                  </li>
                  <li className="flex items-center gap-1.5">
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
                    No signup
                  </li>
                </ul>
              </div>

              {/* Right: Converter (card variant provides its own In [1]: frame,
                  and updates the filename reactively when a file is dropped). */}
              <div className="lg:col-span-5">
                <Converter defaultFormat="pdf" variant="card" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Trust chips */}
          <TrustBadges />

          {/* Features */}
          <section aria-labelledby="features-heading" className="py-12">
            <h2
              id="features-heading"
              className="font-semibold text-2xl sm:text-3xl text-ink-900 text-center mb-10"
            >
              Why Convert IPYNB to PDF with Us?
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {features.map(f => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl border border-ink-200 p-6 hover:border-accent-200 hover:shadow-cell transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 bg-accent-50 border border-accent-200 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-[18px] h-[18px] text-accent-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <span className="font-mono text-xs text-ink-400">{f.tag}</span>
                  </div>
                  <h3 className="font-semibold text-ink-900 text-sm mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section aria-labelledby="how-heading" className="py-12">
            <div className="bg-white rounded-2xl border border-ink-200 px-6 sm:px-10 py-10">
              <h2
                id="how-heading"
                className="font-semibold text-2xl sm:text-3xl text-ink-900 text-center mb-10"
              >
                How to Convert Jupyter Notebook to PDF in 3 Steps
              </h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {steps.map(item => (
                  <div key={item.prompt} className="flex flex-col">
                    <div className="font-mono text-sm text-accent-600 mb-3">{item.prompt}</div>
                    <h3 className="font-semibold text-ink-900 text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO prose */}
          <section className="py-12 max-w-none">
            <h2 className="font-semibold text-2xl sm:text-3xl text-ink-900 mb-5">
              Convert Jupyter Notebooks to PDF Without LaTeX
            </h2>
            <p className="text-ink-700 leading-relaxed mb-4">
              The standard way to export a Jupyter Notebook to PDF is{' '}
              <code className="font-mono bg-ink-100 px-1.5 py-0.5 rounded text-ink-900 text-sm border border-ink-200">
                jupyter nbconvert --to pdf
              </code>
              , which requires a full LaTeX installation (typically TeXLive or MiKTeX — several
              gigabytes). For many data scientists and researchers, this is a significant barrier.
              If you&apos;ve seen errors like{' '}
              <code className="font-mono bg-red-50 px-1.5 py-0.5 rounded text-red-700 text-sm border border-red-200">
                xelatex not found
              </code>{' '}
              or{' '}
              <code className="font-mono bg-red-50 px-1.5 py-0.5 rounded text-red-700 text-sm border border-red-200">
                pdflatex failed
              </code>
              , you&apos;re not alone.
            </p>
            <p className="text-ink-700 leading-relaxed mb-4">
              notebookconvert.com takes a different approach: it parses your .ipynb file directly
              in the browser, renders all cells (code, markdown, outputs, charts) to HTML, and opens
              the browser&apos;s native print dialog. Modern browsers can save any page as a
              high-quality PDF — no LaTeX required. The result is a clean, readable PDF that
              preserves your code syntax highlighting, matplotlib figures, pandas DataFrames, and
              LaTeX equations (via MathJax).
            </p>
            <p className="text-ink-700 leading-relaxed">
              Because everything runs client-side, your notebooks are completely private.
              There&apos;s no server, no upload, and no account required. The tool is completely
              free with no usage limits.
            </p>
          </section>

          {/* Comparison table */}
          <section aria-labelledby="comparison-heading" className="py-12">
            <h2
              id="comparison-heading"
              className="font-semibold text-2xl sm:text-3xl text-ink-900 mb-8 text-center"
            >
              nbconvert vs notebookconvert.com
            </h2>
            <div className="overflow-x-auto rounded-xl border border-ink-200 bg-white">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-ink-50">
                    <th className="border-b border-ink-200 px-5 py-3.5 text-left font-mono text-xs text-ink-500 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="border-b border-ink-200 px-5 py-3.5 text-center font-mono text-xs text-ink-500 uppercase tracking-wider">
                      nbconvert (LaTeX)
                    </th>
                    <th className="border-b-2 border-accent-500 px-5 py-3.5 text-center font-mono text-xs text-accent-700 uppercase tracking-wider bg-accent-50">
                      notebookconvert.com
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, nbconvert, ours], i) => (
                    <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-ink-50/40'}>
                      <td className="border-b border-ink-200/70 px-5 py-3 text-ink-900 font-medium">
                        {feature}
                      </td>
                      <td className="border-b border-ink-200/70 px-5 py-3 text-center text-ink-500">
                        {nbconvert}
                      </td>
                      <td className="border-b border-accent-200/60 border-l-2 border-l-accent-500 px-5 py-3 text-center text-accent-700 font-mono text-xs bg-accent-50/40">
                        {ours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection questions={faqs} />

          {/* Related tools */}
          <section aria-labelledby="related-heading" className="py-10 border-t border-ink-200">
            <h2
              id="related-heading"
              className="font-semibold text-xl text-ink-900 mb-6 text-center"
            >
              More Jupyter Notebook Converters
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  href: '/jupyter-to-pdf',
                  label: 'Jupyter Notebook to PDF',
                  desc: 'Convert .ipynb to PDF online',
                },
                {
                  href: '/ipynb-to-html',
                  label: 'IPYNB to HTML',
                  desc: 'Export notebook as standalone HTML',
                },
                {
                  href: '/ipynb-to-python',
                  label: 'IPYNB to Python',
                  desc: 'Extract code cells as .py file',
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

          {/* Featured on */}
          <FeaturedBadges />
        </div>
      </main>
      <Footer />
    </>
  );
}
