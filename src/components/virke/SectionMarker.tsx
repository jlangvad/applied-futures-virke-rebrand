interface SectionMarkerProps {
  label: string
  index: string
}

export default function SectionMarker({ label, index }: SectionMarkerProps) {
  return (
    <div
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 10.5,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        lineHeight: 1.5,
      }}
    >
      <div>§ {label}</div>
      <div>{index}</div>
    </div>
  )
}
