type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ComingSoon({ eyebrow, title, description }: Props) {
  return (
    <section className="coming-soon">
      <div className="coming-soon-inner">
        <span className="eb">{eyebrow}</span>
        <h1>
          {title} <em>coming soon.</em>
        </h1>
        <p>{description}</p>
        <div className="coming-soon-meta hero-meta">
          <span className="hero-meta-item">Early access · Q2 2026</span>
          <span className="hero-meta-item">Private preview on request</span>
        </div>
      </div>
    </section>
  );
}
