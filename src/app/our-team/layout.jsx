export const metadata = {
  title: 'Our Medical Team | Specialist Doctors, Physiotherapists & Wellness Experts',
  description:
    'Meet the specialist doctors, physiotherapists, nutritionists, and wellness experts within the Sultan GHC clinical network across India and Turkey. JCI-accredited specialists with decades of international patient experience.',
  keywords: [
    'Sultan GHC doctors',
    'specialist doctors India Turkey',
    'JCI accredited specialists',
    'cardiologist India',
    'orthopedic surgeon Turkey',
    'oncologist India',
    'physiotherapist medical tourism',
    'international patient doctors',
    'medical team Sultan GHC',
    'best doctors India for Americans',
  ],
  openGraph: {
    title: 'Our Medical Team | Sultan GHC — Specialist Doctors in India & Turkey',
    description:
      'Explore our network of specialist doctors, physiotherapists, nutritionists, and wellness experts serving international patients across India and Turkey.',
    url: 'https://www.sultanghc.com/our-team',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: '/sghc-new-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sultan GHC Clinical Network — Specialist Doctors in India and Turkey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Medical Team | Sultan GHC',
    description:
      'JCI-accredited specialists in Cardiology, Oncology, Orthopedics, and more — serving U.S. patients across India and Turkey.',
    images: ['/sghc-new-logo.png'],
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/our-team',
  },
}

export default function OurTeamLayout({ children }) {
  return children
}
