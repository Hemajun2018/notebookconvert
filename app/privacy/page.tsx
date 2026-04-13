import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | notebookconvert.com',
  description:
    'Privacy policy for notebookconvert.com. We do not collect, upload, or store any of your notebook files.',
};

const sections = [
  {
    title: 'Overview',
    body: 'notebookconvert.com is designed with privacy as a core principle. All notebook conversion happens entirely within your web browser. Your files, code, and data never leave your device. We have no server infrastructure for processing your notebooks.',
  },
  {
    title: 'No File Uploads',
    body: 'When you upload a .ipynb file on this website, it is read by JavaScript running in your browser. The file contents are processed locally and never transmitted to any server. We cannot access your files, and they are not stored anywhere.',
  },
  {
    title: 'Analytics',
    body: "We may use Google Analytics to collect anonymized usage statistics such as page views, geographic region (country level), browser type, and referral sources. This data does not include any information about the content of your notebooks. Google Analytics data is subject to Google's privacy policy.",
  },
  {
    title: 'Cookies',
    body: 'We do not use cookies for tracking or advertising. Google Analytics may set cookies as part of its analytics functionality.',
  },
  {
    title: 'Third-Party Resources',
    body: 'The converted HTML output may load resources from third-party CDNs (highlight.js on cdnjs.cloudflare.com and MathJax on cdn.jsdelivr.net). These resources are only loaded when you open the exported HTML file in a browser, not during the conversion process on this website.',
  },
  {
    title: 'Data Retention',
    body: 'We retain no user data. Since no files are uploaded to our servers, there is nothing to retain or delete. Any data in your browser (such as the file you uploaded) is cleared when you close the tab.',
  },
  {
    title: 'Contact',
    body: 'If you have questions about this privacy policy, please contact us at contact@notebookconvert.com.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-semibold text-3xl text-ink-900 mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          {sections.map(section => (
            <section key={section.title}>
              <h2 className="font-semibold text-xl text-ink-900 mb-3">{section.title}</h2>
              <p className="text-ink-700 leading-relaxed">{section.body}</p>
            </section>
          ))}

          <p className="text-sm text-ink-400 mt-8 font-mono">Last updated: March 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
