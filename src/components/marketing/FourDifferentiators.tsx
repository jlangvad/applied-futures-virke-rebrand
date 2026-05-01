import SectionMarker from '@/components/virke/SectionMarker'

interface Diff {
  num: string
  title: string
  body: string
}

const diffs: Diff[] = [
  {
    num: '01',
    title: 'We ship before we leave.',
    body:
      'Every engagement ends with something running in production — not a slide deck, not a roadmap. The artefact is the deliverable.',
  },
  {
    num: '02',
    title: 'Operators, not advisors.',
    body:
      'Everyone in the room has shipped Claude-powered software inside a real codebase this quarter. We teach what we use, not what we read about.',
  },
  {
    num: '03',
    title: 'We leave a runbook.',
    body:
      'You get the code, the evals, and a written method your team can re-run without us. The point is capability, not dependency.',
  },
  {
    num: '04',
    title: 'We say no to the wrong work.',
    body:
      'No "AI strategy decks." No 90-day discovery phases. No long-term retainers that quietly fund themselves. If the work isn\'t a fit, we say so on the discovery call.',
  },
]

export default function FourDifferentiators() {
  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>03 · How we're different</span>
        <span>Four moves we don't compromise on</span>
      </div>

      <div className="virke-sec-head">
        <SectionMarker label="Different" index="03.00" />
        <div>
          <h2 className="virke-sec-title">
            Four things that make us different from the <em>usual consulting motion.</em>
          </h2>
        </div>
      </div>

      <div className="virke-grid2" style={{ rowGap: 56 }}>
        {diffs.map((d) => (
          <div key={d.num} style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                minWidth: 28,
              }}
            >
              {d.num}
            </div>
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontWeight: 500,
                  fontSize: 26,
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                  margin: '0 0 12px',
                  color: 'var(--ink)',
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: 'var(--ink-2)',
                  margin: 0,
                  maxWidth: '52ch',
                }}
              >
                {d.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
