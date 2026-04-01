'use client';

export default function PrintGuide() {
  return (
    <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
      <h3 className="font-semibold text-blue-800 text-sm mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        How to save as PDF
      </h3>
      <ol className="space-y-2 text-sm text-blue-900">
        <li className="flex items-start gap-2">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">1</span>
          <span>A print dialog has opened (or will open shortly) in a new window.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">2</span>
          <span>
            In the <strong>Destination</strong> field, choose{' '}
            <strong>&ldquo;Save as PDF&rdquo;</strong> (Chrome/Edge) or{' '}
            <strong>&ldquo;Print to PDF&rdquo;</strong> (Firefox).
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">3</span>
          <span>
            Optional: enable <strong>Background graphics</strong> in &ldquo;More settings&rdquo; to preserve syntax highlighting colors.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">4</span>
          <span>Click <strong>Save</strong> or <strong>Print</strong> to download your PDF.</span>
        </li>
      </ol>
      <p className="mt-3 text-xs text-blue-700">
        Tip: set margins to &ldquo;Minimum&rdquo; or &ldquo;None&rdquo; for a cleaner PDF.
      </p>
    </div>
  );
}
