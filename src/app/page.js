import LandingPage from "../landing/page";

export const metadata = {
  title: 'Sultan GHC | Trusted Medical Tourism Concierge for U.S. Patients — India & Turkey',
  description:
    'Sultan GHC connects U.S. patients with JCI-accredited hospitals and specialist doctors in India and Turkey. Save 60–80% on medical treatment costs. Free medical opinion, dedicated case managers, and end-to-end patient support.',
  keywords: [
    'medical tourism USA',
    'medical tourism company United States',
    'affordable healthcare India Turkey',
    'JCI accredited hospitals',
    'Sultan GHC',
    'healthcare concierge for Americans',
    'save on medical treatment abroad',
    'international patient coordinator',
    'free medical opinion USA',
    'medical travel from America',
  ],
  openGraph: {
    title: 'Sultan GHC | Trusted Medical Tourism Concierge for U.S. Patients',
    description:
      'Connect with JCI-accredited hospitals in India and Turkey. Save 60–80% on world-class treatment. Free medical opinion, dedicated case managers, and full end-to-end support.',
    url: 'https://www.sultanghc.com/',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: '/sghc-new-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sultan GHC — Medical Tourism Concierge for U.S. Patients',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sultan GHC | Medical Tourism Concierge — India & Turkey',
    description:
      'JCI-accredited hospitals, 60–80% savings, and a dedicated Case Manager. Trusted by U.S. patients seeking treatment in India and Turkey.',
    images: ['/sghc-new-logo.png'],
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/',
  },
};

export default function Home() {
  return <LandingPage />;
}


