import Link from 'next/link';

export function TeamStripSection() {
  return (
    <section className="team-strip">
      <div className="team-strip-head">
        <span className="eb">Who&rsquo;s building this</span>
        <h2>
          Three people, <em>four months,</em> V1 shipped.
        </h2>
      </div>
      <div className="team-strip-rows">
        <div className="team-strip-row">
          <span className="ts-name">Howard Tam</span>
          <span className="ts-role">Co-founder &amp; CEO</span>
          <p className="ts-bet">
            Five founding-AE / BD seats in four years. Ran the
            HubSpot&rarr;Monday CRM migration at Sequence. Knows what flat
            fields can&rsquo;t hold.
          </p>
        </div>
        <div className="team-strip-row">
          <span className="ts-name">Nikki Ip</span>
          <span className="ts-role">Co-founder &amp; COO</span>
          <p className="ts-bet">
            Runs revenue analytics and operational strategy at Adaptavist
            Group. Knows what sales ops actually trusts.
          </p>
        </div>
        <div className="team-strip-row">
          <span className="ts-name">Babajide Okusanya</span>
          <span className="ts-role">Technical Lead</span>
          <p className="ts-bet">
            Scaled MakersValley from 0 to $2M ARR (6.5y, NYC). Has shipped
            provenance-tracked AI context systems &mdash; the exact technical
            class Salency runs on.
          </p>
        </div>
      </div>
      <p className="team-strip-foot">
        Full bios on{' '}
        <Link href="/investors" className="team-strip-link">
          /investors &rarr;
        </Link>
      </p>
    </section>
  );
}
