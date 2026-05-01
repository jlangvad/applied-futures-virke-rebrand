export default function DocBar() {
  const cells: Array<[string, string]> = [
    ['DOC · 01', ''],
    ['INDEX', ''],
    ['Practitioner studio for emerging tech', ''],
    ['Ext. of Claude Code Meetups', ''],
    ['Rev. 2026.04', ''],
    ['T+ 06:23', ''],
  ]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        borderBottom: '1px solid var(--ink)',
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 10.5,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}
    >
      {cells.map(([label], i) => (
        <div
          key={label}
          style={{
            padding: '10px 18px',
            borderRight: i < cells.length - 1 ? '1px solid var(--rule)' : 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
