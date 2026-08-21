import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity,
  Shield, Users
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
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmetic Surgery & Hair Transplant Abroad | India & Türkiye | Sultan GHC',
    description: 'FUE/DHI hair transplant, rhinoplasty, liposuction, tummy tuck, breast surgery — 60–85% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/cosmetic-hair-transplant-plastic-surgery' }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Cosmetic Surgery & Hair Transplant', item: 'https://www.sultanghc.com/treatments/cosmetic-hair-transplant-plastic-surgery' },
  ]
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
    relevantSpecialty: 'Plastic Surgery'
  }
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
        text: 'FUE hair transplant in the U.S. typically costs $8,000–$20,000 depending on graft count and clinic. In Türkiye at JCI-accredited or internationally certified clinics, the same procedure costs $1,500–$4,000 — a saving of 75–85%. DHI (Direct Hair Implantation) is similarly priced. Türkiye is one of the world\'s highest-volume hair transplant destinations, with some clinics performing 5,000–10,000 procedures annually. Sultan GHC partners exclusively with surgically supervised, medically accredited centers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does rhinoplasty (nose job) cost in Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rhinoplasty in the U.S. costs $8,000–$25,000 (ASPS National Plastic Surgery Statistics 2024). In Türkiye at board-certified plastic surgery clinics: $2,500–$6,000. Türkiye\'s rhinoplasty surgeons — particularly in Istanbul — have a global reputation for precision closed and open rhinoplasty techniques. India rhinoplasty costs $1,500–$4,000. Sultan GHC shares surgeon credentials, before/after portfolios, and patient references before any commitment.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a tummy tuck (abdominoplasty) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tummy tuck (abdominoplasty) in the U.S. costs $8,000–$25,000 including anesthesia and facility fees (ASPS 2024). In India: $2,500–$5,500. In Türkiye: $3,000–$7,000. Combination body contouring — tummy tuck with liposuction or breast surgery (Mommy Makeover) — costs $5,000–$10,000 in India vs $20,000–$50,000 in the U.S. All procedures are performed by board-certified plastic surgeons at accredited facilities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are cosmetic surgery results in India and Türkiye comparable to U.S. standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sultan GHC partners exclusively with plastic surgeons who are board-certified by their national plastic surgery boards (ISAPS members in many cases), trained at internationally recognized programs, and operating in accredited facilities. Many surgeons trained in the U.S., UK, Germany, or France. Outcomes depend heavily on surgeon selection — Sultan GHC shares surgeon credentials, case volume, and before/after results as part of the matching process. We do not partner with or recommend any clinic-mill or non-surgeon-supervised hair transplant center.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in Türkiye for a hair transplant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most hair transplant patients need 3–5 days in Türkiye: Day 1 consultation and blood work, Day 2 procedure (6–8 hours for 3,000–5,000 grafts), Day 3 first wash and care instructions. Rhinoplasty requires 7–10 days for splint removal and swelling assessment. Tummy tuck or Mommy Makeover requires 10–14 days.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is reconstructive plastic surgery and is it available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reconstructive plastic surgery repairs form and function after cancer, trauma, burn injury, or congenital conditions — including breast reconstruction after mastectomy, scar revision, flap surgery, and cleft lip/palate repair. Sultan GHC\'s partner hospitals in India (Apollo, Fortis, Manipal, Tata Memorial) have plastic surgery departments that perform post-oncology breast reconstruction, microsurgical free flap reconstruction, and complex scar management. Reconstructive procedures are priced significantly lower than in the U.S.'
      }
    },
  ]
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
    ]
  },
  {
    category: 'Face & Neck',
    items: [
      { name: 'Rhinoplasty (Open & Closed)', desc: 'Primary and revision rhinoplasty — structural, functional, and aesthetic correction. Türkiye\'s Istanbul-based surgeons are internationally recognized for natural results.' },
      { name: 'Facelift (SMAS & Deep Plane)', desc: 'SMAS facelift, mini-facelift, deep plane facelift, and neck lift — with or without fat grafting or blepharoplasty. Available at select India and Türkiye centers.' },
      { name: 'Eyelid Surgery (Blepharoplasty)', desc: 'Upper and lower blepharoplasty for hooded lids, under-eye bags, and functional vision obstruction. Often combined with facelift.' },
      { name: 'Otoplasty & Ear Reshaping', desc: 'Ear pinning, ear reduction, and reconstruction for prominent or asymmetric ears — day-surgery procedure.' },
    ]
  },
  {
    category: 'Body Contouring',
    items: [
      { name: 'Liposuction (VASER & Standard)', desc: 'VASER ultrasound-assisted liposuction and standard tumescent liposuction for abdomen, flanks, thighs, arms, and gynecomastia. Available in India and Türkiye.' },
      { name: 'Tummy Tuck (Abdominoplasty)', desc: 'Full and mini abdominoplasty — with or without rectus diastasis repair. Commonly combined with liposuction for body contouring after weight loss or pregnancy.' },
      { name: 'Mommy Makeover', desc: 'Combination breast lift/augmentation + tummy tuck + liposuction in a single surgical session — priced as a package in both India and Türkiye.' },
      { name: 'Arm Lift (Brachioplasty) & Thigh Lift', desc: 'Skin excision and contouring after significant weight loss — often combined with lower body lift.' },
    ]
  },
  {
    category: 'Breast Surgery',
    items: [
      { name: 'Breast Augmentation', desc: 'Silicone and cohesive gel implants — round and anatomical shapes. FDA-equivalent implant brands (Mentor, Motiva, Silimed) available at partner clinics.' },
      { name: 'Breast Lift (Mastopexy)', desc: 'Crescent, lollipop, and anchor mastopexy — with or without implants — for ptosis following pregnancy, weight loss, or age.' },
      { name: 'Breast Reduction', desc: 'Functional and aesthetic breast reduction with nipple repositioning — covered by insurance in the U.S.; priced at $2,500–$5,000 in India and Türkiye.' },
      { name: 'Breast Reconstruction (Post-Mastectomy)', desc: 'Implant-based or autologous flap reconstruction (TRAM, DIEP, latissimus dorsi) for breast cancer survivors — available at Tata Memorial, Apollo, and Fortis.' },
    ]
  },
  {
    category: 'Reconstructive & Scar Surgery',
    items: [
      { name: 'Burn Scar Reconstruction', desc: 'Split-thickness skin grafting, full-thickness grafting, flap surgery, and tissue expansion for burn scars — India has dedicated burn reconstruction programs at tertiary centers.' },
      { name: 'Microsurgical Free Flap Reconstruction', desc: 'Complex soft tissue defect reconstruction after oncological resection or trauma — perforator flap and free flap techniques at Apollo, Manipal, and Koç University.' },
      { name: 'Cleft Lip & Palate Repair', desc: 'Primary cleft lip repair, palatoplasty, alveolar bone grafting, and secondary revision — available at pediatric plastic surgery centers in India at very low cost.' },
      { name: 'Keloid & Hypertrophic Scar Treatment', desc: 'Combination excision, intralesional therapy, silicone sheeting, and radiotherapy for problematic scars — available at India and Türkiye plastic surgery departments.' },
    ]
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
    a: 'FUE in the U.S.: $8,000–$20,000. Türkiye: $1,500–$4,000 — saving 75–85%. DHI is similarly priced. Sultan GHC partners exclusively with surgically supervised, medically accredited centers — not clinic mills.'
  },
  {
    q: 'How much does rhinoplasty cost in Türkiye?',
    a: 'Rhinoplasty in the U.S.: $8,000–$25,000 (ASPS 2024). Türkiye: $2,500–$6,000. India: $1,500–$4,000. Sultan GHC shares surgeon credentials, before/after portfolios, and references before any commitment.'
  },
  {
    q: 'How much does a tummy tuck cost in India?',
    a: 'Tummy tuck in the U.S.: $8,000–$25,000. India: $2,500–$5,500. Mommy Makeover combinations cost $5,000–$10,000 in India vs $20,000–$50,000 in the U.S.'
  },
  {
    q: 'Are cosmetic surgery results abroad comparable to U.S. standards?',
    a: 'Sultan GHC partners only with board-certified plastic surgeons (many ISAPS members), trained at internationally recognized programs, operating in accredited facilities. We share credentials, case volume, and before/after results as part of matching.'
  },
  {
    q: 'How long do I need to stay in Türkiye for a hair transplant?',
    a: 'Hair transplant: 3–5 days. Rhinoplasty: 7–10 days. Tummy tuck / Mommy Makeover: 10–14 days.'
  },
  {
    q: 'Is reconstructive plastic surgery (post-cancer) available in India?',
    a: 'Yes. Partner hospitals (Apollo, Fortis, Manipal, Tata Memorial) perform post-mastectomy breast reconstruction (implant and flap), microsurgical free flap, burn scar reconstruction, and cleft repair — at significantly lower cost than U.S. prices.'
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
  const ratio = aspectRatio || `${width}/${height}`
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      aria-label={label}
      role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
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
