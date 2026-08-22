import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Leaf, Heart, Shield, Star, DollarSign,
  Activity, Clock, Users
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Ayurveda & Wellness Retreats Abroad | India | Sultan GHC',
  description:
    'Authentic Ayurveda, Panchakarma, yoga therapy, and holistic wellness programs in India — the birthplace of Ayurvedic medicine. Sultan GHC connects U.S. patients with Kerala\'s premier wellness retreats and NABH-accredited Ayurveda hospitals at a fraction of U.S. prices.',
  keywords: [
    'Ayurveda treatment India',
    'Panchakarma treatment India',
    'wellness retreat India Americans',
    'Ayurveda hospital Kerala',
    'holistic wellness India',
    'yoga therapy India',
    'medical wellness India',
    'Ayurveda for Americans',
    'Kerala Ayurveda retreat',
    'Panchakarma detox India',
    'Sultan GHC wellness',
    'alternative medicine India',
    'naturopathy India',
    'stress management retreat India',
    'Ayurveda cost USA vs India',
  ],
  openGraph: {
    title: 'Ayurveda & Wellness Retreats in India | Sultan GHC',
    description: 'Authentic Ayurveda and Panchakarma programs at Kerala\'s finest wellness hospitals — facilitated by Sultan GHC for U.S. patients.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayurveda & Wellness in India | Sultan GHC',
    description: 'Panchakarma, yoga therapy, and holistic healing in Kerala — guided by Sultan GHC.',
  },
  alternates: { canonical: 'https://www.sultanglobalhealthcare.com/treatments/wellness-ayurveda' },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sultanglobalhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanglobalhealthcare.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Wellness & Ayurveda', item: 'https://www.sultanglobalhealthcare.com/treatments/wellness-ayurveda' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalSpecialty',
  name: 'Ayurveda & Holistic Wellness',
  description: 'Traditional Indian system of medicine including Panchakarma detoxification, herbal therapy, yoga, and naturopathy for preventive health and chronic disease management.',
  relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Integrative Medicine' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Panchakarma and how long does a program take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Panchakarma is Ayurveda\'s five-step detoxification and rejuvenation program — involving Vamana (emesis), Virechana (purgation), Basti (medicated enemas), Nasya (nasal administration), and Raktamokshana (bloodletting/leech therapy). A standard program lasts 14–21 days and is preceded by 3–7 days of preparatory treatments (Poorvakarma). Programs are customized to your Prakriti (body constitution) after an initial physician consultation. In Kerala specifically, monsoon season (June–August) is considered ideal for Panchakarma due to open pores and optimal oil absorption.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Ayurveda treatment cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 14-day residential Panchakarma program at a premier NABH-accredited wellness hospital in Kerala costs $1,500–$4,000 all-inclusive (accommodation, meals, daily therapies, physician consultations, herbal medicines). Comparable programs in the U.S. or Europe — where they exist at all — cost $5,000–$15,000. Yoga and Ayurveda retreats in Rishikesh start from $800–$2,000 for 14 days. Sultan GHC provides a personalized wellness plan and cost estimate at no charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ayurveda evidence-based? Can it treat chronic conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ayurveda is a 5,000-year-old system of medicine recognized by the World Health Organization (WHO). A growing body of peer-reviewed research supports its applications for stress and anxiety reduction, metabolic syndrome, osteoarthritis, chronic lower back pain, digestive disorders (IBS, GERD), psoriasis, and post-cancer fatigue management. It is best used as a complementary approach alongside conventional medicine for chronic conditions, or as a preventive and rejuvenation system for healthy individuals. Sultan GHC coordinates with both Ayurvedic physicians and conventional specialists as needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which wellness conditions are best suited for Ayurveda in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conditions most commonly addressed through Ayurveda programs include: chronic stress and burnout, anxiety and insomnia, metabolic syndrome and obesity, type 2 diabetes management, osteoarthritis and chronic joint pain, psoriasis and skin disorders, digestive disorders (IBS, acid reflux), autoimmune conditions as a complement to conventional care, post-COVID fatigue and recovery, and general preventive health and rejuvenation (Rasayana therapy).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Ayurveda hospitals in India have Western medical oversight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leading NABH-accredited Ayurveda hospitals in Kerala integrate Ayurvedic treatment with modern medical oversight. They have MBBS physicians on staff, conduct pre-program health assessments (blood tests, blood pressure, ECG where appropriate), and maintain emergency medical protocols. Hospitals like KIMS Ayurveda, Kairali, and AyurVAID operate as regulated medical facilities — not simply spas or retreats — and are recognized by the Ministry of AYUSH, Government of India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Kerala for Ayurveda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Karkidakam (the Malayalam monsoon month, roughly mid-July to mid-August) is traditionally considered the best time for Panchakarma in Kerala — the humid air opens pores and enhances oil absorption. However, premier NABH-accredited wellness hospitals operate year-round. The dry season (November–February) is cooler and ideal for first-time visitors. Sultan GHC plans your itinerary around both your treatment schedule and travel preferences.',
      },
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const THERAPIES = [
  {
    name: 'Panchakarma Detox Program',
    duration: '14–21 days',
    desc: 'Complete five-step detoxification — Vamana, Virechana, Basti, Nasya, Raktamokshana — preceded by Poorvakarma (oil and steam therapies). Individualized to your Prakriti constitution. Best for deep detox, metabolic reset, and chronic condition management.',
  },
  {
    name: 'Shirodhara',
    duration: 'Single session or course',
    desc: 'Continuous warm medicated oil poured over the forehead (Ajna chakra). Deeply calming for the nervous system. Used for anxiety, insomnia, migraines, hypertension, and psychosomatic disorders.',
  },
  {
    name: 'Abhyanga (Full-Body Oil Massage)',
    duration: 'Daily therapy',
    desc: 'Synchronized two-therapist warm herbal oil massage following Marma points (energy centers). Promotes lymphatic drainage, joint lubrication, skin nourishment, and deep relaxation. Core daily therapy in any Panchakarma program.',
  },
  {
    name: 'Kizhi (Herbal Bolus Therapy)',
    duration: 'Daily therapy',
    desc: 'Heated pouches (boluses) filled with herbal powders, leaves, or rice — applied rhythmically to relieve musculoskeletal pain, stiffness, and inflammation. Particularly effective for arthritis, spondylitis, and sports injuries.',
  },
  {
    name: 'Rasayana (Rejuvenation Therapy)',
    duration: '14–28 days',
    desc: 'Anti-aging and immune-boosting program using specialized herbal formulations (Chyawanprash, Ashwagandha, Brahmi). Designed for post-illness recovery, longevity, cognitive health, and vitality restoration.',
  },
  {
    name: 'Yoga & Pranayama Therapy',
    duration: 'Program-based',
    desc: 'Therapeutic yoga — distinct from fitness yoga — tailored to medical conditions. Pranayama (breath control), meditation, and yogic lifestyle guidance. Available standalone in Rishikesh or integrated into Kerala wellness programs.',
  },
  {
    name: 'Naturopathy & Integrative Wellness',
    duration: '7–21 days',
    desc: 'Combining Ayurveda with naturopathy, hydrotherapy, mud therapy, and nutritional medicine. Particularly effective for metabolic syndrome, obesity, type 2 diabetes, and digestive disorders.',
  },
  {
    name: 'Stress & Burnout Recovery Program',
    duration: '10–14 days',
    desc: 'Curated combination of Shirodhara, Abhyanga, Yoga Nidra, meditation, and Sattvic diet. Designed for executives and professionals experiencing chronic stress, adrenal fatigue, and burnout syndrome.',
  },
]

const COST_COMPARISON = [
  { treatment: '14-Day Panchakarma (Residential)', usa: '$8,000–$15,000', india: '$1,500–$4,000' },
  { treatment: 'Shirodhara (per session)', usa: '$200–$400', india: '$25–$60' },
  { treatment: 'Abhyanga Full-Body Massage', usa: '$150–$300', india: '$20–$50' },
  { treatment: 'Yoga Therapy (7-Day Retreat)', usa: '$2,000–$5,000', india: '$400–$1,200' },
  { treatment: 'Naturopathy Program (14 days)', usa: '$5,000–$10,000', india: '$800–$2,500' },
  { treatment: 'Rasayana Program (21 days)', usa: 'Rarely available', india: '$2,000–$5,000' },
]

const FAQS = [
  {
    q: 'What is Panchakarma and how long does a program take?',
    a: 'Panchakarma is Ayurveda\'s five-step detoxification and rejuvenation program. A standard program lasts 14–21 days and is preceded by 3–7 days of preparatory treatments. Programs are customized to your body constitution after an initial physician consultation.',
  },
  {
    q: 'How much does Ayurveda treatment cost in India compared to the U.S.?',
    a: 'A 14-day residential Panchakarma program at a premier NABH-accredited wellness hospital in Kerala costs $1,500–$4,000 all-inclusive. Comparable programs in the U.S. or Europe cost $5,000–$15,000 where available. Sultan GHC provides a personalized wellness plan and cost estimate at no charge.',
  },
  {
    q: 'Is Ayurveda evidence-based? Can it treat chronic conditions?',
    a: 'Ayurveda is a 5,000-year-old system recognized by the WHO. Research supports its applications for stress, metabolic syndrome, osteoarthritis, chronic back pain, digestive disorders, and psoriasis. It is best used as a complementary approach alongside conventional medicine.',
  },
  {
    q: 'Which conditions are best suited for Ayurveda?',
    a: 'Chronic stress and burnout, anxiety and insomnia, metabolic syndrome, type 2 diabetes management, osteoarthritis, psoriasis, IBS, autoimmune conditions (complementary), post-COVID fatigue, and general preventive health and rejuvenation.',
  },
  {
    q: 'Do Ayurveda hospitals in India have Western medical oversight?',
    a: 'Leading NABH-accredited Ayurveda hospitals in Kerala have MBBS physicians on staff, conduct pre-program health assessments, and maintain emergency medical protocols. They operate as regulated medical facilities — not simply spas — recognized by India\'s Ministry of AYUSH.',
  },
  {
    q: 'What is the best time to visit Kerala for Ayurveda?',
    a: 'Karkidakam (monsoon season, mid-July to mid-August) is traditionally best for Panchakarma. However, premier NABH-accredited hospitals operate year-round. November–February (dry season) is cooler and ideal for first-time visitors.',
  },
]

const RELATED = [
  { name: 'Orthopedics', href: '/treatments/orthopedics', desc: 'Joint replacement and musculoskeletal care' },
  { name: 'Spine & Sports Injury', href: '/treatments/spine-sports-injury', desc: 'Spine care and sports rehabilitation' },
  { name: 'Gastroenterology', href: '/treatments/gastroenterology', desc: 'Digestive health and GI procedures' },
  { name: 'Neurology', href: '/treatments/neurology', desc: 'Neurological disorders and brain health' },
  { name: 'Obstetrics & Gynaecology', href: '/treatments/obstetrics-gynaecology', desc: 'Women\'s health and reproductive care' },
]

// ─── Image Placeholder ────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WellnessAyurvedaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#F0F7F0] border-b border-[#d4e8d4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600 font-medium">Wellness & Ayurveda</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3 py-1.5 rounded-full mb-4">
                Holistic Healing — India
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
                Ayurveda & Wellness Retreats in India
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                India is the birthplace of Ayurveda — a 5,000-year-old system of medicine now recognized
                by the WHO. From Kerala&apos;s NABH-accredited Panchakarma hospitals to Rishikesh&apos;s yoga
                therapy centers, Sultan GHC connects U.S. patients with authentic, medically supervised
                wellness programs at a fraction of Western prices.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-sm"
                >
                  <Phone size={15} />
                  Request a Wellness Plan
                </Link>
                <a
                  href="https://wa.me/15551234567"
                  className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-all"
                >
                  <MessageCircle size={15} />
                  WhatsApp a Wellness Coordinator
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                {[
                  { icon: DollarSign, text: '60–85% less than U.S. wellness programs' },
                  { icon: Leaf, text: 'NABH-accredited Ayurveda hospitals' },
                  { icon: Heart, text: 'WHO-recognized traditional medicine' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <Icon size={14} className="text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="ayurveda-panchakarma-kerala-india-wellness-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Ayurvedic Panchakarma treatment at a Kerala wellness hospital — Sultan GHC"
                aiPrompt="Serene professional medical photography: A trained Ayurvedic therapist performing Shirodhara (warm oil poured over forehead) on a relaxed Western patient lying on a traditional wooden therapy table in a clean, modern Ayurveda treatment room in Kerala, India. Warm golden lighting, green plants, natural wood elements, white linen. The setting is clinical yet calming — not a spa, but a real Ayurveda hospital. Photorealistic, Canon R5."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '5,000+', label: 'Years of Ayurvedic tradition', icon: Leaf },
              { value: '60–85%', label: 'Cost savings vs. Western programs', icon: DollarSign },
              { value: 'NABH', label: 'Accredited wellness hospitals only', icon: Shield },
              { value: '14–21', label: 'Days for a full Panchakarma program', icon: Clock },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500 leading-snug mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Treat ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Ayurveda & Wellness Programs
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
            Programs We Coordinate
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From medically supervised Panchakarma detox to yoga therapy, naturopathy, and stress recovery
            — Sultan GHC matches your health goals to the right program and center.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {THERAPIES.map((t) => (
            <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <Leaf size={18} className="text-emerald-600" />
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{t.duration}</p>
              <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">{t.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── India Section ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Ayurveda in India
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
                India — The Global Home of Ayurvedic Medicine
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Kerala, in southwest India, is the epicenter of authentic Ayurveda. Its humid climate,
                abundance of medicinal herbs, and unbroken lineage of Vaidya (Ayurvedic physician) families
                make it the world&apos;s most respected destination for genuine Panchakarma treatment.
                Kerala&apos;s NABH-accredited Ayurveda hospitals are regulated medical facilities — not spas —
                with qualified physicians, modern health assessment protocols, and standardized treatment quality.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Rishikesh, in the Himalayan foothills of Uttarakhand, is globally recognized as the
                &quot;Yoga Capital of the World.&quot; World-class yoga therapy centers and naturopathy retreats
                here attract patients from across the U.S. and Europe seeking stress recovery, breathwork
                training, and integrative wellness.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'NABH-accredited Ayurveda hospitals with qualified BAMS/MD (Ayurveda) physicians on staff',
                  'Pre-program health assessment including blood tests, blood pressure, and physician consultation',
                  'Kerala monsoon season (July–August) considered optimal for Panchakarma absorption',
                  'Rela Institute & Medical Centre, Chennai — Sultan GHC MOU partner with integrative medicine program',
                  'Medanta — The Medicity, Gurugram — Newsweek Top 250 hospital with integrative wellness and yoga center',
                  'Kairali Ayurvedic Health Village, Palakkad — government-recognized heritage wellness resort',
                  'AyurVAID Hospitals, Bangalore & Kerala — India\'s first NABH-accredited classical Ayurveda hospital',
                  'Ananda in the Himalayas, Rishikesh — internationally acclaimed destination spa with Ayurveda programs',
                  'India Medical e-Visa in 3–5 business days — valid for wellness stays up to 6 months',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all">
                  Plan My Wellness Journey to India
                  <ArrowRight size={16} />
                </Link>
                <Link href="/destinations/india" className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all">
                  Explore India as a Destination
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="kerala-ayurveda-hospital-india-wellness-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="NABH-accredited Ayurveda hospital in Kerala, India — Sultan GHC"
                aiPrompt="Serene professional photography: A beautiful NABH-accredited Ayurveda wellness hospital in Kerala, India. Lush green tropical garden, traditional Kerala architecture with sloped red-tiled roof, clean modern reception area visible through open doors. Ayurvedic herbal garden in the foreground. Warm evening light. Photorealistic, wide angle, no people required."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Wellness Cost Comparison: USA vs India
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              India pricing from NABH-accredited wellness hospitals and retreats (2025). U.S. pricing from published wellness resort rates and integrative medicine centers.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Program / Treatment</th>
                  <th className="text-center px-6 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />
                      United States
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-green-300 rounded-tr-2xl">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />
                      India
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.treatment} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.treatment}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{row.usa}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-semibold">{row.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why India / Türkiye Card Section ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ayurveda & Wellness in India</h3>
                  <p className="text-sm text-gray-500">Kairali, AyurVAID, Ananda, Rela Institute, Medanta</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Kerala — world epicenter of Panchakarma; government-certified vaidya physicians',
                  'AyurVAID Hospitals — India\'s first NABH-accredited classical Ayurveda hospital; evidence-based protocols',
                  'Ananda in the Himalayas, Rishikesh — internationally awarded destination for Ayurveda and yoga therapy',
                  'Rela Institute & Medical Centre, Chennai — integrative medicine with Ayurvedic support programs; Sultan GHC MOU partner',
                  'Medanta — The Medicity, Gurugram — Newsweek Top 250 hospital with integrative wellness and mind-body programs',
                  'Kairali Ayurvedic Health Village — heritage wellness resort in Palakkad; full Panchakarma residential programs',
                  'India Medical e-Visa in 3–5 business days — valid for wellness stays up to 6 months',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
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
                  <h3 className="text-lg font-semibold text-gray-900">Wellness & Thermal Spas in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Medicana, Koç University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Türkiye has over 1,500 natural thermal springs — the highest concentration in Europe',
                  'Pamukkale (UNESCO World Heritage Site) — travertine thermal pools with calcium-rich waters for skin and joint health',
                  'Acibadem Wellness — comprehensive preventive health check packages combined with Istanbul city experience',
                  'Medicana International, Istanbul — JCI-accredited since 2010; preventive health and medical wellness packages for international patients',
                  'Koç University Hospital, Istanbul — JCI-accredited academic hospital; preventive health screening and integrative care',
                  'Antalya and Bodrum coastal resorts with medical spa and thalassotherapy programs',
                  'U.S. citizens visa-free for Türkiye; Turkish Airlines nonstop from 7 U.S. cities',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
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

      {/* ── Partner Hospitals Slider ── */}
      <PartnerHospitalsSection />

      {/* ── Patient Journey ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Your Wellness Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
            How Sultan GHC Coordinates Your Ayurveda Trip
          </h2>
          <p className="text-gray-500 leading-relaxed">From your first inquiry to your return home — we handle every detail.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Wellness Consultation', desc: 'Tell us your health goals, current conditions, and travel preferences. We match you to the right program and center.' },
            { step: '02', title: 'Program Design', desc: 'Your assigned Wellness Coordinator curates a personalized program — program type, duration, center, and itinerary.' },
            { step: '03', title: 'Travel & Stay Coordination', desc: 'We arrange airport transfers, accommodation at or near the wellness center, and pre-program health assessments.' },
            { step: '04', title: 'In-Country Support', desc: 'Daily check-ins during your stay. Post-program follow-up with your Ayurvedic physician\'s recommendations.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span className="text-5xl font-bold text-gray-100 absolute top-4 right-5 select-none">{step}</span>
              <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Everything U.S. patients ask about Ayurveda and wellness in India.</p>
          </div>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Treatments ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Treatment Specialties</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {RELATED.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="bg-white border border-gray-100 rounded-2xl p-4 hover:border-primary/40 hover:shadow-sm transition-all group"
            >
              <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">{t.name}</p>
              <p className="text-xs text-gray-400 leading-snug">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 leading-snug">
            Ready to Begin Your Ayurveda Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us your health goals and we will design a personalized wellness program — program type,
            center, duration, and full itinerary. Free of charge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all shadow-sm"
            >
              Request a Free Wellness Plan
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/15551234567"
              className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
