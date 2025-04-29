"use client"

import { Button } from "@/components/ui/button"

const PETITION_URL = "https://docs.google.com/document/d/1FVMdcWWMSrY9IvvHbNP4LRdvXNwhzYKDjrX-vnDKyAk/edit?tab=t.0"

export default function PrinciplesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">Τα βασικά</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-700/50 p-6 rounded-xl border-2 border-green-600 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-yellow-200">Δεν είμαστε κατά των πατινιών</h3>
              </div>
              <p>
                Δεν εκφράζουμε καμία άποψη υπέρ ή κατά των πατινιών, των ενοικιαζόμενων πατινιών, ή της
                μικροκινητικότητας εν γένει.
              </p>
            </div>

            <div className="bg-green-700/50 p-6 rounded-xl border-2 border-green-600 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-yellow-200">Είμαστε κατά της ασυδοσίας</h3>
              </div>
              <p>
                Αντιδρούμε στην υπάρχουσα κατάσταση των ενοικιαζόμενων πατινιών χωρίς κανόνες. Τη θεωρούμε προσβλητική
                προς εμάς και την πόλη μας.
              </p>
            </div>

            <div className="bg-green-700/50 p-6 rounded-xl border-2 border-green-600 backdrop-blur-sm md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-yellow-200">Οι εταιρείες πρέπει να περιμένουν τον κανονισμό</h3>
              </div>
              <p>
                Θεωρούμε πρώτα από όλους υπεύθυνες τις 7 εταιρείες μικροκινητικότητας που έχουν παρατήσει χιλιάδες
                πατίνια στο ιστορικό κέντρο της Αθήνας χωρίς καμία άδεια και χωρίς να πληρώνουν ούτε ευρώ για τα
                χιλιάδες τετραγωνικά μέτρα δημοσίου χώρου που καταλαμβάνουν. Τα πατίνια και η μικροκινητικότητα μπορεί
                να έχουν θέση στην Αθήνα, αλλά μόνο με σωστό σχεδιασμό και την έγκριση και συγκατάθεση του δήμου.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg"
              onClick={() => window.open(PETITION_URL, "_blank")}
            >
              Υπογράψτε το αίτημα
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
