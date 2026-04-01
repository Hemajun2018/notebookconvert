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

export default function JupyterToPdfPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full px-3 py-1 mb-4">
              No LaTeX · No Upload · Instant
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Convert Jupyter Notebook to PDF Online
              <span className="text-blue-600"> Free, No LaTeX</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Export your Jupyter Notebook as a PDF without installing LaTeX. Runs entirely in your
              browser — private, fast, and free.
            </p>
            <Converter defaultFormat="pdf" />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <TrustBadges />

          <section className="py-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Jupyter Notebook to PDF — The Easy Way
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Exporting a Jupyter Notebook to PDF traditionally requires <code className="bg-gray-100 px-1 rounded text-sm">nbconvert</code> with
              a working LaTeX installation. LaTeX installs can be gigabytes in size and frequently fail with cryptic
              errors like <code className="bg-gray-100 px-1 rounded text-sm">LaTeX failed to compile</code> or
              missing <code className="bg-gray-100 px-1 rounded text-sm">xelatex</code> binaries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This tool takes a fundamentally different approach: it reads your .ipynb file in the browser,
              renders each cell to HTML (using highlight.js for code, marked.js for markdown, and MathJax for
              equations), then uses the browser&apos;s built-in print engine to produce a PDF. The result is a
              clean, readable PDF with syntax-highlighted code, embedded charts, and rendered markdown.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The converter runs 100% locally — your notebook content never leaves your computer.
            </p>
          </section>

          <section aria-labelledby="features-heading" className="py-12">
            <h2 id="features-heading" className="text-2xl font-bold text-gray-900 text-center mb-8">
              What gets preserved in the PDF
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Code cells with syntax highlighting',
                'Markdown cells with formatted text',
                'matplotlib and seaborn charts (PNG/SVG)',
                'pandas DataFrames as HTML tables',
                'LaTeX math equations (via MathJax)',
                'stdout/stderr output streams',
                'Error tracebacks',
                'Raw cell content',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <FAQSection questions={faqs} heading="Jupyter to PDF FAQ" />

          <section className="py-10 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">More Tools</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/" className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">IPYNB to PDF</p>
                <p className="text-xs text-gray-500 mt-1">Convert .ipynb to PDF</p>
              </Link>
              <Link href="/ipynb-to-html" className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">IPYNB to HTML</p>
                <p className="text-xs text-gray-500 mt-1">Export as standalone HTML</p>
              </Link>
              <Link href="/ipynb-to-python" className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">IPYNB to Python</p>
                <p className="text-xs text-gray-500 mt-1">Extract code as .py file</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
