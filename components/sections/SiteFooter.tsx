import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer>
      <Link href="/" className="brand">Salency</Link>
      <nav>
        <Link href="/why-salency" className="footer-link">Why Salency</Link>
        <Link href="/memory" className="footer-link">Memory</Link>
        <Link href="/our-story" className="footer-link">Our story</Link>
        <Link href="/blog" className="footer-link">Blog</Link>
        <Link href="/changelog" className="footer-link">Changelog</Link>
        <Link href="/pricing" className="footer-link">Pricing</Link>
        <Link href="/investors" className="footer-link">Investors</Link>
        <Link href="/privacy" className="footer-link">Privacy</Link>
        <Link href="/terms" className="footer-link">Terms</Link>
      </nav>
      <span><span className="num">© 2026</span> Salency · Toronto</span>
    </footer>
  );
}
