import Link from "next/link"

export default function ArticleBanner() {
    return (
        <div className="flex justify-center py-3 bg-green-700">
            <Link
                href="https://www.takebackthecity.gr/p/startupper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-1.5 bg-white text-green-800 rounded-full font-medium text-sm hover:bg-green-100 transition-colors shadow-md"
            >
                <span className="mr-1">Διαβάστε το άρθρο</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </Link>
        </div>
    )
} 