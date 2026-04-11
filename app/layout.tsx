import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const viewport = {
  themeColor: '#F37626',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://notebookconvert.com'),
  title: {
    default: 'notebookconvert.com — Free Jupyter Notebook Converter Online',
    template: '%s | notebookconvert.com',
  },
  description: 'Convert Jupyter Notebook (.ipynb) to PDF, HTML, or Python online. No upload, no LaTeX, 100% free and private.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notebookconvert.com',
    siteName: 'notebookconvert.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'notebookconvert.com',
  url: 'https://notebookconvert.com',
  description:
    'Free online Jupyter Notebook (.ipynb) converter. Convert notebooks to PDF, HTML, or Python directly in your browser. No LaTeX, no upload, 100% private.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires a modern web browser with JavaScript enabled.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Convert IPYNB to PDF',
    'Convert IPYNB to HTML',
    'Convert IPYNB to Python (.py)',
    'No LaTeX installation required',
    '100% client-side conversion',
    'Preserves code highlighting, charts, DataFrames, and math equations',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
      </head>
      <body className="min-h-screen bg-ink-50 text-ink-900 font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-BJXB3HGGY0"
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BJXB3HGGY0');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
