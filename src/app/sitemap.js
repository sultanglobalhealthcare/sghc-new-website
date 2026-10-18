// ─────────────────────────────────────────────────────────────────────────────
// Sultan GHC — XML Sitemap
// Auto-served by Next.js at: https://www.sultanghc.com/sitemap.xml
//
// SECTIONS
//   1. Core Pages          (10 URLs)
//   2. Treatment Pages     (20 URLs)
//   3. Hospitals & Network (10 URLs)
//   4. Legal Pages          (4 URLs)
//
// TOTAL: 44 URLs
//
// HOW TO UPDATE
//   When you add or edit a page, update its `lastModified` date below.
//   Format: 'YYYY-MM-DD'
// ─────────────────────────────────────────────────────────────────────────────

const BASE = 'https://www.sultanghc.com'

// Shorthand helper
const page = (path, lastModified, priority, changeFrequency = 'monthly') => ({
  url: `${BASE}${path}`,
  lastModified,
  changeFrequency,
  priority,
})

export default function sitemap() {
  return [

    // ── 1. CORE PAGES ─────────────────────────────────────────────────────────
    page('/',                               '2026-08-14', 1.00, 'weekly'),
    page('/treatments',                     '2026-08-22', 0.90, 'weekly'),
    page('/enquiry',                        '2026-09-11', 0.95),
    page('/contact',                        '2026-08-14', 0.90),
    page('/how-it-works',                   '2026-08-20', 0.85),
    page('/why-sultan-ghc',                 '2026-08-14', 0.85),
    page('/about',                          '2026-10-18', 0.80),
    page('/international-patient-services', '2026-10-18', 0.80),
    page('/our-team',                       '2026-10-05', 0.75),
    page('/faq',                            '2026-08-14', 0.80),

    // ── 2. TREATMENT PAGES ────────────────────────────────────────────────────
    page('/treatments/cardiology',                            '2026-10-01', 0.85),
    page('/treatments/oncology',                              '2026-10-01', 0.85),
    page('/treatments/neurology',                             '2026-09-18', 0.85),
    page('/treatments/neurosurgery',                          '2026-10-01', 0.85),
    page('/treatments/orthopedics',                           '2026-09-18', 0.85),
    page('/treatments/spine-sports-injury',                   '2026-09-18', 0.85),
    page('/treatments/gastroenterology',                      '2026-09-18', 0.85),
    page('/treatments/hepatology-liver-care',                 '2026-09-18', 0.85),
    page('/treatments/pulmonology',                           '2026-09-18', 0.85),
    page('/treatments/urology',                               '2026-09-18', 0.85),
    page('/treatments/obstetrics-gynaecology',                '2026-09-18', 0.85),
    page('/treatments/fertility-ivf',                         '2026-09-18', 0.85),
    page('/treatments/ophthalmology',                         '2026-09-18', 0.85),
    page('/treatments/ent-head-neck-surgery',                 '2026-09-18', 0.85),
    page('/treatments/bariatric-metabolic-surgery',           '2026-09-18', 0.85),
    page('/treatments/robotic-minimally-invasive',            '2026-10-01', 0.85),
    page('/treatments/organ-bone-marrow-transplant',          '2026-09-18', 0.85),
    page('/treatments/cosmetic-hair-transplant-plastic-surgery', '2026-09-18', 0.85),
    page('/treatments/dental-surgery-implant-dentistry',      '2026-09-18', 0.85),
    page('/treatments/wellness-ayurveda',                     '2026-09-18', 0.85),

    // ── 3. HOSPITALS, DESTINATIONS & NETWORK ──────────────────────────────────
    page('/hospitals/india',                        '2026-10-18', 0.85),
    page('/hospitals/turkey',                       '2026-08-25', 0.85),
    page('/destinations/india',                     '2026-09-10', 0.80),
    page('/destinations/india/tourist-attractions', '2026-09-10', 0.75),
    page('/destinations/turkey',                    '2026-09-10', 0.80),
    page('/destinations/turkey/tourist-attractions','2026-09-10', 0.75),
    page('/cost-savings/india',                     '2026-08-14', 0.80),
    page('/cost-savings/turkey',                    '2026-08-14', 0.80),
    page('/visa-guide/india',                       '2026-10-05', 0.75),
    page('/visa-guide/turkey',                      '2026-08-14', 0.75),

    // ── 4. LEGAL PAGES ────────────────────────────────────────────────────────
    page('/privacy-policy', '2026-08-14', 0.30, 'yearly'),
    page('/terms',          '2026-08-14', 0.30, 'yearly'),
    page('/cookie-policy',  '2026-08-04', 0.30, 'yearly'),
    page('/disclaimer',     '2026-08-04', 0.30, 'yearly'),

  ]
}
