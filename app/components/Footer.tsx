import Image from 'next/image'

const navLinks = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#scope', label: 'Scope of Work' },
  { href: '#commercial', label: 'Commercial Terms' },
  { href: '#terms', label: 'Terms & Conditions' },
  { href: '#why-mvne', label: 'Why MVNE' },
  { href: '#downloads', label: 'Documents' },
  { href: '#next-steps', label: 'Next Steps' },
]

export default function Footer() {
  return (
    <footer className="bg-[#021442] text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Ready to proceed?</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Download the Full Proposal</h3>
              <p className="mt-2 text-sm text-white/50">MVNE &middot; Yellow Dot MVNO PWA Support Proposal &middot; February 2026</p>
            </div>
            <a href="/proposal-pack.zip" download className="flex-shrink-0 flex items-center gap-3 bg-white text-[#032572] font-bold px-6 py-3.5 rounded-sm hover:bg-white/90 transition-colors text-sm tracking-wide uppercase">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V19a2 2 0 002 2h14a2 2 0 002-2v-2" />
              </svg>
              Download Proposal
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4 mb-5">
              <Image src="/Logos/mvne-white.png" alt="MVNE" width={130} height={48} style={{ width: 'auto', height: '2.5rem' }} className="object-contain" />
              <Image src="/Logos/dsg-member.png" alt="Proud member of DSG" width={150} height={44} style={{ width: 'auto', height: '2.25rem' }} className="object-contain" />
            </div>
            <p className="text-sm text-white/45 leading-relaxed">
              15 6th Street, Parkhurst, Johannesburg. Partnering with consumer-facing brands across Africa.
            </p>
            <div className="mt-5 flex flex-col gap-1">
              <p className="text-xs text-white/30">For Yellow Dot Review</p>
              <p className="text-xs text-white/30">Confidential &mdash; Not for distribution</p>
              <p className="text-xs text-white/30">Validity: 30 days from date of issue</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Proposal Sections</p>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}><a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">&nbsp;</p>
            <ul className="space-y-2 mt-6">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}><a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Proposal At a Glance</p>
            <div className="space-y-3">
              {[
                { label: 'Client', value: 'Yellow Dot' },
                { label: 'Prepared by', value: 'MVNE (Pty) Ltd' },
                { label: 'Scope', value: 'PWA Build & Support' },
                { label: 'Setup Fee', value: 'USD 12,507' },
                { label: 'Monthly', value: 'USD 4,250 / month' },
                { label: 'Support', value: '40 hrs Tier 3 / month' },
                { label: 'Dev Hours', value: '10 hrs / month' },
                { label: 'Contact', value: 'Yaron Assabi, CEO' },
              ].map((fact, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-xs text-white/30 w-24 flex-shrink-0">{fact.label}</span>
                  <span className="text-xs text-white/70 font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">&copy; 2026 MVNE (Pty) Ltd. All rights reserved. Confidential and intended solely for the named recipients.</p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/25">Prepared: 23 February 2026</span>
            <span className="text-xs text-white/15">&middot;</span>
            <a href="/proposal-pack.zip" download className="text-xs text-white/40 hover:text-white transition-colors font-medium">&darr; Proposal</a>
            <span className="text-white/15">&middot;</span>
            <Image src="/Logos/heart-DSG-white.png" alt="Made with love by DSG" width={72} height={24} style={{ width: 'auto', height: '0.75rem' }} className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  )
}
