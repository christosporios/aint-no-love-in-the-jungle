"use client"

import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"

const PETITION_URL = "https://docs.google.com/document/d/1FVMdcWWMSrY9IvvHbNP4LRdvXNwhzYKDjrX-vnDKyAk/edit?tab=t.0"

export default function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">Υπογράψτε το αίτημά μας</h2>

          <p className="text-xl mb-8 text-green-100">
            Η Αθήνα δεν είναι ξέφραγο αμπέλι. Η όποια καθυστέρηση του δήμου να ορίσει κανονιστική δεν σημαίνει πως όλα
            επιτρέπονται – οι εταιρείες οφείλουν να περιμένουν.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg"
              onClick={() => window.open(PETITION_URL, "_blank")}
            >
              Υπογράψτε το αίτημά
            </Button>

            <ShareButton />
          </div>
        </div>
      </div>
    </section>
  )
}
