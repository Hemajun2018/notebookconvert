import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const viewport = {
  themeColor: '#2563eb',
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
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
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
