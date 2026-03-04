import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/images/logo-gold.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
        }}
      >
        {/* Outer gold border frame */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid rgba(212,175,55,0.25)',
          }}
        />
        {/* Inner subtle border */}
        <div
          style={{
            position: 'absolute',
            inset: '32px',
            border: '1px solid rgba(212,175,55,0.1)',
          }}
        />

        {/* Logo crest */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={150} height={126} alt="" />

        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              color: '#d4af37',
              fontSize: '52px',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            THE INDULGE PLACE
          </div>
          <div
            style={{
              color: 'rgba(245,245,220,0.55)',
              fontSize: '22px',
              fontWeight: '300',
              letterSpacing: '0.08em',
            }}
          >
            Where Luxury Meets Serenity
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '52px',
            color: 'rgba(212,175,55,0.4)',
            fontSize: '14px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          Fine Dining · Event Spaces · Ogudu, Lagos
        </div>
      </div>
    ),
    { ...size },
  );
}
