import Link from 'next/link'
import {
  ChevronRight, ArrowRight, MapPin, Clock,
  MessageCircle, CheckCircle2, Heart, Camera,
  Coffee, Shield, Star, Plane, Calendar,
} from 'lucide-react'

export const metadata = {
  title: 'Tourist Attractions in Türkiye for Medical Travelers | Sultan GHC',
  description:
    'Explore Türkiye\'s most iconic destinations while recovering from medical treatment. City guides tied to hospital locations in Istanbul — with Cappadocia, Pamukkale, Ephesus & the Turkish Riviera. Curated for U.S. patients by Sultan GHC.',
  keywords: [
    'tourist places Türkiye medical tourism',
    'things to do in Türkiye after surgery',
    'Türkiye travel guide medical tourists Americans',
    'Istanbul sightseeing medical trip',
    'Cappadocia medical tourism',
    'Pamukkale thermal pools recovery',
    'Türkiye tourist attractions recovery friendly',
    'Sultan GHC Türkiye travel guide',
    'Türkiye itinerary medical tourism USA',
  ],
  openGraph: {
    title: 'Tourist Attractions in Türkiye | Travel Guide for Medical Patients | Sultan GHC',
    description: 'Hagia Sophia, Cappadocia hot air balloons, Pamukkale thermal pools, and the Turkish Riviera — curated for U.S. medical tourists.',
    url: 'https://www.sultanghc.com/destinations/turkey/tourist-attractions',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourist Attractions in Türkiye for Medical Travelers | Sultan GHC',
    description: 'Explore Türkiye before or after your treatment. City guides, hammam wellness, and sample itineraries for U.S. patients.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/destinations/turkey/tourist-attractions' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',               item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Destinations',       item: 'https://www.sultanghc.com/destinations/turkey' },
    { '@type': 'ListItem', position: 3, name: 'Türkiye',             item: 'https://www.sultanghc.com/destinations/turkey' },
    { '@type': 'ListItem', position: 4, name: 'Tourist Attractions', item: 'https://www.sultanghc.com/destinations/turkey/tourist-attractions' },
  ],
}

const STATS = [
  { value: '20+',    label: 'UNESCO World Heritage Sites' },
  { value: '2',      label: 'Continents in one country' },
  { value: '7–14',   label: 'Average patient stay (days)' },
  { value: '50M+',   label: 'International tourists per year' },
]

const DESTINATIONS = [
  {
    city: 'Istanbul',
    hospital: 'Acibadem, Memorial, Medicana',
    tag: 'Europe & Asia — Two Continents, One City',
    gradient: 'from-red-700 to-rose-600',
    lightBg: 'bg-red-50',
    lightBorder: 'border-red-100',
    tagBg: 'bg-red-100 text-red-700',
    emoji: '🕌',
    description: 'Istanbul is one of the great cities of human history — the only city spanning two continents, former capital of three empires (Roman, Byzantine, Ottoman), and home to monuments that left their mark on world civilisation. Most Sultan GHC Türkiye patients are treated here, making extraordinary heritage immediately accessible.',
    attractions: [
      { name: 'Hagia Sophia', distance: 'Old City (Sultanahmet)', type: 'World Wonder · UNESCO', desc: 'Built in 537 AD — one of the great architectural achievements in human history. The vast interior with its floating dome is staggering. Completely flat, accessible at all recovery stages.' },
      { name: 'Blue Mosque (Sultan Ahmet Camii)', distance: 'Walking distance from Hagia Sophia', type: 'Ottoman Masterpiece', desc: 'Six minarets, 20,000 hand-painted Iznik tiles, and a soaring central dome. Visited outside prayer times. Flat, accessible, extraordinary.' },
      { name: 'Topkapi Palace', distance: 'Sultanahmet', type: 'Imperial Palace · UNESCO', desc: 'Administrative centre of the Ottoman Empire for 400 years — housing the Imperial Treasury (Topkapi Dagger, Spoonmaker\'s Diamond) and Bosphorus gardens. Golf cart options available for longer distances.' },
      { name: 'Bosphorus Cruise', distance: 'Embarcadero piers', type: 'Scenic Boat Trip · Must Do', desc: 'A 2–3 hour boat cruise between Europe and Asia — passing Ottoman waterfront mansions, historic fortresses, and the Bosphorus Bridge. Entirely seated. One of the world\'s most beautiful urban waterways. Highly recommended for all recovering patients.' },
      { name: 'Basilica Cistern', distance: 'Sultanahmet', type: 'Underground Wonder', desc: 'A vast 6th-century underground reservoir with 336 marble columns and dramatic lighting. Famous for its Medusa head bases. Flat inside, small stairs at entrance only.' },
      { name: 'Grand Bazaar', distance: 'Old City', type: 'Historic Market', desc: 'One of the world\'s oldest and largest covered markets — 61 streets, 4,000 shops. Carpets, spices, jewellery, ceramics. Explore entirely at your own pace.' },
      { name: 'Prince Islands (Buyukada)', distance: '1.5 hr ferry from Kabatas', type: 'Car-Free Island', desc: 'A car-free island in the Sea of Marmara — Victorian mansions, pine forests, and seafood restaurants. Reached by a scenic ferry. Get around by horse-drawn carriage. Utterly peaceful.' },
    ],
    recovery: 'Istanbul\'s Old City is flat and very walkable. Ferries, taxis, and trams eliminate almost all exertion. The Bosphorus cruise is particularly ideal — seated, scenic, and completely effortless.',
    bestFor: ['Ottoman & Byzantine history', 'Bosphorus views', 'Shopping & bazaars', 'World-class cuisine'],
  },
  {
    city: 'Cappadocia',
    hospital: 'Extension from Istanbul (1.5 hr flight)',
    tag: 'Central Anatolia — Fairy Chimneys & Cave Hotels',
    gradient: 'from-amber-700 to-yellow-600',
    lightBg: 'bg-amber-50',
    lightBorder: 'border-amber-100',
    tagBg: 'bg-amber-100 text-amber-800',
    emoji: '🎈',
    description: 'Cappadocia looks like it was painted by a surrealist — a landscape of fairy chimneys, honeycombed rock, underground cities, and cave hotels. Best visited as a 2–3 night extension after hospital discharge, it is one of the most extraordinary places on earth.',
    attractions: [
      { name: 'Hot Air Balloon at Sunrise', distance: 'Goreme Valley', type: 'Bucket List Experience', desc: 'Floating silently above the fairy chimneys as the sun rises is one of the most transcendent travel experiences available. 60+ balloons lift off simultaneously each morning. The basket is enclosed; you stand for the 1-hour flight. Doctor clearance required for post-surgical patients — typically appropriate after week 3 for most procedures.' },
      { name: 'Cave Hotels, Goreme & Uchisar', distance: 'Goreme town', type: 'Unique Accommodation', desc: 'Luxury rooms carved into volcanic rock with private terraces overlooking the valleys. Museum Hotel, Argos in Cappadocia, and Kayakapi Premium Caves are world-class. Staying here is itself one of the great travel experiences — very comfortable, zero exertion.' },
      { name: 'Goreme Open Air Museum', distance: 'Goreme town', type: 'UNESCO Heritage', desc: 'Byzantine rock-cut churches decorated with vivid 10th–13th century frescoes. UNESCO World Heritage Site. Flat walking paths throughout. One of Türkiye\'s most remarkable sites.' },
      { name: 'Devrent & Pasabag Valleys', distance: 'North Goreme', type: 'Natural Wonder', desc: 'Lunar landscapes of volcanic formations — some resembling animals, some resembling nothing from this planet. The best are seen from the road by car; very short walking is optional.' },
      { name: 'Underground City — Derinkuyu', distance: '30 km from Goreme', type: 'Archaeological Wonder', desc: 'An 8-level underground city carved by early Christians — with ventilation shafts, wine presses, and churches for 20,000 people. Best for patients 2+ weeks post-op who are comfortable in confined spaces.' },
    ],
    recovery: 'Cave hotels are extraordinarily comfortable and quiet — perfect for a recovery extension. Even without taking the balloon flight, watching them lift off from a hotel terrace at sunrise is equally magical and requires zero effort.',
    bestFor: ['Hot air ballooning', 'Cave hotel stays', 'Otherworldly landscapes', 'Byzantine frescoes'],
  },
  {
    city: 'Pamukkale & Hierapolis',
    hospital: '1 hr flight to Denizli, then 20 min transfer',
    tag: 'Southwest Türkiye — Thermal Terraces & Roman Ruins',
    gradient: 'from-blue-600 to-cyan-500',
    lightBg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    tagBg: 'bg-blue-100 text-blue-800',
    emoji: '♨️',
    description: 'Pamukkale — literally "Cotton Castle" — is a UNESCO World Heritage Site of otherworldly beauty: cascading white travertine terraces filled with turquoise thermal water. The naturally mineral-rich springs have been used for healing since antiquity, making this one of the most genuinely therapeutic destinations for recovering patients.',
    attractions: [
      { name: 'Pamukkale Thermal Terraces', distance: 'Pamukkale town', type: 'UNESCO Heritage · Natural Wonder', desc: 'Snow-white calcium carbonate travertines — a flowing white staircase of turquoise pools that looks like a science-fiction landscape. Shoes removed to walk on terraces. Flat accessible paths available throughout.' },
      { name: 'Cleopatra\'s Pool (Antique Pool)', distance: 'Top of Pamukkale', type: 'Ancient Thermal Bath', desc: 'A warm thermal spring surrounded by sunken Roman marble columns and architectural fragments. Swim among 2,000-year-old ruins in naturally heated mineral water. One of the world\'s most remarkable bathing experiences. Consult your surgeon before entering if recently post-op.' },
      { name: 'Hierapolis Ancient City', distance: 'Hillside above Pamukkale', type: 'Greco-Roman Ruins', desc: 'A Greco-Roman spa city built around the thermal springs — theatre, necropolis, Temple of Apollo. The theatre is one of the best-preserved in the ancient world, with panoramic views over the plain.' },
      { name: 'Hierapolis Archaeology Museum', distance: 'Within Hierapolis', type: 'World-Class Museum', desc: 'Housed in former Roman baths — an exceptional collection of Anatolian Roman sculpture and sarcophagi. Entirely air-conditioned, flat floors, small enough for a comfortable 90-minute visit.' },
    ],
    recovery: 'Pamukkale\'s flat terraces can be walked or viewed from above with minimal effort. The thermal soak in Cleopatra\'s Pool (with surgeon clearance) is genuinely therapeutic — calcium, magnesium, and bicarbonate-rich waters. A 1-night stay gives the best experience.',
    bestFor: ['Thermal healing waters', 'Natural wonders', 'Roman ruins', 'Unique photography'],
  },
  {
    city: 'Ephesus & the Aegean Coast',
    hospital: '1 hr flight to Izmir from Istanbul',
    tag: 'Aegean Türkiye — Ancient Greek & Roman Heritage',
    gradient: 'from-stone-600 to-amber-600',
    lightBg: 'bg-stone-50',
    lightBorder: 'border-stone-100',
    tagBg: 'bg-stone-100 text-stone-700',
    emoji: '🏛️',
    description: 'The Aegean coast of Türkiye is lined with ancient cities of extraordinary scale. Ephesus alone was a city of 250,000 people in the 1st century AD. Combined with turquoise sea, olive groves, and beautiful harbour towns, this is one of the world\'s finest destinations for history-minded travellers.',
    attractions: [
      { name: 'Ephesus Ancient City', distance: '80 km from Izmir', type: 'UNESCO Heritage · Top 10 World Ruins', desc: 'One of the largest and best-preserved Roman cities in the world — the Library of Celsus, the Great Theatre (25,000 seats), marble streets. An electric cart tour is available for patients with limited mobility. Flat marble roads throughout.' },
      { name: 'Library of Celsus', distance: 'Within Ephesus', type: 'Roman Monument', desc: 'Built in 117 AD to hold 12,000 scrolls — the two-storey marble facade is one of the most photographed ruins in the world. Just seeing it from across the ancient square is enough to understand why Türkiye is one of the world\'s great archaeological destinations.' },
      { name: 'House of the Virgin Mary', distance: '7 km from Ephesus', type: 'Pilgrimage Site', desc: 'A small stone chapel believed to be the last home of the Virgin Mary — a pilgrimage site for both Christians and Muslims. Quiet, forested, deeply peaceful. Entirely flat and accessible.' },
      { name: 'Bodrum', distance: '1 hr from Izmir / direct flight', type: 'Aegean Harbour Town', desc: 'A beautiful harbour with the Castle of St Peter, fish restaurants, and the site of the ancient Mausoleum of Halicarnassus (one of the Seven Wonders of the World). Very walkable flat harbour.' },
      { name: 'Sirince Village', distance: 'Next to Ephesus', type: 'Authentic Hill Village', desc: 'A preserved 19th-century Greek village — cobblestone streets, stone houses, fruit wine cellars. Only 8 km from Ephesus. Extremely peaceful. Excellent for a post-Ephesus lunch and afternoon rest.' },
    ],
    recovery: 'Ephesus has electric cart tours for patients who cannot walk long distances. The flat marble roads are very accessible. Bodrum\'s harbour is entirely flat — excellent for gentle afternoon walking.',
    bestFor: ['Roman ruins', 'Aegean coastline', 'Historical pilgrimage', 'Harbour towns'],
  },
  {
    city: 'Turkish Riviera — Antalya',
    hospital: 'Direct flights from Istanbul (1 hr)',
    tag: 'Mediterranean Coast — Sun, Sea & Roman History',
    gradient: 'from-teal-700 to-emerald-600',
    lightBg: 'bg-teal-50',
    lightBorder: 'border-teal-100',
    tagBg: 'bg-teal-100 text-teal-800',
    emoji: '🌊',
    description: 'The Turkish Riviera stretches 700 km along the Mediterranean — turquoise water, Roman ruins, forested mountains, and excellent beach resorts. Antalya is also a growing medical tourism hub for dental, cosmetic, and hair transplant procedures.',
    attractions: [
      { name: 'Kaleici Old Town, Antalya', distance: 'Antalya city centre', type: 'Historic Harbour', desc: 'A beautifully preserved Roman-era walled city — Hadrian\'s Gate (130 AD), narrow stone lanes, Ottoman mansions, and a harbour full of wooden gulets. Flat cobblestones, restaurants with terrace harbour views.' },
      { name: 'Aspendos Roman Theatre', distance: '47 km east of Antalya', type: 'Best-Preserved Roman Theatre', desc: 'Built in 155 AD and still hosting opera and festivals with its original acoustics — seating 15,000 people. The best-preserved Roman theatre in the world. Extraordinary even in the afternoon.' },
      { name: 'Duden Waterfalls', distance: '13 km from Antalya', type: 'Natural Wonder', desc: 'Waterfalls dropping directly into the Mediterranean Sea from clifftop caves. Boat trips go beneath the spray for a remarkable experience. Accessible paths from the top; boats give a perspective from the sea.' },
      { name: 'Konyaalti & Lara Beaches', distance: 'In Antalya', type: 'Mediterranean Beach', desc: 'Blue Flag beaches backed by the Taurus mountains. Fully developed with sunbeds, restaurants, and parasols — completely effortless beach time. Perfect for passive recovery.' },
      { name: 'Side Ancient City', distance: '75 km east of Antalya', type: 'Ruins by the Sea', desc: 'Ruins of a 7th-century BC Greek city jutting into the sea — the Temple of Apollo stands at the peninsula tip with waves crashing below. A completely unique combination of ancient history and Mediterranean scenery.' },
    ],
    recovery: 'Antalya\'s all-inclusive beach resorts offer total rest with zero planning required. Kaleici Old Town is flat and easily navigated by taxi. The beach is perfect for passive, unhurried recovery days.',
    bestFor: ['Beach recovery', 'Roman ruins by the sea', 'Mediterranean food', 'Dental & cosmetic tourism'],
  },
]

const WELLNESS_ACTIVITIES = [
  { icon: Heart,   title: 'Traditional Turkish Hammam', desc: 'The hammam — Turkish bath — is one of the great wellness traditions of the Ottoman world. A marble-floored steam room followed by an exfoliating scrub and foam massage. Many Istanbul hammams (Cemberlitas, Suleymaniye) date from the 16th century. Deeply relaxing; confirm timing with your surgeon post-op.' },
  { icon: Star,    title: 'Bosphorus at Golden Hour', desc: 'Sitting on a ferry terrace as the sun sets behind the European minarets and the Bosphorus lights up gold is one of the most beautiful moments available anywhere. Entirely effortless. Many patients do this every evening of their stay.' },
  { icon: Camera,  title: 'Cave Hotel Stay in Cappadocia', desc: 'Waking up in a centuries-old cave carved into volcanic rock, with a terrace overlooking the fairy chimneys as balloons lift off at sunrise, is an experience patients carry with them for the rest of their lives. Completely comfortable, no exertion.' },
  { icon: Coffee,  title: 'Turkish Coffee Culture', desc: 'Türkiye invented coffee culture — the world\'s first coffee shops opened in Istanbul in the 1550s. A traditional Turkish breakfast with tea, followed by a slow coffee in a historic han (caravanserai), is an excellent way to spend a recovery morning.' },
  { icon: Shield,  title: 'Pamukkale Thermal Soak', desc: 'Soaking in the naturally warm, mineral-rich waters of Cleopatra\'s Pool among sunken Roman marble columns is one of the most peculiar and wonderful recovery experiences available anywhere. Genuine healing properties — confirm clearance with your surgeon first.' },
  { icon: Plane,   title: 'Gulet Cruise, Aegean Sea', desc: 'A traditional Turkish wooden gulet charter along the Aegean coast — sleeping aboard, swimming from the deck in turquoise coves, anchoring at ancient ruins. Day charters available from Bodrum and Marmaris. Entirely low-effort, utterly beautiful.' },
]

const ITINERARIES = [
  {
    title: '10-Day Hair Transplant — Istanbul',
    color: 'border-red-200 bg-red-50',
    steps: [
      { days: 'Day 1',    label: 'Arrive Istanbul · Settle in hotel · Rest' },
      { days: 'Day 2',    label: 'Pre-op consultation & blood work at clinic' },
      { days: 'Day 3',    label: 'Hair transplant procedure (daycase) · Rest in hotel' },
      { days: 'Day 4',    label: 'First wash at clinic · Hagia Sophia & Blue Mosque (easy walking)' },
      { days: 'Day 5',    label: 'Bosphorus cruise · Grand Bazaar at own pace' },
      { days: 'Day 6',    label: 'Topkapi Palace or Basilica Cistern · Hammam evening' },
      { days: 'Day 7',    label: 'Ferry day trip to Prince Islands · Seafood lunch' },
      { days: 'Day 8',    label: 'Free day · Bebek waterfront · Traditional Turkish breakfast' },
      { days: 'Day 9',    label: 'Final clinic check · Shopping — Nisantasi or Istiklal' },
      { days: 'Day 10',   label: 'Fly home' },
    ],
  },
  {
    title: '14-Day Orthopedic Surgery — Istanbul + Cappadocia',
    color: 'border-amber-200 bg-amber-50',
    steps: [
      { days: 'Day 1–2',  label: 'Arrive Istanbul · Pre-op assessment · Hospital admission' },
      { days: 'Day 3',    label: 'Surgery at Acibadem or Memorial Hospital' },
      { days: 'Day 4–6',  label: 'Hospital recovery · Physio begins · Family explores Old City' },
      { days: 'Day 7–8',  label: 'Hotel recovery · Bosphorus cruise · Family visits Dolmabahce Palace' },
      { days: 'Day 9–10', label: 'Fly to Cappadocia · Cave hotel · Watch balloon sunrise from terrace' },
      { days: 'Day 11',   label: 'Goreme Open Air Museum · Valley tour by car' },
      { days: 'Day 12',   label: 'Return to Istanbul · Last shopping & final clinic check' },
      { days: 'Day 13',   label: 'Rest · Turkish coffee at a historic han · Basilica Cistern' },
      { days: 'Day 14',   label: 'Fly home' },
    ],
  },
  {
    title: '7-Day Dental Implants — Istanbul',
    color: 'border-blue-200 bg-blue-50',
    steps: [
      { days: 'Day 1',   label: 'Arrive Istanbul · Clinic consultation · Hotel check-in' },
      { days: 'Day 2',   label: 'Dental procedure · Soft food diet begins · Rest' },
      { days: 'Day 3',   label: 'Hagia Sophia & Topkapi (easy walking; soup lunch nearby)' },
      { days: 'Day 4',   label: 'Bosphorus cruise · Prince Islands ferry · Ice cream at Karakoy' },
      { days: 'Day 5',   label: 'Basilica Cistern · Grand Bazaar · Spice Bazaar' },
      { days: 'Day 6',   label: 'Clinic check · Hammam evening · Last-day Istanbul exploration' },
      { days: 'Day 7',   label: 'Fly home' },
    ],
  },
]

const PRACTICAL = [
  { icon: Plane,    title: 'Flights from the U.S.', desc: 'Turkish Airlines operates direct services to Istanbul (IST) from JFK, EWR, IAD, ORD, MIA, LAX, SFO, and BOS. U.S. East Coast to Istanbul: 10–11 hours nonstop. U.S. West Coast to Istanbul: 14–15 hours, typically one stop. Istanbul Airport (IST) is the busiest airport in Europe — excellent connections and facilities. Turkish Airlines is consistently ranked among the world\'s best airlines. United, Delta, and Lufthansa/KLM also offer connections. Best practice: book flexible-date tickets; Sultan GHC helps plan your complete travel itinerary.' },
  { icon: MapPin,   title: 'Currency', desc: 'Turkish Lira (TRY). As of 2026: USD 1 ≈ 47.91 TRY (verify current rate before travel). The exchange rate makes Türkiye exceptionally affordable for U.S. patients — treatment, hotels, dining, and shopping all represent outstanding value. ATMs everywhere; cards widely accepted at hotels, restaurants, and tourist sites.' },
  { icon: Star,     title: 'Language', desc: 'English is widely spoken in Istanbul hotels, tourist sites, hospitals, and restaurants. All hospital staff communicate fully in English. Google Translate works well offline in Turkish for everyday interactions outside major cities.' },
  { icon: Shield,   title: 'Safety', desc: 'Istanbul and all major tourist cities are safe for international visitors. Use BiTaksi or Uber for registered taxis. The hospital districts (Nisantasi, Sisli, Kadikoy) are particularly safe. Always buy comprehensive travel insurance before departing the U.S.' },
  { icon: Coffee,   title: 'Food During Recovery', desc: 'Turkish cuisine is rich in vegetables, legumes, olive oil, and grilled protein — generally excellent for recovery. Soups (lentil, yogurt) are gentle post-operatively. Your Sultan GHC coordinator advises on dietary restrictions specific to your procedure.' },
  { icon: Calendar, title: 'SIM Card & Connectivity', desc: 'Buy a Turkcell or Vodafone Türkiye prepaid SIM at Istanbul Airport on arrival (passport required). Fast 4G/5G data throughout Istanbul at very affordable rates. Hotel WiFi is generally excellent. WhatsApp is the preferred communication platform in Türkiye.' },
]

const FAQS = [
  { q: 'Can I visit Istanbul\'s historic sites while recovering from surgery?', a: 'Most of Istanbul\'s main sites — Hagia Sophia, Blue Mosque, Basilica Cistern — are on flat ground and require minimal walking. The Bosphorus cruise is entirely seated. For patients in early recovery (days 3–7), we recommend car tours and boat trips. Walking heritage tours are typically appropriate from week 2 for most procedures. Sultan GHC plans your itinerary with your surgeon\'s guidance.' },
  { q: 'Is Türkiye safe for U.S. patients?', a: 'Yes. Istanbul is a major international city receiving over 15 million tourists annually. The hospital districts where most Sultan GHC patients stay — Nisantasi, Sisli, and Kadikoy — are affluent, safe, and well-served by hotels and transport. Standard urban precautions apply as they would in any large city.' },
  { q: 'Is a hammam safe for post-surgical patients?', a: 'A traditional Turkish hammam should only be undertaken with your surgeon\'s clearance. For most procedures, this is appropriate 2–3 weeks after the operation. Sultan GHC coordinates with your surgical team on this timeline. Many patients book their hammam experience as a post-discharge treat on their final days in Istanbul.' },
  { q: 'Should I extend my trip to Cappadocia?', a: 'We strongly recommend a 2–3 night Cappadocia extension for patients cleared to fly domestically (usually 5–7 days after most procedures). Cappadocia\'s cave hotels are extraordinarily comfortable and the landscape is unlike anything else in the world. The balloon flight requires surgeon clearance; watching from the hotel terrace is equally magical.' },
  { q: 'Is the thermal water at Pamukkale genuinely therapeutic?', a: 'The Pamukkale thermal waters are naturally rich in calcium bicarbonate, magnesium, and sulfate — minerals with documented effects on circulation and musculoskeletal conditions. As with any thermal bathing post-surgery, please confirm clearance with your surgeon before soaking. Sultan GHC coordinates this conversation on your behalf.' },
  { q: 'Does Sultan GHC arrange sightseeing alongside medical care?', a: 'Sultan GHC specialises in medical coordination, but our team connects you with trusted local travel partners in Istanbul and other cities who handle hotel bookings, day trips, and transportation for your family. We coordinate the timeline between your medical schedule and tourist activities so nothing conflicts with your treatment or recovery.' },
]

export default function TürkiyeTouristAttractionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero — matches sitewide light blue pattern ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/destinations/turkey" className="hover:text-primary transition-colors">Türkiye</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Tourist Attractions</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Left — headline */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <img src="https://flagcdn.com/w40/tr.png" srcSet="https://flagcdn.com/w80/tr.png 2x" width="40" height="30" alt="Türkiye flag" className="rounded shadow-sm" />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                  Travel Guide — Türkiye
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Türkiye — More Than<br />
                <span className="text-primary">a Medical Destination</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-xl">
                Most Türkiye patients stay 7–14 days. That is enough to witness Hagia Sophia at dawn, float over Cappadocia in a hot air balloon, soak in Pamukkale\'s thermal pools, and experience one of the world\'s great cities.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                Sultan GHC plans your itinerary around your medical schedule — your family can tour Topkapi Palace while you rest, and you can join the Bosphorus cruise once your doctor clears gentle activity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  Plan My Medical Trip <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all">
                  <MessageCircle size={16} /> Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="lg:w-80 w-full grid grid-cols-2 gap-3">
              {STATS.map(({ value, label }) => (
                <div key={label} className="bg-white border border-[#d9e6ff] rounded-2xl p-5 shadow-sm text-center">
                  <p className="text-2xl font-bold text-primary mb-1">{value}</p>
                  <p className="text-xs text-gray-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recovery framing callout ── */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-start gap-4 bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Heart size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1.5">Where three empires left their mark — and where you heal</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Istanbul was capital of the Roman, Byzantine, and Ottoman Empires — each left monuments of extraordinary grandeur within walking distance of each other. Türkiye is also the world\'s fourth-largest medical tourism destination, and most Sultan GHC patients are genuinely surprised by how beautiful and accessible their recovery environment is. Your itinerary is planned around your treatment — not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destination guide — alternating left/right layout ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Destination Guide</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">From Istanbul\'s ancient empires to Cappadocia\'s fairy chimneys, Pamukkale\'s thermal terraces, and the Turkish Riviera — organized by proximity and ease of access.</p>
          </div>

          <div className="space-y-16">
            {DESTINATIONS.map((dest, idx) => {
              const isEven = idx % 2 === 0
              const InfoPanel = (
                <div className={`lg:w-80 shrink-0 rounded-2xl overflow-hidden border ${dest.lightBorder}`}>
                  <div className={`bg-gradient-to-br ${dest.gradient} px-6 py-5`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block mb-2">{dest.tag}</span>
                    <h3 className="text-lg font-semibold text-white leading-tight">{dest.emoji} {dest.city}</h3>
                    <p className="text-[11px] text-white/75 mt-1">Hospital anchor: {dest.hospital}</p>
                  </div>
                  <div className={`${dest.lightBg} px-6 py-5 space-y-4`}>
                    <p className="text-sm text-gray-700 leading-relaxed">{dest.description}</p>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Best for</p>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.bestFor.map(tag => (
                          <span key={tag} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${dest.tagBg}`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-green-200 rounded-xl px-3 py-2.5 flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-green-600 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-gray-600 leading-relaxed"><span className="font-semibold text-green-700">Recovery tip:</span> {dest.recovery}</p>
                    </div>
                  </div>
                </div>
              )

              const AttractionsPanel = (
                <div className="flex-1 space-y-3">
                  {dest.attractions.map((att) => (
                    <div key={att.name} className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={14} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-gray-900">{att.name}</h4>
                          <span className="text-[10px] font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full whitespace-nowrap">{att.type}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mb-1.5 flex items-center gap-1">
                          <Clock size={10} className="shrink-0" /> {att.distance}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">{att.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )

              return (
                <div key={dest.city}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">{idx + 1}</div>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  <div className={`flex flex-col lg:flex-row gap-8 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {InfoPanel}
                    {AttractionsPanel}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Recovery-friendly activities ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Recovery-Friendly Experiences</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Türkiye has been a wellness destination since the Roman era. These experiences are beautiful, meaningful, and appropriate for recovering patients.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WELLNESS_ACTIVITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample itineraries ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Sample Trip Itineraries</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">How Sultan GHC patients combine treatment and travel in Türkiye.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {ITINERARIES.map((itin) => (
              <div key={itin.title} className={`rounded-2xl border p-6 ${itin.color}`}>
                <h3 className="text-sm font-semibold text-gray-900 mb-5 leading-snug">{itin.title}</h3>
                <div className="space-y-2.5">
                  {itin.steps.map(({ days, label }) => (
                    <div key={days} className="flex items-start gap-3">
                      <span className="text-[10px] font-bold text-primary bg-white px-2 py-0.5 rounded-full shrink-0 mt-0.5 shadow-sm border border-primary/20 whitespace-nowrap">{days}</span>
                      <p className="text-xs text-gray-700 leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">Itineraries are illustrative. Sultan GHC builds a personalised schedule around your specific procedure, surgeon, and recovery timeline.</p>
        </div>
      </section>

      {/* ── Practical info ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">Practical Information for American Visitors</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRACTICAL.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — two-column alternating layout ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid lg:grid-cols-2 gap-5">
            {FAQS.map(({ q, a }, idx) => (
              <div key={q} className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-4 ${idx % 2 !== 0 ? 'lg:mt-8' : ''}`}>
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff] py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Ready to plan your Türkiye medical and travel itinerary?</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Our patient coordinators create a seamless itinerary combining hospital appointments, recovery accommodation, and the best of Türkiye — so your trip is medically excellent and personally unforgettable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Start Planning <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-600 px-6 py-3.5 rounded-full font-semibold text-sm hover:border-primary hover:text-primary transition-all">
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
