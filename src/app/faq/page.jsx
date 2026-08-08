'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Phone,
  HeartPulse,
  DollarSign,
  Plane,
  Shield,
  Stethoscope,
  Globe2,
  RefreshCw,
  Users,
  Clock,
  FileText,
  Star,
} from 'lucide-react'

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
// Structured for SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).
// Each answer is written to be self-contained and directly quotable by AI search tools.

const FAQ_CATEGORIES = [
  {
    id: 'about-sultan-ghc',
    icon: Shield,
    color: 'bg-blue-50 text-blue-600',
    label: 'About Sultan GHC',
    faqs: [
      {
        q: 'What is Sultan GHC and what do you do?',
        a: 'Sultan Global Health Care (Sultan GHC) is a United States-based medical tourism and global healthcare concierge company. We help American patients access high-quality, internationally accredited medical treatment in India and Turkey at a fraction of U.S. costs. We are not a hospital, clinic, or healthcare provider. We are a healthcare facilitator — meaning we evaluate your medical case, match you to the right hospital and specialist, coordinate your travel and accommodation, and support you throughout your entire treatment journey and recovery. We manage everything so you can focus entirely on getting better.',
      },
      {
        q: 'Where is Sultan GHC based?',
        a: 'Sultan GHC is based in the United States and serves American patients nationwide. Our phone number is +1-610-787-0713 and we can be reached at info@sultanghc.com. While our home base is in the U.S., we have in-country coordinators and partnerships with hospitals in India and Turkey who support patients on the ground throughout their treatment.',
      },
      {
        q: 'Who founded Sultan GHC?',
        a: 'Sultan GHC was founded by Dr. Nasar A. Sultan, MD, who serves as the company\'s Founder and Medical Director. Dr. Sultan established Sultan GHC with the conviction that millions of Americans deserve access to world-class medical care — regardless of their insurance status or financial means. Having witnessed both the extraordinary quality of internationally accredited hospitals in India and Turkey, and the devastating financial burden U.S. healthcare can place on families, Dr. Sultan built Sultan GHC as a trusted bridge between the two.',
      },
      {
        q: 'Is Sultan GHC a hospital or a healthcare provider?',
        a: 'No. Sultan GHC is not a hospital, not a clinic, and not a healthcare provider of any kind. We do not diagnose, treat, or provide medical care. We are a healthcare facilitation and concierge company. Our role is to evaluate your case, recommend accredited hospitals and qualified specialists, coordinate your logistics, and support you every step of the way — but the actual medical care is provided by internationally trained physicians at our partner hospitals in India and Turkey.',
      },
      {
        q: 'Which countries does Sultan GHC work with?',
        a: 'Sultan GHC currently facilitates treatment in two countries: India and Turkey. Both are globally recognized as leading medical tourism destinations. India is home to some of Asia\'s finest JCI-accredited hospitals in cities such as Delhi, Mumbai, Chennai, Bengaluru, and Hyderabad. Turkey — particularly Istanbul — is Europe\'s top medical tourism hub, with internationally accredited facilities operating to European Union standards. We chose these two destinations specifically because they offer the best combination of internationally accredited quality, specialist expertise, and genuine cost savings for U.S. patients.',
      },
      {
        q: 'How is Sultan GHC different from other medical tourism companies?',
        a: 'Sultan GHC is a U.S.-based concierge — not a foreign referral agency. This matters because you are dealing with a team that understands the American healthcare experience, speaks your language, and operates within a U.S. context. We provide a dedicated Case Manager as a single point of contact for your entire journey — before, during, and after treatment. We recommend only JCI-accredited hospitals and fellowship-trained specialists. We provide fully transparent cost estimates with no hidden fees. And we continue supporting you after you return home, coordinating follow-up care with providers near you.',
      },
    ],
  },
  {
    id: 'medical-tourism-basics',
    icon: Globe2,
    color: 'bg-violet-50 text-violet-600',
    label: 'Medical Tourism Basics',
    faqs: [
      {
        q: 'What is medical tourism?',
        a: 'Medical tourism refers to the practice of traveling to another country to receive medical, surgical, or dental treatment. Patients typically choose medical tourism to access lower-cost care, access treatments not available at home, bypass long waiting lists, or seek a second opinion from world-class specialists. Countries such as India, Turkey, Thailand, Mexico, and Germany are leading medical tourism destinations, each known for specific specialties. India and Turkey — Sultan GHC\'s focus destinations — are particularly popular with American patients seeking cardiac surgery, orthopedic procedures, cancer treatment, organ transplants, fertility treatment, and cosmetic procedures.',
      },
      {
        q: 'Is medical tourism safe?',
        a: 'Medical tourism is safe when you choose internationally accredited hospitals and work with a reputable facilitator. The key markers of safety in international healthcare are Joint Commission International (JCI) accreditation — the gold standard for hospital quality worldwide — and specialists with internationally recognized training and credentials. Sultan GHC only recommends JCI-accredited hospitals and fellowship-trained physicians. We conduct due diligence on every hospital and doctor in our network. We do not recommend any hospital we would not trust for our own family members.',
      },
      {
        q: 'What is JCI accreditation and why does it matter?',
        a: 'Joint Commission International (JCI) is the international arm of the Joint Commission — the same body that accredits hospitals in the United States. JCI accreditation is widely considered the gold standard for hospital quality and patient safety internationally. A JCI-accredited hospital has passed rigorous on-site evaluations covering clinical care standards, patient rights, infection control, medication safety, staff credentials, and facility management. Fewer than 1,100 hospitals worldwide hold JCI accreditation. All hospitals in the Sultan GHC network are JCI-accredited or hold equivalent internationally recognized certification.',
      },
      {
        q: 'Why do Americans travel abroad for medical treatment?',
        a: 'Americans seek treatment abroad for several key reasons. Cost is the most common: a procedure that costs $80,000–$120,000 in the United States may cost $8,000–$20,000 in India or Turkey — with equivalent or superior clinical outcomes. Lack of insurance or high deductibles is another driver, as are long waiting periods for elective or complex procedures. Some patients seek world-class specialists not available locally, or want a second opinion from internationally trained surgeons. Others find that international hospitals offer more personalized, attentive care and shorter hospital stays.',
      },
      {
        q: 'What types of treatments do patients seek abroad?',
        a: 'The most commonly sought treatments in international medical tourism include cardiac surgery (bypass, valve replacement, angioplasty), orthopedic procedures (hip replacement, knee replacement, spinal surgery), oncology (cancer diagnosis, chemotherapy, surgery, immunotherapy), organ transplantation (kidney, liver), fertility treatment (IVF), bariatric surgery (gastric sleeve, bypass), ophthalmology (LASIK, cataract surgery), dental procedures (implants, veneers, full-mouth restoration), cosmetic and reconstructive surgery, neurosurgery, and robotic minimally invasive surgery. Sultan GHC facilitates all 19 major medical specialties across its network.',
      },
    ],
  },
  {
    id: 'cost-savings',
    icon: DollarSign,
    color: 'bg-emerald-50 text-emerald-600',
    label: 'Costs & Savings',
    faqs: [
      {
        q: 'How much can I save on medical treatment in India or Turkey compared to the U.S.?',
        a: 'Patients typically save between 60% and 90% on major medical procedures compared to U.S. prices. For example, a cardiac bypass surgery that costs $130,000 in the U.S. may cost $7,000–$12,000 in India. A knee replacement that costs $35,000–$50,000 in the U.S. can be done for $4,000–$7,000 in India or Turkey. Spinal fusion surgery priced at $60,000–$150,000 in the U.S. may cost $6,000–$12,000 internationally. Even after accounting for flights, accommodation, and Sultan GHC\'s coordination services, the net savings are substantial — often $20,000–$100,000 or more on a single procedure.',
      },
      {
        q: 'Why is medical treatment so much cheaper in India and Turkey?',
        a: 'The cost difference is not due to lower quality care — it reflects differences in the cost of living, medical liability insurance, administrative overhead, pharmaceutical pricing, and hospital infrastructure costs. Indian and Turkish hospitals do not carry the massive administrative burden of U.S. hospitals. Doctor salaries, while competitive in local terms, are not inflated by the same forces as in the U.S. healthcare system. Medical liability insurance costs are a fraction of U.S. rates. Importantly, India and Turkey actively compete for medical tourists and invest heavily in maintaining internationally accredited facilities to attract patients from the U.S., UK, Middle East, and Europe.',
      },
      {
        q: 'Does Sultan GHC charge for its services?',
        a: 'Sultan GHC provides an initial free first medical opinion and cost estimate — with no obligation. Our facilitation services are covered through arrangements with our partner hospitals. There is no upfront fee for requesting your free evaluation. Once you decide to proceed with treatment, Sultan GHC will outline the complete cost structure transparently — including treatment costs, hospital fees, and our coordination services — before you commit to anything.',
      },
      {
        q: 'Are there hidden costs I should be aware of when seeking treatment abroad?',
        a: 'Sultan GHC is committed to full transparency. Your cost estimate will include surgical fees, specialist consultation, hospital stay, diagnostics, anesthesia, post-operative care, prescribed medications during your stay, and in-hospital support. Additional costs you should plan for separately include: international flights, accommodation outside the hospital, travel insurance, any visa fees, and incidentals. We will walk you through all of these before you commit so there are no surprises.',
      },
      {
        q: 'Will my U.S. health insurance cover treatment abroad?',
        a: 'Most U.S. health insurance plans do not cover elective procedures performed abroad. Some plans — particularly certain travel insurance add-ons, employer self-funded plans, and a small number of international health policies — may offer partial reimbursement. We recommend checking directly with your insurance provider before proceeding. Even without insurance coverage, the savings from international treatment are typically so significant that patients pay out of pocket and still spend far less than they would through U.S. insurance with copays, deductibles, and out-of-pocket maximums.',
      },
      {
        q: 'Can I use my HSA or FSA funds for medical treatment abroad?',
        a: 'Generally, yes. Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can typically be used for qualified medical expenses regardless of where the care is provided — including internationally, as long as the treatment is medically necessary. However, rules can vary depending on your specific plan. We recommend consulting a tax advisor or your HSA/FSA plan administrator before using these funds for international medical treatment.',
      },
    ],
  },
  {
    id: 'process',
    icon: RefreshCw,
    color: 'bg-amber-50 text-amber-600',
    label: 'The Process',
    faqs: [
      {
        q: 'How do I get started with Sultan GHC?',
        a: 'Getting started is straightforward. You submit your medical information through our online enquiry form at sultanghc.com/enquiry — sharing your diagnosis, current medical reports, scans, lab results, and any other relevant documents. Alternatively, you can email us at info@sultanghc.com, call +1-610-787-0713, or reach us via WhatsApp at +1-610-787-0713. Once we receive your information, our clinical team reviews your case and we provide a free first medical opinion, hospital recommendation, and cost estimate — typically within 24 hours. There is no obligation to proceed.',
      },
      {
        q: 'How long does the entire process take from enquiry to treatment?',
        a: 'The typical timeline from first enquiry to arriving at the hospital for treatment is 3–6 weeks, depending on the complexity of your case and your schedule. The initial medical evaluation and cost estimate are typically ready within 24–48 hours of submitting your reports. Once you decide to proceed, the hospital confirmation, specialist appointment booking, and travel arrangements typically take 2–4 weeks. Some urgent cases can be expedited significantly faster. Your Case Manager will give you a personalised timeline once your case has been assessed.',
      },
      {
        q: 'What happens after I submit my medical reports?',
        a: 'After you submit your reports, Sultan GHC\'s clinical team reviews your case within 24 hours. You then receive: (1) A written free first medical opinion assessing your diagnosis and recommended treatment path. (2) Recommended hospitals matched to your condition and preferred destination — with JCI accreditation details and specialist credentials. (3) A transparent, itemised cost estimate covering treatment, hospital stay, and support services. (4) An opportunity to ask questions before making any decision. If you decide to proceed, a dedicated Case Manager is assigned who manages everything from that point forward.',
      },
      {
        q: 'Do I need to speak the local language to receive treatment in India or Turkey?',
        a: 'No. In major hospitals in India, English is widely spoken — by doctors, specialist nurses, and hospital coordinators. Medical records, treatment consent forms, discharge summaries, and all clinical communication at our partner hospitals are conducted in English. In Turkey, major internationally accredited hospitals in Istanbul and other cities also provide English-language care. Sultan GHC additionally provides interpreter support at all partner hospitals and assigns an English-speaking coordinator who accompanies you during key consultations and procedures.',
      },
      {
        q: 'Can I bring a family member or companion with me?',
        a: 'Absolutely — and we strongly encourage it for major procedures. Bringing a trusted companion is beneficial both emotionally and practically. Sultan GHC helps arrange accommodation for companions near the hospital, assists with their travel planning, and ensures they are informed and involved throughout your care. Most partner hospitals have companion accommodation options within or adjacent to the hospital, and many include companion meals during your inpatient stay.',
      },
    ],
  },
  {
    id: 'hospitals-doctors',
    icon: Stethoscope,
    color: 'bg-cyan-50 text-cyan-600',
    label: 'Hospitals & Doctors',
    faqs: [
      {
        q: 'How do you choose which hospitals and doctors to partner with?',
        a: 'Sultan GHC partners only with hospitals that hold JCI accreditation or equivalent internationally recognized certification. We do not recommend hospitals based on commercial agreements alone — every recommendation is clinically vetted. We assess hospitals on the basis of: international accreditation status, specialist credentials and international training, surgical volumes and outcomes data for specific procedures, patient safety records, English-language capabilities, facilities and equipment standards, and feedback from previous patients. Our hospital network is reviewed on an ongoing basis.',
      },
      {
        q: 'Which hospitals are in the Sultan GHC network?',
        a: 'Our hospital network includes JCI-accredited institutions in India (Delhi NCR, Mumbai, Chennai, Bengaluru, Hyderabad) and Turkey (Istanbul, Ankara, Antalya). In India, we work with top-tier hospitals known for cardiac surgery, oncology, orthopedics, and neurosurgery. In Turkey, our network includes internationally accredited hospitals recognized for cardiac procedures, hair transplantation, dental surgery, bariatric surgery, and cosmetic procedures. Please contact us at info@sultanghc.com or visit our Hospitals pages for the current list of featured partner hospitals.',
      },
      {
        q: 'Can I choose my own doctor or hospital?',
        a: 'Yes. Sultan GHC presents you with multiple hospital and specialist options based on your condition, budget, and destination preference — and the final choice is always yours. We will share complete profiles for each recommended specialist, including their qualifications, international training, surgical volumes, and areas of subspecialty expertise. If you have a specific hospital or doctor in mind, we can also facilitate your care at that institution if it meets our accreditation standards.',
      },
      {
        q: 'How qualified are the doctors in India and Turkey?',
        a: 'Many specialist surgeons and physicians at our partner hospitals in India and Turkey hold postgraduate fellowships from institutions in the United States, United Kingdom, Germany, France, and Australia. Cardiac surgeons who trained at the Cleveland Clinic, orthopedic specialists with Royal College of Surgeons fellowship training, and oncologists with U.S. board certifications are commonly found in our network. Medical education at major Indian and Turkish medical universities is rigorously structured, and competitive specialist training programs attract the brightest candidates. The clinical standards at JCI-accredited hospitals in both countries are evaluated against the same benchmarks as leading U.S. hospitals.',
      },
      {
        q: 'What technology and equipment is available at partner hospitals?',
        a: 'Partner hospitals in our network are equipped with the same diagnostic and surgical technology used in leading U.S. hospitals. This includes robotic surgical systems (da Vinci), high-field MRI and 4D CT imaging, PET-CT scanners, CyberKnife and TrueBeam radiosurgery systems for oncology, TAVI systems for cardiac intervention, and modern ICU facilities. Major hospitals in India and Turkey import medical devices and pharmaceuticals from U.S. and European manufacturers — so the technology you receive abroad is often identical to what would be used in the United States.',
      },
    ],
  },
  {
    id: 'travel-visa-logistics',
    icon: Plane,
    color: 'bg-rose-50 text-rose-600',
    label: 'Travel, Visa & Logistics',
    faqs: [
      {
        q: 'Do I need a visa to travel to India or Turkey for medical treatment?',
        a: 'Yes, a visa is required for U.S. passport holders traveling to both India and Turkey for medical purposes. For India, you will need a Medical Visa (e-MED) — available online through the Indian government\'s e-Visa portal. The Medical Visa requires a letter from the accredited Indian hospital confirming your appointment, and Sultan GHC will help you obtain this. For Turkey, U.S. citizens can obtain a standard e-Visa online within minutes at evisa.gov.tr, which covers medical travel. Sultan GHC provides visa guidance, document preparation support, and invitation letters from partner hospitals as part of our patient coordination services.',
      },
      {
        q: 'How far is India or Turkey from the United States?',
        a: 'From the U.S. East Coast, Turkey (Istanbul) is approximately 10–11 hours by direct flight. From the U.S. West Coast, the journey is approximately 14–16 hours with one stop. India from the U.S. East Coast is approximately 14–16 hours with a typical connection; from the U.S. West Coast, nonstop flights to Delhi or Mumbai take approximately 15–17 hours. Major U.S. airlines and international carriers including Turkish Airlines, Air India, Emirates, Qatar Airways, and Etihad provide frequent services to both destinations.',
      },
      {
        q: 'What accommodation options are available near partner hospitals?',
        a: 'Sultan GHC assists in arranging accommodation near your treating hospital. Options typically include hospital guest houses (located within or adjacent to the hospital campus), partner hotels with hospital shuttle services, serviced apartments for longer recovery stays, and family accommodation units. We pre-vet all accommodation for comfort, proximity, cleanliness, and value. Special patient rates are negotiated on your behalf. For longer procedures requiring extended recovery, we can also help arrange medically monitored recovery facilities.',
      },
      {
        q: 'Who will receive me at the airport?',
        a: 'Sultan GHC arranges private airport pickup for all confirmed patients. A coordinator or driver from our ground team — or from the partner hospital — will meet you at the airport arrivals area with your name displayed, transfer you to your accommodation or hospital, and ensure your first moments in the country are smooth and stress-free. Local transport between your accommodation, hospital, diagnostic centers, and any other necessary locations is also coordinated throughout your stay.',
      },
      {
        q: 'What happens if I need emergency care while I am abroad?',
        a: 'Your Case Manager is available throughout your stay and can be reached by phone and WhatsApp at any time. If you are already admitted at a partner hospital, the hospital\'s emergency team is immediately on hand. If you are at your accommodation and require urgent care, your coordinator will arrange immediate transfer to the treating hospital. Sultan GHC strongly recommends purchasing comprehensive international travel insurance before departing — including medical evacuation coverage — and we can advise you on suitable providers.',
      },
    ],
  },
  {
    id: 'during-treatment',
    icon: HeartPulse,
    color: 'bg-blue-50 text-blue-600',
    label: 'During Your Treatment',
    faqs: [
      {
        q: 'What support will I have while I am receiving treatment abroad?',
        a: 'You will have a dedicated Case Manager available by phone and WhatsApp throughout your stay — before, during, and after your procedure. At the hospital, an English-speaking coordinator supports you during key consultations, pre-operative assessments, and discharge. Sultan GHC maintains regular contact with you and your companion during your inpatient stay. We also remain in contact with your family in the U.S. so they are kept informed of your progress. You are never alone at any point in this process.',
      },
      {
        q: 'What if my treatment plan changes after I arrive?',
        a: 'It is not uncommon for treatment plans to be refined after the treating specialist\'s in-person consultation and review of your diagnostics at the hospital. If the specialist recommends changes to the planned procedure — such as additional diagnostics, a modified surgical approach, or an extended hospital stay — your Case Manager will communicate this to you clearly and explain the implications for cost and timeline. Any significant changes to the agreed cost estimate will be discussed with you before any additional charges are incurred.',
      },
      {
        q: 'How are my medical records kept and who can access them?',
        a: 'Sultan GHC handles all medical records with strict confidentiality in accordance with applicable privacy standards. Your records are shared only with the treating hospital, specialist, and Sultan GHC\'s clinical team — with your explicit consent. Discharge summaries, operative notes, imaging, and lab results are compiled into a comprehensive medical file that is provided to you at discharge and, if requested, shared with your treating physician in the U.S. to ensure continuity of care upon your return.',
      },
      {
        q: 'What medications will I receive and are they safe?',
        a: 'Partner hospitals in India and Turkey use medications manufactured by internationally recognized pharmaceutical companies — including many U.S. and European brands. Generic versions of branded U.S. medications are commonly used and are equivalent in active ingredient and efficacy. If you have known medication allergies or are taking specific medications at home, please document these clearly in your medical report submission. Your treating team will review your current medications for interactions and adjust your protocol accordingly.',
      },
    ],
  },
  {
    id: 'post-treatment',
    icon: RefreshCw,
    color: 'bg-emerald-50 text-emerald-600',
    label: 'Post-Treatment & Follow-Up',
    faqs: [
      {
        q: 'What follow-up care is available after I return to the United States?',
        a: 'Sultan GHC coordinates ongoing post-treatment follow-up after you return home. This includes scheduled video consultation follow-ups with your treating specialist, forwarding your complete medical file and discharge summary to your U.S.-based physician for continuity of care, and assistance in identifying local specialists or rehabilitation providers near your home if needed. We remain your point of contact for any concerns, questions, or complications during your recovery — and are available by phone, email, or WhatsApp throughout.',
      },
      {
        q: 'How soon can I fly home after surgery?',
        a: 'The safe flying window depends entirely on the type of procedure. For minor procedures, most patients can fly home within 3–5 days. For major cardiac or orthopedic surgeries, 10–14 days of in-destination recovery is typically recommended before long-haul travel. Your treating surgeon will provide a specific clearance for travel as part of your discharge instructions. Sultan GHC will help plan your return travel based on your surgeon\'s guidance to ensure safety and comfort during the flight home.',
      },
      {
        q: 'What if I experience complications after returning to the U.S.?',
        a: 'In the event of a post-treatment complication after you return home, Sultan GHC is your first call. We will facilitate an urgent video consultation with your treating specialist abroad and help you access appropriate care locally if needed. We maintain your complete treatment records and can ensure any U.S.-based provider has everything they need to evaluate and treat your condition. Serious complications are rare at accredited hospitals, but Sultan GHC\'s follow-up support is specifically designed to give you confidence and a clear point of contact if any issue arises.',
      },
      {
        q: 'Will my U.S. doctor be able to continue treating me after I return?',
        a: 'Yes. Sultan GHC provides a comprehensive discharge package — including operative notes, pathology results, imaging on digital media (CD or USB), discharge summary, and medication instructions — that your U.S. physician can use to continue your care seamlessly. We strongly recommend informing your U.S.-based primary care physician of your treatment plans before you travel, and we are happy to provide any documentation they need to feel confident in coordinating your post-treatment care.',
      },
    ],
  },
  {
    id: 'safety-accreditation',
    icon: Star,
    color: 'bg-amber-50 text-amber-600',
    label: 'Safety & Accreditation',
    faqs: [
      {
        q: 'How do I know the hospitals are genuinely safe and high quality?',
        a: 'The primary benchmark for international hospital quality is JCI (Joint Commission International) accreditation. JCI conducts rigorous on-site evaluations — not self-assessments — covering over 1,000 measurable standards in clinical care, patient safety, infection control, staff credentials, and facility management. Achieving JCI accreditation requires sustained commitment across every department of the hospital. Sultan GHC only works with JCI-accredited hospitals. You can independently verify a hospital\'s JCI accreditation at the official JCI directory: www.jointcommissioninternational.org.',
      },
      {
        q: 'What if something goes wrong during my procedure?',
        a: 'All JCI-accredited hospitals in our network maintain full surgical safety protocols, ICU-level post-operative monitoring, and 24/7 specialist coverage. In the unlikely event of a complication during your procedure, the hospital\'s emergency and critical care teams respond immediately — the same as in any major U.S. hospital. Sultan GHC remains reachable for your family throughout and will advocate on your behalf with the hospital team. We strongly recommend comprehensive travel insurance including medical evacuation coverage before traveling.',
      },
      {
        q: 'Are generic medications used abroad as effective as brand-name U.S. medications?',
        a: 'Yes. Generic medications contain the same active ingredient at the same dosage and are required to meet equivalent bioavailability standards as their brand-name counterparts. India is one of the world\'s largest producers of generic pharmaceuticals and supplies many medications to the United States and European markets. The WHO has recognized the pharmaceutical manufacturing standards of major Indian suppliers. Many medications you receive during treatment abroad may in fact be manufactured by the same companies that supply U.S. hospitals.',
      },
      {
        q: 'What questions should I ask my Sultan GHC coordinator before committing?',
        a: 'We encourage every patient to ask as many questions as needed before making any decision. Key questions to cover include: Which specific hospital and surgeon are recommended for my condition? What is the surgeon\'s experience with this particular procedure? What is the hospital\'s JCI accreditation status? What is the all-inclusive cost and what exactly is included? What is the recommended length of stay? What follow-up protocol is in place? What happens if I need additional care? Is there an English-speaking coordinator available throughout my stay? Sultan GHC will answer all of these — and any others — before you commit to anything.',
      },
    ],
  },
]

// ─── FAQ Item Component ───────────────────────────────────────────────────────

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-start justify-between gap-4 px-6 py-5 text-left transition-colors ${
          isOpen ? 'bg-primary/5' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary' : 'text-gray-400'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-5 bg-white border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  const [openItems, setOpenItems] = useState({})
  const [activeCategory, setActiveCategory] = useState('about-sultan-ghc')

  const toggle = (catId, idx) => {
    const key = `${catId}-${idx}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const activeData = FAQ_CATEGORIES.find((c) => c.id === activeCategory)

  // JSON-LD schemas — pulled from all FAQs for maximum AEO coverage
  const allFaqs = FAQ_CATEGORIES.flatMap((c) => c.faqs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',           item: 'https://www.sultanghc.com' },
      { '@type': 'ListItem', position: 2, name: 'Why Sultan GHC', item: 'https://www.sultanghc.com/why-sultan-ghc' },
      { '@type': 'ListItem', position: 3, name: 'FAQs',           item: 'https://www.sultanghc.com/faq' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/why-sultan-ghc" className="hover:text-primary transition-colors">Why Sultan GHC</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Frequently Asked Questions</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Patient FAQ
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              Questions About Medical Tourism and Sultan GHC — Answered.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Whether you are just starting to explore international healthcare or are ready to
              take the next step, this guide answers the most important questions American
              patients ask us every day.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { icon: FileText, label: `${allFaqs.length} questions answered` },
              { icon: Clock,    label: 'Free first opinion in 24 hours' },
              { icon: Users,    label: 'Dedicated Case Manager for every patient' },
              { icon: Globe2,   label: 'India & Turkey specialist network' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon size={15} className="text-primary shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main FAQ Layout ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar — category nav */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
                Browse by Topic
              </p>
              <nav className="flex flex-col gap-1">
                {FAQ_CATEGORIES.map(({ id, icon: Icon, label, color, faqs }) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      activeCategory === id
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      activeCategory === id ? 'bg-white/20' : color
                    }`}>
                      <Icon size={14} className={activeCategory === id ? 'text-white' : ''} />
                    </div>
                    <span className="leading-snug">{label}</span>
                    <span className={`ml-auto text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                      activeCategory === id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {faqs.length}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Sidebar CTA */}
              <div className="mt-8 bg-[#EEF4FF] rounded-2xl p-5 border border-blue-100">
                <p className="text-sm font-semibold text-gray-900 mb-1">Can&#39;t find your answer?</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Speak directly with one of our Patient Care Coordinators — free, no obligation.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/enquiry"
                    className="flex items-center justify-center gap-2 bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Get Free Consultation
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href="https://wa.me/16107870713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-600 text-xs font-medium px-4 py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                  >
                    <MessageCircle size={12} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* FAQ content panel */}
          <div className="flex-1 min-w-0">
            {activeData && (
              <>
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${activeData.color}`}>
                    <activeData.icon size={18} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{activeData.label}</h2>
                    <p className="text-xs text-gray-400">{activeData.faqs.length} questions in this section</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {activeData.faqs.map((faq, idx) => (
                    <FaqItem
                      key={idx}
                      faq={faq}
                      isOpen={!!openItems[`${activeData.id}-${idx}`]}
                      onToggle={() => toggle(activeData.id, idx)}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Navigation between categories */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              {(() => {
                const currentIdx = FAQ_CATEGORIES.findIndex((c) => c.id === activeCategory)
                const prev = FAQ_CATEGORIES[currentIdx - 1]
                const next = FAQ_CATEGORIES[currentIdx + 1]
                return (
                  <>
                    <div>
                      {prev && (
                        <button
                          onClick={() => setActiveCategory(prev.id)}
                          className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                        >
                          <ChevronRight size={14} className="rotate-180" />
                          {prev.label}
                        </button>
                      )}
                    </div>
                    <div>
                      {next && (
                        <button
                          onClick={() => setActiveCategory(next.id)}
                          className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                        >
                          {next.label}
                          <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Explore Further</h2>
            <p className="text-gray-500 text-sm">Everything you need to make a confident, informed decision.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/how-it-works',                   icon: RefreshCw,    label: 'How the Process Works' },
              { href: '/international-patient-services',  icon: Users,        label: 'International Patient Services' },
              { href: '/treatments',                     icon: Stethoscope,  label: 'All Treatments We Facilitate' },
              { href: '/about',                          icon: Shield,       label: 'About Sultan GHC' },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-primary hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors leading-snug">{label}</span>
                <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
            Submit your medical reports and receive a free specialist opinion, hospital
            recommendation, and cost estimate — within 24 hours. No commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free Medical Evaluation
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+16107870713"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Phone size={16} />
              +1-610-787-0713
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-5">
            Free first opinion &middot; No obligation &middot; Response within 24 hours
          </p>
        </div>
      </section>
    </>
  )
}
