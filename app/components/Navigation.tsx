'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#introduction', label: 'Overview' },
    { href: '#scope', label: 'Scope' },
    { href: '#commercial', label: 'Commercial' },
    { href: '#terms', label: 'Terms' },
    { href: '#why-mvne', label: 'Why MVNE' },
    { href: '#next-steps', label: 'Next Steps' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-[#dee2e6]'
          : 'bg-white/98 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/Logos/mvne.png"
              alt="MVNE"
              width={90}
              height={32}
              style={{ width: 'auto', height: '2rem' }}
              className="object-contain"
              priority
            />
            <Image
              src="/Logos/yellow+dot+logo.webp"
              alt="Yellow Dot"
              width={90}
              height={32}
              style={{ width: 'auto', height: '2rem' }}
              className="object-contain hidden sm:block"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-[#212529]/60 hover:text-[#032572] transition-colors duration-200 tracking-wide uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="mailto:yaron@dsg.co.za"
              className="flex items-center gap-1.5 text-[#032572] border border-[#032572] text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-[#032572] hover:text-white transition-colors duration-200 tracking-wide uppercase whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <a
              href="/proposal-pack.zip"
              download
              className="flex items-center gap-1.5 bg-[#032572] text-white text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-[#021d5a] transition-colors duration-200 tracking-wide uppercase whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V19a2 2 0 002 2h14a2 2 0 002-2v-2" />
              </svg>
              Download Proposal
            </a>
            <button
              className="text-[10px] font-medium uppercase tracking-widest transition-colors duration-200 ml-1"
              style={{ color: 'rgba(0,0,0,0.18)' }}
              onClick={() => {
                try { localStorage.removeItem('dm_yellowdotpwa_v1_unlocked') } catch {}
                window.location.reload()
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(0,0,0,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(0,0,0,0.18)' }}
            >
              Hide
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#212529] hover:text-[#032572] transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-[#dee2e6] bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-[#212529] hover:text-[#032572] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a href="mailto:yaron@dsg.co.za" className="flex items-center justify-center gap-2 border border-[#032572] text-[#032572] text-xs font-bold px-4 py-3 rounded-sm tracking-wide uppercase">Contact Us</a>
              <a href="/proposal-pack.zip" download className="flex items-center justify-center gap-2 bg-[#032572] text-white text-xs font-bold px-4 py-3 rounded-sm tracking-wide uppercase">Download Proposal</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
