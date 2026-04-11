const badges = [
  {
    name: 'Fazier',
    href: 'https://fazier.com/launches/notebookconvert.com',
    imgSrc: 'https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=neutral',
    alt: 'Featured on Fazier',
    width: 120,
  },
];

export default function FeaturedBadges() {
  return (
    <section aria-label="Featured on" className="py-8 border-t border-ink-200">
      <p className="text-xs font-mono text-ink-500 text-center mb-4 uppercase tracking-widest">
        Featured on
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {badges.map((badge) => (
          <a
            key={badge.name}
            href={badge.href}
            target="_blank"
            rel="noopener"
          >
            <img
              src={badge.imgSrc}
              width={badge.width}
              alt={badge.alt}
              style={{ display: 'block' }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
