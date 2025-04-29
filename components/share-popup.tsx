"use client"

import { useState, useRef, useEffect } from "react"
import { Copy, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

type SharePopupProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle: string
}

export default function SharePopup({ isOpen, onClose, title, subtitle }: SharePopupProps) {
  const [copySuccess, setCopySuccess] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Handle ESC key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  const generateIGStory = () => {
    // Direct redirect to the static image instead of calling the API
    window.open("/ig-story.png", "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div ref={popupRef} className="bg-green-800 rounded-xl p-6 max-w-md w-full shadow-xl border border-yellow-500/30">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-yellow-300">Μοιραστείτε</h3>
          <button onClick={onClose} className="text-green-300 hover:text-yellow-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={generateIGStory}
            className="w-full flex items-center justify-between p-4 bg-green-700 hover:bg-green-600 rounded-lg text-left"
          >
            <div>
              <p className="font-medium text-yellow-200">Δημιουργία Instagram Story</p>
              <p className="text-sm text-green-200">Δημιουργήστε μια εικόνα για το Instagram Story σας</p>
            </div>
            <Instagram className="h-5 w-5 text-yellow-300" />
          </button>

          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-between p-4 bg-green-700 hover:bg-green-600 rounded-lg text-left"
          >
            <div>
              <p className="font-medium text-yellow-200">Αντιγραφή συνδέσμου</p>
              <p className="text-sm text-green-200">
                {copySuccess ? "Αντιγράφηκε!" : "Αντιγράψτε το σύνδεσμο στο πρόχειρο"}
              </p>
            </div>
            <Copy className="h-5 w-5 text-yellow-300" />
          </button>
        </div>

        <div className="mt-6">
          <Button variant="outline" onClick={onClose} className="w-full border-yellow-500 text-yellow-300">
            Κλείσιμο
          </Button>
        </div>
      </div>
    </div>
  )
}
