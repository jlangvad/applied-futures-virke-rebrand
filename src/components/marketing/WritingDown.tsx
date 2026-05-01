import SectionMarker from '@/components/virke/SectionMarker'

interface Note {
  id: string
  title: string
  date: string
  read: string
}

const sideNotes: Note[] = [
  { id: 'N.05', title: 'The runbook is the deliverable.', date: 'Apr 2026', read: '6 min' },
  { id: 'N.04', title: 'Why we don\'t do "AI strategy decks."', date: 'Apr 2026', read: '4 min' },
  { id: 'N.03', title: 'How to measure a workshop after the fact.', date: 'Mar 2026', read: '8 min' },
  { id: 'N.02', title: 'Evaluating your evals.', date: 'Mar 2026', read: '11 min' },
  { id: 'N.01', title: 'The first ten minutes of every engagement.', date: 'Feb 2026', read: '5 min' },
]

export default function WritingDown() {
  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>07 · Field notes</span>
        <span>What we're writing down between engagements</span>
      </div>

      <div className="virke-sec-head">
        <SectionMarker label="Notes" index="07.00" />
        <div>
          <h2 className="virke-sec-title">
            What we're writing down <em>between</em> engagements.
          </h2>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 1fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        <div />

        <article
          style={{
            background: 'var(--accent)',
            color: 'var(--paper)',
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            minHeight: 320,
          }}
        >
          <div
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 10.5,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(236,233,224,0.8)',
            }}
          >
            · Featured · N.06 · Apr 2026
          </div>

          <h3
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: 'clamp(36px, 4vw, 56px)',
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            The narrow problem principle.
          </h3>

          <p
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 17,
              lineHeight: 1.45,
              color: 'rgba(236,233,224,0.92)',
              margin: 0,
              flex: 1,
            }}
          >
            The most common reason an AI engagement stalls is not the model — it's the scope.
            Here's the rule we use to refuse the broad ones and run the narrow ones to ship.
          </p>

          <a
            href="#notes"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--paper)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--paper)',
              alignSelf: 'flex-start',
              paddingBottom: 4,
            }}
          >
            Read the note · 7 min →
          </a>
        </article>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid var(--ink)',
          }}
        >
          {sideNotes.map((n) => (
            <li
              key={n.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: 16,
                padding: '18px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: 'var(--muted)',
                }}
              >
                {n.id}
              </span>
              <a
                href="#notes"
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 17,
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                {n.title}
              </a>
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10.5,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {n.date} · {n.read}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
