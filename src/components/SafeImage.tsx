import { useState } from 'react';
import { Film } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161B23] via-[#1D2430] to-[#0E1116] p-6 text-center ${className}`}
      >
        <Film className="mb-3 h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
        <span className="font-display text-sm font-semibold text-[#F8F7F4]/90">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
