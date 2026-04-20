interface Props {
  eyebrow: string;
  chapter?: string;
  className?: string;
}

export function RegisterDivider({ eyebrow, chapter = '02', className = '' }: Props) {
  const parts = eyebrow.split(/(\s+\S+$)/).filter(Boolean);
  const leading = parts.length > 1 ? parts[0] : eyebrow;
  const trailing = parts.length > 1 ? parts[1].trim() : '';

  return (
    <div
      className={`relative w-full h-40 md:h-[220px] bg-[#0C0A10] flex items-center justify-center overflow-hidden ${className}`}
      role="separator"
      aria-label={eyebrow}
    >
      <div
        className="absolute top-0 left-0 right-0 h-3 md:h-1 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #121015, #0C0A10)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            'radial-gradient(ellipse 300px 80px at 50% 50%, rgba(232,146,90,0.08), transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse 600px 120px at 50% 50%, rgba(232,146,90,0.08), transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute left-0 right-0 top-1/2 h-px"
        style={{ background: 'rgba(232, 146, 90, 0.22)' }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center gap-3 bg-[#0C0A10] px-6">
        <span
          className="font-mono text-[11px] tracking-[0.3em] uppercase"
          style={{ color: '#5E5D5B' }}
          aria-hidden
        >
          —— {chapter} ——
        </span>
        <h2
          className="text-[28px] md:text-[40px] leading-none text-[#E8E6E3] m-0"
          style={{
            fontFamily: 'var(--font-instrument-serif), Georgia, serif',
            letterSpacing: '-0.01em',
            fontWeight: 400,
          }}
        >
          {leading}{' '}
          {trailing && (
            <em className="italic" style={{ color: '#F0A876' }}>
              {trailing}
            </em>
          )}
        </h2>
      </div>
    </div>
  );
}
