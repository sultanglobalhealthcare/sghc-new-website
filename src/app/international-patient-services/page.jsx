import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  FileText,
  Stethoscope,
  DollarSign,
  Plane,
  Hotel,
  Globe2,
  RefreshCw,
  Users,
  ShieldCheck,
  HeartHandshake,
  Phone,
  ImageIcon,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'International Patient Services | Sultan GHC | End-to-End Medical Tourism Support',
  description:
    'Sultan GHC provides complete international patient services for Americans seeking treatment in India and Türkiye — including medical case evaluation, hospital & doctor matching, travel coordination, visa assistance, interpreter support, accommodation, and post-treatment follow-up. Free first medical opinion in 24 hours.',
  keywords: [
    'international patient services',
    'medical tourism support USA',
    'patient services India Türkiye',
    'medical tourism concierge USA',
    'healthcare coordinator abroad',
    'case management medical tourism',
    'hospital doctor matching India Türkiye',
    'medical travel coordination Americans',
    'visa assistance medical tourism',
    'post treatment follow up abroad',
    'interpreter support hospital India',
    'medical records transfer abroad',
    'Sultan GHC patient services',
  ],
  openGraph: {
    title: 'International Patient Services | Sultan GHC',
    description:
      'Sultan GHC manages every detail of your international medical journey — from your first medical opinion to your safe return home. Free evaluation within 24 hours.',
    url: 'https://www.sultanghc.com/international-patient-services',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [{ url: 'https://www.sultanghc.com/api/og?title=International+Patient+Services&desc=End-to-end+care+coordination+for+U.S.+patients+seeking+treatment+in+India+%26+Türkiye.&cat=Services', width: 1200, height: 630, alt: 'International Patient Services — Sultan GHC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Patient Services | Sultan GHC',
    description: 'End-to-end healthcare facilitation for Americans seeking treatment in India and Türkiye.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/international-patient-services' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'International Patient Services', item: 'https://www.sultanghc.com/international-patient-services' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'International Patient Services',
  description: 'Sultan GHC provides comprehensive international patient services for Americans seeking medical treatment in India and Türkiye.',
  url: 'https://www.sultanghc.com/international-patient-services',
  provider: {
    '@type': 'Organization',
    name: 'Sultan Global Health Care',
    url: 'https://www.sultanghc.com',
    telephone: '+1-610-787-0713',
    email: 'info@sultanghc.com',
  },
}

// ─── Image Placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
      aria-label={label}
      role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-blue-400 shrink-0" />
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-blue-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Size:</span>
        <span className="text-[10px] font-bold text-gray-600">{width} × {height} px</span>
      </div>
      <p className="text-[10px] font-semibold text-blue-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

// ─── Services Data ────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Medical Case Evaluation',
    color: 'bg-blue-50 text-blue-600',
    summary: 'Free specialist review of your diagnosis, test results, and imaging within 24 hours.',
    details: [
      'Submit your medical reports, scans, and doctor notes through our secure portal',
      'Our clinical team reviews your case and connects with the right specialist',
      'You receive a written clinical assessment and recommended treatment plan',
      'No obligation — completely free and confidential',
    ],
  },
  {
    icon: Users,
    title: 'Hospital & Doctor Matching',
    color: 'bg-violet-50 text-violet-600',
    summary: 'Shortlisted JCI-accredited hospitals and fellowship-trained specialists for your specific condition.',
    details: [
      'We recommend hospitals based on your diagnosis, budget, and preferred destination',
      'All hospitals in our network hold JCI or equivalent international accreditation',
      'Specialist profiles shared with credentials, training, and patient outcomes',
      'Multiple options presented — you choose who treats you',
    ],
  },
  {
    icon: DollarSign,
    title: 'Treatment Cost Estimation',
    color: 'bg-emerald-50 text-emerald-600',
    summary: 'A transparent, itemised cost estimate before you commit — no hidden charges.',
    details: [
      'Surgical fees, hospital stay, diagnostics, and post-op care all included',
      'Side-by-side comparison of India vs. Türkiye vs. U.S. pricing',
      'Written cost estimate provided before any commitment',
      'No surprise billing — what we quote is what you pay',
    ],
  },
  {
    icon: FileText,
    title: 'Medical Records Management',
    color: 'bg-amber-50 text-amber-600',
    summary: 'We compile, translate, and transmit your records to your treating hospital correctly.',
    details: [
      'Collection and review of all relevant medical documentation',
      'Translation of records to English or local hospital requirements',
      'Secure digital transmission to the treating specialist and hospital',
      'Digital archive maintained for post-treatment follow-up',
    ],
  },
  {
    icon: Plane,
    title: 'Travel Coordination',
    color: 'bg-cyan-50 text-cyan-600',
    summary: 'Flights, airport transfers, and local transport — arranged by your dedicated Case Manager.',
    details: [
      'Flight booking assistance and itinerary planning',
      'Private airport pickup and drop-off at your hospital destination',
      'Local transport between hospital, hotel, and recovery facility',
      'Travel insurance guidance for international medical trips',
    ],
  },
  {
    icon: Hotel,
    title: 'Accommodation Assistance',
    color: 'bg-rose-50 text-rose-600',
    summary: 'Comfortable accommodation near the hospital for you and accompanying family members.',
    details: [
      'Pre-vetted hotels and serviced apartments near partner hospitals',
      'Special patient rates negotiated on your behalf',
      'Accommodation for family members and companions',
      'Extended stay options for longer recovery periods',
    ],
  },
  {
    icon: Globe2,
    title: 'Visa & Entry Guidance',
    color: 'bg-blue-50 text-blue-600',
    summary: 'Medical visa support letters and entry guidance for India and Türkiye.',
    details: [
      'Medical visa invitation letters from partner hospitals',
      'Guidance on Indian Medical Visa and Turkish e-Visa requirements',
      'Document checklist for U.S. passport holders',
      'Support with immigration questions at point of entry',
    ],
  },
  {
    icon: Users,
    title: 'Interpreter & Language Support',
    color: 'bg-violet-50 text-violet-600',
    summary: 'English-speaking coordinators and interpreters throughout your hospital stay.',
    details: [
      'On-call English interpreter during consultations and procedures',
      'Hospital coordinator assigned from arrival to discharge',
      'Translation of discharge summaries and post-op instructions',
      'WhatsApp and phone support throughout your stay',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Post-Treatment Follow-Up',
    color: 'bg-emerald-50 text-emerald-600',
    summary: 'Remote check-ins and continuity of care with providers near your home in the U.S.',
    details: [
      'Scheduled follow-up calls with your treating specialist via video',
      'Discharge summary and medical records forwarded to your U.S. physician',
      'Assistance coordinating local follow-up care on your return',
      'Ongoing support — we remain your contact well after you are home',
    ],
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InternationalPatientServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">International Patient Services</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Patient Services
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                We Handle Every Detail.<br />
                <span className="text-primary">You Focus on Getting Better.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Sultan GHC provides end-to-end support for American patients seeking medical treatment
                in India and Türkiye. From your first medical opinion to your post-treatment follow-up
                back home — your dedicated Case Manager coordinates every step.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                You will never have to navigate a foreign hospital system alone. We have done this
                before — and we are here to make your experience safe, clear, and supported at every moment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Get My Free Medical Evaluation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="sultan-ghc-international-patient-services-coordinator-us-patients-india-turkey.jpg"
                width={1200}
                height={900}
                label="Sultan GHC Case Manager helping a U.S. patient plan their international medical journey"
                aiPrompt="Professional editorial photography: A friendly, professional female healthcare coordinator (30s, business casual attire) sitting across a desk from an American patient couple (60s). She is reviewing a tablet showing hospital options. On the desk are medical folders, a laptop showing hospital images, and a world map with India and Türkiye highlighted. The setting is a clean, bright modern office. Warm, reassuring lighting. Photorealistic, Canon R5, natural light."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: ShieldCheck,    text: 'JCI-Accredited Hospital Network' },
              { icon: HeartHandshake, text: 'Dedicated Case Manager for Every Patient' },
              { icon: Globe2,         text: 'India & Türkiye Specialists' },
              { icon: Phone,          text: '24-Hour First Medical Opinion' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon size={16} className="text-primary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            What We Cover
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Every Service You Need. One Team. One Point of Contact.
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From medical evaluation to your flight home — Sultan GHC handles the coordination
            so you do not have to figure out a foreign healthcare system on your own.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, color, summary, details }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{summary}</p>
              <div className="space-y-2 border-t border-gray-100 pt-4">
                {details.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Your Journey from Enquiry to Recovery
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Most patients go from first enquiry to confirmed treatment plan within 5–7 business days.
              Here is what that looks like.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" />

            {[
              { step: '01', title: 'Submit Your Case',        desc: 'Share your medical reports, scans, and condition details through our secure online form or WhatsApp. Completely free and confidential.' },
              { step: '02', title: 'Get Your Medical Opinion', desc: 'Within 24 hours, receive a clinical assessment, specialist recommendation, and treatment plan — with no obligation to proceed.' },
              { step: '03', title: 'Review Your Options',      desc: 'We present matched hospitals, doctors, and itemised cost estimates for India and Türkiye. You choose what is right for you.' },
              { step: '04', title: 'We Coordinate Everything', desc: 'Once you confirm, your Case Manager handles travel, accommodation, hospital appointments, and every detail until you are safely home.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative z-10 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/25">
                  {step}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
            >
              See the full process in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Help ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Who We Help
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              If U.S. Healthcare Has Let You Down, We Are Here to Help
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Sultan GHC supports American patients who are facing real barriers to getting the
              care they need — whether that is cost, wait times, limited insurance coverage, or
              the need for a genuine second opinion.
            </p>
            <div className="space-y-3">
              {[
                'Patients facing surgical costs of $30,000 or more in the U.S.',
                'Uninsured or underinsured individuals who need major treatment',
                'Patients on waiting lists of 6 months or longer',
                'Anyone seeking a credible second opinion from an internationally trained specialist',
                'Families researching affordable options for elderly parents',
                'Employers exploring cost-effective healthcare solutions for employees',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              filename="american-patient-medical-tourism-india-turkey-sultan-ghc-support.jpg"
              width={1200}
              height={900}
              label="American patient benefiting from affordable, high-quality medical care abroad through Sultan GHC"
              aiPrompt="Warm, optimistic editorial photography: An American man (50s-60s) on a video call on his laptop, smiling with obvious relief. He is in a comfortable living room setting. The laptop screen shows a friendly doctor in a white coat in a modern hospital environment. On the coffee table is a medical folder and a printout of a cost comparison. Natural daylight. Authentic, not stock-photo-staged. Photorealistic, Canon R5."
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section className="bg-[#EEF4FF] border-y border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Our International Patient Services Cover Two Destinations
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              All our support services apply fully in both India and Türkiye — with destination-specific
              coordinators in each country who understand the local hospital systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                flag: 'in',
                country: 'India',
                href: '/destinations/india',
                points: [
                  'Hospitals in Delhi, Mumbai, Chennai, Bengaluru, Hyderabad',
                  'English widely spoken in all major hospitals',
                  'Medical Visa available for U.S. passport holders',
                  '60–90% savings vs. U.S. treatment costs',
                ],
              },
              {
                flag: 'tr',
                country: 'Türkiye',
                href: '/destinations/turkey',
                points: [
                  'Hospitals in Istanbul, Ankara, Antalya, and Izmir',
                  'European-standard care and accreditation',
                  'e-Visa for U.S. citizens — fast and simple process',
                  'Direct flights from major U.S. East Coast hubs',
                ],
              },
            ].map(({ flag, country, href, points }) => (
              <div key={country} className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <img src={`https://flagcdn.com/40x30/${flag}.png`} width={40} height={30} alt={country} className="rounded shadow-sm" />
                  <h3 className="text-lg font-semibold text-gray-900">Patient Services in {country}</h3>
                </div>
                <div className="space-y-2.5 mb-6">
                  {points.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                >
                  Learn about {country} as a destination →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Explore Further</h2>
          <p className="text-gray-500 text-sm">Everything you need to make a confident, informed decision.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/treatments',          label: 'All Treatments We Facilitate',     icon: Stethoscope },
            { href: '/hospitals/india',     label: 'Partner Hospitals in India',        icon: ShieldCheck },
            { href: '/hospitals/turkey',    label: 'Partner Hospitals in Türkiye',       icon: ShieldCheck },
            { href: '/how-it-works',        label: 'How the Full Process Works',        icon: RefreshCw },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-primary hover:shadow-sm transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors leading-snug">{label}</span>
              <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-primary transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Ready to Take the First Step?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Submit your medical reports and receive a free specialist opinion,
            hospital recommendation, and cost estimate within 24 hours. No commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free Medical Evaluation
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+16107870713"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Phone size={16} />
              +1-610-787-0713
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-5">
            Free first medical opinion &middot; No obligation &middot; Response within 24 hours
          </p>
        </div>
      </section>
    </>
  )
}
