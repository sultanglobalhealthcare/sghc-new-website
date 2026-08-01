'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Search, Menu, X, Phone, MessageCircle, Mail } from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

const TREATMENTS = [
  { name: 'Cardiology',                href: '/treatments/cardiology' },
  { name: 'Oncology (Cancer Care)',    href: '/treatments/oncology' },
  { name: 'Orthopedics',              href: '/treatments/orthopedics' },
  { name: 'Spine Surgery',            href: '/treatments/spine-surgery' },
  { name: 'Neurosurgery',             href: '/treatments/neurosurgery' },
  { name: 'IVF & Fertility',          href: '/treatments/ivf-fertility' },
  { name: 'Organ Transplants',        href: '/treatments/organ-transplants' },
  { name: 'Cosmetic & Plastic Surgery', href: '/treatments/cosmetic-plastic-surgery' },
  { name: 'Dental Care',              href: '/treatments/dental-care' },
  { name: 'Ophthalmology',            href: '/treatments/ophthalmology' },
  { name: 'Urology',                  href: '/treatments/urology' },
  { name: 'Gastroenterology',         href: '/treatments/gastroenterology' },
  { name: 'Bariatric Surgery',        href: '/treatments/bariatric-surgery' },
  { name: 'Gynecology',               href: '/treatments/gynecology' },
  { name: 'Robotic Surgery',          href: '/treatments/robotic-surgery' },
]

// "Our Network" mega-menu data — geography first, hospitals + destination info per country
const NETWORK_INDIA = {
  heading: 'India',
  flag: '🇮🇳',
  description: 'JCI-accredited hospitals with world-class specialists at a fraction of U.S. costs.',
  links: [
    { name: 'Hospitals in India',        href: '/hospitals/india' },
    { name: 'Destination Guide — India', href: '/destinations/india' },
    { name: 'Medical Visa — India',      href: '/destinations/india#visa' },
    { name: 'Cost Savings in India',     href: '/destinations/india#costs' },
  ],
}

const NETWORK_TURKEY = {
  heading: 'Turkey',
  flag: '🇹🇷',
  description: "Istanbul's internationally renowned clinics combining quality care with modern facilities.",
  links: [
    { name: 'Hospitals in Turkey',        href: '/hospitals/turkey' },
    { name: 'Destination Guide — Turkey', href: '/destinations/turkey' },
    { name: 'Medical Visa — Turkey',      href: '/destinations/turkey#visa' },
    { name: 'Cost Savings in Turkey',     href: '/destinations/turkey#costs' },
  ],
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Treatments',
    mega: true,
    items: TREATMENTS,
  },
  { label: 'Doctors', href: '/doctors' },
  {
    label: 'Our Network',
    megaNetwork: true,
    india: NETWORK_INDIA,
    turkey: NETWORK_TURKEY,
  },
  { label: 'How It Works', href: '/how-it-works' },
  {
    label: 'Why Sultan GHC',
    items: [
      { name: 'About Us',                       href: '/about' },
      { name: 'Why Choose Sultan GHC',          href: '/why-sultan-ghc' },
      { name: 'International Patient Services', href: '/international-patient-services' },
      { name: 'Patient Success Stories',        href: '/patient-success-stories' },
      { name: 'Testimonials',                   href: '/testimonials' },
      { name: 'Frequently Asked Questions',     href: '/faq' },
    ],
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false)
  const [activeMenu, setActiveMenu]     = useState(null)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  // Scroll-aware shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Desktop hover helpers — small delay prevents flickering when moving between trigger and menu
  const openMenu      = (label) => { clearTimeout(closeTimer.current); setActiveMenu(label) }
  const scheduleClose = ()      => { closeTimer.current = setTimeout(() => setActiveMenu(null), 160) }
  const cancelClose   = ()      => clearTimeout(closeTimer.current)

  const closeMobile   = ()      => { setMobileOpen(false); setMobileExpanded(null) }
  const toggleExpand  = (label) => setMobileExpanded((p) => (p === label ? null : label))

  return (
    <>
      {/* ── Top Contact Bar ── */}
      <div className="w-full bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-10 flex items-center justify-between gap-4">

          {/* Left — contact info */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+16107870713"
              className="hidden sm:flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-primary transition-colors"
            >
              <Phone size={11} className="text-primary" />
              +1-610-787-0713
            </a>
            <a
              href="mailto:info@sultanghc.com"
              className="hidden md:flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-primary transition-colors"
            >
              <Mail size={11} className="text-primary" />
              info@sultanghc.com
            </a>
            <a
              href="tel:+16107870713"
              className="flex sm:hidden items-center gap-1.5 text-[12px] text-gray-500 hover:text-primary transition-colors"
            >
              <Phone size={11} className="text-primary" />
              +1-610-787-0713
            </a>
          </div>

          {/* Right — CTA buttons */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+16107870713"
              className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              <Phone size={11} />
              Call Now
            </a>
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              <MessageCircle size={11} />
              WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* ── Header ── */}
      <header
        className={`sticky top-0 w-full z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-[0_2px_20px_rgba(71,147,243,0.12)]' : 'border-b border-[#d9e6ff]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <img
              src="/sghc-new-logo.png"
              alt="Sultan Global Health Care"
              className="h-10 w-auto"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.items || item.megaNetwork
              if (!hasDropdown) {
                // Plain link
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-[13px] font-medium text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={activeMenu === item.label}
                    className={`flex items-center gap-0.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      activeMenu === item.label
                        ? 'text-primary bg-blue-50'
                        : 'text-gray-700 hover:text-primary hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`mt-px transition-transform duration-200 ${
                        activeMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* ── Treatments Mega Menu ── */}
                  {item.mega && activeMenu === item.label && (
                    <div
                      role="menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
                        Treatment Categories
                      </p>
                      <div className="grid grid-cols-3 gap-y-0.5 gap-x-4">
                        {item.items.map((t) => (
                          <Link
                            key={t.href}
                            href={t.href}
                            role="menuitem"
                            onClick={() => setActiveMenu(null)}
                            className="text-[13px] text-gray-600 hover:text-primary px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            {t.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href="/treatments"
                          onClick={() => setActiveMenu(null)}
                          className="text-[13px] font-semibold text-primary hover:underline"
                        >
                          View All Treatments →
                        </Link>
                        <Link
                          href="/enquiry"
                          onClick={() => setActiveMenu(null)}
                          className="text-[13px] bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                        >
                          Get Free Consultation
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ── Our Network Mega Menu ── */}
                  {item.megaNetwork && activeMenu === item.label && (
                    <div
                      role="menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
                        Our Healthcare Destinations
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        {[item.india, item.turkey].map((country) => (
                          <div key={country.heading}>
                            <p className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                              <span>{country.flag}</span> {country.heading}
                            </p>
                            <p className="text-[12px] text-gray-400 mb-3 leading-snug">
                              {country.description}
                            </p>
                            <div className="space-y-0.5">
                              {country.links.map((l) => (
                                <Link
                                  key={l.href}
                                  href={l.href}
                                  role="menuitem"
                                  onClick={() => setActiveMenu(null)}
                                  className="block text-[13px] text-gray-600 hover:text-primary px-2 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                                >
                                  {l.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="/enquiry"
                          onClick={() => setActiveMenu(null)}
                          className="text-[13px] font-semibold text-primary hover:underline"
                        >
                          Plan Your Medical Journey →
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ── Simple Dropdown (Why Sultan GHC) ── */}
                  {item.items && !item.mega && activeMenu === item.label && (
                    <div
                      role="menu"
                      className="absolute top-full right-0 mt-3 min-w-[230px] bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          role="menuitem"
                          onClick={() => setActiveMenu(null)}
                          className="block px-4 py-2.5 text-[13px] text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search */}
            <button
              aria-label="Search"
              className="hidden xl:flex w-9 h-9 items-center justify-center rounded-full text-gray-500 hover:text-primary hover:bg-blue-50 transition-colors"
            >
              <Search size={17} />
            </button>

            {/* CTA */}
            <Link
              href="/enquiry"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all whitespace-nowrap"
            >
              Get Free Consultation
            </Link>

            {/* Hamburger */}
            <button
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        role="presentation"
        className={`fixed inset-0 bg-black/40 z-[60] xl:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobile}
      />

      {/* ── Mobile Off-canvas Drawer ── */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[70] xl:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <img src="/sghc-new-logo.png" alt="Sultan Global Health Care" className="h-8 w-auto" />
          <button
            aria-label="Close menu"
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile navigation links">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = item.items || item.megaNetwork

            if (!hasDropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            }

            // Flatten Our Network into a single list for mobile
            const mobileLinks = item.megaNetwork
              ? [
                  { name: `${item.india.flag} India — Hospitals`, href: '/hospitals/india' },
                  { name: `${item.india.flag} Destination Guide — India`, href: '/destinations/india' },
                  { name: `${item.turkey.flag} Turkey — Hospitals`, href: '/hospitals/turkey' },
                  { name: `${item.turkey.flag} Destination Guide — Turkey`, href: '/destinations/turkey' },
                ]
              : item.items

            return (
              <div key={item.label}>
                <button
                  aria-expanded={mobileExpanded === item.label}
                  onClick={() => toggleExpand(item.label)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === item.label ? 'rotate-180 text-primary' : 'text-gray-400'
                    }`}
                  />
                </button>

                {mobileExpanded === item.label && (
                  <div className="ml-3 mb-1 border-l-2 border-blue-100 pl-3 pb-1">
                    {mobileLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMobile}
                        className="block py-2.5 px-2 text-sm text-gray-500 hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                    {item.mega && (
                      <Link
                        href="/treatments"
                        onClick={closeMobile}
                        className="block py-2.5 px-2 text-sm font-semibold text-primary"
                      >
                        View All Treatments →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Drawer footer — sticky CTA + contact buttons */}
        <div className="p-4 border-t border-gray-100 space-y-2 shrink-0">
          <Link
            href="/enquiry"
            onClick={closeMobile}
            className="flex items-center justify-center w-full bg-primary text-white text-sm font-semibold py-3 rounded-full shadow-md shadow-primary/20 active:scale-95 transition-all"
          >
            Get Free Consultation
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+16107870713"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={14} />
              Call Us
            </a>
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
