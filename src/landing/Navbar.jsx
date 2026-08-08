'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Phone, MessageCircle, Mail } from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

const TREATMENTS = [
  { name: 'Cardiology & Cardiac Surgery',                       href: '/treatments/cardiology' },
  { name: 'Oncology & Cancer Care',                             href: '/treatments/oncology' },
  { name: 'Neurology',                                          href: '/treatments/neurology' },
  { name: 'Neurosurgery',                                       href: '/treatments/neurosurgery' },
  { name: 'Orthopaedics & Joint Replacement',                   href: '/treatments/orthopedics' },
  { name: 'Spine & Sports Injury Surgery',                      href: '/treatments/spine-sports-injury' },
  { name: 'Gastroenterology',                                   href: '/treatments/gastroenterology' },
  { name: 'Hepatology & Liver Care',                            href: '/treatments/hepatology-liver-care' },
  { name: 'Pulmonology & Respiratory Medicine',                 href: '/treatments/pulmonology' },
  { name: 'Urology & Urological Surgery',                       href: '/treatments/urology' },
  { name: 'Obstetrics & Gynaecology',                           href: '/treatments/obstetrics-gynaecology' },
  { name: 'Fertility, IVF & Reproductive Medicine',             href: '/treatments/fertility-ivf' },
  { name: 'Ophthalmology & Eye Surgery',                        href: '/treatments/ophthalmology' },
  { name: 'ENT & Head–Neck Surgery',                            href: '/treatments/ent-head-neck-surgery' },
  { name: 'Bariatric & Metabolic Surgery',                      href: '/treatments/bariatric-metabolic-surgery' },
  { name: 'Robotic & Minimally Invasive Surgery',               href: '/treatments/robotic-minimally-invasive' },
  { name: 'Organ & Bone Marrow Transplantation',                href: '/treatments/organ-bone-marrow-transplant' },
  { name: 'Cosmetic, Hair Transplant & Reconstructive Plastic Surgery', href: '/treatments/cosmetic-hair-transplant-plastic-surgery' },
  { name: 'Dental Surgery & Implant Dentistry',                 href: '/treatments/dental-surgery-implant-dentistry' },
]

// "Our Network" mega-menu data — geography first, hospitals + destination info per country
const NETWORK_INDIA = {
  heading: 'India',
  flag: 'in',
  description: 'JCI-accredited hospitals with world-class specialists at a fraction of U.S. costs.',
  links: [
    { name: 'Hospitals in India',        href: '/hospitals/india' },
    { name: 'Destination Guide — India', href: '/destinations/india' },
    { name: 'Medical Visa — India',      href: '/visa-guide/india' },
    { name: 'Cost Savings in India',     href: '/cost-savings/india' },
  ],
}

const NETWORK_TURKEY = {
  heading: 'Turkey',
  flag: 'tr',
  description: "Istanbul's internationally renowned clinics combining quality care with modern facilities.",
  links: [
    { name: 'Hospitals in Turkey',        href: '/hospitals/turkey' },
    { name: 'Destination Guide — Turkey', href: '/destinations/turkey' },
    { name: 'Medical Visa — Turkey',      href: '/visa-guide/turkey' },
    { name: 'Cost Savings in Turkey',     href: '/cost-savings/turkey' },
  ],
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Treatments',
    mega: true,
    items: TREATMENTS,
  },
  { label: 'Our Team', href: '/our-team' },
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
      // { name: 'Patient Success Stories',     href: '/patient-success-stories' },  // PLANNED — hidden until content is ready
      // { name: 'Testimonials',                href: '/testimonials' },              // PLANNED — hidden until content is ready
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
              {/* Official WhatsApp brand icon */}
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
                              <img src={`https://flagcdn.com/20x15/${country.flag}.png`} width={20} height={15} alt={country.heading} className="rounded-sm inline-block" />
                              {country.heading}
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
                  { name: 'India — Hospitals', href: '/hospitals/india' },
                  { name: 'Destination Guide — India', href: '/destinations/india' },
                  { name: 'Turkey — Hospitals', href: '/hospitals/turkey' },
                  { name: 'Destination Guide — Turkey', href: '/destinations/turkey' },
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
