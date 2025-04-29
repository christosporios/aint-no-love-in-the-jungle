import Link from "next/link"

export default function FAQSection() {
  return (
    <section className="py-20 bg-green-900/70">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">Συχνές Ερωτήσεις</h2>

          <div className="space-y-6">
            <div className="bg-green-800/70 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-3 text-yellow-200">Ποιες εταιρείες;</h3>
              <p>
                Αυτή τη στιγμή στην Αθήνα δραστηριοποιούνται 7 εταιρείες κοινόχρηστης μικροκινητικότητας: Dott, Lime,
                Hop (Τουρκία), Hopp (Ισλανδία), Hoppy (Βέλγιο), RideMovi (Ιταλία), και Bee Scooters (Ελλάδα). Συνολικά,
                έχουν διαθέσει πολλές χιλιάδες πατίνια στο κέντρο της Αθήνας, χωρίς καμία επίσημη συμφωνία με το Δήμο.
              </p>
            </div>

            <div className="bg-green-800/70 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-3 text-yellow-200">
                Αποκλείεται να μην έχουν άδεια οι εταιρείες από το δήμο!
              </h3>
              <p>
                Κι όμως, καμία από τις εταιρείες δεν έχει λάβει επίσημη άδεια από το Δήμο Αθηναίων για την τοποθέτηση
                των πατινιών στους κοινόχρηστους χώρους. Δεν υπάρχει καμία συμφωνία και δεν καταβάλλεται κανένα αντίτιμο
                για τη χρήση του δημόσιου χώρου.
              </p>
            </div>

            <div className="bg-green-800/70 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-3 text-yellow-200">Άρα οι εταιρείες είναι παράνομες;</h3>
              <p>
                Δυστυχώς, εκμεταλλεύονται ένα νομικό κενό. Ο Δήμος Αθηναίων δεν έχει ακόμα θεσπίσει κανονιστικό πλαίσιο
                για τη λειτουργία των εταιρειών μικροκινητικότητας, σε αντίθεση με άλλους δήμους όπως η Θεσσαλονίκη.
                Αυτό όμως δεν σημαίνει ότι έχουν το δικαίωμα να καταλαμβάνουν δημόσιο χώρο χωρίς άδεια. Απλώς
                εκμεταλλεύονται την καθυστέρηση του δήμου να ρυθμίσει το θέμα.
              </p>
            </div>

            <div className="bg-green-800/70 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-3 text-yellow-200">
                Τα μηχανάκια δεν εμποδίζουν; Τα πατίνια σας πείραξαν;
              </h3>
              <p>Τα ενοικιαζόμενα πατίνια είναι εξαιρετικά προβληματικά για τους εξής λόγους:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Μπλοκάρουν τα ήδη στενά πεζοδρόμια της πόλης</li>
                <li>Εμποδίζουν τις ράμπες για αμαξίδια και καρότσια</li>
                <li>Καλύπτουν τους οδηγούς τυφλών</li>
                <li>Χρησιμοποιούνται συχνά από ανήλικους χωρίς κράνη</li>
              </ul>
              <p className="mt-2">
                Ναι, υπάρχουν κι άλλα προβλήματα στην πόλη. Αλλά αυτό δεν είναι δικαιολογία για να αγνοήσουμε το
                συγκεκριμένο πρόβλημα, ειδικά όταν το συγκεκριμένο πρόβλημα λύνεται εξαιρετικά εύκολα. Είναι ενός είδους low hanging fruit.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-yellow-300 hover:text-yellow-200 underline font-medium">
              Δείτε όλες τις συχνές ερωτήσεις
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
