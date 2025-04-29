import Image from "next/image"

export default function DemandsSection() {
  return (
    <section className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">Τι ζητάμε</h2>

          <div className="bg-green-800/80 p-8 rounded-xl backdrop-blur-sm">
            <p className="mb-6">Ζητάμε από το Δημοτικό Συμβούλιο της Αθήνας να:</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  1
                </div>
                <p>
                  <strong className="text-yellow-200">ΔΙΑΠΙΣΤΩΣΕΙ</strong> ότι οι 7 εταιρείες κοινόχρηστης
                  μικροκινητικότητας λειτουργούν χωρίς άδεια, καταλαμβάνοντας δημόσιο χώρο και δημιουργώντας εμπόδια
                  στην καθημερινή κίνηση των πολιτών.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  2
                </div>
                <p>
                  <strong className="text-yellow-200">ΕΠΙΣΗΜΑΝΕΙ</strong> ότι καμία από τις εταιρείες δεν έχει λάβει
                  άδεια από το Δήμο Αθηναίων για την τοποθέτηση των πατινιών στους κοινόχρηστους χώρους και δεν
                  καταβάλλει κανένα αντίτιμο για τη χρήση του δημόσιου χώρου.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  3
                </div>
                <p>
                  <strong className="text-yellow-200">ΔΙΑΜΑΡΤΥΡΗΘΕΙ</strong> για την αλόγιστη και ανεξέλεγκτη χρήση του
                  δημόσιου χώρου από τις εταιρείες κοινόχρηστης μικροκινητικότητας, και την ασέβεια προς τους ανθρώπους
                  της πόλης.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  4
                </div>
                <p>
                  <strong className="text-yellow-200">ΚΑΛΕΣΕΙ ΤΟ ΥΠΟΥΡΓΕΙΟ ΜΕΤΑΦΟΡΩΝ</strong> να θεσπίσει άμεσα
                  νομοθετικό πλαίσιο που θα απαγορεύει την ενοικίαση πατινιών σε δημόσιους και κοινόχρηστους χώρους σε
                  δήμους που δεν το έχουν επιτρέψει ρητά με σχετική κανονιστική απόφαση.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  5
                </div>
                <p>
                  <strong className="text-yellow-200">ΑΠΑΙΤΗΣΕΙ</strong> από τις εταιρείες να αποσύρουν άμεσα τα πατίνια
                  από το κέντρο της Αθήνας μέχρι τη θέσπιση κανονιστικού πλαισίου από το Δήμο που θα ρυθμίζει τη
                  λειτουργία τους.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
