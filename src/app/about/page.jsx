import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Heart,
  Shield,
  Globe2,
  Users,
  MessageCircle,
  HeartHandshake,
  Lightbulb,
  Star,
  ImageIcon,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'About Sultan GHC | U.S.-Based Global Healthcare Concierge | India & Türkiye',
  description:
    'Sultan Global Health Care (Sultan GHC) is a U.S.-based medical tourism and healthcare concierge company connecting American patients with internationally accredited hospitals in India and Türkiye. Learn about our mission, story, and the team behind your care.',
  keywords: [
    'about Sultan GHC',
    'Sultan Global Health Care',
    'medical tourism company USA',
    'healthcare concierge United States',
    'medical facilitator India Türkiye',
    'Dr Nasar Sultan',
    'Sultan GHC mission',
    'global healthcare concierge',
    'medical tourism facilitator Americans',
    'affordable healthcare abroad USA',
  ],
  openGraph: {
    title: 'About Sultan GHC — U.S.-Based Global Healthcare Concierge',
    description:
      'Sultan GHC connects American patients with world-class, internationally accredited hospitals in India and Türkiye — making quality healthcare accessible, transparent, and affordable.',
    url: 'https://www.sultanghc.com/about',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [{ url: 'https://www.sultanghc.com/api/og?title=About+Sultan+GHC&desc=U.S.-based+medical+tourism+concierge+connecting+American+patients+with+JCI-accredited+hospitals+in+India+%26+Türkiye&cat=About+Us', width: 1200, height: 630, alt: 'About Sultan Global Health Care' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sultan GHC | U.S.-Based Global Healthcare Concierge',
    description: 'Connecting American patients with world-class hospitals in India and Türkiye since day one.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/about' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.sultanghc.com/about' },
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sultan Global Health Care',
  alternateName: 'Sultan GHC',
  url: 'https://www.sultanghc.com',
  logo: 'https://www.sultanghc.com/sghc-new-logo.png',
  description:
    'Sultan GHC is a U.S.-based medical tourism and global healthcare concierge company connecting American patients with internationally accredited hospitals and specialist doctors in India and Türkiye.',
  foundingLocation: { '@type': 'Place', name: 'United States' },
  areaServed: 'United States',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-610-787-0713',
    contactType: 'Patient Services',
    email: 'info@sultanghc.com',
    availableLanguage: 'English',
  },
}

// ─── Image Placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
      aria-label={label}
      role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-blue-400 shrink-0" />
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

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">About Us</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Who We Are
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                We Are Not a Hospital.<br />
                <span className="text-primary">We Are Your Advocate.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Sultan Global Health Care is a United States-based medical tourism and global healthcare
                concierge company. We help American patients access world-class, internationally accredited
                medical care in India and Türkiye — at transparent, affordable costs.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                We are not a hospital. We are not a clinic. We do not provide medical treatment.
                We are your trusted healthcare facilitator — coordinating every step of your
                international medical journey so you can focus entirely on getting better.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Start Your Journey
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/our-team"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <Users size={16} />
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="about-sultan-ghc-healthcare-concierge-team-usa-india-turkey.jpg"
                width={1200}
                height={900}
                label="Sultan GHC team — U.S.-based global healthcare concierge"
                aiPrompt="Professional corporate photography: A diverse, professional team of 4-5 healthcare coordinators in a modern, bright office setting in the United States. They are gathered around a table with laptops, looking confident and collaborative. The office has a premium, clean aesthetic. Some team members appear to be of South Asian and Middle Eastern heritage, reflecting the company's India and Türkiye network. Natural light, photorealistic, Canon R5."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '19',      label: 'Medical specialties in our network',    icon: Star },
              { value: '2',       label: 'Destinations — India and Türkiye',       icon: Globe2 },
              { value: '60–90%',  label: 'Average cost savings vs. U.S. prices', icon: Heart },
              { value: '24 hrs',  label: 'Free first medical opinion turnaround', icon: Shield },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500 leading-snug mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              filename="sultan-ghc-story-mission-global-healthcare-access-usa-patients.jpg"
              width={1200}
              height={900}
              label="Sultan GHC mission — making global healthcare accessible for American patients"
              aiPrompt="Professional concept photography: A warm, empathetic scene of a U.S.-based patient (60s, American appearance) on a video call with a doctor abroad, shown on a laptop screen. The patient looks relieved and hopeful. Clean home office setting, warm lighting. On the desk there is a passport, a medical folder, and a glass of water. Photorealistic, natural, editorial style."
              aspectRatio="4/3"
            />
          </div>

          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              Born from a Simple Belief: Quality Healthcare Should Not Depend on Your Zip Code or Your Insurance Plan.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Sultan GHC was founded by Dr. Nasar A. Sultan, MD, with a clear and personal conviction:
              that millions of Americans deserve access to world-class medical care — not just those
              with premium insurance or the means to afford $80,000 heart surgery.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Having witnessed firsthand the extraordinary quality of internationally accredited hospitals
              in India and Türkiye — and the devastating financial burden that U.S. healthcare places on
              uninsured and underinsured families — Dr. Sultan set out to build a bridge.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Sultan GHC was created to be that bridge. A trusted, transparent, U.S.-based concierge
              that holds your hand through every step — from your first medical opinion to your safe
              return home — while ensuring you receive care that meets international accreditation standards.
            </p>
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
            >
              Meet Dr. Sultan and our full team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Mission & Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              What Drives Everything We Do
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Heart size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed text-base">
                To make world-class healthcare more accessible, transparent, and affordable for
                patients in the United States — by connecting them with internationally accredited
                hospitals and specialist doctors in India and Türkiye through a trusted, end-to-end
                concierge service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Lightbulb size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-base">
                To become the most trusted global healthcare concierge brand connecting U.S. patients
                with internationally recognized hospitals in India and Türkiye — known for our
                compassion, transparency, and the life-changing outcomes we help facilitate for
                every patient who trusts us with their care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Sultan GHC Manages Your Complete Medical Journey
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From your first inquiry to your follow-up care back home — we coordinate every detail
            so you never have to navigate a foreign healthcare system alone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: '🩺', title: 'Medical Case Evaluation',     desc: 'Review of your diagnosis, imaging, and reports by our clinical team — and matching to the right specialist.' },
            { icon: '🏥', title: 'Hospital & Doctor Selection', desc: 'We shortlist JCI-accredited hospitals and fellowship-trained specialists based on your specific condition.' },
            { icon: '💰', title: 'Treatment Cost Estimation',   desc: 'A transparent, itemised cost estimate before you commit — surgical fees, stay, and post-op care included.' },
            { icon: '✈️', title: 'Travel Coordination',         desc: 'Flights, visa guidance, airport transfers, hotel, and local transport — all arranged by your Case Manager.' },
            { icon: '🏨', title: 'Accommodation Assistance',    desc: 'We help arrange comfortable accommodation near the hospital for patients and accompanying family members.' },
            { icon: '🗣️', title: 'Interpreter & Language Support', desc: 'English-speaking coordinators and interpreters at all partner hospitals throughout your stay.' },
            { icon: '📋', title: 'Medical Records Management',  desc: 'We compile, translate, and transmit your records to your treating hospital in the correct format.' },
            { icon: '🔄', title: 'Post-Treatment Follow-Up',    desc: 'Remote check-ins, follow-up coordination, and continuity of care with providers near your home in the U.S.' },
            { icon: '🤝', title: 'Patient Advocacy',            desc: 'A dedicated Case Manager who is your single point of contact — before, during, and after treatment.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <span className="text-2xl mb-4 block">{icon}</span>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/international-patient-services"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
          >
            View our full International Patient Services →
          </Link>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
              The Principles Behind Every Decision We Make
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
              Our values are not a mission statement on a wall. They guide every interaction,
              every hospital recommendation, and every patient conversation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartHandshake, title: 'Compassion',     desc: 'We treat every patient the way we would want a family member treated — with empathy, patience, and genuine care.' },
              { icon: Shield,         title: 'Trust',          desc: 'We recommend only hospitals and doctors we trust completely. Our reputation is built on honest, unbiased guidance.' },
              { icon: Globe2,         title: 'Transparency',   desc: 'No hidden costs, no vague promises. Every cost estimate, every recommendation comes with full clarity and no obligation.' },
              { icon: Star,           title: 'Excellence',     desc: 'JCI accreditation is our minimum standard. We continuously evaluate our partner hospitals against international benchmarks.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Destinations ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Our Destinations
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Two of the World's Leading Medical Tourism Destinations
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We partner exclusively with JCI-accredited hospitals in India and Türkiye —
            two countries globally recognized for exceptional healthcare quality and value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              flag: 'in',
              country: 'India',
              href: '/destinations/india',
              headline: 'World-Class Healthcare at Unmatched Value',
              desc: "India is one of the world's top medical tourism destinations, attracting hundreds of thousands of international patients every year. With JCI-accredited hospitals in Delhi, Mumbai, Chennai, Bengaluru, and Hyderabad — and specialists trained in the U.S., UK, and Germany — India delivers exceptional care at 70–90% lower than U.S. costs.",
              highlights: ['300,000+ international patients annually', 'JCI-accredited hospitals in 6+ major cities', '60–90% cost savings vs. U.S. prices', 'Specialists trained in the U.S., UK & Germany'],
            },
            {
              flag: 'tr',
              country: 'Türkiye',
              href: '/destinations/turkey',
              headline: "Europe's Leading Medical Tourism Hub",
              desc: "Türkiye receives more medical tourists than any other country in Europe. Istanbul, Ankara, and Antalya are home to internationally accredited hospitals operating to European Union standards — with specialists holding fellowships from Germany, France, and the UK. Direct flights from the U.S. East Coast make Türkiye remarkably accessible.",
              highlights: ['150,000+ international patients annually', 'JCI-accredited hospitals in Istanbul & beyond', 'European-standard care and facilities', '10–11 hour direct flight from U.S. East Coast'],
            },
          ].map(({ flag, country, href, headline, desc, highlights }) => (
            <div key={country} className="bg-[#EEF4FF] rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <img src={`https://flagcdn.com/40x30/${flag}.png`} width={40} height={30} alt={country} className="rounded shadow-sm" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">Destination</p>
                  <h3 className="text-xl font-bold text-gray-900">{country}</h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-2">{headline}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
              <div className="space-y-2 mb-6">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
              >
                Explore {country} as a destination →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team CTA ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-3">
                Our Team
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                Meet the Specialists Behind Sultan GHC
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Our network includes fellowship-trained physicians and surgeons across 19 specialties —
                led by our Founder and Medical Director, Dr. Nasar A. Sultan, MD.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/our-team"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                <Users size={16} />
                Meet Our Team
              </Link>
              <Link
                href="/why-sultan-ghc"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                Why Choose Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Ready to Take the First Step?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Share your medical reports today and receive a free specialist opinion,
            recommended hospital, and cost estimate — within 24 hours. No commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free First Medical Opinion
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
