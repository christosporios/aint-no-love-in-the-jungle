import { BookOpen, Radio, Tv, Headphones } from "lucide-react"

const ARTICLE_URL = "https://www.takebackthecity.gr/p/startupper"
const PODCAST_URL = "https://open.spotify.com/episode/7mLAiezcaOQ6ULqA0EbahV"
const RADIO_URL = "https://www.skairadio.gr/istories-me-drakou"
const TV_URL = "https://www.megatv.com/etvshows/1938029/08-05-2025/"

export default function LinksSection() {
  return (
    <section className="py-16 bg-green-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Στα Μέσα</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Διαβάστε το άρθρο</h3>
                <p className="text-sm text-green-100">Το αρχικό άρθρο στο Take Back the City</p>
              </div>
            </a>

            <a href={PODCAST_URL} target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Ακούστε το Podcast</h3>
                <p className="text-sm text-green-100">Συζήτηση στο Spotify</p>
              </div>
            </a>

            <a href={RADIO_URL} target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Radio className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Ραδιόφωνο ΣΚΑΙ</h3>
                <p className="text-sm text-green-100">Ιστορίες με τον Δράκου (25:00)</p>
              </div>
            </a>

            <a href={TV_URL} target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Tv className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Τηλεόραση MEGA</h3>
                <p className="text-sm text-green-100">Εκπομπή στο MEGA (54:40)</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
