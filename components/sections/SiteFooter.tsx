import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer>
      <span className="brand">Salency</span>
      <nav>
        <button type="button" className="footer-link">Product</button>
        <Link href="/pricing" className="footer-link">Pricing</Link>
        <button type="button" className="footer-link">Security</button>
        <Link href="/investors" className="footer-link">Investors</Link>
        <button type="button" className="footer-link">Careers</button>
      </nav>
      <span>© 2026 Salency · Toronto</span>
    </footer>
  );
}
