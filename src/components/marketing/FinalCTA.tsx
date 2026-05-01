import VMark from '@/components/virke/VMark'

export default function FinalCTA() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        padding: '120px 0',
        borderTop: '1px solid var(--ink)',
      }}
    >
      <div className="virke-doc">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 200px',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 10.5,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(236,233,224,0.6)',
            }}
          >
            § Close
            <br />
            08.00
          </div>

          <h2
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              margin: 0,
              maxWidth: '20ch',
            }}
          >
            If your team is still watching AI from the outside,{' '}
            <em style={{ fontWeight: 500 }}>let's fix that in a week.</em>
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 18,
            }}
          >
            <VMark variant="inverse" size={96} />
            <a
              href="#contact"
              style={{
                background: 'var(--accent)',
                color: 'var(--paper)',
                padding: '14px 22px',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              → Book a call
            </a>
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 10.5,
                letterSpacing: '0.04em',
                color: 'rgba(236,233,224,0.7)',
                textAlign: 'right',
              }}
            >
              30 min · No deck · Yes/no by Friday
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
