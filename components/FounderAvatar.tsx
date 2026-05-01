import Image from 'next/image';
import type { Founder } from '@/lib/founders';

interface FounderAvatarProps {
  founder: Founder;
  size: number;
}

export function FounderAvatar({ founder, size }: FounderAvatarProps) {
  return (
    <div className="photo">
      <Image
        src={founder.photoSrc}
        alt={`${founder.name}, ${founder.role}`}
        width={size * 2}
        height={size * 2}
        sizes={`${size}px`}
        loading="lazy"
      />
    </div>
  );
}
