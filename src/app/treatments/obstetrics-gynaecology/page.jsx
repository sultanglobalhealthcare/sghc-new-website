import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, ImageIcon, Star,
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gynaecology Surgery Abroad | India & Türkiye | Sultan GHC',
    description: 'Laparoscopic hysterectomy, myomectomy, endometriosis excision, PCOS, ovarian cysts — 70–85% less than U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/obstetrics-gynaecology' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Obstetrics & Gynaecology', item: 'https://www.sultanghc.com/treatments/obstetrics-gynaecology' },
  ],
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
    relevantSpecialty: 'Obstetrics and Gynecology',
  },
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
        text: 'A laparoscopic hysterectomy in the U.S. costs $15,000–$50,000 for self-pay patients (FAIR Health Consumer 2024, including surgeon, anesthesia, and 1–2 night hospital stay). At JCI-accredited hospitals in India such as Apollo, Fortis, and Manipal, laparoscopic hysterectomy costs $2,500–$6,000 — a saving of 80–88%. Robotic hysterectomy using the da Vinci system is available at select partner hospitals for $4,000–$8,000 India vs $20,000–$70,000 U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does fibroid surgery (myomectomy) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic myomectomy for uterine fibroids costs $10,000–$40,000 in the U.S. (FAIR Health 2024). In India at JCI-accredited hospitals: $2,000–$5,000. Hysteroscopic myomectomy for submucosal fibroids costs $1,000–$3,000 in India vs $5,000–$15,000 in the U.S. Robot-assisted myomectomy is available at Apollo and Fortis for $3,000–$6,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does endometriosis surgery cost in India or Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic excision of endometriosis — including deep infiltrating endometriosis (DIE) — costs $10,000–$30,000 in the U.S. In India: $1,500–$4,500. In Türkiye at Acibadem or Memorial hospitals: $2,500–$6,000. India has highly experienced laparoscopic gynecologists trained in advanced endometriosis excision, including colorectal and urological involvement cases. Sultan GHC shares surgeon case volumes and patient references before matching.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can American women get gynecological cancer surgery in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sultan GHC coordinates gynecological oncology care — including surgery, chemotherapy, and radiation — for U.S. patients at JCI-accredited hospitals in India and Türkiye. Procedures include radical hysterectomy (Wertheim\'s) for cervical cancer, staging laparotomy and debulking for ovarian cancer, and hysteroscopic resection + staging for uterine/endometrial cancer. Robotic radical hysterectomy (RARP-gynae) is available at Apollo and Fortis. A second opinion from a gynecological oncologist can be arranged within 24–48 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is laparoscopic surgery for PCOS or ovarian cysts available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Laparoscopic ovarian cystectomy for benign ovarian cysts costs $1,200–$3,500 in India vs $8,000–$25,000 in the U.S. Laparoscopic ovarian drilling for PCOS (for women who have not responded to clomiphene citrate) costs $1,000–$2,500 in India. Fertility-preserving approaches are used for women wishing to conceive. See also our Fertility & IVF page for PCOS-related infertility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a laparoscopic hysterectomy patient need to stay in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic hysterectomy patients typically need 7–10 days in India: 1–2 nights in hospital post-surgery, then 5–7 days recovery nearby before flying. The pre-operative workup (blood panel, pap smear, imaging) is done on Day 1–2. Ovarian cystectomy and hysteroscopic procedures may only require 4–5 days total. Endometriosis excision with bowel or bladder involvement requires 8–12 days. Sultan GHC coordinates hospital-adjacent accommodation for the full stay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between laparoscopic and robotic hysterectomy, and which is available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both laparoscopic hysterectomy (surgeon directly controls instruments) and robotic-assisted hysterectomy (da Vinci system — surgeon controls via console with 3D magnification and tremor filtering) are available in India. Robotic hysterectomy offers better visualization in complex cases such as extensive adhesions, large fibroids, or narrow pelvis, and is often preferred for obese patients or prior abdominal surgery. Apollo Hospitals and Fortis operate da Vinci Si and Xi systems. The cost difference is approximately $1,500–$3,000 more for robotic vs standard laparoscopic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is pelvic floor surgery (prolapse repair) available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Laparoscopic sacrocolpopexy (mesh-based vault suspension for vaginal vault prolapse), anterior/posterior colporrhaphy, and mid-urethral sling procedures (TOT, TVT) for stress urinary incontinence are fully available at partner hospitals in India and Türkiye. Pelvic floor repair in the U.S. costs $10,000–$30,000; India costs $1,500–$4,500. Urogynaecology subspecialists are available at Apollo, Fortis, and Manipal.',
      },
    },
  ],
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
    badge: 'Most Requested',
  },
  {
    title: 'Robotic Hysterectomy (da Vinci)',
    desc: 'Robot-assisted total laparoscopic hysterectomy using da Vinci Si or Xi — preferred for complex cases: large uterus, extensive adhesions, prior abdominal surgery, or narrow pelvis. Offers 3D magnification, tremor filtration, and articulating instruments. Available at Apollo Hospitals Chennai, Fortis Gurugram, and Medanta.',
    badge: null,
  },
  {
    title: 'Laparoscopic Myomectomy (Fibroid Removal)',
    desc: 'Fertility-preserving removal of uterine fibroids via laparoscopy — available for intramural, subserosal, and pedunculated fibroids. Robotic myomectomy available for multiple or large fibroids requiring precise multilayer closure. Hysteroscopic myomectomy for submucosal fibroids — same-day or overnight procedure.',
    badge: null,
  },
  {
    title: 'Endometriosis Excision Surgery (Laparoscopic)',
    desc: 'Laparoscopic excision of superficial peritoneal, ovarian (endometrioma), and deep infiltrating endometriosis (DIE) — including rectovaginal, bladder, and ureteral involvement. Experienced DIE surgeons at select Apollo, Cloudnine, and Manipal centers. Complete excision (not just ablation) is the approach of choice at partner centers for symptomatic and fertility-relevant cases.',
    badge: 'High SEO Demand',
  },
  {
    title: 'Ovarian Cystectomy & Oophorectomy',
    desc: 'Laparoscopic removal of benign ovarian cysts — dermoid, endometrioma, serous, or mucinous — with or without ovarian conservation. Bilateral oophorectomy for BRCA-risk reduction or hormonal cancers. Borderline ovarian tumor management with frozen section and staging available at oncology centers.',
    badge: null,
  },
  {
    title: 'Hysteroscopy — Diagnostic & Operative',
    desc: 'Office or operative hysteroscopy for intrauterine pathology: polyps, submucosal fibroids, septum resection, Asherman\'s adhesiolysis, retained products, and endometrial biopsy. Frequently combined with laparoscopy. Same-day procedure in most cases. Often recommended pre-IVF — see our Fertility & IVF page.',
    badge: null,
  },
  {
    title: 'Laparoscopic Sacrocolpopexy (Pelvic Floor)',
    desc: 'Gold-standard mesh-based vault suspension for vaginal vault prolapse — laparoscopic or robotic approach with permanent mesh sutured to the sacral promontory. Combined with anterior/posterior colporrhaphy if additional wall prolapse is present. Mid-urethral sling (TOT/TVT) for concurrent stress urinary incontinence.',
    badge: null,
  },
  {
    title: 'Gynaecological Oncology Surgery',
    desc: 'Radical hysterectomy (Wertheim\'s) for cervical cancer, staging laparotomy + cytoreductive debulking for ovarian cancer, and hysteroscopic staging + laparoscopic lymph node sampling for endometrial cancer — performed by gynaecological oncology subspecialists at Apollo, Tata Memorial, and Acibadem oncology centers. Robotic radical hysterectomy available.',
    badge: 'Oncology',
  },
  {
    title: 'LEEP / Cone Biopsy & Colposcopy',
    desc: 'Colposcopy-guided cervical biopsy, LEEP (Loop Electrosurgical Excision Procedure), and cold-knife cone biopsy for CIN 2/3 and early cervical pathology — same-day or next-day procedures. Available at all partner hospitals. Recommended for women with abnormal pap smear or HPV high-risk genotypes.',
    badge: null,
  },
  {
    title: 'Laparoscopic Ovarian Drilling (PCOS)',
    desc: 'Laparoscopic ovarian drilling (LOD) using electrocautery or laser for anovulatory PCOS not responding to clomiphene or letrozole — reduces androgen-producing follicles and can restore ovulation. Often considered before IVF in women with PCO morphology and oligo-anovulation.',
    badge: null,
  },
  {
    title: 'Endometrial Ablation',
    desc: 'Minimally invasive ablation of the uterine lining for heavy menstrual bleeding (HMB) in women who do not desire future pregnancy — NovaSure, Thermachoice, or hysteroscopic rollerball ablation. Day-surgery procedure, recovery in 1–2 days. Cost: $800–$2,000 India vs $4,000–$12,000 U.S.',
    badge: null,
  },
  {
    title: 'Müllerian Anomaly Correction (Septum / Bicornuate)',
    desc: 'Hysteroscopic metroplasty for uterine septum — resection of the fibromuscular septum under hysteroscopic vision to restore a normal uterine cavity. For bicornuate or other complex anomalies, laparoscopic assessment and reconstructive surgery. Recommended for women with recurrent pregnancy loss linked to uterine malformation.',
    badge: null,
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
    a: 'U.S. cost: $15,000–$50,000 (FAIR Health 2024). India: $2,500–$6,000 — saving 80–88%. Robotic hysterectomy (da Vinci): $4,000–$8,000 India vs $20,000–$70,000 U.S. Sultan GHC coordinates the complete journey including pre-op workup, hospital, accommodation, and post-op follow-up.',
  },
  {
    q: 'How much does fibroid surgery (myomectomy) cost in India?',
    a: 'Laparoscopic myomectomy: $10,000–$40,000 U.S. vs $2,000–$5,000 India. Hysteroscopic myomectomy for submucosal fibroids: $1,000–$3,000 India vs $5,000–$15,000 U.S. Fertility-preserving approaches used for women wishing to conceive.',
  },
  {
    q: 'How much does endometriosis surgery cost in India or Türkiye?',
    a: 'Laparoscopic endometriosis excision: $10,000–$30,000 U.S. vs $1,500–$4,500 India vs $2,500–$6,000 Türkiye. Partner centers perform complete excision (not just ablation) including deep infiltrating endometriosis with bowel/bladder involvement.',
  },
  {
    q: 'Can American women get gynaecological cancer surgery in India?',
    a: 'Yes. Radical hysterectomy for cervical cancer, staging laparotomy + debulking for ovarian cancer, and endometrial cancer staging surgery — all available at Apollo, Tata Memorial, Fortis, and Acibadem. Second opinion from a gynaecological oncologist within 24–48 hours.',
  },
  {
    q: 'Is laparoscopic surgery for PCOS or ovarian cysts available in India?',
    a: 'Laparoscopic ovarian cystectomy: $1,200–$3,500 India vs $8,000–$25,000 U.S. Laparoscopic ovarian drilling for anovulatory PCOS: $1,000–$2,500 India. Fertility-preserving approaches used for women wishing to conceive.',
  },
  {
    q: 'How long does a laparoscopic hysterectomy patient need to stay in India?',
    a: '7–10 days total: 1–2 nights in hospital, then 5–7 days recovery in nearby accommodation before flying. Ovarian cystectomy / hysteroscopic procedures: 4–5 days. Endometriosis excision with bowel/bladder involvement: 8–12 days.',
  },
  {
    q: 'What is the difference between laparoscopic and robotic hysterectomy?',
    a: 'Both are minimally invasive. Robotic (da Vinci) adds 3D magnification, tremor filtration, and articulating instruments — preferred for complex cases, large uterus, or prior surgery. Both available in India. Cost difference: ~$1,500–$3,000 more for robotic.',
  },
  {
    q: 'Is pelvic floor repair (sacrocolpopexy / sling) available in India?',
    a: 'Yes. Laparoscopic sacrocolpopexy for vault prolapse: $1,500–$4,500 India vs $10,000–$30,000 U.S. Mid-urethral sling (TOT/TVT) for stress urinary incontinence also available. Urogynaecology subspecialists at Apollo, Fortis, and Manipal.',
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
  return (
    <div
      className={`relative bg-gradient-to-br from-pink-50 to-slate-100 border-2 border-dashed border-pink-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
      aria-label={label} role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-pink-400 shrink-0" />
        <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-pink-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Size:</span>
        <span className="text-[10px] font-bold text-gray-600">{width} × {height} px</span>
      </div>
      <p className="text-[10px] font-semibold text-pink-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function ObstetricsGynaecologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#FFF0F5] border-b border-[#ffd6e7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Obstetrics & Gynaecology</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Gynaecological Surgery & Women's Health
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Gynaecology Surgery in{' '}
                <span className="text-primary">India & Türkiye</span> — 80–88% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-5 max-w-2xl">
                From laparoscopic hysterectomy and fibroid surgery to endometriosis excision, robotic gynecological procedures, and pelvic floor repair — Sultan GHC connects U.S. women with fellowship-trained gynaecologists at JCI-accredited hospitals offering gold-standard minimally invasive surgery at a fraction of U.S. prices.
              </p>
              {/* Trust signal bar */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  'Board-Certified Gynaecologists',
                  'da Vinci Robotic Surgery Available',
                  'Minimally Invasive First Approach',
                  'Fertility-Preserving When Possible',
                  'Oncology Subspecialists Available',
                ].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">
                    <CheckCircle2 size={12} className="text-primary" /> {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Request Free Gynaecology Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="gynaecology-surgery-india-turkey-laparoscopic-hysterectomy-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Minimally invasive gynaecological surgery — laparoscopic suite at JCI hospital, India"
                aiPrompt="A bright, modern laparoscopic operating room at a premier Indian hospital. A female surgeon in scrubs operating laparoscopic instruments with a monitor showing endoscopic view. Clean, professional environment. Photorealistic, 4K, no text overlays. Conveys precision, care, and safety."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why India for Gynaecology */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star,         title: 'Advanced Laparoscopy',  desc: 'India\'s top gynecological surgeons perform 500–1,000+ laparoscopic procedures annually — including complex DIE and robotic cases.' },
              { icon: Shield,       title: 'JCI-Accredited Hospitals', desc: 'Apollo, Fortis, Manipal, and Cloudnine — all JCI or NABH accredited, with international patient departments and English-speaking staff.' },
              { icon: Activity,     title: 'da Vinci Robotic Surgery', desc: 'Robotic hysterectomy and myomectomy using da Vinci Si and Xi systems available at Apollo Chennai, Fortis Gurugram, and Medanta.' },
              { icon: Users,        title: 'Full Care Coordination',   desc: 'Sultan GHC arranges everything — pre-op workup, surgeon consultation, hospital admission, accommodation, and post-op telemedicine follow-up.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl border border-gray-200 p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Gynaecological Conditions We Coordinate Care For</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Partner hospitals manage the full spectrum of women's health conditions — from benign gynaecological disorders to complex oncological surgery.</p>
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Gynaecological Procedures Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Minimally invasive, robotic, and open gynaecological surgery — with a strong preference for laparoscopic approaches that preserve fertility and reduce recovery time.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCEDURES.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {p.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                    p.badge === 'Oncology' ? 'bg-orange-100 text-orange-600' :
                    p.badge === 'High SEO Demand' ? 'bg-blue-100 text-blue-600' :
                    'bg-primary/10 text-primary'
                  }`}>{p.badge}</span>
                )}
                <div className="flex items-start gap-3 mb-3 pr-20">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity size={15} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-11">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-primary/5 border border-primary/15 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1.5">Fertility-Preserving Approach — Our Standard</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                For women of reproductive age, Sultan GHC's partner gynaecologists apply a fertility-first philosophy — recommending myomectomy over hysterectomy, ovarian cystectomy over oophorectomy, and endometriosis excision with tube preservation wherever clinically appropriate. This is discussed explicitly during your pre-operative consultation. If fertility treatment is also being considered, see our{' '}
                <Link href="/treatments/fertility-ivf" className="text-primary font-semibold hover:underline">Fertility & IVF page</Link>.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Submit Your Case for Free Gynaecologist Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Gynaecology Surgery Cost: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from FAIR Health Consumer (2024), CMS Hospital Price Transparency, and GoodRx Health. India and Türkiye from JCI-accredited partner hospital published rates (2025). All-inclusive: surgeon, anaesthesia, hospital stay.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Procedure</th>
                  <th className="text-center px-5 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" /> USA — Self-Pay
                    </span>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" /> India
                    </span>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" /> Türkiye
                    </span>
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
                    <td className="px-5 py-3.5 text-center">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">{row.save}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Figures are approximate self-pay estimates. Actual costs vary by complexity, approach, and length of stay.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>{' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">Türkiye cost savings →</Link>
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India',  value: '80–88%', sub: 'vs U.S. self-pay gynaecology' },
              { label: 'Average Saving in Türkiye', value: '75–85%', sub: 'vs U.S. self-pay gynaecology' },
              { label: 'Surgeon Opinion',          value: '24–48 hrs', sub: 'from fellowship-trained gynaecologist' },
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
                  <h3 className="text-lg font-semibold text-gray-900">Gynaecology in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Manipal, Cloudnine, Medanta</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Apollo Hospitals — dedicated Women\'s Centre of Excellence with high-volume laparoscopic and robotic gynaecology; da Vinci Si and Xi available',
                  'Fortis Memorial Gurugram — advanced endometriosis unit performing DIE excision including bowel and bladder resection',
                  'Cloudnine Hospitals — specialist women\'s hospital network with fertility-preserving surgical philosophy and dedicated gynaecology oncology MDT',
                  'Manipal Hospitals — gynaecological oncology center with robotic radical hysterectomy and debulking for ovarian cancer',
                  'Gynaecologists trained at AIIMS Delhi, CMC Vellore, NIMHANS, and international programs (UK, USA, Germany)',
                  'NABH / JCI accreditation — international patient departments with English-speaking coordinators and 24-hour nursing',
                  'India Medical e-Visa in 3–5 business days; recovery accommodation near partner hospitals arranged by Sultan GHC',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/india" className="text-xs text-primary font-semibold hover:underline">India Medical Visa →</Link>
                <Link href="/cost-savings/india" className="text-xs text-primary font-semibold hover:underline">Cost Savings →</Link>
                <Link href="/destinations/india" className="text-xs text-primary font-semibold hover:underline">Destination Guide →</Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Gynaecology in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koç University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem Women\'s Health Centres — high-volume laparoscopic gynaecology including endometriosis excision, robotic hysterectomy, and gynaecological oncology',
                  'Memorial Hospital Istanbul — dedicated gynaecology department with minimally invasive and robotic surgery unit',
                  'Koç University Hospital — academic centre with fellowship-trained gynaecological oncologists and a multidisciplinary tumor board',
                  'Florence Nightingale Hospital — established private women\'s health facility with IVF, pelvic floor, and oncology services',
                  'Turkish gynaecologists extensively trained in Europe (Germany, France, UK) — many hold dual European and Turkish board certifications',
                  'U.S. citizens visa-free for Türkiye; Turkish Airlines nonstop from 7 U.S. cities; 90-minute flights from Istanbul to most Turkish cities',
                  'All-inclusive packages covering hospital, accommodation, airport transfer, and interpreter — often combined with IVF cycle abroad',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/turkey" className="text-xs text-primary font-semibold hover:underline">Türkiye Entry Guide →</Link>
                <Link href="/cost-savings/turkey" className="text-xs text-primary font-semibold hover:underline">Cost Savings →</Link>
                <Link href="/destinations/turkey" className="text-xs text-primary font-semibold hover:underline">Destination Guide →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IVF Crosslink callout */}
      <section className="bg-pink-50 border-y border-pink-100 py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-4xl shrink-0" aria-hidden="true">🧬</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-pink-800 mb-1">Planning Gynaecological Surgery Before IVF?</p>
              <p className="text-sm text-pink-700 leading-relaxed">
                Many women undergoing IVF are first advised to address fibroids, uterine septum, endometriosis, or polyps before their embryo transfer. Sultan GHC can coordinate gynaecological surgery and IVF as a combined journey — same destination, same stay.{' '}
                <Link href="/treatments/fertility-ivf" className="font-semibold underline hover:text-pink-900">See our Fertility & IVF page →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Get a Free Gynaecologist Review — Within 24–48 Hours</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Share your ultrasound, MRI, pap smear, or referral letter. Our team connects you with a fellowship-trained gynaecologist who reviews your case and recommends the right surgical approach — at no cost, no obligation.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Upload Reports & Get Free Opinion <ArrowRight size={15} />
            </Link>
            <a href="tel:+16107870713" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
              <Phone size={15} /> Call +1-610-787-0713
            </a>
          </div>
          <p className="text-white/60 text-xs mt-5">All medical information shared with Sultan GHC is handled with strict confidentiality.</p>
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

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Gynaecology Surgery Abroad</h2>
            <p className="text-gray-500 text-sm">Answers written for patients — not doctors. Clear, honest, and based on verified data.</p>
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
            <Link href="/contact" className="text-primary font-semibold hover:underline">speak to a Patient Care Coordinator</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Ready to Take the Next Step?</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your ultrasound, MRI, or referral letter. We'll review your case, recommend the right gynaecologist, and provide a detailed cost estimate — free of charge.</p>
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
