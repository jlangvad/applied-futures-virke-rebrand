import { useQuery } from '@tanstack/react-query'
import { fetchUpcomingEvents, toMeetupCards } from '@/lib/luma'

interface UseLumaEventsOptions {
  calendarId?: string
  limit?: number
}

/**
 * Fetches upcoming events from a Luma calendar and returns them as
 * UI-ready MeetupCard objects, ordered by start time.
 */
export function useLumaEvents({ calendarId, limit = 8 }: UseLumaEventsOptions = {}) {
  return useQuery({
    queryKey: ['luma', 'events', calendarId ?? 'default', limit],
    queryFn: async ({ signal }) => {
      const entries = await fetchUpcomingEvents({ calendarId, limit, signal })
      return toMeetupCards(entries)
    },
    staleTime: 5 * 60 * 1000, // 5 min — Luma calendar is relatively static
    refetchOnWindowFocus: false,
  })
}
