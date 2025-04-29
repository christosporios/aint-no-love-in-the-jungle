import Link from "next/link"
import Image from "next/image"

export default function LinksSection() {
  return (
    <section className="py-16 bg-green-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Χρήσιμοι Σύνδεσμοι</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Image src="/link-icon.png" alt="Link" width={24} height={24} />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Δήμος Αθηναίων</h3>
                <p className="text-sm text-green-100">Επίσημη ιστοσελίδα του Δήμου Αθηναίων</p>
              </div>
            </Link>

            <Link href="#" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Image src="/link-icon.png" alt="Link" width={24} height={24} />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Υπουργείο Μεταφορών</h3>
                <p className="text-sm text-green-100">Επίσημη ιστοσελίδα του Υπουργείου Μεταφορών</p>
              </div>
            </Link>

            <Link href="#" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Image src="/link-icon.png" alt="Link" width={24} height={24} />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Νομοθεσία για Πατίνια</h3>
                <p className="text-sm text-green-100">Ισχύουσα νομοθεσία για τα ηλεκτρικά πατίνια</p>
              </div>
            </Link>

            <Link href="#" className="bg-green-800 hover:bg-green-700 p-4 rounded-lg flex items-center">
              <div className="bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <Image src="/link-icon.png" alt="Link" width={24} height={24} />
              </div>
              <div>
                <h3 className="font-bold text-yellow-200">Ομάδα Facebook</h3>
                <p className="text-sm text-green-100">Συμμετέχετε στην ομάδα μας στο Facebook</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
