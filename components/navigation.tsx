"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "/community-guidelines" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="flex items-center gap-3 group">
          <span
            className={`text-2xl font-serif font-medium tracking-[-0.02em] transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            TechWalk
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://techwalk.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            Newsletter
          </a>
          <a
            href="https://luma.com/techwalk"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            }`}
          >
            Join a Walk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-6 border-t border-border">
              <a
                href="https://techwalk.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
              >
                Newsletter
              </a>
              <a
                href="https://luma.com/techwalk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-[13px] font-semibold tracking-wide text-background"
              >
                Join a Walk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
