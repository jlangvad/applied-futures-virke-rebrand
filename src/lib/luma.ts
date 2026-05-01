/**
 * Luma calendar client — pulls public events from a calendar by API ID.
 *
 * In dev, requests go to `/api/luma/*` which Vite proxies to `api.lu.ma/*`
 * with the required `Origin: https://luma.com` header (Luma's CORS is locked
 * to that origin). In production, point `VITE_LUMA_PROXY_URL` at a server-side
 * proxy — see `supabase/functions/luma-events/` for a ready-to-deploy version.
 */

const PROXY_BASE = import.meta.env.VITE_LUMA_PROXY_URL ?? '/api/luma'
export const CLAUDE_COMMUNITY_CALENDAR_ID =
  import.meta.env.VITE_LUMA_CALENDAR_ID ?? 'cal-TOpA5LAFfuDeFpu'

export interface LumaEvent {
  api_id: string
  name: string
  url: string // slug only — full URL is https://lu.ma/{url}
  start_at: string // ISO 8601
  end_at: string
  timezone: string
  cover_url: string | null
  location_type: 'offline' | 'online' | 'hybrid'
  geo_address_info?: {
    city?: string
    country?: string
    country_code?: string
    region?: string
  } | null
}

export interface LumaTicketInfo {
  is_free: boolean
  is_sold_out: boolean
  spots_remaining: number | null
  is_near_capacity: boolean
  require_approval: boolean
}

export interface LumaCalendarEntry {
  api_id: string
  event: LumaEvent
  start_at: string
  ticket_info: LumaTicketInfo
  waitlist_active: boolean
  featured_city?: { name: string; slug: string } | null
  hosts?: Array<{ name: string; api_id: string }>
}

interface LumaCalendarResponse {
  entries: LumaCalendarEntry[]
  has_more: boolean
  next_cursor: string | null
}

interface FetchOptions {
  calendarId?: string
  limit?: number
  signal?: AbortSignal
}

export async function fetchUpcomingEvents({
  calendarId = CLAUDE_COMMUNITY_CALENDAR_ID,
  limit = 8,
  signal,
}: FetchOptions = {}): Promise<LumaCalendarEntry[]> {
  const params = new URLSearchParams({
    calendar_api_id: calendarId,
    period: 'future',
    pagination_limit: String(limit),
  })

  const url = `${PROXY_BASE}/calendar/get-items?${params}`
  const res = await fetch(url, { signal, headers: { Accept: 'application/json' } })
  if (!res.ok) {
    throw new Error(`Luma API ${res.status}: ${res.statusText}`)
  }
  const data: LumaCalendarResponse = await res.json()
  return data.entries
}

/**
 * UI-friendly shape derived from a Luma calendar entry.
 * The marketing Meetups card consumes this — not the raw API shape.
 */
export interface MeetupCard {
  id: string
  title: string
  city: string
  country: string | null
  /** ISO start time, in the event's local timezone for display. */
  startsAt: Date
  timezone: string
  rsvpUrl: string
  status: 'next' | 'open' | 'waitlist' | 'sold-out'
}

/**
 * Strip the city prefix from event titles. Luma convention is
 * "City | Event Name" — e.g. "Stockholm | Claude Code Meetup #4".
 * We render the city separately, so the prefix is duplicated noise.
 */
function stripCityPrefix(name: string, city: string | undefined): string {
  if (!city) return name
  const lowered = name.toLowerCase()
  const cityLower = city.toLowerCase()
  if (lowered.startsWith(`${cityLower} | `)) return name.slice(city.length + 3)
  if (lowered.startsWith(`${cityLower}: `)) return name.slice(city.length + 2)
  if (lowered.startsWith(`${cityLower} - `)) return name.slice(city.length + 3)
  return name
}

export function toMeetupCards(entries: LumaCalendarEntry[]): MeetupCard[] {
  return entries.map((entry, i) => {
    const e = entry.event
    const city =
      e.geo_address_info?.city ??
      entry.featured_city?.name ??
      (e.location_type === 'online' ? 'Online' : 'TBA')
    const country = e.geo_address_info?.country ?? null

    let status: MeetupCard['status']
    if (entry.ticket_info.is_sold_out && entry.waitlist_active) status = 'waitlist'
    else if (entry.ticket_info.is_sold_out) status = 'sold-out'
    else if (i === 0) status = 'next'
    else status = 'open'

    return {
      id: e.api_id,
      title: stripCityPrefix(e.name, city),
      city,
      country,
      startsAt: new Date(e.start_at),
      timezone: e.timezone,
      rsvpUrl: `https://lu.ma/${e.url}`,
      status,
    }
  })
}
