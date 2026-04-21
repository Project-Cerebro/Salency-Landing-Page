type Variant = 'product' | 'investor';

interface MarketingHeaderProps {
  variant?: Variant;
}

export function MarketingHeader({ variant = 'product' }: MarketingHeaderProps) {
  if (variant === 'investor') {
    return (
      <header className="inv-header">
        <div className="nav">
          <a className="brand" href="/">
            <img src="/salency-mark.png" alt="" />
            <span className="name">Salency</span>
          </a>
          <nav className="links">
            <a href="/">Product</a>
            <a href="#platform">Platform</a>
            <a href="#team">Team</a>
            <a href="#thesis">Thesis</a>
          </nav>
          <div className="nav-cta">
            <a href="mailto:howard@salency.com" className="sign">
              Contact Howard
            </a>
            <a href="/" className="btn btn-ghost">
              ← Back to product
            </a>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="nav">
        <a className="brand" href="/">
          <img src="/salency-mark.png" alt="" />
          <span className="name">Salency</span>
        </a>
        <nav className="links">
          <a href="#how-it-works">How it works</a>
          <a href="#">
            Memory <span className="new">New</span>
          </a>
          <a href="#">vs AI notetakers</a>
          <a href="/investor">Investors</a>
          <a href="#">Pricing</a>
        </nav>
        <div className="nav-cta">
          <a href="#" className="sign">
            Sign in
          </a>
          <button className="btn btn-primary">Request a pilot →</button>
        </div>
      </div>
    </header>
  );
}
