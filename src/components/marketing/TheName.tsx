import SectionMarker from '@/components/virke/SectionMarker'
import Wordmark from '@/components/virke/Wordmark'

export default function TheName() {
  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>A name — Virke · ˈviːɐ̯·kə · Danish</span>
        <span>The verb and the material, in one word</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 1fr',
          gap: 40,
          alignItems: 'end',
        }}
      >
        <SectionMarker label="The Name" index="01.50" />

        <div>
          <Wordmark tone="italic" size="xl" />
        </div>

        <div className="virke-prose" style={{ paddingBottom: 24 }}>
          <p style={{ margin: '0 0 16px' }}>
            Danish for <em>to work.</em> Also the noun for{' '}
            <em>the material you work with.</em> Verb and noun in one short word — the act of
            making, and the thing being made. A Copenhagen name for a Copenhagen studio.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginTop: 24,
              paddingTop: 18,
              borderTop: '1px dotted var(--ink)',
            }}
          >
            <Etym label="Origin" body="Old Norse virki" />
            <Etym label="Verb" body="to act, to function" />
            <Etym label="Noun" body="timber; work; craft" />
            <Etym label="Says" body="what we do + how" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Etym({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 10,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'Fraunces, Georgia, serif',
          fontStyle: 'italic',
          fontSize: 14,
          color: 'var(--ink)',
        }}
      >
        {body}
      </div>
    </div>
  )
}
