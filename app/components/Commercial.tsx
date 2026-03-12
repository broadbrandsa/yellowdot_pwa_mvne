'use client'

import { useState } from 'react'

const oneOffItems = [
  {
    description: 'PWA Set Up and Development',
    detail: 'Complete build, configuration, and deployment of the Yellow Dot MVNO PWA platform',
    cost: '$12,507',
    highlight: true,
  },
]

const monthlyItems = [
  {
    description: '40 Hours of Tier 3 Support',
    detail: 'Level 3 code-level support for platform issues, including 24x7 critical issue response',
    cost: '$3,250',
    highlight: false,
  },
  {
    description: '10 Hours of Development Work',
    detail: 'Monthly development hours for platform changes, enhancements, and feature additions',
    cost: '$1,000',
    highlight: false,
  },
  {
    description: 'Monthly Total',
    detail: 'Support for Level 3 issues + Development hours',
    cost: '$4,250',
    highlight: true,
  },
]

export default function Commercial() {
  const [breakdownOpen, setBreakdownOpen] = useState(true)

  return (
    <section
      id="commercial"
      className="py-24"
      style={{ background: 'linear-gradient(160deg, #032572 0%, #021442 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">
            03 &mdash; Commercial Terms
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Clear, Structured
            <br />
            Pricing
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            The costs are structured around resourcing with a support insurance
            portion and development hours for any required changes and enhancements.
          </p>
        </div>

        {/* One-off costs */}
        <div className="mb-8 bg-white/5 border border-white/10 rounded-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                One-Off Setup Fee
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-7xl font-black text-white tracking-tight">
                  $12,507
                </span>
                <span className="text-lg text-white/40 font-medium">USD</span>
              </div>
              <p className="text-sm text-white/50 mt-2">
                PWA set up and development
              </p>
            </div>
          </div>

          {oneOffItems.map((item, i) => (
            <div key={i} className="bg-white/8 rounded-sm p-5 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">{item.description}</p>
                  <p className="text-xs text-white/40 mt-0.5">{item.detail}</p>
                </div>
                <span className="text-lg font-black text-white">{item.cost}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly costs */}
        <div className="mb-10 bg-white/5 border border-white/10 rounded-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                Monthly Recurring Costs
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-7xl font-black text-white tracking-tight">
                  $4,250
                </span>
                <span className="text-lg text-white/40 font-medium">USD / month</span>
              </div>
              <p className="text-sm text-white/50 mt-2">
                Support + Development hours
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full sm:w-auto">
              {[
                { label: 'Tier 3 Support', value: '40 hrs', sub: '$3,250' },
                { label: 'Dev Hours', value: '10 hrs', sub: '$1,000' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-black text-white">{item.value}</div>
                  <div className="text-xs text-white/40 font-medium mt-0.5">{item.label}</div>
                  <div className="text-xs text-white/25 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Breakdown accordion */}
          <button
            onClick={() => setBreakdownOpen(!breakdownOpen)}
            className="w-full flex items-center justify-between gap-3 pt-5 border-t border-white/10 text-left group"
            aria-expanded={breakdownOpen}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-white/60 transition-colors">
              Monthly Breakdown
            </span>
            <span className={`flex items-center gap-1.5 text-xs font-semibold text-white/40 group-hover:text-white/60 transition-all duration-200 ${breakdownOpen ? 'text-white/60' : ''}`}>
              {breakdownOpen ? 'Collapse' : 'View details'}
              <svg className={`w-4 h-4 transition-transform duration-300 ${breakdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${breakdownOpen ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-3">
              {monthlyItems.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-sm p-5 border ${
                    item.highlight
                      ? 'bg-white/12 border-white/20'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-bold ${item.highlight ? 'text-white' : 'text-white/80'}`}>
                        {item.description}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">{item.detail}</p>
                    </div>
                    <span className={`text-lg font-black ${item.highlight ? 'text-white' : 'text-white/70'}`}>
                      {item.cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/30 mt-4 italic">
              Development hours may be accumulated up to a maximum of three months.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
