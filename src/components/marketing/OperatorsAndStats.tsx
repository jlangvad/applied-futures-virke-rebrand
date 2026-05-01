import SectionMarker from '@/components/virke/SectionMarker'

interface Stat {
  value: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { value: '24', label: 'Cities', sub: 'Claude Code Meetups in 24 cities, every month.' },
  { value: '3.4k', label: 'Practitioners', sub: 'In the active community across Europe and NA.' },
  { value: '48', label: 'Engagements', sub: 'Internal workshops shipped with named teams since 2024.' },
]

export default function OperatorsAndStats() {
  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>04 · Who's in the room</span>
        <span>The same people who run the meetup</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 1fr',
          gap: 40,
          alignItems: 'start',
          marginBottom: 64,
        }}
      >
        <SectionMarker label="Operators" index="04.00" />
        <h2 className="virke-sec-title" style={{ margin: 0 }}>
          The same operators running the meetups in your city — <em>working privately</em> inside
          your company.
        </h2>
        <aside
          style={{
            borderLeft: '3px solid var(--accent)',
            padding: '8px 0 8px 24px',
            fontFamily: 'Fraunces, Georgia, serif',
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1.45,
            color: 'var(--ink)',
          }}
        >
          “The people in the room running the workshop are the same operators we'd already been
          tracking from the meetup. There was no handoff to a junior team after the sale.”
          <div
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontStyle: 'normal',
              fontSize: 10.5,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: 12,
            }}
          >
            Engineering Director · SimCorp
          </div>
        </aside>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px repeat(3, 1fr)',
          gap: 40,
          alignItems: 'start',
          paddingTop: 40,
          borderTop: '1px solid var(--ink)',
        }}
      >
        <div />
        {stats.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 500,
                fontSize: 'clamp(64px, 7vw, 112px)',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                fontVariationSettings: '"opsz" 144',
              }}
            >
              {s.value}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: 14,
              }}
            >
              · {s.label}
            </div>
            <div
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 14,
                lineHeight: 1.5,
                color: 'var(--ink-2)',
                marginTop: 6,
                maxWidth: '32ch',
              }}
            >
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
