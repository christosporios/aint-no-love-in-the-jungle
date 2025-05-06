import { Landmark, Link2, Users2 } from "lucide-react"
import type { ReactNode } from "react"

type TimelineEvent = {
  date: string
  content: ReactNode
  isPending?: boolean
  isMeeting?: boolean
  link?: string
}

type TimelineProps = {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative" role="region" aria-label="Χρονοδιάγραμμα εκδηλώσεων">
      {/* Vertical line - hidden from screen readers */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-500" aria-hidden="true"></div>

      <ul className="space-y-8 list-none pl-0">
        {events.map((event, index) => (
          <li key={index} className="relative pl-12">
            {/* Circle marker */}
            <div
              className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-4 ${event.isPending ? "bg-transparent border-yellow-500" : "bg-yellow-500 border-yellow-600"} flex items-center justify-center`}
              aria-hidden="true"
            >
              {event.isPending && (
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
              )}
              {event.isMeeting && (
                <Landmark className="h-4 w-4 text-black" />
              )}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-yellow-300 mb-1">
                {event.date} {event.isMeeting && (
                  <span aria-label="Δημοτικό Συμβούλιο">
                    (Δημοτικό Συμβούλιο)
                  </span>
                )}
              </h3>
              <div className="text-white">{event.content}</div>
            </div>
            {event.link && (
              <div className="mt-2">
                <a
                  href={event.link}
                  className="text-yellow-300 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Περισσότερες πληροφορίες στο ${new URL(event.link).hostname.replace('www.', '')}`}
                >
                  <Link2 className="h-4 w-4 text-yellow-300 mr-1" aria-hidden="true" />
                  <span>{new URL(event.link).hostname.replace('www.', '')}</span>
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
