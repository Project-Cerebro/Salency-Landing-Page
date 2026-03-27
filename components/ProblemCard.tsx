import { SpotlightCard } from './SpotlightCard';

interface ProblemCardProps {
  heading: string;
  description: string;
  quote: string;
  author: string;
}

export function ProblemCard({ heading, description, quote, author }: ProblemCardProps) {
  return (
    <SpotlightCard className="bg-card p-6 rounded-xl border border-white/10 hover:border-accent-warm/50 transition-colors h-full">
      <h3 className="text-xl font-bold mb-3 text-white">{heading}</h3>
      <p className="text-gray-300 mb-6 font-light leading-relaxed">{description}</p>

      <div className="bg-white/5 p-4 rounded-lg italic text-gray-400 text-sm border-l-2 border-accent-warm/30">
        "{quote}"
        <div className="mt-2 text-xs font-semibold not-italic text-accent-warm/80">— {author}</div>
      </div>
    </SpotlightCard>
  );
}
