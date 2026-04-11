'use client';

import { useState, useRef, useCallback } from 'react';

interface DropZoneProps {
  onFile: (file: File) => void;
  fileName?: string;
  disabled?: boolean;
}

const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export default function DropZone({ onFile, fileName, disabled }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      setError(null);
      if (!file.name.endsWith('.ipynb')) {
        setError('Please upload a Jupyter Notebook (.ipynb) file.');
        return;
      }
      if (file.size > MAX_SIZE_BYTES) {
        setError(`File is too large. Maximum size is ${MAX_SIZE_MB} MB.`);
        return;
      }
      onFile(file);
    },
    [onFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      e.target.value = '';
    },
    [handleFile]
  );

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        aria-label="Drop your .ipynb file here or click to browse"
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={e => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) inputRef.current?.click();
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={[
          'relative flex flex-col items-center justify-center gap-3',
          'border-2 border-dashed rounded-xl p-8 sm:p-10 cursor-pointer transition-all duration-200',
          isDragging
            ? 'border-accent-500 bg-accent-50'
            : fileName
            ? 'border-green-400 bg-green-50'
            : 'border-ink-300 bg-ink-50 hover:border-accent-500 hover:bg-accent-50',
          disabled ? 'opacity-60 cursor-not-allowed' : '',
        ].join(' ')}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".ipynb,application/json"
          className="hidden"
          onChange={handleChange}
          disabled={disabled}
          aria-hidden="true"
        />

        {fileName ? (
          <>
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-center">
              <p className="font-mono font-medium text-green-700 text-sm truncate max-w-[240px] sm:max-w-[320px]">
                {fileName}
              </p>
              <p className="text-xs text-ink-500 mt-1">Click to choose a different file</p>
            </div>
          </>
        ) : (
          <>
            {/* .ipynb file icon — document with mono label */}
            <div className="flex flex-col items-center gap-0.5">
              <svg
                className="w-12 h-12 text-ink-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span className="font-mono text-[10px] text-ink-500 tracking-tight">.ipynb</span>
            </div>
            <div className="text-center">
              <p className="font-semibold text-ink-900 text-sm sm:text-base">
                Drop your{' '}
                <code className="font-mono bg-ink-100 border border-ink-200 px-1.5 py-0.5 rounded text-ink-900 text-xs">
                  .ipynb
                </code>{' '}
                file here
              </p>
              <p className="text-xs text-ink-500 mt-1.5">
                or click to browse — max {MAX_SIZE_MB} MB · parsed locally in your browser
              </p>
            </div>
          </>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
