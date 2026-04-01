'use client';

import { useState, useCallback } from 'react';
import DropZone from './DropZone';
import FormatSelector, { type ExportFormat } from './FormatSelector';
import ConvertButton from './ConvertButton';
import PrintGuide from './PrintGuide';

type Status = 'idle' | 'parsing' | 'rendering' | 'ready' | 'error';

interface ConverterProps {
  defaultFormat?: ExportFormat;
}

export default function Converter({ defaultFormat = 'pdf' }: ConverterProps) {
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
      // Read file
      const json = await file.text();

      // Parse notebook
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

      // Render HTML
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

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Drop zone */}
        <DropZone
          onFile={handleFile}
          fileName={file?.name}
          disabled={isLoading}
        />

        {/* Format selector */}
        <FormatSelector
          value={format}
          onChange={val => {
            setFormat(val);
            setShowPrintGuide(false);
            setStatus('idle');
          }}
          disabled={isLoading}
        />

        {/* Status message while processing */}
        {isLoading && statusLabel && (
          <p className="text-sm text-center text-blue-600 animate-pulse" role="status" aria-live="polite">
            {statusLabel}
          </p>
        )}

        {/* Error message */}
        {status === 'error' && errorMessage && (
          <div
            className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700"
            role="alert"
          >
            <p className="font-semibold mb-1">Conversion failed</p>
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Success message for HTML/Python */}
        {status === 'ready' && !showPrintGuide && (
          <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700" role="status">
            <p className="font-semibold">Download started!</p>
            <p>Your file has been generated and downloaded.</p>
          </div>
        )}

        {/* Convert button */}
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

        {/* Print guide for PDF */}
        {showPrintGuide && <PrintGuide />}
      </div>
    </div>
  );
}
