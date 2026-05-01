import { useLumaEvents } from '@/hooks/useLumaEvents'
import type { MeetupCard } from '@/lib/luma'
import SectionMarker from '@/components/virke/SectionMarker'

const statusLabel: Record<MeetupCard['status'], string> = {
  next: '· Next up',
  open: '· Open',
  waitlist: '· Waitlist',
  'sold-out': '· Sold out',
}

const dateFmt = (d: Date, tz: string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: tz,
  })
    .format(d)
    .replace(',', ' ·')

export default function Meetups() {
  const { data, isLoading, isError, error } = useLumaEvents({ limit: 6 })

  return (
    <section className="virke-section">
      <div className="virke-runhead">
        <span>05 · Meet us first</span>
        <span>Public Claude Community events · live from Luma</span>
      </div>

      <div className="virke-sec-head">
        <SectionMarker label="Meetups" index="05.00" />
        <div>
          <h2 className="virke-sec-title">
            Come meet us <em>before</em> you hire us.
          </h2>
          <p className="virke-sec-intro">
            Every operator on our roster runs a public Claude Community event in their city. Free
            to attend, tools-down, real codebases. The shortest path from "considering Virke" to
            "watched Virke work."
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {isLoading && <SkeletonRows count={4} />}

        {isError && (
          <div
            style={{
              padding: '40px 0',
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 17,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            <p style={{ margin: '0 0 12px' }}>
              We couldn't reach the Claude Community calendar just now.
            </p>
            <p style={{ margin: 0 }}>
              See the full schedule directly at{' '}
              <a
                href="https://lu.ma/claudecommunity"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                lu.ma/claudecommunity
              </a>
              .
            </p>
            <pre
              style={{
                marginTop: 12,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                color: 'var(--muted)',
              }}
            >
              {error instanceof Error ? error.message : String(error)}
            </pre>
          </div>
        )}

        {data?.length === 0 && !isLoading && !isError && (
          <div
            style={{
              padding: '40px 0',
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 17,
              color: 'var(--ink-2)',
            }}
          >
            No upcoming events on the calendar right now —{' '}
            <a
              href="https://lu.ma/claudecommunity"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              follow the calendar
            </a>{' '}
            to be notified when one is announced.
          </div>
        )}

        {data?.map((m) => (
          <article
            key={m.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 200px 140px',
              gap: 24,
              padding: '24px 0',
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
              {m.id.replace(/^evt-/, '').slice(0, 6).toUpperCase()}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  margin: '0 0 6px',
                  color: 'var(--ink)',
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 14,
                  lineHeight: 1.45,
                  color: 'var(--muted)',
                  margin: 0,
                }}
              >
                Hosted by Claude Community organisers. Free, hands-on, public.
              </p>
            </div>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-2)',
              }}
            >
              {dateFmt(m.startsAt, m.timezone)}
              <div style={{ color: 'var(--muted)', marginTop: 4 }}>
                {m.city}
                {m.country ? ` · ${m.country}` : ''}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: m.status === 'next' ? 'var(--paper)' : 'var(--muted)',
                  background: m.status === 'next' ? 'var(--accent)' : 'transparent',
                  padding: m.status === 'next' ? '3px 8px' : 0,
                }}
              >
                {statusLabel[m.status]}
              </span>
              <a
                href={m.rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: 'var(--ink)',
                  textDecoration: 'underline',
                }}
              >
                {m.status === 'sold-out' ? 'View →' : 'RSVP →'}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: 24,
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 11,
          letterSpacing: '0.06em',
          color: 'var(--muted)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>Source: Claude Community Events on Luma · refreshed every 5 min</span>
        <a
          href="https://lu.ma/claudecommunity"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--ink)', textDecoration: 'underline' }}
        >
          See all events →
        </a>
      </div>
    </section>
  )
}

function SkeletonRows({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 200px 140px',
            gap: 24,
            padding: '24px 0',
            borderBottom: '1px solid var(--rule)',
            alignItems: 'baseline',
          }}
        >
          <SkeletonBlock w={48} h={11} />
          <div>
            <SkeletonBlock w="60%" h={20} mb={10} />
            <SkeletonBlock w="40%" h={13} />
          </div>
          <div>
            <SkeletonBlock w={120} h={11} mb={6} />
            <SkeletonBlock w={80} h={11} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <SkeletonBlock w={60} h={11} />
            <SkeletonBlock w={50} h={11} />
          </div>
        </div>
      ))}
    </>
  )
}

function SkeletonBlock({
  w,
  h,
  mb = 0,
}: {
  w: number | string
  h: number
  mb?: number
}) {
  return (
    <div
      className="animate-breathe"
      style={{
        width: typeof w === 'number' ? `${w}px` : w,
        height: h,
        background: 'var(--rule)',
        marginBottom: mb,
      }}
    />
  )
}
