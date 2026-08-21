import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection"
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity,
  Shield, Users, ImageIcon,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Cosmetic Surgery & Hair Transplant Abroad | India & Türkiye | Sultan GHC',
  description:
    'Rhinoplasty, facelift, liposuction, tummy tuck, breast surgery, hair transplant (FUE/DHI), and reconstructive plastic surgery in India and Türkiye — 60–85% less than U.S. prices. Board-certified plastic surgeons, internationally accredited clinics, JCI hospitals. Sultan GHC coordinates your full aesthetic journey.',
  keywords: [
    'hair transplant Türkiye cost',
    'hair transplant India cost',
    'FUE hair transplant Türkiye',
    'DHI hair transplant Türkiye',
    'rhinoplasty Türkiye cost',
    'cosmetic surgery India cost',
    'tummy tuck India cost',
    'liposuction India Türkiye cost',
    'breast augmentation Türkiye cost',
    'plastic surgery medical tourism',
    'affordable cosmetic surgery Americans',
    'facelift India cost',
    'Sultan GHC cosmetic surgery',
    'board certified plastic surgeon India Türkiye',
  ],
  openGraph: {
    title: 'Cosmetic Surgery & Hair Transplant in India & Türkiye | Sultan GHC',
    description:
      'FUE/DHI hair transplant, rhinoplasty, facelift, breast surgery, and liposuction at accredited clinics — 60–85% less than U.S. prices.',
    url: 'https://www.sultanghc.com/treatments/cosmetic-hair-transplant-plastic-surgery',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmetic Surgery & Hair Transplant Abroad | India & Türkiye | Sultan GHC',
    description: 'FUE/DHI hair transplant, rhinoplasty, liposuction, tummy tuck, breast surgery — 60–85% less than U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/cosmetic-hair-transplant-plastic-surgery' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Cosmetic Surgery & Hair Transplant', item: 'https://www.sultanghc.com/treatments/cosmetic-hair-transplant-plastic-surgery' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Cosmetic Surgery & Hair Transplant Abroad — India and Türkiye',
  description: 'Aesthetic and reconstructive plastic surgery, FUE/DHI hair transplant, and body contouring for U.S. patients at accredited clinics in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/cosmetic-hair-transplant-plastic-surgery',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Plastic Surgery',
    alternateName: ['Cosmetic Surgery', 'Aesthetic Surgery', 'Hair Transplant', 'Reconstructive Surgery'],
    relevantSpecialty: 'Plastic Surgery',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a hair transplant cost in Türkiye compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FUE hair transplant in the U.S. typically costs $8,000–$20,000 depending on graft count and clinic. In Türkiye at JCI-accredited or internationally certified clinics, the same procedure costs $1,500–$4,000 — a saving of 75–85%. DHI (Direct Hair Implantation) is similarly priced. Türkiye is one of the world\'s highest-volume hair transplant destinations, with some clinics performing 5,000–10,000 procedures annually. Sultan GHC partners exclusively with surgically supervised, medically accredited centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does rhinoplasty (nose job) cost in Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rhinoplasty in the U.S. costs $8,000–$25,000 (ASPS National Plastic Surgery Statistics 2024). In Türkiye at board-certified plastic surgery clinics: $2,500–$6,000. Türkiye\'s rhinoplasty surgeons — particularly in Istanbul — have a global reputation for precision closed and open rhinoplasty techniques. India rhinoplasty costs $1,500–$4,000. Sultan GHC shares surgeon credentials, before/after portfolios, and patient references before any commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a tummy tuck (abdominoplasty) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tummy tuck (abdominoplasty) in the U.S. costs $8,000–$25,000 including anesthesia and facility fees (ASPS 2024). In India: $2,500–$5,500. In Türkiye: $3,000–$7,000. Combination body contouring — tummy tuck with liposuction or breast surgery (Mommy Makeover) — costs $5,000–$10,000 in India vs $20,000–$50,000 in the U.S. All procedures are performed by board-certified plastic surgeons at accredited facilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cosmetic surgery results in India and Türkiye comparable to U.S. standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sultan GHC partners exclusively with plastic surgeons who are board-certified by their national plastic surgery boards (ISAPS members in many cases), trained at internationally recognized programs, and operating in accredited facilities. Many surgeons trained in the U.S., UK, Germany, or France. Outcomes depend heavily on surgeon selection — Sultan GHC shares surgeon credentials, case volume, and before/after results as part of the matching process. We do not partner with or recommend any clinic-mill or non-surgeon-supervised hair transplant center.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in Türkiye for a hair transplant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most hair transplant patients need 3–5 days in Türkiye: Day 1 consultation and blood work, Day 2 procedure (6–8 hours for 3,000–5,000 grafts), Day 3 first wash and care instructions. Rhinoplasty requires 7–10 days for splint removal and swelling assessment. Tummy tuck or Mommy Makeover requires 10–14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is reconstructive plastic surgery and is it available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reconstructive plastic surgery repairs form and function after cancer, trauma, burn injury, or congenital conditions — including breast reconstruction after mastectomy, scar revision, flap surgery, and cleft lip/palate repair. Sultan GHC\'s partner hospitals in India (Apollo, Fortis, Manipal, Tata Memorial) have plastic surgery departments that perform post-oncology breast reconstruction, microsurgical free flap reconstruction, and complex scar management. Reconstructive procedures are priced significantly lower than in the U.S.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const PROCEDURES = [
  {
    category: 'Hair Restoration',
    items: [
      { name: 'FUE Hair Transplant', desc: 'Follicular Unit Extraction — individual graft harvesting with no linear scar. 2,000–6,000 grafts in a single session. Available in both India and Türkiye.' },
      { name: 'DHI Hair Transplant', desc: 'Direct Hair Implantation using Choi implanter pens — no channel incision required, higher density possible. Türkiye\'s signature technique.' },
      { name: 'Sapphire FUE', desc: 'Sapphire blade FUE for finer, more precise incisions and faster healing — widely available in Istanbul clinics.' },
      { name: 'Beard & Eyebrow Transplant', desc: 'FUE-based beard restoration and eyebrow reconstruction for scarring alopecia, previous over-plucking, or congenital sparse growth.' },
    ],
  },
  {
    category: 'Face & Neck',
    items: [
      { name: 'Rhinoplasty (Open & Closed)', desc: 'Primary and revision rhinoplasty — structural, functional, and aesthetic correction. Türkiye\'s Istanbul-based surgeons are internationally recognized for natural results.' },
      { name: 'Facelift (SMAS & Deep Plane)', desc: 'SMAS facelift, mini-facelift, deep plane facelift, and neck lift — with or without fat grafting or blepharoplasty. Available at select India and Türkiye centers.' },
      { name: 'Eyelid Surgery (Blepharoplasty)', desc: 'Upper and lower blepharoplasty for hooded lids, under-eye bags, and functional vision obstruction. Often combined with facelift.' },
      { name: 'Otoplasty & Ear Reshaping', desc: 'Ear pinning, ear reduction, and reconstruction for prominent or asymmetric ears — day-surgery procedure.' },
    ],
  },
  {
    category: 'Body Contouring',
    items: [
      { name: 'Liposuction (VASER & Standard)', desc: 'VASER ultrasound-assisted liposuction and standard tumescent liposuction for abdomen, flanks, thighs, arms, and gynecomastia. Available in India and Türkiye.' },
      { name: 'Tummy Tuck (Abdominoplasty)', desc: 'Full and mini abdominoplasty — with or without rectus diastasis repair. Commonly combined with liposuction for body contouring after weight loss or pregnancy.' },
      { name: 'Mommy Makeover', desc: 'Combination breast lift/augmentation + tummy tuck + liposuction in a single surgical session — priced as a package in both India and Türkiye.' },
      { name: 'Arm Lift (Brachioplasty) & Thigh Lift', desc: 'Skin excision and contouring after significant weight loss — often combined with lower body lift.' },
    ],
  },
  {
    category: 'Breast Surgery',
    items: [
      { name: 'Breast Augmentation', desc: 'Silicone and cohesive gel implants — round and anatomical shapes. FDA-equivalent implant brands (Mentor, Motiva, Silimed) available at partner clinics.' },
      { name: 'Breast Lift (Mastopexy)', desc: 'Crescent, lollipop, and anchor mastopexy — with or without implants — for ptosis following pregnancy, weight loss, or age.' },
      { name: 'Breast Reduction', desc: 'Functional and aesthetic breast reduction with nipple repositioning — covered by insurance in the U.S.; priced at $2,500–$5,000 in India and Türkiye.' },
      { name: 'Breast Reconstruction (Post-Mastectomy)', desc: 'Implant-based or autologous flap reconstruction (TRAM, DIEP, latissimus dorsi) for breast cancer survivors — available at Tata Memorial, Apollo, and Fortis.' },
    ],
  },
  {
    category: 'Reconstructive & Scar Surgery',
    items: [
      { name: 'Burn Scar Reconstruction', desc: 'Split-thickness skin grafting, full-thickness grafting, flap surgery, and tissue expansion for burn scars — India has dedicated burn reconstruction programs at tertiary centers.' },
      { name: 'Microsurgical Free Flap Reconstruction', desc: 'Complex soft tissue defect reconstruction after oncological resection or trauma — perforator flap and free flap techniques at Apollo, Manipal, and Koç University.' },
      { name: 'Cleft Lip & Palate Repair', desc: 'Primary cleft lip repair, palatoplasty, alveolar bone grafting, and secondary revision — available at pediatric plastic surgery centers in India at very low cost.' },
      { name: 'Keloid & Hypertrophic Scar Treatment', desc: 'Combination excision, intralesional therapy, silicone sheeting, and radiotherapy for problematic scars — available at India and Türkiye plastic surgery departments.' },
    ],
  },
]

const COST_COMPARISON = [
  { procedure: 'FUE Hair Transplant (3,000 grafts)',  us: '$8,000–$20,000',  india: '$1,200–$3,000',  turkey: '$1,500–$4,000' },
  { procedure: 'DHI Hair Transplant (3,000 grafts)',  us: '$9,000–$22,000',  india: '$1,500–$3,500',  turkey: '$1,800–$4,500' },
  { procedure: 'Rhinoplasty (primary)',               us: '$8,000–$25,000',  india: '$1,500–$4,000',  turkey: '$2,500–$6,000' },
  { procedure: 'Facelift (SMAS / deep plane)',        us: '$15,000–$40,000', india: '$3,000–$7,000',  turkey: '$4,000–$10,000' },
  { procedure: 'Liposuction (3–4 areas)',             us: '$6,000–$20,000',  india: '$1,500–$4,000',  turkey: '$2,000–$6,000' },
  { procedure: 'Tummy Tuck (Abdominoplasty)',         us: '$8,000–$25,000',  india: '$2,500–$5,500',  turkey: '$3,000–$7,000' },
  { procedure: 'Mommy Makeover (combo)',              us: '$20,000–$50,000', india: '$5,000–$10,000', turkey: '$7,000–$15,000' },
  { procedure: 'Breast Augmentation (implants)',      us: '$8,000–$20,000',  india: '$2,000–$5,000',  turkey: '$2,500–$6,500' },
  { procedure: 'Breast Reduction',                   us: '$8,000–$20,000',  india: '$2,500–$5,000',  turkey: '$3,000–$7,000' },
  { procedure: 'Blepharoplasty (upper + lower)',      us: '$4,000–$12,000',  india: '$800–$2,500',    turkey: '$1,200–$3,500' },
]

const FAQS = [
  {
    q: 'How much does a hair transplant cost in Türkiye?',
    a: 'FUE in the U.S.: $8,000–$20,000. Türkiye: $1,500–$4,000 — saving 75–85%. DHI is similarly priced. Sultan GHC partners exclusively with surgically supervised, medically accredited centers — not clinic mills.',
  },
  {
    q: 'How much does rhinoplasty cost in Türkiye?',
    a: 'Rhinoplasty in the U.S.: $8,000–$25,000 (ASPS 2024). Türkiye: $2,500–$6,000. India: $1,500–$4,000. Sultan GHC shares surgeon credentials, before/after portfolios, and references before any commitment.',
  },
  {
    q: 'How much does a tummy tuck cost in India?',
    a: 'Tummy tuck in the U.S.: $8,000–$25,000. India: $2,500–$5,500. Mommy Makeover combinations cost $5,000–$10,000 in India vs $20,000–$50,000 in the U.S.',
  },
  {
    q: 'Are cosmetic surgery results abroad comparable to U.S. standards?',
    a: 'Sultan GHC partners only with board-certified plastic surgeons (many ISAPS members), trained at internationally recognized programs, operating in accredited facilities. We share credentials, case volume, and before/after results as part of matching.',
  },
  {
    q: 'How long do I need to stay in Türkiye for a hair transplant?',
    a: 'Hair transplant: 3–5 days. Rhinoplasty: 7–10 days. Tummy tuck / Mommy Makeover: 10–14 days.',
  },
  {
    q: 'Is reconstructive plastic surgery (post-cancer) available in India?',
    a: 'Yes. Partner hospitals (Apollo, Fortis, Manipal, Tata Memorial) perform post-mastectomy breast reconstruction (implant and flap), microsurgical free flap, burn scar reconstruction, and cleft repair — at significantly lower cost than U.S. prices.',
  },
]

const RELATED = [
  { name: 'Fertility & IVF',                         href: '/treatments/fertility-ivf',                desc: 'IVF, egg freezing, and reproductive medicine for U.S. patients' },
  { name: 'Oncology & Cancer Care',                  href: '/treatments/oncology',                     desc: 'Post-mastectomy reconstruction and cancer surgery coordination' },
  { name: 'Dental Surgery & Implant Dentistry',      href: '/treatments/dental-surgery-implant-dentistry', desc: 'Smile design, implants, and full-mouth reconstruction' },
  { name: 'Robotic & Minimally Invasive Surgery',    href: '/treatments/robotic-minimally-invasive',   desc: 'Robotic gynecological and abdominal procedures' },
  { name: 'Obstetrics & Gynaecology',                href: '/treatments/obstetrics-gynaecology',       desc: 'Gynaecological surgery including laparoscopic and hysteroscopic procedures' },
]

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-rose-50 to-slate-100 border-2 border-dashed border-rose-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
      aria-label={label} role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-rose-400 shrink-0" />
        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-rose-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Size:</span>
        <span className="text-[10px] font-bold text-gray-600">{width} × {height} px</span>
      </div>
      <p className="text-[10px] font-semibold text-rose-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function CosmeticHairTransplantPlasticSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#FFF5F7] border-b border-[#ffd6df]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Cosmetic Surgery & Hair Transplant</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Cosmetic, Aesthetic & Reconstructive Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Cosmetic Surgery & Hair Transplant in{' '}
                <span className="text-primary">India & Türkiye</span> — 60–85% Less Than U.S. Prices
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                FUE/DHI hair transplant, rhinoplasty, facelift, breast surgery, body contouring, and post-cancer reconstruction — performed by board-certified plastic surgeons at internationally accredited clinics and JCI hospitals. Sultan GHC coordinates your complete aesthetic journey.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'Board-Certified ISAPS Surgeons' },
                  { icon: Shield,       text: 'Accredited Clinics & JCI Hospitals' },
                  { icon: Activity,     text: 'FUE, DHI & Sapphire Hair Transplant' },
                  { icon: Users,        text: 'Full Aftercare & Follow-Up Coordination' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={15} className="text-primary shrink-0" /><span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Get a Free Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="cosmetic-surgery-hair-transplant-india-turkey-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Modern cosmetic surgery clinic — India or Türkiye, catering to international patients"
                aiPrompt="A bright, modern cosmetic surgery consultation room. An elegant, well-lit clinical space with a mirror wall, professional lighting, and a welcoming atmosphere. Neutral tones, premium finishes. No people. Photorealistic, 4K, no text overlays. Conveys professionalism, safety, and quality."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Procedures Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">A full spectrum of cosmetic, aesthetic, and reconstructive procedures — performed by board-certified surgeons at internationally accredited centers.</p>
          </div>
          <div className="space-y-10">
            {PROCEDURES.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{cat.category}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="bg-gray-50 rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition-shadow">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Activity size={13} className="text-primary" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 leading-snug">{item.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-10">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Discuss Your Procedure <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Cosmetic Surgery Cost Comparison: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from ASPS National Plastic Surgery Statistics (2024) and RealSelf patient cost data. India and Türkiye from accredited partner clinic rates (2025). All-inclusive pricing — surgeon, anesthesia, and facility.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Procedure</th>
                  <th className="text-center px-6 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" /> USA
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" /> India
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary rounded-tr-2xl">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" /> Türkiye
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.procedure}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{row.us}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.india}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Figures are all-inclusive estimates (surgeon + anesthesia + facility). Actual costs vary by graft count, implant choice, and complexity.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">India savings →</Link>{' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">Türkiye savings →</Link>
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India',  value: '65–80%', sub: 'vs U.S. cosmetic surgery prices' },
              { label: 'Average Saving in Türkiye', value: '70–85%', sub: 'vs U.S. cosmetic surgery prices' },
              { label: 'Free Surgeon Matching',    value: '24–48 hrs', sub: 'credentials & before/afters shared' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="text-center bg-primary/5 border border-primary/15 rounded-2xl py-6 px-4">
                <p className="text-3xl font-bold text-primary mb-1">{value}</p>
                <p className="text-sm font-semibold text-gray-800 mb-1">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India / Türkiye */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cosmetic Surgery in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Manipal Hospitals — Plastic Surgery Departments</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Board-certified plastic surgeons at Apollo, Fortis, and Manipal — many trained in the U.S., UK, and France',
                  'AIIMS Delhi and Tata Memorial Mumbai — premier reconstructive plastic surgery for post-cancer patients',
                  'VASER and laser-assisted liposuction with hi-def body sculpting at private hospital plastic surgery units',
                  'Cleft and craniofacial surgery centers with high volume pediatric reconstruction experience',
                  'Post-bariatric body contouring (after weight loss surgery) — comprehensive lower body lift programs',
                  'Very low pricing for reconstructive procedures — breast reconstruction, scar surgery, flap surgery',
                  'India Medical e-Visa in 3–5 business days; recovery-friendly serviced apartments near hospitals',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cosmetic Surgery in Türkiye</h3>
                  <p className="text-sm text-gray-500">Istanbul — Rhinoplasty & Hair Transplant Capital of the World</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Istanbul is globally recognized as the rhinoplasty capital — Turkish surgeons perform tens of thousands annually with international patients from 80+ countries',
                  'Hair transplant Türkiye — among the world\'s highest volume destinations; Sultan GHC partners only with surgeon-supervised, medically licensed FUE and DHI centers',
                  'DHI with Choi implanter pens and Sapphire FUE — Türkiye\'s signature hair restoration techniques',
                  'Acibadem and Memorial plastic surgery departments — JCI-accredited, full general anesthesia services for major procedures',
                  'Facelift and blepharoplasty — high-volume Turkish surgeons with strong natural-result reputations',
                  'U.S. citizens visa-free for Türkiye; Turkish Airlines nonstop from 7 U.S. cities',
                  'All-inclusive recovery packages — airport transfer, hotel, post-op check-ups, translation included',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Sultan GHC Selects Surgeons */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How Sultan GHC Selects Cosmetic Surgery Partners</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              The cosmetic surgery industry — particularly in Türkiye — includes a wide spectrum from world-class surgeons to unaccredited clinic operations. Sultan GHC applies a strict vetting standard before partnering with any cosmetic surgeon or clinic.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Board Certification', desc: 'Surgeons must be certified by their national plastic surgery board — equivalent to ABPS in the U.S. Many are ISAPS (International Society of Aesthetic Plastic Surgery) members.' },
                { title: 'Accredited Facility', desc: 'Procedures must take place in a licensed hospital or clinic with a qualified anesthesiologist — not a day-spa or non-clinical setting.' },
                { title: 'Verified Case Volume', desc: 'We review surgeon case logs and outcomes data before recommending for a specific procedure type — a high-volume rhinoplasty surgeon is not automatically a hair transplant referral.' },
                { title: 'Before/After Transparency', desc: 'We share surgeon before/after results and patient references with you before any commitment. No commitments are made on the first contact.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-primary/5 border border-primary/15 rounded-2xl p-4">
                  <h3 className="text-sm font-semibold text-primary mb-1.5">{title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Tell us about the procedure you're considering and your goals. We'll match you with a board-certified surgeon, share credentials and before/after results, and provide a detailed cost estimate — at no cost, no obligation.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Request Free Consultation <ArrowRight size={15} />
            </Link>
            <a href="tel:+16107870713" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
              <Phone size={15} /> Call +1-610-787-0713
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Treatment Specialties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map((t) => (
              <Link key={t.href} href={t.href} className="group bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl p-5 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{t.name}</h3>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/treatments" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              View All Treatment Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PartnerHospitalsSection title="Internationally Accredited Partner Hospitals" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Cosmetic Surgery Abroad</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            More questions?{' '}
            <Link href="/faq" className="text-primary font-semibold hover:underline">Visit our full FAQ →</Link>{' '}or{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">speak to our Patient Care team</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Start Your Aesthetic Journey</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Describe your goals, share any photos or reports, and we'll connect you with a board-certified surgeon — credentials, before/afters, and cost estimate included.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Get a Free Consultation <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-100 transition-colors">
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
