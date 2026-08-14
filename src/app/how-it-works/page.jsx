import Link from 'next/link'
import {
  ChevronRight,
  Phone,
  MessageCircle,
  FileText,
  Stethoscope,
  Plane,
  MapPin,
  HeartPulse,
  Home,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  ArrowRight,
  Plus,
  Minus,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'How It Works | Sultan GHC — Your Step-by-Step Medical Tourism Journey',
  description:
    'Learn exactly how Sultan GHC guides U.S. patients through every stage of medical tourism — from your first enquiry to post-treatment follow-up. World-class hospitals in India and Türkiye, managed end-to-end.',
  keywords: [
    'how medical tourism works',
    'medical tourism process',
    'medical travel from USA to India',
    'medical travel from USA to Türkiye',
    'healthcare abroad for Americans',
    'medical tourism step by step',
    'Sultan GHC patient journey',
    'international patient services',
  ],
  openGraph: {
    title: 'How It Works | Sultan GHC — Your Medical Tourism Journey',
    description:
      'Six clear steps from enquiry to recovery. Sultan GHC manages your entire medical journey abroad — treatment planning, visa, travel, hospital admission, and follow-up care.',
    url: 'https://www.sultanghc.com/how-it-works',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/sghc-new-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sultan GHC — How Medical Tourism Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works | Sultan GHC — Your Medical Tourism Journey',
    description:
      'Six clear steps from enquiry to recovery. Sultan GHC manages your entire medical journey abroad.',
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/how-it-works',
  },
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    title: 'Submit Your Enquiry',
    subtitle: 'The Connection',
    icon: FileText,
    quote: "We don't just take your details — we take the time to understand your story.",
    summary:
      'It starts with a simple conversation. Reach out via our enquiry form, WhatsApp, or request a call back. You are immediately assigned a dedicated Case Manager who becomes your single point of contact — no call centers, no bouncing between departments.',
    highlights: [
      'Dedicated Case Manager assigned within hours',
      'Secure, private channels for sharing medical records',
      'No obligation — just an honest conversation',
      'Available via phone, WhatsApp, or online form',
    ],
    subPoints: [
      {
        title: 'Case Manager Assigned',
        body: 'A dedicated Case Manager who speaks your language is assigned immediately. They are your single point of contact throughout the entire journey.',
      },
      {
        title: 'Secure Data Collection',
        body: 'Share your medical reports, scans, and condition history through our secure, private channels. Your information is protected at every step.',
      },
    ],
  },
  {
    number: '02',
    title: 'Expert Review & Treatment Plan',
    subtitle: 'Clinical Deep Dive',
    icon: Stethoscope,
    quote: 'Multiple expert opinions. One clear path forward.',
    summary:
      'Your medical records are reviewed by leading specialists at JCI and NABH-accredited hospitals. Within 24–48 hours you receive a detailed treatment plan with transparent costs, recommended hospitals, and options — no hidden fees.',
    highlights: [
      'Reviewed by JCI / NABH-accredited specialists',
      'Treatment plan delivered within 24–48 hours',
      'Multiple hospital and doctor options provided',
      'Fully transparent cost estimate, zero hidden fees',
    ],
    subPoints: [
      {
        title: 'The Clinical Review',
        body: 'Top specialists review your history to confirm the diagnosis and determine the best treatment approach. You may receive opinions from more than one specialist.',
      },
      {
        title: 'Your Treatment Blueprint',
        body: 'A detailed plan covering the recommended procedure, choice of hospitals and doctors, estimated duration of stay, and a clear cost quote with no surprises.',
      },
    ],
  },
  {
    number: '03',
    title: 'Travel & Visa Support',
    subtitle: 'Logistics & Visa',
    icon: Plane,
    quote: 'Bureaucracy handled. Bags packed.',
    summary:
      'Once you approve the plan, our logistics team takes over. We obtain the official hospital visa invitation letter, guide you through the medical visa application, assist with flight bookings, and arrange accommodation near the hospital.',
    highlights: [
      'Official visa invitation letter from the hospital',
      'Step-by-step medical visa guidance',
      'Flight booking assistance',
      'Hotel or serviced apartment arranged near hospital',
    ],
    subPoints: [
      {
        title: 'Visa Assistance',
        body: 'We obtain the official Visa Invitation Letter from the partner hospital and guide you through the Indian or Turkish medical visa application — ensuring zero errors.',
      },
      {
        title: 'Itinerary Planning',
        body: 'Flight assistance and comfortable accommodation (hotels, guest houses, or serviced apartments) arranged to fit your budget, close to the hospital.',
      },
    ],
  },
  {
    number: '04',
    title: 'Arrival & Warm Welcome',
    subtitle: 'On-Ground Concierge',
    icon: MapPin,
    quote: 'No taxi queues. No confusion. Just a friendly face and a smooth ride.',
    summary:
      'From the moment your flight touches down, you are under our care. Our representative meets you at the arrival gate, provides a local SIM card so you stay connected to family, and transfers you by private vehicle directly to your accommodation or the hospital.',
    highlights: [
      'Personal meet-and-greet at the arrival gate',
      'Local SIM card provided for instant connectivity',
      'Private vehicle transfer to hotel or hospital',
      '24/7 WhatsApp group with your family and our team',
    ],
    subPoints: [
      {
        title: 'Airport Concierge',
        body: 'Our representative greets you at the arrival gate with a placard — just like a personal host, not a stranger.',
      },
      {
        title: 'Settling In',
        body: 'We set up a WhatsApp group with you, your family, and our team for real-time 24/7 updates throughout the treatment journey.',
      },
    ],
  },
  {
    number: '05',
    title: 'Treatment & In-Hospital Care',
    subtitle: 'World-Class Medical Execution',
    icon: HeartPulse,
    quote: 'You are never alone in the hospital. We are your advocates on the ground.',
    summary:
      'We accompany you to the hospital, manage all registration and admission paperwork through a fast-track lane, and ensure your specialist consultation runs smoothly. Our team visits you daily throughout your stay to ensure you are comfortable and informed.',
    highlights: [
      'Fast-track hospital admission managed by our team',
      'In-person consultation with your assigned specialist',
      'Daily welfare visits from our on-ground team',
      'State-of-the-art facilities with compassionate nursing care',
    ],
    subPoints: [
      {
        title: 'Hospital Admission',
        body: 'We accompany you to the hospital and manage registration and admission paperwork through a fast-track lane — no confusing bureaucracy.',
      },
      {
        title: 'The Procedure',
        body: 'You undergo treatment in state-of-the-art facilities with compassionate nursing care. Our team visits daily to ensure you are comfortable and your needs are met.',
      },
    ],
  },
  {
    number: '06',
    title: 'Safe Return & Follow-Up Care',
    subtitle: 'Going Home Healthy',
    icon: Home,
    quote: 'Distance does not break our bond. We are with you until you are fully back to life.',
    summary:
      'When your doctor issues the "Fit to Fly" certificate, we manage your departure — airport transfer, check-in assistance, and medication documentation. Back home, we continue your care through remote follow-up video consultations with your treating physician.',
    highlights: [
      'Doctor-issued Fit to Fly certificate arranged',
      'Private airport transfer and check-in support',
      'Medication documentation for U.S. customs',
      'Remote follow-up video consultations with your doctor',
    ],
    subPoints: [
      {
        title: 'Safe Departure',
        body: 'We drive you to the airport, assist with check-in, and ensure all your medical documents and prescriptions are in order for re-entry to the United States.',
      },
      {
        title: 'Continuity of Care',
        body: 'Once you are home, our relationship continues. We facilitate regular video consultations with your doctor in India or Türkiye to monitor your recovery and answer questions.',
      },
    ],
  },
]

const STATS = [
  { value: '24–48hrs', label: 'Treatment plan turnaround' },
  { value: '1 Contact', label: 'Dedicated Case Manager, always' },
  { value: '70%+', label: 'Average cost savings vs. U.S. pricing' },
  { value: '24/7', label: 'Support throughout your journey' },
]

const FAQS = [
  {
    q: 'How long does the entire process take — from enquiry to treatment?',
    a: 'From your first enquiry to arriving at the hospital, most patients complete the process in 2–4 weeks. This includes the medical review (24–48 hours), treatment planning, visa application (1–2 weeks), and travel arrangements. Urgent cases can often be expedited.',
  },
  {
    q: 'Is my medical information kept confidential?',
    a: 'Absolutely. All medical records and personal information you share are handled through secure, encrypted channels. Your data is only shared with the treating hospital and specialist on a need-to-know basis, and never with third parties.',
  },
  {
    q: 'How much can I realistically save on treatment costs?',
    a: 'U.S. patients typically save 60–80% on the total cost of treatment — including flights and accommodation — compared to equivalent procedures in the United States. For example, a hip replacement that costs $40,000+ in the U.S. can be completed in India for under $8,000, including travel.',
  },
  {
    q: 'Can I bring a family member or companion with me?',
    a: 'Yes, and we strongly encourage it. We can arrange accommodation for companions, include them in all update communications via the WhatsApp group, and coordinate their travel alongside yours at no extra management fee.',
  },
  {
    q: 'What happens if there are medical complications after I return home?',
    a: 'Your safety is our first priority. Before discharge, your doctor provides a full set of medical records and discharge summaries. We facilitate remote follow-up consultations with your treating physician and can coordinate with local U.S. doctors if needed.',
  },
  {
    q: 'Do I need travel insurance for medical tourism?',
    a: 'We strongly recommend purchasing international travel insurance and, where available, a medical tourism-specific policy before your journey. We can guide you on what to look for in a policy that covers your treatment type.',
  },
  {
    q: 'How do I know the hospitals are accredited and safe?',
    a: 'Every hospital in our network holds international accreditation — JCI (Joint Commission International) and/or NABH (India) or equivalent Turkish certifications. These are the same standards used to evaluate U.S. hospitals. We only partner with institutions we have personally vetted.',
  },
  {
    q: 'What is the role of Sultan GHC — are you a hospital or a clinic?',
    a: 'Sultan GHC is neither a hospital nor a clinic. We are a U.S.-based healthcare facilitation company. We do not provide medical advice or treatment. Our role is to coordinate your entire journey — connecting you with the right hospital, managing logistics, and supporting you before, during, and after treatment.',
  },
]

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Sultan GHC Manages Your Medical Tourism Journey',
  description:
    'A complete step-by-step guide to how Sultan GHC facilitates medical treatment abroad for U.S. patients, from the first enquiry to post-treatment follow-up care.',
  totalTime: 'P4W',
  step: STEPS.map((s) => ({
    '@type': 'HowToStep',
    name: s.title,
    text: s.summary,
    position: parseInt(s.number),
  })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepSection({ step, index }) {
  const Icon = step.icon
  const isEven = index % 2 === 1

  return (
    <section
      id={step.number}
      aria-labelledby={`step-heading-${step.number}`}
      className="scroll-mt-24"
    >
      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-12 lg:gap-16 items-start`}
      >
        {/* Content side */}
        <div className="flex-1 min-w-0">
          {/* Step badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
              <Icon size={18} />
            </span>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Step {step.number}
            </span>
          </div>

          <h2
            id={`step-heading-${step.number}`}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-4"
          >
            {step.title}
          </h2>

          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
            {step.summary}
          </p>

          {/* Sub-points */}
          <div className="space-y-5 mb-8">
            {step.subPoints.map((sp) => (
              <div key={sp.title}>
                <h3 className="text-sm font-semibold text-primary mb-1">{sp.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{sp.body}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {step.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-gray-600">
                <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual side */}
        <div className="flex-1 min-w-0 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-sm">
            {/* Large step number watermark card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8 overflow-hidden">
              {/* Watermark number */}
              <span className="absolute -bottom-4 -right-2 text-[120px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                {step.number}
              </span>

              {/* Quote */}
              <span className="text-primary text-5xl leading-none font-serif">"</span>
              <p className="text-gray-700 text-base font-medium leading-relaxed mt-2 relative z-10">
                {step.quote}
              </p>

              {/* CTA hint */}
              <div className="mt-6 pt-5 border-t border-blue-100 flex items-center gap-2">
                <Icon size={14} className="text-primary" />
                <span className="text-xs text-gray-400">{step.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">How It Works</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Patient Journey
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Your Medical Journey,{' '}
              <span className="text-primary">Step by Step</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Sultan GHC manages every detail of your medical journey abroad — from the first
              conversation to follow-up care back home. Six clear steps. One dedicated team. Zero
              surprises.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Get My Free First Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/16107870713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps Overview Strip ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <a
                  key={step.number}
                  href={`#${step.number}`}
                  className="group flex flex-col items-center text-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={17} />
                  </span>
                  <span className="text-[11px] font-semibold text-primary">{step.number}</span>
                  <span className="text-[12px] text-gray-600 font-medium leading-snug">{step.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Step Sections ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 space-y-24">
        {STEPS.map((step, i) => (
          <StepSection key={step.number} step={step} index={i} />
        ))}
      </div>

      {/* ── Stats / Trust Bar ── */}
      <section className="bg-primary" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{value}</p>
                <p className="text-sm text-blue-100">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Sultan GHC ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Why Choose Sultan GHC
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            A Healthcare Concierge You Can Trust
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We are not a booking platform. We are a team of patient advocates who manage every
            detail so you can focus on one thing — getting better.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              Icon: Shield,
              title: 'JCI-Accredited Network Only',
              body: 'Every hospital in our network holds international accreditation equivalent to U.S. standards. We partner only with institutions we have personally vetted.',
            },
            {
              Icon: Users,
              title: 'One Dedicated Case Manager',
              body: 'You get a single point of contact from day one — a real person, not a call center — who manages every aspect of your journey.',
            },
            {
              Icon: Clock,
              title: '24/7 On-Ground Support',
              body: 'Our team is available round the clock during your stay. Whether it is a medical question or a local need, we are always reachable.',
            },
            {
              Icon: FileText,
              title: 'Full Cost Transparency',
              body: 'You receive a complete cost estimate before committing to anything. No hidden fees, no surprise billing — just honest, upfront pricing.',
            },
            {
              Icon: HeartPulse,
              title: 'Continuity of Care',
              body: 'Our involvement does not end when you board your flight home. We facilitate remote follow-up consultations with your treating physician.',
            },
            {
              Icon: Plane,
              title: 'End-to-End Logistics',
              body: 'Visa, flights, accommodation, airport transfers, interpreters — every logistical detail is coordinated so you never have to figure it out alone.',
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-y border-gray-100" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Common Questions
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Everything you need to know before taking the first step.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-800 leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 group-open:border-primary group-open:text-primary transition-colors">
                    <Plus size={13} className="group-open:hidden" />
                    <Minus size={13} className="hidden group-open:block" />
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white/5" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-semibold text-blue-100 uppercase tracking-widest mb-4">
              Ready to Begin?
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
              Take the First Step Toward Affordable, World-Class Care
            </h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Submit your details and receive your first medical opinion and cost estimate — complimentary, within
              24–48 hours. No obligation. No pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-bold px-7 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                Get My Free First Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+16107870713"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                <Phone size={16} />
                +1-610-787-0713
              </a>
            </div>
            <p className="text-blue-200 text-xs mt-6">
              * Sultan GHC does not provide medical advice, diagnosis, or treatment.
              We are a healthcare facilitation company.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
