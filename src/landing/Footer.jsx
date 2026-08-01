'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Facebook, Instagram, Twitter, Linkedin, Youtube,
  ShieldCheck, Globe2, HeartHandshake,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const COMPANY_LINKS = [
  { name: 'About Sultan GHC',        href: '/about' },
  { name: 'Why Choose Sultan GHC',   href: '/why-sultan-ghc' },
  { name: 'How It Works',            href: '/how-it-works' },
  { name: 'Patient Success Stories', href: '/patient-success-stories' },
  { name: 'Testimonials',            href: '/testimonials' },
  { name: 'Contact Us',              href: '/contact' },
]

const TREATMENT_LINKS = [
  { name: 'Cardiology',        href: '/treatments/cardiology' },
  { name: 'Oncology',          href: '/treatments/oncology' },
  { name: 'Orthopedics',       href: '/treatments/orthopedics' },
  { name: 'Spine Surgery',     href: '/treatments/spine-surgery' },
  { name: 'IVF & Fertility',   href: '/treatments/ivf-fertility' },
  { name: 'Organ Transplants', href: '/treatments/organ-transplants' },
  { name: 'Cosmetic Surgery',  href: '/treatments/cosmetic-plastic-surgery' },
  { name: 'Dental Care',       href: '/treatments/dental-care' },
]

const HOSPITAL_LINKS = [
  { name: 'Hospitals in India',  href: '/hospitals/india' },
  { name: 'Hospitals in Turkey', href: '/hospitals/turkey' },
]

const DESTINATION_LINKS = [
  { name: 'India',  href: '/destinations/india' },
  { name: 'Turkey', href: '/destinations/turkey' },
]

const RESOURCE_LINKS = [
  { name: 'Blog',                      href: '/blog' },
  { name: 'Medical Tourism Guide',     href: '/resources/medical-tourism-guide' },
  { name: 'Treatment Cost Comparison', href: '/resources/cost-comparison' },
  { name: 'Patient Stories',           href: '/patient-stories' },
  { name: 'FAQs',                      href: '/faq' },
]

const LEGAL_LINKS = [
  { name: 'Privacy Policy',        href: '/privacy-policy' },
  { name: 'Terms & Conditions',    href: '/terms' },
  { name: 'Cookie Policy',         href: '/cookie-policy' },
  { name: 'Disclaimer',            href: '/disclaimer' },
  { name: 'Accessibility Statement', href: '/accessibility' },
]

const SOCIAL_LINKS = [
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter,   href: '#', label: 'X (Twitter)' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { Icon: Youtube,   href: '#', label: 'YouTube' },
]

const TRUST_BADGES = [
  { Icon: ShieldCheck,    text: 'Secure Communication' },
  { Icon: Globe2,         text: 'International Patient Support' },
  { Icon: HeartHandshake, text: 'Trusted Healthcare Facilitator' },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function FooterHeading({ children }) {
  return (
    <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
      {children}
    </h3>
  )
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block text-[13px] text-gray-400 hover:text-white py-1 transition-colors leading-snug"
    >
      {children}
    </Link>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-gray-950 text-white mt-20">

      {/* ── Trust Badges Bar ── */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {TRUST_BADGES.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-gray-400">
              <Icon size={16} className="text-primary shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand column — wider */}
          <div className="lg:col-span-3 space-y-5">
            <img
              src="/sghc-new-logo.png"
              alt="Sultan Global Health Care"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Sultan GHC connects U.S. patients with world-class, internationally
              accredited hospitals and specialists in India and Turkey — at transparent,
              affordable costs.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Newsletter</p>
              {subscribed ? (
                <p className="text-sm text-primary">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 min-w-0 bg-white/10 text-white placeholder-gray-500 text-sm px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <div className="space-y-0.5">
              {COMPANY_LINKS.map((l) => <FooterLink key={l.href} href={l.href}>{l.name}</FooterLink>)}
            </div>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-2">
            <FooterHeading>Treatments</FooterHeading>
            <div className="space-y-0.5">
              {TREATMENT_LINKS.map((l) => <FooterLink key={l.href} href={l.href}>{l.name}</FooterLink>)}
              <Link
                href="/treatments"
                className="block text-[13px] text-primary hover:underline py-1 font-medium mt-1"
              >
                View All Treatments →
              </Link>
            </div>
          </div>

          {/* Hospitals + Destinations */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <FooterHeading>Hospitals</FooterHeading>
              <div className="space-y-0.5">
                {HOSPITAL_LINKS.map((l) => <FooterLink key={l.href} href={l.href}>{l.name}</FooterLink>)}
              </div>
            </div>
            <div>
              <FooterHeading>Destinations</FooterHeading>
              <div className="space-y-0.5">
                {DESTINATION_LINKS.map((l) => <FooterLink key={l.href} href={l.href}>{l.name}</FooterLink>)}
              </div>
            </div>
          </div>

          {/* Resources + Contact */}
          <div className="lg:col-span-3 space-y-7">
            <div>
              <FooterHeading>Resources</FooterHeading>
              <div className="space-y-0.5">
                {RESOURCE_LINKS.map((l) => <FooterLink key={l.href} href={l.href}>{l.name}</FooterLink>)}
              </div>
            </div>

            <div>
              <FooterHeading>Contact</FooterHeading>
              <div className="space-y-3 text-[13px] text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <span>United States (USA) — serving patients nationwide</span>
                </div>
                <a href="tel:+16107870713" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} className="text-primary shrink-0" />
                  +1-610-787-0713
                </a>
                <a href="mailto:info@sultanghc.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-primary shrink-0" />
                  info@sultanghc.com
                </a>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle size={14} className="text-primary shrink-0" />
                  Chat on WhatsApp
                </a>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-primary mt-0.5 shrink-0" />
                  <span>Mon – Sat: 9 AM – 7 PM EST</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 justify-center sm:justify-start">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Copyright + credit */}
          <div className="text-center sm:text-right shrink-0">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Sultan Global Health Care. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              Designed & Developed by{' '}
              <Link
                href="https://www.clickdecoded.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-gray-400 transition-colors underline underline-offset-2"
              >
                Click DECODED
              </Link>
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
