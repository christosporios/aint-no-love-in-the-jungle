"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import SharePopup from "@/components/share-popup"

export default function ShareButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="border-yellow-500 text-yellow-300 hover:bg-yellow-500/20 shadow-lg"
        onClick={() => setIsPopupOpen(true)}
      >
        <Share2 className="mr-2 h-5 w-5" />
        Μοιραστείτε
      </Button>

      <SharePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Δεν Υπάρχει Αγάπη στη Ζούγκλα"
        subtitle="Μια κοινότητα ανθρώπων που απαιτεί την προστασία του δημόσιου χώρου της Αθήνας από τα ενοικιαζόμενα πατίνια"
      />
    </>
  )
}
