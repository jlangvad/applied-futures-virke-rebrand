import { CSSProperties } from 'react'

export type VMarkVariant =
  | 'monogram'
  | 'orbit'
  | 'orbit-labeled'
  | 'inverse'
  | 'favicon'
  | 'stamp'

interface VMarkProps {
  variant?: VMarkVariant
  size?: number | string
  spin?: boolean
  className?: string
  style?: CSSProperties
}

const ink = '#0A0A0A'
const paper = '#ECE9E0'
const rust = '#B84A2A'

export default function VMark({
  variant = 'monogram',
  size = 72,
  spin = false,
  className,
  style,
}: VMarkProps) {
  const dim = typeof size === 'number' ? `${size}px` : size
  const sharedStyle: CSSProperties = { width: dim, height: dim, display: 'block', ...style }

  if (variant === 'monogram') {
    return (
      <svg viewBox="0 0 80 80" className={className} style={sharedStyle}>
        <path
          d="M 18 18 L 40 62 L 62 18"
          fill="none"
          stroke={ink}
          strokeWidth={4}
          strokeLinecap="square"
        />
        <circle cx={70} cy={62} r={3} fill={rust} />
      </svg>
    )
  }

  if (variant === 'orbit') {
    return (
      <svg viewBox="0 0 100 100" className={className} style={sharedStyle}>
        <g className={spin ? 'animate-spin-loop' : undefined} style={{ transformOrigin: 'center' }}>
          <circle
            cx={50}
            cy={50}
            r={42}
            fill="none"
            stroke={ink}
            strokeWidth={1}
            strokeDasharray="1.4 5"
          />
        </g>
        <path
          d="M 30 28 L 50 72 L 70 28"
          fill="none"
          stroke={ink}
          strokeWidth={3.2}
          strokeLinecap="square"
        />
        <circle cx={74} cy={72} r={2.6} fill={rust} />
      </svg>
    )
  }

  if (variant === 'orbit-labeled') {
    return (
      <svg viewBox="0 0 400 400" className={className} style={sharedStyle}>
        <g className={spin ? 'animate-spin-loop' : undefined} style={{ transformOrigin: 'center' }}>
          <circle
            cx={200}
            cy={200}
            r={150}
            fill="none"
            stroke={ink}
            strokeWidth={2}
            strokeDasharray="2 10"
          />
          <text
            x={60}
            y={200}
            textAnchor="middle"
            fontFamily="IBM Plex Mono"
            fontSize={11}
            fill={ink}
            letterSpacing={3}
            transform="rotate(-90 60 200)"
          >
            DO
          </text>
          <text
            x={340}
            y={200}
            textAnchor="middle"
            fontFamily="IBM Plex Mono"
            fontSize={11}
            fill={ink}
            letterSpacing={3}
            transform="rotate(90 340 200)"
          >
            REFLECT
          </text>
          <text
            x={200}
            y={370}
            textAnchor="middle"
            fontFamily="IBM Plex Mono"
            fontSize={11}
            fill={ink}
            letterSpacing={3}
          >
            LEARN
          </text>
        </g>
        <path
          d="M 130 130 L 200 270 L 270 130"
          fill="none"
          stroke={ink}
          strokeWidth={12}
          strokeLinecap="square"
        />
        <circle cx={292} cy={270} r={8} fill={rust} />
      </svg>
    )
  }

  if (variant === 'inverse') {
    return (
      <svg viewBox="0 0 80 80" className={className} style={sharedStyle}>
        <path
          d="M 18 18 L 40 62 L 62 18"
          fill="none"
          stroke={paper}
          strokeWidth={4}
          strokeLinecap="square"
        />
        <circle cx={70} cy={62} r={3} fill={rust} />
      </svg>
    )
  }

  if (variant === 'favicon') {
    return (
      <svg viewBox="0 0 48 48" className={className} style={sharedStyle}>
        <rect width={48} height={48} fill={ink} />
        <path
          d="M 12 12 L 24 36 L 36 12"
          fill="none"
          stroke={paper}
          strokeWidth={3}
          strokeLinecap="square"
        />
        <circle cx={40} cy={36} r={2} fill={rust} />
      </svg>
    )
  }

  // stamp
  return (
    <svg viewBox="0 0 100 100" className={className} style={sharedStyle}>
      <circle cx={50} cy={50} r={44} fill="none" stroke={ink} strokeWidth={1.5} />
      <path
        d="M 32 30 L 50 70 L 68 30"
        fill="none"
        stroke={ink}
        strokeWidth={3}
        strokeLinecap="square"
      />
      <text
        x={50}
        y={92}
        textAnchor="middle"
        fontFamily="IBM Plex Mono"
        fontSize={6}
        fill={ink}
        letterSpacing={1.5}
      >
        · VIRKE · CPH ·
      </text>
      <circle cx={70} cy={70} r={2.4} fill={rust} />
    </svg>
  )
}
