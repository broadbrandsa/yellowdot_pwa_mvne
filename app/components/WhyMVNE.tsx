'use client'

import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'

const capabilities = [
  {
    name: 'Mobile Virtual Network Enabler',
    logo: '/Logos/mvne-white.png',
    url: 'https://mvne.co.za/',
    description:
      'Provides mobile virtual services for large consumer-facing brands seeking to integrate mobile into their strategy.',
    services: ['MVNO platform management', 'eSIM & Travel eSIM', 'Commercial Viability analysis', 'Insurance, OTT, Cloud Storage'],
    highlight: true,
  },
  {
    name: 'Customer Experience Group',
    logo: '/Logos/CXG.png',
    url: 'https://cxg.co.za/',
    description:
      'Integrated customer experience solutions for consumer-facing organisations.',
    services: ['Omni Channel support', 'Customer Care & CX', 'Contact Centre Services', 'Dynamic CRM Solutions'],
    highlight: false,
  },
  {
    name: 'Digitalise',
    logo: '/Logos/Digitalise.png',
    url: 'https://digitalise.com/',
    description:
      'A design and development studio delivering made-to-fit user experiences.',
    services: ['Digital Transformation', 'Web & App development', 'SEO and PPC management'],
    highlight: false,
  },
  {
    name: 'BroadBrand',
    logo: '/Logos/Broadbrand.png',
    url: 'https://broadbrand.co.za/',
    description:
      'A mobile media marketing solution harnessing AI and mobile moments.',
    services: ['AI-Driven Strategy', 'Content Creation', 'Digital Advertising'],
    highlight: false,
  },
  {
    name: 'digitalmall.com',
    logo: '/Logos/Digital Mall.png',
    url: 'https://www.dsg.co.za/digitalmallcom/',
    description:
      'A turnkey e-commerce technology partner for online stores.',
    services: ['Online e-Commerce', 'Turnkey store setup', 'Digital retail management'],
    highlight: false,
  },
  {
    name: 'Digital Resilience',
    logo: '/Logos/Digital Resilience.png',
    url: 'https://digitalresilience.co.za/',
    description:
      'Cybersecurity solutions with fully managed security services.',
    services: ['Enhanced Digital Security', 'Custom Cyber Defence', 'Risk Management'],
    highlight: false,
  },
  {
    name: 'eInsurer',
    logo: '/Logos/E Insurer.png',
    url: 'https://www.einsurer.co.za/',
    description:
      'Cyber insurance solutions tailored for corporates and individuals.',
    services: ['Identity theft protection', 'Data restoration', 'Cyber extortion coverage'],
    highlight: false,
  },
]

const TRACK_PADDING = 'max(2rem, calc((100vw - 80rem) / 2 + 2rem))'

export default function WhyMVNE() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.querySelectorAll('[data-card]')) as HTMLElement[]
    if (!cards[index]) return
    cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setActiveIndex(index)
  }, [])

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.querySelectorAll('[data-card]')) as HTMLElement[]
    const trackLeft = track.getBoundingClientRect().left
    let closestIndex = 0
    let minDist = Infinity
    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - trackLeft)
      if (dist < minDist) {
        minDist = dist
        closestIndex = i
      }
    })
    setActiveIndex(closestIndex)
  }, [])

  const prev = () => scrollToCard(Math.max(0, activeIndex - 1))
  const next = () => scrollToCard(Math.min(capabilities.length - 1, activeIndex + 1))
  const atStart = activeIndex === 0
  const atEnd = activeIndex === capabilities.length - 1

  return (
    <section id="why-mvne" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="section-label mb-3">05 &mdash; Why MVNE</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight tracking-tight">
              Part of the
              <br />
              <span className="text-[#032572]">DSG Group</span>
            </h2>
            <p className="mt-4 text-base text-[#6c757d] leading-relaxed max-w-2xl">
              MVNE is part of the Digital Solutions Group, providing end-to-end capabilities
              across MVNO enablement, customer experience, digital transformation,
              marketing, and cybersecurity.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={prev} disabled={atStart} aria-label="Previous"
              className={`w-10 h-10 rounded-sm border flex items-center justify-center transition-all duration-200 ${atStart ? 'border-[#dee2e6] text-[#adb5bd] cursor-not-allowed' : 'border-[#032572] text-[#032572] hover:bg-[#032572] hover:text-white'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} disabled={atEnd} aria-label="Next"
              className={`w-10 h-10 rounded-sm border flex items-center justify-center transition-all duration-200 ${atEnd ? 'border-[#dee2e6] text-[#adb5bd] cursor-not-allowed' : 'border-[#032572] text-[#032572] hover:bg-[#032572] hover:text-white'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div ref={trackRef} onScroll={handleScroll}
        className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ paddingLeft: TRACK_PADDING, paddingRight: TRACK_PADDING, scrollPaddingLeft: TRACK_PADDING }}>
        {capabilities.map((cap, i) => (
          <div key={i} data-card
            className={`snap-start flex-none w-[calc(100vw-3.5rem)] sm:w-[300px] lg:w-[340px] card-lift rounded-sm border p-6 flex flex-col ${cap.highlight ? 'bg-[#032572] border-[#032572]' : 'bg-white border-[#dee2e6]'}`}>
            <div className="mb-5 h-9 flex items-center">
              <Image src={cap.logo} alt={cap.name} width={130} height={36} style={{ width: 'auto', height: '2rem' }} className="object-contain" />
            </div>
            <h3 className={`text-base font-bold leading-snug mb-2 ${cap.highlight ? 'text-white' : 'text-[#212529]'}`}>{cap.name}</h3>
            <p className={`text-xs leading-relaxed mb-4 ${cap.highlight ? 'text-white/70' : 'text-[#6c757d]'}`}>{cap.description}</p>
            <ul className="space-y-1.5 mb-5">
              {cap.services.map((s, j) => (
                <li key={j} className={`flex items-start gap-2 text-xs leading-snug ${cap.highlight ? 'text-white/80' : 'text-[#212529]'}`}>
                  <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${cap.highlight ? 'bg-white/50' : 'bg-[#032572]'}`} />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 border-t border-dashed border-current/20">
              <a href={cap.url} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-xs font-medium hover:underline ${cap.highlight ? 'text-white/50 hover:text-white/80' : 'text-[#6c757d] hover:text-[#032572]'}`}>
                {cap.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
        <div className="flex-none shrink-0" style={{ width: TRACK_PADDING }} aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-5 flex items-center gap-1.5">
          {capabilities.map((_, i) => (
            <button key={i} onClick={() => scrollToCard(i)} aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 h-1.5 bg-[#032572]' : 'w-1.5 h-1.5 bg-[#dee2e6] hover:bg-[#adb5bd]'}`} />
          ))}
          <span className="ml-auto text-xs text-[#adb5bd] tabular-nums font-medium">{activeIndex + 1} / {capabilities.length}</span>
        </div>
      </div>
    </section>
  )
}
