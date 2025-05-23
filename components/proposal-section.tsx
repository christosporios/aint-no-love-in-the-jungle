import Timeline from "@/components/timeline"

export default function ProposalSection() {
  const timelineEvents = [
    {
      date: "11/04/25",
      content: "Στείλαμε το αίτημα μας με 100+ υπογραφές στο Δημοτικό Συμβούλιο",
    },
    {
      date: "14/04/25",
      isMeeting: true,
      content:
        "Το Δημοτικό Συμβούλιο δεν συμπεριέλαβε το αίτημα μας στην ημερήσια διάταξη, αλλά το θέμα συζητήθηκε εκτός ημερησίας.",
      link: "https://opencouncil.gr/athens/apr14_2025/subjects/cm9ig0umw0bns8u8b42wkgoxn",
    },
    {
      date: "24/04/25",

      content: "Ξαναζητήσαμε να ενταχτεί το αίτημα μας στην ημερήσια διάταξη του Δημοτικού Συμβουλίου.",
    },
    {
      date: "30/04/25",
      isMeeting: true,
      content: "Το αίτημα μας και πάλι δεν έχει ενταχτεί στην ημερήσια διάταξη του Δημοτικού Συμβουλίου.",
      link: "https://opencouncil.gr/athens/apr30_2025_2",
      isPending: false,
    },
    {
      date: "Μέσα στις επόμενες εβδομάδες",
      content: "To Δημοτικό Συμβούλιο θα ψηφίσει νέο Κανονισμό Δημοτικού Συμβουλίου -- έπειτα, κάθε αίτημα δημοτών θα πρέπει να συζητείται υποχρεωτικά στην ημερήσια διάταξη (και όχι απλώς να συζητείται, όπως ισχύει μέχρι τώρα).",
      isPending: true,
      link: "https://kede.gr/ypes-dimosieftike-o-protypos-kanonismos-leitourgias-dimotikou-symvouliou/",
    },
    {
      date: "Aμέσως μετά την ψήφιση του νέου Κανονισμού",
      content: "Tο ψήφισμα θα ενταχτεί στην ημερήσια διάταξη, και το ΔΣ θα ψηφίσει υπέρ ή κατά.",
      isPending: true,
    },
    {
      date: "Μετά την ψήφιση του ψηφίσματος",
      content: "Οι εταιρείες είτε θα επιλέξουν είτε να σεβαστούν το σημαντικότερο δημοκρατικό όργανο της πόλης και τα πατίνια θα φύγουν προσωρινά (μέχρι να επιστρέψουν με τους σωστούς κανόνες), είτε οι μάσκες θα πέσουν και θα ξέρουμε με ποιούς έχουμε να κάνουμε.",
      isPending: true,
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">Η πρόταση μας</h2>

          <div className="bg-green-700/40 p-8 rounded-xl backdrop-blur-sm mb-12">
            <p className="text-lg mb-4">
              Ο δήμος ήδη ετοιμάζει μια κανονιστική ρύθμιση, ώστε να φέρει τα πατίνια στην Αθήνα σε συγκεκριμένους
              αριθμούς και με συγκεκριμένες θέσεις στάθμευσης. Αυτή η διαδικασία μπορεί να διαρκέσει πολλούς μήνες.
              Μέχρι όμως η ρύθμιση να έρθει σε ισχύ, ζητάμε από το δήμο να απαιτείσει το τέλος της ασυδοσίας και της
              αλόγιστης κατάληψης του δημοσίου χώρου.
            </p>
            <p className="text-lg">
              Συγκεκριμένα, ζητάμε από το δημοτικό συμβούλιο της Αθήνας να υιοθετήσει ψήφισμα με το οποίο ζητάει από τις
              εταιρείες να φύγουν τα πατίνια μέχρι να αποφασίσουμε συλλογικά σαν Αθηναίοι με ποιό τρόπο θέλουμε τα
              πατίνια. Το ψήφισμα θα λειτουργούσε ως μια γέφυρα μέχρι να έρθει σε ισχύ η κανονιστική. Αν και δε θα έχει
              κανονιστική ισχύ, θα εκφράσει πέραν κάθε αμφιβολλίας της εναντίωση του δήμου στη μπάντε-σκύλοι-αλέστε
              κατάσταση που επικρατεί σήμερα. Οι εταιρείες πιθανότατα θα το υπακούσουν, αλλά αν όχι, τουλάχιστον θα
              πέσουν οι μάσκες.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-yellow-200">Χρονοδιάγραμμα</h3>
          <p className="text-lg mb-4">
            Δημοτικά συμβούλια γίνονται περίπου κάθε δύο εβδομάδες.
            Κάθε συνεδρίαση έχει δύο βασικά μέρη: Το προ-ημερησίας κομμάτι,
            στο οποίο γίνεται συζήτηση και ερωτοαπαντήσεις μεταξύ αντιπολίτευσης και δημοτικής αρχής,
            και τη κομμάτι της ημερήσιας διάταξης, στο οποίο το δημοτικό συμβούλιο καλείται να αποφασίσει ψηφίζονται για τια διάφορα θέματα.
            Ζητάμε συγκεκριμένα να ενταχτεί το ψήφισμα μας στην ημερήσια διάταξη, ώστε το ΔΣ να κληθεί να το ψηφίσει. Μπορείτε να διαβάσετε περισσότερα για
            το <a href='https://schemalabs.substack.com/p/local-gov-gr' className="text-yellow-200">πως λειτουργεί ένα δημοτικό συμβούλιο</a>
          </p>


          <Timeline events={timelineEvents} />
        </div>
      </div>
    </section >
  )
}
