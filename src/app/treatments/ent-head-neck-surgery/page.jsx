import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, Shield, Users, ImageIcon, Star,
} from 'lucide-react'

export const metadata = {
  title: 'ENT & Head-Neck Surgery Abroad | Cochlear Implant, FESS, Thyroidectomy | India & Turkey | Sultan GHC',
  description:
    'Cochlear implants ($15K–$25K vs $80K–$150K U.S.), FESS for chronic sinusitis, thyroidectomy, head and neck cancer surgery, sleep apnea surgery, tympanoplasty, and hearing loss treatment in India and Turkey. Board-certified ENT surgeons at JCI-accredited hospitals. Sultan GHC coordinates your complete ENT journey.',
  keywords: [
    'cochlear implant India cost',
    'cochlear implant surgery India',
    'FESS sinus surgery India cost',
    'thyroidectomy India cost',
    'head neck cancer surgery India',
    'ENT surgery India Turkey cost',
    'tympanoplasty India cost',
    'septoplasty India cost',
    'sleep apnea surgery India',
    'hearing loss treatment India',
    'parotidectomy India cost',
    'Sultan GHC ENT',
    'ENT medical tourism India Turkey',
    'affordable ENT surgery Americans',
    'neck dissection India cost',
  ],
  openGraph: {
    title: 'ENT & Head-Neck Surgery in India & Turkey | Cochlear Implant, FESS, Thyroidectomy | Sultan GHC',
    description: 'Cochlear implants, FESS, thyroidectomy, head and neck cancer surgery, and sleep apnea surgery — 70–90% less than U.S. costs at JCI-accredited ENT centers.',
    url: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENT & Head-Neck Surgery Abroad | India & Turkey | Sultan GHC',
    description: 'Cochlear implants, FESS, thyroidectomy, and head-neck cancer surgery — 70–90% less than U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'ENT & Head-Neck Surgery', item: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'ENT & Head-Neck Surgery Abroad — India and Turkey',
  description: 'Cochlear implants, FESS, thyroidectomy, head and neck oncology, sleep apnea surgery, and hearing rehabilitation for U.S. patients at JCI-accredited hospitals in India and Turkey.',
  url: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery',
  about: { '@type': 'MedicalSpecialty', name: 'Otolaryngology', alternateName: ['ENT', 'Head and Neck Surgery'], relevantSpecialty: 'Otolaryngology' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a cochlear implant cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cochlear implant (device + surgery + audiological programming) in the U.S. costs $80,000–$150,000 per ear without insurance (NIH, NIDCD data). In India at JCI-accredited hospitals such as Apollo, Fortis, and Manipal, a cochlear implant costs $15,000–$25,000 per ear including the implant device (Cochlear Nucleus, Med-El, Advanced Bionics), surgery, and initial programming sessions — a saving of 80–85%. Sultan GHC coordinates the complete cochlear implant journey: audiological assessment, device selection, surgery, and programming follow-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does FESS (sinus surgery) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis or nasal polyps in the U.S. costs $8,000–$25,000 for self-pay patients (FAIR Health 2024). In India: $1,000–$3,000. Balloon sinuplasty, septoplasty, and turbinate reduction are often combined with FESS — package pricing available at partner hospitals. Most patients need 5–7 days in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does thyroidectomy cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Total thyroidectomy in the U.S. costs $10,000–$35,000 for self-pay patients. In India: $1,500–$4,000. Hemithyroidectomy (lobectomy) costs $1,000–$2,500 India. Minimally invasive video-assisted thyroidectomy (MIVAT) and robotic thyroidectomy (via axillary or areolar approach — no neck scar) are also available at Apollo and Fortis. Turkey: $2,500–$6,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is head and neck cancer surgery available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sultan GHC coordinates comprehensive head and neck oncology at Tata Memorial Hospital Mumbai (one of Asia\'s premier cancer centers), Apollo Cancer Centre, and Acibadem (Turkey). Available procedures include total laryngectomy, partial laryngectomy, glossectomy (tongue cancer), parotidectomy, radical and modified radical neck dissection, mandibulectomy, and reconstructive free flap surgery. All cases are reviewed by a multidisciplinary tumor board.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can sleep apnea be surgically treated in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Surgical options for obstructive sleep apnea — for patients who cannot tolerate CPAP — include UPPP (uvulopalatopharyngoplasty), soft palate radiofrequency ablation, tonsillectomy, septoplasty for nasal obstruction, and Inspire hypoglossal nerve stimulator implantation (at select centers). Drug-Induced Sleep Endoscopy (DISE) is performed pre-operatively to identify the collapse site. Sleep surgery in the U.S. costs $8,000–$30,000; India: $1,500–$5,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is tympanoplasty and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tympanoplasty is surgical repair of a perforated eardrum — using a tissue graft (fascia temporalis or fat) to close the perforation and restore hearing. Combined with ossiculoplasty (middle ear reconstruction) when ossicles are damaged. Tympanoplasty in the U.S. costs $6,000–$18,000. In India: $800–$2,500. Mastoidectomy for chronic suppurative otitis media (CSOM) with cholesteatoma is also available: $1,200–$3,500 India vs $8,000–$25,000 U.S.',
      },
    },
  ],
}

const CONDITIONS = [
  { name: 'Chronic Sinusitis & Nasal Polyps',             icon: '👃' },
  { name: 'Hearing Loss (Sensorineural & Conductive)',    icon: '👂' },
  { name: 'Tinnitus',                                     icon: '🔔' },
  { name: 'Chronic Ear Infection (CSOM)',                 icon: '🦻' },
  { name: 'Otosclerosis (Stapedial Fixation)',            icon: '🔩' },
  { name: 'BPPV & Vestibular Disorders',                  icon: '🌀' },
  { name: 'Thyroid Nodules & Thyroid Cancer',             icon: '🦋' },
  { name: 'Laryngeal Cancer & Vocal Cord Lesions',        icon: '🗣️' },
  { name: 'Oral & Oropharyngeal Cancer',                  icon: '🔬' },
  { name: 'Nasopharyngeal Cancer',                        icon: '🎗️' },
  { name: 'Salivary Gland Tumors (Parotid)',              icon: '🧬' },
  { name: 'Obstructive Sleep Apnea',                      icon: '😴' },
  { name: 'Deviated Nasal Septum',                        icon: '➡️' },
  { name: 'Snoring',                                      icon: '💤' },
  { name: 'Tonsil & Adenoid Disorders',                   icon: '🫁' },
  { name: 'Cholesteatoma',                                icon: '⚠️' },
]

const PROCEDURES = [
  {
    title: 'Cochlear Implant Surgery',
    desc: 'Cochlear implantation for severe-to-profound sensorineural hearing loss — device implanted under general anaesthesia, electrode array inserted into cochlea. Devices: Cochlear Nucleus 8, Med-El Sonnet 2, Advanced Bionics Naida. Surgery + device + 3 programming sessions: $15,000–$25,000 India vs $80,000–$150,000 U.S. Bilateral cochlear implant coordination available.',
    badge: 'Highest Saving',
  },
  {
    title: 'FESS — Functional Endoscopic Sinus Surgery',
    desc: 'Endoscopic surgery for chronic sinusitis, nasal polyps, and sinus mucoceles — using Karl Storz or Stryker 4K endoscopy systems. Often combined with septoplasty, turbinate reduction, and balloon sinuplasty. Image-guided (navigation-assisted) FESS available for complex or revision cases. Day surgery or 1-night hospital stay.',
    badge: null,
  },
  {
    title: 'Tympanoplasty & Mastoidectomy',
    desc: 'Eardrum repair (tympanoplasty Types I–IV) and mastoidectomy for cholesteatoma or CSOM. Combined tympanomastoidectomy with ossicular chain reconstruction (TORP/PORP). Stapedotomy/stapedectomy for otosclerosis. Canal wall up and canal wall down techniques available at high-volume otology centres.',
    badge: null,
  },
  {
    title: 'Thyroidectomy (Total, Hemi & Robotic)',
    desc: 'Total and hemithyroidectomy for thyroid cancer, large goitre, and hyperthyroidism. Conventional open thyroidectomy, minimally invasive video-assisted (MIVAT), and robotic thyroidectomy via axillary/areolar approach (no neck incision) available at Apollo and Fortis. Intraoperative neuromonitoring (IONM) of recurrent laryngeal nerve at all partner centres.',
    badge: null,
  },
  {
    title: 'Head & Neck Oncology Surgery',
    desc: 'Radical and modified radical neck dissection, total/partial laryngectomy with voice rehabilitation, glossectomy with free flap reconstruction (ALT, radial forearm), mandibulectomy, parotidectomy, and comprehensive salivary gland tumor surgery. Tata Memorial Hospital Mumbai and Apollo Cancer Centre — MDT-reviewed treatment plans.',
    badge: 'Oncology',
  },
  {
    title: 'Sleep Apnea Surgery (DISE-Guided)',
    desc: 'Drug-Induced Sleep Endoscopy (DISE) to identify collapse pattern, followed by targeted surgery: UPPP (uvulopalatopharyngoplasty), palatal advancement (expansion sphincter pharyngoplasty), tongue base reduction, hyoid suspension, and nasal reconstruction. Inspire hypoglossal nerve stimulator at select partner centres.',
    badge: null,
  },
  {
    title: 'Septoplasty & Rhinoplasty',
    desc: 'Septoplasty for deviated nasal septum causing nasal obstruction — often combined with FESS and turbinate reduction. Functional rhinoplasty for nasal valve collapse. Aesthetic rhinoplasty available — see our Cosmetic Surgery page for cosmetic rhinoplasty coordination.',
    badge: null,
  },
  {
    title: 'Microlaryngoscopy & Vocal Cord Surgery',
    desc: 'Suspension microlaryngoscopy under general anaesthesia for vocal cord polyps, nodules, cysts, papillomas, Reinke\'s edema, and early glottic cancer. CO2 laser microlaryngoscopy for precise lesion excision with voice preservation. KTP laser for recurrent respiratory papillomatosis.',
    badge: null,
  },
  {
    title: 'Parotidectomy & Salivary Gland Surgery',
    desc: 'Superficial, total, and nerve-preserving parotidectomy for pleomorphic adenoma, Warthin tumour, and malignant parotid tumors. Facial nerve monitoring intraoperatively. Submandibular gland excision for chronic sialadenitis or mixed tumors. Endoscopic sialendoscopy for salivary stones.',
    badge: null,
  },
  {
    title: 'Tonsillectomy & Adenoidectomy',
    desc: 'Tonsillectomy (for recurrent tonsillitis, peritonsillar abscess, or sleep-disordered breathing) using cold steel dissection, coblation, or radiofrequency. Adenoidectomy for adenoid hypertrophy in children and adults. Coblation tonsillotomy for pediatric sleep apnea. Day surgery; 5–7 days India stay.',
    badge: null,
  },
]

const COST_COMPARISON = [
  { procedure: 'Cochlear Implant (device + surgery + programming)', us: '$80,000–$150,000', india: '$15,000–$25,000', turkey: '$20,000–$35,000', save: '~83%' },
  { procedure: 'FESS (sinus surgery)',                              us: '$8,000–$25,000',   india: '$1,000–$3,000',  turkey: '$1,500–$4,500', save: '~88%' },
  { procedure: 'Tympanoplasty (eardrum repair)',                    us: '$6,000–$18,000',   india: '$800–$2,500',    turkey: '$1,200–$3,500', save: '~87%' },
  { procedure: 'Mastoidectomy + Tympanoplasty',                     us: '$8,000–$25,000',   india: '$1,200–$3,500',  turkey: '$2,000–$5,000', save: '~86%' },
  { procedure: 'Stapedotomy (otosclerosis)',                        us: '$7,000–$20,000',   india: '$1,000–$3,000',  turkey: '$1,500–$4,000', save: '~85%' },
  { procedure: 'Total Thyroidectomy',                               us: '$10,000–$35,000',  india: '$1,500–$4,000',  turkey: '$2,500–$6,000', save: '~87%' },
  { procedure: 'Robotic Thyroidectomy (no neck scar)',              us: '$15,000–$45,000',  india: '$3,000–$7,000',  turkey: '$4,000–$9,000', save: '~83%' },
  { procedure: 'Neck Dissection (modified radical)',                us: '$15,000–$40,000',  india: '$2,500–$7,000',  turkey: '$4,000–$10,000', save: '~82%' },
  { procedure: 'Sleep Apnea Surgery (UPPP)',                        us: '$8,000–$30,000',   india: '$1,500–$5,000',  turkey: '$2,500–$7,000', save: '~83%' },
  { procedure: 'Septoplasty + FESS (combined)',                     us: '$10,000–$28,000',  india: '$1,200–$3,500',  turkey: '$2,000–$5,500', save: '~87%' },
  { procedure: 'Microlaryngoscopy (vocal cords)',                   us: '$5,000–$15,000',   india: '$700–$2,200',    turkey: '$1,200–$3,500', save: '~86%' },
  { procedure: 'Tonsillectomy (adult)',                             us: '$3,000–$8,000',    india: '$400–$1,200',    turkey: '$600–$2,000',   save: '~87%' },
]

const FAQS = [
  {
    q: 'How much does a cochlear implant cost in India?',
    a: 'Cochlear implant (device + surgery + initial programming): $80,000–$150,000 in the U.S. vs $15,000–$25,000 in India — saving 80–85%. Cochlear Nucleus, Med-El, and Advanced Bionics devices available. Sultan GHC coordinates the complete journey including audiological assessment and programming follow-up.',
  },
  {
    q: 'How much does FESS (sinus surgery) cost in India?',
    a: 'FESS in the U.S.: $8,000–$25,000. India: $1,000–$3,000. Often combined with septoplasty and turbinate reduction. Image-guided FESS available for complex cases. Most patients need 5–7 days in India.',
  },
  {
    q: 'How much does thyroidectomy cost in India?',
    a: 'Total thyroidectomy: $10,000–$35,000 U.S. vs $1,500–$4,000 India. Robotic thyroidectomy (no neck scar, via axillary approach): $3,000–$7,000 India vs $15,000–$45,000 U.S. All procedures use intraoperative nerve monitoring.',
  },
  {
    q: 'Is head and neck cancer surgery available in India?',
    a: 'Yes. Tata Memorial Hospital Mumbai, Apollo Cancer Centre, and Acibadem Turkey offer total laryngectomy, neck dissection, glossectomy, free flap reconstruction, and parotidectomy. All cases reviewed by multidisciplinary tumor board.',
  },
  {
    q: 'Can sleep apnea be surgically treated in India?',
    a: 'Yes. DISE-guided sleep surgery (UPPP, palatal advancement, tongue base reduction) available at partner ENT centers. Sleep surgery: $1,500–$5,000 India vs $8,000–$30,000 U.S.',
  },
  {
    q: 'How much does tympanoplasty cost in India?',
    a: 'Tympanoplasty (eardrum repair): $6,000–$18,000 U.S. vs $800–$2,500 India. Mastoidectomy combined with tympanoplasty: $1,200–$3,500 India. Stapedotomy for otosclerosis: $1,000–$3,000 India.',
  },
]

const RELATED = [
  { name: 'Oncology & Cancer Care',       href: '/treatments/oncology',            desc: 'Head, neck, thyroid, and salivary gland cancer — systemic therapy and radiation' },
  { name: 'Neurology',                    href: '/treatments/neurology',           desc: 'Tinnitus, vestibular migraine, and central auditory processing disorders' },
  { name: 'Cosmetic & Plastic Surgery',   href: '/treatments/cosmetic-hair-transplant-plastic-surgery', desc: 'Aesthetic rhinoplasty, facelift, and facial reconstruction' },
  { name: 'Robotic Surgery',              href: '/treatments/robotic-minimally-invasive', desc: 'Robotic thyroidectomy without neck incision' },
]

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div className={`relative bg-gradient-to-br from-teal-50 to-slate-100 border-2 border-dashed border-teal-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }} aria-label={label} role="img">
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-teal-400 shrink-0" />
        <span className="text-[10px] font-bold text-teal-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-teal-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <p className="text-[10px] font-semibold text-teal-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function ENTHeadNeckSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#EDFAF8] border-b border-[#c2ece8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">ENT & Head-Neck Surgery</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Otolaryngology & Head-Neck Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                ENT & Head-Neck Surgery in{' '}
                <span className="text-primary">India & Turkey</span> — 80–90% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                From cochlear implants and sinus surgery to thyroidectomy, head and neck cancer, and sleep apnea surgery — Sultan GHC connects U.S. patients with fellowship-trained ENT surgeons at JCI-accredited hospitals offering world-class otolaryngology at a fraction of U.S. prices.
              </p>
              {/* Cochlear implant callout */}
              <div className="bg-white border border-primary/20 rounded-2xl p-4 mb-8 inline-flex flex-col gap-1 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Cochlear Implant — Key Saving</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-red-500">
                    <img src="https://flagcdn.com/16x12/us.png" width={16} height={12} alt="USA" className="rounded-sm" />
                    USA: $80K–$150K
                  </div>
                  <span className="text-gray-300">→</span>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <img src="https://flagcdn.com/16x12/in.png" width={16} height={12} alt="India" className="rounded-sm" />
                    India: $15K–$25K
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Save ~83%</span>
                </div>
                <p className="text-[10px] text-gray-400">Includes device (Cochlear Nucleus / Med-El) + surgery + programming · NIDCD (U.S. 2024)</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Get a Free ENT Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="ent-head-neck-surgery-cochlear-implant-india-turkey-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="ENT surgeon performing endoscopic sinus surgery — JCI-accredited hospital, India"
                aiPrompt="An ENT surgeon performing functional endoscopic sinus surgery using a 4K endoscope in a modern operating room. Clean, professional surgical environment. Monitor showing endoscopic view. Photorealistic, 4K, no text overlays. Conveys precision and expertise."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">ENT & Head-Neck Conditions We Coordinate Care For</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">From hearing loss and sinus disease to thyroid tumors and head-neck cancers — partner hospitals manage the complete ENT and head-neck spectrum.</p>
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">ENT Procedures Available</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Endoscopic, minimally invasive, robotic, and open head-neck procedures — performed by fellowship-trained ENT surgeons using Karl Storz and Stryker 4K endoscopy systems.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCEDURES.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {p.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${p.badge === 'Oncology' ? 'bg-orange-100 text-orange-600' : p.badge === 'Highest Saving' ? 'bg-green-100 text-green-700' : 'bg-primary/10 text-primary'}`}>{p.badge}</span>
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
          <div className="mt-8 text-center">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Submit Your Case for Free ENT Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">ENT Surgery Cost: USA vs India vs Turkey</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">U.S. figures from FAIR Health Consumer (2024), NIH NIDCD, and CostHelper. India and Turkey from JCI-accredited partner hospital rates (2025).</p>
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
                    <span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Turkey" className="rounded-sm" /> Turkey</span>
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
          <p className="text-xs text-gray-400 mt-4 text-center">Approximate self-pay estimates. Cochlear implant pricing includes implant device. <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link></p>
        </div>
      </section>

      {/* Why India / Turkey */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">ENT in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Manipal, Tata Memorial, Medanta</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Apollo Hospitals — dedicated ENT and cochlear implant program; 500+ cochlear implants performed with Cochlear Nucleus, Med-El, and Advanced Bionics devices',
                  'Tata Memorial Hospital Mumbai — nationally renowned head and neck oncology; free flap reconstructive surgery, laryngectomy, neck dissection',
                  'Fortis Memorial Gurugram — high-volume otology unit (tympanoplasty, stapedotomy, mastoidectomy, BAHA) and robotic thyroidectomy program',
                  'Manipal Hospital Bengaluru — comprehensive sleep medicine and surgery unit; DISE-guided sleep apnea surgical planning',
                  'ENT surgeons trained at AIIMS Delhi, CMC Vellore, and international programs (UK, USA, Germany) — many hold European fellowship qualifications',
                  'India Medical e-Visa in 3–5 business days; FESS and sinus procedures can be completed in 5–7 day trip',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Turkey" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">ENT in Turkey</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koç University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem ENT units — high-volume thyroidectomy (including robotic), FESS, and head-neck oncology across Istanbul and Ankara centers',
                  'Memorial Hospital Istanbul — dedicated cochlear implant program and full otology service including BAHA bone-anchored hearing aids',
                  'Turkish ENT surgeons extensively trained in Germany and France — strong tradition in rhinology, laryngology, and head-neck oncology',
                  'Koç University Hospital — academic ENT center with skull base surgery, parotidectomy, and salivary gland tumor expertise',
                  'U.S. citizens visa-free for Turkey; Turkish Airlines nonstop from 7 U.S. cities; packages include accommodation and interpretation',
                  'Combined FESS + rhinoplasty trips common — ENT and cosmetic procedure coordinated in single 10-day stay',
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Get a Free ENT Specialist Review</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Share your audiogram, sinus CT, thyroid ultrasound, or biopsy report. Our ENT coordinator connects you with the right specialist within 24–48 hours — free of charge.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Upload Reports & Get Free Opinion <ArrowRight size={15} />
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

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — ENT Surgery Abroad</h2>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Start Your ENT Journey Today</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your audiogram, CT sinus, or thyroid reports. We will connect you with the right specialist and provide a detailed cost estimate — free of charge.</p>
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
