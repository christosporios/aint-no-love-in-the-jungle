"use client"

import Image from "next/image"
import { ChevronDown, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"

const PETITION_URL = "https://docs.google.com/document/d/1FVMdcWWMSrY9IvvHbNP4LRdvXNwhzYKDjrX-vnDKyAk/edit?tab=t.0"
const ARTICLE_URL = "https://www.takebackthecity.gr/p/startupper"

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/athens-jungle.png"
          alt="Athens jungle with scooters"
          fill
          className="object-cover object-top opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-800 opacity-90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-40 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Δεν Υπάρχει Αγάπη στη Ζούγκλα
        </h1>

        <h2 className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          Μια κοινότητα ανθρώπων που απαιτεί την προστασία του δημόσιου χώρου της Αθήνας από τα ενοικιαζόμενα πατίνια
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg shadow-lg"
            onClick={() => window.open(PETITION_URL, "_blank")}
          >
            Υπογράψτε το αίτημα
          </Button>

          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-green-800 font-bold text-lg shadow-lg"
            onClick={() => window.open(ARTICLE_URL, "_blank")}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Διαβάστε το άρθρο
          </Button>

          <ShareButton />
        </div>

        <div className="mt-8 text-sm text-white/80">
          <p>
            Στα μέσα:{" "}
            <a
              href="https://open.spotify.com/episode/7mLAiezcaOQ6ULqA0EbahV"
              className="text-yellow-300 hover:text-yellow-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              σε podcast
            </a>,{" "}
            <a
              href="https://www.skairadio.gr/istories-me-drakou"
              className="text-yellow-300 hover:text-yellow-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              στο ραδιόφωνο του ΣΚΑΙ
            </a>{" "}
            (25:00),{" "}
            <a
              href="https://www.megatv.com/etvshows/1938029/08-05-2025/"
              className="text-yellow-300 hover:text-yellow-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              στη τηλεόραση του mega
            </a>{" "}
            (54:40)
          </p>
        </div>

        <div className="mt-20 animate-bounce">
          <ChevronDown className="h-8 w-8 mx-auto text-yellow-300" />
        </div>
      </div>
    </header>
  )
}
