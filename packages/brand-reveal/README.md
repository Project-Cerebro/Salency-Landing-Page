# @salency/brand-reveal

Animated Salency brand wordmark: **Sales + Saliency → Salency**. Redundant letters collapse, survivors reflow.

Ships two components:
- `<BrandReveal />` — the wordmark animation alone
- `<BrandRevealSplash />` — full-viewport loading splash (logo + wordmark + mission + rail), gated so it plays on fresh tab / refresh and skips on SPA navigation

## Install

Copy this folder into your repo (it's not published yet), then point your
workspace or `package.json` at it:

```jsonc
// consuming repo package.json
{
  "dependencies": {
    "@salency/brand-reveal": "file:../brand-reveal"
  }
}
```

Or if using pnpm/bun/yarn workspaces, add `packages/*` to the workspace globs.

Peers: `react >=18`, `react-dom >=18`.

## Usage

### Just the wordmark

```tsx
import { BrandReveal } from '@salency/brand-reveal';
import '@salency/brand-reveal/styles.css';

export default function Hero() {
  return <BrandReveal />;
}
```

### Full loading splash

Drop this in your root layout. It self-manages: plays on fresh tab / refresh, skips on SPA nav, fades out after ~4.2s, unmounts itself.

```tsx
// app/layout.tsx (Next.js)
import { BrandRevealSplash } from '@salency/brand-reveal';
import '@salency/brand-reveal/loading-screen.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <BrandRevealSplash />
        {children}
      </body>
    </html>
  );
}
```

Copy `public/salency-mark.svg` from the landing-page repo alongside this package (or pass your own via `markSrc`).

### Logo lockup (manual composition)

If you want the logo + wordmark without the full splash chrome:

```tsx
<div className="brand-lockup">
  <img className="brand-lockup-mark" src="/salency-mark.svg" alt="" aria-hidden="true" />
  <BrandReveal />
</div>
```

The `.brand-lockup*` classes are defined in `loading-screen.css`.

## Props

### `<BrandReveal />`

| prop          | type      | default                         | notes |
| ------------- | --------- | ------------------------------- | ----- |
| `storageKey`  | `string`  | `salency_brand_reveal_played`   | sessionStorage key for replay gating. Override per surface to allow independent replays (e.g. splash + hero). |
| `ariaLabel`   | `string`  | `Salency`                       | Accessible name for the wordmark. |
| `forcePlay`   | `boolean` | `false`                         | Always animate on mount. For Storybook/design previews or when composed inside `<BrandRevealSplash />`. |

### `<BrandRevealSplash />`

| prop           | type                       | default                                                    | notes |
| -------------- | -------------------------- | ---------------------------------------------------------- | ----- |
| `storageKey`   | `string`                   | `salency_splash_shown`                                     | sessionStorage key for session-gate. |
| `durationMs`   | `number`                   | `4200`                                                     | How long the splash stays mounted before fading out. |
| `ariaLabel`    | `string`                   | `Salency`                                                  | Accessible label for the wordmark. |
| `markSrc`      | `string \| null`           | `/salency-mark.svg`                                        | SVG mark path. `null` = wordmark only, no logo. |
| `mission`      | `React.ReactNode \| null`  | `Every call becomes memory. / Every role inherits it.`     | Two-line blurb below the wordmark. `null` = hide. |
| `loadingLabel` | `string \| null`           | `Loading`                                                  | Uppercase label beneath the rail. `null` = hide. |

## Replay rule

| navigation                      | behavior |
| ------------------------------- | -------- |
| Fresh tab                       | replay   |
| Hard refresh                    | replay   |
| Soft refresh (F5 / Cmd+R)       | replay   |
| Client-side `<Link>` navigation | static (final state) |
| `prefers-reduced-motion: reduce`| snap to final state, no animation |

Detection uses `performance.getEntriesByType('navigation')[0].type === 'reload'` to distinguish refresh from client-side nav, plus a `sessionStorage` gate so SPA back-nav doesn't replay.

## Required CSS tokens

The stylesheet defines sensible defaults on `:root`. To theme the wordmark to your own palette, override any of these:

```css
:root {
  --copper:      #FE8531;
  --copper-a32:  rgba(254, 133, 49, .32);
  --ink-3:       #7C7A77;
  --ink-4:       #4E4C4A;
  --font-outfit: /* e.g. the CSS variable exposed by next/font/google Outfit */;
}
```

If `--font-outfit` is unset, the wordmark falls back to `'Outfit', sans-serif`, so load Outfit via Google Fonts, `next/font`, or a self-hosted `@font-face` — any weight 500 works.

## Framework notes

- **Next.js App Router:** the component declares `'use client'`. Drop it anywhere, including inside `app/loading.tsx`.
- **Vite / CRA / Remix:** remove the `'use client'` directive in the source if your bundler complains, or leave it — it's ignored as a string literal.
- **SSR:** safe. Effects gate on `typeof window !== 'undefined'`.

## Timing

```
0ms     Beat 1: per-letter entrance (Sales in copper, Saliency in ink-3)
1600ms  Beat 2: merge — 'Sales' trailing s + 'Salie' collapse, 'ncy' shifts to copper
2500ms  Beat 3: underline sweep + final glow
~4100ms underline fades out; static "Salency" in copper remains
```
