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

export default function IpynbToHtmlPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full px-3 py-1 mb-4">
              Browser-Only · No Upload · Free
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Free IPYNB to HTML Converter Online
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Convert your Jupyter Notebook to a standalone HTML file that anyone can open in a browser.
              No server, no installation, completely private.
            </p>
            <Converter defaultFormat="html" />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <TrustBadges />

          <section className="py-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Convert Jupyter Notebook to HTML?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              HTML is the most universally viewable format for Jupyter notebooks. Unlike PDF (which requires a
              PDF reader) or the .ipynb format (which requires Jupyter), an HTML file can be opened by anyone
              with a web browser — on any operating system, on any device.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              HTML output is ideal for sharing reports with stakeholders who don&apos;t use Jupyter, hosting
              notebooks on a web server or GitHub Pages, sending notebooks via email, or archiving analysis results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our converter generates a standalone HTML file with all code syntax-highlighted, all outputs
              rendered, and all charts embedded as base64 images — no external files required.
            </p>
          </section>

          <section aria-labelledby="what-included-heading" className="py-12">
            <h2 id="what-included-heading" className="text-2xl font-bold text-gray-900 text-center mb-8">
              What&apos;s included in the HTML output
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Syntax-highlighted code cells',
                'Rendered markdown with headings, lists, links',
                'Embedded PNG/SVG chart images',
                'Formatted pandas DataFrames',
                'MathJax equations (loaded from CDN)',
                'stdout/stderr stream output',
                'Error tracebacks',
                'Clean print CSS for printing',
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

          <FAQSection questions={faqs} heading="IPYNB to HTML FAQ" />

          <section className="py-10 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">More Tools</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/" className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">IPYNB to PDF</p>
                <p className="text-xs text-gray-500 mt-1">Export notebook as PDF</p>
              </Link>
              <Link href="/jupyter-to-pdf" className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">Jupyter to PDF</p>
                <p className="text-xs text-gray-500 mt-1">No LaTeX needed</p>
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
