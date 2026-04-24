import { BrandReveal } from '@/components/BrandReveal';

export default function Loading() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-inner">
        <BrandReveal />
        <p className="loading-mission">
          Every call becomes memory.
          <br />
          Every role inherits it.
        </p>
        <div className="loading-rail" aria-hidden="true" />
        <span className="loading-label">Loading</span>
      </div>
    </div>
  );
}
