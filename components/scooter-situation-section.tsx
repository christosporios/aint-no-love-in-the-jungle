import Link from "next/link"

export default function ScooterSituationSection() {
  return (
    <section className="py-20 bg-green-800/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">
            Η κατάσταση με τα πατίνια
          </h2>

          <div className="bg-green-700/40 p-8 rounded-xl backdrop-blur-sm border-l-4 border-yellow-500">
            <p className="text-lg leading-relaxed">
              7 εταιρείς μικροκινητικότητας έχουν παρατήσει χιλιάδες πατίνια στα πεζοδρόμια της Αθήνας, χωρίς να τους το
              ζητήσει απολύτως κανείς. Δεν έχουν καμία άδεια από το δήμο, δεν πληρώνουν ούτε μισό ευρώ για τα χιλιάδες
              τετραγωνικά μέτρα δημοσίου χώρου που καταλαμβάνουν, και επωφελούται από το να νοικιάζουν πατίνια πάνω σε
              ράμπες αναπήρων, στενά πεζοδρόμια, οδηγούς τυφλών και θέσεις στάθμευσης κατοίκων.
            </p>

            <div className="mt-4 text-right">
              <Link href="/faq" className="text-yellow-300 hover:text-yellow-200 font-medium inline-flex items-center">
                Διαβάστε περισσότερα εδώ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
