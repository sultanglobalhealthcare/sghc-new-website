import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection"
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, ImageIcon, Star, Info,
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVF Abroad | India & Türkiye | $2K–$4K per Cycle | Sultan GHC',
    description: 'IVF in India costs $2,000–$4,000 vs $15,000–$30,000 in the U.S. ICSI, PGT-A, donor eggs, egg freezing. Full coordination by Sultan GHC.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/fertility-ivf' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Fertility & IVF', item: 'https://www.sultanghc.com/treatments/fertility-ivf' },
  ],
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
    relevantSpecialty: 'Reproductive Medicine',
  },
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
        text: 'A single IVF cycle in the U.S. costs $15,000–$30,000 including medications (RESOLVE: The National Infertility Association, 2024 data). In India at JCI-accredited fertility centers such as Nova IVF, Cloudnine, Apollo Fertility, and Milann, a single IVF cycle costs $2,000–$4,000 including egg retrieval, embryo culture, and fresh embryo transfer — a saving of 80–87%. ICSI (Intracytoplasmic Sperm Injection) adds approximately $300–$600. Medications (FSH gonadotrophins) cost 60–75% less in India than in the U.S. A couple requiring three IVF cycles in India would pay approximately the same as one cycle in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the IVF success rate in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IVF success rates in India vary by age, diagnosis, and center. Leading JCI-accredited fertility centers in India report clinical pregnancy rates per fresh embryo transfer of approximately 40–55% for women under 35, 35–45% for women 35–37, 25–35% for women 38–40, and 15–25% for women over 40 using own eggs — broadly comparable to U.S. national averages reported by the CDC NASS (National ART Surveillance System). For women using donor eggs, success rates are 55–70% per transfer regardless of recipient age. Sultan GHC requests verified outcome data from partner centers and shares it transparently before you commit to a center.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ICSI and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ICSI (Intracytoplasmic Sperm Injection) is a form of IVF where a single sperm is injected directly into each egg — used for male factor infertility (low count, poor motility, or morphology issues), previous fertilization failure, or as a standard practice in many IVF cycles. ICSI in the U.S. adds $1,500–$3,000 to IVF cost. In India, ICSI adds approximately $300–$600. Combined ICSI-IVF in India costs $2,500–$4,500 vs $18,000–$35,000 in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PGT-A (Preimplantation Genetic Testing) and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PGT-A (Preimplantation Genetic Testing for Aneuploidy, formerly called PGS) screens embryos for chromosomal abnormalities before transfer — recommended for women over 35, recurrent implantation failure, recurrent pregnancy loss, or severe male factor. PGT-A in the U.S. costs $3,000–$6,000 for up to 8 embryos (genetic laboratory fee only, excluding IVF cycle). In India: $800–$2,000 for up to 8 embryos. PGT-M (for monogenic diseases such as cystic fibrosis, BRCA, sickle cell, thalassemia) is also available at select Indian genetic laboratories — cost $1,500–$4,000 India vs $5,000–$12,000 U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use donor eggs for IVF in India? How does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Donor egg IVF in India is legal under the Assisted Reproductive Technology (Regulation) Act 2021 (ART Act). Donors are anonymous young women who have undergone genetic screening, AMH testing, and infectious disease testing at the IVF center. Donor egg IVF in India costs $3,500–$6,500 (including donor egg retrieval, ICSI, and fresh transfer) vs $25,000–$50,000 in the U.S. — a saving of 85–90%. Success rates for donor egg IVF are 55–70% per transfer, regardless of recipient age. Sultan GHC works with ART Act-compliant fertility centers only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I freeze my eggs in India? How much does egg freezing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elective egg freezing (social freezing) and medical egg freezing (fertility preservation before chemotherapy or surgery) are both available at partner IVF centers in India and Türkiye. Egg freezing in the U.S. costs $10,000–$20,000 including medications (ASRM data). In India: $1,500–$3,500 including all medications. Annual embryo/egg storage fee in India: $150–$300 vs $600–$1,500 in the U.S. Türkiye egg freezing: $2,000–$4,500.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ERA (Endometrial Receptivity Analysis) and is it available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ERA (Endometrial Receptivity Analysis) is a genomic test of the endometrial lining that identifies the personalized window of implantation — used for women with recurrent implantation failure (RIF) to time the embryo transfer to the exact receptive window. ERA in the U.S. costs $800–$1,200 (test only). In India: $200–$500. ERA is available at Milann, Nova IVF, and Cloudnine partner centers. It is recommended for women who have had 2+ failed embryo transfers with good-quality embryos.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does IVF take? How long do I need to stay in India for a full IVF cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard fresh IVF cycle (stimulation → egg retrieval → embryo culture → fresh transfer) takes 14–20 days of physical presence in India. This includes: Days 1–5 for baseline scans and medication start, Days 8–12 for monitoring ultrasounds, Day 14–16 for egg retrieval under sedation, Day 19–21 for embryo transfer. A frozen embryo transfer (FET) cycle for previously frozen embryos requires only 5–8 days in India. Many patients combine IVF with a gynaecological procedure (e.g., hysteroscopy) in the same stay — Sultan GHC coordinates both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is IVF with donor sperm available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Donor sperm IVF and IUI are legally available in India under the ART Act 2021 for heterosexual married couples. Sperm donors at ART Act-compliant banks undergo full genetic, infectious disease, and psychological screening. Donor sperm IUI in India costs $300–$800 per cycle. Donor sperm IVF costs $2,500–$4,000 plus donor sperm fee ($300–$600). Single women and same-sex couples are not permitted to use ART services in India under current law — Sultan GHC provides full legal guidance on who qualifies before any planning begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is IVF a good option for PCOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PCOS (Polycystic Ovarian Syndrome) is one of the most common causes of infertility treated with IVF. Women with PCOS typically produce a higher number of eggs per stimulation cycle, making IVF particularly effective — though careful stimulation protocols (antagonist, low-dose, or Lupron trigger) are used to minimize OHSS (Ovarian Hyperstimulation Syndrome) risk. India\'s IVF centers have extensive experience managing PCOS patients. Many PCOS cases respond first to ovulation induction (letrozole, clomiphene) or laparoscopic ovarian drilling — Sultan GHC\'s fertility specialists guide patients through the least invasive pathway first.',
      },
    },
  ],
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
    highlight: true,
  },
  {
    title: 'ICSI — Intracytoplasmic Sperm Injection',
    desc: 'A single sperm is injected directly into each mature egg using a fine glass needle under high magnification. Standard practice for male factor infertility, prior fertilisation failure, or very few eggs retrieved. Used in combination with standard IVF and available at all partner centers. Adds $300–$600 to IVF cost in India.',
    highlight: false,
  },
  {
    title: 'FET — Frozen Embryo Transfer',
    desc: 'Transfer of previously cryopreserved (vitrified) embryos in a natural or medicated cycle. Increasingly preferred over fresh transfer — allows the endometrium to recover from stimulation, improves synchrony, and enables PGT-A results before transfer. FET cycle in India costs $500–$1,500 (not including embryo storage). Requires only 5–8 days in India.',
    highlight: false,
  },
  {
    title: 'PGT-A — Preimplantation Genetic Testing for Aneuploidy',
    desc: 'Biopsy of 5–8 cells from Day 5 blastocyst embryos, followed by Next Generation Sequencing (NGS) to identify chromosomally normal (euploid) embryos for transfer. Reduces miscarriage risk and improves implantation rates — particularly for women over 35, recurrent miscarriage, or recurrent implantation failure. Cost India: $800–$2,000 for up to 8 embryos vs $3,000–$6,000 U.S.',
    highlight: false,
  },
  {
    title: 'PGT-M — Preimplantation Genetic Testing for Monogenic Disorders',
    desc: 'Custom genetic probe designed for a specific single-gene disorder (cystic fibrosis, BRCA1/2, sickle cell disease, beta-thalassemia, Huntington\'s, spinal muscular atrophy). Requires a 6–8 week probe preparation phase before the IVF cycle. Available at select partner genetics laboratories in India. Cost: $1,500–$4,000 India vs $5,000–$12,000 U.S.',
    highlight: false,
  },
  {
    title: 'Donor Egg IVF',
    desc: 'IVF using eggs from an anonymous, screened, and ART Act-compliant donor — recommended for diminished ovarian reserve, premature ovarian insufficiency, poor past IVF egg quality, or advanced age. Donor undergoes full genetic screening, AMH testing, and infectious disease panel. Success rate: 55–70% per transfer regardless of recipient age. India cost: $3,500–$6,500 vs $25,000–$50,000 U.S.',
    highlight: true,
  },
  {
    title: 'Egg Freezing (Elective & Medical)',
    desc: 'Elective fertility preservation for women not yet ready to conceive, and medical fertility preservation before chemotherapy, radiation, or gynaecological surgery. Vitrification (flash-freezing) ensures high egg survival rates on thaw (80–90%). India cost: $1,500–$3,500 including all medications. Annual storage: $150–$300.',
    highlight: false,
  },
  {
    title: 'IUI — Intrauterine Insemination',
    desc: 'Processed sperm is placed directly into the uterine cavity at the time of ovulation — with or without mild ovarian stimulation (Clomid, letrozole). First-line treatment for mild male factor, cervical mucus issues, or unexplained infertility in younger women. India cost: $200–$500 per cycle vs $1,500–$4,000 U.S.',
    highlight: false,
  },
  {
    title: 'ERA — Endometrial Receptivity Analysis',
    desc: 'Genomic analysis of a timed endometrial biopsy to identify the personalised window of implantation — used for women with ≥2 failed embryo transfers with good-quality embryos. Shifts transfer timing to the exact receptive window identified for that individual. India cost: $200–$500 vs $800–$1,200 U.S.',
    highlight: false,
  },
  {
    title: 'Surgical Sperm Retrieval (TESE / MicroTESE)',
    desc: 'For men with azoospermia (no sperm in ejaculate) — testicular sperm extraction (TESE) or microsurgical TESE (microTESE) under anaesthesia to retrieve sperm directly from testicular tissue for ICSI. India cost: $1,000–$3,000 vs $5,000–$15,000 U.S. Often combined with ICSI in the same IVF cycle.',
    highlight: false,
  },
  {
    title: 'Hysteroscopy Before IVF',
    desc: 'Many fertility specialists recommend a hysteroscopy before IVF to assess and treat intrauterine pathology — polyps, fibroids, septum, adhesions — that could impair implantation. Hysteroscopy in India costs $600–$2,000 vs $3,000–$10,000 U.S. Sultan GHC can coordinate gynaecological hysteroscopy and the first IVF cycle in a single trip to India.',
    highlight: false,
  },
  {
    title: 'Ovulation Induction (OI) & Cycle Monitoring',
    desc: 'For women with PCOS or irregular cycles — oral medications (letrozole, clomiphene) or low-dose injectable FSH to trigger ovulation, monitored via serial ultrasound and blood hormone levels. First-line before IUI or IVF. Can be initiated remotely with monitoring via local clinic in the U.S. and timed trip to India for IUI or egg retrieval.',
    highlight: false,
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
    a: 'IVF in the U.S.: $15,000–$30,000 per cycle including medications (RESOLVE 2024). India: $2,000–$4,000 all-in — saving 80–87%. Medications cost 60–75% less in India too. A couple needing 3 IVF cycles in India pays approximately the same as 1 cycle in the U.S.',
  },
  {
    q: 'What is the IVF success rate in India?',
    a: 'Leading JCI-accredited fertility centers in India report: ~40–55% clinical pregnancy rate per fresh transfer (under 35), ~35–45% (age 35–37), ~25–35% (age 38–40), ~15–25% (over 40 own eggs). Donor egg IVF: 55–70% per transfer regardless of recipient age. Broadly comparable to U.S. CDC NASS averages. Sultan GHC shares verified outcome data from partner centers before you commit.',
  },
  {
    q: 'How much does donor egg IVF cost in India?',
    a: 'Donor egg IVF in the U.S.: $25,000–$50,000. India: $3,500–$6,500 (including donor egg retrieval, ICSI, and fresh transfer) — saving 85–90%. Donors are anonymous, ART Act-compliant, genetically screened. Success rate: 55–70% per transfer.',
  },
  {
    q: 'What is PGT-A and how much does it cost in India?',
    a: 'PGT-A screens embryos for chromosomal abnormalities before transfer — recommended for women 35+, recurrent miscarriage, or recurrent implantation failure. India: $800–$2,000 for up to 8 embryos vs $3,000–$6,000 U.S. PGT-M for single gene diseases: $1,500–$4,000 India vs $5,000–$12,000 U.S.',
  },
  {
    q: 'Can I freeze my eggs in India?',
    a: 'Yes. Egg freezing in India: $1,500–$3,500 including all medications vs $10,000–$20,000 U.S. Annual storage: $150–$300 India vs $600–$1,500 U.S. Vitrification (flash-freezing) used at all partner centers — 80–90% egg survival on thaw.',
  },
  {
    q: 'How long do I need to stay in India for IVF?',
    a: 'Fresh IVF cycle: 14–20 days in India (stimulation → retrieval → transfer). FET (frozen embryo transfer): 5–8 days only. Many couples plan the stimulation phase at home and fly to India for the egg retrieval and transfer — Sultan GHC coordinates exact timing with your cycle.',
  },
  {
    q: 'Is IVF available for PCOS?',
    a: 'Yes — PCOS is one of the most commonly treated causes of infertility via IVF. India\'s centers have extensive PCOS protocol expertise (antagonist, low-dose, Lupron trigger) to minimize OHSS risk while maximizing egg yield. Many PCOS cases are first tried on ovulation induction (letrozole) or IUI before IVF.',
  },
  {
    q: 'What is ERA and is it available in India?',
    a: 'ERA (Endometrial Receptivity Analysis) identifies your personalized implantation window via endometrial biopsy + genomic analysis — used for ≥2 failed embryo transfers with good embryos. India: $200–$500 vs $800–$1,200 U.S. Available at Milann, Nova IVF, and Cloudnine centers.',
  },
  {
    q: 'Is commercial surrogacy available in India for U.S. patients?',
    a: 'No. India\'s Surrogacy (Regulation) Act 2021 restricts surrogacy to altruistic arrangements for Indian citizens (close relatives only). Commercial surrogacy and surrogacy for foreign nationals are not legally available in India. Sultan GHC does not facilitate surrogacy arrangements. Patients seeking gestational carrier services should consult U.S. fertility attorneys and U.S.-based surrogacy agencies.',
  },
  {
    q: 'Is donor sperm IVF or IUI available in India for married couples?',
    a: 'Yes — for heterosexual married couples under India\'s ART Act 2021. Donor sperm IUI: $300–$800 per cycle India. Donor sperm IVF: $2,500–$4,000 plus donor fee. Donors undergo full genetic and infectious disease screening at ART Act-compliant sperm banks. Single women and same-sex couples are not permitted under current law — Sultan GHC provides full legal guidance before any planning begins.',
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
  return (
    <div
      className={`relative bg-gradient-to-br from-purple-50 to-slate-100 border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
      aria-label={label} role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-purple-400 shrink-0" />
        <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-purple-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Size:</span>
        <span className="text-[10px] font-bold text-gray-600">{width} × {height} px</span>
      </div>
      <p className="text-[10px] font-semibold text-purple-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

export default function FertilityIVFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5F0FF] border-b border-[#e0d5ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Fertility & IVF</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                IVF · ICSI · PGT-A · Donor Eggs · Egg Freezing
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                IVF in India & Türkiye —{' '}
                <span className="text-primary">$2,000–$4,000/Cycle</span>{' '}
                vs $15,000–$30,000 in the U.S.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-5 max-w-2xl">
                For millions of American couples, the cost of IVF is the single biggest barrier to starting a family. Sultan GHC connects U.S. patients with JCI-accredited fertility centers in India and Türkiye offering world-class IVF, ICSI, PGT-A, donor egg IVF, egg freezing, and ERA — at 80–87% less than U.S. prices, with verified success rates and full care coordination.
              </p>
              {/* Core savings callout */}
              <div className="bg-white border border-primary/20 rounded-2xl p-5 mb-8 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">What U.S. couples save — IVF abroad</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: '1 IVF Cycle (own eggs)', us: '$15K–$30K', india: '$2K–$4K', save: '~85%' },
                    { label: 'Donor Egg IVF',           us: '$25K–$50K', india: '$3.5K–$6.5K', save: '~87%' },
                    { label: 'PGT-A (up to 8 embryos)', us: '$3K–$6K',   india: '$800–$2K', save: '~70%' },
                    { label: 'Egg Freezing',            us: '$10K–$20K', india: '$1.5K–$3.5K', save: '~83%' },
                  ].map(({ label, us, india, save }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{label}</p>
                      <p className="text-[11px] text-red-500 font-semibold line-through">{us}</p>
                      <p className="text-sm font-bold text-primary">{india}</p>
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block">Save {save}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-3">Sources: RESOLVE National Infertility Association (U.S. 2024) · JCI partner center rates (India 2025)</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Get a Free Fertility Assessment <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="ivf-fertility-treatment-india-turkey-american-patients-embryo-lab.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="IVF embryology laboratory — advanced ART center, India"
                aiPrompt="An IVF embryology laboratory with advanced microscopes and incubators. Warm, professional lighting. Embryologist in scrubs working at a high-powered microscope. Clean, modern lab environment. Photorealistic, 4K, no text overlays. Conveys scientific precision, hope, and safety."
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
              { icon: Star,    title: 'Verified Success Rates',   desc: 'Sultan GHC requests and shares verified embryo transfer success rates from each partner center before you commit.' },
              { icon: Shield,  title: 'ART Act Compliance',       desc: 'All partner centers comply with India\'s ART (Regulation) Act 2021 — the country\'s national fertility law covering donor programs and patient rights.' },
              { icon: Activity, title: 'Blastocyst Culture Standard', desc: 'Day 5 blastocyst culture (instead of Day 3 cleavage stage) is standard at partner centers — allowing better embryo selection.' },
              { icon: Users,   title: 'Full Journey Coordination', desc: 'Cycle timing, visa, hospital, accommodation, embryo transport coordination, and telemedicine follow-up after your return home.' },
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

      {/* Indications */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Fertility Conditions We Help With</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Whether you've been trying to conceive for months or years — or are simply exploring options — our fertility specialists assess each case individually and recommend the least invasive, most effective path.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDICATIONS.map(({ name, icon }) => (
              <div key={name} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                <span className="text-lg shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IVF Procedures */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">IVF & Fertility Treatments Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">From basic IUI to advanced PGT-M genetic testing — partner centers offer the full spectrum of assisted reproductive technology at a fraction of U.S. costs.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCEDURES.map((p) => (
              <div key={p.title} className={`rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow ${p.highlight ? 'bg-primary/5 border-primary/20' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${p.highlight ? 'bg-primary/20' : 'bg-primary/10'}`}>
                    <Activity size={15} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-11">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
            <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-1.5">Not sure which treatment is right for you?</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Many couples don't need IVF as a first step. Sultan GHC's fertility team reviews your diagnosis and recommends the least invasive, most cost-effective path — starting with IUI or ovulation induction where appropriate, and moving to IVF only when clinically indicated. Share your AMH, FSH, semen analysis, and previous treatment history for a personalised assessment.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Get Your Free Fertility Assessment <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* How IVF Works — Step by Step */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">How Your IVF Journey Works — Step by Step</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">From your first enquiry to your pregnancy test — Sultan GHC coordinates every stage so you can focus on what matters most.</p>
          </div>
          <div className="space-y-4">
            {IVF_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">IVF Cost Comparison: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from RESOLVE: The National Infertility Association (2024) and ASRM published data. India and Türkiye from JCI-accredited partner center published rates (2025). All figures include medications unless stated.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Treatment</th>
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
            All figures approximate. Actual costs vary by clinic, protocol, and number of embryos. Request a personalised cost estimate from Sultan GHC.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>
          </p>
          <div className="mt-8 bg-primary/5 border border-primary/15 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">🧮 What does this mean for a couple needing multiple IVF cycles?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Most fertility specialists recommend planning for 2–3 IVF cycles to achieve a pregnancy, particularly for women over 37. In the U.S., 3 cycles cost $45,000–$90,000+ — often not covered by insurance. In India, 3 cycles cost $6,000–$12,000. A couple who travels to India for three IVF cycles pays less than the cost of a single cycle in the U.S., with the added benefit of a more personalised, less rushed treatment environment.
            </p>
          </div>
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
                  <h3 className="text-lg font-semibold text-gray-900">IVF in India</h3>
                  <p className="text-sm text-gray-500">Nova IVF, Cloudnine, Apollo Fertility, Milann, Indira IVF, Medanta, Rela Institute</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'India performs 250,000+ IVF cycles annually — one of the highest volumes in Asia, with a large pool of highly experienced reproductive endocrinologists',
                  'Nova IVF — India\'s largest IVF network with 80+ centers and published outcome data; partner with Sultan GHC for international patient coordination',
                  'Milann Fertility Centre (Bangalore) — ICMR-registered, dedicated fertility hospital with advanced genetics lab (PGT-A, PGT-M, ERA)',
                  'Cloudnine Hospitals — dedicated Women\'s health hospital with fertility unit, genetics laboratory, and gynaecological surgery integration',
                  'IVF medications (FSH, GnRH analogues) available as Indian generic equivalents at 60–75% lower cost than U.S. branded medications',
                  'ART (Regulation) Act 2021 — national fertility law regulating donor programs, sperm banks, and patient rights; all partner centers are ICMR-registered',
                                    'Rela Institute, Chennai — NABH-accredited 450-bed multi-specialty hospital; MOU partner of Sultan GHC',
'India Medical e-Visa issued in 3–5 business days; cycle can be partially managed remotely from the U.S. with timed India trip for retrieval and transfer',
                  'Medanta — The Medicity, Gurugram — Newsweek Top 250 World\'s Best Hospitals; 800+ specialists across all major disciplines',
                ].map((pt) => (
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
                  <h3 className="text-lg font-semibold text-gray-900">IVF in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem Sistina, Memorial IVF, Clinic Eurofertil</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Türkiye is one of Europe\'s most popular IVF destinations — drawing patients from 50+ countries annually for its high-quality care at competitive prices',
                  'Acibadem Sistina (Istanbul) — internationally accredited IVF center with reproductive genetics, PGT-A, and dedicated international patient coordinators',
                  'Donor egg IVF is particularly popular in Türkiye — where donor profiles include Eastern European and Turkish donors, with fast turnaround times (2–4 weeks)',
                  'Türkiye has no age restriction for IVF in private clinics — patients up to 50 can access treatment with donor eggs',
                  'Koç University Hospital — academic IVF center with fellowship-trained reproductive endocrinologists and research-standard laboratory protocols',
                  'U.S. citizens are visa-free for Türkiye (effective January 2024); Turkish Airlines nonstop from 7 U.S. cities',
                  'IVF packages often include hotel, airport transfer, translation, and clinic visits — easy to coordinate for a 14–20 day trip',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Surrogacy disclaimer */}
      <section className="bg-amber-50 border-y border-amber-200 py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-start gap-4">
            <AlertCircle size={22} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-2">Surrogacy in India — Legal Position (2021)</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                India's <strong>Surrogacy (Regulation) Act 2021</strong> restricts surrogacy to altruistic arrangements exclusively for Indian citizens (close relative surrogates only). <strong>Commercial surrogacy and surrogacy for foreign nationals are not legally available in India.</strong> Sultan GHC does not facilitate, promote, or arrange surrogacy of any kind. U.S. patients interested in gestational carrier arrangements should work with a licensed U.S. fertility attorney and a U.S.-based surrogacy agency. Sultan GHC can coordinate the IVF component (egg retrieval, embryo creation, and cryopreservation) in India if required as part of a U.S. gestational carrier program.
              </p>
              <p className="text-sm font-semibold text-amber-800 mb-2 mt-5">Surrogacy in Türkiye — Legal Position</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Surrogacy is <strong>not legally recognized in Türkiye.</strong> Turkish law does not provide a legal framework for surrogacy arrangements — neither commercial nor altruistic surrogacy is available to Turkish nationals or foreign nationals under Turkish law. Sultan GHC does not facilitate, promote, or arrange surrogacy in Türkiye. U.S. patients seeking gestational carrier arrangements should consult a licensed U.S. fertility attorney and a U.S.-based surrogacy agency. Sultan GHC can coordinate IVF-related procedures (egg retrieval, embryo creation, and cryopreservation) in Türkiye as part of a broader fertility plan where legally appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gynaecology crosslink */}
      <section className="bg-pink-50 border-b border-pink-100 py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-4xl shrink-0" aria-hidden="true">🔬</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-pink-800 mb-1">Recommended Pre-IVF Workup? Coordinate Surgery in the Same Trip.</p>
              <p className="text-sm text-pink-700 leading-relaxed">
                Many patients are advised to address fibroids, uterine septum, polyps, or endometriosis before their first embryo transfer. Sultan GHC can schedule a hysteroscopy or laparoscopic procedure at a partner hospital immediately before your IVF cycle — in the same trip, reducing total travel time and cost.{' '}
                <Link href="/treatments/obstetrics-gynaecology" className="font-semibold underline hover:text-pink-900">See Obstetrics & Gynaecology →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Explore IVF Abroad?</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Share your AMH, FSH, semen analysis, and previous IVF records. Our fertility specialist reviews your case within 24–48 hours and recommends the right center, protocol, and cost estimate — free of charge.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Get Your Free Fertility Assessment <ArrowRight size={15} />
            </Link>
            <a href="tel:+16107870713" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
              <Phone size={15} /> Call +1-610-787-0713
            </a>
          </div>
          <p className="text-white/60 text-xs mt-5">All information shared with Sultan GHC is handled with strict confidentiality.</p>
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

      <PartnerHospitalsSection title="Internationally Accredited Fertility & IVF Centers" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — IVF Abroad</h2>
            <p className="text-gray-500 text-sm">Honest answers to the questions American patients ask most — verified, patient-friendly, and based on current data.</p>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Journey to Parenthood Starts Here</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your fertility reports and history. Our team will review your case, connect you with a verified IVF center, and provide a detailed cost estimate — at no charge.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Request Free Fertility Assessment <ArrowRight size={15} />
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
