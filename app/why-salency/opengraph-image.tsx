import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Why Salency — what to do after the call recording';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/logo.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'radial-gradient(ellipse at top left, #1A171E 0%, #121015 60%)',
          color: '#E8E6E3',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          { }
          <img src={logoSrc} alt="" width={88} height={95} />
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#E8E6E3',
            }}
          >
            Salency
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E8925A',
            }}
          >
            Why Salency
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: 60,
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#E8E6E3',
              maxWidth: '1000px',
            }}
          >
            <div style={{ color: '#9B9A97' }}>
              Notetakers record your calls.
            </div>
            <div>Salency solves what happens after.</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: 24,
              color: '#9B9A97',
              letterSpacing: '0.02em',
              marginTop: '16px',
            }}
          >
            <div
              style={{
                width: 48,
                height: 2,
                background: '#E8925A',
              }}
            />
            www.salency.ai/why-salency
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
