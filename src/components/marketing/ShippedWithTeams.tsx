import SectionMarker from '@/components/virke/SectionMarker'

interface Case {
  id: string
  client: string
  result: string
  body: string
  visibility: 'public' | 'private'
}

const cases: Case[] = [
  {
    id: 'C.01',
    client: 'SimCorp · Applied AI Phase 1',
    result: 'Cut onboarding from 6 weeks to 5 days for new PMs.',
    body:
      'Eight workshops across the PM organisation, a shared evaluation harness, and one shipped internal tool that replaced the legacy onboarding playbook.',
    visibility: 'public',
  },
  {
    id: 'C.02',
    client: 'Fortune 500 · Internal tooling group',
    result: 'Replaced a $500k/yr SaaS with an internal Claude-built tool in three weeks.',
    body:
      'Embedded engagement with two engineers and one designer. The old vendor was sunset; the team owns and maintains the replacement themselves.',
    visibility: 'private',
  },
  {
    id: 'C.03',
    client: 'Mid-market Nordic SaaS · Search team',
    result: 'Trained the search team to ship their own evals — 2 releases since.',
    body:
      'Three days on-site, then a 4-week embedded sprint. We left, they kept shipping. The first eval suite is now version 11.',
    visibility: 'private',
  },
]

export default function ShippedWithTeams() {
  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>06 · Work</span>
        <span>What we've shipped, by name where we can</span>
      </div>

      <div className="virke-sec-head">
        <SectionMarker label="Work" index="06.00" />
        <div>
          <h2 className="virke-sec-title">
            What we've shipped <em>with</em> other teams.
          </h2>
          <p className="virke-sec-intro">
            Each engagement leaves a written, named result. Where the client lets us, we say
            who. Where they don't, we still say what.
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {cases.map((c) => (
          <article
            key={c.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 200px',
              gap: 32,
              padding: '32px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'baseline',
            }}
          >
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--muted)',
              }}
            >
              {c.id}
            </div>
            <div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10.5,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 8,
                }}
              >
                {c.client}
              </div>
              <h3
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontWeight: 500,
                  fontSize: 24,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  margin: '0 0 10px',
                  color: 'var(--ink)',
                }}
              >
                {c.result}
              </h3>
              <p
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: 'var(--ink-2)',
                  margin: 0,
                  maxWidth: '60ch',
                }}
              >
                {c.body}
              </p>
            </div>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 10.5,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: c.visibility === 'public' ? 'var(--accent)' : 'var(--muted)',
                textAlign: 'right',
              }}
            >
              {c.visibility === 'public' ? '· Public case study →' : '· Private — under NDA'}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
