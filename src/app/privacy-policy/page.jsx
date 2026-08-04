import Link from 'next/link'
import { ChevronRight, Lock, Phone, Mail, Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Sultan GHC — Sultan Global Health Care',
  description:
    'Sultan Global Health Care privacy policy — how we collect, use, store, and protect your personal and health information. Covers HIPAA context, CCPA rights, and international data transfers.',
  alternates: { canonical: 'https://www.sultanghc.com/privacy-policy' },
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

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-18">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Privacy Policy</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Lock size={22} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            Sultan Global Health Care ("Sultan GHC," "we," "us," or "our") is committed to protecting your
            personal information and health data. This Privacy Policy explains how we collect, use, share,
            and safeguard information when you visit our website or use our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="space-y-12">

          <Section number="1" title="Who We Are">
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan Global Health Care (SGHC) is a United States-based healthcare facilitation and
              medical tourism concierge company. We are incorporated and operate in the United States.
              Our services connect U.S. patients with internationally accredited hospitals and medical
              specialists in India and Turkey.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sultan GHC is not a hospital, clinic, or licensed healthcare provider. We are a concierge
              and facilitation service. However, in the course of providing our services, we may receive,
              process, and transmit health-related information on your behalf.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mt-4 text-sm text-gray-500">
              <strong className="text-gray-700">Data Controller:</strong> Sultan Global Health Care<br />
              <strong className="text-gray-700">Contact:</strong> info@sultanghc.com | +1-610-787-0713
            </div>
          </Section>

          <Section number="2" title="Information We Collect">
            <p className="text-gray-600 leading-relaxed mb-5">
              We collect information in the following categories:
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'A. Personal Identification Information',
                  items: ['Full name', 'Email address', 'Phone number', 'Country and city of residence', 'Nationality'],
                },
                {
                  title: 'B. Health and Medical Information',
                  items: [
                    'Medical condition or diagnosis',
                    'Uploaded medical reports, scans, lab results, and pathology records',
                    'Treatment history and current medications',
                    'Surgical history',
                    'Medical enquiry details you choose to share',
                  ],
                  note: 'This information is collected only with your explicit consent when you submit an enquiry or upload reports.',
                },
                {
                  title: 'C. Technical and Usage Data',
                  items: [
                    'IP address and approximate location',
                    'Browser type and version',
                    'Pages visited and time spent',
                    'Referring website',
                    'Device type and operating system',
                  ],
                },
                {
                  title: 'D. Communication Records',
                  items: [
                    'Emails, WhatsApp messages, and enquiry form submissions',
                    'Records of consultations with our Patient Care Coordinators',
                    'Feedback or reviews you provide',
                  ],
                },
              ].map(({ title, items, note }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">{title}</h3>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {note && <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mt-3">{note}</p>}
                </div>
              ))}
            </div>
          </Section>

          <Section number="3" title="How We Use Your Information">
            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Evaluate your medical case and connect you with appropriate hospitals and specialists',
                'Facilitate free second medical opinions from our partner physicians',
                'Prepare personalised treatment cost estimates',
                'Coordinate your travel, visa invitation letters, and accommodation',
                'Communicate with partner hospitals on your behalf (with your consent)',
                'Respond to your enquiries and provide ongoing patient support',
                'Send service-related communications (appointment confirmations, document requests)',
                'Improve our website and services through anonymised analytics',
                'Comply with applicable legal obligations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We will <strong>not</strong> use your medical information for marketing purposes or
              share it with third parties for advertising without your express consent.
            </p>
          </Section>

          <Section number="4" title="Legal Basis for Processing">
            <p className="text-gray-600 leading-relaxed mb-4">
              We process your personal information on the following legal bases:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { basis: 'Consent', desc: 'You provide explicit consent when submitting your medical reports or enquiry form.' },
                { basis: 'Contract Performance', desc: 'Processing necessary to deliver the facilitation services you requested.' },
                { basis: 'Legitimate Interest', desc: 'Improving our services, preventing fraud, and maintaining security.' },
                { basis: 'Legal Obligation', desc: 'Compliance with applicable U.S. laws and regulations.' },
              ].map(({ basis, desc }) => (
                <div key={basis} className="bg-[#EEF4FF] rounded-xl p-4 border border-blue-100">
                  <p className="text-sm font-semibold text-primary mb-1">{basis}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section number="5" title="Health Information & HIPAA Context">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Important:</strong> Sultan GHC is a healthcare facilitation company operating
                in the United States. While we are not a Covered Entity under HIPAA (as we are not
                a healthcare provider, health plan, or healthcare clearinghouse), we handle your
                health information with the same care and security standards that HIPAA requires.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your medical reports and health information are:
            </p>
            <ul className="space-y-2">
              {[
                'Shared only with partner hospitals and physicians you specifically authorize us to approach on your behalf',
                'Never sold, rented, or shared with marketers, insurers, or employers',
                'Stored securely using industry-standard encryption',
                'Accessible only to authorized Sultan GHC team members with a legitimate need to review them',
                'Transmitted to partner hospitals via secure channels',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="6" title="International Data Transfers">
            <p className="text-gray-600 leading-relaxed mb-4">
              To facilitate your medical treatment abroad, we will necessarily share relevant portions
              of your medical information with partner hospitals and physicians in India and Turkey.
              These transfers occur only with your explicit consent.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our partner hospitals in India and Turkey are bound by their national healthcare privacy
              laws and international accreditation standards (JCI). We require contractual commitments
              from our partners to maintain appropriate data security and confidentiality.
            </p>
          </Section>

          <Section number="7" title="Data Retention">
            <p className="text-gray-600 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services
              and comply with legal obligations:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-5 py-3 font-semibold text-gray-700">Data Type</th>
                    <th className="text-left px-5 py-3 font-semibold text-gray-700">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Contact information (name, email, phone)', '5 years from last contact'],
                    ['Medical reports and health information', '7 years from date of receipt'],
                    ['Enquiry and communication records', '5 years from last interaction'],
                    ['Website analytics data', '26 months (anonymised after 14 months)'],
                    ['Financial transaction records', '7 years (U.S. legal requirement)'],
                  ].map(([type, period]) => (
                    <tr key={type}>
                      <td className="px-5 py-3 text-gray-700">{type}</td>
                      <td className="px-5 py-3 text-gray-500">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section number="8" title="Your Rights Under U.S. Law (CCPA)">
            <p className="text-gray-600 leading-relaxed mb-5">
              If you are a California resident, the California Consumer Privacy Act (CCPA) grants you
              specific rights regarding your personal information:
            </p>
            <div className="space-y-4">
              {[
                { right: 'Right to Know', desc: 'You may request a copy of the personal information we hold about you and details of how it is used and shared.' },
                { right: 'Right to Delete', desc: 'You may request deletion of your personal information, subject to certain exceptions required by law.' },
                { right: 'Right to Correct', desc: 'You may request correction of inaccurate personal information we hold about you.' },
                { right: 'Right to Opt-Out of Sale', desc: 'Sultan GHC does not sell your personal information. We will never sell your data to third parties.' },
                { right: 'Right to Non-Discrimination', desc: 'We will not discriminate against you for exercising any of your privacy rights.' },
              ].map(({ right, desc }) => (
                <div key={right} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{right}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-5">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@sultanghc.com" className="text-primary hover:underline">info@sultanghc.com</a>.
              We will respond within 45 days as required by law.
            </p>
          </Section>

          <Section number="9" title="Cookies and Tracking Technologies">
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to improve your experience on our website.
              For full details on what cookies we use and how to control them, please review our{' '}
              <Link href="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link>.
            </p>
          </Section>

          <Section number="10" title="Data Security">
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information from
              unauthorized access, disclosure, alteration, and destruction, including:
            </p>
            <ul className="space-y-2">
              {[
                'SSL/TLS encryption for all data in transit',
                'Encrypted storage for sensitive medical documents',
                'Access controls limiting data access to authorized personnel only',
                'Regular security reviews and staff data-handling training',
                'Secure deletion of data upon request or at end of retention period',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              No method of transmission over the internet is 100% secure. While we use commercially
              reasonable measures to protect your information, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section number="11" title="Children's Privacy">
            <p className="text-gray-600 leading-relaxed">
              Our website and services are not directed to children under the age of 13. We do not
              knowingly collect personal information from children under 13. If you believe we have
              inadvertently collected information from a child under 13, please contact us immediately
              at info@sultanghc.com and we will promptly delete such information.
            </p>
          </Section>

          <Section number="12" title="Third-Party Services">
            <p className="text-gray-600 leading-relaxed mb-4">
              Our website may use third-party services including analytics providers, email platforms,
              and communication tools. These third parties have their own privacy policies and we
              encourage you to review them. We do not control their data practices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We may share aggregated, de-identified, non-personal information with third parties
              for analytics and business improvement purposes. This information cannot be used to
              identify any individual.
            </p>
          </Section>

          <Section number="13" title="Changes to This Privacy Policy">
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices
              or legal requirements. We will notify you of material changes by posting the updated
              policy on this page with a revised "Last Updated" date. Your continued use of our
              services after changes are posted constitutes acceptance of the updated policy.
              We encourage you to review this policy regularly.
            </p>
          </Section>

          <Section number="14" title="Contact Us">
            <p className="text-gray-600 leading-relaxed mb-5">
              For any privacy-related questions, requests to access or delete your data, or concerns
              about how we handle your information, please contact us:
            </p>
            <div className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100">
              <p className="text-sm font-semibold text-gray-800 mb-4">Sultan Global Health Care — Privacy Team</p>
              <div className="space-y-2">
                <a href="mailto:info@sultanghc.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail size={14} /> info@sultanghc.com
                </a>
                <a href="tel:+16107870713" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Phone size={14} /> +1-610-787-0713
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We will respond to all privacy requests within 45 days. For urgent matters, please call directly.
              </p>
            </div>
          </Section>

          {/* Legal links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>

        </div>
      </section>
    </>
  )
}
