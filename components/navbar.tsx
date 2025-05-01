"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <div className="w-24 h-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-2xl">NETFLIX</span>
                </div>
              </div>
            </Link>

            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link href="/browse" className="text-white hover:text-gray-300 transition-colors">
                  TV Shows
                </Link>
                <Link href="/browse" className="text-white hover:text-gray-300 transition-colors">
                  Movies
                </Link>
                <Link href="/browse" className="text-white hover:text-gray-300 transition-colors">
                  New & Popular
                </Link>
                <Link href="/browse" className="text-white hover:text-gray-300 transition-colors">
                  My List
                </Link>
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            {!isMobile ? (
              <>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Bell size={20} />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 rounded-sm p-0">
                      <Avatar className="h-8 w-8 rounded-sm">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="rounded-sm bg-gray-700">U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800 text-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">Settings</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-black border-t border-gray-800 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/browse"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link
              href="/browse"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              href="/browse"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              New & Popular
            </Link>
            <Link
              href="/browse"
              className="text-white hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              My List
            </Link>
            <div className="flex items-center gap-4 py-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Bell size={20} />
              </Button>
              <Avatar className="h-8 w-8 rounded-sm">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="rounded-sm bg-gray-700">U</AvatarFallback>
              </Avatar>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
