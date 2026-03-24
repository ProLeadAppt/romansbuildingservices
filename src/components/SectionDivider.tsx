interface SectionDividerProps {
  from?: string;
  to?: string;
  variant?: 'angle-down' | 'angle-up' | 'wave';
  className?: string;
}

export const SectionDivider = ({
  from = '#F5F5F5',
  to = '#0A2E76',
  variant = 'angle-down',
  className = '',
}: SectionDividerProps) => {
  if (variant === 'angle-down') {
    return (
      <div className={`relative w-full overflow-hidden -mt-1 ${className}`} style={{ background: from }}>
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,80 L1440,80 L0,80 Z" fill={to} />
        </svg>
      </div>
    );
  }

  if (variant === 'angle-up') {
    return (
      <div className={`relative w-full overflow-hidden -mb-1 ${className}`} style={{ background: from }}>
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          <path d="M0,80 L1440,0 L1440,80 L0,80 Z" fill={to} />
        </svg>
      </div>
    );
  }

  // wave
  return (
    <div className={`relative w-full overflow-hidden -mt-1 ${className}`} style={{ background: from }}>
      <svg
        viewBox="0 0 1440 60"
        className="w-full h-10 md:h-14 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z"
          fill={to}
        />
      </svg>
    </div>
  );
};
