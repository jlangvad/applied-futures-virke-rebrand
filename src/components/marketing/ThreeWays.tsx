import SectionMarker from '@/components/virke/SectionMarker'

interface Format {
  label: string
  duration: string
  title: string
  body: string
  bestFor: string
}

const formats: Format[] = [
  {
    label: '02.A',
    duration: '3 days · on-site',
    title: 'The intensive',
    body:
      'A focused workshop with one team and one real problem. Day one we frame and scope. Day two we build. Day three we ship something running and write the runbook so your team can keep going.',
    bestFor: 'A team that wants to learn AI by shipping their own thing — not by watching a deck.',
  },
  {
    label: '02.B',
    duration: '6–8 weeks · 2 days/wk',
    title: 'Embedded engagement',
    body:
      'We sit inside your team for a sprint or two — pair-programming, running design reviews, building tooling. We leave behind the code, the evals, and an ambassador trained to keep the practice alive.',
    bestFor: 'A function that needs working AI in production, not a proof of concept.',
  },
  {
    label: '02.C',
    duration: '½ day/wk · ongoing',
    title: 'Fractional AI leadership',
    body:
      'A senior practitioner on retainer. We sit in your weekly leadership review, unblock teams, set the technical bar, and make sure the AI work compounds across functions instead of fragmenting.',
    bestFor: 'A leader who needs an operator alongside, not another advisor on a slide.',
  },
]

export default function ThreeWays() {
  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>02 · Formats</span>
        <span>Three ways to work with us</span>
      </div>

      <div className="virke-sec-head">
        <SectionMarker label="Formats" index="02.00" />
        <div>
          <h2 className="virke-sec-title">
            Three ways to work with us. <em>Always hands-on.</em>
          </h2>
          <p className="virke-sec-intro">
            One team, one problem, three durations. Pick the shape that fits the urgency and the
            depth — we don't run two engagements the same way twice.
          </p>
        </div>
      </div>

      <div className="virke-grid3">
        {formats.map((f) => (
          <article
            key={f.label}
            style={{
              border: '1px solid var(--ink)',
              padding: 28,
              background: 'var(--paper)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 10.5,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                paddingBottom: 12,
                borderBottom: '1px solid var(--rule)',
              }}
            >
              <span>· Format {f.label}</span>
              <span>{f.duration}</span>
            </div>

            <h3
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 500,
                fontSize: 30,
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              {f.title}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h3>

            <p
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 16,
                lineHeight: 1.5,
                color: 'var(--ink-2)',
                margin: 0,
                flex: 1,
              }}
            >
              {f.body}
            </p>

            <div
              style={{
                marginTop: 8,
                paddingTop: 14,
                borderTop: '1px solid var(--rule)',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.04em',
                color: 'var(--muted)',
              }}
            >
              <span style={{ textTransform: 'uppercase', color: 'var(--accent)' }}>
                · Best for
              </span>
              <div
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: 'var(--ink)',
                  marginTop: 4,
                  letterSpacing: 0,
                }}
              >
                {f.bestFor}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
