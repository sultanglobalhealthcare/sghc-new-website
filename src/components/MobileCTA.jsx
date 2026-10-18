'use client'

import Link from 'next/link'
import { pushWhatsAppClick, pushPhoneCall } from '@/lib/gtm'

/**
 * MobileCTA — sticky bottom bar visible only on mobile (< md)
 * Two equal CTAs: "Free Opinion" → /enquiry  |  WhatsApp icon → wa.me
 */
export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden"
      aria-label="Quick contact options"
    >
      {/* Soft shadow above the bar */}
      <div className="h-2 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

      <div className="flex items-stretch bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.10)]">

        {/* Primary CTA — Get Free Opinion */}
        <Link
          href="/enquiry"
          className="flex-1 flex items-center justify-center gap-2 min-h-[52px] bg-[#4793F3] text-white text-[15px] font-semibold tracking-tight active:bg-blue-600 transition-colors"
          aria-label="Request a free medical opinion"
        >
          {/* Stethoscope icon */}
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Get Free Opinion
        </Link>

        {/* Divider */}
        <div className="w-px bg-blue-200 self-stretch" aria-hidden="true" />

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/16107870713"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pushWhatsAppClick({ location: 'mobile_cta_bar' })}
          className="flex items-center justify-center gap-2 px-5 min-h-[52px] min-w-[52px] text-green-600 bg-white active:bg-green-50 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-[13px] font-semibold">WhatsApp</span>
        </a>

      </div>

      {/* Safe-area bottom padding (iOS home indicator) */}
      <div className="bg-white h-[env(safe-area-inset-bottom,0px)]" aria-hidden="true" />
    </div>
  )
}
