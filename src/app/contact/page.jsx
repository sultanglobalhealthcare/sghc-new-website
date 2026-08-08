'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle, Mail,
  Clock, MapPin, Shield, CheckCircle2, Send, Loader2, User, FileText,
} from 'lucide-react'

// ── Contact methods ────────────────────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: 'Call us',
    value: '+1-610-787-0713',
    detail: 'Mon–Fri · 9 am–6 pm ET',
    href: 'tel:+16107870713',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    detail: 'Fastest — usually within 1 hour',
    href: 'https://wa.me/16107870713',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sultanghc.com',
    detail: 'Response within 24 hours',
    href: 'mailto:info@sultanghc.com',
    color: 'bg-primary/5 border-primary/15',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
]

const SUBJECTS = [
  'General Inquiry',
  'Treatment Inquiry',
  'Request a Cost Estimate',
  'Hospital or Doctor Information',
  'Visa & Travel Assistance',
  'Book a Consultation',
  'Partnership or Referral',
  'Other',
]

// ── Form ──────────────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-14 px-6 bg-green-50 border border-green-200 rounded-3xl h-full min-h-[420px]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle2 size={30} className="text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent!</h3>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs mb-6">
          Thank you for reaching out. A Patient Care Coordinator will reply within 24 hours. Check your inbox — we have sent you a confirmation.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-green-700 hover:underline"
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="name"
              type="text"
              placeholder="John Smith"
              className={`w-full pl-9 pr-4 py-2.5 text-sm border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
              {...register('name', { required: 'Name is required' })}
            />
          </div>
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className={`w-full pl-9 pr-4 py-2.5 text-sm border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
              })}
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="phone">
            Phone Number <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              {...register('phone')}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="subject">
            Subject <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FileText size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <select
              id="subject"
              className={`w-full pl-9 pr-4 py-2.5 text-sm border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none ${errors.subject ? 'border-red-400' : 'border-gray-200'}`}
              {...register('subject', { required: 'Please select a subject' })}
              defaultValue=""
            >
              <option value="" disabled>Select a subject…</option>
              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your condition, which treatment you are considering, or anything you would like to know…"
          className={`w-full px-4 py-3 text-sm border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
          {...register('message', { required: 'Please enter your message', minLength: { value: 20, message: 'Message must be at least 20 characters' } })}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* Error state */}
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or reach us directly on WhatsApp at +1-610-787-0713.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {status === 'submitting' ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        We respond within 24 hours. Your information is handled confidentially per our{' '}
        <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Contact Us</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              We are here to help
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              Speak to a Patient Care Coordinator
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you have a question, need a cost estimate, or are ready to start — reach us by form, phone, WhatsApp, or email. No cost. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Main two-col layout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">

            {/* Left — contact methods + info */}
            <div className="flex flex-col gap-8">

              {/* Contact cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                {CONTACT_METHODS.map(({ icon: Icon, label, value, detail, href, color, iconBg, iconColor, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`group rounded-2xl border p-5 flex flex-col gap-3 hover:shadow-md transition-all ${color}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
                      <Icon size={18} className={iconColor} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-gray-900 leading-snug">{value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                    </div>
                    <span className="text-xs font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                      Contact <ArrowRight size={11} />
                    </span>
                  </a>
                ))}
              </div>

              {/* Hours + address */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">Office hours</p>
                    <p className="text-sm text-gray-600">Monday – Friday · 9:00 am – 6:00 pm Eastern Time</p>
                    <p className="text-xs text-gray-400 mt-1">WhatsApp available 7 days for urgent inquiries</p>
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">Based in the United States</p>
                    <p className="text-sm text-gray-600">Serving patients across all 50 states</p>
                    <p className="text-xs text-gray-400 mt-1">Partner hospitals in India & Turkey</p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-4">What happens after you contact us</h2>
                <div className="space-y-3">
                  {[
                    { n: '01', title: 'We review your case', desc: 'Within 24–48 hours, a dedicated coordinator reviews your condition and requirements.' },
                    { n: '02', title: 'You are matched with a specialist', desc: 'We identify the right hospital and surgeon for your diagnosis, budget, and destination.' },
                    { n: '03', title: 'You receive a full plan', desc: 'Treatment options, cost estimates, visa guidance, and travel logistics — in one document.' },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <span className="text-xl font-bold text-primary/25 shrink-0 leading-none">{n}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800 mb-0.5">{title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Shield,        label: 'Free — no obligation' },
                  { icon: CheckCircle2,  label: 'Confidential & secure' },
                  { icon: Clock,         label: '24-hour response' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <p className="text-xs font-medium text-gray-600 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="mb-7">
                <h2 className="text-xl font-semibold text-gray-900 mb-1.5">Send us a message</h2>
                <p className="text-sm text-gray-500">We reply within 24 hours. You will also receive a confirmation email.</p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Need a full medical opinion or cost estimate?</h2>
          <p className="text-white/80 text-sm mb-7 leading-relaxed max-w-lg mx-auto">
            Use our detailed enquiry form to upload medical reports and describe your condition. We will provide hospital options, a specialist match, and a full cost comparison.
          </p>
          <Link href="/enquiry"
            className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
            Submit a Full Enquiry <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
