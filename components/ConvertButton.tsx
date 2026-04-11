'use client';

interface ConvertButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
}

export default function ConvertButton({
  onClick,
  disabled,
  loading,
  label = 'Convert',
}: ConvertButtonProps) {
  const isIdle = !disabled && !loading;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={[
        'w-full flex items-center justify-center gap-2',
        'px-6 py-3.5 rounded-xl font-semibold text-white text-base',
        'transition-colors duration-150',
        isIdle
          ? 'bg-accent-600 hover:bg-accent-700 shadow-sm'
          : 'bg-ink-200 text-ink-400 cursor-not-allowed',
      ].join(' ')}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin w-5 h-5 text-ink-400"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span>Converting...</span>
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
