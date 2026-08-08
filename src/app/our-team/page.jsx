'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Stethoscope, Activity, Leaf, Sun, ChevronRight,
  GraduationCap, Building2, Sparkles, ArrowRight,
  MessageCircle, Clock, X, CheckCircle2,
  User, Mail, Phone, MapPin, FileText, Send,
} from 'lucide-react'

// ─── Team Data ────────────────────────────────────────────────────────────────

const TEAM = [
  {
    category: 'Doctors',
    members: [

      // ── 1. FOUNDER — Dr. Nasar A. Sultan ─────────────────────────────────────
      {
        name: 'Dr. Nasar A. Sultan',
        image: '/team/Dr Nasar.png',
        credentials: 'MD',
        isFounder: true,
        title: 'Founder & Medical Director',
        ghcRole: 'Clinical Research & Patient Care Lead',
        organization: 'Sultan Global Health Care',
        previousOrg: 'Former Research Physician, Leading U.S. Medical Institutions',
        country: 'United States',
        flag: 'us',
        degree: 'MD',
        specialty: 'Pulmonary & Critical Care Medicine · Radiology · Neurology',
        expertise: [
          'Pulmonary & Critical Care Medicine',
          'Radiology',
          'Neurology',
          'Gynecology',
          'Hematology Oncology',
          'Peripheral Atherectomy',
          'Complex Case Coordination',
        ],
        experience: 'Extensive',
        languages: 'English',
        highlight: 'Extensive experience in clinical medicine, research, and patient care across multiple disciplines. Oversees all patient care planning, treatment quality, and international case coordination at Sultan GHC.',
        accent: 'blue',
        grad: 'from-[#1e3a5f] via-[#1a3354] to-[#0f2340]',
        patternColor: 'bg-blue-400/30',
        avatarText: 'text-blue-100',
        strip: 'bg-blue-100',
      },

      // ── 2. Dr. Mohammad Musa Ali ──────────────────────────────────────────────
      {
        name: 'Dr. Mohammad Musa Ali',
        image: '/team/DrMusa.png',
        credentials: 'MBBS, MD, MRCP, MRCPS, FRCP (Dublin)',
        title: 'Senior Consultant Physician & Diabetologist',
        ghcRole: 'Internal Medicine & Diabetes Case Coordinator',
        organization: 'Cribs Hospital, Bihar, India',
        previousOrg: 'Former Consultant Physician — King Fahad Hospital, Saudi Arabia',
        country: 'India',
        flag: 'in',
        degree: 'MBBS, MD, MRCP, MRCPS, FRCP (Dublin)',
        specialty: 'Internal Medicine, Diabetes Management & Preventive Care',
        expertise: [
          'Internal Medicine',
          'Diabetes Management',
          'Preventive Care',
          'Metabolic Disorders',
        ],
        experience: '30+ Years',
        languages: 'English, Hindi, Urdu',
        highlight: 'Post Graduate of Aligarh Muslim University. Holds prestigious international credentials including MRCP and FRCP (Dublin). Former Consultant Physician at King Fahad Hospital, Kingdom of Saudi Arabia.',
        accent: 'rose',
        grad: 'from-rose-50 via-pink-100 to-rose-100',
        patternColor: 'bg-rose-200/60',
        avatarText: 'text-rose-600',
        strip: 'bg-rose-200',
      },

      // ── 3. Dr. Sumbul Naim ────────────────────────────────────────────────────
      {
        name: 'Dr. Sumbul Naim',
        image: '/team/dr sumbul.png',
        credentials: 'MD (OBGYN)',
        title: 'Fertility & Women\'s Health Specialist',
        ghcRole: 'Leads Fertility Treatment Planning, IVF Coordination & Counseling',
        organization: 'Aligarh Muslim University (MD Trained)',
        previousOrg: 'Gold Medalist — Aligarh Muslim University',
        country: 'India',
        flag: 'in',
        degree: 'MD (OBGYN) — Gold Medalist, Aligarh Muslim University',
        specialty: 'Infertility Treatment, High-Risk Pregnancy Care & IVF',
        expertise: [
          'Infertility Treatment',
          'IVF Coordination',
          'High-Risk Pregnancy',
          'Women\'s Health',
          'Fertility Counseling',
        ],
        experience: '25+ Years (since 1999)',
        languages: 'English, Hindi, Urdu',
        highlight: 'Gold Medalist with 25+ years of clinical experience since 1999. Specialist in infertility and high-risk pregnancy care. Leads fertility treatment planning, IVF case coordination, and patient counseling.',
        accent: 'pink',
        grad: 'from-pink-50 via-rose-100 to-pink-100',
        patternColor: 'bg-pink-200/60',
        avatarText: 'text-pink-600',
        strip: 'bg-pink-200',
      },

      // ── 4. Dr. Abdurahiman Elikkottil ─────────────────────────────────────────
      {
        name: 'Dr. Abdurahiman Elikkottil',
        image: '/team/dr-abdurahiman.png',
        credentials: 'MD, MRCPCH (UK)',
        title: 'Senior Pediatrician & Neonatologist',
        ghcRole: 'Manages Pediatric & Neonatal Cases including Critical Care',
        organization: 'International Practice — India, Qatar & UAE',
        previousOrg: 'Post Graduate, Aligarh Muslim University | UK-certified MRCPCH',
        country: 'India',
        flag: 'in',
        degree: 'MD, MRCPCH (UK) — Aligarh Muslim University',
        specialty: 'NICU & PICU Specialist · Neonatal & Pediatric Critical Care',
        expertise: [
          'Neonatal ICU (NICU)',
          'Pediatric Critical Care (PICU)',
          'General Pediatrics',
          'Neonatology',
        ],
        experience: '30+ Years',
        languages: 'English, Hindi, Malayalam, Arabic',
        highlight: '30+ years of international clinical experience across India, Qatar, and UAE. Post Graduate of Aligarh Muslim University and UK-certified MRCPCH pediatric specialist.',
        accent: 'teal',
        grad: 'from-teal-50 via-cyan-100 to-teal-100',
        patternColor: 'bg-teal-200/60',
        avatarText: 'text-teal-600',
        strip: 'bg-teal-200',
      },

      // ── 5. Dr. Vishnu Girish ──────────────────────────────────────────────────
      {
        name: 'Dr. Vishnu Girish',
        image: '/team/dr-vishnu.png',
        credentials: 'MD, DM',
        title: 'Consultant Hepatologist',
        ghcRole: 'Reviews Liver Disease Cases & Transplant Planning',
        organization: 'Liver Disease & Transplant Specialist',
        previousOrg: 'Advanced Hepatology & Transplant Expertise',
        country: 'India',
        flag: 'in',
        degree: 'MD, DM (Hepatology)',
        specialty: 'Liver Disease, Liver Transplant, Cirrhosis & Liver Cancer',
        expertise: [
          'Hepatology',
          'Liver Transplant',
          'Cirrhosis Management',
          'Liver Failure',
          'Liver Cancer',
        ],
        experience: '1,000+ Procedures',
        languages: 'English, Hindi, Malayalam',
        highlight: 'Performed 1,000+ hepatology procedures. Specialist in cirrhosis, liver failure, and liver cancer. Reviews complex liver disease cases and coordinates transplant planning for international patients.',
        accent: 'violet',
        grad: 'from-violet-50 via-purple-100 to-violet-100',
        patternColor: 'bg-violet-200/60',
        avatarText: 'text-violet-600',
        strip: 'bg-violet-200',
      },

      // ── 6. Dr. Fawaz Shamim Siddiqui ──────────────────────────────────────────
      {
        name: 'Dr. Fawaz Shamim Siddiqui',
        image: '/team/dr-fawaz-siddiqui.png',
        credentials: 'BDS, MPH, MDS',
        title: 'Pediatric Dentist | Child Dental Specialist',
        ghcRole: 'Pediatric Dental Case Coordination & Counseling',
        organization: 'International Practice — Saudi Arabia, India & Malaysia',
        previousOrg: 'Royal College of Surgeons of Edinburgh | FAIMER Fellow',
        country: 'India',
        flag: 'in',
        degree: 'BDS, MPH, MDS | FAIMER Fellow',
        specialty: 'Child-Friendly Dental Care & Advanced Pediatric Dental Treatments',
        expertise: [
          'Pediatric Dentistry',
          'Preventive Dentistry',
          'Advanced Pediatric Dental Treatments',
          'Child Dental Care',
        ],
        experience: '18+ Years',
        languages: 'English, Hindi, Urdu, Arabic',
        highlight: '18+ years of clinical and academic experience across Saudi Arabia, India, and Malaysia. Affiliated with the Royal College of Surgeons of Edinburgh. FAIMER Fellow.',
        accent: 'emerald',
        grad: 'from-emerald-50 via-green-100 to-emerald-100',
        patternColor: 'bg-emerald-200/60',
        avatarText: 'text-emerald-600',
        strip: 'bg-emerald-200',
      },

      // ── 7. Dr. A.D. Khan ──────────────────────────────────────────────────────
      {
        name: 'Dr. A.D. Khan',
        image: '/team/dr ad khan.png',
        credentials: 'MD (Hom), PG Diploma Guidance & Counseling',
        title: 'Patient Care Specialist | Counselor',
        ghcRole: 'Oversees Surgical Planning & Complex Case Management',
        organization: 'Bhabha Homoeopathic Medical College, Bhopal, India',
        previousOrg: 'Principal & Professor — Bhabha Homoeopathic Medical College',
        country: 'India',
        flag: 'in',
        degree: 'MD (Hom), PG Diploma in Guidance & Counseling',
        specialty: 'ICU Coordination, Surgical Planning, Counseling & Hospital Management',
        expertise: [
          'ICU Coordination',
          'Surgical Planning',
          'Patient Counseling',
          'Hospital Management',
          'Complex Case Management',
        ],
        experience: '30+ Years',
        languages: 'English, Hindi, Urdu',
        highlight: '30+ years of clinical and surgical experience. Principal & Professor at Bhabha Homoeopathic Medical College, Bhopal. Expertise in ICU coordination, surgical planning, counseling, and hospital management.',
        accent: 'amber',
        grad: 'from-amber-50 via-orange-100 to-amber-100',
        patternColor: 'bg-amber-200/60',
        avatarText: 'text-amber-700',
        strip: 'bg-amber-200',
      },

      // ── 8. Dr. Shereen Khan ───────────────────────────────────────────────────
      {
        name: 'Dr. Shereen Khan',
        image: '/team/dr-shereen.png',
        credentials: 'BHMS, MPH',
        title: 'Patient Care Specialist | Public Health Expert',
        ghcRole: 'Ensures Smooth Patient Experience & Care Coordination',
        organization: 'AIIMS Bhopal, India (Clinical Experience)',
        previousOrg: 'Background in Clinical Care, Research & Healthcare Management',
        country: 'India',
        flag: 'in',
        degree: 'BHMS, MPH (Master of Public Health)',
        specialty: 'Patient Coordination, Public Health Strategy & Clinical Care',
        expertise: [
          'Patient Coordination',
          'Public Health Strategy',
          'Clinical Care',
          'Healthcare Management',
          'Research',
        ],
        experience: 'Clinical',
        languages: 'English, Hindi, Urdu',
        highlight: 'Experience at leading institutions including AIIMS Bhopal, India. Background spanning clinical care, research, and healthcare management. Ensures a smooth and supported patient experience throughout the care journey.',
        accent: 'indigo',
        grad: 'from-indigo-50 via-blue-100 to-indigo-100',
        patternColor: 'bg-indigo-200/60',
        avatarText: 'text-indigo-600',
        strip: 'bg-indigo-200',
      },

    ],
  },

  // ── HIDDEN UNTIL REAL PROFILES ARE CONFIRMED ─────────────────────────────
  // Uncomment each block once verified staff data is available.
  // {
  //   category: 'Physiotherapy',
  //   members: [
  //     {
  //       name: 'Vikram Nair, PT',
  //       title: 'Lead Physiotherapist — Post-Surgical Rehab',
  //       organization: 'Max Super Speciality Hospital, New Delhi',
  //       country: 'India',
  //       flag: 'in',
  //       degree: 'BPT, MPT (Musculoskeletal & Sports), Mulligan Certified',
  //       specialty: 'Orthopaedic Rehab, Sports Injury & Neurological Recovery',
  //       experience: '14 Years',
  //       languages: 'English, Hindi',
  //       highlight: 'Designed rehab protocols adopted across 12 Apollo network hospitals',
  //       accent: 'blue',
  //       grad: 'from-sky-50 via-blue-100 to-sky-100',
  //       patternColor: 'bg-sky-200/60',
  //       avatarText: 'text-sky-600',
  //       strip: 'bg-sky-200',
  //     },
  //     {
  //       name: 'Elif Demir, PT',
  //       title: 'Senior Physiotherapist — Neurological Rehab',
  //       organization: 'Acibadem Rehabilitation Centre, Istanbul',
  //       country: 'Turkey',
  //       flag: 'tr',
  //       degree: 'BSc Physiotherapy, MSc Neuroscience, Bobath Certified',
  //       specialty: "Stroke Recovery, Parkinson's Disease & Spinal Cord Rehab",
  //       experience: '11 Years',
  //       languages: 'English, Turkish',
  //       highlight: 'Bobath-certified specialist with expertise in paediatric neuro-rehab',
  //       accent: 'violet',
  //       grad: 'from-indigo-50 via-violet-100 to-indigo-100',
  //       patternColor: 'bg-indigo-200/60',
  //       avatarText: 'text-indigo-600',
  //       strip: 'bg-indigo-200',
  //     },
  //     {
  //       name: 'Ananya Pillai, PT',
  //       title: "Women's Health & Pelvic Floor Specialist",
  //       organization: 'Manipal Hospital, Bengaluru',
  //       country: 'India',
  //       flag: 'in',
  //       degree: "BPT, MPT (Women's Health), CAPP Certified",
  //       specialty: 'Pelvic Floor Rehabilitation & Pre/Post-Natal Care',
  //       experience: '9 Years',
  //       languages: 'English, Hindi, Kannada',
  //       highlight: "Runs India's first dedicated pelvic health outpatient clinic",
  //       accent: 'rose',
  //       grad: 'from-fuchsia-50 via-pink-100 to-rose-100',
  //       patternColor: 'bg-pink-200/60',
  //       avatarText: 'text-fuchsia-600',
  //       strip: 'bg-fuchsia-200',
  //     },
  //   ],
  // },
  // {
  //   category: 'Nutritionists',
  //   members: [
  //     {
  //       name: 'Deepika Iyer, RD',
  //       title: 'Clinical Nutritionist — Oncology & Post-Op',
  //       organization: 'Tata Memorial Centre, Mumbai',
  //       country: 'India',
  //       flag: 'in',
  //       degree: 'BSc Nutrition, MSc Clinical Dietetics, RD, CNSC',
  //       specialty: 'Cancer Nutrition, Surgical Recovery & Immunonutrition',
  //       experience: '12 Years',
  //       languages: 'English, Hindi, Marathi',
  //       highlight: 'Reduced post-operative complications by 34% through nutrition protocols',
  //       accent: 'green',
  //       grad: 'from-emerald-50 via-green-100 to-lime-100',
  //       patternColor: 'bg-green-200/60',
  //       avatarText: 'text-emerald-700',
  //       strip: 'bg-emerald-200',
  //     },
  //     {
  //       name: 'Selin Kaya, RD',
  //       title: 'Integrative Nutritionist — Metabolic Health',
  //       organization: 'Memorial Sisli Hospital, Istanbul',
  //       country: 'Turkey',
  //       flag: 'tr',
  //       degree: 'BSc Nutrition & Dietetics, MSc Integrative Medicine, IFM Certified',
  //       specialty: 'Metabolic Syndrome, Bariatric Nutrition & Anti-Inflammatory Diets',
  //       experience: '10 Years',
  //       languages: 'English, Turkish',
  //       highlight: 'Developed bariatric nutrition programme serving 2,000+ patients annually',
  //       accent: 'amber',
  //       grad: 'from-orange-50 via-amber-100 to-orange-100',
  //       patternColor: 'bg-orange-200/60',
  //       avatarText: 'text-orange-600',
  //       strip: 'bg-orange-200',
  //     },
  //   ],
  // },
  // {
  //   category: 'Yoga & Wellness',
  //   members: [
  //     {
  //       name: 'Arjun Verma',
  //       title: 'Senior Yoga Therapist & Wellness Coach',
  //       organization: 'Ayush Wellness Centre, Rishikesh',
  //       country: 'India',
  //       flag: 'in',
  //       degree: 'RYT-500, YACEP (Yoga Alliance), Diploma in Naturopathy',
  //       specialty: 'Therapeutic Yoga, Pranayama & Mind-Body Recovery',
  //       experience: '15 Years',
  //       languages: 'English, Hindi, Sanskrit',
  //       highlight: 'Certified yoga therapist embedded with surgical teams for holistic recovery',
  //       accent: 'teal',
  //       grad: 'from-cyan-50 via-teal-100 to-cyan-100',
  //       patternColor: 'bg-cyan-200/60',
  //       avatarText: 'text-cyan-700',
  //       strip: 'bg-cyan-200',
  //     },
  //     {
  //       name: 'Meera Goswami',
  //       title: 'Ayurveda & Integrative Wellness Specialist',
  //       organization: 'NIMHANS Integrative Medicine Centre, Bengaluru',
  //       country: 'India',
  //       flag: 'in',
  //       degree: 'BAMS (Ayurveda), MD Ayurveda, Certified Integrative Health Coach',
  //       specialty: 'Stress & Anxiety Management, Chronic Pain & Sleep Therapy',
  //       experience: '13 Years',
  //       languages: 'English, Hindi, Bengali',
  //       highlight: 'Published researcher in integrative oncology support and lifestyle medicine',
  //       accent: 'violet',
  //       grad: 'from-purple-50 via-violet-100 to-purple-100',
  //       patternColor: 'bg-purple-200/60',
  //       avatarText: 'text-purple-600',
  //       strip: 'bg-purple-200',
  //     },
  //   ],
  // },
]

// ─── Category meta ────────────────────────────────────────────────────────────

const CATEGORY_META = {
  'Doctors':         { icon: Stethoscope, bg: 'bg-blue-600',    label: 'Medical Doctors',       desc: 'Board-certified specialists from JCI-accredited hospitals in India & Turkey' },
  'Physiotherapy':   { icon: Activity,    bg: 'bg-violet-600',  label: 'Physiotherapy',         desc: 'Expert rehabilitation therapists for post-surgical and neurological recovery' },
  'Nutritionists':   { icon: Leaf,        bg: 'bg-emerald-600', label: 'Nutrition & Dietetics', desc: 'Clinical dietitians supporting recovery, metabolic health, and oncology care' },
  'Yoga & Wellness': { icon: Sun,         bg: 'bg-amber-600',   label: 'Yoga & Wellness',       desc: 'Certified therapists combining ancient wisdom with modern rehabilitation' },
}

// ─── Get avatar initials ──────────────────────────────────────────────────────

function getInitials(name) {
  const clean = name.replace(/^Dr\.\s*/, '').replace(/,.*$/, '').trim()
  const parts = clean.split(' ')
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase()
}

// ─── Consultation Modal ───────────────────────────────────────────────────────

const EMPTY_FORM = {
  name: '', email: '', phone: '', location: 'United States',
  condition: '', destination: 'No Preference', notes: '',
}

function ConsultationModal({ doctor, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const backdropRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const validate = () => {
    const e = {}
    if (!form.name.trim())      e.name      = 'Full name is required'
    if (!form.email.trim())     e.email     = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim())     e.phone     = 'Phone number is required'
    if (!form.condition.trim()) e.condition = 'Please describe your condition or query'
    return e
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('submitting')
    try {
      await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.name.split(' ')[0] || form.name,
          lastName:  form.name.split(' ').slice(1).join(' ') || '',
          email:     form.email,
          phone:     form.phone,
          message: [
            `Consultation Request — ${doctor.name}`,
            `Specialist: ${doctor.title}`,
            `Hospital: ${doctor.organization}`,
            ``,
            `Patient Condition / Query:`,
            form.condition,
            ``,
            `Preferred Destination: ${form.destination}`,
            `Patient Location: ${form.location}`,
            form.notes ? `Additional Notes: ${form.notes}` : '',
          ].filter(Boolean).join('\n'),
        }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === backdropRef.current) onClose() }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* ── Header ── */}
        <div className="bg-gradient-to-br from-primary to-blue-700 px-7 pt-7 pb-6 flex-shrink-0 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
            aria-label="Close"
          >
            <X size={15} />
          </button>

          <div className="relative z-10">
            <span className="inline-block text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-3">
              Request Your Free First Consultation
            </span>
            <h2 className="text-xl font-bold text-white leading-snug mb-1">
              Book a Consultation
            </h2>
            <p className="text-blue-100 text-sm">
              Our team will confirm your appointment within 24 hours.
            </p>
          </div>

          {/* Doctor pill */}
          <div className="relative z-10 mt-5 flex items-center gap-3 bg-white/15 border border-white/20 rounded-2xl px-4 py-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {getInitials(doctor.name)}
            </div>
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm leading-none truncate">{doctor.name}</p>
              <p className="text-blue-100 text-xs mt-0.5 truncate">{doctor.specialty}</p>
            </div>
          </div>
        </div>

        {/* ── Form / Success ── */}
        <div className="overflow-y-auto flex-1 px-7 py-6">

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                <CheckCircle2 size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Our patient coordination team will review your request and reach out within <strong className="text-gray-700">24 hours</strong> to confirm your consultation.
              </p>
              <button
                onClick={onClose}
                className="mt-7 bg-primary text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              {/* Full Name */}
              <Field label="Full Name" icon={User} error={errors.name} required>
                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputCls(errors.name)}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" icon={Mail} error={errors.email} required>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputCls(errors.email)}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" icon={Phone} error={errors.phone} required hint="Include country code, e.g. +1 610 000 0000">
                <input
                  type="tel"
                  placeholder="+1 610 000 0000"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputCls(errors.phone)}
                />
              </Field>

              {/* Location + Destination — side by side */}
              <div className="grid grid-cols-2 gap-3">
                <Field label="Your Location" icon={MapPin}>
                  <select
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className={inputCls()}
                  >
                    {['United States','Canada','United Kingdom','Australia','Other'].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred Destination">
                  <select
                    value={form.destination}
                    onChange={(e) => handleChange('destination', e.target.value)}
                    className={inputCls()}
                  >
                    {['No Preference','India','Turkey'].map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Condition */}
              <Field label="Medical Condition / Query" icon={FileText} error={errors.condition} required>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your condition, diagnosis, or the treatment you're exploring…"
                  value={form.condition}
                  onChange={(e) => handleChange('condition', e.target.value)}
                  className={inputCls(errors.condition) + ' resize-none'}
                />
              </Field>

              {/* Notes */}
              <Field label="Additional Notes" hint="Optional — reports available, preferred contact time, etc.">
                <textarea
                  rows={2}
                  placeholder="Any other information that may help us…"
                  value={form.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  className={inputCls() + ' resize-none'}
                />
              </Field>

              {status === 'error' && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again or{' '}
                  <a href="https://wa.me/16107870713" className="underline">contact us on WhatsApp</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm py-4 rounded-2xl hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Request Consultation
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400 leading-relaxed">
                No commitment required. Our team will reach out within 24 hours.{' '}
                <br />Sultan GHC does not provide medical advice or diagnosis.
              </p>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Field wrapper & input style helpers ──────────────────────────────────────

function Field({ label, icon: Icon, error, hint, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
        {Icon && <Icon size={12} className="text-gray-400" />}
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[11px] text-gray-400">{hint}</p>}
      {error && <p className="text-[11px] text-red-500">{error}</p>}
    </div>
  )
}

function inputCls(error) {
  return `w-full text-sm px-3.5 py-2.5 rounded-xl border bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
    error
      ? 'border-red-300 focus:ring-red-200'
      : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
  }`
}

// ─── Country flag helper ──────────────────────────────────────────────────────

const COUNTRY_FLAG_CODE = {
  'India':         'in',
  'United States': 'us',
  'Turkey':        'tr',
}

// ─── Team Card ────────────────────────────────────────────────────────────────

function TeamCard({ member, onBook }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-black/15 transition-all duration-400 hover:-translate-y-2 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image / Avatar area — 4:3 ratio ── */}
      <div className="relative w-full overflow-hidden" style={{ paddingTop: '75%' }}>

        {member.image ? (
          <>
            <Image
              src={member.image}
              alt={`${member.name} — ${member.specialty}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${member.grad}`}>
              <div className={`absolute top-[-20%] right-[-10%] w-48 h-48 rounded-full ${member.patternColor}`} />
              <div className={`absolute bottom-[-15%] left-[-5%] w-36 h-36 rounded-full ${member.patternColor}`} />
              <div className={`absolute top-[30%] left-[60%] w-16 h-16 rounded-full ${member.patternColor}`} />
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`w-24 h-24 rounded-full bg-white ring-4 ring-white/80 shadow-lg flex items-center justify-center text-4xl font-bold tracking-tight select-none ${member.avatarText}`}>
                {getInitials(member.name)}
              </div>
              <p className="mt-3 text-gray-500 text-xs font-semibold tracking-widest uppercase px-4 text-center">
                {member.experience} Experience
              </p>
            </div>
          </>
        )}

        {/* Founder badge — top right */}
        {member.isFounder && (
          <div className="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
            Founder
          </div>
        )}

        {/* Country badge — top left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
          {COUNTRY_FLAG_CODE[member.country] && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`https://flagcdn.com/w20/${COUNTRY_FLAG_CODE[member.country]}.png`}
              srcSet={`https://flagcdn.com/w40/${COUNTRY_FLAG_CODE[member.country]}.png 2x`}
              width={20}
              height={15}
              alt={member.country}
              className="rounded-[2px] object-cover shrink-0"
            />
          )}
          <span className="text-xs font-semibold text-gray-700">{member.country}</span>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gray-900/90 backdrop-blur-md flex flex-col justify-end p-5 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`transition-all duration-400 ${hovered ? 'translate-y-0' : 'translate-y-8'}`}>
            <div className="flex items-start gap-2 mb-3">
              <Sparkles size={13} className="text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-white/90 text-xs leading-relaxed">{member.highlight}</p>
            </div>
            <button
              onClick={onBook}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Book Consultation
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Info area ── */}
      <div className="p-5 flex flex-col flex-1">

        {/* Name + credentials */}
        <div className="mb-1">
          <h3 className="text-base font-bold text-gray-900 leading-tight">{member.name}</h3>
          {member.credentials && (
            <p className="text-[10px] text-gray-400 font-medium mt-0.5">{member.credentials}</p>
          )}
        </div>

        {/* Title */}
        <p className="text-sm text-primary font-semibold leading-snug mb-1">{member.title}</p>

        {/* SGHC Role */}
        {member.ghcRole && (
          <p className="text-[11px] text-gray-500 italic leading-snug mb-3 border-l-2 border-primary/30 pl-2">
            {member.ghcRole}
          </p>
        )}

        <div className="space-y-2 text-sm flex-1">

          {/* Organization */}
          <div className="flex items-start gap-2">
            <Building2 size={12} className="mt-0.5 flex-shrink-0 text-gray-400" />
            <div>
              <span className="text-gray-700 text-xs font-medium leading-snug">{member.organization}</span>
              {member.previousOrg && (
                <p className="text-[10px] text-gray-400 leading-snug mt-0.5">{member.previousOrg}</p>
              )}
            </div>
          </div>

          {/* Degree */}
          <div className="flex items-start gap-2">
            <GraduationCap size={12} className="mt-0.5 flex-shrink-0 text-gray-400" />
            <span className="text-gray-600 text-xs leading-snug">{member.degree}</span>
          </div>

          {/* Specialty */}
          <div className="flex items-start gap-2">
            <Stethoscope size={12} className="mt-0.5 flex-shrink-0 text-gray-400" />
            <span className="text-gray-600 text-xs leading-snug">{member.specialty}</span>
          </div>

          {/* Expertise chips */}
          {member.expertise && member.expertise.length > 0 && (
            <div className="pt-1">
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Areas of Expertise</p>
              <div className="flex flex-wrap gap-1">
                {member.expertise.map((tag) => (
                  <span key={tag} className="text-[9px] font-medium bg-primary/8 text-primary px-2 py-0.5 rounded-full border border-primary/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom strip — experience */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock size={11} className="text-gray-400" />
            <span className="text-[11px] font-medium text-gray-500">{member.experience}</span>
          </div>
          <button
            onClick={onBook}
            className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1"
          >
            Consult <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Category Section ─────────────────────────────────────────────────────────

function CategorySection({ category, onBook }) {
  const meta = CATEGORY_META[category.category]
  const Icon = meta.icon
  return (
    <section className="mb-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl ${meta.bg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <Icon size={24} className="text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
              {category.members.length} Specialists
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{meta.label}</h2>
          </div>
        </div>
        <div className="sm:flex-1 sm:ml-4">
          <div className="hidden sm:block h-px bg-gray-100" />
          <p className="text-sm text-gray-400 mt-1 sm:text-right">{meta.desc}</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {category.members.map((member) => (
          <TeamCard key={member.name} member={member} onBook={() => onBook(member)} />
        ))}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OurTeamPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [consultDoctor, setConsultDoctor] = useState(null)
  const categories = ['All', ...TEAM.map((t) => t.category)]
  const totalCount = TEAM.reduce((s, c) => s + c.members.length, 0)
  const filtered = activeFilter === 'All' ? TEAM : TEAM.filter((t) => t.category === activeFilter)

  return (
    <>
      {/* ── Consultation Modal ── */}
      {consultDoctor && (
        <ConsultationModal
          doctor={consultDoctor}
          onClose={() => setConsultDoctor(null)}
        />
      )}

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#EEF4FF] via-white to-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/30 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #4793F3 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">Our Team</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Individually Verified Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                Meet the Specialists <br />
                <span className="text-primary">Behind Your Care</span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Every specialist is verified for qualifications, hospital affiliations, and patient outcomes.
                We match you to the right expert for your condition — in India or Turkey.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: `${totalCount} Verified Specialists`, icon: '✓' },
                  { label: 'JCI-Accredited Hospitals', icon: '🏥' },
                  { label: 'India & Turkey', icon: '🌍' },
                  { label: 'Free Second Opinion', icon: '💬' },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 shadow-sm">
                    <span>{icon}</span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4 flex-shrink-0">
              {[
                { value: '15+', label: 'Verified Specialists', color: 'text-blue-600' },
                { value: '4', label: 'Expert Categories', color: 'text-violet-600' },
                { value: '2', label: 'Countries', color: 'text-emerald-600' },
                { value: '24h', label: 'Response Time', color: 'text-amber-600' },
              ].map(({ value, label, color }) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                  <p className={`text-3xl font-bold ${color}`}>{value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Tabs ── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => {
              const meta = cat !== 'All' ? CATEGORY_META[cat] : null
              const Icon = meta?.icon
              const isActive = activeFilter === cat
              const count = cat === 'All'
                ? totalCount
                : (TEAM.find((t) => t.category === cat)?.members.length ?? 0)
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                  }`}
                >
                  {Icon && <Icon size={14} strokeWidth={2} />}
                  {cat}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-white text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Team Grid ── */}
      <div className="bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          {filtered.map((category) => (
            <CategorySection key={category.category} category={category} onBook={setConsultDoctor} />
          ))}
        </div>
      </div>

      {/* ── How We Match You ── */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">How We Match You</p>
            <h2 className="text-2xl sm:text-3xl font-bold">Connected to the right specialist in 3 simple steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Share Your Reports',
                desc: 'Upload your medical records securely. Our coordinators review your case within 24 hours.',
                icon: '📋',
              },
              {
                step: '02',
                title: 'Receive Specialist Matches',
                desc: 'We shortlist 2–3 verified specialists best suited to your diagnosis, budget, and destination.',
                icon: '🎯',
              },
              {
                step: '03',
                title: 'Book Your Free First Consultation',
                desc: 'Schedule a video consultation with your matched specialist before you travel — no obligation.',
                icon: '📞',
              },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/25 text-blue-300 flex items-center justify-center text-sm font-bold">
                    {step}
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-2">{icon}</div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-medium">Free specialist matching — no fees, no obligation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Not sure which specialist you need?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Share your medical reports and our patient coordinators will recommend the right expert
            for your condition — completely free of charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get a Free Specialist Match
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-colors border border-white/30"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
