// Next.js App Router sitemap — auto-served at /sitemap.xml
// Covers all 47 public pages on sultanghc.com

const BASE = 'https://www.sultanghc.com'

const TREATMENTS = [
  'cardiology',
  'oncology',
  'neurology',
  'neurosurgery',
  'orthopedics',
  'spine-sports-injury',
  'gastroenterology',
  'hepatology-liver-care',
  'pulmonology',
  'urology',
  'obstetrics-gynaecology',
  'fertility-ivf',
  'ophthalmology',
  'ent-head-neck-surgery',
  'bariatric-metabolic-surgery',
  'robotic-minimally-invasive',
  'organ-bone-marrow-transplant',
  'cosmetic-hair-transplant-plastic-surgery',
  'dental-surgery-implant-dentistry',
  'wellness-ayurveda',
]

export default function sitemap() {
  const now = new Date().toISOString()

  /** Core pages */
  const core = [
    { url: `${BASE}/`,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/treatments`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/enquiry`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/contact`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/how-it-works`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/why-sultan-ghc`,                lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/about`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/international-patient-services`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/our-team`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/faq`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  /** Treatment pages */
  const treatments = TREATMENTS.map((slug) => ({
    url: `${BASE}/treatments/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  /** Destination & network pages */
  const destinations = [
    { url: `${BASE}/hospitals/india`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/hospitals/turkey`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/destinations/india`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/destinations/india/tourist-attractions`,     lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/destinations/turkey`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/destinations/turkey/tourist-attractions`,    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/cost-savings/india`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cost-savings/turkey`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/visa-guide/india`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/visa-guide/turkey`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]

  /** Legal & compliance pages */
  const legal = [
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`,          lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookie-policy`,  lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/disclaimer`,     lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/accessibility`,  lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  return [...core, ...treatments, ...destinations, ...legal]
}
