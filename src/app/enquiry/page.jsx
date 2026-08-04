'use client'

import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { PhoneInput } from '@/components/ui/phone-input'
import Image from 'next/image'
import {
  Phone, Mail, Clock, CheckCircle2, ArrowRight,
  Shield, Upload, X, ChevronRight,
} from 'lucide-react'

// ── Constants ──────────────────────────────────────────────────────────────────

const TREATMENTS = [
  'Cardiology', 'Oncology', 'Orthopedics', 'Neurology',
  'IVF & Fertility', 'Spine Surgery', 'Kidney Transplant',
  'Liver Transplant', 'Bariatric Surgery', 'Other',
]

const DESTINATIONS = [
  { id: 'india',  label: 'India',       code: 'in', desc: '80% savings · JCI hospitals'   },
  { id: 'turkey', label: 'Turkey',      code: 'tr', desc: 'European standards · Istanbul' },
  { id: 'best',   label: 'Best Option', code: null,  desc: 'Let our team recommend'        },
]

const WHAT_NEXT = [
  { n: '01', title: 'We review your case',      desc: 'Within 24–48 hours of submission.'                  },
  { n: '02', title: 'Coordinator assigned',     desc: 'Your personal case manager reaches out directly.'   },
  { n: '03', title: 'You receive a plan',       desc: 'Hospital options, specialists & a cost estimate.'   },
]

const TRUST_STATS = [
  { icon: '🏥', stat: '50+',    label: 'Accredited Hospitals' },
  { icon: '👨‍⚕️', stat: '200+',  label: 'Specialist Doctors'   },
  { icon: '💰', stat: '80%',    label: 'Average U.S. Savings' },
  { icon: '⚡', stat: '24–48h', label: 'Response Guarantee'   },
]

const MAX_SIZE = 3 * 1024 * 1024 // 3 MB

// ── WhatsApp Icon ──────────────────────────────────────────────────────────────

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ── Hero image (real) ─────────────────────────────────────────────────────────

function HeroImage() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-100" style={{ aspectRatio: '4/3' }}>
      <Image
        src="/enquiry/contact-us-patient-coordinator-medical-tourism-sultan-ghc.jpg"
        alt="Patient coordinator helping a U.S. patient plan their medical journey abroad with Sultan GHC"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}

// ── Input class helper ────────────────────────────────────────────────────────

const inputCls = (hasError) =>
  `w-full border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15 ${
    hasError
      ? 'border-red-300 bg-red-50'
      : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white'
  }`

// ── Main Component ────────────────────────────────────────────────────────────

export default function EnquiryPage() {
  const {
    register, handleSubmit, reset, control, watch, setValue,
    formState: { errors, isSubmitting },
  } = useForm()

  const [errMsg, setErrMsg]               = useState('')
  const [success, setSuccess]             = useState(false)
  const [selectedTreatments, setSelected] = useState([])
  const [selectedDest, setDest]           = useState('')
  const [isDragging, setDragging]         = useState(false)

  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      if (!file) return resolve('')
      const reader = new FileReader()
      reader.onload  = () => resolve(reader.result)
      reader.onerror = (err) => reject(err)
      reader.readAsDataURL(file)
    })

  const toggleTreatment = (t) =>
    setSelected((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    )

  const onSubmit = async (data) => {
    setErrMsg('')
    try {
      const file = data.image?.[0]
      if (file && file.size > MAX_SIZE) {
        setErrMsg('File too large — maximum 3 MB per attachment.')
        return
      }
      const imageDataUrl = file ? await fileToDataUrl(file) : ''

      const extras = [
        selectedTreatments.length
          ? `Treatment Interest: ${selectedTreatments.join(', ')}`
          : '',
        selectedDest
          ? `Preferred Destination: ${
              selectedDest === 'best'
                ? 'Best option (team to decide)'
                : selectedDest.charAt(0).toUpperCase() + selectedDest.slice(1)
            }`
          : '',
        data.message,
      ]
        .filter(Boolean)
        .join('\n\n')

      const payload = {
        firstName: data.firstName || '',
        lastName:  data.lastName  || '',
        email:     data.email     || '',
        phone:     data.phone     || '',
        message:   extras,
        ...(imageDataUrl && { image: imageDataUrl }),
      }

      await axios.post('/api/submit-enquiry', payload, {
        headers: { 'Content-Type': 'application/json' },
      })

      setSuccess(true)
      reset()
      setSelected([])
      setDest('')
    } catch (err) {
      console.error(err)
      setErrMsg('Submission failed. Please try again or reach us on WhatsApp.')
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      try {
        const dt = new DataTransfer()
        dt.items.add(file)
        setValue('image', dt.files, { shouldDirty: true, shouldValidate: true })
      } catch {
        document.getElementById('image-input')?.click()
      }
    }
  }

  const currentFile = watch('image')?.[0]

  // ── Success screen ─────────────────────────────────────────────────────────

  if (success) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#EEF4FF] via-white to-white">
        <div className="max-w-lg text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30" />
            <div className="relative w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 size={40} className="text-green-500" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Enquiry received!</h2>
          <p className="text-gray-500 leading-relaxed mb-3">
            A dedicated patient coordinator will reach out within{' '}
            <strong className="text-gray-700">24–48 hours</strong>.
            In the meantime you can chat with us instantly on WhatsApp.
          </p>
          <p className="text-xs text-gray-400 mb-8">
            Please also check your spam/junk folder for our email confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-green-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setSuccess(false)}
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold px-7 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ── Main page ──────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Hero strip ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#EEF4FF] via-white to-white border-b border-[#d9e6ff] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">

          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Contact Us</span>
          </nav>

          {/* Hero layout: text+stats left | illustration right */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT: text + trust stats */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Responding within 24–48 hours</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Begin Your{' '}
                <span className="text-primary">Healthcare Journey</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mb-8">
                Share your case — our patient coordinators will match you with the right
                specialist, hospital, and destination. No obligation. Completely confidential.
              </p>

              {/* Trust stats 2×2 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                {TRUST_STATS.map(({ icon, stat, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1 bg-white border border-gray-100 rounded-2xl px-3 py-3.5 shadow-sm text-center"
                  >
                    <span className="text-xl">{icon}</span>
                    <p className="text-lg font-bold text-gray-900 leading-none">{stat}</p>
                    <p className="text-[10px] text-gray-400 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: illustration placeholder */}
            <div className="relative hidden lg:block">
              <HeroImage />
            </div>

          </div>
        </div>
      </section>

      {/* ── Main grid ────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-18">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16">

          {/* ── LEFT: contact info ────────────────────────────────────────────── */}
          <div className="space-y-7">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1.5">We're here to help</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Speak with a real person — not a chatbot. Our patient coordinators
                are trained to understand your situation and guide you forward.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">

              <a
                href="tel:+16107870713"
                className="group flex items-center gap-4 bg-white border border-gray-100 hover:border-primary/30 hover:shadow-md rounded-2xl p-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Phone size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">USA & Canada</p>
                  <p className="text-base font-bold text-gray-900">+1-610-787-0713</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              <a
                href="https://wa.me/16107870713"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-green-50 border border-green-100 hover:border-green-400 hover:shadow-md rounded-2xl p-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                  <WhatsAppIcon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-green-600/70 uppercase tracking-wider mb-0.5">International · WhatsApp</p>
                  <p className="text-base font-bold text-gray-900">Chat Instantly</p>
                  <p className="text-xs text-gray-400 mt-0.5">Typically replies within minutes</p>
                </div>
                <ArrowRight size={14} className="text-green-300 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              <a
                href="mailto:info@sultanghc.com"
                className="group flex items-center gap-4 bg-white border border-gray-100 hover:border-primary/30 hover:shadow-md rounded-2xl p-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Mail size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-base font-bold text-gray-900">info@sultanghc.com</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Office Hours</p>
                  <p className="text-sm font-semibold text-gray-700">Mon – Sat: 9 AM – 7 PM EST</p>
                  <p className="text-xs text-gray-400 mt-0.5">WhatsApp support available 24/7</p>
                </div>
              </div>

            </div>

            {/* What happens next */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                What happens after you submit
              </p>
              <div className="space-y-4">
                {WHAT_NEXT.map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy note */}
            <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <Shield size={17} className="text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 leading-relaxed">
                Your information is handled with HIPAA-equivalent confidentiality.
                We never sell or share your data without explicit consent.{' '}
                <a href="/privacy-policy" className="text-primary underline">Privacy Policy →</a>
              </p>
            </div>

          </div>

          {/* ── RIGHT: Form card ──────────────────────────────────────────────── */}
          <div>
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8">

              <h2 className="text-xl font-bold text-gray-900 mb-0.5">Make an Enquiry</h2>
              <p className="text-sm text-gray-400 mb-6">Your first consultation is free. No obligation.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>

                {/* ── STEP 1: Personal details ── */}
                <div className="space-y-4">

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Jane"
                        {...register('firstName', { required: 'Required' })}
                        className={inputCls(errors.firstName)}
                      />
                      {errors.firstName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        {...register('lastName', { required: 'Required' })}
                        className={inputCls(errors.lastName)}
                      />
                      {errors.lastName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                      })}
                      className={inputCls(errors.email)}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: 'Phone number is required' }}
                      render={({ field }) => (
                        <PhoneInput
                          value={field.value || ''}
                          onChange={(value) => field.onChange(value)}
                          placeholder="Enter phone number"
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                </div>

                <div className="h-px bg-gray-100" />

                {/* ── STEP 2: Treatment & destination ── */}

                {/* Treatment chips */}
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                    What are you seeking treatment for?{' '}
                    <span className="font-normal text-gray-400 normal-case">(select all that apply)</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {TREATMENTS.map((t) => {
                      const active = selectedTreatments.includes(t)
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleTreatment(t)}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                            active
                              ? 'bg-primary text-white border-primary shadow-sm shadow-primary/20'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary hover:bg-blue-50'
                          }`}
                        >
                          {active && <span className="mr-1">✓</span>}
                          {t}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Destination selector */}
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                    Preferred destination{' '}
                    <span className="font-normal text-gray-400 normal-case">(optional)</span>
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {DESTINATIONS.map(({ id, label, code, desc }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setDest(id === selectedDest ? '' : id)}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border text-center transition-all ${
                          selectedDest === id
                            ? 'bg-primary/5 border-primary shadow-sm'
                            : 'bg-gray-50 border-gray-200 hover:border-primary/30 hover:bg-blue-50/50'
                        }`}
                      >
                        {code ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={`https://flagcdn.com/w40/${code}.png`}
                            alt={label}
                            width={28}
                            height={21}
                            className="rounded-[3px] shadow-sm"
                          />
                        ) : (
                          <span className="text-xl">🌐</span>
                        )}
                        <p className={`text-xs font-bold leading-none ${selectedDest === id ? 'text-primary' : 'text-gray-700'}`}>
                          {label}
                        </p>
                        <p className="text-[10px] text-gray-400 leading-snug">{desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                {/* ── STEP 3: Message & reports ── */}

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Tell us about your condition <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your medical situation, any diagnoses you have received, what treatment you are exploring, and any questions you have..."
                    {...register('message', { required: 'Please describe your situation' })}
                    className={`${inputCls(errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Attach Medical Reports{' '}
                    <span className="font-normal text-gray-400">(optional)</span>
                  </label>
                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-2 mb-2.5 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="text-[10px] text-blue-700 font-semibold">📋 Accepted formats:</p>
                    <p className="text-[10px] text-blue-600">JPG · PNG · PDF · max 3 MB per file</p>
                    <p className="text-[10px] text-gray-500">Lab reports, X-rays, MRI/CT scans, discharge summaries, prescriptions</p>
                  </div>

                  {currentFile ? (
                    <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Upload size={14} className="text-primary" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium flex-1 min-w-0 truncate">
                        {currentFile.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById('image-input')
                          if (el) el.value = ''
                          setValue('image', undefined, { shouldDirty: true })
                        }}
                        className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Remove file"
                      >
                        <X size={12} className="text-red-500" />
                      </button>
                    </div>
                  ) : (
                    <div
                      role="button"
                      tabIndex={0}
                      aria-label="Upload file"
                      className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all select-none ${
                        isDragging
                          ? 'border-primary bg-blue-50 scale-[1.01]'
                          : 'border-gray-200 bg-gray-50 hover:border-primary/50 hover:bg-blue-50/40'
                      }`}
                      onClick={() => document.getElementById('image-input')?.click()}
                      onKeyDown={(e) => e.key === 'Enter' && document.getElementById('image-input')?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleDrop}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          isDragging ? 'bg-primary/20' : 'bg-gray-200'
                        }`}
                      >
                        <Upload size={18} className={isDragging ? 'text-primary' : 'text-gray-400'} />
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        {isDragging ? 'Drop to attach' : 'Drag & drop or click to upload'}
                      </p>
                      <p className="text-xs text-gray-400">Lab reports, X-rays, MRI/CT scans · max 3 MB</p>
                    </div>
                  )}

                  <input
                    id="image-input"
                    {...register('image')}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary active:blur-[0.5px] active:scale-[0.98] transition-all font-bruno group shadow-xl shadow-blue-600/20 flex items-center justify-between pr-1 py-1 pl-6 gap-6 border border-primary/30 rounded-full disabled:opacity-70"
                >
                  <p className="text-white text-sm font-semibold">
                    {isSubmitting ? 'Sending your enquiry…' : 'Send My Enquiry'}
                  </p>
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white overflow-hidden shrink-0">
                    <img
                      className="w-7 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-300"
                      src="/send-plane.svg"
                      alt=""
                    />
                    <img
                      className="w-7 absolute -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"
                      src="/send-plane.svg"
                      alt=""
                    />
                  </div>
                </button>

                {errMsg && (
                  <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm text-red-600">
                    {errMsg}{' '}
                    <a
                      href="https://wa.me/16107870713"
                      className="underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp instead →
                    </a>
                  </div>
                )}

                <p className="text-[11px] text-gray-400 text-center leading-relaxed pt-1">
                  By submitting you agree to our{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>.
                  Sultan GHC does not provide medical advice, diagnosis, or treatment.
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ── Bottom WhatsApp strip ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-base">Prefer to chat directly?</p>
              <p className="text-green-100 text-sm">Our team is available on WhatsApp — real people, real answers.</p>
            </div>
          </div>
          <a
            href="https://wa.me/16107870713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-green-600 font-bold px-7 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-green-500" />
            Start WhatsApp Chat
          </a>
        </div>
      </section>
    </>
  )
}
