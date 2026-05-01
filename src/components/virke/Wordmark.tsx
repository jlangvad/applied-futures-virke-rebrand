import { CSSProperties } from 'react'

export type WordmarkTone = 'italic' | 'block'
export type WordmarkTint = 'ink' | 'paper-on-ink' | 'paper-on-rust'
export type WordmarkSize = 'sm' | 'md' | 'lg' | 'xl'

interface WordmarkProps {
  tone?: WordmarkTone
  tint?: WordmarkTint
  size?: WordmarkSize
  asLink?: boolean
  href?: string
  className?: string
}

const sizeMap: Record<WordmarkTone, Record<WordmarkSize, string>> = {
  italic: {
    sm: '24px',
    md: '32px',
    lg: 'clamp(56px, 8vw, 112px)',
    xl: 'clamp(120px, 22vw, 360px)',
  },
  block: {
    sm: '22px',
    md: '36px',
    lg: 'clamp(56px, 10vw, 96px)',
    xl: 'clamp(120px, 16vw, 220px)',
  },
}

export default function Wordmark({
  tone = 'italic',
  tint = 'ink',
  size = 'md',
  asLink = false,
  href = '/',
  className,
}: WordmarkProps) {
  const fontSize = sizeMap[tone][size]
  const isItalic = tone === 'italic'

  const wordColor =
    tint === 'paper-on-ink' || tint === 'paper-on-rust' ? 'var(--paper)' : 'var(--ink)'
  const periodColor = tint === 'paper-on-rust' ? 'var(--paper)' : 'var(--accent)'

  const baseStyle: CSSProperties = isItalic
    ? {
        fontFamily: 'Fraunces, Georgia, serif',
        fontWeight: 500,
        fontStyle: 'italic',
        fontSize,
        lineHeight: size === 'xl' ? 0.82 : 0.95,
        letterSpacing: size === 'xl' ? '-0.04em' : '-0.025em',
        color: wordColor,
        fontVariationSettings: '"opsz" 144',
      }
    : {
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 900,
        fontSize,
        lineHeight: 0.85,
        letterSpacing: size === 'xl' ? '-0.06em' : '-0.055em',
        textTransform: 'uppercase',
        color: wordColor,
      }

  const text = isItalic ? 'Virke' : 'VIRKE'

  const inner = (
    <span style={baseStyle} className={className}>
      {text}
      <span style={{ color: periodColor, fontStyle: 'normal' }}>.</span>
    </span>
  )

  if (asLink) {
    return (
      <a href={href} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {inner}
      </a>
    )
  }
  return inner
}
