import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

/**
 * MedicalReviewBadge
 * Displays an E-E-A-T medical review attribution strip on YMYL treatment pages.
 *
 * Usage:
 *   <MedicalReviewBadge date="October 2, 2026" />
 */
export default function MedicalReviewBadge({ date = 'October 2, 2026' }) {
  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3">
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-gray-500">
          <ShieldCheck size={15} className="text-primary shrink-0" aria-hidden="true" />
          <span>
            Medically reviewed by{' '}
            <Link
              href="/our-team"
              className="font-semibold text-gray-700 hover:text-primary transition-colors underline underline-offset-2 decoration-gray-300 hover:decoration-primary"
            >
              Dr. Nasar A. Sultan, MD
            </Link>
            {' '}· Medical Director, Sultan GHC
          </span>
          <span className="text-gray-300 hidden sm:inline" aria-hidden="true">·</span>
          <time
            dateTime={new Date(date).toISOString().split('T')[0]}
            className="text-gray-400 hidden sm:inline"
          >
            Reviewed {date}
          </time>
        </div>
      </div>
    </div>
  )
}
