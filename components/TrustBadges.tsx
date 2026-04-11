const chips = [
  'Files stay in your browser',
  'No LaTeX installation',
  'No signup · No limits',
];

export default function TrustBadges() {
  return (
    <section aria-label="Trust and privacy signals" className="py-6">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-ink-500">
        {chips.map(chip => (
          <li key={chip} className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 bg-accent-500 rounded-full"
              aria-hidden="true"
            />
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}
