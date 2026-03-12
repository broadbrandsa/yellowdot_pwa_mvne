const supportLevels = [
  {
    level: 'Level 1',
    title: 'System Monitoring',
    description: 'Monitoring of the system functionality.',
    note: 'Can be added',
    badge: 'Optional',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    level: 'Level 2',
    title: 'System Functional Issues',
    description: 'System functional issues that can be resolved by restarting or manual intervention.',
    note: null,
    badge: 'Included',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    level: 'Level 3',
    title: 'Code Level Corrections',
    description: 'Code level corrections required to resolve platform issues.',
    note: null,
    badge: 'Primary',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
]

const scopeAreas = [
  {
    title: 'Platform Support',
    description: 'Support of the developed functionality and integration to the Yellow Dot MVNO platform.',
  },
  {
    title: 'Level 3 Support',
    description: 'Level 3 support will be provided for code-level corrections and platform issues.',
  },
  {
    title: 'Feature Development',
    description: 'Identification of features and additions and corrections — on a change request basis, time and materials.',
  },
  {
    title: 'Issue Logging',
    description: 'Support issues can be logged with the support team following the SLA defined in the SOW between Yellow Dot and MVNE.',
  },
  {
    title: 'Development Hours',
    description: 'Monthly development hours, which may be accumulated up to a maximum of three months.',
  },
]

export default function ScopeOfWork() {
  return (
    <section id="scope" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-3">02 &mdash; Scope of Work</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight tracking-tight">
            What&apos;s
            <br />
            <span className="text-[#032572]">Included</span>
          </h2>
          <p className="mt-6 text-lg text-[#6c757d] leading-relaxed">
            The Scope of Work covers platform support, code-level issue resolution,
            feature development, and monthly development hours for the Yellow Dot MVNO PWA.
          </p>
        </div>

        {/* Scope areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {scopeAreas.map((area, i) => (
            <div
              key={i}
              className="card-lift bg-white border border-[#dee2e6] rounded-sm p-6"
            >
              <div className="w-8 h-8 rounded-sm bg-[#e8eef9] flex items-center justify-center mb-4">
                <span className="text-xs font-black text-[#032572]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#212529] mb-2">{area.title}</h3>
              <p className="text-xs text-[#6c757d] leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Support Levels */}
        <div>
          <h3 className="text-sm font-bold text-[#032572] tracking-widest uppercase mb-6">
            Support Level Definitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {supportLevels.map((level, i) => (
              <div
                key={i}
                className={`card-lift rounded-sm border overflow-hidden ${
                  level.badge === 'Primary'
                    ? 'bg-[#032572] border-[#032572]'
                    : 'bg-white border-[#dee2e6]'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                        level.badge === 'Primary'
                          ? 'bg-white/15 text-white'
                          : 'bg-[#e8eef9] text-[#032572]'
                      }`}
                    >
                      {level.icon}
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-0.5 ${
                        level.badge === 'Primary'
                          ? 'bg-white/15 text-white/80'
                          : level.badge === 'Optional'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-[#e8eef9] text-[#032572]'
                      }`}
                    >
                      {level.badge}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                      level.badge === 'Primary' ? 'text-white/50' : 'text-[#6c757d]'
                    }`}
                  >
                    {level.level}
                  </p>
                  <h4
                    className={`text-base font-bold mb-2 ${
                      level.badge === 'Primary' ? 'text-white' : 'text-[#212529]'
                    }`}
                  >
                    {level.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      level.badge === 'Primary' ? 'text-white/70' : 'text-[#6c757d]'
                    }`}
                  >
                    {level.description}
                  </p>
                  {level.note && (
                    <p
                      className={`text-xs mt-3 italic ${
                        level.badge === 'Primary' ? 'text-white/50' : 'text-[#6c757d]'
                      }`}
                    >
                      {level.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
