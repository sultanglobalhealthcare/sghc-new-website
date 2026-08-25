import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection"
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, Shield, Users, ImageIcon, Star,
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eye Surgery Abroad | LASIK, Cataract, Retina | India & Türkiye | Sultan GHC',
    description: 'LASIK, cataract, vitreoretinal, and corneal transplant surgery — 70–90% less than U.S. costs at world-class Indian eye hospitals.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/ophthalmology' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Ophthalmology', item: 'https://www.sultanghc.com/treatments/ophthalmology' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Ophthalmology & Eye Surgery Abroad — India and Türkiye',
  description: 'Comprehensive eye care including LASIK, cataract surgery, vitreoretinal procedures, corneal transplant, and glaucoma management for U.S. patients at world-renowned hospitals in India and Türkiye.',
  url: 'https://www.sultanghc.com/treatments/ophthalmology',
  about: { '@type': 'MedicalSpecialty', name: 'Ophthalmology', relevantSpecialty: 'Ophthalmology' },
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
        text: 'LASIK surgery in the U.S. costs $4,000–$6,000 for both eyes (ASRS Patient Survey 2024). At premium eye hospitals in India such as Sankara Nethralaya, LV Prasad Eye Institute, and Apollo Eye, LASIK costs $500–$1,200 for both eyes — a saving of 75–85%. SMILE (Small Incision Lenticule Extraction), the bladeless alternative to LASIK, costs $800–$1,800 in India vs $5,000–$8,000 in the U.S. Contoura Vision (topography-guided LASIK) is also available at select centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does cataract surgery cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery (phacoemulsification with IOL implant) in the U.S. costs $3,000–$7,000 per eye for self-pay patients (FAIR Health 2024). In India: $300–$800 per eye with a monofocal lens, or $700–$1,500 per eye with a premium multifocal or toric IOL. Premium IOL brands (Alcon AcrySof, J&J Tecnis, Zeiss) are available at all major partner hospitals. Femtosecond laser-assisted cataract surgery (FLACS) is available at $600–$1,200 per eye in India vs $3,500–$5,000 in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is vitreoretinal surgery for retinal detachment available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India has some of the world\'s foremost vitreoretinal surgeons, particularly at LV Prasad Eye Institute Hyderabad, Sankara Nethralaya Chennai, and Narayana Nethralaya Bengaluru. Vitreoretinal surgery (pars plana vitrectomy — PPV) for retinal detachment in the U.S. costs $10,000–$40,000. In India: $1,500–$5,000. Intravitreal injections for diabetic macular edema and wet AMD (anti-VEGF: Avastin, Lucentis, Eylea) cost $100–$300 per injection in India vs $2,000–$3,000 per injection in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Indian eye hospitals world-class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India has produced some of the world\'s most respected ophthalmology institutions. Sankara Nethralaya Chennai was founded by Dr. S.S. Badrinath and is globally recognized for corneal, vitreoretinal, and pediatric eye care — publishing research in leading international journals. LV Prasad Eye Institute Hyderabad (JCI-accredited) is a WHO Collaborating Centre for prevention of blindness. Aravind Eye Hospital performs over 400,000 eye surgeries per year with outcomes comparable to leading U.S. centers at a fraction of the cost. These institutions train ophthalmologists from across the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can diabetic eye disease be treated in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India has extensive experience managing diabetic retinopathy — the leading cause of blindness in working-age Americans. Treatment options include laser photocoagulation (pan-retinal or focal), intravitreal anti-VEGF injections (Avastin, Ranibizumab, Aflibercept), and vitreoretinal surgery for advanced tractional retinal detachment or vitreous hemorrhage. Anti-VEGF injections cost $100–$300 per injection in India vs $2,000–$3,000 in the U.S. Sultan GHC coordinates a complete diabetic eye evaluation and treatment plan within 48 hours of receiving your records.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does LASIK surgery take and how long do I need to stay in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LASIK itself takes 10–15 minutes per eye. The pre-operative evaluation (corneal mapping, pachymetry, refraction) is done the day before. Most patients need only 3–5 days in India: Day 1 pre-op workup, Day 2 surgery, Day 3–4 recovery and post-op check, Day 5 clearance to fly. Night flying after LASIK is generally safe by Day 3–5. SMILE patients may fly slightly sooner. Sultan GHC coordinates same-city accommodation near the hospital for the full stay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is corneal transplant surgery available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Full penetrating keratoplasty (PK), DALK (Deep Anterior Lamellar Keratoplasty) for keratoconus and stromal scarring, DSAEK, and DMEK (for Fuchs endothelial dystrophy) are all available at Sankara Nethralaya, LV Prasad, and Narayana Nethralaya. India has a national eye bank network. Corneal transplant in the U.S. costs $13,000–$28,000. In India: $1,500–$5,000 depending on tissue type. Sultan GHC coordinates eye tissue availability and surgical scheduling in advance.',
      },
    },
  ],
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
    badge: 'Most Popular',
  },
  {
    title: 'Cataract Surgery (Phacoemulsification)',
    desc: 'Phacoemulsification (ultrasound-assisted lens removal) with intraocular lens (IOL) implantation — day surgery under topical anaesthesia, 15–20 minutes per eye. Premium IOLs: monofocal, multifocal (presbyopia-correcting), extended-depth-of-focus (EDOF), and toric (for astigmatism). Brands: Alcon AcrySof ReSTOR, J&J Tecnis Symfony, Zeiss AT Lisa. Femtosecond laser-assisted cataract surgery (FLACS) available at select centres.',
    badge: null,
  },
  {
    title: 'Vitreoretinal Surgery (PPV)',
    desc: 'Pars plana vitrectomy (PPV) for retinal detachment, vitreous hemorrhage, macular hole, epiretinal membrane, and proliferative diabetic retinopathy. 23G and 25G micro-incision vitrectomy (MIVS) with intraoperative OCT available at LV Prasad Eye Institute and Sankara Nethralaya. Scleral buckling and endolaser also available.',
    badge: null,
  },
  {
    title: 'Corneal Transplant (DALK / DSAEK / DMEK)',
    desc: 'Selective corneal transplantation — DALK (for keratoconus and anterior pathology), DSAEK and DMEK (for Fuchs endothelial dystrophy and posterior corneal disease). DMEK offers faster visual recovery with lower rejection rates. Full-thickness penetrating keratoplasty (PK) for pan-stromal disease. Eye bank coordination included.',
    badge: null,
  },
  {
    title: 'Glaucoma Surgery (Trabeculectomy & MIGS)',
    desc: 'Trabeculectomy (standard filtration surgery), Ex-PRESS shunt, and minimally invasive glaucoma surgery (MIGS — iStent, Hydrus, PRESERFLO MicroShunt) for medically uncontrolled glaucoma. Ahmed and Baerveldt glaucoma drainage devices for refractory cases. Combined phaco-trabeculectomy for glaucoma with concurrent cataract.',
    badge: null,
  },
  {
    title: 'Intravitreal Injections (Anti-VEGF / Steroid)',
    desc: 'Intravitreal injections of anti-VEGF agents (Bevacizumab/Avastin, Ranibizumab/Lucentis, Aflibercept/Eylea) for wet AMD, diabetic macular edema, retinal vein occlusion, and neovascularization. Cost $100–$300 per injection in India vs $2,000–$3,000 in the U.S. Loading doses (3 monthly injections) cost $300–$900 in India vs $6,000–$9,000 in the U.S.',
    badge: 'High Saving',
  },
  {
    title: 'Corneal Cross-Linking (CXL) for Keratoconus',
    desc: 'Riboflavin + UV-A collagen cross-linking to halt keratoconus progression — standard (Dresden protocol) and accelerated CXL. Often combined with topography-guided surface ablation (TGSAEK) or intrastromal corneal ring segments (ICRS/Intacs). Available at Sankara Nethralaya, LV Prasad, and Apollo Eye Hospitals.',
    badge: null,
  },
  {
    title: 'Squint Surgery (Strabismus Correction)',
    desc: 'Extraocular muscle surgery for horizontal and vertical squint — recession and resection procedures under general anaesthesia (adults: local + sedation). Adjustable suture technique for precise adult alignment. Pediatric squint surgery available at dedicated children\'s eye hospitals. Day surgery — 1–2 nights accommodation in India.',
    badge: null,
  },
  {
    title: 'Oculoplastics — Ptosis, Entropion, Dacryocystorhinostomy',
    desc: 'Ptosis repair (levator resection, frontalis sling), entropion and ectropion correction, DCR (dacryocystorhinostomy — nasolacrimal duct bypass), and chalazion/eyelid lesion excision. Orbital decompression for thyroid eye disease (TED). Botulinum toxin for blepharospasm and hemifacial spasm.',
    badge: null,
  },
  {
    title: 'Diabetic Retinopathy Laser & Surgery',
    desc: 'Pan-retinal photocoagulation (PRP) laser for proliferative diabetic retinopathy, focal/grid laser for diabetic macular edema, and vitrectomy for tractional retinal detachment or non-clearing vitreous hemorrhage. Combined with anti-VEGF injection therapy. Complete diabetic eye evaluation (fundus photo, OCT, FFA) coordinated by Sultan GHC.',
    badge: null,
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
    a: 'LASIK in the U.S.: $4,000–$6,000 for both eyes (ASRS 2024). India: $500–$1,200. SMILE: $800–$1,800 India vs $5,000–$8,000 U.S. Contoura Vision topography-guided LASIK also available.',
  },
  {
    q: 'How much does cataract surgery cost in India?',
    a: 'Cataract surgery (phaco + IOL) in the U.S.: $3,000–$7,000 per eye. India: $300–$800 per eye (monofocal), $700–$1,500 (premium multifocal). Alcon, J&J, and Zeiss IOL brands available. Femtosecond laser-assisted (FLACS): $600–$1,200 India vs $3,500–$5,000 U.S.',
  },
  {
    q: 'Is vitreoretinal surgery for retinal detachment available in India?',
    a: 'Yes. LV Prasad Eye Institute and Sankara Nethralaya are globally renowned for vitreoretinal care. PPV for retinal detachment: $1,500–$5,000 India vs $10,000–$40,000 U.S. Anti-VEGF injections: $100–$300 India vs $2,000–$3,000 U.S.',
  },
  {
    q: 'What makes Indian eye hospitals world-class?',
    a: 'Sankara Nethralaya (Chennai), LV Prasad Eye Institute (Hyderabad — JCI-accredited, WHO Collaborating Centre), and Aravind Eye Hospital perform 400,000+ surgeries/year with outcomes comparable to leading U.S. centers. They train ophthalmologists worldwide.',
  },
  {
    q: 'Can diabetic eye disease be treated in India?',
    a: 'Yes. Anti-VEGF injections (Avastin, Ranibizumab, Aflibercept): $100–$300/dose India vs $2,000–$3,000 U.S. A loading dose of 3 monthly injections costs $300–$900 India vs $6,000–$9,000 U.S. PRP laser and vitrectomy also available.',
  },
  {
    q: 'How long do I need to stay in India for LASIK?',
    a: '3–5 days total: Day 1 pre-op workup, Day 2 surgery, Day 3–4 recovery check, Day 5 flying clearance. Cataract surgery (one eye): 2–3 days. Both eyes in same trip: 5–7 days. Vitreoretinal surgery: 7–14 days.',
  },
]

const RELATED = [
  { name: 'Neurology',                   href: '/treatments/neurology',        desc: 'Neuro-ophthalmology — optic neuritis, visual field loss in neurological conditions' },
  { name: 'Oncology & Cancer Care',      href: '/treatments/oncology',         desc: 'Ocular melanoma, retinoblastoma, and orbital tumors' },
  { name: 'ENT & Head-Neck Surgery',     href: '/treatments/ent-head-neck-surgery', desc: 'Orbital and periorbital conditions, thyroid eye disease workup' },
  { name: 'Cardiology & Cardiac Surgery',href: '/treatments/cardiology',       desc: 'Pre-surgical cardiac clearance for elderly cataract patients' },
]

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div className={`relative bg-gradient-to-br from-sky-50 to-slate-100 border-2 border-dashed border-sky-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }} aria-label={label} role="img">
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-sky-400 shrink-0" />
        <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-sky-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <p className="text-[10px] font-semibold text-sky-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function OphthalmologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#EFF8FF] border-b border-[#c9e8ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Ophthalmology</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Eye Care & Ophthalmic Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Eye Surgery in{' '}
                <span className="text-primary">India & Türkiye</span> — 75–90% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                From LASIK and cataract surgery to vitreoretinal procedures, corneal transplants, and glaucoma management — Sultan GHC connects U.S. patients with India&apos;s globally acclaimed eye hospitals including Sankara Nethralaya, LV Prasad Eye Institute, and Aravind Eye Hospital.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Star,         text: 'Sankara Nethralaya & LV Prasad Eye Institute' },
                  { icon: Shield,       text: 'JCI-Accredited Eye Hospitals' },
                  { icon: Activity,     text: 'LASIK, SMILE & Premium IOL Cataract' },
                  { icon: Users,        text: 'Vitreoretinal & Corneal Transplant Expertise' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={14} className="text-primary shrink-0" />{text}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Get a Free Eye Care Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="ophthalmology-lasik-cataract-retina-surgery-india-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Ophthalmic surgical suite — LASIK laser system at world-class Indian eye hospital"
                aiPrompt="A modern LASIK laser suite at a premier Indian eye hospital. A patient reclined under a LASIK laser machine, surgeon seated at controls. Clean, bright, professional environment. Photorealistic, 4K, no text overlays. Conveys precision, safety, and care."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indian eye hospital spotlight */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">India&apos;s World-Renowned Eye Hospitals — Sultan GHC Partner Network</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { name: 'Sankara Nethralaya', city: 'Chennai', note: 'Founded by Dr. S.S. Badrinath. Globally recognized for corneal, vitreoretinal, and pediatric eye care. Trains ophthalmologists from 40+ countries.' },
              { name: 'LV Prasad Eye Institute', city: 'Hyderabad', note: 'JCI-accredited. WHO Collaborating Centre for Prevention of Blindness. World leader in corneal transplant, glaucoma, and retinal diseases.' },
              { name: 'Aravind Eye Hospital', city: 'Madurai / Multi-city', note: '400,000+ eye surgeries/year. Outcomes data published in international journals. Benchmark for high-volume, high-quality affordable eye care.' },
            ].map(({ name, city, note }) => (
              <div key={name} className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">{name}</h3>
                <p className="text-xs text-primary font-semibold mb-2">{city}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Eye Conditions We Coordinate Care For</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">From common refractive errors to complex retinal and corneal diseases — partner hospitals manage the complete spectrum of ophthalmic conditions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONDITIONS.map(({ name, icon }) => (
              <div key={name} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                <span className="text-lg shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Eye Procedures Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">State-of-the-art equipment — ZEISS VisuMax 800 SMILE laser, Alcon LenSx femtosecond, Constellation vitrectomy system, and intraoperative OCT — at partner hospitals.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCEDURES.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {p.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${p.badge === 'High Saving' ? 'bg-green-100 text-green-700' : 'bg-primary/10 text-primary'}`}>{p.badge}</span>
                )}
                <div className="flex items-start gap-3 mb-3 pr-24">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity size={15} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-11">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Eye Surgery Cost: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from FAIR Health Consumer (2024) and ASRS Patient Survey. India and Türkiye from JCI-accredited partner hospital published rates (2025).</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Procedure</th>
                  <th className="text-center px-5 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" /> USA</span>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" /> India</span>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" /> Türkiye</span>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold text-green-400 rounded-tr-2xl">Save (India)</th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3.5 font-medium text-gray-800">{row.procedure}</td>
                    <td className="px-5 py-3.5 text-center text-red-600 font-semibold">{row.us}</td>
                    <td className="px-5 py-3.5 text-center text-primary font-semibold">{row.india}</td>
                    <td className="px-5 py-3.5 text-center text-primary font-semibold">{row.turkey}</td>
                    <td className="px-5 py-3.5 text-center"><span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">{row.save}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">Figures are approximate self-pay estimates. <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link></p>
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
                  <h3 className="text-lg font-semibold text-gray-900">Eye Care in India</h3>
                  <p className="text-sm text-gray-500">Sankara Nethralaya, LV Prasad, Aravind, Apollo Eye, Medanta, Rela Institute</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'India is home to some of the world\'s most respected eye hospitals — training ophthalmologists from the U.S., UK, Europe, and Asia',
                  'LV Prasad Eye Institute (Hyderabad) — JCI-accredited, WHO Collaborating Centre, leader in corneal transplant (DALK/DMEK) and glaucoma',
                  'Sankara Nethralaya (Chennai) — globally recognized for vitreoretinal surgery, pediatric ophthalmology, and corneal disease',
                  'Aravind Eye Hospital — 400,000+ surgeries/year with published clinical outcomes data; world benchmark for high-quality affordable eye care',
                  'Narayana Nethralaya (Bengaluru) — advanced refractive surgery, oculoplastics, and retina center',
                  'ZEISS VisuMax 800 SMILE, Alcon LenSx FLACS, and CONSTELLATION vitrectomy at partner hospitals',
                                    'Rela Institute, Chennai — NABH-accredited 450-bed multi-specialty hospital; MOU partner of Sultan GHC',
'India Medical e-Visa in 3–5 days; 3–5 day LASIK/cataract trips fully coordinated by Sultan GHC',
                ].map(pt => (
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
                  <h3 className="text-lg font-semibold text-gray-900">Eye Care in Türkiye</h3>
                  <p className="text-sm text-gray-500">Dunya Eye Hospital, Acibadem, Memorial Eye Units, Koç University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Dunya Eye Hospital (Istanbul) — Türkiye\'s most specialized eye hospital, performing 50,000+ procedures annually including LASIK, SMILE, and cataract',
                  'Acibadem Eye Health Centres — full-spectrum ophthalmology across Türkiye\'s hospital network, JCI-accredited facilities',
                  'Turkish ophthalmologists trained in Germany, UK, and the U.S. — many dual-board certified with European qualifications',
                  'LASIK and SMILE popular with international patients — Istanbul is a major refractive surgery destination for Europeans and Americans',
                  'Combined aesthetic + LASIK trips increasingly popular — Türkiye coordination covers both in one itinerary',
                  'U.S. citizens visa-free for Türkiye; Turkish Airlines nonstop from 7 U.S. cities',
                  'Koç University Hospital, Istanbul — JCI-accredited academic hospital; 240+ specialists, 50 departments; transplant program led by Prof. Münci Kalayoğlu (former UW-Madison)',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to See More Clearly?</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Share your spectacle prescription, corneal topography, or retinal reports. Our ophthalmology team connects you with the right specialist within 24–48 hours — free of charge.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Get a Free Eye Care Opinion <ArrowRight size={15} />
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
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Specialties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RELATED.map(t => (
              <Link key={t.href} href={t.href} className="group bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl p-5 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{t.name}</h3>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-primary shrink-0" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6"><Link href="/treatments" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">View All Treatment Specialties <ArrowRight size={14} /></Link></div>
        </div>
      </section>

      <PartnerHospitalsSection title="Internationally Accredited Eye Care Centers" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Eye Surgery Abroad</h2>
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
            More questions? <Link href="/faq" className="text-primary font-semibold hover:underline">Full FAQ →</Link> or <Link href="/contact" className="text-primary font-semibold hover:underline">speak to a Patient Care Coordinator</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Start Your Eye Care Journey</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your prescription, reports, or photos. We will connect you with a specialist and provide a detailed cost estimate — at no charge.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Request Free Medical Opinion <ArrowRight size={15} />
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
