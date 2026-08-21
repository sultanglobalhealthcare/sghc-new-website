import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, Shield, Users, Star
} from 'lucide-react'

export const metadata = {
  title: 'ENT & Head-Neck Surgery Abroad | Cochlear Implant, FESS, Thyroidectomy | India & Türkiye | Sultan GHC',
  description:
    'Cochlear implants ($15K–$25K vs $80K–$150K U.S.), FESS for chronic sinusitis, thyroidectomy, head and neck cancer surgery, sleep apnea surgery, tympanoplasty, and hearing loss treatment in India and Türkiye. Board-certified ENT surgeons at JCI-accredited hospitals. Sultan GHC coordinates your complete ENT journey.',
  keywords: [
    'cochlear implant India cost',
    'cochlear implant surgery India',
    'FESS sinus surgery India cost',
    'thyroidectomy India cost',
    'head neck cancer surgery India',
    'ENT surgery India Türkiye cost',
    'tympanoplasty India cost',
    'septoplasty India cost',
    'sleep apnea surgery India',
    'hearing loss treatment India',
    'parotidectomy India cost',
    'Sultan GHC ENT',
    'ENT medical tourism India Türkiye',
    'affordable ENT surgery Americans',
    'neck dissection India cost',
  ],
  openGraph: {
    title: 'ENT & Head-Neck Surgery in India & Türkiye | Cochlear Implant, FESS, Thyroidectomy | Sultan GHC',
    description: 'Cochlear implants, FESS, thyroidectomy, head and neck cancer surgery, and sleep apnea surgery — 70–90% less than U.S. costs at JCI-accredited ENT centers.',
    url: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENT & Head-Neck Surgery Abroad | India & Türkiye | Sultan GHC',
    description: 'Cochlear implants, FESS, thyroidectomy, and head-neck cancer surgery — 70–90% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery' }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'ENT & Head-Neck Surgery', item: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'ENT & Head-Neck Surgery Abroad — India and Türkiye',
  description: 'Cochlear implants, FESS, thyroidectomy, head and neck oncology, sleep apnea surgery, and hearing rehabilitation for U.S. patients at JCI-accredited hospitals in India and Türkiye.',
  url: 'https://www.sultanghc.com/treatments/ent-head-neck-surgery',
  about: { '@type': 'MedicalSpecialty', name: 'Otolaryngology', alternateName: ['ENT', 'Head and Neck Surgery'], relevantSpecialty: 'Otolaryngology' }
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
        text: 'A cochlear implant (device + surgery + audiological programming) in the U.S. costs $80,000–$150,000 per ear without insurance (NIH, NIDCD data). In India at JCI-accredited hospitals such as Apollo, Fortis, and Manipal, a cochlear implant costs $15,000–$25,000 per ear including the implant device (Cochlear Nucleus, Med-El, Advanced Bionics), surgery, and initial programming sessions — a saving of 80–85%. Sultan GHC coordinates the complete cochlear implant journey: audiological assessment, device selection, surgery, and programming follow-up.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does FESS (sinus surgery) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis or nasal polyps in the U.S. costs $8,000–$25,000 for self-pay patients (FAIR Health 2024). In India: $1,000–$3,000. Balloon sinuplasty, septoplasty, and turbinate reduction are often combined with FESS — package pricing available at partner hospitals. Most patients need 5–7 days in India.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does thyroidectomy cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Total thyroidectomy in the U.S. costs $10,000–$35,000 for self-pay patients. In India: $1,500–$4,000. Hemithyroidectomy (lobectomy) costs $1,000–$2,500 India. Minimally invasive video-assisted thyroidectomy (MIVAT) and robotic thyroidectomy (via axillary or areolar approach — no neck scar) are also available at Apollo and Fortis. Türkiye: $2,500–$6,000.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is head and neck cancer surgery available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sultan GHC coordinates comprehensive head and neck oncology at Tata Memorial Hospital Mumbai (one of Asia\'s premier cancer centers), Apollo Cancer Centre, and Acibadem (Türkiye). Available procedures include total laryngectomy, partial laryngectomy, glossectomy (tongue cancer), parotidectomy, radical and modified radical neck dissection, mandibulectomy, and reconstructive free flap surgery. All cases are reviewed by a multidisciplinary tumor board.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can sleep apnea be surgically treated in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Surgical options for obstructive sleep apnea — for patients who cannot tolerate CPAP — include UPPP (uvulopalatopharyngoplasty), soft palate radiofrequency ablation, tonsillectomy, septoplasty for nasal obstruction, and Inspire hypoglossal nerve stimulator implantation (at select centers). Drug-Induced Sleep Endoscopy (DISE) is performed pre-operatively to identify the collapse site. Sleep surgery in the U.S. costs $8,000–$30,000; India: $1,500–$5,000.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is tympanoplasty and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tympanoplasty is surgical repair of a perforated eardrum — using a tissue graft (fascia temporalis or fat) to close the perforation and restore hearing. Combined with ossiculoplasty (middle ear reconstruction) when ossicles are damaged. Tympanoplasty in the U.S. costs $6,000–$18,000. In India: $800–$2,500. Mastoidectomy for chronic suppurative otitis media (CSOM) with cholesteatoma is also available: $1,200–$3,500 India vs $8,000–$25,000 U.S.'
      }
    },
  ]
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
    badge: 'Highest Saving'
  },
  {
    title: 'FESS — Functional Endoscopic Sinus Surgery',
    desc: 'Endoscopic surgery for chronic sinusitis, nasal polyps, and sinus mucoceles — using Karl Storz or Stryker 4K endoscopy systems. Often combined with septoplasty, turbinate reduction, and balloon sinuplasty. Image-guided (navigation-assisted) FESS available for complex or revision cases. Day surgery or 1-night hospital stay.',
    badge: null
  },
  {
    title: 'Tympanoplasty & Mastoidectomy',
    desc: 'Eardrum repair (tympanoplasty Types I–IV) and mastoidectomy for cholesteatoma or CSOM. Combined tympanomastoidectomy with ossicular chain reconstruction (TORP/PORP). Stapedotomy/stapedectomy for otosclerosis. Canal wall up and canal wall down techniques available at high-volume otology centres.',
    badge: null
  },
  {
    title: 'Thyroidectomy (Total, Hemi & Robotic)',
    desc: 'Total and hemithyroidectomy for thyroid cancer, large goitre, and hyperthyroidism. Conventional open thyroidectomy, minimally invasive video-assisted (MIVAT), and robotic thyroidectomy via axillary/areolar approach (no neck incision) available at Apollo and Fortis. Intraoperative neuromonitoring (IONM) of recurrent laryngeal nerve at all partner centres.',
    badge: null
  },
  {
    title: 'Head & Neck Oncology Surgery',
    desc: 'Radical and modified radical neck dissection, total/partial laryngectomy with voice rehabilitation, glossectomy with free flap reconstruction (ALT, radial forearm), mandibulectomy, parotidectomy, and comprehensive salivary gland tumor surgery. Tata Memorial Hospital Mumbai and Apollo Cancer Centre — MDT-reviewed treatment plans.',
    badge: 'Oncology'
  },
  {
    title: 'Sleep Apnea Surgery (DISE-Guided)',
    desc: 'Drug-Induced Sleep Endoscopy (DISE) to identify collapse pattern, followed by targeted surgery: UPPP (uvulopalatopharyngoplasty), palatal advancement (expansion sphincter pharyngoplasty), tongue base reduction, hyoid suspension, and nasal reconstruction. Inspire hypoglossal nerve stimulator at select partner centres.',
    badge: null
  },
  {
    title: 'Septoplasty & Rhinoplasty',
    desc: 'Septoplasty for deviated nasal septum causing nasal obstruction — often combined with FESS and turbinate reduction. Functional rhinoplasty for nasal valve collapse. Aesthetic rhinoplasty available — see our Cosmetic Surgery page for cosmetic rhinoplasty coordination.',
    badge: null
  },
  {
    title: 'Microlaryngoscopy & Vocal Cord Surgery',
    desc: 'Suspension microlaryngoscopy under general anaesthesia for vocal cord polyps, nodules, cysts, papillomas, Reinke\'s edema, and early glottic cancer. CO2 laser microlaryngoscopy for precise lesion excision with voice preservation. KTP laser for recurrent respiratory papillomatosis.',
    badge: null
  },
  {
    title: 'Parotidectomy & Salivary Gland Surgery',
    desc: 'Superficial, total, and nerve-preserving parotidectomy for pleomorphic adenoma, Warthin tumour, and malignant parotid tumors. Facial nerve monitoring intraoperatively. Submandibular gland excision for chronic sialadenitis or mixed tumors. Endoscopic sialendoscopy for salivary stones.',
    badge: null
  },
  {
    title: 'Tonsillectomy & Adenoidectomy',
    desc: 'Tonsillectomy (for recurrent tonsillitis, peritonsillar abscess, or sleep-disordered breathing) using cold steel dissection, coblation, or radiofrequency. Adenoidectomy for adenoid hypertrophy in children and adults. Coblation tonsillotomy for pediatric sleep apnea. Day surgery; 5–7 days India stay.',
    badge: null
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
    a: 'Cochlear implant (device + surgery + initial programming): $80,000–$150,000 in the U.S. vs $15,000–$25,000 in India — saving 80–85%. Cochlear Nucleus, Med-El, and Advanced Bionics devices available. Sultan GHC coordinates the complete journey including audiological assessment and programming follow-up.'
  },
  {
    q: 'How much does FESS (sinus surgery) cost in India?',
    a: 'FESS in the U.S.: $8,000–$25,000. India: $1,000–$3,000. Often combined with septoplasty and turbinate reduction. Image-guided FESS available for complex cases. Most patients need 5–7 days in India.'
  },
  {
    q: 'How much does thyroidectomy cost in India?',
    a: 'Total thyroidectomy: $10,000–$35,000 U.S. vs $1,500–$4,000 India. Robotic thyroidectomy (no neck scar, via axillary approach): $3,000–$7,000 India vs $15,000–$45,000 U.S. All procedures use intraoperative nerve monitoring.'
  },
  {
    q: 'Is head and neck cancer surgery available in India?',
    a: 'Yes. Tata Memorial Hospital Mumbai, Apollo Cancer Centre, and Acibadem Türkiye offer total laryngectomy, neck dissection, glossectomy, free flap reconstruction, and parotidectomy. All cases reviewed by multidisciplinary tumor board.'
  },
  {
    q: 'Can sleep apnea be surgically treated in India?',
    a: 'Yes. DISE-guided sleep surgery (UPPP, palatal advancement, tongue base reduction) available at partner ENT centers. Sleep surgery: $1,500–$5,000 India vs $8,000–$30,000 U.S.'
  },
  {
    q: 'How much does tympanoplasty cost in India?',
    a: 'Tympanoplasty (eardrum repair): $6,000–$18,000 U.S. vs $800–$2,500 India. Mastoidectomy combined with tympanoplasty: $1,200–$3,500 India. Stapedotomy for otosclerosis: $1,000–$3,000 India.'
  },
]

const RELATED = [
  { name: 'Oncology & Cancer Care',       href: '/treatments/oncology',            desc: 'Head, neck, thyroid, and salivary gland cancer — systemic therapy and radiation' },
  { name: 'Neurology',                    href: '/treatments/neurology',           desc: 'Tinnitus, vestibular migraine, and central auditory processing disorders' },
  { name: 'Cosmetic & Plastic Surgery',   href: '/treatments/cosmetic-hair-transplant-plastic-surgery', desc: 'Aesthetic rhinoplasty, facelift, and facial reconstruction' },
  { name: 'Robotic Surgery',              href: '/treatments/robotic-minimally-invasive', desc: 'Robotic thyroidectomy without neck incision' },
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
