const actions = [
  {
    number: '01',
    title: 'Review & Approve Proposal',
    description: 'Review the proposal terms, scope of work, and commercial structure. Approval initiates the engagement.',
    cta: 'Decision required',
    deadline: 'Within 30 days',
    urgent: true,
  },
  {
    number: '02',
    title: 'Sign Comprehensive Contract',
    description: 'Upon acceptance, both parties sign the comprehensive contract and detailed Scope of Work as referenced in the proposal.',
    cta: 'Contract signing',
    deadline: 'Post-approval',
    urgent: false,
  },
  {
    number: '03',
    title: 'PWA Platform Setup',
    description: 'MVNE commences the PWA setup and development work as outlined in the one-off engagement scope.',
    cta: 'Development begins',
    deadline: 'Upon contract signature',
    urgent: false,
  },
  {
    number: '04',
    title: 'Ongoing Support & Development',
    description: 'Monthly support and development hours commence, with issues logged per the SLA and development hours accumulated up to three months.',
    cta: 'Support active',
    deadline: 'Post-setup',
    urgent: false,
  },
]

const contacts = [
  { name: 'Yaron Assabi', role: 'CEO, MVNE (Pty) Ltd', email: 'yaron@dsg.co.za' },
]

export default function NextSteps() {
  return (
    <section id="next-steps" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-3">07 &mdash; Next Steps</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight tracking-tight">
            Ready to
            <br />
            <span className="text-[#032572]">Get Started?</span>
          </h2>
          <p className="mt-6 text-lg text-[#6c757d] leading-relaxed">
            Four steps from proposal approval to active platform support.
            This proposal is valid for{' '}
            <strong className="text-[#212529]">30 days</strong> from date of issue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {actions.map((action, i) => (
            <div key={i} className={`card-lift bg-white rounded-sm border overflow-hidden ${action.urgent ? 'border-[#032572]' : 'border-[#dee2e6]'}`}>
              {action.urgent && (
                <div className="bg-[#032572] px-5 py-1.5">
                  <span className="text-xs font-bold text-white/70 tracking-widest uppercase">
                    Decision Required &mdash; {action.deadline}
                  </span>
                </div>
              )}
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 ${action.urgent ? 'bg-[#032572] text-white' : 'bg-[#e8eef9] text-[#032572]'}`}>
                    <span className="text-xs font-black">{action.number}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#212529] mb-2 leading-snug">{action.title}</h3>
                    <p className="text-sm text-[#6c757d] leading-relaxed mb-4">{action.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="phase-badge">{action.cta}</span>
                      {!action.urgent && <span className="text-xs text-[#6c757d] font-medium">{action.deadline}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-2">Get in Touch</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Let&apos;s Build This Together</h3>
              <p className="mt-3 text-base text-white/60 leading-relaxed">
                Contact us to discuss the proposal, clarify scope details, or begin the engagement process.
              </p>
            </div>
            <div className="flex-shrink-0">
              {contacts.map((c, i) => (
                <div key={i}>
                  <p className="text-sm font-bold text-white">{c.name}</p>
                  <p className="text-xs text-white/50">{c.role}</p>
                  <a href={`mailto:${c.email}`} className="text-xs text-white/70 hover:text-white transition-colors">{c.email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
