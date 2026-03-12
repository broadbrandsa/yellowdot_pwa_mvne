const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'PWA Build & Setup',
    description:
      'Complete development and setup of the Yellow Dot MVNO PWA platform, ready for deployment and customer use.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24x7 Critical Support',
    description:
      'Round-the-clock support for critical issues with Level 3 code-level corrections, ensuring platform reliability.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Monthly Development Hours',
    description:
      'Dedicated development hours for platform changes, enhancements, and feature additions on a time-and-materials basis.',
  },
]

export default function Introduction() {
  return (
    <section id="introduction" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="section-label mb-3">01 &mdash; Introduction</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight tracking-tight">
            PWA Platform
            <br />
            <span className="text-[#032572]">Build &amp; Support</span>
          </h2>
          <p className="mt-6 text-lg text-[#6c757d] leading-relaxed">
            This proposal outlines the terms for the build and support of the
            Yellow Dot MVNO PWA platform and monthly development hours. It covers
            a support requirement for the new platform as well as 24x7 support
            for critical issues, and development hours for platform changes.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="card-lift bg-white border border-[#dee2e6] rounded-sm p-7"
              style={{ borderTop: '3px solid #032572' }}
            >
              <div className="w-11 h-11 flex items-center justify-center bg-[#e8eef9] rounded-sm text-[#032572] mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#212529] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6c757d] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key metrics */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '$12,507', label: 'PWA Setup & Development' },
            { value: '$4,250', label: 'Monthly Support & Dev' },
            { value: '40 hrs', label: 'Tier 3 Support / Month' },
            { value: '10 hrs', label: 'Development Hours / Month' },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-[#f8f9fa] border border-[#dee2e6] rounded-sm p-5 text-center"
            >
              <div className="text-2xl font-black text-[#032572]">{m.value}</div>
              <div className="mt-1 text-xs text-[#6c757d] font-medium leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
