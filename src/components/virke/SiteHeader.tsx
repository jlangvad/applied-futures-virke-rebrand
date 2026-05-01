import Wordmark from './Wordmark'

export default function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: '1px solid var(--ink)',
        padding: '20px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        background: 'var(--paper)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <Wordmark tone="italic" size="md" asLink href="/" />
        <span
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 10.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          Formerly Applied Futures
        </span>
      </div>

      <nav>
        <ul
          style={{
            display: 'flex',
            gap: 28,
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 12,
            letterSpacing: '0.04em',
          }}
        >
          {['/workshops', '/approach', '/work', '/notes', '/contact'].map((label) => (
            <li key={label}>
              <a
                href={label}
                style={{
                  color: 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#contact"
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '12px 18px',
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 12,
          letterSpacing: '0.06em',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Book discovery call →
      </a>
    </header>
  )
}
