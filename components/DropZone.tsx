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
      // Reset input so the same file can be re-selected
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
          'border-2 border-dashed rounded-xl p-10 cursor-pointer transition-all duration-200',
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : fileName
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50',
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-center">
              <p className="font-medium text-green-700 text-sm">{fileName}</p>
              <p className="text-xs text-gray-500 mt-1">Click to choose a different file</p>
            </div>
          </>
        ) : (
          <>
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div className="text-center">
              <p className="font-semibold text-gray-700">
                Drop your <code className="bg-gray-200 px-1 rounded text-sm">.ipynb</code> file here
              </p>
              <p className="text-sm text-gray-500 mt-1">or click to browse — max {MAX_SIZE_MB} MB</p>
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
