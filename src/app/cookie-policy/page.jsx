import Link from 'next/link'
import { ChevronRight, Cookie, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Cookie Policy | Sultan GHC — Sultan Global Health Care',
  description:
    'Cookie policy for Sultan Global Health Care — how we use cookies and tracking technologies on our website, what data is collected, and how to manage your cookie preferences.',
  alternates: { canonical: 'https://www.sultanghc.com/cookie-policy' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 1, 2025'

const COOKIE_TYPES = [
  {
    type: 'Strictly Necessary Cookies',
    required: true,
    description:
      'These cookies are essential for the website to function properly. They enable core functions such as security, network management, and form submissions. You cannot opt out of these cookies as the website cannot function without them.',
    examples: [
      { name: 'Session cookies', purpose: 'Maintain your session state while navigating the site' },
      { name: 'Security cookies', purpose: 'Protect against cross-site request forgery (CSRF)' },
      { name: 'Form tokens', purpose: 'Enable secure form submissions and prevent duplicate enquiries' },
    ],
    duration: 'Session / up to 24 hours',
  },
  {
    type: 'Analytics Cookies',
    required: false,
    description:
      'These cookies help us understand how visitors interact with our website — which pages are most visited, how long visitors stay, and where they come from. This data is aggregated and anonymised and helps us improve our website and content.',
    examples: [
      { name: 'Google Analytics (_ga, _gid)', purpose: 'Track page views, sessions, and user behaviour anonymously' },
      { name: 'Performance cookies', purpose: 'Measure page load times and website performance' },
    ],
    duration: 'Up to 2 years',
  },
  {
    type: 'Functional Cookies',
    required: false,
    description:
      'These cookies allow our website to remember choices you make — such as your preferred language, region, or previously filled form fields — to provide a more personalised experience.',
    examples: [
      { name: 'Language preference', purpose: 'Remember your language or region setting' },
      { name: 'Form autofill', purpose: 'Remember contact information entered previously' },
    ],
    duration: 'Up to 1 year',
  },
  {
    type: 'Marketing Cookies',
    required: false,
    description:
      'These cookies track your browsing activity across websites to deliver more relevant advertising and measure the effectiveness of our marketing campaigns. Sultan GHC uses these sparingly and only with your consent.',
    examples: [
      { name: 'Meta Pixel (Facebook)', purpose: 'Measure ad effectiveness and enable remarketing' },
      { name: 'Google Ads cookies', purpose: 'Track conversions from Google ad campaigns' },
    ],
    duration: 'Up to 90 days',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-18">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Cookie Policy</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Cookie size={22} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Cookie Policy</h1>
              <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            This Cookie Policy explains how Sultan Global Health Care uses cookies and similar tracking
            technologies on our website. We are committed to being transparent about the data we collect
            and how we use it.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="space-y-12">

          {/* What are cookies */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
              when you visit a website. They are widely used to make websites work more efficiently, to
              remember your preferences, and to provide information to website owners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cookies do not contain personally identifiable information by themselves. However, information
              collected through cookies may be combined with other information we hold about you in accordance
              with our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </div>

          {/* Types of cookies */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
              2. Cookies We Use
            </h2>
            <div className="space-y-6">
              {COOKIE_TYPES.map(({ type, required, description, examples, duration }) => (
                <div key={type} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-base font-semibold text-gray-900">{type}</h3>
                    <span
                      className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        required
                          ? 'bg-gray-200 text-gray-600'
                          : 'bg-blue-100 text-primary'
                      }`}
                    >
                      {required ? 'Always Active' : 'Optional'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Cookie Name</th>
                          <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {examples.map(({ name, purpose }) => (
                          <tr key={name}>
                            <td className="px-4 py-2.5 text-gray-700 font-medium">{name}</td>
                            <td className="px-4 py-2.5 text-gray-500">{purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    <span className="font-semibold">Duration:</span> {duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Third party cookies */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              3. Third-Party Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Some cookies on our website are placed by third-party services. These third parties
              may collect information about your online activities over time and across different websites.
              We do not control third-party cookies and their use is governed by the respective
              third party's privacy policy.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Google Analytics', purpose: 'Website traffic and behaviour analysis', link: 'https://policies.google.com/privacy' },
                { name: 'Google Ads', purpose: 'Advertising measurement and remarketing', link: 'https://policies.google.com/privacy' },
                { name: 'Meta (Facebook) Pixel', purpose: 'Social ad campaign measurement', link: 'https://www.facebook.com/privacy/policy' },
                { name: 'WhatsApp Button', purpose: 'Click-to-chat functionality', link: 'https://www.whatsapp.com/legal/privacy-policy' },
              ].map(({ name, purpose, link }) => (
                <div key={name} className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-800 mb-1">{name}</p>
                  <p className="text-xs text-gray-500 mb-2">{purpose}</p>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    View Privacy Policy →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* How to control */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              4. How to Control and Disable Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              You have the right to decide whether to accept or reject optional cookies. You can
              exercise your cookie preferences through the following methods:
            </p>

            <div className="space-y-5">
              <div className="bg-[#EEF4FF] rounded-xl p-5 border border-blue-100">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Browser Settings</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Most browsers allow you to control cookies through their settings. You can set your
                  browser to refuse cookies or to alert you when cookies are being sent.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { browser: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                    { browser: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                    { browser: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                    { browser: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge' },
                  ].map(({ browser, url }) => (
                    <a
                      key={browser}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-center bg-white border border-blue-100 rounded-lg px-3 py-2 text-primary hover:border-primary transition-colors"
                    >
                      {browser}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Opt Out of Analytics</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To opt out of Google Analytics across all websites, you can install the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <h3 className="text-sm font-semibold text-amber-800 mb-2">Important Note</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Disabling cookies may affect the functionality of our website. Some features,
                  such as enquiry form submissions, may not work correctly if cookies are completely disabled.
                  Strictly necessary cookies cannot be disabled.
                </p>
              </div>
            </div>
          </div>

          {/* Do Not Track */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              5. Do Not Track Signals
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals your preference not
              to be tracked. Currently, there is no industry-standard response to DNT signals, and our
              website does not change its data collection practices based on DNT browser settings.
              However, you can use the cookie controls described above to limit tracking.
            </p>
          </div>

          {/* Health Information and Cookies */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              6. Health Information and Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sultan GHC does not use cookies to store, transmit, or process your health or medical
              information. Any medical reports, health records, or sensitive health data you submit
              through our enquiry forms are handled separately and securely, as described in our
              Privacy Policy — not through cookie-based tracking.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We do not use behavioral advertising cookies to target you based on health conditions
              or medical information you have shared with us.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              7. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology,
              regulations, or our practices. Any changes will be posted on this page with a revised
              "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              8. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              If you have questions about our use of cookies or this Cookie Policy:
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
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>

        </div>
      </section>
    </>
  )
}
