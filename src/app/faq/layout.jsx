// FAQ page metadata — separate from the client component page.jsx

export const metadata = {
  title: 'Frequently Asked Questions | Medical Tourism | Sultan GHC',
  description:
    'Answers to the most common questions American patients ask about medical tourism, Sultan GHC, treatment costs, JCI-accredited hospitals in India and Türkiye, visa requirements, the treatment process, and post-treatment follow-up.',
  keywords: [
    'medical tourism FAQ',
    'Sultan GHC frequently asked questions',
    'medical tourism USA questions',
    'JCI accredited hospitals India Türkiye',
    'medical tourism cost savings USA',
    'is medical tourism safe',
    'treatment abroad American patients',
    'medical tourism India FAQ',
    'medical tourism Türkiye FAQ',
    'healthcare abroad visa requirements',
    'how to get treatment abroad USA',
    'international patient services questions',
    'medical facilitator FAQ USA',
    'Sultan GHC how it works',
    'AEO FAQ medical tourism',
  ],
  openGraph: {
    title: 'Frequently Asked Questions | Sultan GHC Medical Tourism',
    description:
      'Everything American patients need to know about accessing world-class healthcare in India and Türkiye through Sultan GHC — costs, safety, hospitals, visas, and the full process.',
    url: 'https://www.sultanghc.com/faq',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [{ url: 'https://www.sultanghc.com/api/og?title=Frequently+Asked+Questions&desc=Everything+U.S.+patients+need+to+know+about+medical+tourism+in+India+%26+Türkiye.&cat=FAQ', width: 1200, height: 630, alt: 'Sultan GHC FAQ — Medical Tourism Questions Answered' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Sultan GHC — Medical Tourism for American Patients',
    description: 'Common questions about medical tourism costs, safety, JCI hospitals in India and Türkiye, and the Sultan GHC patient journey — answered.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/faq' },
}

export default function FaqLayout({ children }) {
  return children
}
