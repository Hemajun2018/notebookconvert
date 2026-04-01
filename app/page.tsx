import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Converter from '@/components/Converter';
import TrustBadges from '@/components/TrustBadges';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
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

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full px-3 py-1 mb-4">
              100% Free · No Upload · No LaTeX
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Free IPYNB to PDF Converter Online<br className="hidden sm:block" />
              <span className="text-blue-600"> No LaTeX Required</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Convert Jupyter Notebook files to PDF, HTML, or Python directly in your browser.
              No installation. No server. Your files stay private.
            </p>

            {/* Converter widget */}
            <Converter defaultFormat="pdf" />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Trust badges */}
          <TrustBadges />

          {/* Features */}
          <section aria-labelledby="features-heading" className="py-12">
            <h2 id="features-heading" className="text-2xl font-bold text-gray-900 text-center mb-10">
              Why use notebookconvert.com?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
                  title: 'No LaTeX Installation',
                  desc: 'Traditional nbconvert PDF export requires a full LaTeX distribution. We use browser printing — zero dependencies.',
                },
                {
                  icon: 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88',
                  title: 'Complete Privacy',
                  desc: 'Conversion happens entirely client-side. We never see your code, data, or outputs. No analytics on your files.',
                },
                {
                  icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
                  title: 'All Output Types',
                  desc: 'Preserves matplotlib plots, pandas DataFrames, HTML output, stdout/stderr streams, error tracebacks, and equations.',
                },
              ].map(f => (
                <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section aria-labelledby="how-heading" className="py-12 bg-gray-50 rounded-2xl px-6 sm:px-10">
            <h2 id="how-heading" className="text-2xl font-bold text-gray-900 text-center mb-10">
              How it works
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 relative">
              {[
                { step: '1', title: 'Upload your notebook', desc: 'Drag and drop your .ipynb file or click to browse. Works with any Jupyter notebook in nbformat 4.' },
                { step: '2', title: 'Choose your format', desc: 'Select PDF for printing, HTML for sharing, or Python to extract code cells.' },
                { step: '3', title: 'Download instantly', desc: 'For PDF, a print dialog opens. Select "Save as PDF". For HTML and Python, the file downloads automatically.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-4 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO content */}
          <section className="py-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Convert Jupyter Notebooks to PDF Without LaTeX</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The standard way to export a Jupyter Notebook to PDF is{' '}
              <code className="bg-gray-100 px-1 rounded text-sm">jupyter nbconvert --to pdf</code>, which requires a
              full LaTeX installation (typically TeXLive or MiKTeX — several gigabytes). For many data scientists and
              researchers, this is a significant barrier. If you&apos;ve seen errors like{' '}
              <code className="bg-gray-100 px-1 rounded text-sm">xelatex not found</code> or{' '}
              <code className="bg-gray-100 px-1 rounded text-sm">pdflatex failed</code>, you&apos;re not alone.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              notebookconvert.com takes a different approach: it parses your .ipynb file directly in the browser,
              renders all cells (code, markdown, outputs, charts) to HTML, and opens the browser&apos;s native print dialog.
              Modern browsers can save any page as a high-quality PDF — no LaTeX required. The result is a clean,
              readable PDF that preserves your code syntax highlighting, matplotlib figures, pandas DataFrames, and
              LaTeX equations (via MathJax).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because everything runs client-side, your notebooks are completely private. There&apos;s no server, no
              upload, and no account required. The tool is completely free with no usage limits.
            </p>
          </section>

          {/* Comparison table */}
          <section aria-labelledby="comparison-heading" className="py-12">
            <h2 id="comparison-heading" className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Comparison: nbconvert vs notebookconvert.com
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">nbconvert (LaTeX)</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-blue-700 bg-blue-50">notebookconvert.com</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['LaTeX required', 'Yes (2–4 GB)', 'No'],
                    ['Installation needed', 'Yes', 'No'],
                    ['Works offline', 'Yes', 'Yes (after load)'],
                    ['Preserves charts', 'Yes', 'Yes'],
                    ['Preserves HTML outputs', 'Partial', 'Yes'],
                    ['Math equations', 'Yes (native LaTeX)', 'Yes (MathJax)'],
                    ['Privacy', 'Local', '100% local'],
                    ['Cost', 'Free', 'Free'],
                    ['Speed', 'Slow (LaTeX compile)', 'Fast (browser render)'],
                  ].map(([feature, nbconvert, ours], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-700">{feature}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-gray-500">{nbconvert}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-blue-700 font-medium bg-blue-50">{ours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection questions={faqs} />

          {/* Related tools */}
          <section aria-labelledby="related-heading" className="py-10 border-t border-gray-200">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900 mb-6 text-center">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: '/jupyter-to-pdf', label: 'Jupyter Notebook to PDF', desc: 'Convert .ipynb to PDF online' },
                { href: '/ipynb-to-html', label: 'IPYNB to HTML', desc: 'Export notebook as standalone HTML' },
                { href: '/ipynb-to-python', label: 'IPYNB to Python', desc: 'Extract code cells as .py file' },
              ].map(tool => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">{tool.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{tool.desc}</p>
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
