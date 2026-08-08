import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'Sultan Global Health Care'
  const desc  = searchParams.get('desc')  || 'Trusted Medical Tourism Concierge for U.S. Patients — India & Turkey'
  const cat   = searchParams.get('cat')   || ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0c1a35 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(71,147,243,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(71,147,243,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #4793F3, #60a5fa, #93c5fd)',
          }}
        />

        {/* Bottom accent glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(71,147,243,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(71,147,243,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '56px 72px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Top: Logo + category */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #4793F3, #2563eb)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  color: 'white',
                  fontWeight: '800',
                  boxShadow: '0 4px 20px rgba(71,147,243,0.4)',
                }}
              >
                S
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.3px', lineHeight: 1 }}>
                  Sultan GHC
                </span>
                <span style={{ color: 'rgba(148,163,184,1)', fontSize: '12px', marginTop: '3px', letterSpacing: '0.5px' }}>
                  MEDICAL TOURISM CONCIERGE
                </span>
              </div>
            </div>

            {/* Category badge */}
            {cat && (
              <div
                style={{
                  background: 'rgba(71,147,243,0.15)',
                  border: '1px solid rgba(71,147,243,0.3)',
                  borderRadius: '100px',
                  padding: '8px 18px',
                  color: '#93c5fd',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.3px',
                }}
              >
                {cat}
              </div>
            )}
          </div>

          {/* Middle: Title + description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '880px' }}>
            <div
              style={{
                width: '48px',
                height: '3px',
                background: 'linear-gradient(90deg, #4793F3, #60a5fa)',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                color: 'white',
                fontSize: title.length > 50 ? '42px' : '52px',
                fontWeight: '700',
                lineHeight: '1.15',
                letterSpacing: '-1px',
              }}
            >
              {title}
            </div>
            {desc && (
              <div
                style={{
                  color: 'rgba(148,163,184,1)',
                  fontSize: '20px',
                  lineHeight: '1.5',
                  maxWidth: '820px',
                }}
              >
                {desc.length > 120 ? desc.slice(0, 120) + '…' : desc}
              </div>
            )}
          </div>

          {/* Bottom: Trust signals + URL */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Trust pills */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {['JCI-Accredited Hospitals', 'U.S.-Based Concierge', '60–80% Cost Savings'].map((text) => (
                <div
                  key={text}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '7px 14px',
                    color: 'rgba(203,213,225,1)',
                    fontSize: '12px',
                    fontWeight: '500',
                  }}
                >
                  ✓ {text}
                </div>
              ))}
            </div>

            {/* URL */}
            <div
              style={{
                color: 'rgba(71,147,243,0.8)',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '0.5px',
              }}
            >
              sultanghc.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
