'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  questions: FAQItem[];
  heading?: string;
}

export default function FAQSection({
  questions,
  heading = 'Frequently Asked Questions',
}: FAQSectionProps) {
  // Default first item open — helps SEO snippet extraction and signals content presence
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 id="faq-heading" className="text-2xl font-semibold text-ink-900 mb-8 text-center">
        {heading}
      </h2>
      <div className="max-w-3xl mx-auto divide-y divide-ink-200 border border-ink-200 rounded-xl overflow-hidden bg-white">
        {questions.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-ink-50 transition-colors"
              >
                <span className="font-medium text-ink-900 text-sm sm:text-base">
                  {item.question}
                </span>
                <svg
                  className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-accent-600' : 'text-ink-400'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-4">
                  <p className="text-ink-700 text-sm sm:text-base leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
