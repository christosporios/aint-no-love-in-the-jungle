export default function Footer() {
  return (
    <footer className="bg-green-950 py-8" role="contentinfo" aria-label="Υποσέλιδο ιστοσελίδας">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-green-300 text-sm">© {new Date().getFullYear()} Δεν Υπάρχει Αγάπη στη Ζούγκλα</p>
          <nav aria-label="Σύνδεσμοι κοινωνικών δικτύων">
            <ul className="flex justify-center space-x-4 mt-3 list-none p-0">
              <li>
                <a
                  href="https://www.facebook.com/groups/2426064527752355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors focus:outline-yellow-500 focus:outline-2"
                  aria-label="Επισκεφθείτε το Facebook Group μας"
                >
                  Facebook Group
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/christosporios/aint-no-love-in-the-jungle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors focus:outline-yellow-500 focus:outline-2"
                  aria-label="Επισκεφθείτε το αποθετήριο του έργου στο GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:christos@schemalabs.gr"
                  className="text-green-300 hover:text-white transition-colors focus:outline-yellow-500 focus:outline-2"
                  aria-label="Επικοινωνήστε μέσω email"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
