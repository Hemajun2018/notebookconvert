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

export default function IpynbToPythonPage() {
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
              Free IPYNB to Python (.py) Converter Online
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Extract all Python code from your Jupyter Notebook into a clean .py script.
              No installation, no upload — runs entirely in your browser.
            </p>
            <Converter defaultFormat="python" />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <TrustBadges />

          <section className="py-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Extract Python Code from Jupyter Notebooks
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jupyter Notebooks are excellent for interactive data exploration, but for production use, CI/CD
              pipelines, or running your analysis as a script, you often need a clean Python file. Manually
              copying code cells is tedious and error-prone.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This tool automatically extracts all code cells from your .ipynb file and combines them into a
              single .py script. Markdown cells become Python comments, preserving the narrative structure of
              your notebook. The result is a clean Python file you can run, import, or check into version
              control.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Everything runs in your browser — your notebook code never leaves your computer.
            </p>
          </section>

          <section aria-labelledby="use-cases-heading" className="py-12">
            <h2 id="use-cases-heading" className="text-2xl font-bold text-gray-900 text-center mb-8">
              When to convert IPYNB to Python
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Production deployment', desc: 'Run your analysis as a scheduled script or in a pipeline.' },
                { title: 'Version control', desc: 'Git diffs are much cleaner for .py files than .ipynb JSON.' },
                { title: 'Code review', desc: 'Share pure code with teammates who prefer .py files.' },
                { title: 'Testing', desc: 'Run your notebook logic through a test framework like pytest.' },
                { title: 'Refactoring', desc: 'Move functions and classes from a notebook into a proper module.' },
                { title: 'IDE integration', desc: 'Edit your notebook code in your preferred IDE with full tooling.' },
              ].map(item => (
                <div key={item.title} className="p-4 bg-white rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <FAQSection questions={faqs} heading="IPYNB to Python FAQ" />

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
              <Link href="/ipynb-to-html" className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">IPYNB to HTML</p>
                <p className="text-xs text-gray-500 mt-1">Export as HTML file</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
