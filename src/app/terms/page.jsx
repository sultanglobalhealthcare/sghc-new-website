import Link from 'next/link'
import { ChevronRight, FileText, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | Sultan GHC — Sultan Global Health Care',
  description:
    'Terms and conditions governing your use of Sultan Global Health Care services. Sultan GHC is a healthcare facilitation company — not a medical provider. Read these terms carefully before engaging our services.',
  alternates: { canonical: 'https://www.sultanghc.com/terms' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 1, 2025'

function Section({ number, title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
        {number}. {title}
      </h2>
      {children}
    </div>
  )
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-18">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Terms &amp; Conditions</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText size={22} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Please read these Terms carefully.</strong> By accessing our website or using
              Sultan GHC's services, you agree to be bound by these Terms and Conditions. If you do
              not agree, please do not use our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="space-y-12">

          <Section number="1" title="Definitions">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { term: '"Sultan GHC" / "We" / "Us"', def: 'Sultan Global Health Care, a healthcare facilitation company incorporated in the United States.' },
                { term: '"Services"', def: 'Healthcare facilitation, case coordination, medical tourism concierge, and related services provided by Sultan GHC.' },
                { term: '"Patient" / "You"', def: 'Any individual who accesses our website or engages Sultan GHC\'s services for themselves or on behalf of another person.' },
                { term: '"Partner Hospitals"', def: 'Independent, internationally accredited hospitals and medical facilities in India and Turkey with whom Sultan GHC has referral arrangements.' },
                { term: '"Partner Physicians"', def: 'Independent licensed medical doctors and specialists affiliated with partner hospitals.' },
                { term: '"Website"', def: 'www.sultanghc.com and all associated subdomains, pages, and digital properties.' },
              ].map(({ term, def }) => (
                <div key={term} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-xs font-semibold text-primary mb-1">{term}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{def}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section number="2" title="Nature of Services — Facilitation Only">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Critical Understanding:</strong> Sultan GHC is a healthcare facilitation and
                concierge company. We are not a hospital, medical clinic, healthcare provider, or
                licensed medical professional. We do not practice medicine or provide medical services.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC's services are limited to:
            </p>
            <ul className="space-y-2 mb-5">
              {[
                'Evaluating your medical enquiry and identifying suitable partner hospitals and physicians',
                'Facilitating free second medical opinions from our network specialists',
                'Preparing non-binding treatment cost estimates based on information provided',
                'Coordinating communication between you and partner hospitals (with your consent)',
                'Assisting with medical visa invitation letters and travel planning guidance',
                'Providing on-ground coordination support during your treatment abroad',
                'Facilitating post-treatment follow-up communication with your treating physician',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              All clinical decisions — including diagnosis, treatment plans, surgical procedures, and
              prescriptions — are made exclusively by the licensed physicians and accredited hospitals
              you choose to engage. Sultan GHC has no clinical role in your treatment.
            </p>
          </Section>

          <Section number="3" title="Eligibility">
            <p className="text-gray-600 leading-relaxed mb-4">
              By using our services, you represent and warrant that:
            </p>
            <ul className="space-y-2">
              {[
                'You are at least 18 years of age, or accessing our services with the consent of a parent or legal guardian',
                'You have the legal capacity to enter into a binding agreement',
                'All information you provide to Sultan GHC is accurate, complete, and current',
                'You are using our services for lawful personal healthcare facilitation purposes only',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="4" title="Patient Responsibilities">
            <p className="text-gray-600 leading-relaxed mb-4">As a patient engaging Sultan GHC's services, you agree to:</p>
            <ul className="space-y-2">
              {[
                'Provide accurate, complete, and truthful medical history and records',
                'Consult with your primary care physician or specialist in the U.S. before finalising any decision to travel abroad for medical treatment',
                'Make all final treatment decisions based on advice from licensed physicians — not Sultan GHC',
                'Obtain adequate medical travel insurance before traveling',
                'Follow pre-travel and post-operative instructions provided by your treating physician',
                'Promptly inform Sultan GHC and your treating hospital of any changes in your medical condition',
                'Understand that Sultan GHC cannot guarantee that any specific treatment will be suitable, available, or approved for you',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="5" title="Independent Partner Hospitals and Physicians">
            <p className="text-gray-600 leading-relaxed mb-4">
              All partner hospitals and physicians recommended or introduced by Sultan GHC are
              independent third parties. They are not employees, agents, or contractors of Sultan GHC.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC does not control, supervise, direct, or assume responsibility for the medical
              decisions, clinical standards, negligence, malpractice, errors, omissions, or any acts
              of any partner hospital or physician.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any dispute regarding the quality of medical treatment, malpractice claims, or adverse
              outcomes must be pursued directly against the treating hospital or physician under
              the laws of the country in which treatment was provided.
            </p>
          </Section>

          <Section number="6" title="Fees and Payment">
            <p className="text-gray-600 leading-relaxed mb-4">
              Many of Sultan GHC's initial services — including case review, second opinion coordination,
              and cost estimation — are provided at no charge to the patient.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Where Sultan GHC charges a facilitation fee for coordination and concierge services,
              the fee structure will be clearly disclosed to you in writing before you commit.
              No fee will be charged without your explicit written agreement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Treatment costs are paid directly to the treating hospital in accordance with that
              hospital's payment policies. Sultan GHC does not collect payment on behalf of hospitals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Refund Policy:</strong> Facilitation fees paid to Sultan GHC are refundable
              within 7 days of payment if no services have been rendered. After service commencement,
              refunds are assessed on a case-by-case basis and are not guaranteed.
            </p>
          </Section>

          <Section number="7" title="No Medical Advice or Guarantees">
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC expressly disclaims any representation, warranty, or guarantee regarding:
            </p>
            <ul className="space-y-2">
              {[
                'The suitability of any treatment or hospital for your specific medical condition',
                'The accuracy or completeness of any second opinion provided by network physicians',
                'The outcome of any medical procedure or treatment',
                'The accuracy of cost estimates (which are approximations and subject to change)',
                'Visa approval or travel clearance for any destination',
                'The continued availability of any partner hospital or physician',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="8" title="Medical Travel Insurance">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Sultan GHC strongly recommends</strong> that all patients obtain comprehensive
                medical travel insurance prior to traveling abroad for medical treatment. This should
                include coverage for medical complications, emergency evacuation, trip cancellation,
                and repatriation. Sultan GHC does not provide insurance and is not responsible for
                any uninsured medical, travel, or related costs.
              </p>
            </div>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <p className="text-gray-600 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, Sultan GHC shall not be liable
              for any:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Medical malpractice, negligence, or errors by partner hospitals or physicians',
                'Adverse medical outcomes, complications, or treatment failures',
                'Losses arising from international travel',
                'Visa denials or travel complications',
                'Loss, theft, or damage to personal property',
                'Reliance on information provided on our website',
                'Interruption or unavailability of our services',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC's total aggregate liability shall not exceed the facilitation fees actually
              paid by you to Sultan GHC for the specific service giving rise to the claim.
            </p>
          </Section>

          <Section number="10" title="Indemnification">
            <p className="text-gray-600 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Sultan Global Health Care, its officers,
              employees, agents, and representatives from any claims, damages, losses, liabilities,
              costs, or expenses (including reasonable legal fees) arising from your use of our services,
              your violation of these Terms, or your provision of false, inaccurate, or misleading
              medical information.
            </p>
          </Section>

          <Section number="11" title="Intellectual Property">
            <p className="text-gray-600 leading-relaxed mb-4">
              All content on this website — including text, graphics, logos, icons, images, audio
              clips, data compilations, and software — is the property of Sultan Global Health Care
              or its content suppliers and is protected by United States and international copyright laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may access and print content from this website for your personal, non-commercial
              use only. You may not reproduce, distribute, modify, create derivative works, publicly
              display, or commercially exploit any content without prior written permission from Sultan GHC.
            </p>
          </Section>

          <Section number="12" title="Privacy">
            <p className="text-gray-600 leading-relaxed">
              Your use of Sultan GHC's services is also governed by our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>,
              which is incorporated into these Terms by reference. By accepting these Terms, you also
              agree to our Privacy Policy.
            </p>
          </Section>

          <Section number="13" title="Website Use and Prohibited Conduct">
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="space-y-2">
              {[
                'Use our website for any unlawful or fraudulent purpose',
                'Submit false or misleading medical information',
                'Attempt to gain unauthorized access to our systems or data',
                'Use automated tools to scrape, crawl, or extract data from our website without permission',
                'Impersonate Sultan GHC, its employees, or any other person or entity',
                'Transmit any malware, viruses, or harmful code through our website or communication channels',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="14" title="Governing Law and Dispute Resolution">
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms and Conditions are governed by and construed in accordance with the laws of
              the Commonwealth of Pennsylvania, United States of America, without regard to its conflict
              of laws principles.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Dispute Resolution:</strong> Any dispute arising from these Terms or your use of
              Sultan GHC's services shall first be attempted to be resolved through good-faith negotiation.
              If unresolved within 30 days, disputes shall be submitted to binding arbitration administered
              by the American Arbitration Association (AAA) in Pennsylvania, under its Commercial Arbitration Rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Class Action Waiver:</strong> You agree that any dispute resolution will be conducted
              on an individual basis only, and you waive any right to participate in a class action lawsuit
              or class-wide arbitration against Sultan GHC.
            </p>
          </Section>

          <Section number="15" title="Modifications to These Terms">
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC reserves the right to modify these Terms at any time. Changes will be posted
              on this page with a revised "Last Updated" date. Your continued use of our website or
              services following the posting of updated Terms constitutes your acceptance of those changes.
              If material changes are made, we will make reasonable efforts to notify active clients
              via email.
            </p>
          </Section>

          <Section number="16" title="Severability">
            <p className="text-gray-600 leading-relaxed">
              If any provision of these Terms is found to be unlawful, void, or unenforceable, that
              provision will be deemed severable and will not affect the validity and enforceability
              of the remaining provisions.
            </p>
          </Section>

          <Section number="17" title="Entire Agreement">
            <p className="text-gray-600 leading-relaxed">
              These Terms, together with our Privacy Policy, Cookie Policy, and Disclaimer, constitute
              the entire agreement between you and Sultan GHC with respect to your use of our website
              and services, and supersede all prior agreements, understandings, and representations.
            </p>
          </Section>

          <Section number="18" title="Contact Us">
            <p className="text-gray-600 leading-relaxed mb-5">
              For questions about these Terms and Conditions:
            </p>
            <div className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100">
              <p className="text-sm font-semibold text-gray-800 mb-4">Sultan Global Health Care</p>
              <div className="space-y-2">
                <a href="mailto:info@sultanghc.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail size={14} /> info@sultanghc.com
                </a>
                <a href="tel:+16107870713" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Phone size={14} /> +1-610-787-0713
                </a>
              </div>
            </div>
          </Section>

          {/* Legal links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>

        </div>
      </section>
    </>
  )
}
