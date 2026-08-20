import Link from 'next/link'
import {
  ChevronRight, ArrowRight, MapPin, Clock,
  MessageCircle, CheckCircle2, Heart, Camera,
  Coffee, Shield, Star, Plane, Calendar,
} from 'lucide-react'

export const metadata = {
  title: 'Tourist Attractions in India for Medical Travelers | Sultan GHC',
  description:
    'Explore India\'s most iconic destinations while recovering from medical treatment. City-by-city guides tied to hospital locations in Delhi, Chennai, Mumbai, Bengaluru, Hyderabad & Kerala — curated for U.S. patients by Sultan GHC.',
  keywords: [
    'tourist places India medical tourism',
    'things to do in India after surgery',
    'India travel guide medical tourists Americans',
    'what to see in Delhi medical trip',
    'India tourism after treatment',
    'Kerala backwaters medical tourism',
    'Taj Mahal medical trip India',
    'India itinerary medical tourism USA',
    'India tourist attractions recovery friendly',
    'Sultan GHC India travel guide',
  ],
  openGraph: {
    title: 'Tourist Attractions in India | Travel Guide for Medical Patients | Sultan GHC',
    description: 'Taj Mahal, Kerala backwaters, Jaipur palaces, and more — curated for U.S. medical tourists. City guides tied to hospital locations across India.',
    url: 'https://www.sultanghc.com/destinations/india/tourist-attractions',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourist Attractions in India for Medical Travelers | Sultan GHC',
    description: 'Explore India before or after your treatment. City guides, recovery-friendly activities, and sample itineraries for U.S. patients.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/destinations/india/tourist-attractions' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',             item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Destinations',     item: 'https://www.sultanghc.com/destinations/india' },
    { '@type': 'ListItem', position: 3, name: 'India',            item: 'https://www.sultanghc.com/destinations/india' },
    { '@type': 'ListItem', position: 4, name: 'Tourist Attractions', item: 'https://www.sultanghc.com/destinations/india/tourist-attractions' },
  ],
}

const STATS = [
  { value: '40+',     label: 'UNESCO World Heritage Sites' },
  { value: '6',       label: 'Major hospital hub cities' },
  { value: '10–21',   label: 'Average patient stay (days)' },
  { value: '507K+',   label: 'International patients in 2025' },
]

// City order: Delhi first (capital), then south/west cities
const CITIES = [
  {
    city: 'Delhi NCR',
    hospital: 'Fortis Gurugram, Medanta, Max Saket',
    tag: 'North India — National Capital Region',
    gradient: 'from-red-700 to-rose-600',
    lightBg: 'bg-red-50',
    lightBorder: 'border-red-100',
    tagBg: 'bg-red-100 text-red-700',
    emoji: '🕌',
    description: 'Delhi is India\'s historical capital — Mughal monuments, colonial-era landmarks, and the gateway to Rajasthan\'s Golden Triangle. Patients at Gurugram or South Delhi hospitals are perfectly positioned for the most iconic sites in India, including the Taj Mahal.',
    attractions: [
      { name: 'Taj Mahal, Agra', distance: '3 hrs road / 2 hrs train', type: 'UNESCO Heritage', desc: 'The world\'s most celebrated monument — best experienced at sunrise. A comfortable express train (Gatimaan Express) runs from Hazrat Nizamuddin. Seated experience, very manageable even in early recovery.' },
      { name: 'Jaipur — The Pink City', distance: '5 hrs road or overnight train', type: 'Royal Heritage', desc: 'Amber Fort, City Palace, Hawa Mahal — a city of Mughal and Rajput grandeur. Excellent 5-star palace hotels (Rambagh Palace, Oberoi Rajvilas) make it ideal for a luxury recovery extension.' },
      { name: 'Humayun\'s Tomb', distance: 'In Delhi', type: 'UNESCO Heritage', desc: 'The architectural precursor to the Taj — a stunning Mughal garden tomb. Flat, walkable, extraordinarily beautiful. 30 minutes from most South Delhi hospitals.' },
      { name: 'Qutub Minar', distance: 'South Delhi', type: 'UNESCO Heritage', desc: 'A 73-metre medieval minaret surrounded by Delhi\'s earliest Islamic dynasty ruins. Easy, flat, scenic.' },
      { name: 'Old Delhi — Chandni Chowk', distance: 'Central Delhi', type: 'Living Heritage', desc: 'Mughal-era lanes, spice markets, Jama Masjid, and Red Fort. Best explored by e-rickshaw — one of the most atmospheric places on earth.' },
    ],
    recovery: 'Agra and Jaipur both have 5-star heritage hotels (Oberoi, Taj Hotels) for luxurious, low-effort recovery stays. E-rickshaws eliminate walking entirely in Old Delhi.',
    bestFor: ['Taj Mahal & Agra', 'Royal Rajasthan', 'Mughal heritage', 'Luxury palace hotels'],
  },
  {
    city: 'Chennai & Tamil Nadu',
    hospital: 'Apollo Hospitals, MIOT, Gleneagles',
    tag: 'South India — Tamil Nadu',
    gradient: 'from-amber-700 to-orange-600',
    lightBg: 'bg-amber-50',
    lightBorder: 'border-amber-100',
    tagBg: 'bg-amber-100 text-amber-800',
    emoji: '🏛️',
    description: 'Tamil Nadu is one of India\'s richest cultural states — ancient Dravidian temples, French colonial heritage, and pristine beaches all within easy reach of Chennai\'s world-class hospitals. Chennai is home to Apollo, one of Asia\'s most visited hospitals for medical tourists.',
    attractions: [
      { name: 'Mahabalipuram (Mamallapuram)', distance: '1 hr south', type: 'UNESCO Heritage', desc: '7th-century stone temples and rock carvings by the Bay of Bengal. Flat ground, wheelchair-accessible in most areas. Ideal for recovering patients in week one.' },
      { name: 'Pondicherry (Puducherry)', distance: '2 hrs south', type: 'French Colonial Town', desc: 'White-and-mustard French colonial buildings, Sri Aurobindo Ashram, and a beautiful seafront promenade. Slow-paced and serene — perfect for recovery.' },
      { name: 'Marina Beach', distance: 'In Chennai', type: 'Urban Beach', desc: 'The world\'s second-longest urban beach. Easy sunset walks, zero exertion required. A calming daily outing for patients staying in Chennai.' },
      { name: 'Kanchipuram', distance: '1.5 hrs west', type: 'Temple City', desc: 'The "City of Thousand Temples" — Varadaraja Perumal, Ekambareswarar. Famous for its silk sarees. A manageable half-day trip.' },
      { name: 'Brihadeeswara Temple, Thanjavur', distance: '3.5 hrs south', type: 'UNESCO Heritage', desc: 'A 1,000-year-old Chola masterpiece — one of the finest temples in South Asia. Best for patients 2+ weeks post-op comfortable with moderate walking.' },
    ],
    recovery: 'Mahabalipuram is flat and accessible. Pondicherry\'s calm, European-style streets are ideal for gentle post-treatment walks. Both are within 2 hours of all Chennai hospitals.',
    bestFor: ['Dravidian temples', 'French heritage', 'Coastal scenery', 'Ayurveda retreat'],
  },
  {
    city: 'Mumbai & Surroundings',
    hospital: 'Kokilaben, Lilavati, Hinduja, Jaslok',
    tag: 'West India — Maharashtra',
    gradient: 'from-blue-700 to-cyan-600',
    lightBg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    tagBg: 'bg-blue-100 text-blue-800',
    emoji: '🌊',
    description: 'India\'s most cosmopolitan city — art deco architecture, colonial-era grandeur, island cave temples, and a beautiful seafront. Recovery in Mumbai is genuinely pleasant: good restaurants, modern malls, and scenic promenades.',
    attractions: [
      { name: 'Elephanta Caves', distance: '1 hr ferry from Gateway of India', type: 'UNESCO Heritage', desc: 'Rock-cut temples from the 5th–8th century on an island in Mumbai Harbour — reached by a scenic ferry. The main Shiva cave is breathtaking. The ferry journey itself is a beautiful experience.' },
      { name: 'Gateway of India & Taj Mahal Hotel', distance: 'South Mumbai', type: 'Colonial Icon', desc: 'The 1924 triumphal arch overlooking the Arabian Sea — one of India\'s defining landmarks. Surrounded by the historic Taj Palace Hotel and Colaba Causeway. Flat, walkable.' },
      { name: 'Marine Drive (Queen\'s Necklace)', distance: 'South Mumbai', type: 'Urban Promenade', desc: 'A 3.6-km seafront promenade — completely flat, sea breeze, iconic curved crescent. The most pleasant evening walk in Mumbai. Ideal for early recovery.' },
      { name: 'Ajanta & Ellora Caves', distance: '5 hrs by road or short flight', type: 'UNESCO Heritage', desc: '2nd-century Buddhist cave paintings at Ajanta and 34 rock-cut temples at Ellora spanning three religions. Among the greatest artistic achievements in Asia.' },
      { name: 'Lonavala Hill Station', distance: '2 hrs road / train', type: 'Nature & Hills', desc: 'Lush green hills, waterfalls, old forts — a complete contrast to Mumbai\'s heat. Ideal weekend retreat. Cool climate, peaceful environment.' },
    ],
    recovery: 'Mumbai has world-class hotels along Marine Drive with sea views. Flat promenades and ferry rides require minimal exertion. South Mumbai is very accessible for recovering patients.',
    bestFor: ['Island cave temples', 'Seafront promenades', 'Colonial architecture', 'Hill station retreat'],
  },
  {
    city: 'Bengaluru & Karnataka',
    hospital: 'Manipal, Narayana Health, Sakra World',
    tag: 'South India — Karnataka',
    gradient: 'from-green-700 to-emerald-600',
    lightBg: 'bg-green-50',
    lightBorder: 'border-green-100',
    tagBg: 'bg-green-100 text-green-800',
    emoji: '🌿',
    description: 'India\'s garden city sits at 920 metres — a naturally cool climate that is unusually comfortable for recovering patients year-round. Karnataka surrounds Bengaluru with palaces, wildlife sanctuaries, and coffee estates within a few hours\' drive.',
    attractions: [
      { name: 'Mysore Palace', distance: '3 hrs south', type: 'Royal Heritage', desc: 'One of the most magnificent royal palaces in the world — illuminated by 100,000 light bulbs on Sundays. The Dasara festival (October) is India\'s grandest royal celebration. Extremely accessible.' },
      { name: 'Coorg (Kodagu)', distance: '4 hrs southwest', type: 'Coffee Plantation Hills', desc: 'India\'s coffee heartland — rolling hills of coffee and cardamom estates, misty mornings. Some of India\'s finest plantation homestays. Zero exertion, beautifully cool climate. Perfect for recovery.' },
      { name: 'Hampi', distance: '6 hrs north', type: 'UNESCO Heritage', desc: 'Ruins of the Vijayanagara Empire — 500-year-old temples scattered across a surreal boulder landscape. One of the most extraordinary places in South Asia. Best reached by overnight train.' },
      { name: 'Kabini Wildlife Reserve', distance: '4 hrs south', type: 'Wildlife Safari', desc: 'Jeep safaris for tigers, elephants, leopards. Safaris are seated in open jeeps. Excellent luxury lodges (Evolve Back, Kabini River Lodge). Great for accompanying family members.' },
      { name: 'Nandi Hills', distance: '1 hr from Bengaluru', type: 'Day Trip', desc: 'An ancient hilltop fort with panoramic sunrise views over the Deccan plateau. A beautiful, easy half-day trip from any Bengaluru hospital.' },
    ],
    recovery: 'Bengaluru\'s altitude (920m) means a naturally cool, pleasant climate year-round. Coorg plantation stays and Kabini safari lodges offer complete rest in beautiful natural surroundings.',
    bestFor: ['Coffee estate stays', 'Wildlife safaris', 'Royal palaces', 'Cool climate recovery'],
  },
  {
    city: 'Hyderabad & Telangana',
    hospital: 'Care Hospitals, Yashoda, KIMS, Apollo Hyderabad',
    tag: 'South India — Telangana',
    gradient: 'from-purple-700 to-violet-600',
    lightBg: 'bg-purple-50',
    lightBorder: 'border-purple-100',
    tagBg: 'bg-purple-100 text-purple-800',
    emoji: '🏰',
    description: 'Hyderabad is where the Nizams built their empire — a city of biryani, pearls, and medieval forts. One of India\'s most underrated cities for medical tourists, with a flat urban layout and rich cultural life that requires minimal physical effort to enjoy.',
    attractions: [
      { name: 'Golconda Fort', distance: '11 km from city centre', type: 'Mughal Heritage', desc: 'A massive 16th-century fort with an extraordinary acoustic system — a hand-clap at the entrance is audible 91 metres away at the top. The evening light-and-sound show is entirely seated.' },
      { name: 'Charminar', distance: 'City centre', type: 'Iconic Landmark', desc: 'The 1591 four-minaret arch that defines Hyderabad — surrounded by the historic Laad Bazaar pearl market and the city\'s finest biryani restaurants. Flat, accessible, vibrant.' },
      { name: 'Salar Jung Museum', distance: 'City centre', type: 'World-Class Museum', desc: 'One of India\'s three national museums — a single family\'s extraordinary global collection. Entirely indoors, air-conditioned, perfectly manageable for recovering patients.' },
      { name: 'Ramoji Film City', distance: '30 mins east', type: 'Entertainment', desc: 'The world\'s largest film studio complex (Guinness record). Guided tram tours throughout — entirely ride-based, no walking required. Excellent for accompanying family members.' },
      { name: 'Nagarjunasagar Dam', distance: '3 hrs south', type: 'Heritage & Nature', desc: 'The world\'s largest masonry dam — combine with a boat ride on Nagarjuna Sagar lake for a scenic half-day experience.' },
    ],
    recovery: 'Hyderabad is very flat and easy to navigate. The Salar Jung Museum and Golconda\'s light-and-sound show are excellent seated experiences designed for comfortable, unhurried visits.',
    bestFor: ['Mughal & Nizam heritage', 'Biryani & pearls', 'Museums', 'Family entertainment'],
  },
  {
    city: 'Kerala — God\'s Own Country',
    hospital: 'Amrita (Kochi), PVS Memorial, Lakeshore, VPS Lakeshore',
    tag: 'Southwest India — Kerala',
    gradient: 'from-teal-700 to-green-600',
    lightBg: 'bg-teal-50',
    lightBorder: 'border-teal-100',
    tagBg: 'bg-teal-100 text-teal-800',
    emoji: '🌴',
    description: 'Kerala is arguably the most naturally aligned Indian state for recovery — its backwaters, Ayurveda heritage, and lush hill stations create an environment that feels designed for healing. Many patients choose Kerala specifically because the destination itself is therapeutic.',
    attractions: [
      { name: 'Kerala Backwaters — Alleppey', distance: '1.5 hrs from Kochi', type: 'Must-Do Experience', desc: 'Overnight houseboat on the interconnected lakes and lagoons lined with coconut palms — moving gently through villages with meals prepared on board. Zero physical effort. One of the most unique experiences in Asia. Highly recommended for all recovering patients.' },
      { name: 'Munnar Tea Estates', distance: '3.5 hrs from Kochi', type: 'Hill Station', desc: 'Rolling carpets of tea plants at 1,600 metres — misty mornings, cool mountain air. Some of India\'s finest plantation bungalow stays. A deeply peaceful recovery environment.' },
      { name: 'Fort Kochi & Mattancherry', distance: 'In Kochi city', type: 'Colonial Heritage', desc: 'Portuguese, Dutch, and British colonial architecture alongside Chinese fishing nets. Flat, walkable, full of art galleries, cafes, and the 16th-century Paradesi Synagogue.' },
      { name: 'Periyar Wildlife Sanctuary', distance: '4 hrs from Kochi', type: 'Wildlife & Nature', desc: 'Boat safaris on Periyar Lake for elephants, tigers, and hundreds of bird species — entirely seated, one of India\'s finest wildlife experiences. Excellent luxury lodges on site.' },
      { name: 'Varkala Cliffs & Kovalam Beach', distance: 'Near Thiruvananthapuram', type: 'Beach & Cliffs', desc: 'Dramatic red cliffs above the Arabian Sea at Varkala; a beautiful lighthouse beach at Kovalam. Both have world-class Ayurveda centres for post-treatment recovery.' },
    ],
    recovery: 'Kerala is the home of Ayurveda — world-class resorts offer traditional post-surgical recovery therapies. Houseboat stays require no physical effort. The entire state is naturally restorative.',
    bestFor: ['Ayurveda healing', 'Houseboat backwaters', 'Tea estate stays', 'Beach recovery'],
  },
]

const RECOVERY_ACTIVITIES = [
  { icon: Heart,  title: 'Ayurveda & Panchakarma', desc: 'Kerala\'s ancient healing system — therapeutic oil massages, herbal treatments, and rejuvenation therapies specifically designed for post-illness recovery. Available at world-class resorts across Kerala and in Bengaluru.' },
  { icon: Coffee, title: 'Heritage Hotel Stays', desc: 'India\'s palace hotels — Rambagh Palace Jaipur, Taj Falaknuma Hyderabad, Oberoi Rajvilas — turn your recovery stay into a once-in-a-lifetime experience. Impeccable service, zero exertion required.' },
  { icon: Camera, title: 'Sunrise at the Taj Mahal', desc: 'Arriving at dawn and sitting in the garden opposite the Taj requires no physical effort and produces one of the most profound moments available to any traveller. Perfect for early recovery by car.' },
  { icon: Star,   title: 'Houseboat on the Backwaters', desc: 'Overnight stay on a traditional Kerala kettuvallam — meals prepared on board, moving gently through palm-lined lagoons. The only effort required is looking out the window. Deeply restorative.' },
  { icon: Plane,  title: 'Scenic Train Journeys', desc: 'The Nilgiri Mountain Railway (UNESCO), the Darjeeling Himalayan Railway (UNESCO), and the Konkan Railway are all seated experiences of extraordinary beauty.' },
  { icon: Shield, title: 'Yoga & Meditation', desc: 'Dedicated medical yoga programs for post-surgical recovery are available in Rishikesh, Pune, and most major cities. Even in-room gentle yoga with a certified instructor is widely available.' },
]

const ITINERARIES = [
  {
    title: '14-Day Cardiac Surgery — Delhi',
    color: 'border-red-200 bg-red-50',
    steps: [
      { days: 'Day 1–2',   label: 'Arrive Delhi · Pre-op workup · Rest at hotel' },
      { days: 'Day 3',     label: 'Surgery at Medanta or Fortis Gurugram' },
      { days: 'Day 4–6',   label: 'Hospital recovery · Family visits Qutub Minar, Old Delhi' },
      { days: 'Day 7–8',   label: 'Hotel recovery · Family overnight trip to Agra — Taj Mahal' },
      { days: 'Day 9–10',  label: 'Patient car tour of Humayun\'s Tomb · Light Chandni Chowk visit' },
      { days: 'Day 11–12', label: 'Family trip to Jaipur · Patient rests at hotel' },
      { days: 'Day 13',    label: 'Final medical review · Light shopping' },
      { days: 'Day 14',    label: 'Fly home' },
    ],
  },
  {
    title: '21-Day Knee Replacement — Delhi → Kerala',
    color: 'border-teal-200 bg-teal-50',
    steps: [
      { days: 'Day 1–2',   label: 'Arrive Delhi · Pre-op assessment · Settle in hotel' },
      { days: 'Day 3',     label: 'Surgery at Medanta or Max Saket' },
      { days: 'Day 4–8',   label: 'Hospital recovery · Physiotherapy begins daily' },
      { days: 'Day 9–11',  label: 'Hotel recovery · Family explores Delhi monuments' },
      { days: 'Day 12–13', label: 'Fly to Kochi · Check in to Kerala hotel' },
      { days: 'Day 14–15', label: 'Houseboat backwaters overnight (zero exertion)' },
      { days: 'Day 16–17', label: 'Ayurveda massage · Fort Kochi walk at own pace' },
      { days: 'Day 18–19', label: 'Munnar tea estate stay · Mountain air recovery' },
      { days: 'Day 20',    label: 'Return to Kochi · Final medical review' },
      { days: 'Day 21',    label: 'Fly home' },
    ],
  },
  {
    title: '10-Day IVF Cycle — Kerala',
    color: 'border-amber-200 bg-amber-50',
    steps: [
      { days: 'Day 1',    label: 'Arrive Kochi · Check in to hotel · Rest' },
      { days: 'Day 2–4',  label: 'Treatment cycle begins · Explore Fort Kochi & Mattancherry' },
      { days: 'Day 5',    label: 'Alleppey houseboat backwaters day experience' },
      { days: 'Day 6',    label: 'Embryo transfer · Complete rest · In-room Ayurveda massage' },
      { days: 'Day 7–8',  label: 'Rest at hotel · Rooftop yoga · Light walks by the lagoon' },
      { days: 'Day 9',    label: 'Scenic drive to Munnar tea estates (no walking required)' },
      { days: 'Day 10',   label: 'Fly home or continue to next destination' },
    ],
  },
]

const PRACTICAL = [
  { icon: Plane,    title: 'Flights from the U.S.', desc: 'American, Air India, Air France, British Airways, Emirates, Etihad, Lufthansa, Qatar, Saudi, Turkish, and United Airlines offer connections to Delhi, Mumbai, Chennai, Bengaluru, and Hyderabad. U.S. East Coast to Delhi/Mumbai: 14–16 hours, typically one stop via London, Dubai, or Doha. U.S. West Coast to Delhi/Mumbai: 15–17 hours, nonstop available on Air India and United. Typical travel time overall: 16–22 hours. Best practice: book flexible-date tickets; Sultan GHC helps plan your complete travel itinerary.' },
  { icon: MapPin,   title: 'Currency', desc: 'Indian Rupee (INR). As of 2026: USD 1 ≈ ₹93 (verify current rate before travel). ATMs are widely available in all cities. Cards accepted at hotels and major restaurants. Tip 10% at restaurants; ₹100–200 for hotel staff per day.' },
  { icon: Star,     title: 'English Language', desc: 'English is widely spoken in all major hospital cities and tourist sites. All hospital staff communicate fully in English. Menus, signs, and transport in major cities are in English.' },
  { icon: Shield,   title: 'Safety', desc: 'All major hospital cities are safe for international tourists. Use Uber or Ola (both apps work throughout India) for transport. Avoid tap water — use bottled water exclusively throughout your stay.' },
  { icon: Coffee,   title: 'Food During Recovery', desc: 'South Indian vegetarian food (idli, dosa, rice) is very gentle post-operatively. All 5-star hotels have Western menus. Your Sultan GHC coordinator advises on diet restrictions specific to your procedure.' },
  { icon: Calendar, title: 'SIM Card & Connectivity', desc: 'Buy a prepaid Airtel or Jio SIM at the airport on arrival (passport required). Affordable 5G data (₹300 ≈ $3.50/month unlimited). WhatsApp works perfectly throughout India.' },
]

const FAQS = [
  { q: 'Is it safe for a post-surgery patient to do sightseeing in India?', a: 'Yes — with the right activities. Sultan GHC plans your itinerary around your recovery stage. In the first 1–2 weeks after most procedures, we recommend car tours, boat rides, and heritage hotel stays that require no physical exertion. Walking tours of monuments like the Taj Mahal are planned for weeks 2–3 when cleared by your surgeon. We coordinate with your medical team at every stage.' },
  { q: 'Can my family sightsee while I am in hospital?', a: 'Absolutely — and this is very common. Most companion family members do day trips from the hospital city while the patient is in surgery or early recovery. Sultan GHC provides guidance for accompanying family members on what to explore, with trusted local transport arranged.' },
  { q: 'Does Sultan GHC help arrange sightseeing and tourist activities?', a: 'Sultan GHC specialises in medical coordination, but our team connects you with trusted local travel partners in each city who handle hotel bookings, day trips, and transportation. We coordinate the timeline between your medical schedule and tourist activities to ensure no conflict.' },
  { q: 'Is Ayurveda genuinely useful for post-surgical recovery?', a: 'Many patients find Kerala Ayurveda massage and Panchakarma treatments beneficial for post-surgical recovery — supporting circulation and reducing inflammation. However, you must consult your surgeon before any massage or therapy. Sultan GHC coordinates between your surgical team and Ayurveda practitioners to ensure complete safety.' },
  { q: 'Which Indian city offers the most interesting combination of treatment and tourism?', a: 'If your hospital is in Delhi, the Taj Mahal and Jaipur are unmatched. If in Chennai, Mahabalipuram and Pondicherry are beautiful and easily accessible. Kerala offers the most inherently therapeutic setting — houseboat backwaters, Ayurveda resorts, and hill stations. The right answer depends on where your treatment is, and Sultan GHC will advise accordingly.' },
  { q: 'Are India\'s heritage sites accessible for patients with limited mobility?', a: 'Many sites are very accessible — the Taj Mahal gardens, Marine Drive Mumbai, Fort Kochi, the Kerala backwater houseboat experience, and most major museums all require minimal walking on flat ground. Sites like Hampi or Golconda Fort involve more physical effort and are best saved for later in recovery. Sultan GHC plans around your specific mobility level.' },
]

export default function IndiaTouristAttractionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero — matches sitewide light blue pattern ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/destinations/india" className="hover:text-primary transition-colors">India</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Tourist Attractions</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Left — headline */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <img src="https://flagcdn.com/w40/in.png" srcSet="https://flagcdn.com/w80/in.png 2x" width="40" height="30" alt="India flag" className="rounded shadow-sm" />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                  Travel Guide — India
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                India — More Than<br />
                <span className="text-primary">a Medical Destination</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-xl">
                Most patients stay 10–21 days in India. That is enough time to witness the Taj Mahal at sunrise, drift through Kerala backwaters on a houseboat, and recover in a Rajasthan palace hotel.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                Sultan GHC plans your itinerary around your medical schedule — so your family can visit iconic sites while you rest, and you can explore once your surgeon clears gentle activity. India is not just where you get treated. For many patients, it becomes the most memorable trip of their lives.
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
              <p className="text-sm font-semibold text-gray-900 mb-1.5">Recover and explore — not one or the other</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                After most surgical procedures, patients have recovery days before they can fly — but are mobile enough to explore gently by car, boat, or wheelchair. Sultan GHC builds your itinerary around your medical schedule: family can visit the Taj Mahal while you rest, and you can enjoy Pondicherry by the sea once your surgeon clears light activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── City-by-city guide — alternating left/right layout ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">City-by-City Travel Guide</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Organized by hospital city — so you know exactly what is accessible from your treatment centre.</p>
          </div>

          <div className="space-y-16">
            {CITIES.map((city, idx) => {
              const isEven = idx % 2 === 0
              const InfoPanel = (
                <div className={`lg:w-80 shrink-0 rounded-2xl overflow-hidden border ${city.lightBorder}`}>
                  {/* Coloured header */}
                  <div className={`bg-gradient-to-br ${city.gradient} px-6 py-5`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block mb-2">{city.tag}</span>
                    <h3 className="text-lg font-semibold text-white leading-tight">{city.emoji} {city.city}</h3>
                    <p className="text-[11px] text-white/75 mt-1">Hospital anchor: {city.hospital}</p>
                  </div>
                  {/* Body */}
                  <div className={`${city.lightBg} px-6 py-5 space-y-4`}>
                    <p className="text-sm text-gray-700 leading-relaxed">{city.description}</p>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Best for</p>
                      <div className="flex flex-wrap gap-1.5">
                        {city.bestFor.map(tag => (
                          <span key={tag} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${city.tagBg}`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-green-200 rounded-xl px-3 py-2.5 flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-green-600 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-gray-600 leading-relaxed"><span className="font-semibold text-green-700">Recovery tip:</span> {city.recovery}</p>
                    </div>
                  </div>
                </div>
              )

              const AttractionsPanel = (
                <div className="flex-1 space-y-3">
                  {city.attractions.map((att) => (
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
                <div key={city.city}>
                  {/* City number label */}
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
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Curated for post-procedure patients — beautiful, meaningful, and requiring minimal physical effort.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECOVERY_ACTIVITIES.map(({ icon: Icon, title, desc }) => (
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
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Real examples of how Sultan GHC patients combine treatment and travel in India.</p>
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Ready to plan your medical and travel itinerary?</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Our patient coordinators help you schedule hospital appointments, recovery accommodation, and sightseeing in a single seamless itinerary — so your trip to India is medically excellent and personally unforgettable.
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
