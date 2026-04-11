'use client';

import { useState, useCallback } from 'react';
import DropZone from './DropZone';
import FormatSelector, { type ExportFormat } from './FormatSelector';
import ConvertButton from './ConvertButton';
import PrintGuide from './PrintGuide';

type Status = 'idle' | 'parsing' | 'rendering' | 'ready' | 'error';

interface ConverterProps {
  defaultFormat?: ExportFormat;
  /**
   * - `card` (default): Converter renders its own `In [1]:` notebook cell frame.
   *   Use on standalone landing pages where the converter sits in a plain section.
   * - `bare`: Converter renders only the inner controls, no frame. Use when the
   *   parent (e.g. homepage hero) already provides a notebook-cell wrapper.
   */
  variant?: 'card' | 'bare';
}

export default function Converter({
  defaultFormat = 'pdf',
  variant = 'card',
}: ConverterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<ExportFormat>(defaultFormat);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showPrintGuide, setShowPrintGuide] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setStatus('idle');
    setErrorMessage('');
    setShowPrintGuide(false);
  }, []);

  const handleConvert = useCallback(async () => {
    if (!file) return;

    setErrorMessage('');
    setShowPrintGuide(false);
    setStatus('parsing');

    try {
      const json = await file.text();

      const { parseNotebook } = await import('@/lib/parseNotebook');
      const notebook = parseNotebook(json);

      setStatus('rendering');

      const baseName = file.name.replace(/\.ipynb$/, '');

      if (format === 'python') {
        const { exportPython } = await import('@/lib/exportPDF');
        exportPython(notebook.cells, baseName);
        setStatus('ready');
        return;
      }

      const { renderNotebookToHTML } = await import('@/lib/renderHTML');
      const html = renderNotebookToHTML(notebook, { title: baseName });

      if (format === 'html') {
        const { exportHTML } = await import('@/lib/exportPDF');
        exportHTML(html, baseName);
        setStatus('ready');
        return;
      }

      if (format === 'pdf') {
        const { exportPDF } = await import('@/lib/exportPDF');
        exportPDF(html, baseName);
        setStatus('ready');
        setShowPrintGuide(true);
        return;
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setErrorMessage(message);
      setStatus('error');
    }
  }, [file, format]);

  const isLoading = status === 'parsing' || status === 'rendering';
  const statusLabel =
    status === 'parsing'
      ? 'Parsing notebook...'
      : status === 'rendering'
      ? 'Rendering content...'
      : undefined;

  const inner = (
    <div className="space-y-5">
      <DropZone onFile={handleFile} fileName={file?.name} disabled={isLoading} />

      <FormatSelector
        value={format}
        onChange={val => {
          setFormat(val);
          setShowPrintGuide(false);
          setStatus('idle');
        }}
        disabled={isLoading}
      />

      {isLoading && statusLabel && (
        <p
          className="text-sm text-center text-accent-600 font-mono animate-pulse"
          role="status"
          aria-live="polite"
        >
          {statusLabel}
        </p>
      )}

      {status === 'error' && errorMessage && (
        <div
          className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700"
          role="alert"
        >
          <p className="font-semibold mb-1">Conversion failed</p>
          <p>{errorMessage}</p>
        </div>
      )}

      {status === 'ready' && !showPrintGuide && (
        <div
          className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700"
          role="status"
        >
          <p className="font-semibold">Download started</p>
          <p>Your file has been generated and downloaded.</p>
        </div>
      )}

      <ConvertButton
        onClick={handleConvert}
        disabled={!file || isLoading}
        loading={isLoading}
        label={
          format === 'pdf'
            ? 'Convert to PDF'
            : format === 'html'
            ? 'Convert to HTML'
            : 'Extract Python'
        }
      />

      {showPrintGuide && <PrintGuide />}
    </div>
  );

  if (variant === 'bare') {
    return <div className="w-full">{inner}</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-ink-200 bg-white shadow-cell overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-ink-200 bg-ink-50">
        <span className="font-mono text-xs text-accent-600">In [1]:</span>
        <span
          className="font-mono text-xs text-ink-500 truncate max-w-[60%]"
          title={file?.name ?? 'notebook.ipynb'}
        >
          {file?.name ?? 'notebook.ipynb'}
        </span>
      </div>
      <div className="p-5 sm:p-6">{inner}</div>
    </div>
  );
}
