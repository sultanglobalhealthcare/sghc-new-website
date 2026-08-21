import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, Shield, Users, Star, Zap
} from 'lucide-react'

export const metadata = {
  title: 'Robotic Surgery in India & Türkiye for U.S. Patients | Sultan GHC',
  description:
    'da Vinci robotic surgery in India and Türkiye — RALP, robotic hysterectomy, robotic nephrectomy, robotic colectomy, robotic thyroidectomy, and robotic hernia repair. $3,000–$12,000 vs $15,000–$50,000 in the U.S. JCI-accredited hospitals with Si, Xi, and Intuitive Surgical systems.',
  keywords: [
    'robotic surgery India cost',
    'robotic surgery Türkiye cost',
    'da Vinci surgery India',
    'RALP robotic prostatectomy India cost',
    'robotic hysterectomy India cost',
    'robotic nephrectomy India cost',
    'robotic colectomy India cost',
    'robotic thyroidectomy India cost',
    'robotic surgery for Americans India',
    'minimally invasive surgery India',
    'robotic surgery medical tourism India Türkiye',
    'Sultan GHC robotic surgery',
    'da Vinci prostatectomy India',
    'robotic hernia repair India cost',
    'robotic bariatric surgery India',
  ],
  openGraph: {
    title: 'Robotic & Minimally Invasive Surgery in India & Türkiye | Sultan GHC',
    description: 'RALP, robotic hysterectomy, nephrectomy, colectomy, and thyroidectomy — $3,000–$12,000 vs $15,000–$50,000 U.S. costs at JCI-accredited hospitals.',
    url: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robotic Surgery Abroad | India & Türkiye | Sultan GHC',
    description: 'da Vinci robotic surgery — RALP, hysterectomy, nephrectomy — $3,000–$12,000 vs $15,000–$50,000 U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive' }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Robotic & Minimally Invasive Surgery', item: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Robotic & Minimally Invasive Surgery — India and Türkiye',
  description: 'da Vinci robotic surgery for U.S. patients at JCI-accredited hospitals in India and Türkiye — RALP, robotic hysterectomy, robotic nephrectomy, robotic colectomy, robotic thyroidectomy, and more — coordinated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive',
  about: { '@type': 'MedicalSpecialty', name: 'Robotic Surgery', alternateName: ['Minimally Invasive Surgery', 'da Vinci Surgery', 'Laparoscopic Surgery'], relevantSpecialty: 'General Surgery' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does robotic prostatectomy (RALP) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robotic-assisted laparoscopic prostatectomy (RALP) in the U.S. costs $15,000–$50,000 for self-pay patients (FAIR Health 2024, including surgeon, anaesthesia, and hospital). At Apollo Chennai (India\'s highest-volume robotic urology center) and other accredited Indian robotic surgery centers, RALP costs $5,000–$12,000 — a saving of 70–80%. Same da Vinci Si or Xi platform. U.S.-trained or fellowship-trained robotic urological surgeons.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is da Vinci robotic surgery available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India has one of Asia\'s largest installed bases of da Vinci Surgical Systems (Intuitive Surgical), concentrated at high-volume robotic surgery centers including Apollo Chennai (15+ years robotic surgery experience), Fortis Memorial Gurugram, Medanta Medicity Gurugram, Kokilaben Dhirubhai Ambani Hospital Mumbai, and Manipal Hospital Bengaluru. These centers perform robotic prostatectomy, hysterectomy, nephrectomy, colectomy, gastrectomy, thyroidectomy, and hernia repair on the same platform used in U.S. academic medical centers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does robotic hysterectomy cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robotic hysterectomy (total robotic hysterectomy / robotic-assisted TLH) in the U.S. costs $15,000–$40,000. In India: $3,000–$7,000 — a saving of 75–85%. Available at Apollo, Fortis, and Medanta robotic gynecology programs. Sultan GHC coordinates pre-operative gynecology workup, robotic hysterectomy, and post-operative follow-up for American women traveling to India for this procedure.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between robotic surgery, laparoscopic surgery, and open surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open surgery uses large incisions for direct access — highest blood loss, longest recovery (4–8 weeks). Laparoscopic (keyhole) surgery uses 3–5 small incisions with a camera — significant improvement: less blood loss, 2–4 week recovery. Robotic surgery (da Vinci) adds a robotic arm system to laparoscopy — 3D high-definition vision, 7-degree instrument wristing (beyond human hand movement), tremor filtration, and superior ergonomics for the surgeon. Result: even less blood loss, more precise dissection, lower complication rates in complex procedures, faster recovery (1–2 weeks), and earlier return to daily activities. For procedures like prostatectomy, hysterectomy, and nephrectomy, robotic surgery is considered the gold standard globally.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for robotic surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most robotic surgery patients need 7–12 days in India: 1–2 days pre-operative workup (blood panel, imaging review, pre-anaesthesia), surgery day (2–4 hours), 2–3 nights hospital stay, and 4–6 days recovery before flying. Sultan GHC arranges accommodation near the hospital and follow-up teleconsultation at 2 weeks and 6 weeks post-surgery.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does robotic nephrectomy (kidney removal) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robotic partial nephrectomy in the U.S. costs $15,000–$45,000. In India: $4,000–$8,000. Robotic radical nephrectomy: $3,500–$7,000 India vs $12,000–$40,000 U.S. Apollo Chennai and Medanta Gurugram are leading centers for robotic renal surgery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is robotic surgery available in Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Acibadem (JCI-accredited) and Memorial Hospital in Istanbul have da Vinci Surgical Systems. Türkiye offers robotic prostatectomy, hysterectomy, nephrectomy, colectomy, and thyroidectomy. Costs in Türkiye are comparable to India: $4,000–$12,000 depending on procedure. Türkiye is particularly popular for U.S. patients seeking robotic surgery with easier logistics — Turkish Airlines nonstop from 7 U.S. cities, no visa required for Americans.'
      }
    },
  ]
}

const PROCEDURES = [
  {
    specialty: 'Urology',
    color: 'bg-blue-50 border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700',
    items: [
      { name: 'Robotic Radical Prostatectomy (RALP)',  detail: 'Nerve-sparing RALP for prostate cancer — gold standard globally. 3D vision enables precise neurovascular bundle preservation. Return to continence and sexual function faster than open approach.', tag: 'Highest Volume' },
      { name: 'Robotic Partial Nephrectomy',          detail: 'Nephron-sparing surgery for renal tumors — robotic precision allows maximal tissue conservation. For T1/T2 renal cell carcinoma. Associated with better long-term kidney function vs radical.' },
      { name: 'Robotic Radical Nephrectomy',          detail: 'For larger renal tumors or locally advanced kidney cancer. Robotic approach provides better visualization of renal hilum and lymph nodes.' },
      { name: 'Robotic Pyeloplasty',                  detail: 'For ureteropelvic junction (UPJ) obstruction — precise anastomosis with robotic suturing. Superior to open pyeloplasty for complex cases.' },
      { name: 'Robotic Cystectomy (Bladder Removal)', detail: 'For muscle-invasive bladder cancer — robotic radical cystectomy with neobladder or ileal conduit urinary diversion. Reduced blood loss vs open approach.' },
    ]
  },
  {
    specialty: 'Gynaecology',
    color: 'bg-pink-50 border-pink-200',
    badgeColor: 'bg-pink-100 text-pink-700',
    items: [
      { name: 'Robotic Hysterectomy (Total & Radical)', detail: 'For fibroids, endometriosis, cancer, uterine prolapse. Robotic TLH: 1–2 night hospital stay vs 3–5 nights open. Radical robotic hysterectomy for cervical cancer — preserves blood supply with precision parametrial dissection.', tag: 'High Demand' },
      { name: 'Robotic Myomectomy',                    detail: 'Fertility-preserving robotic fibroid removal — superior suture technique for uterine wall closure. Reduces adhesion risk and speeds recovery vs laparoscopic.' },
      { name: 'Robotic Sacrocolpopexy',                detail: 'For pelvic organ prolapse — robotic mesh placement at sacrum. Far superior to vaginal mesh approaches with better long-term anatomical outcomes.' },
      { name: 'Robotic Endometriosis Excision',        detail: 'Deep infiltrating endometriosis (DIE) — robotic precision for excision of endometriotic nodules from bladder, ureter, bowel, and rectovaginal septum without opening the abdomen.' },
    ]
  },
  {
    specialty: 'General & GI Surgery',
    color: 'bg-green-50 border-green-200',
    badgeColor: 'bg-green-100 text-green-700',
    items: [
      { name: 'Robotic Colectomy / Rectal Resection', detail: 'Right, left, sigmoid colectomy and anterior resection for colon and rectal cancer — precise total mesorectal excision (TME) for rectal cancer reduces positive margin rates. Better view in the narrow pelvis vs laparoscopic.' },
      { name: 'Robotic Gastrectomy',                  detail: 'Partial or total robotic gastrectomy for gastric cancer — lymph node dissection (D2) with superior precision. Apollo and Medanta have the highest robotic gastrectomy volumes in India.' },
      { name: 'Robotic Hernia Repair (Inguinal & Ventral)', detail: 'Robotic inguinal hernia repair (TAPP / TEP) and ventral / incisional hernia repair — superior mesh placement with robotic suturing. Reduced recurrence for complex hernias.' },
      { name: 'Robotic Bariatric (Revision Cases)',   detail: 'Robotic sleeve gastrectomy conversion to bypass and other bariatric revision procedures — for complex anatomy, scar tissue, or prior failed procedures requiring maximum precision.' },
    ]
  },
  {
    specialty: 'Cardiothoracic & Head-Neck',
    color: 'bg-teal-50 border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-700',
    items: [
      { name: 'Robotic Thyroidectomy',               detail: 'Transaxillary or retroauricular robotic thyroidectomy — no neck scar. For patients who refuse a visible cervical incision. Full thyroidectomy or lobectomy with equivalent oncological outcomes. Apollo, Fortis, and Medanta offer transaxillary robotic thyroid programs.' },
      { name: 'Robotic Thymectomy',                  detail: 'Minimally invasive robotic thymectomy for myasthenia gravis and anterior mediastinal masses — access through small intercostal ports. Significantly reduced morbidity vs open sternotomy.' },
      { name: 'Robotic Lobectomy (Lung)',            detail: 'Robotic-assisted thoracoscopic surgery (RATS) for lung cancer — lobectomy, segmentectomy. Comparable to VATS for early lung cancer with potential advantages in complex hilar dissection.' },
      { name: 'Robotic Parathyroidectomy',           detail: 'For primary hyperparathyroidism — robotic transaxillary or retroauricular approach leaving no neck scar. Performed at select centers with robotic endocrine surgery programs.' },
    ]
  },
]

const COST_COMPARISON = [
  { procedure: 'Robotic Prostatectomy (RALP)',                us: '$15,000–$50,000', india: '$5,000–$12,000', turkey: '$5,500–$12,000', save: '~76%' },
  { procedure: 'Robotic Hysterectomy (TLH)',                  us: '$15,000–$40,000', india: '$3,000–$7,000',  turkey: '$3,500–$8,000',  save: '~82%' },
  { procedure: 'Robotic Radical Hysterectomy (cancer)',       us: '$20,000–$55,000', india: '$4,500–$9,000',  turkey: '$5,000–$10,000', save: '~80%' },
  { procedure: 'Robotic Partial Nephrectomy',                 us: '$15,000–$45,000', india: '$4,000–$8,000',  turkey: '$4,500–$9,000',  save: '~79%' },
  { procedure: 'Robotic Radical Nephrectomy',                 us: '$12,000–$40,000', india: '$3,500–$7,000',  turkey: '$4,000–$8,000',  save: '~79%' },
  { procedure: 'Robotic Colectomy / Anterior Resection',      us: '$18,000–$50,000', india: '$4,500–$9,000',  turkey: '$5,000–$10,000', save: '~78%' },
  { procedure: 'Robotic Gastrectomy (partial/total)',         us: '$20,000–$55,000', india: '$5,000–$10,000', turkey: '$5,500–$12,000', save: '~79%' },
  { procedure: 'Robotic Thyroidectomy (transaxillary)',       us: '$8,000–$20,000',  india: '$2,500–$5,000',  turkey: '$3,000–$6,000',  save: '~73%' },
  { procedure: 'Robotic Inguinal Hernia Repair (bilateral)',  us: '$8,000–$18,000',  india: '$2,000–$4,500',  turkey: '$2,500–$5,500',  save: '~76%' },
  { procedure: 'Robotic Myomectomy',                         us: '$12,000–$35,000', india: '$3,500–$7,500',  turkey: '$4,000–$8,000',  save: '~74%' },
]

const FAQS = [
  {
    q: 'How much does robotic prostatectomy (RALP) cost in India?',
    a: 'RALP in the U.S.: $15,000–$50,000. India: $5,000–$12,000 — saving 70–80%. Same da Vinci Si/Xi platform. Apollo Chennai, Fortis, and Medanta are highest-volume RALP centers in India.'
  },
  {
    q: 'Is da Vinci robotic surgery available in India?',
    a: 'Yes. India has one of Asia\'s largest da Vinci Surgical System installed bases. Apollo Chennai, Fortis Gurugram, Medanta, Kokilaben Mumbai, and Manipal Bengaluru all operate da Vinci Si and Xi systems.'
  },
  {
    q: 'How much does robotic hysterectomy cost in India?',
    a: 'Robotic TLH in the U.S.: $15,000–$40,000. India: $3,000–$7,000 — saving 75–85%. Available at Apollo, Fortis, and Medanta robotic gynecology programs.'
  },
  {
    q: 'What is the difference between robotic, laparoscopic, and open surgery?',
    a: 'Open: large incision, 4–8 week recovery. Laparoscopic: 3–5 small ports, 2–4 week recovery. Robotic (da Vinci): laparoscopic + 3D HD vision, 7-degree wristing, tremor filtration — greater precision, less blood loss, 1–2 week recovery. Gold standard for prostatectomy, hysterectomy, and nephrectomy.'
  },
  {
    q: 'How long do I need to stay in India for robotic surgery?',
    a: '7–12 days: 1–2 days pre-op workup, surgery day, 2–3 nights hospital, 4–6 days recovery before flying. Sultan GHC arranges accommodation and 2-week and 6-week post-op teleconsultation.'
  },
  {
    q: 'Is robotic surgery available in Türkiye?',
    a: 'Yes. Acibadem and Memorial Hospital Istanbul have da Vinci systems. Türkiye costs $4,000–$12,000 — comparable to India. No visa required for Americans; Turkish Airlines nonstop from 7 U.S. cities.'
  },
]

const RELATED = [
  { name: 'Urology',                    href: '/treatments/urology',              desc: 'Prostate cancer, kidney cancer, bladder surgery — all available robotically' },
  { name: 'Oncology',                   href: '/treatments/oncology',             desc: 'Cancer surgery across specialties — many performed with robotic precision' },
  { name: 'Obstetrics & Gynaecology',   href: '/treatments/obstetrics-gynaecology', desc: 'Robotic hysterectomy, myomectomy, and endometriosis surgery for women' },
  { name: 'Bariatric Surgery',          href: '/treatments/bariatric-metabolic-surgery', desc: 'Robotic bariatric revision for complex obesity surgery cases' },
  { name: 'ENT & Head-Neck Surgery',    href: '/treatments/ent-head-neck-surgery', desc: 'Robotic thyroidectomy and transoral robotic surgery (TORS)' },
  { name: 'Gastroenterology',           href: '/treatments/gastroenterology',     desc: 'Robotic colectomy, rectal resection, and gastrectomy' },
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
