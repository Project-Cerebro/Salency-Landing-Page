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
        <div className="coming-soon-meta">
          <span>
            <span className="dot">●</span> Early access · Q2 2026
          </span>
          <span>
            <span className="dot">●</span> Private preview on request
          </span>
        </div>
      </div>
    </section>
  );
}
