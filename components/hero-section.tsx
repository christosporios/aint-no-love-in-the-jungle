"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"

const PETITION_URL = "https://docs.google.com/document/d/1FVMdcWWMSrY9IvvHbNP4LRdvXNwhzYKDjrX-vnDKyAk/edit?tab=t.0"

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

          <ShareButton />
        </div>

        <div className="mt-20 animate-bounce">
          <ChevronDown className="h-8 w-8 mx-auto text-yellow-300" />
        </div>
      </div>
    </header>
  )
}
