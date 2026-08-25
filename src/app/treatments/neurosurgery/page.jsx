import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  DollarSign, Shield, Users, Zap
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Neurosurgery Abroad | Brain & Spine Surgery India & Türkiye | Sultan GHC',
  description:
    'Access world-class neurosurgery — brain tumor removal, craniotomy, cerebral aneurysm clipping, Gamma Knife radiosurgery, DBS, and minimally invasive spine surgery — in India and Türkiye at 80–90% lower cost than U.S. prices. Sultan GHC connects American patients with JCI-accredited neurosurgery centers.',
  keywords: [
    'neurosurgery abroad',
    'brain tumor surgery India',
    'brain surgery cost India vs USA',
    'craniotomy cost India',
    'aneurysm clipping India Türkiye',
    'Gamma Knife radiosurgery India cost',
    'minimally invasive spine surgery India',
    'pituitary tumor surgery Türkiye',
    'affordable brain surgery for Americans',
    'deep brain stimulation surgery India',
    'medical tourism neurosurgery',
    'JCI neurosurgery hospital India Türkiye',
    'Sultan GHC neurosurgery',
    'AVM embolization India cost',
  ],
  openGraph: {
    title: 'Neurosurgery in India & Türkiye — 80–90% Less Than U.S. Costs | Sultan GHC',
    description:
      'Brain tumor surgery, aneurysm clipping, Gamma Knife, and spine surgery at JCI-accredited neurosurgery centers in India and Türkiye. Verified cost data. Free consultation.',
    url: 'https://www.sultanghc.com/treatments/neurosurgery',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurosurgery Abroad | Brain Surgery India & Türkiye | Sultan GHC',
    description:
      'Brain tumor removal, aneurysm surgery, Gamma Knife, spine surgery — 80–90% less than U.S. costs at JCI hospitals.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/neurosurgery' }
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments',   item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Neurosurgery', item: 'https://www.sultanghc.com/treatments/neurosurgery' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Neurosurgery Abroad — Brain and Spine Surgery in India and Türkiye',
  description:
    'Comprehensive neurosurgery services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/neurosurgery',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Neurosurgery',
    alternateName: ['Brain Surgery', 'Neurological Surgery', 'Spine Neurosurgery'],
    relevantSpecialty: 'Neurosurgery'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does brain tumor surgery (craniotomy) cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brain tumor surgery (craniotomy) in the U.S. typically costs $100,000–$300,000 including hospital, surgeon, and ICU fees. At a JCI-accredited neurosurgery center in India, the same procedure costs $8,000–$18,000 — a saving of over 90%. Türkiye offers craniotomy for $12,000–$25,000. Sultan GHC provides a personalised cost estimate within 24 hours based on your MRI reports and surgical plan, at no charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'How safe is brain surgery in India and Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neurosurgery safety is determined by surgeon experience, hospital infrastructure, and ICU capability — not geography. Our partner JCI-accredited hospitals in India (Apollo, Fortis, Medanta) and Türkiye (Acibadem, Memorial) have dedicated neurosurgery units with intraoperative MRI (iMRI), neuronavigation systems, neurophysiology monitoring, and Level-1 NeuroICUs. Neurosurgeons at these centers perform 500–1,500 cranial and spine operations annually and hold international qualifications including FRCS (Neurosurgery), American board training, and EANS (European Association of Neurosurgical Societies) fellowships.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Gamma Knife radiosurgery and is it available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gamma Knife radiosurgery (stereotactic radiosurgery) is a non-invasive procedure that delivers highly focused radiation beams to destroy brain tumors, arteriovenous malformations (AVMs), or metastatic lesions — without a surgical incision. It is available at select Apollo and Fortis partner hospitals in India and at Acibadem and Memorial Hospital Istanbul in Türkiye. Cost in the U.S. is $20,000–$50,000. India costs $4,000–$10,000. Türkiye costs $6,000–$14,000.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay in India after brain surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most craniotomy patients require 14–21 days in-country. This includes 2–3 days of pre-surgical evaluation (MRI review, anesthesia assessment, blood work), 1–2 days pre-surgery admission, 2–4 days in NeuroICU, 5–7 days in the general neurosurgery ward, and a final surgical review before flying clearance. Minimally invasive spine procedures may allow discharge in 5–10 days. Sultan GHC\'s Case Managers plan your full itinerary and discharge schedule.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can Sultan GHC arrange a second neurosurgical opinion before I commit to surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and it is strongly recommended for brain surgery. Sultan GHC arranges a complimentary remote second opinion from a senior neurosurgeon within 24–48 hours. Upload your MRI with contrast, CT scans, biopsy reports (if available), and current medications. The neurosurgeon will review your case and provide a written recommendation including surgical approach, implant choices, and recovery expectations. There is no cost and no obligation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are neurosurgeons in India and Türkiye as experienced as U.S. neurosurgeons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many neurosurgeons at our partner JCI hospitals trained at or did fellowships at institutions including Johns Hopkins, Cleveland Clinic, Mayo Clinic, Karolinska Institute, and UK NHS neurosurgery centers. They hold FRCS (Neurosurgery), MCh (Neurosurgery), or DM Neurosurgery credentials and operate within JCIA-accredited hospital systems with the same international clinical protocols used in U.S. academic medical centers. Volume is also high — surgeons perform 400–1,500 neurosurgical cases annually.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'Brain Tumor (Glioma, Meningioma, Metastasis)', icon: '🧠' },
  { name: 'Cerebral Aneurysm',                            icon: '🩸' },
  { name: 'Arteriovenous Malformation (AVM)',             icon: '🔗' },
  { name: 'Pituitary Tumor / Adenoma',                    icon: '🔬' },
  { name: 'Hydrocephalus',                                icon: '💧' },
  { name: 'Chiari Malformation',                          icon: '🦴' },
  { name: 'Trigeminal Neuralgia',                         icon: '⚡' },
  { name: 'Herniated Disc (Cervical & Lumbar)',           icon: '🦷' },
  { name: 'Spinal Cord Compression',                      icon: '🔩' },
  { name: 'Spinal Stenosis',                              icon: '📐' },
  { name: "Parkinson's Disease (DBS candidacy)",          icon: '🤲' },
  { name: 'Epilepsy (Surgical candidacy)',                icon: '⚙️' },
]

const TREATMENTS = [
  {
    title: 'Craniotomy — Brain Tumor Removal',
    desc: 'Open and minimally invasive craniotomy for the surgical resection of gliomas, meningiomas, metastatic brain tumors, and other intracranial lesions — performed with intraoperative MRI (iMRI) and neuronavigation at select partner hospitals.'
  },
  {
    title: 'Gamma Knife & CyberKnife Radiosurgery',
    desc: 'Non-invasive stereotactic radiosurgery delivering focused radiation to brain tumors, AVMs, trigeminal neuralgia, and acoustic neuromas — without a surgical incision. No general anesthesia. Day procedure in most cases.'
  },
  {
    title: 'Cerebral Aneurysm — Clipping & Coiling',
    desc: 'Both microsurgical clipping (open craniotomy) and endovascular coiling (minimally invasive, catheter-based) are available for unruptured and ruptured cerebral aneurysms — matched to aneurysm anatomy and patient risk profile.'
  },
  {
    title: 'Endoscopic Pituitary Surgery (Transsphenoidal)',
    desc: 'Minimally invasive endoscopic transsphenoidal surgery to remove pituitary adenomas through the nasal passage — no external incision, shorter hospital stay (2–4 days), and faster recovery than traditional open craniotomy.'
  },
  {
    title: 'AVM Embolization & Surgical Resection',
    desc: 'Arteriovenous malformation (AVM) management combining endovascular embolization, microsurgical resection, and/or stereotactic radiosurgery — determined by AVM grade (Spetzler-Martin) and patient risk factors.'
  },
  {
    title: 'VP Shunt Surgery (Hydrocephalus)',
    desc: 'Ventriculoperitoneal (VP) shunt implantation for the treatment of hydrocephalus — both programmable valve shunts and endoscopic third ventriculostomy (ETV) are available as indicated.'
  },
  {
    title: 'Minimally Invasive Spine Neurosurgery (MISS)',
    desc: 'Microdiscectomy, laminectomy, foraminotomy, and spinal fusion using minimally invasive techniques — smaller incisions, reduced blood loss, shorter hospital stays, and faster return to activity compared to open spine surgery.'
  },
  {
    title: 'Deep Brain Stimulation (DBS) — Surgical Implantation',
    desc: 'Surgical implantation of Medtronic or Abbott DBS electrode systems for Parkinson\'s disease, essential tremor, and dystonia — performed by neurosurgeons and movement disorder neurologists working as an integrated team. Post-surgical programming included.'
  },
  {
    title: 'Microvascular Decompression (MVD)',
    desc: 'Microsurgical decompression of cranial nerves — the standard surgical treatment for trigeminal neuralgia (TN), hemifacial spasm, and glossopharyngeal neuralgia. High success rate for appropriately selected candidates.'
  },
  {
    title: 'Epilepsy Surgery',
    desc: 'Surgical resection of epileptic foci for drug-resistant focal epilepsy — including temporal lobectomy, lesionectomy, corpus callosotomy, and SEEG-guided resective surgery following thorough pre-surgical evaluation.'
  },
]

const COST_COMPARISON = [
  { procedure: 'Craniotomy (Brain Tumor Removal)',         us: '$100,000–$300,000', india: '$8,000–$18,000',   turkey: '$12,000–$25,000' },
  { procedure: 'Endoscopic Pituitary Surgery',             us: '$50,000–$120,000',  india: '$6,000–$15,000',   turkey: '$9,000–$20,000' },
  { procedure: 'Cerebral Aneurysm Clipping',               us: '$60,000–$150,000',  india: '$8,000–$18,000',   turkey: '$10,000–$22,000' },
  { procedure: 'Cerebral Aneurysm Coiling (endovascular)', us: '$40,000–$100,000',  india: '$6,000–$14,000',   turkey: '$8,000–$18,000' },
  { procedure: 'Gamma Knife Radiosurgery',                 us: '$20,000–$50,000',   india: '$4,000–$10,000',   turkey: '$6,000–$14,000' },
  { procedure: 'AVM Embolization',                         us: '$40,000–$100,000',  india: '$7,000–$15,000',   turkey: '$9,000–$20,000' },
  { procedure: 'VP Shunt (Hydrocephalus)',                 us: '$30,000–$80,000',   india: '$4,000–$9,000',    turkey: '$6,000–$12,000' },
  { procedure: 'MISS — Microdiscectomy / Laminectomy',     us: '$50,000–$120,000',  india: '$5,000–$12,000',   turkey: '$7,000–$16,000' },
  { procedure: 'Deep Brain Stimulation (DBS)',             us: '$80,000–$150,000',  india: '$15,000–$28,000',  turkey: '$20,000–$35,000' },
  { procedure: 'Microvascular Decompression (MVD)',        us: '$30,000–$80,000',   india: '$5,000–$12,000',   turkey: '$7,000–$15,000' },
]

const FAQS = [
  {
    q: 'How much does brain tumor surgery (craniotomy) cost in India compared to the U.S.?',
    a: 'Craniotomy in the U.S. typically costs $100,000–$300,000. At a JCI-accredited hospital in India, the same procedure costs $8,000–$18,000 — a saving of over 90%. Türkiye costs $12,000–$25,000. Sultan GHC provides a personalised estimate within 24 hours based on your MRI and surgical plan, at no charge.'
  },
  {
    q: 'How safe is brain surgery in India and Türkiye?',
    a: 'Safety is determined by surgeon experience, hospital infrastructure, and ICU capability — not location. Our partner JCI hospitals have intraoperative MRI (iMRI), neuronavigation, neurophysiology monitoring, and Level-1 NeuroICUs. Neurosurgeons perform 500–1,500 cranial and spine operations annually and hold international qualifications including FRCS (Neurosurgery) and EANS fellowships.'
  },
  {
    q: 'What is Gamma Knife radiosurgery and is it available in India?',
    a: 'Gamma Knife is a non-invasive procedure that delivers focused radiation to destroy brain tumors or AVMs without a surgical incision. Available at Apollo and Fortis partner hospitals in India, and at Acibadem and Memorial Hospital Istanbul. India cost: $4,000–$10,000 vs $20,000–$50,000 in the U.S.'
  },
  {
    q: 'How long will I need to stay in India after brain surgery?',
    a: 'Most craniotomy patients need 14–21 days in-country: 2–3 days pre-surgical evaluation, 1–2 days pre-op admission, 2–4 days NeuroICU, 5–7 days general ward, then a final surgical review before flying clearance. Minimally invasive spine procedures may allow discharge in 5–10 days.'
  },
  {
    q: 'Can Sultan GHC arrange a second neurosurgical opinion before surgery?',
    a: 'Yes — and it is strongly recommended for brain surgery. Sultan GHC arranges a complimentary remote second opinion from a senior neurosurgeon within 24–48 hours. Upload your MRI with contrast, CT scans, biopsy reports, and current medications. The neurosurgeon provides a written recommendation including surgical approach, implant choices, and recovery expectations. No cost, no obligation.'
  },
  {
    q: 'Are neurosurgeons in India and Türkiye as experienced as U.S. neurosurgeons?',
    a: 'Many of our partner neurosurgeons trained at Johns Hopkins, Cleveland Clinic, Mayo Clinic, Karolinska Institute, and UK NHS neurosurgery centers. They hold FRCS (Neurosurgery) or MCh Neurosurgery credentials and work in JCIA-accredited hospitals with the same international clinical protocols. Volume is high — 400–1,500 neurosurgical cases per surgeon per year.'
  },
]

const RELATED_TREATMENTS = [
  { name: 'Neurology',                              href: '/treatments/neurology',                        desc: 'Medical management of stroke, Parkinson\'s, epilepsy, MS, and movement disorders' },
  { name: 'Oncology & Cancer Care',                 href: '/treatments/oncology',                         desc: 'Brain tumor oncology, radiation therapy, and chemotherapy — for medical management of neuro-oncology cases' },
  { name: 'Spine & Sports Injury',                  href: '/treatments/spine-sports-injury',              desc: 'Orthopaedic approach to cervical/lumbar disc disease, scoliosis, and sports-related spinal injury' },
  { name: 'Robotic & Minimally Invasive Surgery',   href: '/treatments/robotic-minimally-invasive',       desc: 'Robotic-assisted spine surgery and minimally invasive neurosurgical techniques' },
  { name: 'Cardiology & Cardiac Surgery',           href: '/treatments/cardiology',                       desc: 'For carotid artery disease and cerebrovascular conditions requiring vascular intervention' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

export default function NeurosurgeryPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Neurosurgery</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Neurosurgery — Brain & Spine
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Brain & Spine Surgery in{' '}
                <span className="text-primary">India & Türkiye</span> — Up to 90% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Neurosurgery requires the highest level of surgical precision, infrastructure, and post-operative care. Sultan GHC partners exclusively with JCI-accredited hospitals where internationally trained neurosurgeons perform hundreds of cranial and spine procedures each year — at a fraction of American hospital costs.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'JCI-Accredited Neurosurgery Centers' },
                  { icon: Zap,          text: 'Intraoperative MRI & Neuronavigation' },
                  { icon: Shield,       text: 'Level-1 NeuroICU at All Partner Hospitals' },
                  { icon: Users,        text: 'International Case Management Team' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={15} className="text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md"
                >
                  Upload MRI & Get Free Surgical Opinion <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm"
                >
                  <MessageCircle size={16} className="text-green-500" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="neurosurgery-brain-spine-surgery-india-turkey-us-patients.jpg"
                width={840}
                height={630}
                aspectRatio="4/3"
                label="Neurosurgery at a JCI-accredited partner hospital — Sultan GHC"
                aiPrompt="A neurosurgeon and surgical team performing a brain procedure in a modern operating room with neuronavigation screens, sterile surgical field, and high-tech microscope. Soft blue and white lighting. Clean, precise, professional atmosphere. Photorealistic, 4K quality, no text overlays."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Neurology callout ── */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Neurosurgery vs Neurology:</strong> Neurosurgeons perform operative procedures on the brain, spine, and peripheral nerves. If you are seeking non-surgical medical management of neurological conditions such as Parkinson{'’'}s, MS, epilepsy, or stroke recovery, visit our{' '}
              <Link href="/treatments/neurology" className="text-primary font-semibold hover:underline">
                Neurology page →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Neurosurgical Conditions We Coordinate Care For
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Our partner hospitals manage the full spectrum of brain, spine, and peripheral nerve surgical conditions — from common herniated discs to complex brain tumor resections.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONDITIONS.map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 bg-[#F4F8FF] border border-[#dce8ff] rounded-xl px-4 py-3"
              >
                <span className="text-xl shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Procedures ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Neurosurgery Procedures Available
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From minimally invasive spine surgery to complex open craniotomy — partner hospitals deliver every neurosurgical procedure with international-standard protocols, implants, and post-operative monitoring.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {TREATMENTS.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity size={15} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">{t.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-11">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Have MRI or CT scans? Submit them for a free surgical opinion.
            </p>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Upload Reports & Get Free Surgical Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Neurosurgery Cost Comparison: USA vs India vs Türkiye
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              All figures represent approximate self-pay costs. U.S. figures sourced from FAIR Health Consumer, CMS Hospital Price Transparency data, and published hospital pricing. India and Türkiye figures from JCI-accredited partner hospital published rates (2025).
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Procedure</th>
                  <th className="text-center px-6 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />
                      USA — Self-Pay
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />
                      India
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary rounded-tr-2xl">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" />
                      Türkiye
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.procedure}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{row.us}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.india}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Costs are indicative for self-pay patients. Actual costs vary by tumor grade, surgical complexity, ICU days, and implant selection.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">
              See full India cost savings →
            </Link>
            {' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">
              Türkiye cost savings →
            </Link>
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India',   value: '85–92%', sub: 'vs U.S. self-pay neurosurgery' },
              { label: 'Average Saving in Türkiye',  value: '75–88%', sub: 'vs U.S. self-pay neurosurgery' },
              { label: 'Free Surgical Opinion',     value: '24–48 hrs', sub: 'submit MRI, get written review' },
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

      {/* ── Why India / Türkiye ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* India */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Neurosurgery in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Medanta, Rela Institute, AIIMS-affiliated centers</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Intraoperative MRI (iMRI) suites at Apollo Hospitals Chennai and Medanta Gurugram',
                  'Neuronavigation systems (BrainLAB, Stryker) for precise tumor margin identification',
                  'Gamma Knife Icon and Leksell systems available at select Apollo and Fortis centers',
                  'SEEG (Stereo-EEG) guided epilepsy surgery — available in India since 2019',
                  'Endoscopic pituitary surgery with neuroendoscopy units led by fellowship-trained surgeons',
                  'Neurosurgeons with MCh / FRCS credentials and training at UK NHS, Cleveland Clinic, and Mayo Clinic',
                  'Rela Institute, Chennai — NABH-accredited multi-organ specialty hospital; 450 beds; advanced neuro-critical care',
                  'India Medical e-Visa processed in 3–5 business days — valid for up to 6 months',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/india" className="text-xs text-primary font-semibold hover:underline">India Medical Visa →</Link>
                <Link href="/cost-savings/india" className="text-xs text-primary font-semibold hover:underline">Cost Savings in India →</Link>
                <Link href="/destinations/india" className="text-xs text-primary font-semibold hover:underline">Destination Guide →</Link>
              </div>
            </div>

            {/* Türkiye */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Neurosurgery in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koc University Hospital, Medicana</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem Altunizade hospital houses one of the most advanced neurosurgery units in Europe',
                  'CyberKnife and Gamma Knife radiosurgery available for non-operative brain tumor patients',
                  'Memorial Hospital Istanbul performs 1,200+ cranial and spine neurosurgical procedures annually',
                  'Endoscopic and minimally invasive spine surgery (MISS) with same-day discharge protocols',
                  'Neurosurgeons with training at German, UK, and U.S. academic neurosurgery programs',
                  'U.S. citizens visa-free for Türkiye — no application, no fee (effective January 2024)',
                  'Turkish Airlines nonstop from 7 U.S. cities — 10–11 hour flights to Istanbul',
                  'Medicana International, Istanbul — JCI-accredited since 2010; 191-bed purpose-built facility; full international patient support program',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/turkey" className="text-xs text-primary font-semibold hover:underline">Türkiye Entry Guide →</Link>
                <Link href="/cost-savings/turkey" className="text-xs text-primary font-semibold hover:underline">Cost Savings in Türkiye →</Link>
                <Link href="/destinations/turkey" className="text-xs text-primary font-semibold hover:underline">Destination Guide →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Surgical Safety callout ── */}
      <section className="bg-white py-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-amber-900 mb-1">A Note on Neurosurgical Risk</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Brain and spine surgery carries inherent risk in any country. Sultan GHC does not guarantee surgical outcomes. Our role is to match you with experienced, credentialed surgeons at accredited institutions, help you understand your options, coordinate logistics, and support you through every step of your journey. We strongly encourage a second surgical opinion before any neurosurgical procedure. All treatment decisions are made by you and your surgical team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Get a Free Neurosurgical Second Opinion
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Upload your MRI with contrast, CT scans, biopsy reports, or clinical notes. A senior neurosurgeon from our network will review your case and provide a written recommendation within 24–48 hours — at no cost, no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              Upload Reports & Get Free Opinion <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+16107870713"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              Call +1-610-787-0713
            </a>
          </div>
          <p className="text-white/60 text-xs mt-6">
            <Link href="/how-it-works" className="underline hover:text-white">See how our process works →</Link>
          </p>
        </div>
      </section>

      {/* ── Related Treatments ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Treatment Specialties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED_TREATMENTS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl p-5 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                    {t.name}
                  </h3>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline"
            >
              View All 19 Treatment Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PartnerHospitalsSection title="Internationally Accredited Neurosurgery Centers" />

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions — Neurosurgery Abroad
            </h2>
            <p className="text-gray-500 text-sm">
              Sourced from real patient questions handled by Sultan GHC&apos;s medical and patient care team.
            </p>
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
            Have a question not listed here?{' '}
            <Link href="/faq" className="text-primary font-semibold hover:underline">Visit our full FAQ →</Link>
            {' '}or{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">contact our Patient Care team</Link>.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Ready to Explore Neurosurgery Abroad?
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Upload your MRI with contrast, CT scans, or surgical referral letter. Our medical team connects you with a senior neurosurgeon from our JCI-accredited network within 24–48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Request Free Surgical Opinion <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-100 transition-colors"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
