import Link from 'next/link'
import { ChevronRight, AlertTriangle, Shield, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Disclaimer | Sultan GHC — Sultan Global Health Care',
  description:
    'Important disclaimers from Sultan Global Health Care (SGHC). Sultan GHC is a healthcare facilitation company — not a hospital, clinic, or licensed medical provider. Read our full disclaimer before using our services.',
  alternates: { canonical: 'https://www.sultanghc.com/disclaimer' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 1, 2025'

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-18">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Disclaimer</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle size={22} className="text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Disclaimer</h1>
              <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            Please read this disclaimer carefully before using the Sultan Global Health Care website or engaging
            our services. By accessing this website, you agree to the terms set out below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="prose prose-gray max-w-none space-y-12">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              1. Sultan GHC Is Not a Healthcare Provider
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
              <p className="text-sm font-semibold text-amber-800 leading-relaxed">
                Sultan Global Health Care (SGHC) is a United States-based healthcare facilitation and
                medical tourism concierge company. We are <strong>not</strong> a hospital, clinic, medical
                center, or licensed healthcare provider of any kind.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC does not provide, practice, or deliver medical care, medical treatment, medical
              diagnosis, medical advice, surgical procedures, prescription services, or any other form of
              clinical healthcare. Our role is strictly limited to facilitating connections between patients
              and independent, internationally accredited hospitals and medical specialists abroad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All medical decisions, diagnoses, treatment plans, surgical procedures, prescriptions,
              and clinical recommendations are made solely and exclusively by the licensed medical
              professionals and accredited hospitals within our partner network. Sultan GHC has no role
              in, and assumes no responsibility for, any clinical decision made by any physician, surgeon,
              or medical facility.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              2. No Medical Advice
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              No content published on this website — including but not limited to articles, blog posts,
              treatment descriptions, cost estimates, procedure overviews, patient journey guides, or
              responses provided by our team — constitutes medical advice.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              All website content is provided for <strong>general informational and educational purposes only</strong>.
              It is not intended to be a substitute for professional medical advice, diagnosis, or treatment
              from a licensed physician.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Always seek the advice of your physician or other qualified healthcare provider regarding any
              medical condition or treatment option. Never disregard professional medical advice or delay
              seeking it because of something you have read on this website.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              3. No Doctor–Patient Relationship
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your use of this website, submission of an enquiry form, communication with a Sultan GHC
              Patient Care Coordinator, or any other interaction with Sultan GHC or its representatives
              does <strong>not</strong> create a doctor–patient relationship between you and Sultan GHC,
              its employees, or its agents.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A doctor–patient relationship is established only between you and the licensed physician
              or surgeon at the accredited partner hospital who agrees to evaluate and treat you. Sultan GHC
              employees are not medical professionals and are not qualified to provide medical guidance.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              4. No Guarantee of Treatment Outcomes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC makes no representations, warranties, or guarantees — express or implied —
              regarding the outcome of any medical treatment, surgical procedure, or healthcare service
              provided by any partner hospital or physician.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Medical outcomes are inherently uncertain and depend on many individual factors including
              the patient's age, existing health conditions, response to treatment, surgical complexity,
              and post-operative care adherence. No medical procedure is without risk.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any patient testimonials, success stories, or case references published on this website
              represent individual experiences only and are not a guarantee that any other patient will
              experience the same or similar results.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              5. Independent Partner Hospitals and Physicians
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All hospitals, medical centers, clinics, physicians, surgeons, and other healthcare
              professionals listed or referenced on this website are independent third-party entities.
              They are not employees, agents, affiliates, or subsidiaries of Sultan Global Health Care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC does not control, supervise, or direct the clinical activities, medical practices,
              quality standards, or operational decisions of any partner hospital or physician.
              Inclusion of a hospital or physician in our network does not constitute an endorsement
              of any specific clinical outcome or guarantee of quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Patients are encouraged to conduct their own due diligence, including reviewing hospital
              accreditation credentials, physician qualifications, and independent patient reviews
              before making any treatment decision.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              6. Cost Estimates Are Approximate
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All treatment cost estimates, cost comparisons, and price ranges published on this website
              are approximate figures provided for general informational purposes only. Actual costs
              will vary based on individual patient condition, procedure complexity, choice of hospital,
              length of stay, implant or device selection, and other clinical factors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC will provide a personalised, itemised cost estimate based on your specific
              medical reports and chosen hospital prior to your travel. Final costs are determined
              by the treating hospital and may differ from initial estimates.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              7. International Travel and Medical Risk
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Traveling abroad for medical treatment involves inherent risks including, but not limited
              to, risks associated with air travel, unfamiliar environments, different food and water
              conditions, infectious disease exposure, and the challenges of post-operative recovery
              in a foreign country.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC strongly recommends that all patients consult with their primary care physician
              or cardiologist before undertaking international travel for medical purposes to confirm
              that travel is medically appropriate for their current condition.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC is not responsible for any complications, injuries, adverse events, or losses
              arising from or in connection with international travel, regardless of cause.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, Sultan Global Health Care, its owners,
              officers, employees, agents, and representatives shall not be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Your use of or reliance on any information provided on this website',
                'Any medical treatment, procedure, or service provided by a partner hospital or physician',
                'Any failure, error, or omission by a partner hospital or physician',
                'Any complications, adverse events, or unsatisfactory outcomes from medical treatment',
                'International travel undertaken for medical purposes',
                'Delays, cancellations, or changes in travel arrangements',
                'Loss of medical records or data by a third party',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC's total liability to any patient, in any circumstances, shall not exceed
              the facilitation fees paid to Sultan GHC by that patient for the specific engagement
              giving rise to the claim.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              9. No Insurance or Financial Advice
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nothing on this website constitutes financial, insurance, tax, or legal advice.
              Sultan GHC does not verify whether any treatment will be covered by any U.S. insurance
              policy, Medicare, Medicaid, or any other health plan. Patients are responsible for
              independently verifying coverage with their insurer prior to travel.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              10. Third-Party Links and Content
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This website may contain links to third-party websites, hospital websites, or external
              resources. Sultan GHC does not endorse, control, or assume responsibility for the content,
              accuracy, or practices of any third-party website. Accessing third-party links is done
              entirely at your own risk.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              11. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This disclaimer is governed by and construed in accordance with the laws of the Commonwealth
              of Pennsylvania, United States of America, without regard to its conflict of law provisions.
              Any disputes arising in connection with this disclaimer shall be subject to the exclusive
              jurisdiction of the courts of Pennsylvania.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              12. Changes to This Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC reserves the right to modify this disclaimer at any time without prior notice.
              Your continued use of this website following any changes constitutes your acceptance of
              the revised disclaimer. We encourage you to review this page periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={18} className="text-primary" />
              <h2 className="text-base font-semibold text-gray-900">Questions About This Disclaimer?</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If you have any questions about this disclaimer or Sultan GHC's role as a healthcare
              facilitator, please contact our team:
            </p>
            <div className="space-y-2">
              <a href="mailto:info@sultanghc.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail size={14} /> info@sultanghc.com
              </a>
              <a href="tel:+16107870713" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Phone size={14} /> +1-610-787-0713
              </a>
            </div>
          </div>

          {/* Links to other legal pages */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>

        </div>
      </section>
    </>
  )
}
