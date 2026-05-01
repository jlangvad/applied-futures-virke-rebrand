import SectionMarker from '@/components/virke/SectionMarker'

export default function Hero() {
  return (
    <section className="virke-section" style={{ paddingTop: 80 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 40,
          alignItems: 'start',
          marginBottom: 56,
        }}
      >
        <SectionMarker label="Hero" index="01.00" />
        <h1
          style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(48px, 7vw, 88px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            margin: 0,
            color: 'var(--ink)',
          }}
        >
          Workshops that start with{' '}
          <mark
            style={{
              background: 'var(--highlight)',
              color: 'var(--ink)',
              padding: '0 0.08em',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone',
            }}
          >
            your real problem
          </mark>{' '}
          and end with working software.
        </h1>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 1fr',
          gap: 40,
          marginTop: 64,
        }}
      >
        <div />
        <div className="virke-prose">
          <p style={{ margin: 0 }}>
            We're a practitioner studio that runs intensive, company-specific workshops.
            Three days on-site with your team. We bring the method, the operators, the model.
            You bring the problem and the people. By Friday it's working — and your team knows
            how to keep going.
          </p>
        </div>
        <div style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 32 }}>
          <div
            className="virke-mono-meta"
            style={{ marginBottom: 14, color: 'var(--muted)' }}
          >
            Born from the community
          </div>
          <p
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 19,
              lineHeight: 1.4,
              color: 'var(--ink)',
              margin: '0 0 14px',
            }}
          >
            Virke is an extension of <u>Claude Code Meetups</u> — the global network of
            practitioners shipping with AI every week.
          </p>
          <p
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--ink-2)',
              margin: 0,
            }}
          >
            Every operator in the room has run meetups, built products, and shipped
            Claude-powered software inside real codebases. You're hiring the same people who
            teach it publicly — for a week, privately, inside yours.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 40,
          marginTop: 56,
        }}
      >
        <div />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="#contact" className="virke-cta solid">
            → Book a discovery call
          </a>
          <a href="#workshops" className="virke-cta outline">
            Browse workshop formats
          </a>
          <span className="virke-mono-meta" style={{ marginLeft: 8 }}>
            Typical first call: 30 min · No pitch deck
          </span>
        </div>
      </div>
    </section>
  )
}
