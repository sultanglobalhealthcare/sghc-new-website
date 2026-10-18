// Next.js App Router sitemap — auto-served at /sitemap.xml
// lastModified dates reflect actual last commit date per page

const BASE = 'https://www.sultanghc.com'

export default function sitemap() {
  /** Core pages */
  const core = [
    { url: `${BASE}/`,                               lastModified: '2026-08-14', changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/treatments`,                     lastModified: '2026-08-22', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/enquiry`,                        lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/contact`,                        lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/how-it-works`,                   lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/why-sultan-ghc`,                 lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/about`,                          lastModified: '2026-10-18', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/international-patient-services`, lastModified: '2026-10-18', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/our-team`,                       lastModified: '2026-10-05', changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/faq`,                            lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.8 },
  ]

  /** Treatment pages */
  const treatments = [
    { url: `${BASE}/treatments/cardiology`,                           lastModified: '2026-10-01', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/oncology`,                             lastModified: '2026-10-01', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/neurology`,                            lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/neurosurgery`,                         lastModified: '2026-10-01', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/orthopedics`,                          lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/spine-sports-injury`,                  lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/gastroenterology`,                     lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/hepatology-liver-care`,                lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/pulmonology`,                          lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/urology`,                              lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/obstetrics-gynaecology`,               lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/fertility-ivf`,                        lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/ophthalmology`,                        lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/ent-head-neck-surgery`,                lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/bariatric-metabolic-surgery`,          lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/robotic-minimally-invasive`,           lastModified: '2026-10-01', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/organ-bone-marrow-transplant`,         lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/cosmetic-hair-transplant-plastic-surgery`, lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/dental-surgery-implant-dentistry`,     lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/treatments/wellness-ayurveda`,                    lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.85 },
  ]

  /** Destination & network pages */
  const destinations = [
    { url: `${BASE}/hospitals/india`,                         lastModified: '2026-10-18', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/hospitals/turkey`,                        lastModified: '2026-08-25', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/destinations/india`,                      lastModified: '2026-09-10', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/destinations/india/tourist-attractions`,  lastModified: '2026-09-10', changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/destinations/turkey`,                     lastModified: '2026-09-10', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/destinations/turkey/tourist-attractions`, lastModified: '2026-09-10', changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/cost-savings/india`,                      lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cost-savings/turkey`,                     lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/visa-guide/india`,                        lastModified: '2026-10-05', changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/visa-guide/turkey`,                       lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.75 },
  ]

  /** Legal & compliance pages */
  const legal = [
    { url: `${BASE}/privacy-policy`, lastModified: '2026-08-14', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`,          lastModified: '2026-08-14', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookie-policy`,  lastModified: '2026-08-04', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/disclaimer`,     lastModified: '2026-08-04', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return [...core, ...treatments, ...destinations, ...legal]
}
