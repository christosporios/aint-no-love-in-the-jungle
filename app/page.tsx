import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import PrinciplesSection from "@/components/principles-section"
import ScooterSituationSection from "@/components/scooter-situation-section"
import ProposalSection from "@/components/proposal-section"
import FAQSection from "@/components/faq-section"
import DemandsSection from "@/components/demands-section"
import LinksSection from "@/components/links-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import ScooterAnimationWrapper from "@/components/scooter-animation-wrapper"

export const metadata: Metadata = {
  title: "Δεν Υπάρχει Αγάπη στη Ζούγκλα | Προστασία του δημόσιου χώρου της Αθήνας",
  description:
    "Μια κοινότητα ανθρώπων που απαιτεί την προστασία του δημόσιου χώρου της Αθήνας από τα ενοικιαζόμενα πατίνια",
  openGraph: {
    title: "Δεν Υπάρχει Αγάπη στη Ζούγκλα | Προστασία του δημόσιου χώρου της Αθήνας",
    description:
      "Μια κοινότητα ανθρώπων που απαιτεί την προστασία του δημόσιου χώρου της Αθήνας από τα ενοικιαζόμενα πατίνια",
    images: [{ url: "/athens-jungle.png", width: 1200, height: 630 }],
  },
}

export default function Home() {
  return (
    <>
      <ScooterAnimationWrapper />
      <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 text-white">
        <header role="banner">
          <HeroSection />
        </header>

        <main id="main-content">
          <PrinciplesSection />
          <ScooterSituationSection />
          <ProposalSection />
          <FAQSection />
          <DemandsSection />
          <LinksSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  )
}
