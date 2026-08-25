import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection"
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, Shield, Users, ImageIcon, Star, Zap,
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robotic Surgery Abroad | India & Türkiye | Sultan GHC',
    description: 'da Vinci robotic surgery — RALP, hysterectomy, nephrectomy — $3,000–$12,000 vs $15,000–$50,000 U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Robotic & Minimally Invasive Surgery', item: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Robotic & Minimally Invasive Surgery — India and Türkiye',
  description: 'da Vinci robotic surgery for U.S. patients at JCI-accredited hospitals in India and Türkiye — RALP, robotic hysterectomy, robotic nephrectomy, robotic colectomy, robotic thyroidectomy, and more — coordinated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/robotic-minimally-invasive',
  about: { '@type': 'MedicalSpecialty', name: 'Robotic Surgery', alternateName: ['Minimally Invasive Surgery', 'da Vinci Surgery', 'Laparoscopic Surgery'], relevantSpecialty: 'General Surgery' },
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
        text: 'Robotic-assisted laparoscopic prostatectomy (RALP) in the U.S. costs $15,000–$50,000 for self-pay patients (FAIR Health 2024, including surgeon, anaesthesia, and hospital). At Apollo Chennai (India\'s highest-volume robotic urology center) and other accredited Indian robotic surgery centers, RALP costs $5,000–$12,000 — a saving of 70–80%. Same da Vinci Si or Xi platform. U.S.-trained or fellowship-trained robotic urological surgeons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is da Vinci robotic surgery available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India has one of Asia\'s largest installed bases of da Vinci Surgical Systems (Intuitive Surgical), concentrated at high-volume robotic surgery centers including Apollo Chennai (15+ years robotic surgery experience), Fortis Memorial Gurugram, Medanta Medicity Gurugram, Kokilaben Dhirubhai Ambani Hospital Mumbai, and Manipal Hospital Bengaluru. These centers perform robotic prostatectomy, hysterectomy, nephrectomy, colectomy, gastrectomy, thyroidectomy, and hernia repair on the same platform used in U.S. academic medical centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does robotic hysterectomy cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robotic hysterectomy (total robotic hysterectomy / robotic-assisted TLH) in the U.S. costs $15,000–$40,000. In India: $3,000–$7,000 — a saving of 75–85%. Available at Apollo, Fortis, Medanta, and Rela Institute robotic gynecology programs. Sultan GHC coordinates pre-operative gynecology workup, robotic hysterectomy, and post-operative follow-up for American women traveling to India for this procedure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between robotic surgery, laparoscopic surgery, and open surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open surgery uses large incisions for direct access — highest blood loss, longest recovery (4–8 weeks). Laparoscopic (keyhole) surgery uses 3–5 small incisions with a camera — significant improvement: less blood loss, 2–4 week recovery. Robotic surgery (da Vinci) adds a robotic arm system to laparoscopy — 3D high-definition vision, 7-degree instrument wristing (beyond human hand movement), tremor filtration, and superior ergonomics for the surgeon. Result: even less blood loss, more precise dissection, lower complication rates in complex procedures, faster recovery (1–2 weeks), and earlier return to daily activities. For procedures like prostatectomy, hysterectomy, and nephrectomy, robotic surgery is considered the gold standard globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for robotic surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most robotic surgery patients need 7–12 days in India: 1–2 days pre-operative workup (blood panel, imaging review, pre-anaesthesia), surgery day (2–4 hours), 2–3 nights hospital stay, and 4–6 days recovery before flying. Sultan GHC arranges accommodation near the hospital and follow-up teleconsultation at 2 weeks and 6 weeks post-surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does robotic nephrectomy (kidney removal) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robotic partial nephrectomy in the U.S. costs $15,000–$45,000. In India: $4,000–$8,000. Robotic radical nephrectomy: $3,500–$7,000 India vs $12,000–$40,000 U.S. Apollo Chennai, Medanta Gurugram, and Rela Institute Chennai are leading centers for robotic renal surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is robotic surgery available in Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Acibadem (JCI-accredited) and Memorial Hospital in Istanbul have da Vinci Surgical Systems. Türkiye offers robotic prostatectomy, hysterectomy, nephrectomy, colectomy, and thyroidectomy. Costs in Türkiye are comparable to India: $4,000–$12,000 depending on procedure. Türkiye is particularly popular for U.S. patients seeking robotic surgery with easier logistics — Turkish Airlines nonstop from 7 U.S. cities, no visa required for Americans.',
      },
    },
  ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    a: 'RALP in the U.S.: $15,000–$50,000. India: $5,000–$12,000 — saving 70–80%. Same da Vinci Si/Xi platform. Apollo Chennai, Fortis, and Medanta are highest-volume RALP centers in India.',
  },
  {
    q: 'Is da Vinci robotic surgery available in India?',
    a: 'Yes. India has one of Asia\'s largest da Vinci Surgical System installed bases. Apollo Chennai, Fortis Gurugram, Medanta, Kokilaben Mumbai, and Manipal Bengaluru all operate da Vinci Si and Xi systems.',
  },
  {
    q: 'How much does robotic hysterectomy cost in India?',
    a: 'Robotic TLH in the U.S.: $15,000–$40,000. India: $3,000–$7,000 — saving 75–85%. Available at Apollo, Fortis, and Medanta robotic gynecology programs.',
  },
  {
    q: 'What is the difference between robotic, laparoscopic, and open surgery?',
    a: 'Open: large incision, 4–8 week recovery. Laparoscopic: 3–5 small ports, 2–4 week recovery. Robotic (da Vinci): laparoscopic + 3D HD vision, 7-degree wristing, tremor filtration — greater precision, less blood loss, 1–2 week recovery. Gold standard for prostatectomy, hysterectomy, and nephrectomy.',
  },
  {
    q: 'How long do I need to stay in India for robotic surgery?',
    a: '7–12 days: 1–2 days pre-op workup, surgery day, 2–3 nights hospital, 4–6 days recovery before flying. Sultan GHC arranges accommodation and 2-week and 6-week post-op teleconsultation.',
  },
  {
    q: 'Is robotic surgery available in Türkiye?',
    a: 'Yes. Acibadem and Memorial Hospital Istanbul have da Vinci systems. Türkiye costs $4,000–$12,000 — comparable to India. No visa required for Americans; Turkish Airlines nonstop from 7 U.S. cities.',
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
  return (
    <div className={`relative bg-gradient-to-br from-indigo-50 to-slate-100 border-2 border-dashed border-indigo-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }} aria-label={label} role="img">
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-indigo-400 shrink-0" />
        <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-indigo-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <p className="text-[10px] font-semibold text-indigo-500 leading-snug shrink-0">{label}</p>
      <div className="bg-blue-50/80 border border-blue-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function RoboticMinimallyInvasivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#F0F4FF] border-b border-[#c7d2fe]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Robotic & Minimally Invasive Surgery</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                da Vinci Robotic Surgery Abroad
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Robotic Surgery in{' '}
                <span className="text-primary">India & Türkiye</span> — $3,000–$12,000 vs $15,000–$50,000 in the U.S.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                RALP, robotic hysterectomy, robotic nephrectomy, robotic colectomy, robotic thyroidectomy, and more — on the same da Vinci Surgical System (Si / Xi) used in U.S. academic medical centers. Performed by U.S.-trained or FMAS-credentialed robotic surgeons at JCI-accredited hospitals in India and Türkiye.
              </p>
              {/* Platform badge */}
              <div className="bg-white border border-primary/20 rounded-2xl p-5 mb-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap size={15} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">da Vinci Platform — Same Technology as U.S. Top Hospitals</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  {[
                    { label: 'da Vinci Si', desc: 'High-definition 3D vision, multi-arm robotic surgery' },
                    { label: 'da Vinci Xi', desc: 'Latest platform — improved range, smaller ports, advanced imaging' },
                    { label: 'da Vinci SP', desc: 'Single-port system for select procedures — available at some partner centers' },
                  ].map(({ label, desc }) => (
                    <div key={label} className="bg-primary/5 border border-primary/15 rounded-xl p-3">
                      <p className="font-bold text-primary mb-1">{label}</p>
                      <p className="text-[10px] text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-3">Intuitive Surgical da Vinci systems — verified at partner hospitals before patient referral.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Request Robotic Surgery Evaluation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="robotic-surgery-india-da-vinci-usa-patients-sultan-ghc.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="da Vinci robotic surgery console — JCI-accredited hospital, India"
                aiPrompt="A surgical team performing robotic surgery using a da Vinci Xi robotic system at a JCI-accredited Indian hospital. Surgeon at the console, 3D HD surgical view on monitor, robotic arms positioned over patient. Sterile, precision environment. Photorealistic, 4K. No text. Conveys cutting-edge technology and expert precision."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star,     title: 'Genuine da Vinci Systems',    desc: 'Sultan GHC verifies that each partner hospital operates a genuine Intuitive Surgical da Vinci Si or Xi system — not imitation or generic robotic platforms.' },
              { icon: Shield,   title: 'Credentialed Robotic Surgeons', desc: 'All partner robotic surgeons hold Intuitive Surgical da Vinci system credentials and have a minimum of 100 robotically completed procedures in their specialty.' },
              { icon: Activity, title: 'Comparable Outcomes Data',    desc: 'Partner centers publish complication rates and oncological outcomes. Sultan GHC provides access to surgeon case volume and outcomes data on request.' },
              { icon: Users,    title: 'Complete Journey Coordination', desc: 'Pre-operative workup, robotic surgery, 2–3 night hospital stay, recovery accommodation, and all follow-up teleconsultation arranged by Sultan GHC.' },
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

      {/* Why robotic over open */}
      <section className="bg-gray-50 py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Robotic Surgery vs Open vs Laparoscopic</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Dimension</th>
                  <th className="text-center px-5 py-4 font-semibold">Open Surgery</th>
                  <th className="text-center px-5 py-4 font-semibold">Laparoscopic</th>
                  <th className="text-center px-5 py-4 font-semibold text-primary rounded-tr-2xl">Robotic (da Vinci)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Incision size', 'Large (6–12 in)', '3–5 small ports', '3–5 small ports (8 mm)'],
                  ['3D HD vision', 'No', 'Limited', 'Yes — 10x magnification'],
                  ['Instrument dexterity', 'Human wrist only', '4 degrees of freedom', '7 degrees (wristing)'],
                  ['Tremor filtration', 'No', 'No', 'Yes — electronic filtration'],
                  ['Blood loss', 'Highest', 'Low', 'Lowest'],
                  ['Hospital stay', '5–7 days', '2–3 days', '1–2 days'],
                  ['Recovery time', '4–8 weeks', '2–4 weeks', '1–2 weeks'],
                  ['Complication rate', 'Highest', 'Lower', 'Lowest (complex cases)'],
                  ['Scar size', 'Large, visible', 'Small', 'Minimal'],
                ].map(([dim, open, lap, robotic], i) => (
                  <tr key={dim} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-medium text-gray-800">{dim}</td>
                    <td className="px-5 py-3 text-center text-gray-500">{open}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{lap}</td>
                    <td className="px-5 py-3 text-center font-semibold text-primary">{robotic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Clinical comparison based on published literature. Outcomes vary by procedure, patient factors, and surgeon experience.</p>
        </div>
      </section>

      {/* Procedures by specialty */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Robotic Procedures Available</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Organized by specialty. All procedures performed on da Vinci Si or Xi by credentialed robotic surgeons at partner hospitals.</p>
          </div>
          <div className="space-y-10">
            {PROCEDURES.map((group) => (
              <div key={group.specialty}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${group.badgeColor} ${group.color}`}>{group.specialty}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <div key={item.name} className={`rounded-2xl border p-5 shadow-sm hover:shadow-md transition-shadow ${group.color} relative`}>
                      {item.tag && (
                        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${group.badgeColor}`}>{item.tag}</span>
                      )}
                      <div className="flex items-start gap-3 mb-2 pr-24">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Activity size={13} className="text-primary" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 leading-snug">{item.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-10">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Robotic Surgery Cost: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">U.S. figures from FAIR Health Consumer 2024 (self-pay, all-in). India and Türkiye from partner hospital rate cards 2025. All-inclusive: surgeon, anaesthesia, robotic system use, 2–3 night hospital stay, and standard post-op care.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Robotic Procedure</th>
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
          <p className="text-xs text-gray-400 mt-4 text-center">Costs exclude travel and accommodation. Sultan GHC provides a personalized cost estimate including all logistics. <Link href="/enquiry" className="text-primary hover:underline">Request a cost estimate →</Link></p>
        </div>
      </section>

      {/* India / Türkiye centers */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">Partner Robotic Surgery Centers</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Robotic Surgery Centers in India</h3>
                  <p className="text-sm text-gray-500">da Vinci Si / Xi — Verified installations</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Apollo Hospital Chennai — India\'s highest-volume robotic center (da Vinci Xi); 3,000+ robotic procedures annually across urology, gynecology, and general surgery',
                  'Fortis Memorial Research Institute Gurugram — da Vinci Xi; robotic prostatectomy, hysterectomy, colectomy, and complex revision bariatric',
                  'Medanta — The Medicity Gurugram — da Vinci Xi; dedicated robotic surgery program with full team credentialing and outcomes tracking',
                  'Kokilaben Dhirubhai Ambani Hospital Mumbai — da Vinci Xi; robotic gynecology and urology; NABH-accredited with ISO certification',
                  'Manipal Hospital Bengaluru — da Vinci Si/Xi; robotic prostatectomy and robotic gynecology including radical hysterectomy for cervical cancer',
                  'Narayana Institute of Cardiac Sciences Bengaluru — da Vinci for robotic cardiac and thoracic surgery including robotic CABG and lobectomy',
                  'Tata Memorial Hospital Mumbai — select robotic procedures for oncological head-neck and thoracic surgery via government-run robotic program',
                  'Rela Institute & Medical Centre Chennai — da Vinci robotic program for hepatobiliary, urological, and general surgery; Asia\'s largest liver transplant program by volume',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Robotic Surgery Centers in Türkiye</h3>
                  <p className="text-sm text-gray-500">Istanbul — JCI-Accredited Programs, Koç University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem Healthcare Group — multiple JCI-accredited hospitals across Istanbul and Ankara; da Vinci Xi for urology, gynecology, and thoracic surgery',
                  'Memorial Hospital Istanbul — da Vinci Xi; high-volume robotic prostatectomy and robotic hysterectomy; English-speaking robotic surgical team',
                  'American Hospital Istanbul — established 1920; da Vinci robotic surgery; most U.S.-aligned hospital experience in Türkiye',
                  'Türkiye benefits for U.S. patients: no visa required, Turkish Airlines nonstop from New York, Los Angeles, Chicago, Houston, Boston, Washington D.C., Miami',
                  'Comparable costs to India for robotic procedures, with shorter travel time from U.S. East Coast cities',
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

      {/* Journey steps */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">Your Robotic Surgery Journey — Step by Step</h2>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Share Your Reports', body: 'Upload your medical reports, imaging (MRI/CT/ultrasound), biopsy results, and surgical history. Sultan GHC reviews your case and confirms which robotic procedure is recommended for you.' },
              { step: '02', title: 'Surgeon Match & Virtual Consultation', body: 'We match you with a credentialed robotic surgeon at the most suitable center for your procedure. A teleconsultation is arranged — you speak directly with the surgeon before any commitment.' },
              { step: '03', title: 'Personalized Cost Estimate', body: 'Receive a detailed cost breakdown: robotic surgery fee, anaesthesia, hospital stay, pre-op workup, discharge medications, and recommended accommodation near the hospital.' },
              { step: '04', title: 'Pre-Operative Workup on Arrival', body: 'On arrival (1–2 days before surgery): blood panel, ECG, imaging review, pre-anaesthesia consultation, and a final review with your robotic surgeon. Sultan GHC coordinates all appointments in sequence.' },
              { step: '05', title: 'Robotic Surgery & Hospital Stay', body: 'Surgery (2–4 hours). Da Vinci robotic procedure. 1–3 nights in hospital. Pain is minimal — most patients walk the day after surgery. You receive your full surgical report and discharge summary in English.' },
              { step: '06', title: 'Recovery & Departure', body: '4–6 days recovery in accommodation near the hospital. Sultan GHC arranges a bariatric-friendly or procedure-appropriate diet plan. Airport transfer on departure day.' },
              { step: '07', title: 'Remote Follow-Up', body: 'Teleconsultation at 2 weeks and 6 weeks post-surgery. Pathology results (for cancer cases) shared directly. Sultan GHC coordinates any questions between you, your surgeon in India, and your U.S.-based physician.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <span className="text-2xl font-bold text-primary/30 shrink-0 leading-none">{step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Get a Robotic Surgery Evaluation — Free</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Upload your medical reports. Sultan GHC will confirm which robotic procedure is appropriate, match you with a credentialed surgeon, and provide a complete cost estimate — no obligation, no pressure.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Upload My Reports — Free Evaluation <ArrowRight size={15} />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <PartnerHospitalsSection title="Internationally Accredited Robotic Surgery Centers" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Robotic Surgery Abroad</h2>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Ready to Explore Robotic Surgery Abroad?</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Upload your reports. Our coordinators will confirm which robotic procedure you need, match you with the right surgeon, and provide a complete cost estimate — free of charge.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Request Free Evaluation <ArrowRight size={15} />
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
