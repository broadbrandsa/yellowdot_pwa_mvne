import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-[#032572] overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Background image */}
      <Image
        src="/Images/rasheed-kemy-oqY09oVTa3k-unsplash.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={75}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(3,37,114,0.92) 0%, rgba(2,20,66,0.90) 60%, rgba(2,14,46,0.95) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-pattern opacity-30" aria-hidden="true" />

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-8"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="600" y1="0" x2="0" y2="800" stroke="white" strokeWidth="1" />
          <line x1="700" y1="0" x2="100" y2="800" stroke="white" strokeWidth="1" />
          <line x1="800" y1="0" x2="200" y2="800" stroke="white" strokeWidth="1" />
          <circle cx="500" cy="100" r="200" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="500" cy="100" r="350" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="anim-fade-up mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 border border-white/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
            Confidential &mdash; Yellow Dot MVNO PWA Support Proposal
          </span>
        </div>

        <div className="anim-fade-up delay-100 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
            MVNO PWA
            <br />
            Platform Support
          </h1>
        </div>

        <div className="anim-fade-up delay-200 mt-6 max-w-2xl">
          <p className="text-xl sm:text-2xl font-light text-white/70 leading-relaxed tracking-wide">
            Development &amp; Support Hours Proposal
          </p>
          <p className="mt-2 text-sm font-medium text-white/40 tracking-widest uppercase">
            Prepared by MVNE (Pty) Ltd &nbsp;&middot;&nbsp; 23 February 2026
          </p>
        </div>

        <div className="anim-fade-up delay-300 mt-8 max-w-2xl">
          <p className="text-base text-white/60 leading-relaxed border-l-2 border-white/20 pl-4">
            A proposal for the build and support of the Yellow Dot MVNO PWA platform,
            including 24x7 critical issue support, Level 3 code-level support,
            and monthly development hours for platform changes and enhancements.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="anim-fade-up delay-400 mt-10 flex flex-wrap gap-4">
          <a
            href="#introduction"
            className="inline-flex items-center gap-2 bg-white text-[#032572] text-sm font-bold px-6 py-3 rounded-sm hover:bg-white/90 transition-colors duration-200 tracking-wide uppercase"
          >
            Explore Proposal
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="/proposal-pack.zip"
            download
            className="inline-flex items-center gap-2 bg-transparent text-white text-sm font-bold px-6 py-3 rounded-sm border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-200 tracking-wide uppercase"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V19a2 2 0 002 2h14a2 2 0 002-2v-2" />
            </svg>
            Download Full Proposal Pack
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '$12,507', label: 'One-Off Setup' },
              { value: '$4,250', label: 'Monthly Total' },
              { value: '40 hrs', label: 'Tier 3 Support / Month' },
              { value: '10 hrs', label: 'Dev Hours / Month' },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-6 py-5 text-center anim-fade-up"
                style={{ animationDelay: `${500 + i * 100}ms` }}
              >
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs font-medium text-white/40 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
