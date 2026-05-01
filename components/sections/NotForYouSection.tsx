export function NotForYouSection() {
  return (
    <section className="notfor">
      <div className="notfor-head">
        <span className="eb">Who it&rsquo;s for</span>
        <h2>
          Salency fits a <em>specific shape</em> of sales motion.
        </h2>
      </div>
      <div className="notfor-grid">
        <div className="notfor-col">
          <span className="notfor-col-head">For you if</span>
          <ul className="notfor-list notfor-list--paired">
            <li>
              <div className="notfor-body">
                <strong>Your calls get recorded.</strong> Zoom, Meet, Teams.
                Whatever your reps already use.
              </div>
            </li>
            <li>
              <div className="notfor-body">
                <strong>Deals span multiple calls.</strong> Pain raised in
                call 1 should answer in call 5.
              </div>
            </li>
            <li>
              <div className="notfor-body">
                <strong>Accounts pass between people.</strong> AE to CSM,
                new rep on inherited book, expansion team taking over.
              </div>
            </li>
            <li>
              <div className="notfor-body">
                <strong>Your product has multiple features.</strong>{' '}
                Pain-product mapping needs a catalog with options.
              </div>
            </li>
          </ul>
        </div>
        <div className="notfor-col">
          <span className="notfor-col-head">Not for you if</span>
          <ul className="notfor-list notfor-list--paired">
            <li>
              <div className="notfor-body">
                <strong>You don&rsquo;t record calls.</strong> Transcripts are
                the input. No recording, no Salency.
              </div>
            </li>
            <li>
              <div className="notfor-body">
                <strong>Sales is one call, then signature.</strong> No
                handoff means no scar tissue to compound.
              </div>
            </li>
            <li>
              <div className="notfor-body">
                <strong>You&rsquo;re the only one selling.</strong>{' '}
                Institutional memory doesn&rsquo;t apply when one head holds
                it all.
              </div>
            </li>
            <li>
              <div className="notfor-body">
                <strong>Your product is a single feature.</strong> Nothing to
                map customer pain against.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p className="notfor-foot">
        Salency is the layer between the transcript and the rep who inherits
        the account.
      </p>
    </section>
  );
}
