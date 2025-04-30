export default function Footer() {
  return (
    <footer className="bg-green-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-green-300 text-sm">© {new Date().getFullYear()} Δεν Υπάρχει Αγάπη στη Ζούγκλα</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="https://www.facebook.com/groups/2426064527752355" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">
              Facebook Group
            </a>
            <a href="https://github.com/christosporios/aint-no-love-in-the-jungle" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:christos@schemalabs.gr" className="text-green-300 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
