const documents = [
  {
    title: 'MVNO PWA Support Proposal',
    description: 'Complete proposal document with scope of work, commercial terms, fees, and conditions.',
    type: 'DOCX',
    href: '/docs/Yellow Dot MVNO PWA Support Proposal - MVNE 20260223 v2-1.docx',
    primary: true,
  },
]

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="section-label mb-3">06 &mdash; Documents</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight tracking-tight">
            Proposal
            <br />
            <span className="text-[#032572]">Documents</span>
          </h2>
          <p className="mt-6 text-lg text-[#6c757d] leading-relaxed">
            Download the full proposal document for detailed review.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {documents.map((doc, i) => (
            <a key={i} href={doc.href} download
              className={`card-lift rounded-sm border p-6 flex flex-col gap-3 group ${doc.primary ? 'bg-[#032572] border-[#032572]' : 'bg-white border-[#dee2e6]'}`}>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-0.5 ${doc.primary ? 'bg-white/15 text-white/80' : 'bg-[#e8eef9] text-[#032572]'}`}>{doc.type}</span>
              </div>
              <h3 className={`text-sm font-bold leading-snug ${doc.primary ? 'text-white' : 'text-[#212529]'}`}>{doc.title}</h3>
              <p className={`text-xs leading-relaxed ${doc.primary ? 'text-white/60' : 'text-[#6c757d]'}`}>{doc.description}</p>
              <div className="mt-auto pt-3">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${doc.primary ? 'text-white/70 group-hover:text-white' : 'text-[#032572]'} transition-colors`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V19a2 2 0 002 2h14a2 2 0 002-2v-2" />
                  </svg>
                  Download
                </span>
              </div>
            </a>
          ))}

          <a href="/proposal-pack.zip" download className="card-lift rounded-sm border border-[#dee2e6] bg-white p-6 flex flex-col gap-3 group">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-0.5 bg-[#e8eef9] text-[#032572]">ZIP</span>
            </div>
            <h3 className="text-sm font-bold text-[#212529] leading-snug">Complete Proposal Pack</h3>
            <p className="text-xs text-[#6c757d] leading-relaxed">All proposal documents bundled in a single download.</p>
            <div className="mt-auto pt-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#032572] group-hover:text-[#021d5a] transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V19a2 2 0 002 2h14a2 2 0 002-2v-2" />
                </svg>
                Download All
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
