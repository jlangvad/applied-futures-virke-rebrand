import Wordmark from './Wordmark'

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: '1px solid var(--ink)',
        padding: '56px',
        background: 'var(--paper-2)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr 1fr',
        gap: 40,
        alignItems: 'start',
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 11,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}
    >
      <Wordmark tone="italic" size="md" />

      <Column heading="Contact">
        <a href="mailto:hello@virke.co" style={linkStyle}>hello@virke.co</a>
        <span>Copenhagen · CPH</span>
      </Column>

      <Column heading="Practice">
        <a href="/workshops" style={linkStyle}>Workshops</a>
        <a href="/approach" style={linkStyle}>Approach</a>
        <a href="/work" style={linkStyle}>Work</a>
        <a href="/notes" style={linkStyle}>Notes</a>
      </Column>

      <Column heading="Company">
        <span>Virke ApS · CVR 45 812 003</span>
        <a href="/identity" style={linkStyle}>Identity</a>
        <span>Do · Reflect · Learn</span>
      </Column>
    </footer>
  )
}

const linkStyle = {
  color: 'var(--ink)',
  textDecoration: 'none',
  display: 'block',
}

function Column({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ color: 'var(--muted)', marginBottom: 6 }}>{heading}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, color: 'var(--ink)', textTransform: 'none', letterSpacing: 0, fontSize: 13 }}>
        {children}
      </div>
    </div>
  )
}
