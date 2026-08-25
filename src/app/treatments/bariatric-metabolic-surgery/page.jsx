import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection"
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle, Shield, Users, ImageIcon, Star,
} from 'lucide-react'

export const metadata = {
  title: 'Bariatric & Weight Loss Surgery Abroad | India & Türkiye | Sultan GHC',
  description:
    'Sleeve gastrectomy, gastric bypass, mini gastric bypass, SADI-S, and bariatric revision surgery in India and Türkiye — $4,000–$9,000 vs $15,000–$45,000 in the U.S. Accredited bariatric centers, IFSO-member surgeons, and full care coordination for American patients by Sultan GHC.',
  keywords: [
    'bariatric surgery India cost',
    'sleeve gastrectomy India cost',
    'gastric bypass India cost',
    'bariatric surgery Türkiye cost',
    'weight loss surgery India',
    'sleeve gastrectomy Türkiye cost',
    'mini gastric bypass India',
    'SADI-S surgery India',
    'bariatric surgery for Americans abroad',
    'affordable bariatric surgery USA patients',
    'bariatric surgery medical tourism India Türkiye',
    'Sultan GHC bariatric',
    'IFSO bariatric surgeon India',
    'bariatric revision surgery India cost',
    'endoscopic sleeve gastroplasty India',
  ],
  openGraph: {
    title: 'Bariatric Surgery in India & Türkiye | Sleeve, Bypass, SADI-S | Sultan GHC',
    description: 'Sleeve gastrectomy, gastric bypass, and bariatric revision surgery — $4,000–$9,000 vs $15,000–$45,000 in the U.S. at accredited bariatric centers.',
    url: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bariatric Surgery Abroad | Sleeve, Bypass, SADI-S | India & Türkiye | Sultan GHC',
    description: 'Sleeve gastrectomy, gastric bypass, and revision bariatric surgery — $4,000–$9,000 vs $15,000–$45,000 U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Bariatric & Metabolic Surgery', item: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Bariatric & Metabolic Surgery Abroad — India and Türkiye',
  description: 'Sleeve gastrectomy, gastric bypass, mini gastric bypass, SADI-S, and revision bariatric surgery for U.S. patients at accredited bariatric centers in India and Türkiye, coordinated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery',
  about: { '@type': 'MedicalSpecialty', name: 'Bariatric Surgery', alternateName: ['Weight Loss Surgery', 'Metabolic Surgery', 'Obesity Surgery'], relevantSpecialty: 'General Surgery' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does sleeve gastrectomy cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sleeve gastrectomy in the U.S. costs $15,000–$35,000 for self-pay patients (ASMBS 2024 data, including surgeon, anesthesia, 2-night hospital stay, and follow-up). At accredited bariatric centers in India such as Apollo, Saifee Hospital Mumbai, and Vikram Hospital Bengaluru, sleeve gastrectomy costs $4,000–$7,000 — a saving of 75–85%. The procedure uses the same laparoscopic technique, 5-port approach, and stapling technology (Medtronic or Johnson and Johnson Ethicon) as U.S. bariatric programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does gastric bypass surgery cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roux-en-Y gastric bypass (RYGB) in the U.S. costs $20,000–$45,000 for self-pay patients. In India: $5,000–$9,000 — a saving of 75–80%. Mini gastric bypass (MGB / one-anastomosis gastric bypass / OAGB) costs $4,500–$7,500 in India. Both RYGB and MGB are available at Apollo, Fortis, and Medanta bariatric programs. Türkiye: $5,000–$9,000 for RYGB.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I a candidate for bariatric surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard bariatric surgery candidacy criteria (ASMBS / IFSO guidelines): BMI 40+ (any comorbidities), or BMI 35–39.9 with at least one obesity-related comorbidity (type 2 diabetes, hypertension, sleep apnea, NAFLD, joint disease). Some programs also accept BMI 30–34.9 with poorly controlled type 2 diabetes. Sultan GHC provides a free pre-screening questionnaire and connects you with a bariatric surgeon for evaluation — no commitment required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bariatric surgery safe in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sultan GHC partners exclusively with IFSO (International Federation for the Surgery of Obesity and Metabolic Disorders) member surgeons and accredited bariatric programs. India\'s leading bariatric centers perform 10,000+ bariatric procedures annually with 30-day complication rates (anastomotic leak, DVT, PE) comparable to published U.S. MBSAQIP (Metabolic and Bariatric Surgery Accreditation and Quality Improvement Program) data. All partner centers have ICU support, dedicated bariatric dietitians, and psychological evaluation protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sleeve gastrectomy and gastric bypass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sleeve gastrectomy removes approximately 80% of the stomach, creating a tube (sleeve) — simpler procedure, no intestinal rerouting, lower risk, excellent weight loss (60–70% EWL). Gastric bypass (RYGB) creates a small stomach pouch AND reroutes the small intestine — greater metabolic benefit for type 2 diabetes, better long-term weight loss (70–80% EWL), but higher surgical complexity. Mini gastric bypass (MGB/OAGB) is a simpler variant of bypass with one anastomosis — similar metabolic outcomes. Sultan GHC\'s bariatric surgeons recommend the best procedure for each individual based on BMI, comorbidities, eating behavior, and GERD history.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for bariatric surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bariatric surgery patients need 10–14 days in India: 1–2 days pre-operative workup (blood panel, sleep study, cardiac clearance, dietitian assessment), surgery day (2–3 hours), 2–3 nights hospital stay post-surgery, 5–7 days recovery in nearby accommodation before flying. Sultan GHC arranges a bariatric-diet-compatible meal plan and accommodation near the hospital. All follow-up (3-week, 3-month, 6-month, annual) can be managed remotely with Sultan GHC coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is revision bariatric surgery available in India for failed sleeve gastrectomy or gastric band?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Revision bariatric surgery — sleeve-to-bypass conversion (for GERD, inadequate weight loss, or weight regain), band removal and conversion to sleeve or bypass, and SADI-S (Single Anastomosis Duodeno-Ileal Bypass with Sleeve) for super-obesity — is available at Apollo, Fortis, and Medanta bariatric centers. Revision surgery requires more detailed pre-operative assessment including upper GI endoscopy and barium swallow. India revision bariatric cost: $5,500–$10,000 vs $15,000–$50,000 U.S.',
      },
    },
  ],
}

const INDICATIONS = [
  { name: 'Morbid Obesity (BMI 40+)',                       icon: '⚖️' },
  { name: 'Obesity with Type 2 Diabetes (BMI 35+)',         icon: '🩸' },
  { name: 'Obesity with Sleep Apnea',                       icon: '😴' },
  { name: 'Obesity with Hypertension',                      icon: '❤️' },
  { name: 'Obesity with NAFLD / Fatty Liver',               icon: '🫀' },
  { name: 'Obesity with PCOS',                              icon: '⚕️' },
  { name: 'Obesity with Severe Joint Pain',                 icon: '🦴' },
  { name: 'Failed Previous Diet Programs',                  icon: '📉' },
  { name: 'Failed Sleeve (Weight Regain / GERD)',           icon: '🔄' },
  { name: 'Lap Band Failure / Removal',                     icon: '🔧' },
  { name: 'Super Obesity (BMI 50+)',                        icon: '🎯' },
  { name: 'Metabolic Syndrome',                             icon: '🧬' },
]

const PROCEDURES = [
  {
    title: 'Laparoscopic Sleeve Gastrectomy (LSG)',
    desc: 'Approximately 80% of the stomach is removed laparoscopically, leaving a narrow gastric sleeve. The pylorus (stomach outlet) is preserved — no intestinal rerouting. Average excess weight loss (EWL): 60–70% at 1 year. Excellent for BMI 35–50. Preferred when simplicity and lower surgical risk are priorities. Most popular bariatric procedure globally.',
    badge: 'Most Popular',
  },
  {
    title: 'Roux-en-Y Gastric Bypass (RYGB)',
    desc: 'A small stomach pouch (15–30 mL) is created and connected directly to the mid-jejunum, bypassing 100–150 cm of small intestine. Superior metabolic outcome for type 2 diabetes — remission rate 80–85% at 1 year. Average EWL: 70–80%. Gold standard for GERD with obesity, failed sleeve, and patients with severe metabolic disease.',
    badge: 'Best for Diabetes',
  },
  {
    title: 'Mini Gastric Bypass (MGB / OAGB)',
    desc: 'One-anastomosis gastric bypass — a long narrow gastric tube connected to a loop of jejunum at a single anastomosis. Simpler than RYGB, fewer complications, metabolic outcomes comparable for T2DM. Increasingly popular globally. Available at Apollo, Medanta, and Vikram Hospital bariatric programs. Average EWL: 65–75%.',
    badge: null,
  },
  {
    title: 'SADI-S (Single Anastomosis Duodeno-Ileal Bypass)',
    desc: 'Sleeve gastrectomy combined with a long-loop duodeno-ileal bypass — the most powerful bariatric-metabolic procedure for super-obesity (BMI 50+) and severe metabolic disease. Produces the greatest EWL (80–90%) and highest T2DM remission rates. Requires careful nutritional monitoring long-term. Available at select high-volume partner centres.',
    badge: 'Super Obesity',
  },
  {
    title: 'Revision Bariatric Surgery',
    desc: 'Conversion of sleeve to gastric bypass (for GERD, inadequate weight loss, or weight regain), band removal and conversion to sleeve or bypass, sleeve re-do, and SADI-S conversion. Requires pre-operative upper GI endoscopy and barium study. Performed by high-volume revision bariatric surgeons at Apollo, Fortis, and Medanta.',
    badge: null,
  },
  {
    title: 'Endoscopic Sleeve Gastroplasty (ESG)',
    desc: 'Incisionless endoscopic procedure that sutures the stomach from inside using an endoscopic suturing device (Apollo OverStitch) — reduces stomach volume by 70% without surgery. For BMI 30–40, or as a bridge to surgery. EWL: 40–50% at 1 year. No incisions, no hospital stay overnight. Available at select Apollo and Fortis endoscopy units.',
    badge: null,
  },
  {
    title: 'Intragastric Balloon (IGB)',
    desc: 'A silicone balloon filled with saline is placed endoscopically into the stomach for 6 months, reducing appetite and capacity. For BMI 27–40 or pre-operative weight loss before bariatric surgery. EWL: 30–40%. Removed endoscopically at 6 months. Obalon (swallowable) and Orbera (saline-filled) balloons available at partner centers.',
    badge: null,
  },
]

const COST_COMPARISON = [
  { procedure: 'Sleeve Gastrectomy (LSG)',            us: '$15,000–$35,000', india: '$4,000–$7,000',  turkey: '$4,000–$8,000',  save: '~78%' },
  { procedure: 'Gastric Bypass (RYGB)',               us: '$20,000–$45,000', india: '$5,000–$9,000',  turkey: '$5,000–$9,000',  save: '~77%' },
  { procedure: 'Mini Gastric Bypass (MGB/OAGB)',      us: '$18,000–$40,000', india: '$4,500–$7,500',  turkey: '$4,500–$8,500',  save: '~78%' },
  { procedure: 'SADI-S (Duodeno-Ileal Bypass)',       us: '$25,000–$55,000', india: '$6,000–$11,000', turkey: '$7,000–$13,000', save: '~78%' },
  { procedure: 'Revision Bariatric (sleeve to bypass)',us: '$15,000–$50,000', india: '$5,500–$10,000', turkey: '$6,000–$12,000', save: '~77%' },
  { procedure: 'Endoscopic Sleeve Gastroplasty (ESG)',us: '$9,000–$20,000',  india: '$2,500–$5,000',  turkey: '$3,000–$6,000',  save: '~73%' },
  { procedure: 'Intragastric Balloon (6-month)',      us: '$6,000–$12,000',  india: '$1,500–$3,500',  turkey: '$2,000–$4,500',  save: '~72%' },
]

const FAQS = [
  {
    q: 'How much does sleeve gastrectomy cost in India?',
    a: 'Sleeve gastrectomy in the U.S.: $15,000–$35,000. India: $4,000–$7,000 — saving 75–85%. Same laparoscopic technique, Medtronic or Ethicon stapling, and post-op dietitian care as U.S. programs.',
  },
  {
    q: 'How much does gastric bypass cost in India?',
    a: 'Gastric bypass (RYGB) in the U.S.: $20,000–$45,000. India: $5,000–$9,000. Mini gastric bypass (MGB/OAGB): $4,500–$7,500 India. Both procedures at Apollo, Fortis, and Medanta bariatric programs.',
  },
  {
    q: 'Am I a candidate for bariatric surgery?',
    a: 'Standard criteria: BMI 40+ (any comorbidities) or BMI 35–39.9 with at least one obesity-related comorbidity (T2DM, hypertension, sleep apnea). Some programs accept BMI 30–34.9 with poorly controlled T2DM. Sultan GHC provides a free pre-screening questionnaire to assess candidacy.',
  },
  {
    q: 'Is bariatric surgery safe in India?',
    a: 'Sultan GHC partners with IFSO-member surgeons only. Partner centers perform 10,000+ bariatric procedures annually with complication rates comparable to published U.S. MBSAQIP data. All centers have ICU, bariatric dietitians, and psychological evaluation protocols.',
  },
  {
    q: 'What is the difference between sleeve gastrectomy and gastric bypass?',
    a: 'Sleeve removes 80% of stomach, no intestinal rerouting — simpler, excellent for most patients (60–70% EWL). Gastric bypass reroutes intestine — greater metabolic benefit for T2DM (80–85% remission), better long-term EWL (70–80%), but more complex. Sultan GHC surgeons recommend the right procedure per individual profile.',
  },
  {
    q: 'How long do I need to stay in India for bariatric surgery?',
    a: '10–14 days total: 1–2 days pre-op workup, surgery day, 2–3 nights in hospital, 5–7 days recovery. All follow-up (3-week, 3-month, 6-month, annual) managed remotely with Sultan GHC coordination.',
  },
  {
    q: 'Is revision bariatric surgery available in India?',
    a: 'Yes. Sleeve-to-bypass conversion, band removal to sleeve or bypass, SADI-S conversion — all available at Apollo, Fortis, and Medanta. Revision bariatric cost: $5,500–$10,000 India vs $15,000–$50,000 U.S.',
  },
]

const RELATED = [
  { name: 'Gastroenterology',            href: '/treatments/gastroenterology',   desc: 'GERD, Barrett\'s esophagus, and upper GI conditions associated with obesity' },
  { name: 'Hepatology & Liver Care',     href: '/treatments/hepatology-liver-care', desc: 'NAFLD / NASH — fatty liver disease commonly associated with obesity' },
  { name: 'Cardiology & Cardiac Surgery',href: '/treatments/cardiology',         desc: 'Cardiac risk assessment and pre-operative clearance for bariatric patients' },
  { name: 'Orthopaedics',               href: '/treatments/orthopedics',         desc: 'Joint replacement for obesity-related knee and hip arthritis' },
  { name: 'Robotic Surgery',            href: '/treatments/robotic-minimally-invasive', desc: 'Robotic-assisted bariatric surgery for complex revision cases' },
]

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div className={`relative bg-gradient-to-br from-orange-50 to-slate-100 border-2 border-dashed border-orange-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }} aria-label={label} role="img">
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-orange-400 shrink-0" />
        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-orange-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <p className="text-[10px] font-semibold text-orange-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function BariatricMetabolicSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#FFF7F0] border-b border-[#ffdfc2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Bariatric & Metabolic Surgery</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Weight Loss & Metabolic Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Bariatric Surgery in{' '}
                <span className="text-primary">India & Türkiye</span> — $4,000–$9,000 vs $15,000–$45,000 in the U.S.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Sleeve gastrectomy, gastric bypass, mini bypass, SADI-S, and revision bariatric surgery — performed by IFSO-member surgeons at accredited bariatric centers. Sultan GHC coordinates the complete journey for American patients seeking life-changing weight loss surgery at a fraction of U.S. costs.
              </p>
              {/* Quick price compare */}
              <div className="bg-white border border-primary/20 rounded-2xl p-5 mb-8 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Price comparison — Sleeve Gastrectomy</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { flag: 'us', label: 'USA', price: '$15K–$35K', color: 'text-red-500' },
                    { flag: 'in', label: 'India', price: '$4K–$7K', color: 'text-primary' },
                    { flag: 'tr', label: 'Türkiye', price: '$4K–$8K', color: 'text-primary' },
                  ].map(({ flag, label, price, color }) => (
                    <div key={flag} className="bg-gray-50 rounded-xl p-3">
                      <img src={`https://flagcdn.com/20x15/${flag}.png`} width={20} height={15} alt={label} className="rounded-sm mx-auto mb-1.5" />
                      <p className="text-[10px] font-semibold text-gray-500 mb-1">{label}</p>
                      <p className={`text-sm font-bold ${color}`}>{price}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-3">Source: ASMBS 2024 (U.S.) · IFSO partner center rates (India/Türkiye 2025)</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Check If I Am a Candidate <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="bariatric-weight-loss-surgery-india-turkey-sleeve-bypass-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Laparoscopic bariatric surgery suite — accredited center, India"
                aiPrompt="A laparoscopic bariatric surgery suite at a premier Indian hospital. Surgeon with laparoscopic instruments, 4K monitor showing minimally invasive procedure. Clean, modern environment. Photorealistic, 4K, no text overlays. Conveys precision, safety, and transformation."
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
              { icon: Star,     title: 'IFSO-Member Surgeons',       desc: 'All partner bariatric surgeons are members of the International Federation for the Surgery of Obesity and Metabolic Disorders.' },
              { icon: Shield,   title: 'Accredited Bariatric Centers', desc: 'Partner hospitals have dedicated bariatric programs with ICU, dietitian support, and psychological evaluation — not general surgery add-ons.' },
              { icon: Activity, title: 'Same Technique, Same Equipment', desc: 'Laparoscopic sleeve and bypass with Medtronic or Ethicon stapling systems — the same technology used in U.S. MBSAQIP-accredited programs.' },
              { icon: Users,    title: 'Remote Follow-Up Coordination', desc: 'All post-operative follow-up at 3 weeks, 3 months, 6 months, and annually is coordinated remotely by Sultan GHC with your local physician.' },
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

      {/* Candidacy */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Am I a Candidate for Bariatric Surgery?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { bmi: 'BMI 40+', label: 'Eligible', note: 'Any obesity-related condition — or no comorbidity at all', color: 'bg-green-50 border-green-200 text-green-800' },
              { bmi: 'BMI 35–39.9', label: 'Eligible with Comorbidity', note: 'T2DM, hypertension, sleep apnea, NAFLD, severe joint disease', color: 'bg-primary/5 border-primary/20 text-primary' },
              { bmi: 'BMI 30–34.9', label: 'Select Programs', note: 'Poorly controlled T2DM — metabolic surgery for diabetes remission', color: 'bg-amber-50 border-amber-200 text-amber-800' },
            ].map(({ bmi, label, note, color }) => (
              <div key={bmi} className={`rounded-2xl border p-5 text-center ${color}`}>
                <p className="text-2xl font-bold mb-1">{bmi}</p>
                <p className="text-sm font-semibold mb-2">{label}</p>
                <p className="text-xs leading-relaxed opacity-80">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">Based on ASMBS / IFSO 2022 guidelines. Final candidacy determined by bariatric surgeon after full evaluation.</p>
        </div>
      </section>

      {/* Indications */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Conditions & Indications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDICATIONS.map(({ name, icon }) => (
              <div key={name} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-lg shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Bariatric Procedures Available</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">All laparoscopic procedures. Surgeon recommendation is based on your BMI, comorbidities, eating behavior, GERD history, and personal goals.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCEDURES.map((p) => (
              <div key={p.title} className={`rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow relative ${p.badge === 'Most Popular' || p.badge === 'Best for Diabetes' ? 'bg-primary/5 border-primary/20' : 'bg-white border-gray-200'}`}>
                {p.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${p.badge === 'Best for Diabetes' ? 'bg-blue-100 text-blue-700' : p.badge === 'Super Obesity' ? 'bg-orange-100 text-orange-700' : 'bg-primary/10 text-primary'}`}>{p.badge}</span>
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
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Bariatric Surgery Cost: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">U.S. figures from ASMBS (American Society for Metabolic and Bariatric Surgery, 2024) and FAIR Health. India and Türkiye from IFSO partner center rates (2025). All-inclusive: surgeon, anaesthesia, 2–3 night hospital stay, dietitian consultation.</p>
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
          <p className="text-xs text-gray-400 mt-4 text-center">All-inclusive pricing. Vitamin supplementation and post-op dietitian follow-up arranged separately. <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link></p>
        </div>
      </section>

      {/* Why India / Türkiye */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bariatric Surgery in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Saifee Mumbai, Vikram Bengaluru, Medanta, Rela Institute</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'India performs 100,000+ bariatric procedures annually — one of Asia\'s highest volumes with well-established IFSO-member programs',
                  'Saifee Hospital Mumbai — one of India\'s most experienced bariatric centers with dedicated bariatric ICU and multidisciplinary team',
                  'Apollo Bariatric Program — national network with dedicated weight management programs, pre-op dietitian assessment, and psychologist evaluation',
                  'Vikram Hospital Bengaluru — IFSO member; high-volume sleeve gastrectomy, bypass, and SADI-S with published outcomes data',
                  'Medanta Medicity — advanced bariatric program including revision surgery, SADI-S, and robotic-assisted bariatric for complex cases',
                  'All programs include: pre-op upper GI endoscopy, sleep study, cardiac clearance, dietitian, psychologist, and 3-week post-op teleconsult',
                  'Rela Institute, Chennai — NABH-accredited 450-bed multi-specialty hospital; MOU partner of Sultan GHC',
                  'Bariatric-specific vitamin and supplement packs (Indian equivalents of Celebrate or Bariatric Advantage) available at pharmacies',
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
                  <h3 className="text-lg font-semibold text-gray-900">Bariatric Surgery in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Medicana, Private Bariatric Clinics, Koç University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Türkiye is one of Europe\'s most popular bariatric destinations — particularly for sleeve gastrectomy and gastric bypass for European and Middle Eastern patients',
                  'Acibadem — JCI-accredited with dedicated bariatric units performing thousands of procedures annually across Istanbul, Ankara, and Izmir',
                  'Memorial Hospital Istanbul — comprehensive bariatric program with full pre-operative multidisciplinary team and post-operative nutrition support',
                  'Medicana International — high-volume sleeve gastrectomy center; all-inclusive packages covering hospital, hotel, transfers, and nutritionist follow-up',
                  'Turkish bariatric surgeons trained in Germany, France, and the U.S. — many IFSO Executive Council members',
                  'U.S. citizens visa-free for Türkiye; Turkish Airlines nonstop from 7 U.S. cities; all-inclusive 10–14 day packages widely available',
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

      {/* Safety disclaimer */}
      <section className="bg-amber-50 border-y border-amber-200 py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-start gap-4">
            <AlertCircle size={22} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-2">Bariatric Surgery — Commitment to Lifelong Change</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Bariatric surgery is a tool, not a cure. Long-term success requires permanent dietary changes, vitamin supplementation, regular follow-up, and lifestyle modification. Sultan GHC coordinates pre-operative psychological and nutritional assessment at all partner centers. Remote dietitian follow-up is arranged for 12 months post-surgery through Sultan GHC&apos;s post-care coordination program. All patients receive a full medical summary, discharge instructions, and a direct line to their surgical team before departing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Take the First Step Toward a Healthier Life</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Tell us your BMI, current weight, and health conditions. Our bariatric coordinator will assess your candidacy, recommend the right procedure, and provide a detailed cost estimate — free of charge, no commitment required.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Check My Candidacy — Free <ArrowRight size={15} />
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

      <PartnerHospitalsSection title="Internationally Accredited Bariatric Surgery Centers" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Bariatric Surgery Abroad</h2>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Transformation Starts Here</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your health details and goals. Our bariatric team will assess candidacy and provide a cost estimate — at no charge, no obligation.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Request Free Bariatric Assessment <ArrowRight size={15} />
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
