import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, Star, Info
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'IVF Abroad in India & Türkiye | Cost, Success Rates & How It Works | Sultan GHC',
  description:
    'IVF in India costs $2,000–$4,000 per cycle vs $15,000–$30,000 in the U.S. — a saving of 85–90%. Sultan GHC connects American patients with JCI-accredited IVF centers offering IVF, ICSI, PGT-A, PGT-M, egg freezing, donor eggs, FET, and ERA. Verified success rates, transparent costs, full care coordination.',
  keywords: [
    'IVF in India cost',
    'IVF abroad for Americans',
    'IVF India vs USA cost',
    'ICSI treatment India cost',
    'IVF Türkiye cost',
    'PGT-A genetic testing India cost',
    'egg freezing India cost',
    'donor egg IVF India',
    'FET frozen embryo transfer India',
    'ERA endometrial receptivity India',
    'IVF success rate India',
    'fertility treatment abroad Americans',
    'affordable IVF USA patients India Türkiye',
    'Sultan GHC IVF fertility',
    'IVF medical tourism India',
    'PCOS infertility treatment India',
    'male infertility IVF India',
    'low AMH IVF India donor eggs',
  ],
  openGraph: {
    title: 'IVF & Fertility Treatment in India & Türkiye | 85% Less Than U.S. Costs | Sultan GHC',
    description:
      'IVF in India: $2,000–$4,000/cycle vs $15,000–$30,000 in the U.S. ICSI, PGT-A, donor eggs, egg freezing, ERA — JCI-accredited fertility centers. Full journey coordination by Sultan GHC.',
    url: 'https://www.sultanghc.com/treatments/fertility-ivf',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVF Abroad | India & Türkiye | $2K–$4K per Cycle | Sultan GHC',
    description: 'IVF in India costs $2,000–$4,000 vs $15,000–$30,000 in the U.S. ICSI, PGT-A, donor eggs, egg freezing. Full coordination by Sultan GHC.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/fertility-ivf' }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Fertility & IVF', item: 'https://www.sultanghc.com/treatments/fertility-ivf' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'IVF & Fertility Treatment Abroad — India and Türkiye',
  description: 'Comprehensive IVF, ICSI, PGT-A, donor egg, egg freezing, and fertility preservation for U.S. patients at JCI-accredited IVF centers in India and Türkiye, coordinated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/fertility-ivf',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Reproductive Medicine',
    alternateName: ['IVF', 'In Vitro Fertilization', 'Assisted Reproductive Technology', 'ART'],
    relevantSpecialty: 'Reproductive Medicine'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does IVF cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single IVF cycle in the U.S. costs $15,000–$30,000 including medications (RESOLVE: The National Infertility Association, 2024 data). In India at JCI-accredited fertility centers such as Nova IVF, Cloudnine, Apollo Fertility, and Milann, a single IVF cycle costs $2,000–$4,000 including egg retrieval, embryo culture, and fresh embryo transfer — a saving of 80–87%. ICSI (Intracytoplasmic Sperm Injection) adds approximately $300–$600. Medications (FSH gonadotrophins) cost 60–75% less in India than in the U.S. A couple requiring three IVF cycles in India would pay approximately the same as one cycle in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the IVF success rate in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IVF success rates in India vary by age, diagnosis, and center. Leading JCI-accredited fertility centers in India report clinical pregnancy rates per fresh embryo transfer of approximately 40–55% for women under 35, 35–45% for women 35–37, 25–35% for women 38–40, and 15–25% for women over 40 using own eggs — broadly comparable to U.S. national averages reported by the CDC NASS (National ART Surveillance System). For women using donor eggs, success rates are 55–70% per transfer regardless of recipient age. Sultan GHC requests verified outcome data from partner centers and shares it transparently before you commit to a center.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is ICSI and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ICSI (Intracytoplasmic Sperm Injection) is a form of IVF where a single sperm is injected directly into each egg — used for male factor infertility (low count, poor motility, or morphology issues), previous fertilization failure, or as a standard practice in many IVF cycles. ICSI in the U.S. adds $1,500–$3,000 to IVF cost. In India, ICSI adds approximately $300–$600. Combined ICSI-IVF in India costs $2,500–$4,500 vs $18,000–$35,000 in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is PGT-A (Preimplantation Genetic Testing) and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PGT-A (Preimplantation Genetic Testing for Aneuploidy, formerly called PGS) screens embryos for chromosomal abnormalities before transfer — recommended for women over 35, recurrent implantation failure, recurrent pregnancy loss, or severe male factor. PGT-A in the U.S. costs $3,000–$6,000 for up to 8 embryos (genetic laboratory fee only, excluding IVF cycle). In India: $800–$2,000 for up to 8 embryos. PGT-M (for monogenic diseases such as cystic fibrosis, BRCA, sickle cell, thalassemia) is also available at select Indian genetic laboratories — cost $1,500–$4,000 India vs $5,000–$12,000 U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use donor eggs for IVF in India? How does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Donor egg IVF in India is legal under the Assisted Reproductive Technology (Regulation) Act 2021 (ART Act). Donors are anonymous young women who have undergone genetic screening, AMH testing, and infectious disease testing at the IVF center. Donor egg IVF in India costs $3,500–$6,500 (including donor egg retrieval, ICSI, and fresh transfer) vs $25,000–$50,000 in the U.S. — a saving of 85–90%. Success rates for donor egg IVF are 55–70% per transfer, regardless of recipient age. Sultan GHC works with ART Act-compliant fertility centers only.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I freeze my eggs in India? How much does egg freezing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elective egg freezing (social freezing) and medical egg freezing (fertility preservation before chemotherapy or surgery) are both available at partner IVF centers in India and Türkiye. Egg freezing in the U.S. costs $10,000–$20,000 including medications (ASRM data). In India: $1,500–$3,500 including all medications. Annual embryo/egg storage fee in India: $150–$300 vs $600–$1,500 in the U.S. Türkiye egg freezing: $2,000–$4,500.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is ERA (Endometrial Receptivity Analysis) and is it available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ERA (Endometrial Receptivity Analysis) is a genomic test of the endometrial lining that identifies the personalized window of implantation — used for women with recurrent implantation failure (RIF) to time the embryo transfer to the exact receptive window. ERA in the U.S. costs $800–$1,200 (test only). In India: $200–$500. ERA is available at Milann, Nova IVF, and Cloudnine partner centers. It is recommended for women who have had 2+ failed embryo transfers with good-quality embryos.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does IVF take? How long do I need to stay in India for a full IVF cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard fresh IVF cycle (stimulation → egg retrieval → embryo culture → fresh transfer) takes 14–20 days of physical presence in India. This includes: Days 1–5 for baseline scans and medication start, Days 8–12 for monitoring ultrasounds, Day 14–16 for egg retrieval under sedation, Day 19–21 for embryo transfer. A frozen embryo transfer (FET) cycle for previously frozen embryos requires only 5–8 days in India. Many patients combine IVF with a gynaecological procedure (e.g., hysteroscopy) in the same stay — Sultan GHC coordinates both.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is IVF with donor sperm available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Donor sperm IVF and IUI are legally available in India under the ART Act 2021 for heterosexual married couples. Sperm donors at ART Act-compliant banks undergo full genetic, infectious disease, and psychological screening. Donor sperm IUI in India costs $300–$800 per cycle. Donor sperm IVF costs $2,500–$4,000 plus donor sperm fee ($300–$600). Single women and same-sex couples are not permitted to use ART services in India under current law — Sultan GHC provides full legal guidance on who qualifies before any planning begins.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is IVF a good option for PCOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PCOS (Polycystic Ovarian Syndrome) is one of the most common causes of infertility treated with IVF. Women with PCOS typically produce a higher number of eggs per stimulation cycle, making IVF particularly effective — though careful stimulation protocols (antagonist, low-dose, or Lupron trigger) are used to minimize OHSS (Ovarian Hyperstimulation Syndrome) risk. India\'s IVF centers have extensive experience managing PCOS patients. Many PCOS cases respond first to ovulation induction (letrozole, clomiphene) or laparoscopic ovarian drilling — Sultan GHC\'s fertility specialists guide patients through the least invasive pathway first.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const INDICATIONS = [
  { name: 'PCOS (Polycystic Ovarian Syndrome)',             icon: '🟡' },
  { name: 'Endometriosis-Related Infertility',              icon: '🩸' },
  { name: 'Diminished Ovarian Reserve (Low AMH)',           icon: '📊' },
  { name: 'Blocked or Damaged Fallopian Tubes',             icon: '🔗' },
  { name: 'Unexplained Infertility',                        icon: '❓' },
  { name: 'Male Factor (Low Count / Motility / Morphology)', icon: '🔬' },
  { name: 'Azoospermia (Absent Sperm)',                     icon: '🧬' },
  { name: 'Recurrent Implantation Failure (RIF)',           icon: '🔄' },
  { name: 'Recurrent Pregnancy Loss (RPL)',                 icon: '💛' },
  { name: 'Genetic Disease Carrier (BRCA, CF, Thalassemia)', icon: '🧫' },
  { name: 'Age-Related Infertility (35–45+)',               icon: '⏱️' },
  { name: 'Premature Ovarian Insufficiency (POI)',          icon: '⚕️'  },
]

const PROCEDURES = [
  {
    title: 'IVF — In Vitro Fertilisation',
    desc: 'Standard IVF involves ovarian stimulation with injectable gonadotrophins (FSH), egg retrieval under IV sedation, fertilisation in the laboratory, 3 or 5-day embryo culture to blastocyst stage, and fresh or frozen embryo transfer. The most established ART treatment globally. Blastocyst culture (Day 5) is used at all partner centers — improves selection of the best embryo for transfer.',
    highlight: true
  },
  {
    title: 'ICSI — Intracytoplasmic Sperm Injection',
    desc: 'A single sperm is injected directly into each mature egg using a fine glass needle under high magnification. Standard practice for male factor infertility, prior fertilisation failure, or very few eggs retrieved. Used in combination with standard IVF and available at all partner centers. Adds $300–$600 to IVF cost in India.',
    highlight: false
  },
  {
    title: 'FET — Frozen Embryo Transfer',
    desc: 'Transfer of previously cryopreserved (vitrified) embryos in a natural or medicated cycle. Increasingly preferred over fresh transfer — allows the endometrium to recover from stimulation, improves synchrony, and enables PGT-A results before transfer. FET cycle in India costs $500–$1,500 (not including embryo storage). Requires only 5–8 days in India.',
    highlight: false
  },
  {
    title: 'PGT-A — Preimplantation Genetic Testing for Aneuploidy',
    desc: 'Biopsy of 5–8 cells from Day 5 blastocyst embryos, followed by Next Generation Sequencing (NGS) to identify chromosomally normal (euploid) embryos for transfer. Reduces miscarriage risk and improves implantation rates — particularly for women over 35, recurrent miscarriage, or recurrent implantation failure. Cost India: $800–$2,000 for up to 8 embryos vs $3,000–$6,000 U.S.',
    highlight: false
  },
  {
    title: 'PGT-M — Preimplantation Genetic Testing for Monogenic Disorders',
    desc: 'Custom genetic probe designed for a specific single-gene disorder (cystic fibrosis, BRCA1/2, sickle cell disease, beta-thalassemia, Huntington\'s, spinal muscular atrophy). Requires a 6–8 week probe preparation phase before the IVF cycle. Available at select partner genetics laboratories in India. Cost: $1,500–$4,000 India vs $5,000–$12,000 U.S.',
    highlight: false
  },
  {
    title: 'Donor Egg IVF',
    desc: 'IVF using eggs from an anonymous, screened, and ART Act-compliant donor — recommended for diminished ovarian reserve, premature ovarian insufficiency, poor past IVF egg quality, or advanced age. Donor undergoes full genetic screening, AMH testing, and infectious disease panel. Success rate: 55–70% per transfer regardless of recipient age. India cost: $3,500–$6,500 vs $25,000–$50,000 U.S.',
    highlight: true
  },
  {
    title: 'Egg Freezing (Elective & Medical)',
    desc: 'Elective fertility preservation for women not yet ready to conceive, and medical fertility preservation before chemotherapy, radiation, or gynaecological surgery. Vitrification (flash-freezing) ensures high egg survival rates on thaw (80–90%). India cost: $1,500–$3,500 including all medications. Annual storage: $150–$300.',
    highlight: false
  },
  {
    title: 'IUI — Intrauterine Insemination',
    desc: 'Processed sperm is placed directly into the uterine cavity at the time of ovulation — with or without mild ovarian stimulation (Clomid, letrozole). First-line treatment for mild male factor, cervical mucus issues, or unexplained infertility in younger women. India cost: $200–$500 per cycle vs $1,500–$4,000 U.S.',
    highlight: false
  },
  {
    title: 'ERA — Endometrial Receptivity Analysis',
    desc: 'Genomic analysis of a timed endometrial biopsy to identify the personalised window of implantation — used for women with ≥2 failed embryo transfers with good-quality embryos. Shifts transfer timing to the exact receptive window identified for that individual. India cost: $200–$500 vs $800–$1,200 U.S.',
    highlight: false
  },
  {
    title: 'Surgical Sperm Retrieval (TESE / MicroTESE)',
    desc: 'For men with azoospermia (no sperm in ejaculate) — testicular sperm extraction (TESE) or microsurgical TESE (microTESE) under anaesthesia to retrieve sperm directly from testicular tissue for ICSI. India cost: $1,000–$3,000 vs $5,000–$15,000 U.S. Often combined with ICSI in the same IVF cycle.',
    highlight: false
  },
  {
    title: 'Hysteroscopy Before IVF',
    desc: 'Many fertility specialists recommend a hysteroscopy before IVF to assess and treat intrauterine pathology — polyps, fibroids, septum, adhesions — that could impair implantation. Hysteroscopy in India costs $600–$2,000 vs $3,000–$10,000 U.S. Sultan GHC can coordinate gynaecological hysteroscopy and the first IVF cycle in a single trip to India.',
    highlight: false
  },
  {
    title: 'Ovulation Induction (OI) & Cycle Monitoring',
    desc: 'For women with PCOS or irregular cycles — oral medications (letrozole, clomiphene) or low-dose injectable FSH to trigger ovulation, monitored via serial ultrasound and blood hormone levels. First-line before IUI or IVF. Can be initiated remotely with monitoring via local clinic in the U.S. and timed trip to India for IUI or egg retrieval.',
    highlight: false
  },
]

const COST_COMPARISON = [
  { procedure: 'IVF (1 fresh cycle, own eggs)',           us: '$15,000–$30,000', india: '$2,000–$4,000',  turkey: '$3,000–$6,000',  save: '~85%' },
  { procedure: 'ICSI (add-on to IVF)',                    us: '$1,500–$3,000',   india: '$300–$600',      turkey: '$400–$800',      save: '~80%' },
  { procedure: 'FET — Frozen Embryo Transfer',            us: '$5,000–$10,000',  india: '$500–$1,500',    turkey: '$800–$2,000',    save: '~85%' },
  { procedure: 'PGT-A (up to 8 embryos)',                 us: '$3,000–$6,000',   india: '$800–$2,000',    turkey: '$1,200–$2,800',  save: '~70%' },
  { procedure: 'PGT-M (single gene disease)',             us: '$5,000–$12,000',  india: '$1,500–$4,000',  turkey: '$2,500–$5,500',  save: '~72%' },
  { procedure: 'Donor Egg IVF (full cycle)',              us: '$25,000–$50,000', india: '$3,500–$6,500',  turkey: '$5,000–$9,000',  save: '~87%' },
  { procedure: 'Egg Freezing (elective)',                 us: '$10,000–$20,000', india: '$1,500–$3,500',  turkey: '$2,000–$4,500',  save: '~83%' },
  { procedure: 'IUI (per cycle)',                         us: '$1,500–$4,000',   india: '$200–$500',      turkey: '$350–$800',      save: '~87%' },
  { procedure: 'ERA (endometrial receptivity test)',      us: '$800–$1,200',     india: '$200–$500',      turkey: '$300–$700',      save: '~65%' },
  { procedure: 'MicroTESE (sperm retrieval)',             us: '$5,000–$15,000',  india: '$1,000–$3,000',  turkey: '$1,500–$4,500',  save: '~80%' },
  { procedure: 'Hysteroscopy (pre-IVF)',                  us: '$3,000–$10,000',  india: '$600–$2,000',    turkey: '$800–$2,500',    save: '~80%' },
  { procedure: 'IVF Medications (1 cycle, FSH etc.)',     us: '$4,000–$8,000',   india: '$800–$2,000',    turkey: '$1,200–$2,800',  save: '~75%' },
]

const IVF_STEPS = [
  { step: '01', title: 'Initial Consultation & Case Review', desc: 'Share your AMH, FSH, antral follicle count (AFC), semen analysis, and previous IVF records with Sultan GHC. Our fertility specialist reviews your case and recommends the most appropriate protocol and center — within 24–48 hours, free of charge.' },
  { step: '02', title: 'Pre-Cycle Workup (Remote + India)', desc: 'Baseline blood tests (AMH, FSH, LH, E2, prolactin, thyroid, infectious disease panel) can be done at your local lab in the U.S. Semen analysis and baseline ultrasound can be done locally or in India. Sultan GHC coordinates the timing with your menstrual cycle.' },
  { step: '03', title: 'Ovarian Stimulation (Days 1–12)', desc: 'Injectable FSH medications are self-administered daily at home or in India under the fertility nurse\'s guidance. Monitoring scans and blood tests are done every 2–3 days at the partner hospital. Stimulation typically lasts 10–14 days.' },
  { step: '04', title: 'Egg Retrieval (Day 14–16)', desc: 'A 20–30 minute procedure under IV sedation — a fine needle is guided via transvaginal ultrasound to retrieve mature eggs from follicles. No incision required. Most patients rest for 2–4 hours and return to hotel the same day.' },
  { step: '05', title: 'Fertilisation & Embryo Culture (Days 14–19)', desc: 'Eggs are fertilised with sperm via ICSI or standard IVF. Embryos are cultured for 3 or 5 days. Day 5 blastocyst culture allows better selection. PGT-A biopsy is done on Day 5 if planned.' },
  { step: '06', title: 'Embryo Transfer or Freeze', desc: 'Fresh transfer: a catheter places 1–2 embryos into the uterus on Day 19–21 (no anaesthesia required). Or embryos are cryopreserved (vitrified) for a future FET — allowing PGT-A results to arrive and endometrium to recover.' },
  { step: '07', title: 'Pregnancy Test & Follow-Up', desc: 'Blood hCG pregnancy test 12–14 days after transfer. Results shared remotely. Positive: early viability scan at 6–7 weeks. All follow-up ultrasounds and blood tests can be done with your OB/GYN in the U.S. Sultan GHC provides a full medical summary and telemedicine coordination.' },
]

const FAQS = [
  {
    q: 'How much does IVF cost in India compared to the U.S.?',
    a: 'IVF in the U.S.: $15,000–$30,000 per cycle including medications (RESOLVE 2024). India: $2,000–$4,000 all-in — saving 80–87%. Medications cost 60–75% less in India too. A couple needing 3 IVF cycles in India pays approximately the same as 1 cycle in the U.S.'
  },
  {
    q: 'What is the IVF success rate in India?',
    a: 'Leading JCI-accredited fertility centers in India report: ~40–55% clinical pregnancy rate per fresh transfer (under 35), ~35–45% (age 35–37), ~25–35% (age 38–40), ~15–25% (over 40 own eggs). Donor egg IVF: 55–70% per transfer regardless of recipient age. Broadly comparable to U.S. CDC NASS averages. Sultan GHC shares verified outcome data from partner centers before you commit.'
  },
  {
    q: 'How much does donor egg IVF cost in India?',
    a: 'Donor egg IVF in the U.S.: $25,000–$50,000. India: $3,500–$6,500 (including donor egg retrieval, ICSI, and fresh transfer) — saving 85–90%. Donors are anonymous, ART Act-compliant, genetically screened. Success rate: 55–70% per transfer.'
  },
  {
    q: 'What is PGT-A and how much does it cost in India?',
    a: 'PGT-A screens embryos for chromosomal abnormalities before transfer — recommended for women 35+, recurrent miscarriage, or recurrent implantation failure. India: $800–$2,000 for up to 8 embryos vs $3,000–$6,000 U.S. PGT-M for single gene diseases: $1,500–$4,000 India vs $5,000–$12,000 U.S.'
  },
  {
    q: 'Can I freeze my eggs in India?',
    a: 'Yes. Egg freezing in India: $1,500–$3,500 including all medications vs $10,000–$20,000 U.S. Annual storage: $150–$300 India vs $600–$1,500 U.S. Vitrification (flash-freezing) used at all partner centers — 80–90% egg survival on thaw.'
  },
  {
    q: 'How long do I need to stay in India for IVF?',
    a: 'Fresh IVF cycle: 14–20 days in India (stimulation → retrieval → transfer). FET (frozen embryo transfer): 5–8 days only. Many couples plan the stimulation phase at home and fly to India for the egg retrieval and transfer — Sultan GHC coordinates exact timing with your cycle.'
  },
  {
    q: 'Is IVF available for PCOS?',
    a: 'Yes — PCOS is one of the most commonly treated causes of infertility via IVF. India\'s centers have extensive PCOS protocol expertise (antagonist, low-dose, Lupron trigger) to minimize OHSS risk while maximizing egg yield. Many PCOS cases are first tried on ovulation induction (letrozole) or IUI before IVF.'
  },
  {
    q: 'What is ERA and is it available in India?',
    a: 'ERA (Endometrial Receptivity Analysis) identifies your personalized implantation window via endometrial biopsy + genomic analysis — used for ≥2 failed embryo transfers with good embryos. India: $200–$500 vs $800–$1,200 U.S. Available at Milann, Nova IVF, and Cloudnine centers.'
  },
  {
    q: 'Is commercial surrogacy available in India for U.S. patients?',
    a: 'No. India\'s Surrogacy (Regulation) Act 2021 restricts surrogacy to altruistic arrangements for Indian citizens (close relatives only). Commercial surrogacy and surrogacy for foreign nationals are not legally available in India. Sultan GHC does not facilitate surrogacy arrangements. Patients seeking gestational carrier services should consult U.S. fertility attorneys and U.S.-based surrogacy agencies.'
  },
  {
    q: 'Is donor sperm IVF or IUI available in India for married couples?',
    a: 'Yes — for heterosexual married couples under India\'s ART Act 2021. Donor sperm IUI: $300–$800 per cycle India. Donor sperm IVF: $2,500–$4,000 plus donor fee. Donors undergo full genetic and infectious disease screening at ART Act-compliant sperm banks. Single women and same-sex couples are not permitted under current law — Sultan GHC provides full legal guidance before any planning begins.'
  },
]

const RELATED = [
  { name: 'Obstetrics & Gynaecology',                href: '/treatments/obstetrics-gynaecology',            desc: 'Fibroids, endometriosis, uterine septum — pre-IVF surgical workup' },
  { name: 'Urology',                                 href: '/treatments/urology',                           desc: 'Male infertility — microTESE, varicocelectomy, and sperm retrieval' },
  { name: 'Oncology & Cancer Care',                  href: '/treatments/oncology',                          desc: 'Fertility preservation before chemotherapy or radiation' },
  { name: 'Robotic & Minimally Invasive Surgery',    href: '/treatments/robotic-minimally-invasive',        desc: 'Robotic myomectomy and gynaecological surgery before IVF' },
  { name: 'Cosmetic & Plastic Surgery',              href: '/treatments/cosmetic-hair-transplant-plastic-surgery', desc: 'Combined aesthetic and wellness treatments during India stay' },
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
