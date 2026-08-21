import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle, Shield, Users, Star
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
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bariatric Surgery Abroad | Sleeve, Bypass, SADI-S | India & Türkiye | Sultan GHC',
    description: 'Sleeve gastrectomy, gastric bypass, and revision bariatric surgery — $4,000–$9,000 vs $15,000–$45,000 U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery' }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Bariatric & Metabolic Surgery', item: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Bariatric & Metabolic Surgery Abroad — India and Türkiye',
  description: 'Sleeve gastrectomy, gastric bypass, mini gastric bypass, SADI-S, and revision bariatric surgery for U.S. patients at accredited bariatric centers in India and Türkiye, coordinated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/bariatric-metabolic-surgery',
  about: { '@type': 'MedicalSpecialty', name: 'Bariatric Surgery', alternateName: ['Weight Loss Surgery', 'Metabolic Surgery', 'Obesity Surgery'], relevantSpecialty: 'General Surgery' }
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
        text: 'Sleeve gastrectomy in the U.S. costs $15,000–$35,000 for self-pay patients (ASMBS 2024 data, including surgeon, anesthesia, 2-night hospital stay, and follow-up). At accredited bariatric centers in India such as Apollo, Saifee Hospital Mumbai, and Vikram Hospital Bengaluru, sleeve gastrectomy costs $4,000–$7,000 — a saving of 75–85%. The procedure uses the same laparoscopic technique, 5-port approach, and stapling technology (Medtronic or Johnson and Johnson Ethicon) as U.S. bariatric programs.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does gastric bypass surgery cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roux-en-Y gastric bypass (RYGB) in the U.S. costs $20,000–$45,000 for self-pay patients. In India: $5,000–$9,000 — a saving of 75–80%. Mini gastric bypass (MGB / one-anastomosis gastric bypass / OAGB) costs $4,500–$7,500 in India. Both RYGB and MGB are available at Apollo, Fortis, and Medanta bariatric programs. Türkiye: $5,000–$9,000 for RYGB.'
      }
    },
    {
      '@type': 'Question',
      name: 'Am I a candidate for bariatric surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard bariatric surgery candidacy criteria (ASMBS / IFSO guidelines): BMI 40+ (any comorbidities), or BMI 35–39.9 with at least one obesity-related comorbidity (type 2 diabetes, hypertension, sleep apnea, NAFLD, joint disease). Some programs also accept BMI 30–34.9 with poorly controlled type 2 diabetes. Sultan GHC provides a free pre-screening questionnaire and connects you with a bariatric surgeon for evaluation — no commitment required.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is bariatric surgery safe in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sultan GHC partners exclusively with IFSO (International Federation for the Surgery of Obesity and Metabolic Disorders) member surgeons and accredited bariatric programs. India\'s leading bariatric centers perform 10,000+ bariatric procedures annually with 30-day complication rates (anastomotic leak, DVT, PE) comparable to published U.S. MBSAQIP (Metabolic and Bariatric Surgery Accreditation and Quality Improvement Program) data. All partner centers have ICU support, dedicated bariatric dietitians, and psychological evaluation protocols.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sleeve gastrectomy and gastric bypass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sleeve gastrectomy removes approximately 80% of the stomach, creating a tube (sleeve) — simpler procedure, no intestinal rerouting, lower risk, excellent weight loss (60–70% EWL). Gastric bypass (RYGB) creates a small stomach pouch AND reroutes the small intestine — greater metabolic benefit for type 2 diabetes, better long-term weight loss (70–80% EWL), but higher surgical complexity. Mini gastric bypass (MGB/OAGB) is a simpler variant of bypass with one anastomosis — similar metabolic outcomes. Sultan GHC\'s bariatric surgeons recommend the best procedure for each individual based on BMI, comorbidities, eating behavior, and GERD history.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for bariatric surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bariatric surgery patients need 10–14 days in India: 1–2 days pre-operative workup (blood panel, sleep study, cardiac clearance, dietitian assessment), surgery day (2–3 hours), 2–3 nights hospital stay post-surgery, 5–7 days recovery in nearby accommodation before flying. Sultan GHC arranges a bariatric-diet-compatible meal plan and accommodation near the hospital. All follow-up (3-week, 3-month, 6-month, annual) can be managed remotely with Sultan GHC coordination.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is revision bariatric surgery available in India for failed sleeve gastrectomy or gastric band?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Revision bariatric surgery — sleeve-to-bypass conversion (for GERD, inadequate weight loss, or weight regain), band removal and conversion to sleeve or bypass, and SADI-S (Single Anastomosis Duodeno-Ileal Bypass with Sleeve) for super-obesity — is available at Apollo, Fortis, and Medanta bariatric centers. Revision surgery requires more detailed pre-operative assessment including upper GI endoscopy and barium swallow. India revision bariatric cost: $5,500–$10,000 vs $15,000–$50,000 U.S.'
      }
    },
  ]
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
    badge: 'Most Popular'
  },
  {
    title: 'Roux-en-Y Gastric Bypass (RYGB)',
    desc: 'A small stomach pouch (15–30 mL) is created and connected directly to the mid-jejunum, bypassing 100–150 cm of small intestine. Superior metabolic outcome for type 2 diabetes — remission rate 80–85% at 1 year. Average EWL: 70–80%. Gold standard for GERD with obesity, failed sleeve, and patients with severe metabolic disease.',
    badge: 'Best for Diabetes'
  },
  {
    title: 'Mini Gastric Bypass (MGB / OAGB)',
    desc: 'One-anastomosis gastric bypass — a long narrow gastric tube connected to a loop of jejunum at a single anastomosis. Simpler than RYGB, fewer complications, metabolic outcomes comparable for T2DM. Increasingly popular globally. Available at Apollo, Medanta, and Vikram Hospital bariatric programs. Average EWL: 65–75%.',
    badge: null
  },
  {
    title: 'SADI-S (Single Anastomosis Duodeno-Ileal Bypass)',
    desc: 'Sleeve gastrectomy combined with a long-loop duodeno-ileal bypass — the most powerful bariatric-metabolic procedure for super-obesity (BMI 50+) and severe metabolic disease. Produces the greatest EWL (80–90%) and highest T2DM remission rates. Requires careful nutritional monitoring long-term. Available at select high-volume partner centres.',
    badge: 'Super Obesity'
  },
  {
    title: 'Revision Bariatric Surgery',
    desc: 'Conversion of sleeve to gastric bypass (for GERD, inadequate weight loss, or weight regain), band removal and conversion to sleeve or bypass, sleeve re-do, and SADI-S conversion. Requires pre-operative upper GI endoscopy and barium study. Performed by high-volume revision bariatric surgeons at Apollo, Fortis, and Medanta.',
    badge: null
  },
  {
    title: 'Endoscopic Sleeve Gastroplasty (ESG)',
    desc: 'Incisionless endoscopic procedure that sutures the stomach from inside using an endoscopic suturing device (Apollo OverStitch) — reduces stomach volume by 70% without surgery. For BMI 30–40, or as a bridge to surgery. EWL: 40–50% at 1 year. No incisions, no hospital stay overnight. Available at select Apollo and Fortis endoscopy units.',
    badge: null
  },
  {
    title: 'Intragastric Balloon (IGB)',
    desc: 'A silicone balloon filled with saline is placed endoscopically into the stomach for 6 months, reducing appetite and capacity. For BMI 27–40 or pre-operative weight loss before bariatric surgery. EWL: 30–40%. Removed endoscopically at 6 months. Obalon (swallowable) and Orbera (saline-filled) balloons available at partner centers.',
    badge: null
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
    a: 'Sleeve gastrectomy in the U.S.: $15,000–$35,000. India: $4,000–$7,000 — saving 75–85%. Same laparoscopic technique, Medtronic or Ethicon stapling, and post-op dietitian care as U.S. programs.'
  },
  {
    q: 'How much does gastric bypass cost in India?',
    a: 'Gastric bypass (RYGB) in the U.S.: $20,000–$45,000. India: $5,000–$9,000. Mini gastric bypass (MGB/OAGB): $4,500–$7,500 India. Both procedures at Apollo, Fortis, and Medanta bariatric programs.'
  },
  {
    q: 'Am I a candidate for bariatric surgery?',
    a: 'Standard criteria: BMI 40+ (any comorbidities) or BMI 35–39.9 with at least one obesity-related comorbidity (T2DM, hypertension, sleep apnea). Some programs accept BMI 30–34.9 with poorly controlled T2DM. Sultan GHC provides a free pre-screening questionnaire to assess candidacy.'
  },
  {
    q: 'Is bariatric surgery safe in India?',
    a: 'Sultan GHC partners with IFSO-member surgeons only. Partner centers perform 10,000+ bariatric procedures annually with complication rates comparable to published U.S. MBSAQIP data. All centers have ICU, bariatric dietitians, and psychological evaluation protocols.'
  },
  {
    q: 'What is the difference between sleeve gastrectomy and gastric bypass?',
    a: 'Sleeve removes 80% of stomach, no intestinal rerouting — simpler, excellent for most patients (60–70% EWL). Gastric bypass reroutes intestine — greater metabolic benefit for T2DM (80–85% remission), better long-term EWL (70–80%), but more complex. Sultan GHC surgeons recommend the right procedure per individual profile.'
  },
  {
    q: 'How long do I need to stay in India for bariatric surgery?',
    a: '10–14 days total: 1–2 days pre-op workup, surgery day, 2–3 nights in hospital, 5–7 days recovery. All follow-up (3-week, 3-month, 6-month, annual) managed remotely with Sultan GHC coordination.'
  },
  {
    q: 'Is revision bariatric surgery available in India?',
    a: 'Yes. Sleeve-to-bypass conversion, band removal to sleeve or bypass, SADI-S conversion — all available at Apollo, Fortis, and Medanta. Revision bariatric cost: $5,500–$10,000 India vs $15,000–$50,000 U.S.'
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
