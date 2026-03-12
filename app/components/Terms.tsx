const terms = [
  {
    title: 'Validity',
    description: 'All proposals from MVNE are valid for thirty (30) days unless otherwise stated.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Additional Agreements',
    description: 'The agreement is subject to the signature of a comprehensive contract.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Payment Terms',
    description: 'All services are payable within thirty (30) days of the invoice date. Late payments are subject to a 2% penalty per month.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Pricing Adjustments',
    description: 'Pricing is indicative and subject to foreign currency exchange rate fluctuations. Should any significant changes occur in the USD rate, MVNE reserves the right to recalibrate the pricing.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Invoicing Schedule',
    description: 'MVNE will invoice monthly for payment, due in MVNE\u2019s bank account no later than the 25th of each month.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Terms() {
  return (
    <section id="terms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-3">04 &mdash; Terms &amp; Conditions</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight tracking-tight">
            Key Terms &amp;
            <br />
            <span className="text-[#032572]">Conditions</span>
          </h2>
        </div>

        {/* Terms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {terms.map((term, i) => (
            <div
              key={i}
              className="card-lift bg-[#f8f9fa] border border-[#dee2e6] rounded-sm p-6"
            >
              <div className="w-10 h-10 rounded-sm bg-[#e8eef9] flex items-center justify-center text-[#032572] mb-4">
                {term.icon}
              </div>
              <h3 className="text-sm font-bold text-[#212529] mb-2">{term.title}</h3>
              <p className="text-xs text-[#6c757d] leading-relaxed">{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
