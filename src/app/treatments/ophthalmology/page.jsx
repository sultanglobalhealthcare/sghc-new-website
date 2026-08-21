import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, Shield, Users, Star
} from 'lucide-react'

export const metadata = {
  title: 'Eye Treatment Abroad | LASIK, Cataract, Retina Surgery | India & Türkiye | Sultan GHC',
  description:
    'LASIK, SMILE, cataract surgery (phacoemulsification), vitreoretinal surgery, corneal transplant, glaucoma, and diabetic retinopathy treatment in India and Türkiye — 70–90% less than U.S. costs. World-renowned eye hospitals: Sankara Nethralaya, LV Prasad Eye Institute, Aravind Eye Hospital. Sultan GHC coordinates your complete eye care journey.',
  keywords: [
    'eye surgery India cost',
    'LASIK India cost',
    'SMILE eye surgery India',
    'cataract surgery India cost',
    'vitreoretinal surgery India cost',
    'corneal transplant India cost',
    'glaucoma surgery India',
    'diabetic retinopathy treatment India',
    'Sankara Nethralaya Chennai',
    'LV Prasad Eye Institute Hyderabad',
    'Aravind Eye Hospital India',
    'eye treatment medical tourism India',
    'affordable eye surgery Americans',
    'Sultan GHC ophthalmology',
    'retinal detachment surgery India cost',
    'LASIK surgery Türkiye cost',
  ],
  openGraph: {
    title: 'Ophthalmology & Eye Surgery in India & Türkiye | Sultan GHC',
    description: 'LASIK, cataract surgery, vitreoretinal, corneal transplant, and glaucoma at world-renowned Indian eye hospitals — 70–90% less than U.S. costs.',
    url: 'https://www.sultanghc.com/treatments/ophthalmology',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eye Surgery Abroad | LASIK, Cataract, Retina | India & Türkiye | Sultan GHC',
    description: 'LASIK, cataract, vitreoretinal, and corneal transplant surgery — 70–90% less than U.S. costs at world-class Indian eye hospitals.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/ophthalmology' }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Ophthalmology', item: 'https://www.sultanghc.com/treatments/ophthalmology' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Ophthalmology & Eye Surgery Abroad — India and Türkiye',
  description: 'Comprehensive eye care including LASIK, cataract surgery, vitreoretinal procedures, corneal transplant, and glaucoma management for U.S. patients at world-renowned hospitals in India and Türkiye.',
  url: 'https://www.sultanghc.com/treatments/ophthalmology',
  about: { '@type': 'MedicalSpecialty', name: 'Ophthalmology', relevantSpecialty: 'Ophthalmology' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does LASIK eye surgery cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LASIK surgery in the U.S. costs $4,000–$6,000 for both eyes (ASRS Patient Survey 2024). At premium eye hospitals in India such as Sankara Nethralaya, LV Prasad Eye Institute, and Apollo Eye, LASIK costs $500–$1,200 for both eyes — a saving of 75–85%. SMILE (Small Incision Lenticule Extraction), the bladeless alternative to LASIK, costs $800–$1,800 in India vs $5,000–$8,000 in the U.S. Contoura Vision (topography-guided LASIK) is also available at select centers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does cataract surgery cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery (phacoemulsification with IOL implant) in the U.S. costs $3,000–$7,000 per eye for self-pay patients (FAIR Health 2024). In India: $300–$800 per eye with a monofocal lens, or $700–$1,500 per eye with a premium multifocal or toric IOL. Premium IOL brands (Alcon AcrySof, J&J Tecnis, Zeiss) are available at all major partner hospitals. Femtosecond laser-assisted cataract surgery (FLACS) is available at $600–$1,200 per eye in India vs $3,500–$5,000 in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is vitreoretinal surgery for retinal detachment available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India has some of the world\'s foremost vitreoretinal surgeons, particularly at LV Prasad Eye Institute Hyderabad, Sankara Nethralaya Chennai, and Narayana Nethralaya Bengaluru. Vitreoretinal surgery (pars plana vitrectomy — PPV) for retinal detachment in the U.S. costs $10,000–$40,000. In India: $1,500–$5,000. Intravitreal injections for diabetic macular edema and wet AMD (anti-VEGF: Avastin, Lucentis, Eylea) cost $100–$300 per injection in India vs $2,000–$3,000 per injection in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Indian eye hospitals world-class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India has produced some of the world\'s most respected ophthalmology institutions. Sankara Nethralaya Chennai was founded by Dr. S.S. Badrinath and is globally recognized for corneal, vitreoretinal, and pediatric eye care — publishing research in leading international journals. LV Prasad Eye Institute Hyderabad (JCI-accredited) is a WHO Collaborating Centre for prevention of blindness. Aravind Eye Hospital performs over 400,000 eye surgeries per year with outcomes comparable to leading U.S. centers at a fraction of the cost. These institutions train ophthalmologists from across the world.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can diabetic eye disease be treated in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India has extensive experience managing diabetic retinopathy — the leading cause of blindness in working-age Americans. Treatment options include laser photocoagulation (pan-retinal or focal), intravitreal anti-VEGF injections (Avastin, Ranibizumab, Aflibercept), and vitreoretinal surgery for advanced tractional retinal detachment or vitreous hemorrhage. Anti-VEGF injections cost $100–$300 per injection in India vs $2,000–$3,000 in the U.S. Sultan GHC coordinates a complete diabetic eye evaluation and treatment plan within 48 hours of receiving your records.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does LASIK surgery take and how long do I need to stay in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LASIK itself takes 10–15 minutes per eye. The pre-operative evaluation (corneal mapping, pachymetry, refraction) is done the day before. Most patients need only 3–5 days in India: Day 1 pre-op workup, Day 2 surgery, Day 3–4 recovery and post-op check, Day 5 clearance to fly. Night flying after LASIK is generally safe by Day 3–5. SMILE patients may fly slightly sooner. Sultan GHC coordinates same-city accommodation near the hospital for the full stay.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is corneal transplant surgery available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Full penetrating keratoplasty (PK), DALK (Deep Anterior Lamellar Keratoplasty) for keratoconus and stromal scarring, DSAEK, and DMEK (for Fuchs endothelial dystrophy) are all available at Sankara Nethralaya, LV Prasad, and Narayana Nethralaya. India has a national eye bank network. Corneal transplant in the U.S. costs $13,000–$28,000. In India: $1,500–$5,000 depending on tissue type. Sultan GHC coordinates eye tissue availability and surgical scheduling in advance.'
      }
    },
  ]
}

const CONDITIONS = [
  { name: 'Cataracts',                                   icon: '👁️' },
  { name: 'Myopia, Hyperopia & Astigmatism (LASIK)',     icon: '🔍' },
  { name: 'Diabetic Retinopathy',                        icon: '🩸' },
  { name: 'Retinal Detachment',                          icon: '⚡' },
  { name: 'Macular Degeneration (AMD)',                  icon: '🌑' },
  { name: 'Glaucoma (Open & Closed Angle)',              icon: '🔵' },
  { name: 'Keratoconus',                                 icon: '🔻' },
  { name: 'Corneal Scarring & Dystrophy',                icon: '🪟' },
  { name: 'Squint (Strabismus)',                         icon: '↔️' },
  { name: 'Ptosis (Drooping Eyelid)',                    icon: '⬇️' },
  { name: 'Uveitis',                                     icon: '🔥' },
  { name: 'Dry Eye Disease (Severe)',                    icon: '💧' },
  { name: 'Vitreous Hemorrhage',                         icon: '🔴' },
  { name: 'Macular Hole & Epiretinal Membrane',          icon: '🎯' },
  { name: 'Pediatric Eye Conditions',                    icon: '👶' },
  { name: 'Thyroid Eye Disease (TED)',                   icon: '🦋' },
]

const PROCEDURES = [
  {
    title: 'LASIK & SMILE Refractive Surgery',
    desc: 'LASIK (Laser-Assisted In Situ Keratomileusis) and SMILE (Small Incision Lenticule Extraction) correct myopia, hyperopia, and astigmatism. SMILE is bladeless and flapless — preferred for patients with dry eyes or high myopia. Contoura Vision (topography-guided LASIK) available at select centers. Pre-op screening: corneal topography, pachymetry, wavefront analysis.',
    badge: 'Most Popular'
  },
  {
    title: 'Cataract Surgery (Phacoemulsification)',
    desc: 'Phacoemulsification (ultrasound-assisted lens removal) with intraocular lens (IOL) implantation — day surgery under topical anaesthesia, 15–20 minutes per eye. Premium IOLs: monofocal, multifocal (presbyopia-correcting), extended-depth-of-focus (EDOF), and toric (for astigmatism). Brands: Alcon AcrySof ReSTOR, J&J Tecnis Symfony, Zeiss AT Lisa. Femtosecond laser-assisted cataract surgery (FLACS) available at select centres.',
    badge: null
  },
  {
    title: 'Vitreoretinal Surgery (PPV)',
    desc: 'Pars plana vitrectomy (PPV) for retinal detachment, vitreous hemorrhage, macular hole, epiretinal membrane, and proliferative diabetic retinopathy. 23G and 25G micro-incision vitrectomy (MIVS) with intraoperative OCT available at LV Prasad Eye Institute and Sankara Nethralaya. Scleral buckling and endolaser also available.',
    badge: null
  },
  {
    title: 'Corneal Transplant (DALK / DSAEK / DMEK)',
    desc: 'Selective corneal transplantation — DALK (for keratoconus and anterior pathology), DSAEK and DMEK (for Fuchs endothelial dystrophy and posterior corneal disease). DMEK offers faster visual recovery with lower rejection rates. Full-thickness penetrating keratoplasty (PK) for pan-stromal disease. Eye bank coordination included.',
    badge: null
  },
  {
    title: 'Glaucoma Surgery (Trabeculectomy & MIGS)',
    desc: 'Trabeculectomy (standard filtration surgery), Ex-PRESS shunt, and minimally invasive glaucoma surgery (MIGS — iStent, Hydrus, PRESERFLO MicroShunt) for medically uncontrolled glaucoma. Ahmed and Baerveldt glaucoma drainage devices for refractory cases. Combined phaco-trabeculectomy for glaucoma with concurrent cataract.',
    badge: null
  },
  {
    title: 'Intravitreal Injections (Anti-VEGF / Steroid)',
    desc: 'Intravitreal injections of anti-VEGF agents (Bevacizumab/Avastin, Ranibizumab/Lucentis, Aflibercept/Eylea) for wet AMD, diabetic macular edema, retinal vein occlusion, and neovascularization. Cost $100–$300 per injection in India vs $2,000–$3,000 in the U.S. Loading doses (3 monthly injections) cost $300–$900 in India vs $6,000–$9,000 in the U.S.',
    badge: 'High Saving'
  },
  {
    title: 'Corneal Cross-Linking (CXL) for Keratoconus',
    desc: 'Riboflavin + UV-A collagen cross-linking to halt keratoconus progression — standard (Dresden protocol) and accelerated CXL. Often combined with topography-guided surface ablation (TGSAEK) or intrastromal corneal ring segments (ICRS/Intacs). Available at Sankara Nethralaya, LV Prasad, and Apollo Eye Hospitals.',
    badge: null
  },
  {
    title: 'Squint Surgery (Strabismus Correction)',
    desc: 'Extraocular muscle surgery for horizontal and vertical squint — recession and resection procedures under general anaesthesia (adults: local + sedation). Adjustable suture technique for precise adult alignment. Pediatric squint surgery available at dedicated children\'s eye hospitals. Day surgery — 1–2 nights accommodation in India.',
    badge: null
  },
  {
    title: 'Oculoplastics — Ptosis, Entropion, Dacryocystorhinostomy',
    desc: 'Ptosis repair (levator resection, frontalis sling), entropion and ectropion correction, DCR (dacryocystorhinostomy — nasolacrimal duct bypass), and chalazion/eyelid lesion excision. Orbital decompression for thyroid eye disease (TED). Botulinum toxin for blepharospasm and hemifacial spasm.',
    badge: null
  },
  {
    title: 'Diabetic Retinopathy Laser & Surgery',
    desc: 'Pan-retinal photocoagulation (PRP) laser for proliferative diabetic retinopathy, focal/grid laser for diabetic macular edema, and vitrectomy for tractional retinal detachment or non-clearing vitreous hemorrhage. Combined with anti-VEGF injection therapy. Complete diabetic eye evaluation (fundus photo, OCT, FFA) coordinated by Sultan GHC.',
    badge: null
  },
]

const COST_COMPARISON = [
  { procedure: 'LASIK (both eyes)',                     us: '$4,000–$6,000',   india: '$500–$1,200',   turkey: '$800–$2,000',  save: '~80%' },
  { procedure: 'SMILE (both eyes)',                     us: '$5,000–$8,000',   india: '$800–$1,800',   turkey: '$1,200–$2,800', save: '~78%' },
  { procedure: 'Cataract (monofocal IOL, per eye)',     us: '$3,000–$7,000',   india: '$300–$800',     turkey: '$500–$1,200',  save: '~88%' },
  { procedure: 'Cataract (premium multifocal IOL)',     us: '$4,500–$9,000',   india: '$700–$1,500',   turkey: '$1,000–$2,200', save: '~83%' },
  { procedure: 'Vitreoretinal Surgery (PPV)',           us: '$10,000–$40,000', india: '$1,500–$5,000', turkey: '$2,500–$7,000', save: '~86%' },
  { procedure: 'Corneal Transplant (DALK/DMEK)',        us: '$13,000–$28,000', india: '$1,500–$5,000', turkey: '$3,000–$7,000', save: '~83%' },
  { procedure: 'Glaucoma Surgery (trabeculectomy)',     us: '$6,000–$18,000',  india: '$800–$2,500',   turkey: '$1,500–$4,000', save: '~85%' },
  { procedure: 'Anti-VEGF Injection (per dose)',        us: '$2,000–$3,000',   india: '$100–$300',     turkey: '$200–$500',    save: '~90%' },
  { procedure: 'Corneal Cross-Linking (CXL)',           us: '$3,000–$5,000',   india: '$500–$1,200',   turkey: '$700–$1,800',  save: '~80%' },
  { procedure: 'Squint Correction Surgery',             us: '$5,000–$12,000',  india: '$600–$2,000',   turkey: '$1,000–$3,000', save: '~83%' },
  { procedure: 'Ptosis Repair (oculoplastics)',         us: '$4,000–$10,000',  india: '$500–$1,500',   turkey: '$800–$2,500',  save: '~85%' },
]

const FAQS = [
  {
    q: 'How much does LASIK eye surgery cost in India?',
    a: 'LASIK in the U.S.: $4,000–$6,000 for both eyes (ASRS 2024). India: $500–$1,200. SMILE: $800–$1,800 India vs $5,000–$8,000 U.S. Contoura Vision topography-guided LASIK also available.'
  },
  {
    q: 'How much does cataract surgery cost in India?',
    a: 'Cataract surgery (phaco + IOL) in the U.S.: $3,000–$7,000 per eye. India: $300–$800 per eye (monofocal), $700–$1,500 (premium multifocal). Alcon, J&J, and Zeiss IOL brands available. Femtosecond laser-assisted (FLACS): $600–$1,200 India vs $3,500–$5,000 U.S.'
  },
  {
    q: 'Is vitreoretinal surgery for retinal detachment available in India?',
    a: 'Yes. LV Prasad Eye Institute and Sankara Nethralaya are globally renowned for vitreoretinal care. PPV for retinal detachment: $1,500–$5,000 India vs $10,000–$40,000 U.S. Anti-VEGF injections: $100–$300 India vs $2,000–$3,000 U.S.'
  },
  {
    q: 'What makes Indian eye hospitals world-class?',
    a: 'Sankara Nethralaya (Chennai), LV Prasad Eye Institute (Hyderabad — JCI-accredited, WHO Collaborating Centre), and Aravind Eye Hospital perform 400,000+ surgeries/year with outcomes comparable to leading U.S. centers. They train ophthalmologists worldwide.'
  },
  {
    q: 'Can diabetic eye disease be treated in India?',
    a: 'Yes. Anti-VEGF injections (Avastin, Ranibizumab, Aflibercept): $100–$300/dose India vs $2,000–$3,000 U.S. A loading dose of 3 monthly injections costs $300–$900 India vs $6,000–$9,000 U.S. PRP laser and vitrectomy also available.'
  },
  {
    q: 'How long do I need to stay in India for LASIK?',
    a: '3–5 days total: Day 1 pre-op workup, Day 2 surgery, Day 3–4 recovery check, Day 5 flying clearance. Cataract surgery (one eye): 2–3 days. Both eyes in same trip: 5–7 days. Vitreoretinal surgery: 7–14 days.'
  },
]

const RELATED = [
  { name: 'Neurology',                   href: '/treatments/neurology',        desc: 'Neuro-ophthalmology — optic neuritis, visual field loss in neurological conditions' },
  { name: 'Oncology & Cancer Care',      href: '/treatments/oncology',         desc: 'Ocular melanoma, retinoblastoma, and orbital tumors' },
  { name: 'ENT & Head-Neck Surgery',     href: '/treatments/ent-head-neck-surgery', desc: 'Orbital and periorbital conditions, thyroid eye disease workup' },
  { name: 'Cardiology & Cardiac Surgery',href: '/treatments/cardiology',       desc: 'Pre-surgical cardiac clearance for elderly cataract patients' },
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
