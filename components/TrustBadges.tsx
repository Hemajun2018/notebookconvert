const badges = [
  {
    icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5',
    title: 'No Upload',
    description: 'Files never leave your device',
  },
  {
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    title: '100% Private',
    description: 'Conversion runs in your browser',
  },
  {
    icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
    title: 'No LaTeX',
    description: 'No TeX installation required',
  },
  {
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    title: '100% Free',
    description: 'No account, no limits',
  },
];

export default function TrustBadges() {
  return (
    <section aria-label="Trust and privacy badges" className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {badges.map(badge => (
          <div
            key={badge.title}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
              </svg>
            </div>
            <p className="font-semibold text-gray-800 text-sm">{badge.title}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-tight">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
