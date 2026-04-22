import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer>
      <Link href="/" className="brand">Salency</Link>
      <nav>
        <Link href="/why-salency" className="footer-link">Why Salency</Link>
        <Link href="/memory" className="footer-link">Memory</Link>
        <Link href="/pricing" className="footer-link">Pricing</Link>
        <Link href="/investors" className="footer-link">Investors</Link>
        <a
          href="mailto:founders@salency.ai?subject=Careers"
          className="footer-link"
        >
          Careers
        </a>
        <Link href="/privacy" className="footer-link">Privacy</Link>
        <Link href="/terms" className="footer-link">Terms</Link>
      </nav>
      <span>© 2026 Salency · Toronto</span>
    </footer>
  );
}
