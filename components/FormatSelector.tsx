'use client';

export type ExportFormat = 'pdf' | 'html' | 'python';

interface FormatOption {
  value: ExportFormat;
  label: string;
  description: string;
  icon: string;
}

const formats: FormatOption[] = [
  {
    value: 'pdf',
    label: 'PDF',
    description: 'Print-ready via browser',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    value: 'html',
    label: 'HTML',
    description: 'Standalone HTML file',
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  },
  {
    value: 'python',
    label: 'Python (.py)',
    description: 'Code cells only',
    icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
  },
];

interface FormatSelectorProps {
  value: ExportFormat;
  onChange: (format: ExportFormat) => void;
  disabled?: boolean;
}

export default function FormatSelector({ value, onChange, disabled }: FormatSelectorProps) {
  return (
    <fieldset disabled={disabled} className="w-full">
      <legend className="text-sm font-medium text-gray-700 mb-2">Export format</legend>
      <div className="grid grid-cols-3 gap-3" role="radiogroup">
        {formats.map(fmt => {
          const isSelected = value === fmt.value;
          return (
            <label
              key={fmt.value}
              className={[
                'relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 select-none',
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50',
                disabled ? 'opacity-60 cursor-not-allowed' : '',
              ].join(' ')}
            >
              <input
                type="radio"
                name="export-format"
                value={fmt.value}
                checked={isSelected}
                onChange={() => onChange(fmt.value)}
                className="sr-only"
                aria-label={`Export as ${fmt.label}`}
              />
              <svg
                className={`w-6 h-6 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={fmt.icon} />
              </svg>
              <div className="text-center">
                <p className={`font-semibold text-sm ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                  {fmt.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">{fmt.description}</p>
              </div>
              {isSelected && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              )}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
