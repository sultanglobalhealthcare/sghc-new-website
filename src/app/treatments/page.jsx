import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Clock,
  Shield,
  Stethoscope,
  MessageCircle,
  Phone,
  HeartPulse,
  Microscope,
  Activity,
  Bone,
  Zap,
  FlaskConical,
  Droplets,
  Wind,
  Baby,
  Sparkles,
  Eye,
  Volume2,
  Scale,
  Cpu,
  GitMerge,
  Star,
  Smile,
  Dna,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Medical Treatments Abroad | All Specialties | India & Turkey | Sultan GHC',
  description:
    'Explore 19 medical specialties available through Sultan GHC in India and Turkey — cardiology, oncology, orthopaedics, spine surgery, dental implants, IVF, bariatric surgery, and more at 60–90% less than U.S. costs. JCI-accredited hospitals, internationally trained specialists.',
  keywords: [
    'medical treatments abroad',
    'healthcare abroad for Americans',
    'medical tourism India',
    'medical tourism Turkey',
    'affordable surgery abroad USA',
    'JCI accredited hospitals India Turkey',
    'Sultan GHC treatments',
    'international patient services',
    'heart surgery abroad',
    'cancer treatment abroad',
    'knee replacement abroad',
    'dental implants abroad',
    'IVF treatment abroad',
    'bariatric surgery abroad',
    'spine surgery abroad',
  ],
  openGraph: {
    title: 'All Medical Treatments Abroad — India & Turkey | Sultan GHC',
    description:
      '19 medical specialties at 60–90% lower than U.S. prices. JCI-accredited hospitals in India and Turkey, matched to your condition and budget.',
    url: 'https://www.sultanghc.com/treatments',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/og/treatments.jpg',
        width: 1200,
        height: 630,
        alt: 'Medical Treatments Abroad — Sultan GHC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Medical Treatments Abroad | Sultan GHC',
    description:
      '19 medical specialties at 60–90% lower than U.S. prices. JCI-accredited hospitals in India and Turkey.',
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/treatments',
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
  ],
}

const medicalOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Sultan Global Health Care',
  url: 'https://www.sultanghc.com',
  description:
    'Sultan GHC is a U.S.-based medical tourism and global healthcare concierge connecting American patients with internationally accredited hospitals and specialist doctors in India and Turkey.',
  medicalSpecialty: [
    'Cardiology', 'Oncology', 'Neurology', 'Neurosurgery', 'Orthopedics',
    'Spine Surgery', 'Gastroenterology', 'Hepatology', 'Pulmonology',
    'Urology', 'Obstetrics', 'Fertility', 'Ophthalmology', 'ENT Surgery',
    'Bariatric Surgery', 'Robotic Surgery', 'Organ Transplantation',
    'Cosmetic Surgery', 'Dental Surgery',
  ],
  areaServed: 'United States',
}

// ─── Treatment Data ───────────────────────────────────────────────────────────

// Icon color palette — cycles through 6 accents so adjacent cards differ visually
const ACCENTS = [
  { bg: 'bg-blue-50',   icon: 'text-blue-600'   },
  { bg: 'bg-rose-50',   icon: 'text-rose-600'   },
  { bg: 'bg-violet-50', icon: 'text-violet-600' },
  { bg: 'bg-emerald-50',icon: 'text-emerald-600'},
  { bg: 'bg-amber-50',  icon: 'text-amber-600'  },
  { bg: 'bg-cyan-50',   icon: 'text-cyan-600'   },
]

const TREATMENTS = [
  {
    title: 'Cardiology & Cardiac Surgery',
    href: '/treatments/cardiology',
    Icon: HeartPulse,
    desc: 'Heart bypass surgery, valve replacement, angioplasty, TAVR, and advanced cardiac care at JCI-accredited cardiac centers.',
    saving: 'Save up to 90%',
    tag: 'Surgical',
  },
  {
    title: 'Oncology & Cancer Care',
    href: '/treatments/oncology',
    Icon: Microscope,
    desc: 'Chemotherapy, radiation, surgical oncology, immunotherapy, targeted therapy, and bone marrow transplantation.',
    saving: 'Save up to 80%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'Neurology',
    href: '/treatments/neurology',
    Icon: Activity,
    desc: 'Stroke management, epilepsy, multiple sclerosis, dementia care, and comprehensive neurological rehabilitation.',
    saving: 'Save up to 80%',
    tag: 'Medical',
  },
  {
    title: 'Neurosurgery',
    href: '/treatments/neurosurgery',
    Icon: Dna,
    desc: 'Brain tumor surgery, deep brain stimulation, hydrocephalus, AVM treatment, and complex cranial procedures.',
    saving: 'Save up to 85%',
    tag: 'Surgical',
  },
  {
    title: 'Orthopaedics & Joint Replacement',
    href: '/treatments/orthopedics',
    Icon: Bone,
    desc: 'Knee replacement, hip replacement, shoulder surgery, ACL reconstruction, and joint resurfacing with premium implant brands.',
    saving: 'Save up to 85%',
    tag: 'Surgical',
  },
  {
    title: 'Spine & Sports Injury Surgery',
    href: '/treatments/spine-sports-injury',
    Icon: Zap,
    desc: 'Spinal fusion, disc replacement, microdiscectomy, scoliosis correction, ACL repair, and rotator cuff surgery.',
    saving: 'Save up to 90%',
    tag: 'Surgical',
  },
  {
    title: 'Gastroenterology',
    href: '/treatments/gastroenterology',
    Icon: FlaskConical,
    desc: 'Advanced endoscopy, colonoscopy, ERCP, inflammatory bowel disease management, and GI cancer screening.',
    saving: 'Save up to 80%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'Hepatology & Liver Care',
    href: '/treatments/hepatology-liver-care',
    Icon: Droplets,
    desc: 'Liver disease management, cirrhosis, hepatitis B & C treatment, NAFLD care, and liver cancer management.',
    saving: 'Save up to 80%',
    tag: 'Medical',
  },
  {
    title: 'Pulmonology & Respiratory Medicine',
    href: '/treatments/pulmonology',
    Icon: Wind,
    desc: 'COPD, asthma, interstitial lung disease, sleep apnea, lung cancer evaluation, and pulmonary rehabilitation.',
    saving: 'Save up to 75%',
    tag: 'Medical',
  },
  {
    title: 'Urology & Urological Surgery',
    href: '/treatments/urology',
    Icon: Shield,
    desc: 'Kidney stones, prostate surgery (TURP, RARP), urinary incontinence, bladder cancer, and robotic urological procedures.',
    saving: 'Save up to 85%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'Obstetrics & Gynaecology',
    href: '/treatments/obstetrics-gynaecology',
    Icon: Baby,
    desc: 'Laparoscopic gynaecology, hysterectomy, fibroid removal, endometriosis surgery, and complex obstetric care.',
    saving: 'Save up to 80%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'Fertility, IVF & Reproductive Medicine',
    href: '/treatments/fertility-ivf',
    Icon: Sparkles,
    desc: 'IVF, ICSI, egg freezing, embryo donation, surrogacy coordination, and advanced reproductive endocrinology.',
    saving: 'Save up to 75%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'Ophthalmology & Eye Surgery',
    href: '/treatments/ophthalmology',
    Icon: Eye,
    desc: 'LASIK, cataract surgery, glaucoma treatment, retinal detachment repair, corneal transplant, and diabetic eye care.',
    saving: 'Save up to 80%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'ENT & Head–Neck Surgery',
    href: '/treatments/ent-head-neck-surgery',
    Icon: Volume2,
    desc: 'Cochlear implants, sinus surgery (FESS), thyroid surgery, head and neck cancer, and sleep surgery.',
    saving: 'Save up to 80%',
    tag: 'Medical & Surgical',
  },
  {
    title: 'Bariatric & Metabolic Surgery',
    href: '/treatments/bariatric-metabolic-surgery',
    Icon: Scale,
    desc: 'Gastric sleeve, gastric bypass, mini bypass, revision bariatric surgery, and metabolic surgery for type 2 diabetes.',
    saving: 'Save up to 80%',
    tag: 'Surgical',
  },
  {
    title: 'Robotic & Minimally Invasive Surgery',
    href: '/treatments/robotic-minimally-invasive',
    Icon: Cpu,
    desc: 'Robotic-assisted procedures across urology, spine, oncology, and gynaecology — smaller incisions, faster recovery.',
    saving: 'Save up to 85%',
    tag: 'Surgical',
  },
  {
    title: 'Organ & Bone Marrow Transplantation',
    href: '/treatments/organ-bone-marrow-transplant',
    Icon: GitMerge,
    desc: 'Kidney transplant, liver transplant, bone marrow transplant, and stem cell therapy at internationally accredited transplant centers.',
    saving: 'Save up to 85%',
    tag: 'Surgical',
  },
  {
    title: 'Cosmetic, Hair Transplant & Reconstructive Plastic Surgery',
    href: '/treatments/cosmetic-hair-transplant-plastic-surgery',
    Icon: Star,
    desc: 'Rhinoplasty, facelifts, liposuction, breast surgery, FUE/DHI hair transplants, and reconstructive plastic surgery.',
    saving: 'Save up to 80%',
    tag: 'Surgical',
  },
  {
    title: 'Dental Surgery & Implant Dentistry',
    href: '/treatments/dental-surgery-implant-dentistry',
    Icon: Smile,
    desc: 'Dental implants, All-on-4, All-on-6, veneers, full mouth rehabilitation, smile makeovers, and orthodontics.',
    saving: 'Save up to 80%',
    tag: 'Surgical',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TreatmentsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrgSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Treatments</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              19 Medical Specialties
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              World-Class Medical Treatments in{' '}
              <span className="text-primary">India & Turkey</span> — for U.S. Patients
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Sultan GHC connects American patients with internationally accredited hospitals across
              19 medical specialties — from heart surgery and cancer care to dental implants and
              cosmetic surgery. The same quality. A fraction of the cost. Zero waitlists.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { value: '19',      label: 'Medical Specialties',    Icon: Stethoscope },
                { value: '60–90%',  label: 'Cost Savings vs. U.S.',  Icon: DollarSign  },
                { value: 'JCI',     label: 'Accredited Hospitals',   Icon: Shield      },
                { value: '24 hrs',  label: 'Free First Opinion',     Icon: Clock       },
              ].map(({ value, label, Icon }) => (
                <div key={label} className="bg-white rounded-xl px-4 py-4 border border-blue-100 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 leading-none">{value}</p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Get Your Free First Medical Opinion
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/16107870713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <MessageCircle size={16} />
                Chat with a Patient Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              'JCI-Accredited Hospitals Only',
              'Fellowship-Trained International Specialists',
              'Dedicated Case Manager for Every Patient',
              'Transparent Pricing — No Hidden Fees',
              'Zero Waitlists',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Treatments — Single Section ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-3">
              Complete Treatment Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-snug">
              All Services Offered by<br className="hidden sm:block" />{' '}
              Sultan Global Health Care
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-xs sm:text-right leading-relaxed">
            Select any specialty below to explore procedures, costs, and how we support your journey.
          </p>
        </div>

        {/* Decorative rule */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          <span className="text-[11px] font-semibold text-primary uppercase tracking-widest px-3">
            19 Specialties
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent" />
        </div>

        {/* Treatment cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TREATMENTS.map(({ title, href, Icon, desc, saving, tag }, index) => {
            const accent = ACCENTS[index % ACCENTS.length]
            return (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${accent.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={20} className={accent.icon} />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-100 px-2.5 py-1 rounded-full leading-none mt-0.5">
                    {tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">
                  {desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                    {saving}
                  </span>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Not Sure Section ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Not Sure Where to Start?
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                Share Your Medical Reports. We will Guide You to the Right Specialist.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
                You don't need to know the exact procedure or specialty. Share your diagnosis,
                symptoms, or existing medical reports — and Sultan GHC's patient team will
                evaluate your case and connect you with the right specialist at the right
                hospital, within 24 hours.
              </p>
              <div className="space-y-3">
                {[
                  'Submit your reports online — no travel required for the first consultation',
                  'Receive a recommended specialist and hospital match within 24 hours',
                  'Get a personalised cost estimate — completely free, no obligation',
                  'Your dedicated Case Manager stays with you from first contact to recovery',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[280px]">
              <Link
                href="/enquiry"
                className="flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Get My Free First Medical Opinion
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/16107870713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp a Patient Coordinator
              </a>
              <a
                href="tel:+16107870713"
                className="flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Phone size={16} />
                Call +1-610-787-0713
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Sultan GHC ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Why Sultan GHC
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            What Makes Sultan GHC Different from Booking Directly?
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Going it alone means researching hospitals, negotiating costs, managing visas, arranging
            accommodation, and navigating a foreign healthcare system — often in a second language.
            Sultan GHC handles all of it for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              Icon: Shield,
              color: 'bg-blue-50 text-blue-600',
              title: 'Pre-Vetted Hospital Network',
              desc: "Every hospital in our network is JCI-accredited or equivalent. We never recommend a facility we haven't evaluated against international safety and quality standards.",
            },
            {
              Icon: Stethoscope,
              color: 'bg-emerald-50 text-emerald-600',
              title: 'Specialist Matching',
              desc: 'We match your diagnosis and imaging to the right specialist — not just any available doctor, but the one with the most relevant experience for your exact condition.',
            },
            {
              Icon: DollarSign,
              color: 'bg-amber-50 text-amber-600',
              title: 'Transparent Cost Estimates',
              desc: 'You receive a full cost breakdown before committing — surgical fees, anaesthesia, hospital stay, and post-operative care. No surprise bills on arrival.',
            },
            {
              Icon: ArrowRight,
              color: 'bg-violet-50 text-violet-600',
              title: 'End-to-End Travel Coordination',
              desc: 'Airport pickup, hotel, local transport, interpreter support, and visa guidance — coordinated by your dedicated Case Manager so nothing falls through the cracks.',
            },
            {
              Icon: CheckCircle2,
              color: 'bg-rose-50 text-rose-600',
              title: 'Medical Records Management',
              desc: 'We compile and transmit your records to the treating hospital in the correct format — ensuring your surgeon has everything needed before you arrive.',
            },
            {
              Icon: Clock,
              color: 'bg-cyan-50 text-cyan-600',
              title: 'Post-Treatment Follow-Up',
              desc: "Your care doesn't end when you fly home. Sultan GHC coordinates follow-up appointments, remote check-ins, and U.S.-based care continuity where needed.",
            },
          ].map(({ Icon, color, title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/why-sultan-ghc"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
          >
            Learn more about why patients choose Sultan GHC →
          </Link>
        </div>
      </section>

      {/* ── How It Works Strip ── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">How It Works — In 3 Simple Steps</h2>
            <p className="text-gray-400 text-sm">
              From your first inquiry to your return home — Sultan GHC handles everything.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Share Your Case',
                desc: 'Upload your medical reports, diagnosis, or describe your symptoms. Your first consultation is completely free.',
              },
              {
                step: '02',
                title: 'Get Matched & Quoted',
                desc: 'We match you to the right specialist and hospital within 24 hours — with a transparent, personalised cost estimate.',
              },
              {
                step: '03',
                title: 'Travel, Treat & Return',
                desc: 'Your Case Manager handles flights, hotel, hospital, and follow-up — before, during, and after your treatment.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-start gap-3">
                <div className="text-4xl font-bold text-primary/30">{step}</div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
            >
              View the complete patient journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Ready to Explore Your Treatment Options?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Share your medical reports and receive a free specialist opinion, recommended hospital,
            and personalised cost estimate — within 24 hours. No commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free First Medical Opinion
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
