import Link from 'next/link'
import PartnerHospitalsSection from '@/landing/PartnerHospitalsSection'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, Star
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Gynaecology Surgery Abroad | India & Türkiye | Hysterectomy, Fibroids, Endometriosis | Sultan GHC',
  description:
    'Laparoscopic hysterectomy, myomectomy, endometriosis excision, robotic gynaecological surgery, PCOS, ovarian cysts, cervical cancer, and pelvic floor repair in India and Türkiye — 70–85% less than U.S. costs. Board-certified gynaecologists at JCI-accredited hospitals. Sultan GHC coordinates your complete gynecology journey.',
  keywords: [
    'gynaecology surgery India cost',
    'laparoscopic hysterectomy India cost',
    'myomectomy India cost',
    'endometriosis surgery India Türkiye',
    'fibroid surgery India cost',
    'robotic hysterectomy India',
    'ovarian cyst surgery India cost',
    'cervical cancer treatment India',
    'uterine cancer surgery India',
    'PCOS treatment India',
    'pelvic floor repair India Türkiye',
    'affordable gynaecology for Americans',
    'gynaecology medical tourism',
    'Sultan GHC gynaecology',
    'laparoscopic gynecology India Türkiye',
  ],
  openGraph: {
    title: 'Gynaecology Surgery in India & Türkiye | Fibroids, Endometriosis, Hysterectomy | Sultan GHC',
    description:
      'Laparoscopic hysterectomy, myomectomy, endometriosis excision, and robotic gynecological surgery at JCI-accredited hospitals — 70–85% less than U.S. costs.',
    url: 'https://www.sultanghc.com/treatments/obstetrics-gynaecology',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gynaecology Surgery Abroad | India & Türkiye | Sultan GHC',
    description: 'Laparoscopic hysterectomy, myomectomy, endometriosis excision, PCOS, ovarian cysts — 70–85% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/obstetrics-gynaecology' }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Obstetrics & Gynaecology', item: 'https://www.sultanghc.com/treatments/obstetrics-gynaecology' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Obstetrics & Gynaecology Treatment Abroad — India and Türkiye',
  description: 'Comprehensive gynaecological surgical and medical care for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/obstetrics-gynaecology',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Obstetrics and Gynecology',
    alternateName: ['Gynecological Surgery', 'Laparoscopic Gynecology', 'Reproductive Medicine'],
    relevantSpecialty: 'Obstetrics and Gynecology'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a laparoscopic hysterectomy cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A laparoscopic hysterectomy in the U.S. costs $15,000–$50,000 for self-pay patients (FAIR Health Consumer 2024, including surgeon, anesthesia, and 1–2 night hospital stay). At JCI-accredited hospitals in India such as Apollo, Fortis, and Manipal, laparoscopic hysterectomy costs $2,500–$6,000 — a saving of 80–88%. Robotic hysterectomy using the da Vinci system is available at select partner hospitals for $4,000–$8,000 India vs $20,000–$70,000 U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does fibroid surgery (myomectomy) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic myomectomy for uterine fibroids costs $10,000–$40,000 in the U.S. (FAIR Health 2024). In India at JCI-accredited hospitals: $2,000–$5,000. Hysteroscopic myomectomy for submucosal fibroids costs $1,000–$3,000 in India vs $5,000–$15,000 in the U.S. Robot-assisted myomectomy is available at Apollo and Fortis for $3,000–$6,000.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does endometriosis surgery cost in India or Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic excision of endometriosis — including deep infiltrating endometriosis (DIE) — costs $10,000–$30,000 in the U.S. In India: $1,500–$4,500. In Türkiye at Acibadem or Memorial hospitals: $2,500–$6,000. India has highly experienced laparoscopic gynecologists trained in advanced endometriosis excision, including colorectal and urological involvement cases. Sultan GHC shares surgeon case volumes and patient references before matching.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can American women get gynecological cancer surgery in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sultan GHC coordinates gynecological oncology care — including surgery, chemotherapy, and radiation — for U.S. patients at JCI-accredited hospitals in India and Türkiye. Procedures include radical hysterectomy (Wertheim\'s) for cervical cancer, staging laparotomy and debulking for ovarian cancer, and hysteroscopic resection + staging for uterine/endometrial cancer. Robotic radical hysterectomy (RARP-gynae) is available at Apollo and Fortis. A second opinion from a gynecological oncologist can be arranged within 24–48 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is laparoscopic surgery for PCOS or ovarian cysts available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Laparoscopic ovarian cystectomy for benign ovarian cysts costs $1,200–$3,500 in India vs $8,000–$25,000 in the U.S. Laparoscopic ovarian drilling for PCOS (for women who have not responded to clomiphene citrate) costs $1,000–$2,500 in India. Fertility-preserving approaches are used for women wishing to conceive. See also our Fertility & IVF page for PCOS-related infertility.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does a laparoscopic hysterectomy patient need to stay in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic hysterectomy patients typically need 7–10 days in India: 1–2 nights in hospital post-surgery, then 5–7 days recovery nearby before flying. The pre-operative workup (blood panel, pap smear, imaging) is done on Day 1–2. Ovarian cystectomy and hysteroscopic procedures may only require 4–5 days total. Endometriosis excision with bowel or bladder involvement requires 8–12 days. Sultan GHC coordinates hospital-adjacent accommodation for the full stay.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between laparoscopic and robotic hysterectomy, and which is available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both laparoscopic hysterectomy (surgeon directly controls instruments) and robotic-assisted hysterectomy (da Vinci system — surgeon controls via console with 3D magnification and tremor filtering) are available in India. Robotic hysterectomy offers better visualization in complex cases such as extensive adhesions, large fibroids, or narrow pelvis, and is often preferred for obese patients or prior abdominal surgery. Apollo Hospitals and Fortis operate da Vinci Si and Xi systems. The cost difference is approximately $1,500–$3,000 more for robotic vs standard laparoscopic.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is pelvic floor surgery (prolapse repair) available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Laparoscopic sacrocolpopexy (mesh-based vault suspension for vaginal vault prolapse), anterior/posterior colporrhaphy, and mid-urethral sling procedures (TOT, TVT) for stress urinary incontinence are fully available at partner hospitals in India and Türkiye. Pelvic floor repair in the U.S. costs $10,000–$30,000; India costs $1,500–$4,500. Urogynaecology subspecialists are available at Apollo, Fortis, and Manipal.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'Uterine Fibroids',                                    icon: '🔴' },
  { name: 'Endometriosis & Adenomyosis',                         icon: '🩸' },
  { name: 'Ovarian Cysts (Benign & Borderline)',                 icon: '🟡' },
  { name: 'PCOS (Polycystic Ovarian Syndrome)',                  icon: '⚕️'  },
  { name: 'Cervical Cancer',                                     icon: '🎗️' },
  { name: 'Endometrial / Uterine Cancer',                        icon: '🔬' },
  { name: 'Ovarian Cancer',                                      icon: '🧬' },
  { name: 'Uterine Prolapse',                                    icon: '🔷' },
  { name: 'Stress Urinary Incontinence (SUI)',                   icon: '💧' },
  { name: 'Abnormal Uterine Bleeding / Heavy Periods',           icon: '📊' },
  { name: 'Asherman\'s Syndrome (Intrauterine Adhesions)',       icon: '🔗' },
  { name: 'Septate / Bicornuate Uterus (Müllerian Anomalies)',   icon: '🔭' },
  { name: 'Vulvar & Vaginal Conditions',                         icon: '🩺' },
  { name: 'Pelvic Inflammatory Disease (PID)',                   icon: '⚠️'  },
  { name: 'Ectopic Pregnancy (Historical)',                      icon: '🫀' },
  { name: 'Recurrent Pregnancy Loss (RPL)',                      icon: '💛' },
]

const PROCEDURES = [
  {
    title: 'Laparoscopic Hysterectomy (TLH)',
    desc: 'Total laparoscopic hysterectomy — removal of uterus and cervix through 3–4 small keyhole incisions. The gold standard for benign indications (fibroids, adenomyosis, AUB, prolapse) when uterine preservation is not required. Average hospital stay: 1–2 nights. Recovery to flight: 7–10 days. Available at all major JCI-accredited partner hospitals.',
    badge: 'Most Requested'
  },
  {
    title: 'Robotic Hysterectomy (da Vinci)',
    desc: 'Robot-assisted total laparoscopic hysterectomy using da Vinci Si or Xi — preferred for complex cases: large uterus, extensive adhesions, prior abdominal surgery, or narrow pelvis. Offers 3D magnification, tremor filtration, and articulating instruments. Available at Apollo Hospitals Chennai, Fortis Gurugram, and Medanta.',
    badge: null
  },
  {
    title: 'Laparoscopic Myomectomy (Fibroid Removal)',
    desc: 'Fertility-preserving removal of uterine fibroids via laparoscopy — available for intramural, subserosal, and pedunculated fibroids. Robotic myomectomy available for multiple or large fibroids requiring precise multilayer closure. Hysteroscopic myomectomy for submucosal fibroids — same-day or overnight procedure.',
    badge: null
  },
  {
    title: 'Endometriosis Excision Surgery (Laparoscopic)',
    desc: 'Laparoscopic excision of superficial peritoneal, ovarian (endometrioma), and deep infiltrating endometriosis (DIE) — including rectovaginal, bladder, and ureteral involvement. Experienced DIE surgeons at select Apollo, Cloudnine, and Manipal centers. Complete excision (not just ablation) is the approach of choice at partner centers for symptomatic and fertility-relevant cases.',
    badge: 'High SEO Demand'
  },
  {
    title: 'Ovarian Cystectomy & Oophorectomy',
    desc: 'Laparoscopic removal of benign ovarian cysts — dermoid, endometrioma, serous, or mucinous — with or without ovarian conservation. Bilateral oophorectomy for BRCA-risk reduction or hormonal cancers. Borderline ovarian tumor management with frozen section and staging available at oncology centers.',
    badge: null
  },
  {
    title: 'Hysteroscopy — Diagnostic & Operative',
    desc: 'Office or operative hysteroscopy for intrauterine pathology: polyps, submucosal fibroids, septum resection, Asherman\'s adhesiolysis, retained products, and endometrial biopsy. Frequently combined with laparoscopy. Same-day procedure in most cases. Often recommended pre-IVF — see our Fertility & IVF page.',
    badge: null
  },
  {
    title: 'Laparoscopic Sacrocolpopexy (Pelvic Floor)',
    desc: 'Gold-standard mesh-based vault suspension for vaginal vault prolapse — laparoscopic or robotic approach with permanent mesh sutured to the sacral promontory. Combined with anterior/posterior colporrhaphy if additional wall prolapse is present. Mid-urethral sling (TOT/TVT) for concurrent stress urinary incontinence.',
    badge: null
  },
  {
    title: 'Gynaecological Oncology Surgery',
    desc: 'Radical hysterectomy (Wertheim\'s) for cervical cancer, staging laparotomy + cytoreductive debulking for ovarian cancer, and hysteroscopic staging + laparoscopic lymph node sampling for endometrial cancer — performed by gynaecological oncology subspecialists at Apollo, Tata Memorial, and Acibadem oncology centers. Robotic radical hysterectomy available.',
    badge: 'Oncology'
  },
  {
    title: 'LEEP / Cone Biopsy & Colposcopy',
    desc: 'Colposcopy-guided cervical biopsy, LEEP (Loop Electrosurgical Excision Procedure), and cold-knife cone biopsy for CIN 2/3 and early cervical pathology — same-day or next-day procedures. Available at all partner hospitals. Recommended for women with abnormal pap smear or HPV high-risk genotypes.',
    badge: null
  },
  {
    title: 'Laparoscopic Ovarian Drilling (PCOS)',
    desc: 'Laparoscopic ovarian drilling (LOD) using electrocautery or laser for anovulatory PCOS not responding to clomiphene or letrozole — reduces androgen-producing follicles and can restore ovulation. Often considered before IVF in women with PCO morphology and oligo-anovulation.',
    badge: null
  },
  {
    title: 'Endometrial Ablation',
    desc: 'Minimally invasive ablation of the uterine lining for heavy menstrual bleeding (HMB) in women who do not desire future pregnancy — NovaSure, Thermachoice, or hysteroscopic rollerball ablation. Day-surgery procedure, recovery in 1–2 days. Cost: $800–$2,000 India vs $4,000–$12,000 U.S.',
    badge: null
  },
  {
    title: 'Müllerian Anomaly Correction (Septum / Bicornuate)',
    desc: 'Hysteroscopic metroplasty for uterine septum — resection of the fibromuscular septum under hysteroscopic vision to restore a normal uterine cavity. For bicornuate or other complex anomalies, laparoscopic assessment and reconstructive surgery. Recommended for women with recurrent pregnancy loss linked to uterine malformation.',
    badge: null
  },
]

const COST_COMPARISON = [
  { procedure: 'Laparoscopic Hysterectomy (TLH)',            us: '$15,000–$50,000', india: '$2,500–$6,000',  turkey: '$3,500–$8,000',  save: '~85%' },
  { procedure: 'Robotic Hysterectomy (da Vinci)',            us: '$20,000–$70,000', india: '$4,000–$8,000',  turkey: '$5,500–$11,000', save: '~82%' },
  { procedure: 'Laparoscopic Myomectomy (fibroids)',         us: '$10,000–$40,000', india: '$2,000–$5,000',  turkey: '$3,000–$7,000',  save: '~83%' },
  { procedure: 'Hysteroscopic Myomectomy',                   us: '$5,000–$15,000',  india: '$1,000–$3,000',  turkey: '$1,500–$4,000',  save: '~80%' },
  { procedure: 'Endometriosis Excision (laparoscopic)',      us: '$10,000–$30,000', india: '$1,500–$4,500',  turkey: '$2,500–$6,000',  save: '~84%' },
  { procedure: 'Ovarian Cystectomy',                         us: '$8,000–$25,000',  india: '$1,200–$3,500',  turkey: '$1,800–$5,000',  save: '~85%' },
  { procedure: 'Hysteroscopy (operative)',                   us: '$3,000–$10,000',  india: '$600–$2,000',    turkey: '$800–$2,500',    save: '~80%' },
  { procedure: 'Laparoscopic Sacrocolpopexy',                us: '$10,000–$30,000', india: '$1,500–$4,500',  turkey: '$2,500–$6,500',  save: '~84%' },
  { procedure: 'Radical Hysterectomy (cervical cancer)',     us: '$20,000–$60,000', india: '$3,500–$9,000',  turkey: '$5,000–$12,000', save: '~83%' },
  { procedure: 'LEEP / Cone Biopsy',                        us: '$2,000–$6,000',   india: '$300–$900',      turkey: '$500–$1,200',    save: '~85%' },
  { procedure: 'Endometrial Ablation',                       us: '$4,000–$12,000',  india: '$800–$2,000',    turkey: '$1,200–$3,000',  save: '~82%' },
  { procedure: 'Laparoscopic Ovarian Drilling (PCOS)',       us: '$5,000–$18,000',  india: '$1,000–$2,500',  turkey: '$1,500–$3,500',  save: '~84%' },
]

const FAQS = [
  {
    q: 'How much does a laparoscopic hysterectomy cost in India?',
    a: 'U.S. cost: $15,000–$50,000 (FAIR Health 2024). India: $2,500–$6,000 — saving 80–88%. Robotic hysterectomy (da Vinci): $4,000–$8,000 India vs $20,000–$70,000 U.S. Sultan GHC coordinates the complete journey including pre-op workup, hospital, accommodation, and post-op follow-up.'
  },
  {
    q: 'How much does fibroid surgery (myomectomy) cost in India?',
    a: 'Laparoscopic myomectomy: $10,000–$40,000 U.S. vs $2,000–$5,000 India. Hysteroscopic myomectomy for submucosal fibroids: $1,000–$3,000 India vs $5,000–$15,000 U.S. Fertility-preserving approaches used for women wishing to conceive.'
  },
  {
    q: 'How much does endometriosis surgery cost in India or Türkiye?',
    a: 'Laparoscopic endometriosis excision: $10,000–$30,000 U.S. vs $1,500–$4,500 India vs $2,500–$6,000 Türkiye. Partner centers perform complete excision (not just ablation) including deep infiltrating endometriosis with bowel/bladder involvement.'
  },
  {
    q: 'Can American women get gynaecological cancer surgery in India?',
    a: 'Yes. Radical hysterectomy for cervical cancer, staging laparotomy + debulking for ovarian cancer, and endometrial cancer staging surgery — all available at Apollo, Tata Memorial, Fortis, and Acibadem. Second opinion from a gynaecological oncologist within 24–48 hours.'
  },
  {
    q: 'Is laparoscopic surgery for PCOS or ovarian cysts available in India?',
    a: 'Laparoscopic ovarian cystectomy: $1,200–$3,500 India vs $8,000–$25,000 U.S. Laparoscopic ovarian drilling for anovulatory PCOS: $1,000–$2,500 India. Fertility-preserving approaches used for women wishing to conceive.'
  },
  {
    q: 'How long does a laparoscopic hysterectomy patient need to stay in India?',
    a: '7–10 days total: 1–2 nights in hospital, then 5–7 days recovery in nearby accommodation before flying. Ovarian cystectomy / hysteroscopic procedures: 4–5 days. Endometriosis excision with bowel/bladder involvement: 8–12 days.'
  },
  {
    q: 'What is the difference between laparoscopic and robotic hysterectomy?',
    a: 'Both are minimally invasive. Robotic (da Vinci) adds 3D magnification, tremor filtration, and articulating instruments — preferred for complex cases, large uterus, or prior surgery. Both available in India. Cost difference: ~$1,500–$3,000 more for robotic.'
  },
  {
    q: 'Is pelvic floor repair (sacrocolpopexy / sling) available in India?',
    a: 'Yes. Laparoscopic sacrocolpopexy for vault prolapse: $1,500–$4,500 India vs $10,000–$30,000 U.S. Mid-urethral sling (TOT/TVT) for stress urinary incontinence also available. Urogynaecology subspecialists at Apollo, Fortis, and Manipal.'
  },
]

const RELATED = [
  { name: 'Fertility & IVF',                          href: '/treatments/fertility-ivf',                    desc: 'IVF, ICSI, egg freezing, PGT-A — infertility treatment for U.S. patients in India & Türkiye' },
  { name: 'Oncology & Cancer Care',                   href: '/treatments/oncology',                         desc: 'Gynaecological cancers — chemotherapy, targeted therapy, and radiation coordination' },
  { name: 'Robotic & Minimally Invasive Surgery',     href: '/treatments/robotic-minimally-invasive',       desc: 'da Vinci robotic hysterectomy, myomectomy, and radical hysterectomy' },
  { name: 'Urology',                                  href: '/treatments/urology',                          desc: 'Pelvic floor conditions involving the bladder and urinary tract' },
  { name: 'Cosmetic & Plastic Surgery',               href: '/treatments/cosmetic-hair-transplant-plastic-surgery', desc: 'Post-gynae body contouring, vaginal rejuvenation, and reconstructive procedures' },
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
