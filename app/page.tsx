import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MovieCarousel from "@/components/movie-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />

        <section className="container mx-auto px-4 py-8">
          <MovieCarousel title="Trending Now" category="trending" />
          <MovieCarousel title="Popular on Netflix" category="popular" />
          <MovieCarousel title="New Releases" category="new" />
          <MovieCarousel title="Watch Again" category="watch-again" />

          <div className="mt-12 text-center">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-medium transition-colors"
            >
              Browse All
              <ChevronRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-gray-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Preferences
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© 2025 Netflix Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
